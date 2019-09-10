var router = require('express').Router();

//get metadata
router.get('/metadataFields', (req, res) => {
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

module.exports = router;
