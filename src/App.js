import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/styles';
import { useDispatch } from 'react-redux';

import SelectTypePage from './pages/SelectTypePage';
import MainPage from './pages/MainPage';
import SelectObjectsPage from './pages/SelectObjectsPage';
import { ROUTE_FINISHED, ROUTE_MAIN, ROUTE_MAPPING, ROUTE_METADATA, ROUTE_SELECT_OJECTS, ROUTE_SELECT_TYPE, ROUTE_UPLOAD_FILE, STEPS } from './constants';
import { setSteps } from './redux/actions/stepsActions';
import UploadFilePage from './pages/UploadFilePage';
import MetadataAndSendPage from './pages/MetadataAndSendPage';
import MappingPage from './pages/MappingPage';
import FinishedPage from './pages/FinishedPage';
import theme from './styles/theme';

const App = () => {
    const dispatch = useDispatch();
    const getSteps = () => {
        const steps = STEPS;
        dispatch(setSteps(steps));
    };
    getSteps();
    return (
        <ThemeProvider theme={theme}>
            {/* TO DO: USE Material UI CssBaseline here instead of body css in index html*/}
            <Router>
                <Route exact path={ROUTE_MAIN} component={MainPage} />
                <Route exact path={ROUTE_SELECT_TYPE} component={SelectTypePage} />
                <Route exact path={ROUTE_SELECT_OJECTS} component={SelectObjectsPage} />
                <Route exact path={ROUTE_UPLOAD_FILE} component={UploadFilePage} />
                <Route exact path={ROUTE_MAPPING} component={MappingPage} />
                <Route exact path={ROUTE_METADATA} component={MetadataAndSendPage} />
                <Route exact path={ROUTE_FINISHED} component={FinishedPage} />
            </Router>
        </ThemeProvider>
    );
};

export default App;
