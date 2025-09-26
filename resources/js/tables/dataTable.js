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
