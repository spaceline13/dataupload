import { SET_STEPS, SET_ACTIVE_STEP } from '../constants';

const setSteps = steps => ({
    type: SET_STEPS,
    payload: {
        steps,
    },
});

const setActive = step => ({
    type: SET_ACTIVE_STEP,
    payload: {
        step,
    },
});

export { setSteps, setActive };
