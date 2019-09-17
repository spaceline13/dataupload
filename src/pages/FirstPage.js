import React, {useEffect, useState} from 'react';
import Typography from '@material-ui/core/Typography/Typography';
import Box from '@material-ui/core/Box/Box';
import TableRow from '@material-ui/core/TableRow/TableRow';
import TableCell from '@material-ui/core/TableCell/TableCell';
import TableBody from '@material-ui/core/TableBody/TableBody';
import Table from '@material-ui/core/Table/Table';
import TableHead from '@material-ui/core/TableHead/TableHead';
import RemoveIcon from '@material-ui/icons/Delete';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button/Button';
import { useDispatch, useSelector } from 'react-redux';

import FancyButton from '../components/atoms/FancyButton';
import LogoContentsTemplate from '../components/templates/LogoContentsTemplate';
import { getStepsList } from '../redux/selectors/stepsSelectors';
import { addFootstep, setFileSteps, setSteps, setStreamSteps } from '../redux/actions/stepsActions';
import { setValidations } from '../redux/actions/validationActions';

const FirstPage = ({ history }) => {
    const dispatch = useDispatch();
    const steps = useSelector(getStepsList);

    const [rows, setRows] = useState([]);
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');
    const [logo, setLogo] = useState();

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
            }
        })();

        //GET USER DATA
        (async () => {
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
            }
        })();
    }, []);

    return (
        <LogoContentsTemplate logo={logo}>
            <Box marginTop={'10vh'} />
            <Typography align={'center'} variant="h1" component="h2">
                {title}
            </Typography>
            <Box marginTop={'8vh'} />
            <Typography align={'justify'}>
                {text}
            </Typography>
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
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell align="center">Type</TableCell>
                        <TableCell align="center">Size</TableCell>
                        <TableCell align="center">Created</TableCell>
                        <TableCell align="right">Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map(row => (
                        <TableRow key={row.name}>
                            <TableCell component="th" scope="row">
                                {row.name}
                            </TableCell>
                            <TableCell align="center">{row.type}</TableCell>
                            <TableCell align="center">{row.size}</TableCell>
                            <TableCell align="center">{row.created}</TableCell>
                            <TableCell align="right">
                                <Button color={'primary'} variant={'contained'}>
                                    <RemoveIcon/>
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>

            <Box marginTop={'6vh'} />
        </LogoContentsTemplate>
    );
};

FirstPage.propTypes = {
    history: PropTypes.object,
};
export default FirstPage;
