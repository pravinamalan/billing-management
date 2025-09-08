import { getPromise, postPromise } from "../../api/apiService";
import { apiEndPoints } from "../../api/endPoints";
import { localCache } from "../../api/services/localCahce";
import { dateInitialize, panelHelper, toggleLoaderHideShow, toggleSidePanel } from "../common-helper";
import { createSectionField } from "../field-render-helper";

export class ListSidePannel {
    constructor ({mode, module, element, url, rowId}){
        this.mode    = mode;
        this.module  = module;
        this.element = element;
        this.url     = url;
        this.rowId  = rowId;
    }


     /**
     * Initilize panel Configuration
     */
    initialize() {
        toggleSidePanel();
        toggleLoaderHideShow(`slideOutPanel`, 'show');

        this.panelConfig();
        this.getFields();
    }

    /**
     * Panel Configuration
     */
    panelConfig() {
        panelHelper({
            "panelHeader"         : this.panelHeader(),
            "panelFooter"         : this.panelFooter(),
            "panelWidth"          : "slideout-sm",
            "panelBody"           : {},
            "isFooter"            : ["ADD","EDIT"].includes(this.mode)? true : false
        });
    }

    /**
     * Panel Header
     * @returns
     */
    panelHeader() {
        return `<div class="">
                    <h4 class="header-title">${this.mode} ORDER</h4>
                    <span style="color:#9ca0ae;font-size:12px;display:none;">Select the filters you'd like to see on this list view.</span>
                </div>
                <div class="">
                    <button type="button" class="close-panel p-1 btn btn-default">
                        <svg fill="#3e4f69" width="15" height="15" id="Layer_1" style="enable-background:new 0 0 512 512;" version="1.1" viewBox="0 0 512 512" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M437.5,386.6L306.9,256l130.6-130.6c14.1-14.1,14.1-36.8,0-50.9c-14.1-14.1-36.8-14.1-50.9,0L256,205.1L125.4,74.5  c-14.1-14.1-36.8-14.1-50.9,0c-14.1,14.1-14.1,36.8,0,50.9L205.1,256L74.5,386.6c-14.1,14.1-14.1,36.8,0,50.9  c14.1,14.1,36.8,14.1,50.9,0L256,306.9l130.6,130.6c14.1,14.1,36.8,14.1,50.9,0C451.5,423.4,451.5,400.6,437.5,386.6z"></path></svg>
                    </button>
                </div>`
    }

