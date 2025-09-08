import tippy from 'tippy.js';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/animations/scale.css';
/**
 * Data check
 * @param {*} data
 * @param {*} key
 * @return  string
 */
export const checkEmpty = (data, key, isEmpty = '') => {
    return (data?.hasOwnProperty(key) && data[key] != null && data[key] != '') ? data[key] : isEmpty;
}

/**
 * Tippy Initialize
 */
export function initilizeTippy(parent, isMaxHeight = false, maxHeight = '250px') {
    let blackInstance = tippy(`#${parent} .tippy-black`, {
        allowHTML: true,
        theme: 'black',
        animation: 'fade',
    });

    let whiteInstance = tippy(`#${parent} .tippy-white`, {
        allowHTML: true,
        theme: 'white',
    });

    let tippyInteractive = tippy(`#${parent} .tippy-interactive`, {
        allowHTML: true,
        theme: 'white',
        interactive: true,
        appendTo: document.body,
        ...(isMaxHeight && {
            onShow(instance) {
                $(instance.popper).find('.tippy-content').css({
                    'max-height': maxHeight,
                    'overflow-y': 'auto',
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
    let sidePanelELement = document.getElementsByClassName('slideout')[0];
    let backDrop       = document.getElementsByClassName('custom-modal-backdrop')[0];
    let bodyElement      = document.getElementsByTagName('body')[0];

    sidePanelELement.classList.toggle('in');
    backDrop.classList.toggle('in');
    bodyElement.classList.toggle('side-panel-overlay');
}

export function toggleLoaderHideShow(section, mode="hide", height = ''){
    if(mode == 'show'){
        $('#'+section+' .private-spinner-main-wrapper').removeClass('private-spinner--hide');
        $('#'+section+' .private-spinner-main-wrapper').addClass('private-spinner--active');
        if(height != ''){
            $('#'+section+' .parent-loader-height').addClass(height);
        }
    }else{
        setTimeout(() => {
            $('#'+section+' .private-spinner-main-wrapper').addClass('private-spinner--hide');
            $('#'+section+' .private-spinner-main-wrapper').removeClass('private-spinner--active');
            if(height != ''){
                $('#'+section+' .parent-loader-height').removeClass(height);
            }
        },100);
    }
}

/**
 * Panel Helpaer Version 2
 * @param {*} panelHeader
 * @param {*} panelFooter
 */
export const panelHelper = ({panelHeader, panelFooter, panelWidth = "slideout-sm", panelBody = {}, isFooter = true, isHeader = true}) => {

    let panelElement        = document.getElementById('slideOutPanel');
    let pannelTitle         = panelElement.querySelector('.header-title');
    let header              = panelElement.querySelector('.custom-modal-header');
    let footer              = panelElement.querySelector('.custom-modal-footer');

    panelElement.className = "";
    panelElement.classList.add(`slideout`, `forms-new`, `in`, `${panelWidth}`);

    panelElement.getElementsByClassName('custom-modal-body')[0].style = `background: ${panelBody?.background ?? '#EFF5F5'};padding: ${panelBody?.padding ?? '20px'}`;

    header.innerHTML = panelHeader;
    footer.innerHTML = panelFooter;

    if(!isFooter)
        panelElement.getElementsByClassName('custom-modal-footer')[0].style = `display: none; !important`;
    else
        panelElement.getElementsByClassName('custom-modal-footer')[0].style = `display: block;`;

    if(!isHeader)
        panelElement.getElementsByClassName('custom-modal-header')[0].style = `display: none; !important`;
    else
        panelElement.getElementsByClassName('custom-modal-header')[0].style = `display: flex;`;
}

/**
 * Letter Capitalize
 * @param {*} words
 * @returns
 */
export const capitalizeLetter = (words) => {
    var separateWord = words.replaceAll('_', ' ').toLowerCase().split(' ');
    for (var i = 0; i < separateWord.length; i++) {
        separateWord[i] = separateWord[i].charAt(0).toUpperCase() + separateWord[i].substring(1);
    }
    return separateWord.join(' ');
}

/**
 * Date Picker Initialize
 * @param {*} section
 */
 export function dateInitialize(section) {

    $(`#${section} .all_date_picker`).datetimepicker({
        format: 'MM/DD/YYYY',
        pickTime: false,
        viewMode: $(`#${section} .all_date_picker`).data('date-initial-view')
    });

    $(`#${section} .age-verification.past_date_picker`).datetimepicker({
        format: 'MM/DD/YYYY',
        pickTime: false,
        maxDate: new Date(),
        useCurrent:false,
        viewMode: $(`#${section} .age-verification.past_date_picker`).data('date-initial-view')
    });

    $(`#${section} .past_date_picker`).datetimepicker({
        format: 'MM/DD/YYYY',
        pickTime: false,
        maxDate: new Date(),
        useCurrent: ["staffFields"].includes(section) ? false : true,
        viewMode: $(`#${section} .past_date_picker`).data('date-initial-view')
    });

    $(`#${section} .future_date_picker`).datetimepicker({
        format: 'MM/DD/YYYY',
        pickTime: false,
        minDate: new Date(),
        viewMode: $(`#${section} .future_date_picker`).data('date-initial-view')
    });

    $(`#${section} .week_date_picker`).datetimepicker({
        daysOfWeekDisabled: [0],
        format: 'MM/DD/YYYY',
        pickTime: false,
        minDate: new Date(),
        viewMode: $(`#${section} .week_date_picker`).data('date-initial-view')
    });

}
