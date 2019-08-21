import React from 'react';

import StandardButton from '../atoms/StandardButton';
import {CANCEL_TEXT} from "../../EN_Texts";

const CancelButton = props => {
    return (
        <StandardButton color={'secondary'} float={'left'} {...props}>
            {CANCEL_TEXT}
        </StandardButton>
    );
};

export default CancelButton;
