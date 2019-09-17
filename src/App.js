import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/styles';

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

require('dotenv').config();

const App = () => {
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
