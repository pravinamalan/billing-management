import { cancelIcon, closeIcon, saveIcon } from "../common/icon";
import { toggleLoaderHideShow } from "../helper/common-helper";

export class SidePanel {
    constructor() {
        this.$bodyElement = $('body');
        this.panelStack = [];
        this.currentPanel = null;
    }

    /**
     * Initialize the side panel with customizable content.
     */
    initializeSidePanel({
        header = { title: "Panel Title", subTitle: "", additionalButtons: [] },
        footer = { buttons: [] },
        panelId = `slideOutPanel`,
        panelWidth = "slideout-sm",
        panelBody = {},
        isFooter = true,
        isHeader = true,
        content = "",
        onClose = null,
        onSave = null,
        module = "GENERAL" // Added module parameter to track which module is using the panel
    }) {
        this.panelId = panelId;
        this.backdropId = `${panelId}-backdrop`;
        this.module = module; // Store the module name
        this.config = { header, footer, panelWidth, isFooter, isHeader, onClose, onSave, module };

        // Add this panel to the stack
        this.panelStack.push({id: this.panelId, module: this.module});
        this.currentPanel = this.panelId;

        // Append panel and backdrop to body
        this.$bodyElement.append(this.generateBackdropHTML());
        this.$bodyElement.append(this.generatePanelHTML({header, footer, content}));

        // Set up the panel elements for easy access
        this.initializePanelElements();

        // Attach events scoped to this panel
        this.attachEvents();

        // Apply panel width and styles
        this.$panelElement.removeClass().addClass(`slideout forms-new ${panelWidth}`);
        this.$body.css({
            background: panelBody?.background || '#EFF5F5',
            padding: panelBody?.padding || '15px'
        });

        // Display or hide header and footer
        this.$header.css('display', isHeader ? 'flex' : 'none');
        this.$footer.css('display', isFooter ? 'block' : 'none');

        // Open the side panel
        setTimeout(() => this.toggleSidePanel(), 200);

        return this;
    }

    /**
     * Set panel content
     */
    setContent(content) {
        if (this.$body) {
            this.$body.find('.body-content').html(content);
            this.hideLoader(); // Hide loader when content is set
        }
        return this;
    }

    /**
     * Show loader in panel - FIXED POSITIONING
     */
   showLoader() {
        if (this.$body) {
            const $loader = this.$body.find('.private-spinner-main-wrapper');
            $loader.addClass('private-spinner--active')
                   .css({
                       'display': 'flex',
                       'justify-content': 'center',
                       'align-items': 'center',
                       'position': 'absolute',
                       'top': '0',
                       'left': '0',
                       'right': '0',
                       'bottom': '0',
                       'z-index': '10',
                       'background': 'rgba(255, 255, 255, 0.8)'
                   });
        }
        return this;
    }

    /**
     * Hide loader in panel
    */
    hideLoader() {
        if (this.$body) {
            const $loader = this.$body.find('.private-spinner-main-wrapper');
            $loader.removeClass('private-spinner--active')
                   .css('display', 'none');
        }
        return this;
    }

    /**
     * Generate the HTML for a new side panel.
     * @returns {string} HTML for the side panel
     */
    generatePanelHTML({header, footer, content = ""}) {
        const zIndex = 1040 + (10 * this.panelStack.length);
        return `<div class="slideout forms-new" id="${this.panelId}" style="z-index: ${zIndex};" data-module="${this.module}">
                    <div class="custom-modal-header">
                        ${this.sidepanelHeader(header) || ''}
                    </div>
                    <div class="custom-modal-body position-relative">
                        <div class="private-spinner-main-wrapper private-spinner--hide">
                            <div class="private-spinner private-spinner--link private-spinner--huge">
                                <div class="private-spinner-wrapper">
                                    <svg height="64" width="64" class="private-spinner__ring" viewBox="0 0 50 50">
                                        <circle class="private-spinner__ring-background" cx="25" cy="25" r="22.5" fill="none" stroke-width="5"></circle>
                                        <circle class="private-spinner__ring-path" cx="25" cy="25" r="22.5" fill="none" stroke-width="5"></circle>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div class="body-content">${content}</div>
                    </div>
                    <div class="custom-modal-footer">
                        ${this.sidepanelFooter(footer) || ''}
                    </div>
                </div>`;
    }


    /**
     *  Generate the HTML for the backdrop of the side panel.
     */
    generateBackdropHTML() {
        const zIndex = 1040 + (10 * this.panelStack.length);
        return `<div class="slidout-backdrop" id="${this.backdropId}" style="z-index: ${zIndex};"></div>`;
    }

