import { getPromise, postPromise } from "../../api/apiService";
import { apiEndPoints } from "../../api/endPoints";
import { localCache } from "../../api/services/localCahce";
import { SidePanel } from "../../panels/sidePanelConfig";
import { dateInitialize, toggleLoaderHideShow } from "../common-helper";
import { createSectionField } from "../field-render-helper";


export class ListSidePanel {
    constructor({mode, module, element, url, rowId}) {
        this.mode = mode;
        this.module = module;
        this.element = element;
        this.url = url;
        this.rowId = rowId;
        this.sidePanel = new SidePanel();
        this.panelId = `side-panel-${module}-${mode}`;
        this.cache = localCache();
    }

    /**
     * Initialize panel
     */
    async initialize() {
        try {

            this.sidePanel.initializeSidePanel({
                header: this.panelHeader(),
                footer: this.panelFooter(),
                panelWidth: "slideout-sm",
                panelId: this.panelId,
                isFooter: ["ADD", "EDIT"].includes(this.mode),
                onClose: () => this.handlePanelClose(),
                onSave: () => this.handleSave(),
                module: this.module
            });
            // toggleLoaderHideShow(`side-pannel`, 'show');
            // return
            this.sidePanel.showLoader();

            await this.getFields();

        } catch (error) {
            console.error('Error initializing side panel:', error);
            this.sidePanel.hideLoader();
            this.sidePanel.closeSidePanel();
        }
    }

    /**
     * Panel Header
     */
    panelHeader() {
        return {
            title: `${this.mode} ${this.module}`,
            subTitle: "",
            additionalButtons: []
        };
    }

    /**
     * Panel Footer
     */
    panelFooter() {
        const buttons = [];

        if (["ADD", "EDIT"].includes(this.mode)) {
            buttons.push({
                class: "btn btn-voilet action-btn save-btn d-flex align-items-center",
                text: this.mode === "EDIT" ? "Update" : "Save",
                id: "save-button"
            });
        }

        return { buttons };
    }

    /**
     * Handle panel close
     */
    handlePanelClose() {
        // Clean up any specific resources
        console.log(`Panel for ${this.module} closed`);
    }

    /**
     * Handle save action
     */
    async handleSave() {
        try {
            this.sidePanel.showLoader();

            const formData = this.collectFormData();

            const url = this.getApiUrl();

            const { status } = await postPromise(url, formData);

            if (status === "Success") {
                await this.handleSaveSuccess(response);

            }else{
                throw new Error(response.message || 'Failed to save data');
            }
        } catch (error) {
            await this.handleSaveError(error);

        }
    }

    /**
     * Collect form data
     */
    collectFormData() {
        const myForm = document.getElementById('PANNEL_WRAPPER');
        if (!myForm) return {};

        const formData = new FormData(myForm);
        const params = {};

        for (const [key, value] of formData.entries()) {
            params[key] = value;
        }

        return params;
    }

    getApiUrl() {
        if (this.mode === "ADD") {
            return apiEndPoints(this.module, "SAVE");
        } else if (this.mode === "EDIT") {

            return apiEndPoints(this.module, "UPDATE").replace(`{%${this.module}_ID%}`, this.rowId);
        }
        throw new Error("Invalid mode specified");
    }

    async handleSaveSuccess(response) {
        this.sidePanel.hideLoader();

        this.showNotification('Success', response.message || 'Data saved successfully', 'success');

        await new Promise(resolve => setTimeout(resolve, 500));

        this.sidePanel.closeSidePanel();
        this.refreshTable();
    }

    showNotification(title, message, type) {
        // change log to toster
        console.log(`${title}: ${message}`, type);
    }
    async handleSaveError(error) {
        console.error('Error saving data:', error);
        this.sidePanel.hideLoader();
        this.showNotification('Error', error.message, 'error');
    }

