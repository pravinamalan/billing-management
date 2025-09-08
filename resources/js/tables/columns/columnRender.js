import { deleteIcon, editIcon, viewIcon } from "../../common/icon";
import { checkEmpty } from "../../helper/common-helper";
import { employeeColumns } from "./employeeColumns";

export class ColumnRenderer {
    static getColumns(module) {
        const renderers = {
            "EMPLOYEE": employeeColumns,
        };

        return renderers[module] || [];
    }

    /**
     * Generic formatter for table cells
     */
    static genericFormatter(cell, field, defaultValue = '--') {
        const cellData = cell.getData();
        return `<span>${checkEmpty(cellData, field, defaultValue)}</span>`;
    }

    /**
     * Status formatter with colored badges
     */
    static statusFormatter(cell, values = {}) {
        const value = cell.getValue();

        const statusConfig = {
            Active: { class: 'badge-success', text: 'Active' },
            Inactive: { class: 'badge-secondary', text: 'Inactive' },
            Left: { class: 'badge-warning', text: 'Left' },
            ...values
        };

        const config = statusConfig[value] || { class: 'badge-light', text: value };
        return `<span class="badge ${config.class}">${config.text}</span>`;
    }

    /**
     * Date formatter
     */
    static dateFormatter(cell, format = 'DD/MM/YYYY') {
        const value = cell.getValue();
        if (!value) return '--';

        return moment(value).format(format);
    }

    /**
     * Action formatter with options
     */
    static actionFormatter(cell, actions = ['edit', 'delete']) {
        const cellData = cell.getData();
        const id = cellData.id;

        let actionHTML = '';

        if (actions.includes('edit')) {
            actionHTML += `
                <span class="icon-box view-action"
                    data-id="${id}
                    title="View">
                    ${viewIcon({ width: 20, height: 20 })}
                </span>`;
        }

        if (actions.includes('delete')) {
            actionHTML += `
                <span class="icon-box edit-action"
                    data-id="${id}
                    title="Edit">
                    ${editIcon({ width: 18, height: 18 })}
                </span>`;
        }

        if (actions.includes('view')) {
            actionHTML += `
                <span class="icon-box delete-action"
                    data-id="${id}
                    title="Delete">
                    ${deleteIcon({ width: 18, height: 18 })}
                </span>`;
        }

        return `<div class="action-buttons d-flex align-items-center gap-2 justify-content-center">${actionHTML}</div>`;
    }
}




