import { ColumnRenderer } from "./columnRender";

export const quotationColumns = [
    {
        title: `Quotation ID`,
        field: 'id',
        resizable: false,
        sorter: "alphanum",
        headerSort: true,
        vertAlign: 'middle',
        responsive: 0,
        frozen:true,
        width: 150,
        headerTooltip: "Employee ID",
        formatter: (cell) => ColumnRenderer.genericFormatter(cell, 'id')
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
        field: 'customer_phone',
        resizable: false,
        sorter: "alphanum",
        headerSort: true,
        vertAlign: 'middle',
        responsive: 0,
        width: 200,
        headerTooltip: "Contact Number",
        formatter: (cell) => ColumnRenderer.genericFormatter(cell, 'customer_phone')
    },
    {
        title: `Email`,
        field: 'customer_email',
        resizable: false,
        sorter: "alphanum",
        headerSort: true,
        vertAlign: 'middle',
        responsive: 0,
        width: 200,
        headerTooltip: "Email Address",
        formatter: (cell) => ColumnRenderer.genericFormatter(cell, 'customer_email')
    },
    {
        title: `Address`,
        field: 'customer_address',
        resizable: false,
        sorter: "alphanum",
        headerSort: true,
        vertAlign: 'middle',
        responsive: 0,
        width: 200,
        headerTooltip: "Address",
        formatter: (cell) => ColumnRenderer.genericFormatter(cell, 'customer_address')
    },
    {
        title: `Total Amount`,
        field: 'total_amount',
        resizable: false,
        sorter: "alphanum",
        headerSort: true,
        vertAlign: 'middle',
        responsive: 0,
        width: 200,
        headerTooltip: "Total Amount",
        formatter: (cell) => ColumnRenderer.genericFormatter(cell, 'total_amount')
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
        formatter: (cell) => ColumnRenderer.actionFormatter(cell, ['edit','delete' ,'download'])
    }
]
