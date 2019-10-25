const express = require('express');
const app = express();
const port = 5151;
const session = require('express-session');
const cors = require('cors');

require('es6-promise').polyfill();
require('isomorphic-fetch');
require('dotenv').config();

var allowedOrigins = ['http://localhost:3006', 'https://upload.fodakai.com'];

//CORS
app.use(
    cors({
        origin: function(origin, callback){
            // allow requests with no origin
            // (like mobile apps or curl requests)
            if (!origin) return callback(null, true);
            if (allowedOrigins.indexOf(origin) === -1) {
                var msg = 'The CORS policy for this site does not allow access from the specified Origin.';
                return callback(new Error(msg), false);
            }
            return callback(null, true);
        },
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

//FILE ACCESS TO THE APP FOLDER (ex of use remote xlsx library call for web workers)
app.use('/static', express.static('../'));

//ROUTES
app.use('/theme', require('./routes/theme'));
app.use('/entranceScreen', require('./routes/entranceScreen'));
app.use('/validations', require('./routes/validations'));
app.use('/uploadedData', require('./routes/uploadedData'));
app.use('/steps', require('./routes/steps'));
app.use('/objectProperties', require('./routes/objectProperties'));
app.use('/metadataFields', require('./routes/metadataFields'));
app.use('/sendCSV', require('./routes/sendCSV'));
app.use('/removeItem', require('./routes/removeItem'));

//START SERVER
app.listen(port, () => console.log(`Upload Tool Server listening on port ${port}!`));
