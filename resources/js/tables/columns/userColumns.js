import { ColumnRenderer } from "./columnRender";

export const userColumns = [
    {
        title: `Full Name`,
        field: 'full_name',
        resizable: false,
        sorter: "alphanum",
        headerSort: true,
        vertAlign: 'middle',
        responsive: 0,
        frozen:true,
        width: 200,
        headerTooltip: "Full Name",
        formatter: (cell) => ColumnRenderer.genericFormatter(cell, 'full_name')
    },
    {
        title: `Contact Number`,
        field: 'contact_number',
        resizable: false,
        sorter: "alphanum",
        headerSort: true,
        vertAlign: 'middle',
        responsive: 0,
        width: 200,
        headerTooltip: "Contact Number",
        formatter: (cell) => ColumnRenderer.genericFormatter(cell, 'contact_number')
    },
    {
        title: `Emergency Contact Number`,
        field: 'emergency_contact_number',
        resizable: false,
        sorter: "alphanum",
        headerSort: true,
        vertAlign: 'middle',
        responsive: 0,
        width: 200,
        headerTooltip: "Emergency Contact Number",
        formatter: (cell) => ColumnRenderer.genericFormatter(cell, 'emergency_contact_number')
    },
    {
        title: `Email`,
        field: 'email',
        resizable: false,
        sorter: "alphanum",
        headerSort: true,
        vertAlign: 'middle',
        responsive: 0,
        width: 200,
        headerTooltip: "Email Address",
        formatter: (cell) => ColumnRenderer.genericFormatter(cell, 'email')
    },
    {
        title: `Address`,
        field: 'address',
        resizable: false,
        sorter: "alphanum",
        headerSort: true,
        vertAlign: 'middle',
        responsive: 0,
        width: 300,
        headerTooltip: "Address",
        formatter: (cell) => ColumnRenderer.genericFormatter(cell, 'address')
    },
    {
        title: `Role / Designation`,
        field: 'role_designation',
        resizable: false,
        sorter: "alphanum",
        headerSort: true,
        vertAlign: 'middle',
        responsive: 0,
        width: 200,
        headerTooltip: "Role / Designation",
        formatter: (cell) => ColumnRenderer.genericFormatter(cell, 'role_designation')
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
        formatter: (cell) => ColumnRenderer.actionFormatter(cell, ['edit', 'delete'])
    }
]
