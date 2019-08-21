import React from 'react';
import NavigateNext from '@material-ui/icons/NavigateNext';

import StandardButton from '../atoms/StandardButton';
import {NEXT_TEXT} from "../../EN_Texts";

const NextButton = props => {
    return (
        <StandardButton color={'primary'} variant="outlined" float={'right'} {...props}>
            {NEXT_TEXT} <NavigateNext />
        </StandardButton>
    );
};

export default NextButton;
