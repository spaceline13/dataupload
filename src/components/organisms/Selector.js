import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getUploadState } from '../../redux/selectors/uploadSelectors';
import { setUploadObjects, setUploadType } from '../../redux/actions/uploadActions';
import SelectableGroup from '../molecules/SelectableGroup';
import { SELECT_OBJECTS_STEP_NAME, SELECT_TYPE_STEP_NAME } from '../../EN_Texts';
import { getActiveStep } from '../../redux/selectors/stepsSelectors';

const Selector = () => {
    const step = useSelector(getActiveStep);
    const selected = useSelector(getUploadState)[step.name];
    const dispatch = useDispatch();
    const edit = value => {
        switch (step.name) {
            case SELECT_TYPE_STEP_NAME: {
                dispatch(setUploadType(value));
                break;
            }
            case SELECT_OBJECTS_STEP_NAME: {
                dispatch(setUploadObjects(value));
                break;
            }
            default:
                break;
        }
    };
    return (
        <div>
            <SelectableGroup selectables={step.selectables} selected={selected} onChange={edit} />
        </div>
    );
};
export default Selector;
