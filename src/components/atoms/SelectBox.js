import Select from '@material-ui/core/Select/Select';
import MenuItem from '@material-ui/core/MenuItem/MenuItem';
import FormControl from '@material-ui/core/FormControl/FormControl';
import React, { useState } from 'react';
import PropTypes from 'prop-types';

const SelectBox = ({ givenValue, items, onChange }) => {
    const [value, setValue] = useState(givenValue ? givenValue : null);
    const handleChange = event => {
        const { value } = event.target;
        setValue(value);
        onChange(value);
    };

    return (
        <FormControl>
            <Select displayEmpty value={value} onChange={handleChange}>
                {items.map((item, i) => (
                    <MenuItem key={i} value={item.value}>
                        {item.label}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
};
SelectBox.propTypes = {
    givenValue: PropTypes.string,
    items: PropTypes.array,
    onChange: PropTypes.func,
};

export default SelectBox;
