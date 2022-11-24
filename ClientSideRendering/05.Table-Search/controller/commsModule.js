import * as api from './api.js'

const router = {
    'tableData': 'jsonstore/advanced/table'
}

export async function getTableData(){
    let result = await api.get(router.tableData);
    return result;
}

