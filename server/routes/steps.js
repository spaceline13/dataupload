var router = require('express').Router();

//get steps
router.get('/', (req, res) => {
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

module.exports = router;