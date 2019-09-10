var router = require('express').Router();

router.post('/sendCSV', (req, res) => {
    const csv = req.body.csv;
    const json = req.body.json;
    console.log()
    res.send({
        status: 'ok',
        csv: csv,
    });
});

module.exports = router;
