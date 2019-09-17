var router = require('express').Router();

const fs = require('fs');

router.post('/', async (req, res) => {
    const csvString = req.body.csv;
    const jsonString = req.body.json;
    const fileString = req.body.file;
    const json = JSON.parse(jsonString);
    const dataFolder = './data/';
    const apiKey = '84190bf3-5cf6-3d84-af87-e28d3ce22bc4';
    const body = [{
        id: null,
        dataSource: 'AB_internal',
        entityType: 'internal_dataset',
        published: true,
        information: {
            csv: 'csvString',
            json: jsonString,
            fileBlob: 'fileString',
            mimeType: 'string',
            size: '3829048',
            schema: json.mappings,
        },
        tags: [json.metadata.lastName],
        title: json.metadata.firstName,
        description: json.metadata.description,
        createdOn: new Date(),
    }];
    let response = await fetch(`http://148.251.22.254:8080/schema-api-1.0/entity/smart-scheme/mass-create?apikey=${apiKey}`, {
        method: 'PUT',
        credentials: 'include',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
    });
    let jsonResponse = await response.json();
    console.log(body);
    console.log(jsonResponse);

    fs.writeFile(dataFolder + 'test.json', jsonString, function(err) {
        if (err) {
            return console.log(err);
        }
        console.log('The json was saved!');
        fs.writeFile(dataFolder + 'test.csv', csvString, function(err) {
            if (err) {
                return console.log(err);
            }
            console.log('The csv was saved!');
            fs.writeFile(dataFolder + 'test.xlsx', fileString, function(err) {
                if (err) {
                    return console.log(err);
                }
                console.log('The file was saved!');
            });
        });
    });
    console.log('timostest');
    res.send({
        status: 'ok',
        csv: csvString,
    });
});

module.exports = router;
