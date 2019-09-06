import React from 'react';
import Box from '@material-ui/core/Box/Box';
import XLSX from 'xlsx';
import { useTheme } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';

import DragDropFile from '../molecules/DragDropFile';
import DataInput from '../molecules/DataInput';
import { DRAG_DROP, SELECT_FILE } from '../../EN_Texts';
import { getUploadFile } from '../../redux/selectors/mainSelectors';
import { initMappings, setUploadFile } from '../../redux/actions/mainActions';
import { setCurrentSheet, setResource } from '../../redux/actions/resourceActions';

const Uploader = () => {
    const dispatch = useDispatch();
    const file = useSelector(getUploadFile);
    const handleFile = file => {
        const reader = new FileReader();
        const rABS = !!reader.readAsBinaryString;
        reader.onload = e => {
            //file
            const excelfile = e.target.result;
            //resource
            const wb = XLSX.read(excelfile, { type: rABS ? 'binary' : 'array' });
            //sheetArray
            const sheetArray = wb.SheetNames ? wb.SheetNames.map(name => XLSX.utils.sheet_to_json(wb.Sheets[name], { header: 1 })) : [];
            //allHeadersCombined
            let headers = [];
            sheetArray.forEach(sheet => {
                headers = [...headers, ...sheet[0]];
            });
            //initialMappings
            const initialMappings = {};
            headers.forEach(header => {
                initialMappings[header] = null;
            });
            //add filename to the resource
            wb.name = file.name;
            //set store
            dispatch(setUploadFile(file));
            dispatch(setResource(wb, sheetArray));
            dispatch(setCurrentSheet(0));
            dispatch(initMappings(initialMappings));

            //console.log('file loaded:', wb);
        };
        if (rABS) reader.readAsBinaryString(file);
        else reader.readAsArrayBuffer(file);
    };
    const theme = useTheme();
    const primaryColor = theme.palette.primary.main;
    const successColor = theme.palette.success.dark;
    return (
        <Box borderRadius={'10px'} bgcolor={successColor}>
            {file && (
                <Box padding={'10px'} fontSize={'14px'} color={'white'} textAlign={'center'}>
                    The file <b>{file.name}</b> has been uploaded. If you want to use another file, you can still use the area bellow, otherwise, you can click next
                </Box>
            )}
            <DragDropFile handleFile={handleFile} text={DRAG_DROP}>
                <Box textAlign={'center'} fontSize={'1.3em'}>
                    Drag n Drop or <DataInput handleFile={handleFile} text={file ? '' : SELECT_FILE} mainColor={'white'} backgroundColor={primaryColor} /> to upload to the Data Platform.
                    <br />
                    All .csv, .xlsx, and .xls file types are supported.
                </Box>
            </DragDropFile>
        </Box>
    );
};

export default Uploader;
