export const apiEndPoints = (module = 'ORDER', key = null) =>{

    let endPoints = {
        "ORDER" :{
            'FIELDS' : 'order/fields',
            'SAVE'   : 'order/save',
            'EDIT'   : 'order/edit/{%ORDER_ID%}',
            'UPDATE' : 'order/update/{%ORDER_ID%}',
            'DELETE' : 'order/delete/{%ORDER_ID%}',
        },
        "EMPLOYEE" : {
            'FIELDS' : 'employee/fields',
            "LIST" : 'employee/list',
        }
    }

    return `${endPoints[module][key] ?? ''}`
}
