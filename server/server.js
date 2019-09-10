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
        origin: ['http://dev.k2p.agroknow.com:3006','http://localhost:3006'], //the port my react app is running on.
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
app.use(express.json());

//URLENCODED
app.use(express.urlencoded());

//get first screen content

app.get('/entranceScreen', (req, res) => {
    res.send({
        status: 'ok',
        data: {
            logo: 'https://www.foodakai.com/wp-content/uploads/2017/07/Logo-full.png',
            title: 'Data Upload Tool',
            text:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco\n' +
                '                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat\n' +
                '                cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        },
    });
});

//get user data
app.get('/uploadedData', (req, res) => {
    res.send({
        status: 'ok',
        data: [
            { name: 'My first Upload', type: 'file', size: '20MB', created: '20/04/2018' },
            { name: 'My second Upload', type: 'file', size: '20MB', created: '20/04/2018' },
            { name: 'Another file', type: 'file', size: '20MB', created: '20/04/2018' },
            { name: 'My sensors', type: 'stream', size: '-', created: '20/04/2018' },
        ],
    });
});

//get steps
app.get('/steps', (req, res) => {
    res.send({
        status: 'ok',
        data: {
            fileSteps: [
                {
                    index: 0,
                    name: 'type',
                    text: 'Select Type of Data',
                    title: 'What would you like to import?',
                    subtitle: 'Starting, please choose the type of data you want to upload. Is it a data file or a stream like a sensor API?',
                    infobox: 'Need help getting started? View import guide',
                    selectables: [
                        {
                            name: 'File from computer',
                            value: 'file',
                            text: 'Upload any CSV, XLS, or XLSX files with entity information.',
                            image: 'https://static.hsappstatic.net/ui-images/static-2.312/optimized/import-file.svg',
                        },
                        {
                            name: 'Stream from an endpoint',
                            value: 'stream',
                            text: 'Import a URL pointing to a data stream (IOT sensors, data APIs etc.)',
                            image: 'https://static.hsappstatic.net/ui-images/static-2.312/optimized/import-opt-out-list.svg',
                        },
                    ],
                    route: '/type',
                },
                {
                    index: 1,
                    name: 'objects',
                    text: 'Select Kind of Objects Containing',
                    title: 'What kind of objects do you like to import?',
                    subtitle: 'In Agroknow, objects are data types used to organize your info. Common objects are incidents, companies, prices and more.',
                    infobox: null,
                    selectables: [
                        {
                            name: 'Incidents',
                            value: 'incidents',
                            text: 'Incidents that have happened to various kinds of food.',
                            image: 'https://static.hsappstatic.net/ui-images/static-2.313/optimized/contacts.svg',
                        },
                        {
                            name: 'Companies',
                            value: 'companies',
                            text: 'The businesses you work with, which are commonly called accounts or organizations.',
                            image: 'https://static.hsappstatic.net/ui-images/static-2.313/optimized/companies.svg',
                        },
                        {
                            name: 'Prices',
                            value: 'prices',
                            text: 'Current price for specific products.',
                            image: 'https://static.hsappstatic.net/ui-images/static-2.313/optimized/deals-small.svg',
                        },
                        {
                            name: 'Extra Info',
                            value: 'extra',
                            text: 'Anything that cannot be described by the categories listed.',
                            image: 'https://static.hsappstatic.net/ui-images/static-2.314/optimized/ticket-small.svg',
                        },
                    ],
                    route: '/objects',
                },
                {
                    index: 2,
                    name: 'upload',
                    text: 'Upload Data',
                    title: 'Upload your file',
                    subtitle: 'Before you upload your file, please make sure it is ready to be imported.',
                    infobox: 'If the file contains tabular data, the first row must have unique headers to distinguish the different columns.',
                    route: '/upload',
                },
                {
                    index: 3,
                    name: 'mapping',
                    text: 'Map the Fields',
                    title: 'Map columns in your file to object properties',
                    subtitle:
                        "Each column header below should be mapped to a property in our Data Platform. Some of these may have already been mapped based on their names. Anything that hasn't been mapped yet can be manually mapped to a property with the dropdown menu.",
                    infobox: null,
                    route: '/mapping',
                },
                {
                    index: 4,
                    name: 'metadata',
                    text: 'Add Metadata',
                    title: 'Add some final useful information',
                    subtitle: 'Adding some final information about your dataset, will help us manage it better.',
                    infobox: 'What does this mean?',
                    route: '/metadata',
                },
                {
                    index: 5,
                    name: 'finished',
                    text: 'Finished',
                    title: 'Congratulations! Your data have been added successfully to the Data Platform!',
                    subtitle: 'Thank you for using the Data Upload Tool!',
                    infobox: null,
                    route: '/finished',
                },
            ],
            streamSteps: [
                {
                    index: 0,
                    name: 'type',
                    text: 'Select Type of Data',
                    title: 'What would you like to import?',
                    subtitle: 'Starting, please choose the type of data you want to upload. Is it a data file or a stream like a sensor API?',
                    infobox: 'Need help getting started? View import guide',
                    selectables: [
                        {
                            name: 'File from computer',
                            value: 'file',
                            text: 'Upload any CSV, XLS, or XLSX files with entity information.',
                            image: 'https://static.hsappstatic.net/ui-images/static-2.312/optimized/import-file.svg',
                        },
                        {
                            name: 'Stream from an endpoint',
                            value: 'stream',
                            text: 'Import a URL pointing to a data stream (IOT sensors, data APIs etc.)',
                            image: 'https://static.hsappstatic.net/ui-images/static-2.312/optimized/import-opt-out-list.svg',
                        },
                    ],
                    route: '/type',
                },
                {
                    index: 1,
                    name: 'stream',
                    text: 'Set Stream Endpoint',
                    title: 'Set your stream endpoint',
                    subtitle: 'Please make sure to enter a valid url to the field bellow.',
                    infobox: null,
                    route: '/stream',
                },
                {
                    index: 2,
                    name: 'metadata',
                    text: 'Add Metadata',
                    title: 'Add some final useful information',
                    subtitle: 'Adding some final information about your dataset, will help us manage it better.',
                    infobox: 'What does this mean?',
                    route: '/metadata',
                },
                {
                    index: 3,
                    name: 'finished',
                    text: 'Finished',
                    title: 'Congratulations! Your data have been added successfully to the Data Platform!',
                    subtitle: 'Thank you for using the Data Upload Tool!',
                    infobox: null,
                    route: '/finished',
                },
            ],
        },
    });
});

// get properties
app.get('/objectProperties', (req, res) => {
    const object = req.query.object;
    let props = [];
    switch (object) {
        case 'incidents': {
            props = [{ label: 'Name', value: 'name' }, { label: 'Product', value: 'product' }, { label: 'Country', value: 'country' }, { label: 'Date', value: 'date' }];
            break;
        }
        case 'companies': {
            props = [{ label: 'Name', value: 'name' }, { label: 'Subject', value: 'subject' }, { label: 'Country', value: 'country' }, { label: 'Size', value: 'size' }];
            break;
        }
        case 'prices': {
            props = [{ label: 'Product', value: 'product' }, { label: 'Price', value: 'price' }, { label: 'Currency', value: 'currency' }, { label: 'Date', value: 'date' }];
            break;
        }
        case 'extra': {
            props = [{ label: 'Name', value: 'name' }, { label: 'Subject', value: 'subject' }, { label: 'Extra', value: 'extra' }, { label: 'Date', value: 'date' }];
            break;
        }
        default: {
            break;
        }
    }
    res.send({
        status: 'ok',
        data: props,
    });
});

//get metadata
app.get('/metadataFields', (req, res) => {
    res.send({
        status: 'ok',
        data: [
            { name: 'firstName', type: 'TextField', label: 'First Name' },
            { name: 'lastName', type: 'TextField', label: 'Last Name' },
            { name: 'email', type: 'TextField', label: 'Email' },
            {
                name: 'a sample radio',
                type: 'RadioButton',
                label: 'Test',
                items: [{ value: 'test1', name: 'Test1' }, { value: 'test2', name: 'Test2' }, { value: 'test3', name: 'Test3' }],
            },
            {
                name: 'usage',
                type: 'SelectBox',
                label: 'I want to upload my data for',
                items: [
                    { value: '', name: '' },
                    { value: 'personal', name: 'Personal Use' },
                    { value: 'foodakai', name: 'Upload to Foodakai Platform' },
                    { value: 'global', name: 'Available to all Agroknow apps' },
                ],
            },
            { name: 'agree', type: 'Checkbox', label: 'I agree with the terms' },
            { name: 'description', type: 'TextField', label: 'Description' },
        ],
    });
});

app.post('/sendCSV', (req, res) => {
    const csv = req.body.csv;
    res.send({
        status: 'ok',
        csv: csv,
    });
});

//set the port and listen
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
