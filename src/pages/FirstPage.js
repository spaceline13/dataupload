import React, { useEffect, useState } from 'react';
import Typography from '@material-ui/core/Typography/Typography';
import Box from '@material-ui/core/Box/Box';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import fileDownload from 'js-file-download';
import { useSnackbar } from 'notistack';

import FancyButton from '../components/atoms/FancyButton';
import LogoContentsTemplate from '../components/templates/LogoContentsTemplate';
import { getStepsList } from '../redux/selectors/stepsSelectors';
import { addFootstep, setFileSteps, setSteps, setStreamSteps } from '../redux/actions/stepsActions';
import { setValidations } from '../redux/actions/validationActions';
import FileManager from '../components/organisms/FileManager';
import Loader from '../components/molecules/Loader';

const FirstPage = ({ history }) => {
    const dispatch = useDispatch();
    const steps = useSelector(getStepsList);

    const [userDataLoading, setUserDataLoading] = useState(false);
    const [rows, setRows] = useState([]);
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');
    const [logo, setLogo] = useState();

    const { enqueueSnackbar } = useSnackbar();

    useEffect(() => {
        //GET FIRST SCREEN DATA
        (async () => {
            let response = await fetch(`${process.env.REACT_APP_SERVER_ENDPOINT}/entranceScreen`, {
                method: 'GET',
                credentials: 'include',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
            });
            let json = await response.json();
            if (json.status === 'ok') {
                setLogo(json.data.logo);
                setTitle(json.data.title);
                setText(json.data.text);
            } else {
                const { message } = json;
                enqueueSnackbar(message, { variant: 'error', autoHideDuration: 5000 });
            }
        })();

        //GET USER DATA
        (async () => {
            setUserDataLoading(true);
            let response = await fetch(`${process.env.REACT_APP_SERVER_ENDPOINT}/uploadedData`, {
                method: 'GET',
                credentials: 'include',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
            });
            let json = await response.json();
            if (json.status === 'ok') {
                setRows(json.data);
                setUserDataLoading(false);
            } else {
                const { message } = json;
                enqueueSnackbar(message, { variant: 'error', autoHideDuration: 5000 });
            }
        })();

        //GET VALIDATORS
        const validations = {
            type: {
                state: 'main',
                requiredFields: ['type'],
            },
            objects: {
                state: 'main',
                requiredFields: ['objects'],
            },
            file: {
                state: 'resource',
                requiredFields: ['file'],
            },
            mapping: {
                state: 'mapping',
                requiredFields: ['name'],
            },
            metadata: {
                state: 'main',
                requiredFields: ['metadata'],
            },
        };
        dispatch(setValidations(validations));

        //GET STEPS
        (async () => {
            let response = await fetch(`${process.env.REACT_APP_SERVER_ENDPOINT}/steps`, {
                method: 'GET',
                credentials: 'include',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
            });
            let json = await response.json();
            if (json.status === 'ok') {
                dispatch(setSteps(json.data.fileSteps));
                dispatch(setFileSteps(json.data.fileSteps));
                dispatch(setStreamSteps(json.data.streamSteps));
            } else {
                const { message } = json;
                enqueueSnackbar(message, { variant: 'error', autoHideDuration: 5000 });
            }
        })();
    }, [dispatch]);
    const handleDatasetDownload = async (id, callback) => {
        let response = await fetch(`${process.env.REACT_APP_SERVER_ENDPOINT}/uploadedData?id=${id}`, {
            method: 'GET',
            credentials: 'include',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
        });
        let json = await response.json();
        if (json.status === 'ok') {
            if (json.data.length > 0) {
                const { information } = json.data[0];
                const { csv, originalname } = information;
                const filename = originalname.substring(0, originalname.length - 4) + '.csv';
                var csvBlob = new Blob([csv], { type: 'text/csv' });
                fileDownload(csvBlob, filename);
                if (callback) callback(); //eg. stop loader
            } else {
                const message = 'There was a problem trying to download data (Client)';
                enqueueSnackbar(message, { variant: 'error', autoHideDuration: 5000 });
            }
        } else {
            const { message } = json;
            enqueueSnackbar(message, { variant: 'error', autoHideDuration: 5000 });
        }
    };
    const handleDelete = async (id) => {
        let response = await fetch(`${process.env.REACT_APP_SERVER_ENDPOINT}/removeItem?id=${id}`, {
            method: 'DELETE',
            credentials: 'include',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
        });
        let json = await response.json();
        if (json.status === 'ok') {
            setRows(rows.filter(row => row.id !== id));
        }
    }
    return (
        <LogoContentsTemplate logo={logo}>
            <Box marginTop={'10vh'} />
            <Typography align={'center'} variant="h1" component="h2">
                {title}
            </Typography>
            <Box marginTop={'8vh'} />
            <Typography align={'justify'}>{text}</Typography>
            <Box marginTop={'8vh'} />
            <center>
                <FancyButton
                    onClick={() => {
                        dispatch(addFootstep(-1));
                        history.push(steps[0].route);
                    }}>
                    <span>Add New</span>
                </FancyButton>
            </center>
            <Box marginTop={'8vh'} />
            {userDataLoading ? <Loader /> : <FileManager rows={rows} handleDatasetDownload={handleDatasetDownload} handleDelete={handleDelete} />}
            <Box marginTop={'6vh'} />
        </LogoContentsTemplate>
    );
};

FirstPage.propTypes = {
    history: PropTypes.object,
};
export default FirstPage;
