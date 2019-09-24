import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

import HeaderContentsFooterTemplate from '../components/templates/HeaderContentsFooterTemplate';
import TypeSelector from '../components/organisms/TypeSelector';
import { footstepValidation } from '../redux/selectors/stepsSelectors';
import { ROUTE_MAIN } from '../ROUTES';
import { getCommunity } from '../redux/selectors/mainSelectors';

const SelectTypePage = () => {
    const footstepsValid = useSelector(footstepValidation);
    const community = useSelector(getCommunity);
    if (footstepsValid)
        return (
            <HeaderContentsFooterTemplate>
                <TypeSelector />
            </HeaderContentsFooterTemplate>
        );
    else return <Redirect to={`${ROUTE_MAIN}/${community}`} />;
};

export default SelectTypePage;
