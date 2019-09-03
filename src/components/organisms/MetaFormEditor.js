import React from 'react';
import { reduxForm } from 'redux-form';
import MenuItem from '@material-ui/core/MenuItem/MenuItem';

import RFTextField from '../atoms/RFTextField';
import RFCheckbox from '../atoms/RFCheckbox';
import RFRadioButton from '../atoms/RFRadioButton';
import RFSelectBox from '../atoms/RFSelectBox';
import CustomForm from '../molecules/CustomForm';
import { METADATA_STEP_NAME } from '../../EN_Texts';

//async validate
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
const asyncValidate = (values /*, dispatch */) => {
    return sleep(1000).then(() => {
        // simulate server latency
        if (['foo@foo.com', 'bar@bar.com'].includes(values.email)) {
            // eslint-disable-next-line no-throw-literal
            throw { email: 'Email already Exists' };
        }
    });
};

//sync validate
const validate = values => {
    const errors = {};
    const requiredFields = ['firstName', 'lastName', 'email', 'favoriteColor', 'description'];
    requiredFields.forEach(field => {
        if (!values[field]) {
            errors[field] = 'Required';
        }
    });
    if (values.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
    }
    return errors;
};
const fields = [
    { name: 'firstName', component: RFTextField, label: 'First Name' },
    { name: 'lastName', component: RFTextField, label: 'Last Name' },
    { name: 'email', component: RFTextField, label: 'Email' },
    { name: 'gender', component: RFRadioButton, label: 'gender' },
    {
        name: 'favoriteColor',
        component: RFSelectBox,
        label: 'Favorite Color',
        children: [<MenuItem value={''}></MenuItem>, <MenuItem value={'ff0000'}>Red</MenuItem>, <MenuItem value={'00ff00'}>Green</MenuItem>, <MenuItem value={'0000ff'}>Blue</MenuItem>],
    },
    { name: 'open', component: RFCheckbox, label: 'My data are open' },
    { name: 'description', component: RFTextField, label: 'Description' },
];

const MetaFormEditor = () => {
    return (
        <center>
            <CustomForm items={fields} submitLabel={'send'} clearLabel={'clear'} />
        </center>
    );
};
export default reduxForm({
    form: METADATA_STEP_NAME, // a unique identifier for this form
    validate,
    asyncValidate,
})(MetaFormEditor);
