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
]
