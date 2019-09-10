var router = require('express').Router();

router.post('/sendCSV', (req, res) => {
    const csv = req.body.csv;
    res.send({
        status: 'ok',
        csv: csv,
    });
});

module.exports = router;
