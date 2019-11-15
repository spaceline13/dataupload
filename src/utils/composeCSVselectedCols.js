import XLSX from 'xlsx';

import composeMappedDatatable from './composeMappedDatatable';

const composeCSVselectedCols = (array, mappings) => {
    // convert to CSV
    return XLSX.utils.sheet_to_csv(XLSX.utils.aoa_to_sheet(composeMappedDatatable(array, mappings)));
};

export default composeCSVselectedCols;
