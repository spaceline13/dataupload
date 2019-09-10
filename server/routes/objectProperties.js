var router = require('express').Router();

// get properties
router.get('/', (req, res) => {
    const object = req.query.object;
    let props = [];
    switch (object) {
        case 'incidents': {
            props = [{ label: 'Name', value: 'name' }, { label: 'Product', value: 'product' }, { label: 'Country', value: 'country' }, { label: 'Date', value: 'date' }];
            break;
        }
        case 'companies': {
            props = [{ label: 'Name', value: 'name' }, { label: 'Subject', value: 'subject' }, { label: 'Country', value: 'country' }, { label: 'Size', value: 'size' }];
            break;
        }
        case 'prices': {
            props = [{ label: 'Product', value: 'product' }, { label: 'Price', value: 'price' }, { label: 'Currency', value: 'currency' }, { label: 'Date', value: 'date' }];
            break;
        }
        case 'extra': {
            props = [{ label: 'Name', value: 'name' }, { label: 'Subject', value: 'subject' }, { label: 'Extra', value: 'extra' }, { label: 'Date', value: 'date' }];
            break;
        }
        default: {
            break;
        }
    }
    res.send({
        status: 'ok',
        data: props,
    });
});

module.exports = router;
