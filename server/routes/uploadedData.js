var router = require('express').Router();

//get user data
router.get('/', (req, res) => {
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

module.exports = router;
