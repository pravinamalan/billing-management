import { postPromise } from "./api/apiService";
import { apiEndPoints } from "./api/endPoints";
import "./bootstrap";

import {
    addIcon,
    deleteIcon,
    editIcon,
    removeIcon,
    saveIcon,
    viewIcon,
} from "./common/icon";
import {
    checkEmpty,
    initilizeTippy,
    renderFormField,
    tippyInstanceDestroy,
    toggleLoaderHideShow,
} from "./helper/common-helper";
import { ListSidePanel } from "./helper/list/side-pannel";
import { customSelect2, customSelectV2 } from "./helper/select2";
import { SidePanel } from "./panels/sidePanelConfig";
import { TabulatorTable } from "./tables/TabulatorTable";
import Chart from "chart.js/auto";
import ApexCharts from "apexcharts";
class OrdersTable {
    static TABLE_NAME = "ORDERS_TABLE";
    static DATA = [
        {
            order_id: "ORD1001",
            customer_name: "Pravin",
            contact: "9876543210",
            place: "Chennai",
            service: "Earthmover",
            payment_status: "Paid",
            order_status: "Pending",
            action: "View",
        },
        {
            order_id: "ORD1002",
            customer_name: "Karthik",
            contact: "9876501234",
            place: "Coimbatore",
            service: "Water Boring",
            payment_status: "Pending",
            order_status: "In-progress",
            action: "View",
        },
        {
            order_id: "ORD1003",
            customer_name: "Anitha",
            contact: "9123456780",
            place: "Madurai",
            service: "Crane",
            payment_status: "Paid",
            order_status: "Completed",
            action: "View",
        },
        {
            order_id: "ORD1004",
            customer_name: "Vignesh",
            contact: "9988776655",
            place: "Trichy",
            service: "JCB rental",
            payment_status: "Failed",
            order_status: "Cancelled",
            action: "Retry",
        },
        {
            order_id: "ORD1005",
            customer_name: "Siva",
            contact: "9001234567",
            place: "Salem",
            service: "Earthmover",
            payment_status: "Paid",
            order_status: "Completed",
            action: "Invoice",
        },
    ];

    constructor() {
        this.table = null;
        this.tippyInstances = {
            black: [],
            white: [],
            interactive: [],
        };
        this.init();
    }

    init() {
        this.initializeDataTable();
        this.bindEvents();
    }

    initializeDataTable() {
        this.table = $(`#${OrdersTable.TABLE_NAME}`).DataTable({
            processing: true,
            pageLength: 10,
            lengthMenu: [10, 25, 50, 100, 150, 200, 300],
            pagingType: "simple_numbers",
            scrollX: true,
            scrollCollapse: true,
            dom: "rtilp",
            buttons: [],
            order: [],
            data: OrdersTable.DATA,
            columns: this.getTableColumns(),
            columnDefs: this.getColumnDefs(),
            language: this.getTableLanguageConfig(),
            drawCallback: this.handleDrawCallback.bind(this),
            initComplete: this.handleInitComplete.bind(this),
            deferRender: true,
        });
    }

    getTableColumns() {
        return [
            {
                title: "Order ID",
                className: "th-order-id",
                data: "order_id",
                render: (data, type, row) => checkEmpty(row, "order_id", "--"),
            },
            {
                title: "Customer Name",
                className: "th-customer-name",
                data: "customer_name",
                render: (data, type, row) =>
                    checkEmpty(row, "customer_name", "--"),
            },
            {
                title: "Contact",
                className: "th-contact",
                data: "contact",
                render: (data, type, row) => checkEmpty(row, "contact", "--"),
            },
            {
                title: "Place",
                className: "th-place",
                data: "place",
                render: (data, type, row) => checkEmpty(row, "place", "--"),
            },
            {
                title: "Service",
                className: "th-service",
                data: "service",
                render: (data, type, row) => checkEmpty(row, "service", "--"),
            },
            {
                title: "Payment Status",
                className: "th-payment-status",
                data: "payment_status",
                render: (data, type, row) =>
                    this.renderStatusColumn(row, "payment_status"),
            },
            {
                title: "Order Status",
                className: "th-order-status",
                data: "order_status",
                render: (data, type, row) =>
                    this.renderStatusColumn(row, "order_status"),
            },
            {
                title: "Actions",
                className: "th-actions",
                data: null,
                bSortable: false,
                render: (data, type, row) => this.renderActionsColumn(row),
            },
        ];
    }

