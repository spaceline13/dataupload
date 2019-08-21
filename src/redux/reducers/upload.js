import { SET_UPLOAD_OBJECTS, SET_UPLOAD_TYPE } from '../constants';

const initialState = {
    type: null,
    objects: null,
    file: null,
    mappings: [],
    metadata: [],
};

const upload = (state = initialState, action) => {
    switch (action.type) {
        case SET_UPLOAD_TYPE: {
            const { type } = action.payload;
            return {
                ...state,
                type,
            };
        }
        case SET_UPLOAD_OBJECTS: {
            const { objects } = action.payload;
            return {
                ...state,
                objects,
            };
        }
        default:
            return state;
    }
};

export default upload;
