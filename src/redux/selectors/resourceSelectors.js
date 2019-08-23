const getResourceState = store => store.resource;
const getResourceSheetNames = store => (getResourceState(store) ? getResourceState(store).SheetNames : []);
const getResourceSheets = store => (getResourceState(store) ? getResourceState(store).sheetArray : []);
const getCurrentSheetName = store => (getResourceState(store) ? getResourceSheetNames(store)[getResourceState(store).currentSheet] : null);
const getCurrentSheetIndex = store => (getResourceState(store) ? getResourceState(store).currentSheet : null);
const getCurrentSheet = store => (getResourceSheets(store).length > 0 ? getResourceSheets(store)[getCurrentSheetIndex(store)] : []);

export { getResourceState, getResourceSheets, getResourceSheetNames, getCurrentSheetIndex, getCurrentSheetName, getCurrentSheet };
