import React from 'react';
import NavigateBefore from '@material-ui/icons/NavigateBefore';

import StandardButton from '../atoms/StandardButton';
import {BACK_TEXT} from "../../EN_Texts";

const BackButton = props => {
    return (
        <StandardButton color={'primary'} variant="outlined" float={'left'} {...props}>
            <NavigateBefore /> {BACK_TEXT}
        </StandardButton>
    );
};

export default BackButton;
