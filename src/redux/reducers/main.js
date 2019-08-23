import { INIT_MAPPINGS, SET_MAPPING, SET_UPLOAD_FILE, SET_UPLOAD_OBJECTS, SET_UPLOAD_TYPE } from '../actions/actionTypes';

const initialState = {
    type: null,
    objects: null,
    file: null,
    mappings: {},
    metadata: [],
};

const main = (state = initialState, action) => {
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
        case SET_UPLOAD_FILE: {
            const { file } = action.payload;
            return {
                ...state,
                file,
            };
        }
        case INIT_MAPPINGS: {
            const { mappings } = action.payload;
            return {
                ...state,
                mappings,
            };
        }
        case SET_MAPPING: {
            const { mapping } = action.payload;
            const mappings = { ...state.mappings, ...mapping };
            return {
                ...state,
                mappings,
            };
        }
        default:
            return state;
    }
};

export default main;