    /**
     * Panel Footer
     * @returns
     */
    panelFooter() {

        return `<button class="btn btn-voilet action-btn save-data d-flex align-items-center ${["VIEW"].includes(this.mode)? "d-none" :""}" data-mode=${["EDIT"].includes(this.mode)? "UPDATE" :"SAVE"}>
                    <svg class="svg-position position--bottom position--mr-2 me-1"  width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 13.5V9.5C5 9.36739 5.05268 9.24021 5.14645 9.14645C5.24021 9.05268 5.36739 9 5.5 9H10.5C10.6326 9 10.7598 9.05268 10.8536 9.14645C10.9473 9.24021 11 9.36739 11 9.5V13.5M9.5 4.5H6M13.5 5.70625V13C13.5 13.1326 13.4473 13.2598 13.3536 13.3536C13.2598 13.4473 13.1326 13.5 13 13.5H3C2.86739 13.5 2.74021 13.4473 2.64645 13.3536C2.55268 13.2598 2.5 13.1326 2.5 13V3C2.5 2.86739 2.55268 2.74022 2.64645 2.64645C2.74021 2.55268 2.86739 2.5 3 2.5H10.2937C10.3587 2.49978 10.423 2.51236 10.4831 2.53702C10.5431 2.56169 10.5977 2.59796 10.6438 2.64375L13.3562 5.35625C13.402 5.40228 13.4383 5.45688 13.463 5.51694C13.4876 5.57699 13.5002 5.64133 13.5 5.70625Z" stroke="white" stroke-linecap="white" stroke-linejoin="round"></path>
                    </svg>
                    ${["EDIT"].includes(this.mode)? "Update" :"Save"}
                </button>
                <button type="button" class="btn btn-default ml-1 cancel d-flex align-items-center" data-filter-clear="PANEL">
                    <svg class="svg-position position--bottom position--mr-2 me-1" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.13334 10.8667C5.25557 10.9889 5.41112 11.05 5.60001 11.05C5.7889 11.05 5.94445 10.9889 6.06668 10.8667L8.00001 8.93337L9.95001 10.8834C10.0722 11.0056 10.2251 11.0638 10.4087 11.058C10.5918 11.0527 10.7445 10.9889 10.8667 10.8667C10.9889 10.7445 11.05 10.5889 11.05 10.4C11.05 10.2112 10.9889 10.0556 10.8667 9.93337L8.93334 8.00004L10.8833 6.05004C11.0056 5.92782 11.0638 5.77493 11.058 5.59137C11.0527 5.40826 10.9889 5.2556 10.8667 5.13337C10.7445 5.01115 10.5889 4.95004 10.4 4.95004C10.2111 4.95004 10.0556 5.01115 9.93334 5.13337L8.00001 7.06671L6.05001 5.11671C5.92779 4.99449 5.77512 4.93604 5.59201 4.94137C5.40845 4.94715 5.25557 5.01115 5.13334 5.13337C5.01112 5.2556 4.95001 5.41115 4.95001 5.60004C4.95001 5.78893 5.01112 5.94449 5.13334 6.06671L7.06668 8.00004L5.11668 9.95004C4.99445 10.0723 4.93623 10.2249 4.94201 10.408C4.94734 10.5916 5.01112 10.7445 5.13334 10.8667ZM8.00001 14.6667C7.07779 14.6667 6.21112 14.4916 5.40001 14.1414C4.5889 13.7916 3.88334 13.3167 3.28334 12.7167C2.68334 12.1167 2.20845 11.4112 1.85868 10.6C1.50845 9.78893 1.33334 8.92226 1.33334 8.00004C1.33334 7.07782 1.50845 6.21115 1.85868 5.40004C2.20845 4.58893 2.68334 3.88337 3.28334 3.28337C3.88334 2.68337 4.5889 2.20826 5.40001 1.85804C6.21112 1.50826 7.07779 1.33337 8.00001 1.33337C8.92223 1.33337 9.7889 1.50826 10.6 1.85804C11.4111 2.20826 12.1167 2.68337 12.7167 3.28337C13.3167 3.88337 13.7916 4.58893 14.1413 5.40004C14.4916 6.21115 14.6667 7.07782 14.6667 8.00004C14.6667 8.92226 14.4916 9.78893 14.1413 10.6C13.7916 11.4112 13.3167 12.1167 12.7167 12.7167C12.1167 13.3167 11.4111 13.7916 10.6 14.1414C9.7889 14.4916 8.92223 14.6667 8.00001 14.6667ZM8.00001 13.3334C9.47779 13.3334 10.7362 12.814 11.7753 11.7754C12.814 10.7363 13.3333 9.47782 13.3333 8.00004C13.3333 6.52226 12.814 5.26382 11.7753 4.22471C10.7362 3.18604 9.47779 2.66671 8.00001 2.66671C6.52223 2.66671 5.26401 3.18604 4.22534 4.22471C3.18623 5.26382 2.66668 6.52226 2.66668 8.00004C2.66668 9.47782 3.18623 10.7363 4.22534 11.7754C5.26401 12.814 6.52223 13.3334 8.00001 13.3334Z" fill="#545454"></path>
                    </svg>
                    Cancel
                </button>`
    }

