const getMainState = store => store.main;
const getMainStateObject = object => store => (getMainState(store) ? getMainState(store)[object] : null);
const getUploadType = store => (getMainState(store) ? getMainState(store).type : null);
const getUploadObjects = store => (getMainState(store) ? getMainState(store).objects : null);
const getUploadStream = store => (getMainState(store) ? getMainState(store).stream : null);
const getUploadMappings = store => (getMainState(store) ? getMainState(store).mappings : null);
const getMappingsUsed = store => getUploadMappings.filter();
const getUploadMetadata = store => (getMainState(store) ? getMainState(store).metadata : null);
export { getMainState, getMainStateObject, getUploadType, getUploadObjects, getUploadStream, getUploadMappings, getUploadMetadata };
