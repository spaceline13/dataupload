import React, { useState } from 'react';
import Box from '@material-ui/core/Box/Box';
import XLSX from 'xlsx';
import Typography from '@material-ui/core/Typography/Typography';

import DragDropFile from '../molecules/DragDropFile';
import DataInput from '../molecules/DataInput';
import { DRAG_DROP, SELECT_FILE } from '../../EN_Texts';

const Uploader = () => {
    const [file, setFile] = useState();
    const handleFile = file => {
        setFile(file);
        console.log(file);
        const reader = new FileReader();
        const rABS = !!reader.readAsBinaryString;
        reader.onload = e => {
            const excelfile = e.target.result;
            const wb = XLSX.read(excelfile, { type: rABS ? 'binary' : 'array' });
            console.log(wb);
        };
        if (rABS) reader.readAsBinaryString(file);
        else reader.readAsArrayBuffer(file);
    };
    return (
        <Box borderRadius={'10px'} bgcolor={'#179c7e'}>
            {file && (
                <Box padding={'10px'} fontSize={'14px'} color={'white'} textAlign={'center'}>
                    The file <b>{file.name}</b> has been uploaded. If you want to use another file, you can still use the area bellow, otherwise, you can click next
                </Box>
            )}
            <DragDropFile handleFile={handleFile} text={DRAG_DROP}>
                <Box textAlign={'center'} fontSize={'1.3em'}>
                    Drag n Drop or <DataInput handleFile={handleFile} text={SELECT_FILE} mainColor={'white'} backgroundColor={'#ff7a59'} /> to upload to the Data Platform.
                    <br />
                    All .csv, .xlsx, and .xls file types are supported.
                </Box>
            </DragDropFile>
        </Box>
    );
};

export default Uploader;
