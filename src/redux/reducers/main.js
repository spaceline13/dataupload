import {
    INIT_MAPPINGS,
    SET_MAPPING,
    SET_METADATA,
    SET_UPLOAD_FILE,
    SET_UPLOAD_OBJECTS,
    SET_UPLOAD_STREAM,
    SET_UPLOAD_TYPE
} from '../actions/actionTypes';

const initialState = {
    type: null,
    objects: null,
    file: null,
    stream: null,
    mappings: {},
    metadata: {},
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
        case SET_UPLOAD_STREAM: {
            const { stream } = action.payload;
            return {
                ...state,
                stream,
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
        case SET_METADATA: {
            const { metadata } = action.payload;
            return {
                ...state,
                metadata,
            };
        }
        default:
            return state;
    }
};

export default main;
