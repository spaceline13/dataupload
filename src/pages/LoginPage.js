import React from 'react';
import { Redirect } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { setCommunity } from '../redux/actions/mainActions';
import { useAuth0 } from '../components/organisms/Auth0Wrapper';
import Header from '../components/organisms/Header';
import { ROUTE_HOME } from '../ROUTES';

const LoginPage = () => {
    const dispatch = useDispatch();
    const { loading, user } = useAuth0();
    //user['http://apiKey']
    if (user) {
        const community = user['http://community'];
        dispatch(setCommunity(community));
        return <Redirect to={ROUTE_HOME} />;
    } else if (loading) {
        return <center>Loading...</center>;
    } else {
        return <Header />;
    }
};

export default LoginPage;
