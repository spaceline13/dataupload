import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/styles';
import { SnackbarProvider } from 'notistack';
import { AnimatedSwitch } from 'react-router-transition';
import styled from 'styled-components';

import SelectTypePage from './pages/SelectTypePage';
import FirstPage from './pages/FirstPage';
import SelectObjectsPage from './pages/SelectObjectsPage';
import { ROUTE_FINISHED, ROUTE_MAIN, ROUTE_MAPPING, ROUTE_METADATA, ROUTE_SELECT_OJECTS, ROUTE_SELECT_TYPE, ROUTE_UPLOAD_FILE, ROUTE_UPLOAD_STREAM } from './ROUTES';
import UploadFilePage from './pages/UploadFilePage';
import MetadataAndSendPage from './pages/MetadataAndSendPage';
import MappingPage from './pages/MappingPage';
import FinishedPage from './pages/FinishedPage';
import theme from './styles/theme';
import UploadStreamPage from './pages/UploadStreamPage';
import { bounceTransition, mapStyles } from './styles/pageAnimationConfig';

require('dotenv').config();

const Animation = styled(AnimatedSwitch)`
    position: relative;
    height: 100%;
    & > div {
        position: absolute;
        height:100%;
        width: 100%;
    }
`;

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <SnackbarProvider maxSnack={2}>
                {/* TO DO: USE Material UI CssBaseline here instead of body css in index html*/}
                <Router>
                    <Animation atEnter={bounceTransition.atEnter} atLeave={bounceTransition.atLeave} atActive={bounceTransition.atActive} mapStyles={mapStyles} className="route-wrapper">
                        <Route exact path={ROUTE_MAIN} component={FirstPage} />
                        <Route exact path={ROUTE_SELECT_TYPE} component={SelectTypePage} />
                        <Route exact path={ROUTE_SELECT_OJECTS} component={SelectObjectsPage} />
                        <Route exact path={ROUTE_UPLOAD_FILE} component={UploadFilePage} />
                        <Route exact path={ROUTE_UPLOAD_STREAM} component={UploadStreamPage} />
                        <Route exact path={ROUTE_MAPPING} component={MappingPage} />
                        <Route exact path={ROUTE_METADATA} component={MetadataAndSendPage} />
                        <Route exact path={ROUTE_FINISHED} component={FinishedPage} />
                    </Animation>
                </Router>
            </SnackbarProvider>
        </ThemeProvider>
    );
};

export default App;
