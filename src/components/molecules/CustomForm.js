import Box from '@material-ui/core/Box/Box';
import React from 'react';
import { Field } from 'redux-form';
import PropTypes from 'prop-types';

const CustomForm = ({ items, handleSubmit }) => {
    return (
        <form onSubmit={handleSubmit}>
            <Box>
                {items.map((item, i) => (
                    <Box key={i}>
                        <Field name={item.name} component={item.component} label={item.label}>
                            {item.children}
                        </Field>
                    </Box>
                ))}
            </Box>
        </form>
    );
};
CustomForm.propTypes = {
    handleSubmit: PropTypes.func,
    items: PropTypes.array,
};

export default CustomForm;
