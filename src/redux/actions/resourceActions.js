import { SET_CURRENT_SHEET, SET_FILE, SET_RESOURCE } from './actionTypes';

const setFile = file => ({
    type: SET_FILE,
    payload: {
        file,
    },
});
const setResource = (resource, sheetArray) => ({
    type: SET_RESOURCE,
    payload: {
        resource,
        sheetArray,
    },
});
const setCurrentSheet = sheet => ({
    type: SET_CURRENT_SHEET,
    payload: {
        sheet,
    },
});

export { setFile, setResource, setCurrentSheet };
