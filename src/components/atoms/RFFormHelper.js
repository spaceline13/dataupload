import FormHelperText from '@material-ui/core/FormHelperText/FormHelperText';
import React from 'react';

const RFFromHelper = ({ touched, error }) => {
    if (!(touched && error)) {
        return;
    } else {
        return <FormHelperText>{touched && error}</FormHelperText>;
    }
};

export default RFFromHelper;
