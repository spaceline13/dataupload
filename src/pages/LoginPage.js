import React from 'react';
import { Redirect } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Box from '@material-ui/core/Box';

import { setCommunity } from '../redux/actions/mainActions';
import { useAuth0 } from '../components/organisms/Auth0Wrapper';
import { ROUTE_HOME } from '../ROUTES';
import LogoContentsTemplate from '../components/templates/LogoContentsTemplate';

const LoginPage = () => {
    const dispatch = useDispatch();
    const { loading, user, loginWithRedirect } = useAuth0();
    //user['http://apiKey']
    if (user) {
        const community = user['http://community'];
        dispatch(setCommunity(community));
        return <Redirect to={ROUTE_HOME} />;
    } else if (loading) {
        return <center>Loading...</center>;
    } else {
        return (
            <LogoContentsTemplate>
                <center>
                    <img style={{ width: '180px' }} src={'http://dev.k2p.agroknow.com/img/DataIntegrationToolLogo.png'} />
                    <Box>
                        Please{' '}
                        <a style={{ fontWeight: 'bold', color: '#5996a0', cursor: 'pointer' }} onClick={() => loginWithRedirect({})}>
                            Log In
                        </a>{' '}
                        to enter the tool
                    </Box>
                </center>
            </LogoContentsTemplate>
        );
    }
};

export default LoginPage;