    refreshTable() {
        $(`.refresh-table[data-section="${this.module}"]`).trigger("click");
    }
    /**
     * Get fields from API or cache - USING MODULE-SPECIFIC CACHE
     */
    async getFields() {
        try {


            let fieldsData = this.cache.getItem(this.module, 'fields') || {};

            if (Object.keys(fieldsData).length === 0) {
                console.log(`Fetching fresh fields for module: ${this.module}`);
                const url = this.getFieldApiUrl();
                const { status, fields } = await getPromise(url);

                if (status === "Success") {
                    fieldsData = fields || {};

                    this.cache.setFields(this.module, fieldsData);

                } else {
                    throw new Error(`Failed to fetch fields for ${this.module}`);
                }
            } else {
                console.log(`Using cached fields for module: ${this.module}`);
            }
            console.log(fieldsData);
            // return

            this.renderFields(fieldsData);

        } catch (error) {
            console.error('Error getting fields:', error);
            this.sidePanel.hideLoader();
            this.sidePanel.setContent(`<div class="alert alert-danger">Error loading form: ${error.message}</div>`);
        }
    }

    getFieldApiUrl() {
        if (this.mode === "ADD") {

            return apiEndPoints(this.module, "FIELDS");

        } else if (this.mode === "EDIT") {
            console.log(this.mode,this.module,this.rowId);
            return apiEndPoints(this.module, "EDIT").replace(`{%${this.module}_ID%}`, this.rowId);
        }
        throw new Error("Invalid mode specified");
    }

    /**
     * Render fields in the panel
     */
    renderFields(data = {}) {
        try {
            let forms = "";

            if (data && Object.keys(data).length) {
                forms = `<form autocomplete="off" class="accordion sidepannel-wrapper" id="PANNEL_WRAPPER">`;

                for (const [sectionName, {fields, section_slug}] of Object.entries(data)) {
                    const sectionFields = Object.values(fields);

                    forms += `
                        <div class="accordion-item panel-default">
                            <a class="panel-heading section-heading" data-bs-toggle="collapse" href="#${section_slug}" role="button" aria-expanded="false">
                                <svg class="arrow" width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9.29001 15.88L13.17 12L9.29001 8.11999C9.19742 8.02741 9.12399 7.9175 9.07388 7.79653C9.02378 7.67557 8.99799 7.54592 8.99799 7.41499C8.99799 7.28406 9.02378 7.15441 9.07388 7.03345C9.12399 6.91248 9.19742 6.80257 9.29001 6.70999C9.38259 6.61741 9.4925 6.54397 9.61346 6.49386C9.73443 6.44376 9.86408 6.41797 9.99501 6.41797C10.1259 6.41797 10.2556 6.44376 10.3765 6.49386C10.4975 6.54397 10.6074 6.61741 10.7 6.70999L15.29 11.3C15.68 11.69 15.68 12.32 15.29 12.71L10.7 17.3C10.6075 17.3927 10.4976 17.4662 10.3766 17.5164C10.2557 17.5666 10.126 17.5924 9.99501 17.5924C9.86404 17.5924 9.73436 17.5666 9.61338 17.5164C9.49241 17.4662 9.38252 17.3927 9.29001 17.3C8.91001 16.91 8.90001 16.27 9.29001 15.88Z" fill="#4F4F5A" fill-opacity=".8"></path>
                                </svg>
                                <span class="section-label">${sectionName}</span>
                            </a>
                            <div class="panel-collapse collapse show" id="${section_slug}">
                                <div class="card card-body panel-body">
                                    ${createSectionField(this.mode, sectionFields)}
                                </div>
                            </div>
                        </div>`;
                }

                forms += `</form>`;
            } else {
                forms = `<div class="alert alert-warning">No form fields available for ${this.module}</div>`;
            }


            this.sidePanel.setContent(forms);
            this.fieldCustomInitialization(data);

        } catch (error) {
            console.error('Error rendering fields:', error);
            this.sidePanel.setContent(`<div class="alert alert-danger">Error rendering form: ${error.message}</div>`);
        }
    }

    /**
     * Initialize custom field components
     */
    fieldCustomInitialization(data = {}) {

        $(`#${this.panelId} .select2`).select2();
        $(`#${this.panelId} [data-mask]`).inputmask();
        dateInitialize('PANNEL_WRAPPER');
    }

    /**
     * Clear cache for this module
     */
    clearModuleCache() {
        this.cache.clearModule(this.module);
        console.log(`Cache cleared for module: ${this.module}`);
    }
}
