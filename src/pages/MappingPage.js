import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

import Mapper from '../components/organisms/Mapper';
import HeaderContentsFooterTemplate from '../components/templates/HeaderContentsFooterTemplate';
import { footstepValidation } from '../redux/selectors/stepsSelectors';
import { ROUTE_MAIN } from '../STEPS_and_routes';

const MappingPage = () => {
    const footstepsValid = useSelector(footstepValidation);
    if (footstepsValid)
        return (
            <HeaderContentsFooterTemplate>
                <Mapper />
            </HeaderContentsFooterTemplate>
        );
    else return <Redirect to={ROUTE_MAIN} />;
};

export default MappingPage;
