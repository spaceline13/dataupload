import React from 'react';
import { Redirect } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setCommunity } from '../redux/actions/mainActions';
import { ROUTE_HOME } from '../ROUTES';

const LoginPage = () => {
    const dispatch = useDispatch();
    const community = 'foodakai';
    dispatch(setCommunity(community));
    return <Redirect to={ROUTE_HOME} />;
};

export default LoginPage;