    getColumnDefs() {
        return [
            {
                defaultContent: "-",
                targets: "_all",
            },
        ];
    }

    getTableLanguageConfig() {
        return {
            emptyTable: `<p class="mt-">No records are available.</p>`,
            zeroRecords: `
                <div class="my-3">
                    <span class="d-block mt-2">Sorry we couldn't find any results matching your criteria.</span>
                    <span>Please try searching with another term or criteria.</span>
                </div>
            `,
            paginate: {
                previous:
                    "<i class='fa fa-chevron-left mr-1' style='color:#778ca2'></i>Prev",
                next: "Next<i class='fa fa-chevron-right ml-1' style='color:#778ca2'></i>",
            },
            searchPlaceholder: "Search",
        };
    }

    renderStatusColumn(row, property) {
        const status = checkEmpty(row, property, "--");
        const statusClass = status.toLowerCase().replace(" ", "-");
        return `<span class="status-badge status-${statusClass}">${status}</span>`;
    }

    renderActionsColumn(row) {
        const orderId = row?.order_id || "";

        return `
            <div class="action-buttons d-flex align-items-center gap-2">
                <span class="icon-box view-order tippy-black tippy-interactive"
                    data-order-id="${orderId}"
                    data-theme="black"
                    data-tippy-content="VIEW">
                    ${viewIcon({ width: 20, height: 20 })}
                </span>
                <span class="icon-box edit-order tippy-black tippy-interactive"
                    data-order-id="${orderId}"
                    data-tippy-content="EDIT">
                    ${editIcon({ width: 18, height: 18 })}
                </span>
                <span class="icon-box delete-order tippy-black tippy-interactive"
                    data-order-id="${orderId}"
                    data-tippy-content="DELETE">
                    ${deleteIcon({ width: 18, height: 18 })}
                </span>
            </div>
        `;
    }

    handleDrawCallback(settings) {
        if (settings.sTableId === OrdersTable.TABLE_NAME) {
            const pagination = $(this)
                .closest(`#${OrdersTable.TABLE_NAME} .dataTables_wrapper`)
                .find(".dataTables_paginate");
            const info = $(this)
                .closest(`#${OrdersTable.TABLE_NAME} .dataTables_wrapper`)
                .find(".dataTables_info");
            // const pages = this.api().page.info().pages;

            // pagination.toggle(pages > 0);
            // info.toggle(pages > 0);
        }

        Object.values(this.tippyInstances).forEach(tippyInstanceDestroy);
        const [black, white, interactive] = initilizeTippy(
            OrdersTable.TABLE_NAME,
            true
        );

        this.tippyInstances = { black, white, interactive };
    }

    handleInitComplete(settings, json) {
        setTimeout(() => {
            $(`.data-table-wrapper`)?.remove();
            $(`.list-view`)?.removeClass("d-none");
        }, 1 * 1000);
        $(`[name='${OrdersTable.TABLE_NAME}_length']`).select2();
        $(`#${OrdersTable.TABLE_NAME} .select2`).select2();
        console.log("Table initialization complete");
    }

    reinitializeTippy() {
        Object.values(this.tippyInstances).forEach((instance) => {
            if (instance && instance.destroy) instance.destroy();
        });
    }

    bindEvents() {
        $(document).on("click", `.view-order[data-order-id]`, (e) => {
            const orderId = $(e.currentTarget).data("order-id");
            this.handleViewOrder(orderId);
        });

        $(document).on("click", `.edit-order[data-order-id]`, (e) => {
            const orderId = $(e.currentTarget).data("order-id");
            this.handleEditOrder(orderId);
        });

        $(document).on("click", `.delete-order[data-order-id]`, (e) => {
            const orderId = $(e.currentTarget).data("order-id");
            this.handleDeleteOrder(orderId);
        });
    }

    handleViewOrder(orderId) {
        //  url : `${apiEndPoints("ORDER", "EDIT").replace('{%ORDER_ID%}', orderId)}`,
        let config = {
            mode: "VIEW",
            module: `ORDER`,
            element: `#slideOutPanel #renderWrapper`,
            url: `${apiEndPoints("ORDER", "FIELDS")}`,
            rowId: orderId,
        };
        new ListSidePanel(config)?.initialize();
        console.log(`View order: ${orderId}`);
    }

