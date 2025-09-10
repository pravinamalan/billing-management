import { apiEndPoints } from "../api/endPoints";
import { TabulatorTable } from "../tables/TabulatorTable";

(()=>{
    let quotationTableConfig = {
        element: 'QUOTATION_WRAPPER',
        module  : `QUOTATION`,
        tableName : `#QUOTATION_TABLE`,
        url : `${apiEndPoints("QUOTATION","LIST")}`,
        params : ``,
        config: {
            pagination: true,
            pageSize: 10
        }
    }
    $('[data-bs-toggle="tab"][href="#quotations"]').on('shown.bs.tab',  function(){
        new TabulatorTable(quotationTableConfig).initialize()
    });
    $('body').on('click','[name="add_service"]',function(e){
        e.preventDefault();
        $(this).closest('.card-body').clone().insertAfter($(this).closest('.card-body'))

    });
})
