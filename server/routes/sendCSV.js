const fs = require('fs');

const router = require('express').Router();
const multer = require('multer');

const upload = multer();

router.post('/', upload.single('file'), async (req, res) => {
    const { csv } = req.body;
    const jsonString = req.body.json;
    const { file } = req;
    const { type, metadata, mappings, stream, community } = JSON.parse(jsonString);
    const apiKey = '84190bf3-5cf6-3d84-af87-e28d3ce22bc4';
    const body = [
        {
            id: null,
            dataSource: community,
            entityType: type === 'file' ? 'internal_dataset' : 'internal_stream',
            published: true,
            information:
                type === 'file'
                    ? {
                          csv: csv,
                          json: jsonString,
                          fileBuffer: file.buffer,
                          mimeType: file.mimetype,
                          size: file.size,
                          encoding: file.encoding,
                          originalname: file.originalname,
                          schema: mappings,
                      }
                    : {
                          url: stream,
                          json: jsonString,
                          schema: mappings,
                      },
            tags: metadata.tags,
            title: metadata.title,
            description: metadata.description,
            createdOn: new Date(),
        },
    ];
    let response = await fetch(`http://148.251.22.254:8080/schema-api-1.0/entity/smart-scheme/mass-create?apikey=${apiKey}`, {
        method: 'PUT',
        credentials: 'include',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
    });
    if (response.ok) {
        res.send({
            status: 'ok',
        });
    } else {
        res.send({
            status: 'err',
            message: 'There was an error trying to upload file (Server)',
        });
    }
});

module.exports = router;