    async getFields() {
        let { getItem, setFields }   = localCache();

        let isSidePannelFields    = getItem(null, 'fields') ?? {};
        isSidePannelFields    = Object.keys(isSidePannelFields)?.length;

        if(isSidePannelFields == 0) {

            let {status, fields } = await getPromise(`${this.url}`, this.params);

            if(!!status && status == "Success") {

                setFields(fields);
            }
        }
        let fields = getItem(null, 'fields');
        this.renderFields(fields);

    }
     /**
     * Render Fileds
     * @param {Object} data
     */
    renderFields(data = {}) {

        let forms = "";
        if(!!data && Object.keys(data).length) {
            forms = ` <form autocomplete="off" class="accordion sidepannel-wrapper" id="PANNEL_WRAPPER">`
                    for (const [sectionName, {fields, section_slug, section_id}] of Object.entries(data)) {
                    let sectionFileds = []
                    for(const [key, value] of Object.entries(fields)) { sectionFileds.push(value);}
                    forms +=  `<div class="accordion-item panel-default">
                        <a class="panel-heading section-heading" data-bs-toggle="collapse" href="#${section_slug}" role="button" aria-expanded="false" aria-controls="CONTACT_INFORMATION">
                            <svg class="arrow" width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.29001 15.88L13.17 12L9.29001 8.11999C9.19742 8.02741 9.12399 7.9175 9.07388 7.79653C9.02378 7.67557 8.99799 7.54592 8.99799 7.41499C8.99799 7.28406 9.02378 7.15441 9.07388 7.03345C9.12399 6.91248 9.19742 6.80257 9.29001 6.70999C9.38259 6.61741 9.4925 6.54397 9.61346 6.49386C9.73443 6.44376 9.86408 6.41797 9.99501 6.41797C10.1259 6.41797 10.2556 6.44376 10.3765 6.49386C10.4975 6.54397 10.6074 6.61741 10.7 6.70999L15.29 11.3C15.68 11.69 15.68 12.32 15.29 12.71L10.7 17.3C10.6075 17.3927 10.4976 17.4662 10.3766 17.5164C10.2557 17.5666 10.126 17.5924 9.99501 17.5924C9.86404 17.5924 9.73436 17.5666 9.61338 17.5164C9.49241 17.4662 9.38252 17.3927 9.29001 17.3C8.91001 16.91 8.90001 16.27 9.29001 15.88Z" fill="#4F4F5A" fill-opacity=".8"></path>
                            </svg>
                            <span class="section-label">${sectionName}</span>
                        </a>
                        <div class="panel-collapse collapse show" id="${section_slug}">
                            <div class="card card-body panel-body" style="align-items: center;">
                               ${createSectionField(this.mode, sectionFileds)}
                            </div>
                        </div>
                    </div>`
                }
            forms += `</form>`
        }
        $(`${this.element}`).html(forms);
        toggleLoaderHideShow(`slideOutPanel`, 'hide');
        this.fieldCustomInitialization(data);
        this.saveFormData();
        this.clearPannel();
    }
     /**
     * Field Custom Initialization
     * @param {Object} data
     */
    fieldCustomInitialization(data = {}) {

        $(`${this.element}`).find(`.select2`).select2();
        $(`${this.element}`).find(`[data-mask]`).inputmask();
        dateInitialize('PANNEL_WRAPPER')
    }
    /**
     * Save and Update Form Data
     */
    saveFormData(){
        let self = this;

        $(`.save-data`).off('click').on('click', async function() {

            const myForm = document.getElementById('PANNEL_WRAPPER');
            const formData = new FormData(myForm);
            const params = {};
            for (const [key, value] of formData.entries()) {
                params[key] = value;
            }

            let url;
            if($(this)[0].dataset.mode == "SAVE"){
                url = `${apiEndPoints("ORDER", "SAVE")}`
            }else if($(this)[0].dataset.mode == "UPDATE"){
                url = `${apiEndPoints("ORDER", "UPDATE").replace('{%ORDER_ID%}',self.rowId)}`
            }
            toggleLoaderHideShow(`slideOutPanel`, 'show');
           let { status } = await postPromise(url, params);

            if(!!status && status == "Success") {
                toggleLoaderHideShow(`slideOutPanel`, 'hide');
                setTimeout(()=> {
                    toggleSidePanel(); // Sidepanel close
                }, 800)
            }
        });
    }
    /**
     * Clear Pannel
     */
    clearPannel() {
        let self = this;
        $(`.cancel`).off('click').on('click', function() {
            let clearView = $(this).attr('data-filter-clear');
            if(["PANEL"].includes(clearView)) {
                setTimeout(()=> { toggleSidePanel(); }, 800) // Sidepanel close
            }

        });
    }
}
