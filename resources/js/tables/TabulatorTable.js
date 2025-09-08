// tabulator-table.js
import { toggleLoaderHideShow } from "../helper/common-helper";
import { ColumnRenderer } from "./columns/columnRender";



export class TabulatorTable {
    constructor({ element, module, tableName, url, config = {} }) {
        this.element = element;
        this.module = module;
        this.tableName = tableName;
        this.url = url;
        this.config = Object.assign({}, TabulatorTable.defaultConfig, config);
        this.tableInstance = null;
        this.totalRecords = 0;
        this.searchInstance = null;
    }

    /**
     * Initialize Tabulator
     */
    initialize() {
        toggleLoaderHideShow(this.module,'show');
        this.initializeTable();
        return this;
    }

    /**
     * Initialize Table
     */
    initializeTable() {
        const configOptions = this.getTableConfig();
        this.tableInstance = new Tabulator(this.tableName, configOptions);

        this.setupEventListeners();
        // this.setupSearch();

        return this.tableInstance;
    }

    /**
     * Get table configuration
     */
    getTableConfig() {
        const baseConfig = {
            layout: this.config.layout,
            responsiveLayout: this.config.responsiveLayout,
            addRowPos: "top",
            history: true,
            paginationSize:6,
            paginationSizeSelector:[10, 50, 100, 200],
            rowHeight: 60,
            ajaxURL: this.url,
            scrollToColumnIfVisible: false,
            ajaxParams: this.getAjaxParams.bind(this),
            ajaxConfig: this.getAjaxConfig(),
            ajaxResponse: this.handleAjaxResponse.bind(this),
            ajaxError: this.handleAjaxError.bind(this),
            initialSort: [{ column: "name", dir: "asc" }],
            columnDefaults: { tooltip: true },
            columns: ColumnRenderer.getColumns(this.module),
        };


        if (this.config.pagination) {
            Object.assign(baseConfig, {
                pagination: true,
                paginationSize: this.config.pageSize,
                paginationMode: "remote",
                filterMode: "remote",
                sortMode: "remote",
                dataLoaderErrorTimeout: 1,
                dataReceiveParams: { "last_page": "last_page" },
                dataSendParams: { "size": "recordsPerPage" },
                paginationCounter: this.getPaginationCounter.bind(this),
            });
        } else {

            Object.assign(baseConfig, {
                pagination: "local",
                paginationSize: this.config.pageSize,
                paginationCounter: "rows",
            });
        }

        return baseConfig;
    }

    /**
     * Get AJAX parameters
     */
    getAjaxParams() {
        return {
            // _token: window.csrToken,
            search: $(`#${this.module}_SEARCH #search`)?.val()
        };
    }

    /**
     * Get AJAX configuration
     */
    getAjaxConfig() {
        return {
            method: 'GET',
            headers: {
                "Authorization": `Bearer ${$('meta[name=access-token]').prop('content')}`,
                "Accept": "application/json",
            },
        };
    }

    /**
     * Handle AJAX response
     */
    handleAjaxResponse(url, params, response) {
        if (this.config.pagination) {

            this.totalRecords = response?.total || 0;
        }
        return response;
    }

    /**
     * Handle AJAX error
     */
    handleAjaxError(xhr, textStatus, errorThrown) {
        console.error(`Unable to get data for ${this.module} table:`, errorThrown);

    }

    /**
     * Get pagination counter text
     */
    getPaginationCounter(pageSize, currentRow, currentPage, totalRows, totalPages) {
        let currentPageLastRecord = (currentRow + pageSize) - 1;
        currentPageLastRecord = (currentPageLastRecord > this.totalRecords) ?
            this.totalRecords : currentPageLastRecord;
        return `Showing ${currentRow} to ${currentPageLastRecord} of ${this.totalRecords} entries`;
    }

    /**
     * Setup event listeners
     */
    setupEventListeners() {

        this.tableInstance.on('dataLoaded', this.handleDataLoaded.bind(this));


        this.tableInstance.on("renderComplete", this.handleRenderComplete.bind(this));


        $('body').on('click', `.refresh-table[data-section="${this.module}"]`,
            this.handleRefresh.bind(this));
    }

    /**
     * Handle data loaded event
     */
    handleDataLoaded(data) {
        if (data && data.length) {
            $(`#${this.module}_EMPTY_WRAPPER`).addClass('d-none');
            $(`#${this.module}_TABLE, #${this.module}_SEARCH, .refresh-table[data-section="${this.module}"], #${this.module}_COUNT`).removeClass('d-none');
        } else {
            $(`#${this.module}_TABLE`).addClass('d-none');
            $(`#${this.module}_EMPTY_WRAPPER, .refresh-table[data-section="${this.module}"]`).removeClass('d-none');
        }
         $(`.tabulator-page-size`).select2();
        $(`.data-table-wrapper`)?.remove();
        toggleLoaderHideShow(this.module,'hide');
    }

    /**
     * Handle render complete event
     */
    handleRenderComplete() {
        // Tippy destroy
    }

    /**
     * Handle refresh button click
     */
    handleRefresh() {
        this.refresh();
    }

    /**
     * Setup search functionality
     */
    setupSearch() {
        if ($(`#${this.module}_SEARCH`).length) {
            this.searchInstance = new TableSearch(
                `#${this.module}_SEARCH`,
                this.tableInstance,
                `#${this.module}`,
                ""
            );
            this.searchInstance.initialization();
        }
    }

    /**
     * Refresh table data
     */
    refresh(params = {}) {
        if (this.tableInstance) {
            this.tableInstance.setData(this.url, params);
        }
        return this;
    }

    /**
     * Get table instance y
     */
    getTableInstance() {
        return this.tableInstance;
    }

    /**
     * Update table data
     */
    setData(data) {
        if (this.tableInstance) {
            this.tableInstance.setData(data);
        }
        return this;
    }

    /**
     * Add row to table
     */
    addRow(data, position = "top") {
        if (this.tableInstance) {
            this.tableInstance.addRow(data, position);
        }
        return this;
    }

    /**
     * Update row in table
     */
    updateRow(id, data) {
        if (this.tableInstance) {
            this.tableInstance.updateRow(id, data);
        }
        return this;
    }

    /**
     * Delete row from table
     */
    deleteRow(id) {
        if (this.tableInstance) {
            this.tableInstance.deleteRow(id);
        }
        return this;
    }

    /**
     * Get selected rows
     */
    getSelectedRows() {
        return this.tableInstance ? this.tableInstance.getSelectedRows() : [];
    }

    /**
     * Destroy table instance
     */
    destroy() {
        if (this.tableInstance) {
            this.tableInstance.destroy();
        }

        if (this.searchInstance && this.searchInstance.destroy) {
            this.searchInstance.destroy();
        }


        $('body').off('click', `.refresh-table[data-section="${this.module}"]`);

        return this;
    }
}

// Default configuration
TabulatorTable.defaultConfig = {
    pagination: true,
    pageSize: 10,
    layout: "fitColumns",
    responsiveLayout: true,
};

// Export a helper function for easy initialization
// export function initializeTabulatorTable(config) {
//     return new TabulatorTable(config).initialize();
// }
