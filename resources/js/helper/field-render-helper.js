import { capitalizeLetter, checkEmpty } from "./common-helper";
import { Helper } from "./utilities";

export const createSectionField = (mode = 'VIEW', fields = [], fieldOption = {}, fieldValues = {}, aditionKeys = {}, checkVisibility = false) => {
    let sectionFields = '';

    if (Array.isArray(fields) && fields.length > 0) {
        let fieldView = "";
        if(fields.length == 1) {
            fieldView = " custom-wdith-50 ";
        }
        fields.forEach((item, index) => {
            if(checkVisibility && !item.visibility)
                return;
            if (item.field_type.toUpperCase() == 'INPUTTEXT') {
                sectionFields += `${createInputField(mode, item, fieldValues, fieldView)}`;
            } else if (item.field_type.toUpperCase() == 'SELECT') {
                sectionFields += `${createSelectField(mode, item, fieldOption, fieldValues, fieldView)}`;
            }  else if(item.field_type.toUpperCase() == "TEXTAREA") {
                sectionFields += `${createTextareaField(mode, item, fieldValues)}`;
            }else if(item.field_type.toUpperCase() == "ACTIONS") {
                sectionFields += `${createActionFields(mode,item,fieldValues)}`
            }
        });
    }

    return sectionFields;
}

/**
 * Render | Text Field
 * @param {String} mode
 * @param {Object} field
 * @param {Object} fieldValues
 * @returns
 */
export const createInputField = (mode = 'view', field = {}, fieldValues = {}, fieldView = "", showGroupName = true, childrenProperties = {}) => {
    let textField = '';
    if (Object.keys(field).length > 0) {

        let selectedValue = [];
        let fieldProperties = JSON.parse(field.field_properties);
        let [mandatory, hiddenElement, showElement, isRequired, isLabelEnable, hasError, isReadOnly] = getCustomProperties(mode, field, fieldProperties);
        let fieldName = checkEmpty(fieldProperties, "field_name");

        let customRequiredClass = !!childrenProperties && Object.keys(childrenProperties).length ? childrenProperties?.required_class_names : field?.required_class_names;
        textField = `<div class="${showGroupName ? "form-group" : ""}">
                        <label class="${mode != 'view' ? 'text-color text-color--dark' : 'text-color text-color--dark-ash'} ${isLabelEnable}">
                            <span>${setLanguage(checkEmpty(field, 'attribute_key'), checkEmpty(field, 'field_label'))}</span>
                        </label>
                        <div class="input-field-wrapper ${hiddenElement} ${fieldView}">
                            <input type="text" class="form-control ${getRequiredClass(customRequiredClass)} ${getCustomClass(fieldProperties)} ${checkFieldFormat(fieldProperties, checkEmpty(field, "field_data_type"))}" id="${setElementId(field, 'field_key')}" name="${setFieldName(fieldProperties)}" value="${selectedValue}" ${setFieldAttribute(fieldProperties)} ${mode == "VIEW" ? 'readonly' :''}  autocomplete="off"/>
                        </div>
                    </div>`;
    }
    return textField;
}

/**
 * Render | Select Field
 * @param {String} mode
 * @param {Object} field
 * @param {Object} fieldValues
 * @returns
 */
