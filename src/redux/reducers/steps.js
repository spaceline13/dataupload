import { SET_ACTIVE_STEP, SET_STEPS } from '../actions/actionTypes';

const initialState = {
    activeStep: 0,
    allSteps: [],
};

const steps = (state = initialState, action) => {
    switch (action.type) {
        case SET_STEPS: {
            const { steps } = action.payload;
            return {
                ...state,
                allSteps: [...steps],
            };
        }
        case SET_ACTIVE_STEP: {
            const { step } = action.payload;
            return {
                ...state,
                activeStep: step,
            };
        }
        default:
            return state;
    }
};

export default steps;
