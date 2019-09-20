var router = require('express').Router();

//get user data
router.get('/', async (req, res) => {
    const { id } = req.query; //if id is given, the request is detailed for the specific id, otherwise detailed is set to false
    const apiKey = '84190bf3-5cf6-3d84-af87-e28d3ce22bc4';
    const results = await fetch('http://148.251.22.254:8080/search-api-1.0/search/', {
        method: 'POST',
        credentials: 'include',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            apikey: apiKey,
            detail: id ? true : false,
            entityType: 'internal_datasetORinternal_stream',
            strictQuery: id ? { id } : null,
        }),
    });
    if (results.ok) {
        const resultsJson = await results.json();
        res.send({
            status: 'ok',
            data: resultsJson.hits.hits.map(hit => hit['_source']),
        });
    } else {
        res.send({
            status: 'err',
            message: 'There was a problem trying to get the user data (Server)',
        });
    }
});

module.exports = router;
