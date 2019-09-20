import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';
import Table from '@material-ui/core/Table';
import React, { useState } from 'react';
import PropTypes from 'prop-types';

import DownloadButton from '../molecules/DownloadButton';
import RemoveButton from '../molecules/RemoveButton';
import RemoveItemDialog from '../molecules/RemoveItemDialog';

const FileManager = ({ rows, handleDatasetDownload, handleDelete }) => {
    const [selectedItem, setSelectedItem] = useState();
    const [deleteDialogOpened, setDeleteDialogOpened] = useState(false);
    const handleRemoveButtonClick = item => {
        setSelectedItem(item);
        setDeleteDialogOpened(true);
    };
    return (
        <div>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell align="center">Type</TableCell>
                        <TableCell align="center">Description</TableCell>
                        <TableCell align="center">Created</TableCell>
                        <TableCell align="right">Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map(row => (
                        <TableRow key={row.id}>
                            <TableCell component="th" scope="row">
                                {row.title}
                            </TableCell>
                            <TableCell align="center">{row.entityType}</TableCell>
                            <TableCell align="center">{row.description}</TableCell>
                            <TableCell align="center">{new Date(row.createdOn).toISOString().slice(0, 10)}</TableCell>
                            <TableCell align="right">
                                <DownloadButton rowid={row.id} onDownload={handleDatasetDownload} />
                                <RemoveButton
                                    onClick={() => {
                                        handleRemoveButtonClick(row);
                                    }}
                                />
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            {selectedItem && <RemoveItemDialog onRemove={handleDelete} handleModal={setDeleteDialogOpened} open={deleteDialogOpened} item={selectedItem} />}
        </div>
    );
};
FileManager.propTypes = {
    rows: PropTypes.array,
    handleDatasetDownload: PropTypes.func,
    handleDelete: PropTypes.func,
};

export default FileManager;
