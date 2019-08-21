import React from 'react';
import Send from '@material-ui/icons/Send';

import StandardButton from '../atoms/StandardButton';
import {FINISH_TEXT} from "../../EN_Texts";

const FinishButton = props => {
    return (
        <StandardButton variant="outlined" float={'right'} {...props}>
            {FINISH_TEXT} &nbsp; <Send />
        </StandardButton>
    );
};

export default FinishButton;