export const createSelectField = (mode = 'view', field = {}, fieldOption = {}, fieldValues = {}, fieldView = "", showGroupName = true, childrenProperties = {}) => {
    let selectField = '';
    if (Object.keys(field).length > 0) {
        let selectedId = [];
        let optionList = '';
        let fieldProperties = JSON.parse(field.field_properties);

        let [mandatory, hiddenElement, showElement, isRequired, isLabelEnable, hasError, isReadOnly] = getCustomProperties(mode, field, fieldProperties);

        let fieldName = checkEmpty(fieldProperties, "field_name");
        let readOnly = mode == "VIEW" ? "select2-readonly":'';
        // console.log(readOnly);

        // Placeholder Check
        let palceHolder = '';
        if (!checkEmpty(fieldProperties, 'multi_select')) {
            if (checkEmpty(fieldProperties, 'placeholder') && checkEmpty(fieldProperties.placeholder, 'label') != "") {
                palceHolder += `<option value="">
                                    ${setLanguage(checkEmpty(fieldProperties.placeholder, 'label_attribute_key'), checkEmpty(fieldProperties.placeholder, 'label'))}
                                </option>`;
            }
        }

        if (fieldProperties.hasOwnProperty('options') && checkEmpty(fieldProperties, 'options') != '') {
            if (checkEmpty(fieldProperties.options, 'values')) {
                let optionValues = fieldProperties.options.values;

                if (fieldValues && fieldValues[fieldName]) {
                    selectedId = Array.isArray(fieldValues[fieldName]) ? fieldValues[fieldName] : [fieldValues[fieldName]];
                }

                optionList = Object.entries(optionValues).map(([key, value]) => {
                    let isSelected = selectedId.includes(key) ? 'selected' : '';
                    return `<option value="${Helper.escapeHtml(key)}" ${isSelected}>
                                ${capitalizeLetter(Helper.escapeHtml(value))}
                            </option>`;
                }).join('');
            }
        }

        let customSelect2Class = 'select2';

        selectField = `<div class="${showGroupName ? "form-group" : ""}">
                            <span class="d-flex justify-content-between">
                                <label class="${mode != 'view' ? 'text-color text-color--dark' : 'text-color text-color--dark-ash'} ${isLabelEnable}">
                                    <span>${setLanguage(checkEmpty(field, 'attribute_key'), checkEmpty(field, 'field_label'))}</span>
                                </label>
                            </span>
                            <div class="input-field-wrapper ${readOnly} ${hiddenElement} ${checkEmpty(fieldProperties, 'multi_select') ? ' multiple-select-wrapper ' : ''} ${fieldView}">
                                <select class="${customSelect2Class} form-control ${isRequired} ${getRequiredClass(field?.required_class_names)} ${getCustomClass(fieldProperties)}" id="${setElementId(field, 'field_key')}" name="${setFieldName(fieldProperties)}" ${setFieldAttribute(fieldProperties)} ${checkEmpty(fieldProperties, 'multi_select') ? 'multiple' : ''} data-field-label="${Helper.escapeHtml(field?.field_label)}" ${readOnly}>
                                    ${palceHolder}
                                    ${optionList}
                                </select>
                            </div>
                        </div>`;
    }
    return selectField;
}

/**
 * Render | Text Area Field
 * @param {String} mode
 * @param {Object} field
 * @param {Object} fieldValues
 * @returns
 */
export const createTextareaField = (mode = 'view', field = {}, fieldValues = {}, fieldView = "", showGroupName = true) => {

    let textAreaField = '';
    if (Object.keys(field).length > 0) {
        let selectedValue = [];
        let selectedViewValue = [];

        let fieldProperties = JSON.parse(field.field_properties);
        let [mandatory, hiddenElement, showElement, isRequired, isLabelEnable, hasError, isReadOnly] = getCustomProperties(mode, field, fieldProperties);
        let fieldName = checkEmpty(fieldProperties, "field_name");
         textAreaField = `<div class="${showGroupName ? "form-group" : ""} ">
                        <label class="${mode != 'view' ? 'text-color text-color--dark' : 'text-color text-color--dark-ash'} ${isLabelEnable}">
                            <span>${setLanguage(checkEmpty(field, 'attribute_key'), checkEmpty(field, 'field_label'))}</span>
                        </label>

                        <div class="input-field-wrapper  ${hiddenElement} ${fieldView}">
                            <textarea type="text" rows="4" cols="50" class="form-control ${isRequired} ${getRequiredClass(field?.required_class_names)} ${getCustomClass(fieldProperties)} ${checkFieldFormat(fieldProperties, checkEmpty(field, "field_data_type"))}" id="${setElementId(field, 'field_key')}" name="${setFieldName(fieldProperties)}" ${setFieldAttribute(fieldProperties)} ${mode == "VIEW" ? 'readonly' :''}>${selectedValue}</textarea>
                        </div>
                    </div>`;

    }
    return textAreaField;
}
/**
 * Render | Action Field
 * @param {String} mode
 * @param {Object} field
 * @param {Object} fieldValues
 * @returns
 */
