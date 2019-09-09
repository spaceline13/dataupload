import FormControl from '@material-ui/core/FormControl/FormControl';
import Select from '@material-ui/core/Select/Select';
import React from 'react';
import MenuItem from '@material-ui/core/MenuItem/MenuItem';

import RFFromHelper from './RFFormHelper';

const RFSelectBox = ({ input, label, meta: { touched, error }, items, ...custom }) => (
    <FormControl error={touched && error}>
        <Select
            {...input}
            {...custom}
            inputProps={{
                name: 'age',
                id: 'age-native-simple',
            }}>
            {items.map((item, index) => (
                <MenuItem key={index} value={item.value}>
                    {item.name}
                </MenuItem>
            ))}
        </Select>
        {RFFromHelper({ touched, error })}
    </FormControl>
);

export default RFSelectBox;
