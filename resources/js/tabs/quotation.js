import { apiEndPoints } from "../api/endPoints";
import { saveIcon } from "../common/icon";
import { initInputMask, renderFormField, toggleLoaderHideShow } from "../helper/common-helper";
import { SidePanel } from "../panels/sidePanelConfig";
import { saveQuotation } from "../services/quotationService";
import { TabulatorTable } from "../tables/TabulatorTable";

let initialized = false;
let sidePanelInstance;

const initialRender = () =>{
    $(`#customerPhone [data-mask]`).inputmask();
    $('#customerPhone').inputmask('(999) 999-9999');
    let quotationTableConfig = {
        element: "QUOTATION_WRAPPER",
        module: `QUOTATION`,
        tableName: `#QUOTATION_TABLE`,
        url: `${apiEndPoints("QUOTATION", "LIST")}`,
        params: ``,
        config: {
            pagination: true,
            pageSize: 10,
        },
    };

    if ($('[data-bs-toggle="tab"][href="#quotations"]').hasClass('active')) {
        new TabulatorTable(quotationTableConfig).initialize();
    }

    $('[data-bs-toggle="tab"][href="#quotations"]').on(
        "shown.bs.tab",
        function () {
            new TabulatorTable(quotationTableConfig).initialize();
        }
    );
    sidePanelInstance = new SidePanel();
    $("body").on("click", "#add-new-quotation", function () {
        sidePanelInstance.initializeSidePanel({
            header: {
                title: `Add Quotation`,
                subTitle: ``,
            },
            footer: {
                buttons: [
                    {
                        class: "btn btn-voilet action-btn save-btn d-flex align-items-center save-quotation",
                        icon: saveIcon(),
                        text: "Save",
                    },
                ],
            },
            panelId: "quotationPannel",
        });
        toggleLoaderHideShow(`quotationPannel`, "show");
        $("#quotationPannel .body-content").html(renderFormField());
        initInputMask("#quotationPannel");
        toggleLoaderHideShow(`quotationPannel`, "hide");
    });

    function updateRowIndices() {
        $("#services-table tbody tr").each(function (index) {
            $(this).attr("data-row-count", index);

            $(this)
                .find('[name*="items"]')
                .each(function () {
                    let name = $(this).attr("name");
                    name = name.replace(/items\[\d+\]/, `items[${index}]`);
                    $(this).attr("name", name);
                });

            if ($("#services-table tbody tr").length === 1) {
                $(this).find(".remove-row").hide();
            } else {
                $(this).find(".remove-row").show();
            }
        });

        updateGrandTotal();
    }

    $(document).on("click", ".add-row", function () {
        let newRow = $("#services-table tbody tr:first").clone();

        newRow.find("textarea").val("");
        newRow.find(".qty").val("1");
        newRow.find(".price").val("");
        newRow.find(".line-total").val("");

        $("#services-table tbody").append(newRow);

        updateRowIndices();
    });

    $(document).on("click", ".remove-row", function () {
        if ($("#services-table tbody tr").length > 1) {
            $(this).closest("tr").remove();
            updateRowIndices();
        }
    });

    $(document).on("input", ".qty, .price", function () {
        let row = $(this).closest("tr");
        calculateLineTotal(row);
        updateGrandTotal();
    });

    function calculateLineTotal(row) {
        let qty = parseFloat(row.find(".qty").val()) || 0;
        let price = parseFloat(row.find(".price").val()) || 0;
        let total = qty * price;

        row.find(".line-total").val(total.toFixed(2));
    }

    function updateGrandTotal() {
        let grandTotal = 0;

        $(".line-total").each(function () {
            grandTotal += parseFloat($(this).val()) || 0;
        });

        $("#grand-total").text("$" + grandTotal.toFixed(2));
    }

    $("body").on("click", ".save-quotation", async function () {
        let customerName = $('input[name="customer_name"]').val() || "";
        let customerPhone = $('input[name="customer_phone"]').val() || "";
        let customerEmail = $('input[name="customer_email"]').val() || "";
        let customerAddress =
            $('textarea[name="customer_address"]').val() || "";

        let quotationData = [];

        $("#services-table tbody tr").each(function () {
            let service = $(this).find('textarea[name*="service_name"]').val();
            let qty = $(this).find(".qty").val();
            let price = $(this).find(".price").val();
            let total = $(this).find(".line-total").val();

            quotationData.push({
                service_name: service,
                quantity: qty,
                unit_price: price,
                total: total,
            });
        });

        let param = {
            customer_name: customerName,
            customer_phone: customerPhone,
            customer_email: customerEmail,
            customer_address: customerAddress,
            quotation_data: quotationData,
        };

        toggleLoaderHideShow(`quotationPannel`, "show");
        try {
            const { status } = await saveQuotation(param);
            if (!!status && status == "Success") {
                // $(".sidepannel-wrapper").reset();
                toggleLoaderHideShow(`quotationPannel`, "hide");
                sidePanelInstance.closeSidePanel();
                $(`.refresh-table[data-section="${`QUOTATION`}"]`).trigger("click");
            }
        } catch (error) {
            toggleLoaderHideShow(`quotationPannel`, "hide");
            console.log("Error saving quotation", error);
        }
    });

    updateRowIndices();

}

export function initQuotation() {

    if (!initialized) {
        initialRender();
        initialized = true;
    }
}
