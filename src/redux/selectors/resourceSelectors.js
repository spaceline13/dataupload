const getResourceState = store => store.resource;
const getFile = store => (getResourceState(store) ? getResourceState(store).file : null);
const getFilename = store => (getResourceState(store) ? getResourceState(store).name : null);
const getResourceSheetNames = store => (getResourceState(store) ? getResourceState(store).SheetNames : []);
const getResourceSheets = store => (getResourceState(store) ? getResourceState(store).sheetArray : []);
const getCurrentSheetName = store => (getResourceState(store) ? getResourceSheetNames(store)[getResourceState(store).currentSheet] : null);
const getCurrentSheetIndex = store => (getResourceState(store) ? getResourceState(store).currentSheet : null);
const getCurrentSheet = store => (getResourceSheets(store).length > 0 ? getResourceSheets(store)[getCurrentSheetIndex(store)] : []);

export { getResourceState, getFile, getFilename, getResourceSheets, getResourceSheetNames, getCurrentSheetIndex, getCurrentSheetName, getCurrentSheet };
