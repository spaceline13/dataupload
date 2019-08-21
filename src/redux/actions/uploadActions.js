import { SET_UPLOAD_OBJECTS, SET_UPLOAD_TYPE } from '../constants';

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

export { setUploadType, setUploadObjects };
