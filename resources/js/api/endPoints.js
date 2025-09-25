export const apiEndPoints = (module = 'ORDER', key = null) =>{

    let endPoints = {
        "HOME" : {
            "LIST" : "home/get-orders"
        },
        "QUOTATION" :{
            'FIELDS'   : 'quotation/fields',
            "LIST"     : "/quotations/list",
            "DOWNLOAD" : "/quotations/{%ID%}/pdf",
            'SAVE'     : 'quotation/save',
        },
        "ORDER" :{
            'FIELDS' : 'order/fields',
            "LIST"   : 'order/list',
            'SAVE'   : 'order/save',
            'EDIT'   : 'order/edit/{%ORDER_ID%}',
            'UPDATE' : 'order/update/{%ORDER_ID%}',
            'DELETE' : 'order/delete/{%ORDER_ID%}',
        },
        "EMPLOYEE" : {
            'FIELDS' : 'employee/fields',
            "LIST"   : 'employee/list',
            'SAVE'   : 'employee/save',
            'EDIT'   : 'employee/edit/{%EMPLOYEE_ID%}',
            'UPDATE' : 'employee/update/{%EMPLOYEE_ID%}',
            'DELETE' : 'employee/delete/{%EMPLOYEE_ID%}',
        },
        "USERS" : {
            'FIELDS' : 'users/fields',
            "LIST"   : 'users/list'
        }
    }

    return `${endPoints[module][key] ?? ''}`
}