    /**
     * Generate the HTML for the side panel header.
     */
    sidepanelHeader({ title = "Default Title", subTitle = "", additionalButtons = [] }) {
        const additionalButtonHtml = additionalButtons.map(button =>
            `<button type="button" class="btn ${button.class}">${button.icon || ''} ${button.text}</button>`
        ).join('');

        return `
            <div>
                <h4 class="header-title">${title}</h4>
                ${subTitle ? `<span style="color:#9ca0ae;font-size:12px;">${subTitle}</span>` : ''}
            </div>
            <div class="header-actions">
                ${additionalButtonHtml}
                <button type="button" class="close-slidout-panel p-1 btn btn-default">${closeIcon()}</button>
            </div>
        `;
    }

    /**
     * Generate the HTML for the side panel footer.
     */
    sidepanelFooter({ buttons = [] }) {
        const actionButtonHtml = buttons.map(button =>
            `<button type="button" class="btn ${button.class} ${button.id || ''}">${saveIcon()} ${button.text}</button>`
        ).join('');

        return `
            ${actionButtonHtml}
            <button type="button" class="btn btn-default ml-1 close-slidout-panel">
                ${cancelIcon()} Cancel
            </button>
        `;
    }

    /**
     * Close and remove this side panel and update the previous panel.
     */
    closeSidePanel() {
        if (this.config.onClose && typeof this.config.onClose === 'function') {
            this.config.onClose();
        }

        this.$panelElement.removeClass('in');
        this.$backDrop.removeClass('in');
        this.$bodyElement.removeClass('side-panel-overlay');

        // Clean up DOM
        setTimeout(() => {
            this.$panelElement.remove();
            this.$backDrop.remove();

            // Remove the current panel from the stack
            this.panelStack.pop();

            // Update the previous panel if it exists
            const previousPanelId = this.panelStack[this.panelStack.length - 1];
            if (previousPanelId) {
                this.updatePreviousPanel(previousPanelId);
            }

            this.currentPanel = null;
        }, 300);
    }

    /**
     * Update the previous panel when the current panel is closed.
     */
    updatePreviousPanel(previousPanelId) {
        this.panelId = previousPanelId;
        this.backdropId = `${previousPanelId}-backdrop`;
        this.initializePanelElements();
    }

    /**
     * Attach event listeners scoped to this panel instance.
     */
    attachEvents() {
        // Remove any existing event handlers to prevent duplicates
        this.$panelElement.off('click', '.close-slidout-panel');
        this.$panelElement.off('click', '.scroll-top');
        this.$backDrop.off('click');

        // Attach new event handlers
        this.$panelElement.on('click', '.close-slidout-panel', () => this.closeSidePanel());
        this.$panelElement.on('click', '.scroll-top', () => this.$body.scrollTop(0));
        this.$backDrop.on('click', () => this.closeSidePanel());

        // Attach save button handler if provided
        if (this.config.onSave) {
            this.$panelElement.off('click', '.save-btn');
            this.$panelElement.on('click', '.save-btn', (e) => {
                e.preventDefault();
                this.config.onSave();
            });
        }

        // Disable footer buttons during API calls
        $(document).off('ajaxStart.sidepanel');
        $(document).off('ajaxStop.sidepanel');

        $(document).on('ajaxStart.sidepanel', () => this.manageFooterButtons(true));
        $(document).on('ajaxStop.sidepanel', () => this.manageFooterButtons(false));
    }

    /**
     * Enable or disable footer buttons.
     */
    manageFooterButtons(isEnabled) {
        const hasVisibleLoader = this.$panelElement.find('.select2-loader:visible').length > 0;

        if (this.$footer) {
            this.$footer.find('button').prop('disabled', isEnabled || hasVisibleLoader);
        }
    }

    /**
     * Toggle the visibility of the side panel and its backdrop.
     */
    toggleSidePanel() {
        this.$panelElement.toggleClass('in');
        this.$backDrop.toggleClass('in');
        this.$bodyElement.toggleClass('side-panel-overlay');
    }

    /**
     * Set up the panel elements for easy access.
     */
    initializePanelElements() {
        this.$panelElement = $(`#${this.panelId}`);
        this.$backDrop = $(`#${this.backdropId}`);
        this.$header = this.$panelElement.find('.custom-modal-header');
        this.$body = this.$panelElement.find('.custom-modal-body');
        this.$footer = this.$panelElement.find('.custom-modal-footer');
    }

    /**
     * Check if panel is currently open
     */
    isOpen() {
        return this.currentPanel !== null;
    }
}
