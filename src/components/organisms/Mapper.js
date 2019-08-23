import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Tabs from '@material-ui/core/Tabs/Tabs';
import Grid from '@material-ui/core/Grid/Grid';
import AppBar from '@material-ui/core/AppBar/AppBar';
import Tab from '@material-ui/core/Tab/Tab';
import TableHead from '@material-ui/core/TableHead/TableHead';
import TableRow from '@material-ui/core/TableRow/TableRow';
import TableCell from '@material-ui/core/TableCell/TableCell';
import TableBody from '@material-ui/core/TableBody/TableBody';
import Table from '@material-ui/core/Table/Table';

import { getUploadFile, getUploadMappings } from '../../redux/selectors/mainSelectors';
import { getCurrentSheet, getCurrentSheetIndex, getResourceSheetNames } from '../../redux/selectors/resourceSelectors';
import { setCurrentSheet } from '../../redux/actions/resourceActions';
import MappingRow from '../molecules/MappingRow';
import { setMapping } from '../../redux/actions/mainActions';

const Mapper = () => {
    const dispatch = useDispatch();
    const file = useSelector(getUploadFile);
    const fileName = file ? file.name : null;
    const sheetNames = useSelector(getResourceSheetNames);
    const currentSheetIndex = useSelector(getCurrentSheetIndex);
    const currentSheet = useSelector(getCurrentSheet);
    const mappings = useSelector(getUploadMappings);

    const headers = currentSheet.length > 0 ? currentSheet[0] : [];
    const previews = currentSheet.length > 1 ? currentSheet[1] : [];

    const selectSheet = sheet => {
        dispatch(setCurrentSheet(sheet));
    };
    const setHeaderMapping = (header, value) => {
        let mapping = {};
        mapping[header] = value;
        dispatch(setMapping(mapping));
    };
    const properties = [{ label: 'Name', value: 'name' }, { label: 'Email', value: 'email' }, { label: 'Do not include', value: null }];

    return (
        <div>
            {sheetNames.length > 0 && (
                <Grid container spacing={16}>
                    <Grid item xs={12}>
                        <AppBar position="static" color="default">
                            <Tabs
                                value={currentSheetIndex}
                                onChange={(event, value) => {
                                    selectSheet(value);
                                }}
                                variant="fullWidth">
                                {sheetNames.map((name, i) => (
                                    <Tab key={i} label={sheetNames.length > 1 ? name : fileName} />
                                ))}
                            </Tabs>
                        </AppBar>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>
                                        <b>SELECTED</b>
                                    </TableCell>
                                    <TableCell>
                                        <b>HEADER</b>
                                    </TableCell>
                                    <TableCell>
                                        <b>PREVIEW (the value of the first row)</b>
                                    </TableCell>
                                    <TableCell>
                                        <b>MATCHED PROPERTY</b>
                                    </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {headers.map((header, i) => (
                                    <MappingRow
                                        key={header}
                                        selected={!!mappings[header]}
                                        header={header}
                                        preview={previews[i]}
                                        properties={properties}
                                        selectedProperty={mappings[header]}
                                        onChange={value => {
                                            setHeaderMapping(header, value);
                                        }}
                                    />
                                ))}
                            </TableBody>
                        </Table>
                    </Grid>
                </Grid>
            )}
        </div>
    );
};

export default Mapper;