export const createActionFields = (mode = 'view', field = {}, fieldValues = {}, fieldView = "",) =>{
    let actionField = '';
    if (Object.keys(field).length > 0) {
        let fieldProperties = JSON.parse(field.field_properties);

        actionField = `<button id="${setElementId(field, 'field_key')}" name="${setFieldName(fieldProperties)}">${fieldProperties.button_text}</button>`
    }

    return actionField;
}
/**
 * Get Common Field Properties
 * @param {*} mode
 * @param {*} field
 * @param {*} fieldProperties
 * @returns
 */
export const getCustomProperties = (mode = 'view', field = {}, fieldProperties = {}) => {
    let hiddenElement = mode == 'view' ? 'd-none' : '';
    let showElement = mode == 'view' ? '' : 'd-none';
    let mandatory = checkEmpty(field, 'is_required') == 1 ? `<span class="mandatory">*</span>` : '<span class="mandatory d-none">*</span>';
    let isRequired = checkEmpty(field, 'is_required') == 1 ? 'field_validation' : '';
    let isLabelEnable = (fieldProperties.label_enabled != undefined && fieldProperties.label_enabled == false) ? "d-none" : "";
    let hasError   = (fieldProperties.has_error != undefined && fieldProperties.has_error == false) ? "d-none" : "";

    let isReadOnly = "";
    if(["SELECT", "DEPENDFIELD"].includes(checkEmpty(field, 'field_type')?.toUpperCase()) && checkEmpty(field, 'is_readonly'))
        isReadOnly = "select2-readonly"
    else if(["INPUTTEXT", "TEXTAREA", "PHONEGROUP", "INPUTGROUP"].includes(checkEmpty(field, 'field_type')?.toUpperCase()) && checkEmpty(field, 'is_readonly'))
        isReadOnly = `readonly`;
    else if(["CHECKBOX", "RADIO", "DYNAMIC-CHECKBOX", "RATING",'QUIL'].includes(checkEmpty(field, 'field_type')?.toUpperCase()) && checkEmpty(field, 'is_readonly'))
        isReadOnly = `disabled`;


    return [mandatory, hiddenElement, showElement, isRequired, isLabelEnable, hasError, isReadOnly];
};

/**
 * Get Custom class form field json
 * @param {Object} fieldProperties
 * @returns
 */
export function getCustomClass(fieldProperties = {}) {
    let customClass = "";
    if(fieldProperties && Object.keys(fieldProperties).length > 0) {
        if(fieldProperties.hasOwnProperty('custom_class') && checkEmpty(fieldProperties, 'custom_class') != '') {
            if(Array.isArray(fieldProperties.custom_class)) {
                customClass = fieldProperties.custom_class.join(' ');
            }
        }
    }
    return customClass;
}

/**
 * Required Class
 * @param {*} requiredClass
 * @returns
 */
export const getRequiredClass = (requiredClass = []) => {
    let customClass = "";
    if(Array.isArray(requiredClass) && requiredClass.length > 0) {
        customClass = requiredClass.join(' ');
    }
    return customClass;
}

/**
 * Check Field Format
 * @param {Object} fieldProperties
 * @param {String} fieldDataType
 * @returns
 */
export const checkFieldFormat = (fieldProperties = {}, fieldDataType = "") => {
    let customClass = '';
    if(typeof fieldDataType != 'undefined' && fieldDataType != "") {
        let fieldFormat = fieldDataType.toUpperCase();
        if (fieldFormat == 'NUMBER') {
            customClass = 'number-only'
        } else if (fieldFormat == 'PHONE') {
            customClass = 'phone-number-only'
        } else if (fieldFormat == 'EMAIL') {
            customClass = 'email-validator'
        } else if(fieldFormat == 'DATE') {
            customClass = (checkEmpty(fieldProperties, 'show_date') == 'past') ? ' past_date_picker '
                            : (checkEmpty(fieldProperties, 'show_date') == 'future') ? ' future_date_picker '
                            : (checkEmpty(fieldProperties, 'show_date') == 'all') ? ' all_date_picker '
                            : (checkEmpty(fieldProperties, 'show_date') == 'workWeek') ? ' week_date_picker '
                            : '';
        }
        else if(fieldFormat == 'TIME') {
            customClass = ' common-time-picker '
        }
        else if(fieldFormat == 'DATE-RANGE') {
            customClass = (checkEmpty(fieldProperties, 'show_date') == 'past') ? ' past_date_range_picker '
                            : (checkEmpty(fieldProperties, 'show_date') == 'future') ? ' future_date_range_picker '
                            : (checkEmpty(fieldProperties, 'show_date') == 'all') ? ' all_date_range_picker '
                            : (checkEmpty(fieldProperties, 'show_date') == 'all_with_overdue') ? ' all_with_overdue_date_range_picker '
                            : (checkEmpty(fieldProperties, 'show_date') == 'all_with_custom_overdue') ? ' all_with_custom_overdue_date_range_picker '
                            : (checkEmpty(fieldProperties, 'show_date') == 'workWeek') ? ' week_date_range_picker '
                            : (checkEmpty(fieldProperties, 'show_date') == 'all_with_next') ? ' all_with_next_date_range_picker '
                            : '';
        }
    }
    return customClass;
}

