import { SET_CURRENT_SHEET, SET_FILE, SET_RESOURCE } from '../actions/actionTypes';

const initialState = {
    file: null,
    name: '',
    SheetNames: [],
    Sheets: {},
    currentSheet: null,
    sheetArray: [],
};

const resource = (state = initialState, action) => {
    switch (action.type) {
        case SET_FILE: {
            const { file } = action.payload;
            return {
                ...state,
                file,
            };
        }
        case SET_RESOURCE: {
            const { resource, sheetArray } = action.payload;
            return {
                ...state,
                ...resource,
                sheetArray,
            };
        }
        case SET_CURRENT_SHEET: {
            const { sheet } = action.payload;
            return {
                ...state,
                currentSheet: sheet,
            };
        }
        default:
            return state;
    }
};

export default resource;
