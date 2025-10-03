import { apiEndPoints } from "../api/endPoints";
import { ListSidePanel } from "../helper/list/side-pannel";
import { TabulatorTable } from "../tables/TabulatorTable";

let initialized = false;

const initialRender = () =>{
    let config = {
        element: "EMPLOYEE_WRAPPER",
        module: `EMPLOYEE`,
        tableName: `#EMPLOYEE_TABLE`,
        url: `${apiEndPoints("EMPLOYEE", "LIST")}`,
        params: ``,
        config: {
            pagination: true,
            pageSize: 10,
        },
    };

    if ($('[data-bs-toggle="tab"][href="#employee"]').hasClass('active')) {
        new TabulatorTable(config).initialize();
    }

    $('[data-bs-toggle="tab"][href="#employee"]').on(
        "shown.bs.tab",
        function () {
            new TabulatorTable(config).initialize();
        }
    );
    
    $("body").on("click", "#add-new-employee", function () {
        const config = {
            mode: "ADD",
            module: "EMPLOYEE",
            element: "#renderWrapper",
            url: apiEndPoints("EMPLOYEE", "FIELDS"),
            rowId: null,
        };

        const employeePanel = new ListSidePanel(config);

        employeePanel.initialize();
    });
}

export const  initEmployee = () => {

    if (!initialized) {
        initialRender();
        initialized = true;
    }
}
