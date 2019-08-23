import { SET_CURRENT_SHEET, SET_RESOURCE } from './actionTypes';

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

export { setResource, setCurrentSheet };
