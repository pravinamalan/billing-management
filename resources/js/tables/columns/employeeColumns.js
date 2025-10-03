import { ColumnRenderer } from "./columnRender";

export const employeeColumns = [
    {
        title: `Employee ID`,
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
        title: `Email`,
        field: 'employee_email',
        resizable: false,
        sorter: "alphanum",
        headerSort: true,
        vertAlign: 'middle',
        responsive: 0,
        width: 200,
        headerTooltip: "Email Address",
        formatter: (cell) => ColumnRenderer.genericFormatter(cell, 'employee_email')
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
        title: `Joining Date`,
        field: 'joining_date',
        resizable: false,
        sorter: "date",
        headerSort: true,
        vertAlign: 'middle',
        responsive: 0,
        width: 200,
        headerTooltip: "Joining Date",
        formatter: (cell) => ColumnRenderer.dateFormatter(cell)
    },
    {
        title: `Working Status`,
        field: 'working_status',
        resizable: false,
        sorter: "alphanum",
        headerSort: true,
        vertAlign: 'middle',
        responsive: 0,
        width: 170,
        headerTooltip: "Working Status",
        formatter: (cell) => ColumnRenderer.statusFormatter(cell)
    },
    {
        title: `Assigned Machine`,
        field: 'assigned_machine',
        resizable: false,
        sorter: "alphanum",
        headerSort: true,
        vertAlign: 'middle',
        responsive: 0,
        width: 200,
        headerTooltip: "Assigned Machine",
        formatter: (cell) => ColumnRenderer.genericFormatter(cell,"assigned_machine")
    },
    {
        title: `Documents`,
        field: 'documents',
        resizable: false,
        sorter: "alphanum",
        headerSort: true,
        vertAlign: 'middle',
        responsive: 0,
        width: 300,
        headerTooltip: "Documents",
        formatter: (cell) => ColumnRenderer.genericFormatter(cell,"documents")
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
];
