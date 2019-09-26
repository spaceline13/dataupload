import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/styles';
import { SnackbarProvider } from 'notistack';
import { AnimatedSwitch } from 'react-router-transition';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import SelectTypePage from './pages/SelectTypePage';
import HomePage from './pages/HomePage';
import SelectObjectsPage from './pages/SelectObjectsPage';
import { ROUTE_FINISHED, ROUTE_HOME, ROUTE_LOGIN, ROUTE_MAPPING, ROUTE_METADATA, ROUTE_SELECT_OJECTS, ROUTE_SELECT_TYPE, ROUTE_UPLOAD_FILE, ROUTE_UPLOAD_STREAM } from './ROUTES';
import UploadFilePage from './pages/UploadFilePage';
import MetadataAndSendPage from './pages/MetadataAndSendPage';
import MappingPage from './pages/MappingPage';
import FinishedPage from './pages/FinishedPage';
import theme from './styles/theme';
import UploadStreamPage from './pages/UploadStreamPage';
import { bounceTransition, mapStyles } from './styles/pageAnimationConfig';
import { getTheme } from './redux/selectors/mainSelectors';
import { Auth0Provider } from './components/organisms/Auth0Wrapper';
import PrivateRoute from './components/molecules/PrivateRoute';
import LoginPage from './pages/LoginPage';

require('dotenv').config();
// page animations wraper
const Animation = styled(AnimatedSwitch)`
    position: relative;
    height: 100%;
    & > div {
        position: absolute;
        height: 100%;
        width: 100%;
    }
`;
// A function that routes the user to the right place after login
const onRedirectCallback = appState => {
    window.history.replaceState({}, document.title, appState && appState.targetUrl ? appState.targetUrl : window.location.pathname);
};
const App = () => {
    const personalizedTheme = useSelector(getTheme);
    return (
        <Auth0Provider
            domain={process.env.REACT_APP_AUTH0_DOMAIN}
            client_id={process.env.REACT_APP_AUTH0_ID}
            redirect_uri={`${window.location.origin}${ROUTE_HOME}`}
            onRedirectCallback={onRedirectCallback}>
            <ThemeProvider theme={personalizedTheme ? theme(personalizedTheme) : null}>
                <SnackbarProvider maxSnack={2}>
                    {/* TO DO: USE Material UI CssBaseline here instead of body css in index html*/}
                    <Router>
                        <Animation atEnter={bounceTransition.atEnter} atLeave={bounceTransition.atLeave} atActive={bounceTransition.atActive} mapStyles={mapStyles} className="route-wrapper">
                            <Route exact path={ROUTE_LOGIN} component={LoginPage} />
                            <PrivateRoute exact path={ROUTE_HOME} component={HomePage} />
                            <PrivateRoute exact path={ROUTE_SELECT_TYPE} component={SelectTypePage} />
                            <PrivateRoute exact path={ROUTE_SELECT_OJECTS} component={SelectObjectsPage} />
                            <PrivateRoute exact path={ROUTE_UPLOAD_FILE} component={UploadFilePage} />
                            <PrivateRoute exact path={ROUTE_UPLOAD_STREAM} component={UploadStreamPage} />
                            <PrivateRoute exact path={ROUTE_MAPPING} component={MappingPage} />
                            <PrivateRoute exact path={ROUTE_METADATA} component={MetadataAndSendPage} />
                            <PrivateRoute exact path={ROUTE_FINISHED} component={FinishedPage} />
                        </Animation>
                    </Router>
                </SnackbarProvider>
            </ThemeProvider>
        </Auth0Provider>
    );
};

export default App;
