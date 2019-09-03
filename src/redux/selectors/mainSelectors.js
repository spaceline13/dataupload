const getMainState = store => store.main;
const getUploadType = store => (getMainState(store) ? getMainState(store).type : null);
const getUploadObjects = store => (getMainState(store) ? getMainState(store).objects : null);
const getUploadFile = store => (getMainState(store) ? getMainState(store).file : null);
const getUploadStream = store => (getMainState(store) ? getMainState(store).stream : null);
const getUploadMappings = store => (getMainState(store) ? getMainState(store).mappings : null);
const getUploadMetadata = store => (getMainState(store) ? getMainState(store).metadata : null);
export { getMainState, getUploadType, getUploadObjects, getUploadFile, getUploadStream, getUploadMappings, getUploadMetadata };