    handleEditOrder(orderId) {
        let config = {
            mode: "EDIT",
            module: `ORDER`,
            element: `#slideOutPanel #renderWrapper`,
            url: `${apiEndPoints("ORDER", "FIELDS")}`,
            rowId: orderId,
        };
        new ListSidePanel(config)?.initialize();
        console.log(`View order: ${orderId}`);
    }

    handleDeleteOrder(orderId) {
        console.log(`Delete order: ${orderId}`);
    }

    refreshTableData(newData = null) {
        if (newData) {
            this.table.clear().rows.add(newData).draw();
        } else {
            this.table.ajax.reload();
        }
    }

    filterByStatus(status) {
        this.table.column(".th-order-status").search(status).draw();
    }

    getSelectedRows() {
        return this.table.rows({ selected: true }).data().toArray();
    }
}

let sidePanelInstance;
$(() => {
    customSelectV2();

    /**
     * Employee
     */
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
    /**
     * Order
     */
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

    /**
     * Quotation
     */

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
            const { status } = await postPromise(
                `${apiEndPoints("QUOTATION", "SAVE")}`,
                param
            );
            if (!!status && status == "Success") {
                $(".sidepannel-wrapper").reset();
                toggleLoaderHideShow(`quotationPannel`, "hide");
            }
        } catch (error) {
            toggleLoaderHideShow(`quotationPannel`, "hide");
            console.log("Error saving quotation", error);
        }
    });

    updateRowIndices();

    // Dahboard Chart
    // 1. Get the context of the canvas element
    var serviceRevenueOptions = {
        series: [1200, 1900, 3000, 500, 1000],
        labels: ["Earthmover", "Crane", "JCB", "Water Boring", "Other"],
        chart: {
            type: "donut",
            height: 350,
        },
        colors: ["#7267ef", "#8980f2", "#a098f4", "#b7b1f7", "#d5d2fa"],
        dataLabels: {
            enabled: true,
            style: {
                fontSize: "12px",
                fontFamily: "Arial",
                colors: ["#fff"],
            },
            background: {
                enabled: true,
                foreColor: "#7267ef",
                borderColor: "transparent",
                padding: 4,
                borderRadius: 2,
                opacity: 1,
            },
            formatter: function (val, opts) {
                return " $" + opts.w.globals.series[opts.seriesIndex];
            },
        },
        plotOptions: {
            pie: {
                donut: {
                    size: "65%",
                    labels: {
                        show: true,
                        name: {
                            show: true,
                            fontSize: "14px",
                            fontFamily: "Arial",
                            color: "#7267ef",
                            offsetY: -10,
                        },
                        value: {
                            show: true,
                            fontSize: "20px",
                            fontFamily: "Arial",
                            color: "#7267ef",
                            offsetY: 5,
                            formatter: function (val) {
                                return "$" + val;
                            },
                        },
                        total: {
                            show: true,
                            showAlways: true,
                            label: "Total Revenue",
                            color: "#7267ef",
                            fontSize: "14px",
                            fontFamily: "Arial",
                            formatter: function (w) {
                                return w.globals.seriesTotals.reduce((a, b) => {
                                    return a + b;
                                }, 0);
                            },
                        },
                    },
                },
            },
        },
        stroke: {
            width: 2,
            colors: ["#fff"],
        },
        legend: {
            position: "right",
            horizontalAlign: "center",
            fontSize: "16px",
            fontFamily: "Arial",
            labels: {
                colors: "#7267ef",
                useSeriesColors: false,
            },
            markers: {
                width: 12,
                height: 12,
                strokeWidth: 0,
                fillColors: [
                    "#7267ef",
                    "#8980f2",
                    "#a098f4",
                    "#b7b1f7",
                    "#d5d2fa",
                ],
            },
        },
        tooltip: {
            y: {
                formatter: function (val, opts) {
                    const total = opts.w.globals.seriesTotals.reduce(
                        (a, b) => a + b,
                        0
                    );
                    const percentage = ((val / total) * 100).toFixed(1);
                    return `$${val} (${percentage}%)`;
                },
            },
            style: {
                fontSize: "12px",
                fontFamily: "Arial",
            },
        },
        responsive: [
            {
                breakpoint: 480,
                options: {
                    chart: {
                        height: 300,
                    },
                    legend: {
                        position: "bottom",
                    },
                },
            },
        ],
    };

    var serviceRevenueChart = new ApexCharts(
        document.querySelector("#serviceWiseRevenue"),
        serviceRevenueOptions
    );
    serviceRevenueChart.render();

    // Dynamic data calculation for past 6 months
    function getPastSixMonths() {
        const months = [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
        ];
        const currentMonth = new Date().getMonth();
        const pastSixMonths = [];

        for (let i = 5; i >= 0; i--) {
            const monthIndex = (currentMonth - i + 12) % 12;
            pastSixMonths.push(months[monthIndex]);
        }

        return pastSixMonths;
    }

    // Sample data - replace with your actual data
    const currentYearData = {
        Jan: 45,
        Feb: 52,
        Mar: 38,
        Apr: 60,
        May: 48,
        Jun: 52,
        Jul: 55,
        Aug: 42,
        Sep: 58,
        Oct: 50,
        Nov: 47,
        Dec: 53,
    };

    const previousYearData = {
        Jan: 35,
        Feb: 41,
        Mar: 32,
        Apr: 48,
        May: 40,
        Jun: 45,
        Jul: 42,
        Aug: 38,
        Sep: 46,
        Oct: 39,
        Nov: 36,
        Dec: 44,
    };

    const pastSixMonths = getPastSixMonths();
    const currentYearOrders = pastSixMonths.map(
        (month) => currentYearData[month] || 0
    );
    const previousYearOrders = pastSixMonths.map(
        (month) => previousYearData[month] || 0
    );

    var dynamicOrderComparisonOptions = {
        series: [
            {
                name: "Current Year Orders",
                type: "column",
                data: currentYearOrders,
            },
            {
                name: "Previous Year Orders",
                type: "line",
                data: previousYearOrders,
            },
        ],
        chart: {
            height: 350,
            type: "line",
            stacked: false,
            toolbar: { show: true },
        },
        stroke: {
            width: [0, 3],
            curve: "smooth",
            colors: ["#7267ef", "#8980f2"],
        },
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: "60%",
                borderRadius: 4,
            },
        },
        colors: ["#7267ef", "#8980f2"],
        dataLabels: { enabled: false },
        fill: { opacity: [0.85, 1] },
        markers: {
            size: 5,
            colors: ["#8980f2"],
            strokeColors: "#fff",
            strokeWidth: 2,
        },
        xaxis: {
            categories: pastSixMonths,
            labels: { style: { colors: "#7267ef", fontSize: "12px" } },
            axisBorder: { color: "#7267ef" },
            axisTicks: { color: "#7267ef" },
        },
        yaxis: {
            title: { text: "Number of Orders", style: { color: "#7267ef" } },
            labels: { style: { colors: "#7267ef", fontSize: "12px" } },
            min: 0,
        },
        grid: { borderColor: "#f1f1f1", strokeDashArray: 3 },
        tooltip: {
            y: {
                formatter: function (val) {
                    return val + " orders";
                },
            },
            theme: "light",
        },
        legend: {
            position: "top",
            horizontalAlign: "center",
            labels: { colors: "#7267ef" },
            markers: { fillColors: ["#7267ef", "#8980f2"] },
            itemMargin: { horizontal: 15, vertical: 8 },
            offsetY: 5,
        },
    };

    var dynamicOrderComparisonChart = new ApexCharts(
        document.querySelector("#recentOrders"),
        dynamicOrderComparisonOptions
    );
    dynamicOrderComparisonChart.render();

    var options = {
        series: [
            {
                name: "Monthly Income",
                type: "column",
                data: [
                    12000, 13500, 15000, 8000, 16000, 17500, 18000, 10000,
                    20000, 21000, 22000, 10000,
                ],
                color: "#7267ef",
            },
            {
                name: "Monthly Expense",
                type: "line",
                data: [
                    8000, 15000, 9000, 8800, 19000, 10000, 10500, 11000, 1000,
                    12000, 12500, 15000,
                ],
                color: "rgb(199, 217, 255)",
            },
        ],
        chart: {
            height: 350,
            type: "line",
            stacked: false,
            toolbar: {
                show: true,
            },
        },
        stroke: {
            width: [0, 3],
            curve: "smooth",
            colors: ["#7267ef", "rgb(199, 217, 255)"],
        },
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: "55%",
                borderRadius: 4,
                colors: {
                    backgroundBarColors: ["transparent"],
                },
            },
        },
        dataLabels: {
            enabled: false,
        },
        fill: {
            opacity: [0.85, 1],
            colors: ["#7267ef", "transparent"],
            gradient: {
                inverseColors: false,
                shade: "light",
                type: "vertical",
                opacityFrom: 0.85,
                opacityTo: 0.55,
                stops: [0, 100, 100, 100],
            },
        },
        markers: {
            size: 5,
            colors: ["rgb(199, 217, 255)"],
            strokeColors: "#fff",
            strokeWidth: 2,
            hover: {
                size: 7,
            },
        },
        xaxis: {
            categories: [
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "Jun",
                "Jul",
                "Aug",
                "Sep",
                "Oct",
                "Nov",
                "Dec",
            ],
            labels: {
                style: {
                    colors: "#7267ef",
                    fontSize: "12px",
                    fontFamily: "Arial",
                },
            },
            axisBorder: {
                color: "#7267ef",
            },
            axisTicks: {
                color: "#7267ef",
            },
        },
        yaxis: {
            title: {
                text: "$ (thousands)",
                style: {
                    color: "#7267ef",
                },
            },
            labels: {
                style: {
                    colors: "#7267ef",
                    fontSize: "12px",
                },
            },
        },
        grid: {
            borderColor: "#f1f1f1",
            strokeDashArray: 3,
        },
        tooltip: {
            y: {
                formatter: function (val) {
                    return "$ " + val + " thousands";
                },
            },
            theme: "light",
            style: {
                fontSize: "12px",
            },
        },
        legend: {
            labels: {
                colors: "#7267ef",
                useSeriesColors: false,
            },
            markers: {
                fillColors: ["#7267ef", "rgb(199, 217, 255)"],
            },
        },
    };

    var chart = new ApexCharts(
        document.querySelector("#monthlyIncomeExpenseChart"),
        options
    );
    chart.render();

    // calendar
    var calendarEl = document.getElementById("calendar");
    var calendar = new FullCalendar.Calendar(calendarEl, {
        height: "auto",
        dayMaxEvents: 10,
        headerToolbar: {
            right: "dayGridMonth,dayGridWeek,timeGridDay",
            center: "title",
            left: "prev,next,today",
        },
        buttonText: {
            today: "today",
            dayGridMonth: "Month",
            dayGridWeek: "Week",
            timeGridDay: "Day",
        },
        initialView: "dayGridMonth",
        events: function (fetchInfo, successCallback, failureCallback) {
            var startDate = moment(fetchInfo.start).format("YYYY-MM-DD");
            var endDate = moment(fetchInfo.end).format("YYYY-MM-DD");

            calendarLoader("#calendar-wrapper", "show", "loader-min-500");

            $.ajax({
                url: `${apiEndPoints("HOME", "LIST")}`,
                type: "POST",
                dataType: "json",
                data: {
                    start: startDate,
                    end: endDate,
                    // _token          : document.querySelector('meta[name="csrf-token"]').content,
                },
                success: function (doc) {
                    var calendarEvent = [];

                    successCallback(calendarEvent);
                    calendarLoader(
                        "#calendar-wrapper",
                        "hide",
                        "loader-min-500"
                    );
                },
                error: function (jqXHR, textStatus, errorThrown) {
                    calendarLoader(
                        "#calendar-wrapper",
                        "hide",
                        "loader-min-500"
                    );
                },
            });
        },
    });
    calendar.render();
    function calendarLoader(id, mode = "show", height = "") {
        if (mode == "show") {
            if (height != "") $(id).addClass(height);
            $(id + " .private-spinner-main-wrapper").removeClass(
                "private-spinner--hide"
            );
            $(id + " .private-spinner-main-wrapper").addClass(
                "private-spinner--active"
            );
        } else {
            if (height != "") $(id).removeClass(height);
            $(id + " .private-spinner-main-wrapper").addClass(
                "private-spinner--hide"
            );
            $(id + " .private-spinner-main-wrapper").removeClass(
                "private-spinner--active"
            );
        }
    }
});
