import tippy from "tippy.js";
import "tippy.js/dist/tippy.css";
import "tippy.js/animations/scale.css";
import { addIcon, removeIcon } from "../common/icon";
/**
 * Data check
 * @param {*} data
 * @param {*} key
 * @return  string
 */
export const checkEmpty = (data, key, isEmpty = "") => {
    return data?.hasOwnProperty(key) && data[key] != null && data[key] != ""
        ? data[key]
        : isEmpty;
};

/**
 * Tippy Initialize
 */
export function initilizeTippy(
    parent,
    isMaxHeight = false,
    maxHeight = "250px"
) {
    let blackInstance = tippy(`#${parent} .tippy-black`, {
        allowHTML: true,
        theme: "black",
        animation: "fade",
    });

    let whiteInstance = tippy(`#${parent} .tippy-white`, {
        allowHTML: true,
        theme: "white",
    });

    let tippyInteractive = tippy(`#${parent} .tippy-interactive`, {
        allowHTML: true,
        theme: "white",
        interactive: true,
        appendTo: document.body,
        ...(isMaxHeight && {
            onShow(instance) {
                $(instance.popper).find(".tippy-content").css({
                    "max-height": maxHeight,
                    "overflow-y": "auto",
                });
            },
        }),
    });

    return [blackInstance, whiteInstance, tippyInteractive];
}

/**
 * Tippy Destroy
 */
export function tippyInstanceDestroy(instance) {
    if (instance !== undefined) {
        $.each(instance, function (index, item) {
            item.destroy();
        });
    }
}

/**
 * Sidepanel | Toggle
 */
export const toggleSidePanel = () => {
    let sidePanelELement = document.getElementsByClassName("slideout")[0];
    let backDrop = document.getElementsByClassName("custom-modal-backdrop")[0];
    let bodyElement = document.getElementsByTagName("body")[0];

    sidePanelELement.classList.toggle("in");
    backDrop.classList.toggle("in");
    bodyElement.classList.toggle("side-panel-overlay");
};

export function toggleLoaderHideShow(section, mode = "hide", height = "") {
    

    if (mode == "show") {
        $("#" + section + " .private-spinner-main-wrapper").removeClass(
            "private-spinner--hide"
        );
        $("#" + section + " .private-spinner-main-wrapper").addClass(
            "private-spinner--active"
        );
        if (height != "") {
            $("#" + section + " .parent-loader-height").addClass(height);
        }
    } else {
        setTimeout(() => {
            $("#" + section + " .private-spinner-main-wrapper").addClass(
                "private-spinner--hide"
            );
            $("#" + section + " .private-spinner-main-wrapper").removeClass(
                "private-spinner--active"
            );
            if (height != "") {
                $("#" + section + " .parent-loader-height").removeClass(height);
            }
        }, 100);
    }
}
/**
 * Loader | Hide/Show
 * @param {string} Parent 
 * @param {string} Mode 
 * @param {string} Height 
 */
export function toggleLoaderV1(parent, mode="hide", height = ''){
    let parentElement = document.querySelector(parent);
    let loaderElement = parentElement.getElementsByClassName('private-spinner-main-wrapper')[0];
    let loaderHeight  = parentElement.getElementsByClassName('parent-loader-height')[0];
    if(mode == 'show'){
        loaderElement.classList.remove('private-spinner--hide');
        loaderElement.classList.add('private-spinner--active');
        if(height != ''){
            loaderHeight.classList.add(height);
        }
    }else{
        loaderElement.classList.add('private-spinner--hide');
        loaderElement.classList.remove('private-spinner--active');
        if(height != ''){
            loaderHeight.classList.remove(height);
        }
    }
}
/**
 * Panel Helpaer Version 2
 * @param {*} panelHeader
 * @param {*} panelFooter
 */
