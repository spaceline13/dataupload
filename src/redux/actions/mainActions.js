import {
    INIT_MAPPINGS,
    SET_MAPPING, SET_METADATA,
    SET_UPLOAD_FILE,
    SET_UPLOAD_OBJECTS,
    SET_UPLOAD_STREAM,
    SET_UPLOAD_TYPE
} from './actionTypes';

const setUploadType = type => ({
    type: SET_UPLOAD_TYPE,
    payload: {
        type,
    },
});

const setUploadObjects = objects => ({
    type: SET_UPLOAD_OBJECTS,
    payload: {
        objects,
    },
});

const setUploadFile = file => ({
    type: SET_UPLOAD_FILE,
    payload: {
        file,
    },
});

const setUploadStream = stream => ({
    type: SET_UPLOAD_STREAM,
    payload: {
        stream,
    },
});

const initMappings = mappings => ({
    type: INIT_MAPPINGS,
    payload: {
        mappings,
    },
});

const setMapping = mapping => ({
    type: SET_MAPPING,
    payload: {
        mapping,
    },
});

const setMetadata = metadata => ({
    type: SET_METADATA,
    payload: {
        metadata,
    },
});

export { setUploadType, setUploadObjects, setUploadFile, setUploadStream, initMappings, setMapping, setMetadata };