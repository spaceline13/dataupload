import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { useSnackbar } from 'notistack';

import Mapper from '../components/organisms/Mapper';
import HeaderContentsFooterTemplate from '../components/templates/HeaderContentsFooterTemplate';
import { footstepValidation, getActiveStep } from '../redux/selectors/stepsSelectors';
import { ROUTE_HOME } from '../ROUTES';
import { getCommunity, getUploadObjects } from '../redux/selectors/mainSelectors';
import { setProperties } from '../redux/actions/mappingActions';
import { setValidationsByStep } from '../redux/actions/validationActions';

const MappingPage = () => {
    const dispatch = useDispatch();
    const footstepsValid = useSelector(footstepValidation);
    const selectedObject = useSelector(getUploadObjects);
    const currentStep = useSelector(getActiveStep);
    const community = useSelector(getCommunity);
    const { enqueueSnackbar } = useSnackbar();
    useEffect(() => {
        //GET USER DATA
        (async () => {
            let response = await fetch(`${process.env.REACT_APP_SERVER_ENDPOINT}/objectProperties?object=${selectedObject}&community=${community}`, {
                method: 'GET',
                credentials: 'include',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
            });
            let json = await response.json();
            if (json.status === 'ok') {
                dispatch(setProperties(json.data.properties));
                dispatch(setValidationsByStep(json.data.validations, currentStep.name));
            } else {
                const { message } = json;
                enqueueSnackbar(message, { variant: 'error', autoHideDuration: 5000 });
            }
        })();
    }, []);

    if (footstepsValid) {
        return (
            <HeaderContentsFooterTemplate>
                <Mapper />
            </HeaderContentsFooterTemplate>
        );
    } else {
        return <Redirect to={ROUTE_HOME} />;
    }
};

export default MappingPage;