export const panelHelper = ({
    panelHeader,
    panelFooter,
    panelWidth = "slideout-sm",
    panelBody = {},
    isFooter = true,
    isHeader = true,
}) => {
    let panelElement = document.getElementById("slideOutPanel");
    let pannelTitle = panelElement.querySelector(".header-title");
    let header = panelElement.querySelector(".custom-modal-header");
    let footer = panelElement.querySelector(".custom-modal-footer");

    panelElement.className = "";
    panelElement.classList.add(`slideout`, `forms-new`, `in`, `${panelWidth}`);

    panelElement.getElementsByClassName(
        "custom-modal-body"
    )[0].style = `background: ${panelBody?.background ?? "#EFF5F5"};padding: ${
        panelBody?.padding ?? "20px"
    }`;

    header.innerHTML = panelHeader;
    footer.innerHTML = panelFooter;

    if (!isFooter)
        panelElement.getElementsByClassName(
            "custom-modal-footer"
        )[0].style = `display: none; !important`;
    else
        panelElement.getElementsByClassName(
            "custom-modal-footer"
        )[0].style = `display: block;`;

    if (!isHeader)
        panelElement.getElementsByClassName(
            "custom-modal-header"
        )[0].style = `display: none; !important`;
    else
        panelElement.getElementsByClassName(
            "custom-modal-header"
        )[0].style = `display: flex;`;
};

/**
 * Letter Capitalize
 * @param {*} words
 * @returns
 */
export const capitalizeLetter = (words) => {
    var separateWord = words.replaceAll("_", " ").toLowerCase().split(" ");
    for (var i = 0; i < separateWord.length; i++) {
        separateWord[i] =
            separateWord[i].charAt(0).toUpperCase() +
            separateWord[i].substring(1);
    }
    return separateWord.join(" ");
};

/**
 * Date Picker Initialize
 * @param {*} section
 */
export function dateInitialize(section) {
    $(`#${section} .all_date_picker`).datetimepicker({
        format: "MM/DD/YYYY",
        pickTime: false,
        viewMode: $(`#${section} .all_date_picker`).data("date-initial-view"),
    });

    $(`#${section} .age-verification.past_date_picker`).datetimepicker({
        format: "MM/DD/YYYY",
        pickTime: false,
        maxDate: new Date(),
        useCurrent: false,
        viewMode: $(`#${section} .age-verification.past_date_picker`).data(
            "date-initial-view"
        ),
    });

    $(`#${section} .past_date_picker`).datetimepicker({
        format: "MM/DD/YYYY",
        pickTime: false,
        maxDate: new Date(),
        useCurrent: ["staffFields"].includes(section) ? false : true,
        viewMode: $(`#${section} .past_date_picker`).data("date-initial-view"),
    });

    $(`#${section} .future_date_picker`).datetimepicker({
        format: "MM/DD/YYYY",
        pickTime: false,
        minDate: new Date(),
        viewMode: $(`#${section} .future_date_picker`).data(
            "date-initial-view"
        ),
    });

    $(`#${section} .week_date_picker`).datetimepicker({
        daysOfWeekDisabled: [0],
        format: "MM/DD/YYYY",
        pickTime: false,
        minDate: new Date(),
        viewMode: $(`#${section} .week_date_picker`).data("date-initial-view"),
    });
}

