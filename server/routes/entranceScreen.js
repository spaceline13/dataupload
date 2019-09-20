var router = require('express').Router();

//get first screen content
router.get('/', (req, res) => {
    const noError = true; //later using the api will check for errors from the Data Platform
    if (noError) {
        res.send({
            status: 'ok',
            data: {
                logo: 'https://www.foodakai.com/wp-content/uploads/2017/07/Logo-full.png',
                title: 'Data Integration Tool',
                text:
                    'Using the Data Integration Tool, you can transform your data in a way that can be used from our services. You can start by clicking the [Add New] button.' +
                    'You can also check or remove previously uploaded data in the table shown bellow. For any questions regarding the sage of the tool please visit the website www.test.test or contact us.',
            },
        });
    } else {
        res.send({
            status: 'err',
            message: 'There was a problem trying to Run the Data Upload Tool (Server)',
        });
    }
});

module.exports = router;