/**
 * Set Element ID
 * @param {Object} field
 * @param {String} key
 * @param {String} isEmpty
 * @returns
 */
export const setElementId = (field = {}, key = "", isEmpty = "") => {
    return (field.hasOwnProperty(key) && field[key] != null && field[key] != '') ? field[key] : isEmpty;
};


/**
 * Set Field Name
 * @param {Object} fieldProperties
 * @returns
 */
export const setFieldName = (fieldProperties = {}) => {
    let fieldName = '';
    if (fieldProperties && Object.keys(fieldProperties).length > 0 && checkEmpty(fieldProperties, 'field_name') != "") {
        fieldName = checkEmpty(fieldProperties, 'field_name').toLowerCase();
    }
    return fieldName;
};

/**
 * Set Element | Attributes
 * @param {Object} fieldProperties
 * @returns
 */
export const setFieldAttribute = (fieldProperties = {}) => {
    let attributes = '';
    let errorMessages = {};

    // Error Message attribute set
    if (checkEmpty(fieldProperties, 'messages') != '' && typeof checkEmpty(fieldProperties, 'messages') == 'object') {

        errorMessages = {
            required: `${errorMessagesReplace( fieldProperties.messages.required == "Gender is required." ? setLanguage('IC-Staff-5Amgc8iexY', 'This is required.') : setLanguage(checkEmpty(fieldProperties.messages, 'required_attribute_key'), checkEmpty(fieldProperties.messages, 'required')))}`,
            invalid: `${errorMessagesReplace(setLanguage(checkEmpty(fieldProperties.messages, 'invalid_attribute_key'), checkEmpty(fieldProperties.messages, 'invalid')))}`,
            invalidAge: `${errorMessagesReplace(setLanguage(checkEmpty(fieldProperties.messages, 'invalid_age_attribute_key'), checkEmpty(fieldProperties.messages, 'invalid_age')))}`,
            invalidDate: `${errorMessagesReplace(setLanguage(checkEmpty(fieldProperties.messages, 'invalid_date_attribute_key'), checkEmpty(fieldProperties.messages, 'invalid_date')))}`
        };

        attributes += ` data-error-message='${JSON.stringify(errorMessages)}'`;
        attributes += ` data-required-msg="${fieldProperties.messages.required == "Gender is required." ? setLanguage('-Staff-5Amgc8iexY', 'This is required.') : setLanguage(checkEmpty(fieldProperties.messages, 'required_attribute_key'), checkEmpty(fieldProperties.messages, 'required'))}"`;
    }

    // Placeholder attribute set
    if (checkEmpty(fieldProperties, 'placeholder') != '' && typeof checkEmpty(fieldProperties, 'placeholder') == 'object') {
        attributes += `placeholder="${setLanguage(checkEmpty(fieldProperties.placeholder, 'label_attribute_key'), checkEmpty(fieldProperties.placeholder, 'label'))}"`;
        attributes += `data-placeholder-name="${setLanguage(checkEmpty(fieldProperties.placeholder, 'label_attribute_key'), checkEmpty(fieldProperties.placeholder, 'label'))}"`;
        if(checkEmpty(fieldProperties, 'multi_select'))
            attributes += `data-placeholder="${setLanguage(checkEmpty(fieldProperties.placeholder, 'label_attribute_key'), checkEmpty(fieldProperties.placeholder, 'label'))}"`;
    }

    // Input Mask
    if (checkEmpty(fieldProperties, 'input_mask') != '') {
        let inputMask = checkEmpty(fieldProperties, 'input_mask').replace(/#/g, '9');
        attributes += ` data-mask data-inputmask='"mask": "${inputMask}"'`;
    }

    // Validate Field
    if(checkEmpty(fieldProperties, 'validation') != "" && typeof checkEmpty(fieldProperties, 'validation') == "object") {
        let fieldValidation = checkEmpty(fieldProperties, 'validation');
        attributes += checkEmpty(fieldValidation, 'method') != '' ? ` data-method="${checkEmpty(fieldValidation, 'method')}" ` : '';
        attributes += checkEmpty(fieldValidation, 'operator') != '' ? ` data-operator="${checkEmpty(fieldValidation, 'operator')}" ` : '';
        attributes += checkEmpty(fieldValidation, 'value') != '' ? ` data-value="${checkEmpty(fieldValidation, 'value')}" ` : '';
        attributes += checkEmpty(fieldValidation, 'fields') != '' ? ` data-show-age-field="${checkEmpty(fieldValidation, 'fields').join(' ')}" ` : '';

    } else if (checkEmpty(fieldProperties, 'validation') != '') {
        attributes += ` data-validate="${checkEmpty(fieldProperties, 'validation')}"`;
    }

    // Condition Logic Show Fields
    if(fieldProperties.hasOwnProperty('conditional_logic') && fieldProperties.conditional_logic.hasOwnProperty('show')) {
        let showFields = checkEmpty(fieldProperties.conditional_logic, 'show');
        attributes += checkEmpty(showFields, 'fields') != '' ? ` data-show-field='${checkEmpty(showFields, 'fields')}' ` : '';
        attributes += checkEmpty(showFields, 'operator') != '' ? ` data-show-operator='${checkEmpty(showFields, 'operator')}' ` : '';
        attributes += checkEmpty(showFields, 'value') != '' ? ` data-show-value='${checkEmpty(showFields, 'value')}' ` : '';
        attributes += checkEmpty(showFields, 'value_type') != '' ? ` data-show-value-type='${checkEmpty(showFields, 'value_type')}' ` : '';
        attributes += checkEmpty(showFields, 'is_required') != '' ? ` data-field-validate='${checkEmpty(showFields, 'is_required')}' ` : '';
        attributes += checkEmpty(showFields, 'value_attribute') != '' ? ` data-value-attribute='${checkEmpty(showFields, 'value_attribute')}' ` : '';
    }

    // Children Field
    if(checkEmpty(fieldProperties, 'children')){
        let children = checkEmpty(fieldProperties, 'children');
        attributes += checkEmpty(children, 'field_key') != '' ? ` data-child-field='${checkEmpty(children, 'field_key')}' ` : '';
        attributes += checkEmpty(children, 'value') != '' ? ` data-show-value='${checkEmpty(children, 'value')}' ` : '';
        attributes += checkEmpty(children, 'value_type') != '' ? ` data-show-value-type='${checkEmpty(children, 'value_type')}' ` : '';
        attributes += checkEmpty(children, 'value_attribute') != '' ? ` data-value-attribute='${checkEmpty(children, 'value_attribute')}' ` : '';
    }

    // Date Initial View
    if(checkEmpty(fieldProperties, 'date_initial_view') != "") {
        attributes += ` data-date-initial-view="${checkEmpty(fieldProperties, 'date_initial_view')}"`;
    }

    // Trigger Fields
    if(checkEmpty(fieldProperties, "triggers") != "") {
        attributes += checkEmpty(fieldProperties.triggers[0], 'trigger_name') != '' ? ` data-trigger-name='${checkEmpty(fieldProperties.triggers[0], 'trigger_name')}' ` : '';
        attributes += (checkEmpty(fieldProperties.triggers[0], 'fields') != '' && typeof checkEmpty(fieldProperties.triggers[0], 'fields') == 'object') ? ` data-trigger-fields='${JSON.stringify(checkEmpty(fieldProperties.triggers[0], 'fields'))}' ` : '';
    }

    // Option and Method Name
    if(checkEmpty(fieldProperties, "options") != "" && checkEmpty(fieldProperties.options, "method") != "") {
        attributes += (typeof fieldProperties.options.method == 'object') ? ` data-method='${JSON.stringify(fieldProperties.options.method)}' ` : '';
    }

    // Set address options
    if(checkEmpty(fieldProperties, "address_option") != "") {
        attributes += ` data-address-type="${checkEmpty(fieldProperties.address_option, "type")}"`
        attributes += ` data-closest-parent="${checkEmpty(fieldProperties.address_option, "closest_parent")}"`
    }

    // Input Option Set
    if(checkEmpty(fieldProperties, "input_option") != "") {
        attributes += ` maxLength="${checkEmpty(fieldProperties.input_option, "max_length")}" `
    }

    if(checkEmpty(fieldProperties, "read_only") != "") {
        attributes += `readonly`;
    }

    if(checkEmpty(fieldProperties, "template_option") != "" && checkEmpty(fieldProperties?.template_option, "custom_option")) {
        if(checkEmpty(fieldProperties?.template_option, "custom_type") != "") {
            attributes += `data-option-custiomize="${fieldProperties?.template_option?.custom_type ?? ''}"`;
            attributes += `data-option-attribute="${fieldProperties?.template_option?.option_attribute ?? ''}"`;
        }
    }

    if(checkEmpty(fieldProperties, "template_selection") != "" && checkEmpty(fieldProperties?.template_selection, "custom_selection")) {
        if(checkEmpty(fieldProperties?.template_selection, "selection_type") != "") {
            attributes += `data-selection-custiomize="${fieldProperties?.template_selection?.selection_type ?? ''}"`;
            attributes += `data-option-attribute="${fieldProperties?.template_selection?.selection_attribute ?? ''}"`;
        }
    }

    if(checkEmpty(fieldProperties, "mapped_keys") != "") {
        attributes += ` data-mapped-keys='${JSON.stringify(fieldProperties?.mapped_keys)}'`
    }
    if(checkEmpty(fieldProperties, "mapped_option") != "") {
        attributes += ` data-checked-mapped-field='${JSON.stringify(fieldProperties?.mapped_option?.field_key)}'`
    }

    if(checkEmpty(fieldProperties, "depend_configure") != "") {
        attributes += ` data-closest-parent=${fieldProperties?.depend_configure?.closest_parent}`
        attributes += ` data-depend-parent=${fieldProperties?.depend_configure?.depend_parent}`
    }

    if(checkEmpty(fieldProperties, "show_date") != "") {
        let customAttributes = { "future" : "FEATURE_DATE", 'past': "PAST_DATE" }
        let validateType = customAttributes[fieldProperties?.show_date] ? customAttributes[fieldProperties?.show_date] : "";
        attributes += ` data-validate-type='${validateType}'`;
    }

    if(checkEmpty(fieldProperties, "getDefaultValue") != "") {
        attributes += ` data-set-Value='${JSON.stringify(fieldProperties?.getDefaultValue)}'`;
    }
    if(checkEmpty(fieldProperties, "custom_attributes") != "") {
        attributes += ` data-prefix-name=${fieldProperties?.custom_attributes?.prefix_name}`
    }

    if(checkEmpty(fieldProperties, "is_priority_field") != "") {
        attributes += `data-option-custiomize="PRIORITY"`;
    }

    return attributes;
};
/**
 * Form Label
 * @param {String} attributeKey
 * @param {String} fieldLabel
 * @returns
 */
export const setLanguage = (attributeKey = "", fieldLabel = "") => {
    if(attributeKey != "")
        return `${(typeof _ATTRIBUTES != "undefined" && _ATTRIBUTES[attributeKey] !== undefined && _ATTRIBUTES[attributeKey] != null) ? _ATTRIBUTES[attributeKey] : fieldLabel}`
    else
        return fieldLabel;
}

export const errorMessagesReplace = (value = "") => {
    let errorMessage = "";
    let errorText = ["Patient DOB is required.", "Patient SSN is required.", "Patient SSN is invalid.", "SSN is required.", "SSN is invalid.", "DOB is required.", "Medicaid number is invalid.(e.g.AE12121E)"];
    if(value != "" && value != null) {
        if(!errorText?.includes(value))
            errorMessage += `${Helper.errorMessageCapitalize(value.replaceAll(/['"]/g, "&apos;"))}`;
        else
            errorMessage += value
    }
    return errorMessage;
}
