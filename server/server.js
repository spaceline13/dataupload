const express = require('express');
const app = express();
const port = 5151;
const session = require('express-session');
const cors = require('cors');
require('es6-promise').polyfill();
require('isomorphic-fetch');
require('dotenv').config();

//CORS
app.use(
    cors({
        origin: ['http://dev.k2p.agroknow.com:3006', 'http://localhost:3006'], //the port my react app is running on.
        credentials: true,
    }),
);

//SESSION
app.use(
    session({
        secret: 'anewsec',
    }),
);

//JSON RESPONSE
app.use(express.json({ limit: '50mb' }));

//URLENCODED
app.use(express.urlencoded({ limit: '50mb' }));

//ROUTES
app.use('/entranceScreen', require('./routes/entranceScreen'));
app.use('/uploadedData', require('./routes/uploadedData'));
app.use('/steps', require('./routes/steps'));
app.use('/objectProperties', require('./routes/objectProperties'));
app.use('/metadataFields', require('./routes/metadataFields'));
app.use('/sendCSV', require('./routes/sendCSV'));
app.use('/removeItem', require('./routes/removeItem'));

//START SERVER
app.listen(port, () => console.log(`Upload Tool Server listening on port ${port}!`));
