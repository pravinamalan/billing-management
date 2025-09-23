import { apiEndPoints } from "../api/endPoints";
import { ListSidePanel } from "../helper/list/side-pannel";
import { TabulatorTable } from "../tables/TabulatorTable";

$(()=>{
    let config = {
        element: 'SETTINGS_WRAPPER',
        module  : `SETTINGS`,
        tableName : `#SETTINGS_TABLE`,
        url : `${apiEndPoints("USERS","LIST")}`,
        params : ``,
        config: {
            pagination: true,
            pageSize: 10
        }
    }
    console.log(window.location.pathname);

    if(window.location.pathname == '/settings'){
        new TabulatorTable(config).initialize()
    };
    $('body').on('click', '#add-new-admin-and-management-staff', function() {
        const config = {
            mode: "ADD",
            module: "EMPLOYEE",
            element: "#renderWrapper",
            url: apiEndPoints("USERS", "FIELDS"),
            rowId: null,
        };

        const employeePanel = new ListSidePanel(config);

        employeePanel.initialize();
    });
})
