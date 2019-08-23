import FormControl from '@material-ui/core/FormControl/FormControl';
import Select from '@material-ui/core/Select/Select';
import React from 'react';

import RFFromHelper from './RFFormHelper';

const RFSelectBox = ({ input, label, meta: { touched, error }, children, ...custom }) => (
    <FormControl error={touched && error}>
        <Select
            {...input}
            {...custom}
            inputProps={{
                name: 'age',
                id: 'age-native-simple',
            }}>
            {children}
        </Select>
        {RFFromHelper({ touched, error })}
    </FormControl>
);

export default RFSelectBox;
