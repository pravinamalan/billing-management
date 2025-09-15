import { ColumnRenderer } from "./columnRender";

export const orderColumns = [
    {
            title: `Order ID`,
            field: 'order_id',
            resizable: false,
            sorter: "alphanum",
            headerSort: true,
            vertAlign: 'middle',
            responsive: 0,
            frozen:true,
            width: 150,
            headerTooltip: "Employee ID",
            formatter: (cell) => ColumnRenderer.genericFormatter(cell, 'order_id')
        },
        {
            title: `Customer Name`,
            field: 'customer_name',
            resizable: false,
            sorter: "alphanum",
            headerSort: true,
            vertAlign: 'middle',
            responsive: 0,
            frozen:true,
            width: 200,
            headerTooltip: "Customer Name",
            formatter: (cell) => ColumnRenderer.genericFormatter(cell, 'customer_name')
        },
        {
            title: `Contact Number`,
            field: 'customer_contact',
            resizable: false,
            sorter: "alphanum",
            headerSort: true,
            vertAlign: 'middle',
            responsive: 0,
            width: 200,
            headerTooltip: "Contact Number",
            formatter: (cell) => ColumnRenderer.genericFormatter(cell, 'customer_contact')
        },
        {
            title: `Place`,
            field: 'customer_place',
            resizable: false,
            sorter: "alphanum",
            headerSort: true,
            vertAlign: 'middle',
            responsive: 0,
            width: 200,
            headerTooltip: "Place",
            formatter: (cell) => ColumnRenderer.genericFormatter(cell, 'customer_place')
        },
        {
            title: `Service`,
            field: 'service',
            resizable: false,
            sorter: "alphanum",
            headerSort: true,
            vertAlign: 'middle',
            responsive: 0,
            width: 200,
            headerTooltip: "Service",
            formatter: (cell) => ColumnRenderer.genericFormatter(cell, 'service')
        },
        {
            title: `Payment Status`,
            field: 'payment_status',
            resizable: false,
            sorter: "alphanum",
            headerSort: true,
            vertAlign: 'middle',
            responsive: 0,
            width: 200,
            headerTooltip: "Payment Status",
            formatter: (cell) => ColumnRenderer.genericFormatter(cell, 'payment_status')
        },
        {
            title: `Order Status`,
            field: 'order_status',
            resizable: false,
            sorter: "alphanum",
            headerSort: true,
            vertAlign: 'middle',
            responsive: 0,
            width: 200,
            headerTooltip: "Order Status",
            formatter: (cell) => ColumnRenderer.genericFormatter(cell, 'order_status')
        },
        {
            title: `Action`,
            resizable: false,
            headerSort: false,
            vertAlign: 'middle',
            responsive: 0,
            headerTooltip: "Action",
            frozen:true,
            width: 150,
            formatter: (cell) => ColumnRenderer.actionFormatter(cell, ['view', 'edit', 'delete'])
        }
]
