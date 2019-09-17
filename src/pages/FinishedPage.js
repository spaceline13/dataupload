import React from 'react';
import Button from '@material-ui/core/Button/Button';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

import HeaderContentsFooterTemplate from '../components/templates/HeaderContentsFooterTemplate';
import { footstepValidation } from '../redux/selectors/stepsSelectors';
import { ROUTE_MAIN } from '../ROUTES';

const FinishedPage = () => {
    const footstepsValid = useSelector(footstepValidation);
    if (footstepsValid)
        return (
            <HeaderContentsFooterTemplate>
                <center>
                    <Button
                        variant={'outlined'}
                        onClick={() => {
                            window.location.href = '/';
                        }}>
                        Go to Home Page
                    </Button>
                </center>
            </HeaderContentsFooterTemplate>
        );
    else return <Redirect to={ROUTE_MAIN} />;
};

export default FinishedPage;
