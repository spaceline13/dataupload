var router = require('express').Router();
const fs = require('fs');

router.post('/', (req, res) => {
    const csvString = req.body.csv;
    const jsonString = req.body.json;
    const file = jsonString.file;

    fs.writeFile('/var/www/html/uploadTool/data/' + 'test.json', jsonString, function(err) {
        if (err) {
            return console.log(err);
        }
        console.log('The json was saved!');
        fs.writeFile('/var/www/html/uploadTool/data/' + 'test.csv', csvString, function(err) {
            if (err) {
                return console.log(err);
            }
            console.log('The csv was saved!');
            fs.writeFile('/var/www/html/uploadTool/data/' + 'test.xlsx', file, function(err) {
                if (err) {
                    return console.log(err);
                }
                console.log('The file was saved!');
            });
        });
    });

    res.send({
        status: 'ok',
        csv: csvString,
    });
});

module.exports = router;
