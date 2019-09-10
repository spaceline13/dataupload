import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/styles';
import { useDispatch } from 'react-redux';

import SelectTypePage from './pages/SelectTypePage';
import FirstPage from './pages/FirstPage';
import SelectObjectsPage from './pages/SelectObjectsPage';
import { ROUTE_FINISHED, ROUTE_MAIN, ROUTE_MAPPING, ROUTE_METADATA, ROUTE_SELECT_OJECTS, ROUTE_SELECT_TYPE, ROUTE_UPLOAD_FILE, ROUTE_UPLOAD_STREAM, STEPS } from './STEPS_and_routes';
import { setFileSteps, setSteps, setStreamSteps } from './redux/actions/stepsActions';
import UploadFilePage from './pages/UploadFilePage';
import MetadataAndSendPage from './pages/MetadataAndSendPage';
import MappingPage from './pages/MappingPage';
import FinishedPage from './pages/FinishedPage';
import theme from './styles/theme';
import UploadStreamPage from './pages/UploadStreamPage';

require('dotenv').config();

const App = () => {
    const dispatch = useDispatch();

    //GET STEPS
    (async () => {
        let response = await fetch(`${process.env.REACT_APP_SERVER_ENDPOINT}/steps`, {
            method: 'GET',
            credentials: 'include',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
        });
        let json = await response.json();
        if (json.status === 'ok') {
            dispatch(setSteps(json.data.fileSteps));
            dispatch(setFileSteps(json.data.fileSteps));
            dispatch(setStreamSteps(json.data.streamSteps));
        }
    })();

    return (
        <ThemeProvider theme={theme}>
            {/* TO DO: USE Material UI CssBaseline here instead of body css in index html*/}
            <Router>
                <Route exact path={ROUTE_MAIN} component={FirstPage} />
                <Route exact path={ROUTE_SELECT_TYPE} component={SelectTypePage} />
                <Route exact path={ROUTE_SELECT_OJECTS} component={SelectObjectsPage} />
                <Route exact path={ROUTE_UPLOAD_FILE} component={UploadFilePage} />
                <Route exact path={ROUTE_UPLOAD_STREAM} component={UploadStreamPage} />
                <Route exact path={ROUTE_MAPPING} component={MappingPage} />
                <Route exact path={ROUTE_METADATA} component={MetadataAndSendPage} />
                <Route exact path={ROUTE_FINISHED} component={FinishedPage} />
            </Router>
        </ThemeProvider>
    );
};

export default App;