export const renderFormField = () => {
    return `<form action="" method="" class="accordion sidepannel-wrapper">
        <div class="accordion-item panel-default">
            <a class="panel-heading section-heading" data-bs-toggle="collapse" href="#CUSTOMER_DETAILS" role="button" aria-expanded="false">
                    <svg class="arrow" width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.29001 15.88L13.17 12L9.29001 8.11999C9.19742 8.02741 9.12399 7.9175 9.07388 7.79653C9.02378 7.67557 8.99799 7.54592 8.99799 7.41499C8.99799 7.28406 9.02378 7.15441 9.07388 7.03345C9.12399 6.91248 9.19742 6.80257 9.29001 6.70999C9.38259 6.61741 9.4925 6.54397 9.61346 6.49386C9.73443 6.44376 9.86408 6.41797 9.99501 6.41797C10.1259 6.41797 10.2556 6.44376 10.3765 6.49386C10.4975 6.54397 10.6074 6.61741 10.7 6.70999L15.29 11.3C15.68 11.69 15.68 12.32 15.29 12.71L10.7 17.3C10.6075 17.3927 10.4976 17.4662 10.3766 17.5164C10.2557 17.5666 10.126 17.5924 9.99501 17.5924C9.86404 17.5924 9.73436 17.5666 9.61338 17.5164C9.49241 17.4662 9.38252 17.3927 9.29001 17.3C8.91001 16.91 8.90001 16.27 9.29001 15.88Z" fill="#4F4F5A" fill-opacity=".8"></path>
                    </svg>
                    <span class="section-label">Customer Details</span>
            </a>
            <div class="panel-collapse collapse show" id="CUSTOMER_DETAILS">
                <div class="card card-body panel-body">
                    <div class="form-group">
                        <label>Customer Name</label>
                        <div class="input-field-wrapper">
                            <input type="text" name="customer_name" class="form-control" required>
                        </div>
                    </div>
                    <div class="form-group">
                        <label>Phone</label>
                        <div class="input-field-wrapper">
                            <input type="text" name="customer_phone" class="form-control">
                        </div>
                    </div>
                    <div class="form-group">
                        <label>Email</label>
                        <div class="input-field-wrapper">
                            <input type="email" name="customer_email" class="form-control">
                        </div>
                    </div>
                    <div class="form-group">
                        <label>Address</label>
                        <div class="input-field-wrapper">
                            <textarea type="text" rows="4" cols="50" class="form-control name="customer_address"></textarea>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="accordion-item panel-default">
            <a class="panel-heading section-heading" data-bs-toggle="collapse" href="#QUOTATION_DETAILS" role="button" aria-expanded="false">
                <svg class="arrow" width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.29001 15.88L13.17 12L9.29001 8.11999C9.19742 8.02741 9.12399 7.9175 9.07388 7.79653C9.02378 7.67557 8.99799 7.54592 8.99799 7.41499C8.99799 7.28406 9.02378 7.15441 9.07388 7.03345C9.12399 6.91248 9.19742 6.80257 9.29001 6.70999C9.38259 6.61741 9.4925 6.54397 9.61346 6.49386C9.73443 6.44376 9.86408 6.41797 9.99501 6.41797C10.1259 6.41797 10.2556 6.44376 10.3765 6.49386C10.4975 6.54397 10.6074 6.61741 10.7 6.70999L15.29 11.3C15.68 11.69 15.68 12.32 15.29 12.71L10.7 17.3C10.6075 17.3927 10.4976 17.4662 10.3766 17.5164C10.2557 17.5666 10.126 17.5924 9.99501 17.5924C9.86404 17.5924 9.73436 17.5666 9.61338 17.5164C9.49241 17.4662 9.38252 17.3927 9.29001 17.3C8.91001 16.91 8.90001 16.27 9.29001 15.88Z" fill="#4F4F5A" fill-opacity=".8"></path>
                </svg>
                <span class="section-label">Quotation Details</span>
            </a>
            <div class="panel-collapse collapse show" id="QUOTATION_DETAILS">
                <div class="card card-body panel-body table-responsive" style="display: block;">
                    <table class="table" id="services-table">
                        <thead>
                            <tr>
                                <th>Service</th>
                                <th>Qty</th>
                                <th>Unit Price</th>
                                <th>Total</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr data-row-count=0>
                                <td><div class="form-group mx-1"><div class="input-field-wrapper"><textarea type="text" rows="4" cols="50" name="items[0][service_name]" class="form-control" required></textarea></div></div></td>
                                <td style="width: 13%;"><div class="form-group mx-1"><div class="input-field-wrapper"><input type="number" name="items[0][quantity]" class="form-control qty" value="1"></div></div></td>
                                <td style="width: 18%;"><div class="form-group mx-1"><div class="input-field-wrapper"><input type="number" name="items[0][unit_price]" class="form-control price" step="0.01"></div></div></td>
                                <td style="width: 18%;"><div class="form-group mx-1"><div class="input-field-wrapper"><input type="text" class="form-control line-total" readonly></div></div></td>
                                <td><div class="action-buttons"><span id="addRow" class="add-row">${addIcon({ width: 18, height: 18 })}</span> <span class="remove-row" id="addRow">${removeIcon({ width: 18, height: 18 })}</span></div></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </form>`;
};
