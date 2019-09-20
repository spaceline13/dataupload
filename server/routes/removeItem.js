var router = require('express').Router();

//get user data
router.delete('/', async (req, res) => {
    const { id } = req.query; //if id is given, the request is detailed for the specific id, otherwise detailed is set to false
    const apiKey = '84190bf3-5cf6-3d84-af87-e28d3ce22bc4';
    const results = await fetch(`http://148.251.22.254:8080/schema-api-1.0/entity/delete?apikey=${apiKey}&id=${id}`, {
        method: 'DELETE',
        credentials: 'include',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
    });
    if (results.ok) {
        res.send({
            status: 'ok',
        });
    } else {
        res.send({
            status: 'err',
            message: 'There was a problem trying to delete the item (Server)',
        });
    }
});

module.exports = router;
