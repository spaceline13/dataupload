import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

import Mapper from '../components/organisms/Mapper';
import HeaderContentsFooterTemplate from '../components/templates/HeaderContentsFooterTemplate';
import { footstepValidation } from '../redux/selectors/stepsSelectors';
import { ROUTE_MAIN } from '../STEPS_and_routes';
import { getUploadObjects } from '../redux/selectors/mainSelectors';
import { setProperties } from '../redux/actions/mappingActions';

const MappingPage = () => {
    const dispatch = useDispatch();
    const footstepsValid = useSelector(footstepValidation);
    const selectedObject = useSelector(getUploadObjects);
    useEffect(() => {
        //GET USER DATA
        (async () => {
            let response = await fetch(`${process.env.REACT_APP_SERVER_ENDPOINT}/objectProperties?object=${selectedObject}`, {
                method: 'GET',
                credentials: 'include',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
            });
            let json = await response.json();
            if (json.status === 'ok') {
                dispatch(setProperties(json.data));
            }
        })();
    }, [selectedObject]);

    if (footstepsValid)
        return (
            <HeaderContentsFooterTemplate>
                <Mapper />
            </HeaderContentsFooterTemplate>
        );
    else return <Redirect to={ROUTE_MAIN} />;
};

export default MappingPage;
