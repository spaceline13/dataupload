var router = require('express').Router();

// get properties
router.get('/', async (req, res) => {
    const { object } = req.query;
    const result = await fetch(`http://148.251.22.254:8080/mock/${object}.json`);
    if (result.ok) {
        const resultJson = await result.json();
        const { fields } = resultJson.schema;
        const props = Object.keys(fields).map(key => ({ label: key, value: key, required: fields[key].required }));
        const validations = props.filter(prop => prop.required).map(prop => prop.value);
        res.send({
            status: 'ok',
            data: {
                properties: props,
                validations: validations,
            },
        });
    } else {
        res.send({
            status: 'err',
            message: 'There was a problem trying to get the object fields (Server)',
        });
    }
});

module.exports = router;
