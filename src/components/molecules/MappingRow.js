import TableCell from '@material-ui/core/TableCell/TableCell';
import TableRow from '@material-ui/core/TableRow/TableRow';
import React from 'react';
import PropTypes from 'prop-types';
import SelectedIcon from '@material-ui/icons/CheckCircle';

import SelectBox from '../atoms/SelectBox';

const MappingRow = ({ selected, header, preview, properties, selectedProperty, onChange }) => {
    return (
        <TableRow>
            <TableCell>{selected && <SelectedIcon />}</TableCell>
            <TableCell>{header}</TableCell>
            <TableCell>{preview}</TableCell>
            <TableCell>
                <SelectBox items={properties} givenValue={selectedProperty} onChange={onChange} />
            </TableCell>
        </TableRow>
    );
};
MappingRow.propTypes = {
    selected: PropTypes.bool,
    header: PropTypes.string,
    preview: PropTypes.string,
    selectedProperty: PropTypes.string,
    properties: PropTypes.array,
    onChange: PropTypes.func,
};

export default MappingRow;
