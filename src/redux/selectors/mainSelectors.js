const getUploadState = store => store.main;
const getUploadType = store => (getUploadState(store) ? getUploadState(store).type : null);
const getUploadObjects = store => (getUploadState(store) ? getUploadState(store).objects : null);
const getUploadFile = store => (getUploadState(store) ? getUploadState(store).file : null);
const getUploadMappings = store => (getUploadState(store) ? getUploadState(store).mappings : null);
const getUploadMetadata = store => (getUploadState(store) ? getUploadState(store).metadata : null);
export { getUploadState, getUploadType, getUploadObjects, getUploadFile, getUploadMappings, getUploadMetadata };
