var router = require('express').Router();

//get metadata
router.get('/', async (req, res) => {
    let metadata = [];
    let response = await fetch(`http://148.251.22.254:8080/mock/metadata.json`, {
        method: 'GET',
        credentials: 'include',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
    });
    let jsonResponse = await response.json();
    if (jsonResponse.entityType === 'metadata') {
        let fields = jsonResponse.fields;
        metadata = fields.map(field => ({ name: field.name, required: true, label: field.name, type: 'TextField' }));
    }
    res.send({
        status: 'ok',
        data: metadata,
    });
});

module.exports = router;
