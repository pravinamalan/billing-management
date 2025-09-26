import { apiEndPoints } from "../api/endPoints";
import { ListSidePanel } from "../helper/list/side-pannel";
import { TabulatorTable } from "../tables/TabulatorTable";

let initialized = false;

const initialRender  = () =>{
    let orderTableConfig = {
        element: "ORDER_WRAPPER",
        module: `ORDER`,
        tableName: `#ORDER_TABLE`,
        url: `${apiEndPoints("ORDER", "LIST")}`,
        params: ``,
        config: {
            pagination: true,
            pageSize: 10,
        },
    };

    if ($('[data-bs-toggle="tab"][href="#orders"]').hasClass('active')) {
        new TabulatorTable(orderTableConfig).initialize();
    }

    $('[data-bs-toggle="tab"][href="#orders"]').on("shown.bs.tab", function () {
        new TabulatorTable(orderTableConfig).initialize();
    });

    $("body").on("click", "#add-new-order", function () {
        const config = {
            mode: "ADD",
            module: "ORDER",
            element: "#renderWrapper",
            url: apiEndPoints("ORDER", "FIELDS"),
            rowId: null,
        };

        const orderPanel = new ListSidePanel(config);

        orderPanel.initialize();
    });

}
export function initOrder() {

    if (!initialized) {
        initialRender();
        initialized = true;
    }
}
