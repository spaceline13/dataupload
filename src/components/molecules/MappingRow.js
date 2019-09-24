import TableCell from '@material-ui/core/TableCell/TableCell';
import TableRow from '@material-ui/core/TableRow/TableRow';
import React from 'react';
import PropTypes from 'prop-types';
import SelectedIcon from '@material-ui/icons/CheckCircle';
import { useTheme } from '@material-ui/core';

import SelectBox from '../atoms/SelectBox';

import AutocompleteRemote from './AutocompleteRemote';

const MappingRow = ({ isSelected, header, preview, properties, selectedProperty, onChange }) => {
    const theme = useTheme();
    const successColor = theme.palette.success.dark;
    let api = null,
        autocomplete = null,
        filter = null,
        label = null;
    if (selectedProperty) {
        api = selectedProperty.api;
        autocomplete = selectedProperty.type === 'autocomplete';
        label = selectedProperty.label;
        filter = selectedProperty.filter;
    }

    return (
        <TableRow>
            <TableCell>{isSelected && <SelectedIcon htmlColor={successColor} />}</TableCell>
            <TableCell>{header}</TableCell>
            <TableCell>{preview}</TableCell>
            <TableCell>
                <SelectBox items={properties} givenValue={label} onChange={onChange} />
                {autocomplete && (
                    <AutocompleteRemote
                        url={api}
                        filter={filter}
                        style={{ display: 'inline-block' }}
                        defaultValue={''}
                        onSelect={value => {}}
                        isValid={true}
                        onKeypress={e => {}}
                        onFocus={() => {}}
                        getItemValue={item => {
                            return item.name.english + ' (' + item.ontology_name + ')';
                        }}
                    />
                )}
            </TableCell>
        </TableRow>
    );
};
MappingRow.propTypes = {
    isSelected: PropTypes.bool,
    header: PropTypes.string,
    preview: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    selectedProperty: PropTypes.string,
    properties: PropTypes.array,
    onChange: PropTypes.func,
};

export default MappingRow;
