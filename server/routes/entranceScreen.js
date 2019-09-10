var router = require('express').Router();

//get first screen content
router.get('/', (req, res) => {
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

module.exports = router;