<!-- Start : Custom Side Panel -->
<div class="custom-modal-backdrop"></div>
<div class="slideout forms-new" id="slideOutPanel">
    <div class="custom-modal-header">
        <div class="">
            <h4 class="header-title"></h4>
            <small class="header-sub-title"></small>
        </div>
        <div class="">
            <button type="button" class="close-panel p-1 btn btn-default">
                <svg fill="#3e4f69" width="15" height="15" id="Layer_1" style="enable-background:new 0 0 512 512;" version="1.1" viewBox="0 0 512 512"  xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M437.5,386.6L306.9,256l130.6-130.6c14.1-14.1,14.1-36.8,0-50.9c-14.1-14.1-36.8-14.1-50.9,0L256,205.1L125.4,74.5  c-14.1-14.1-36.8-14.1-50.9,0c-14.1,14.1-14.1,36.8,0,50.9L205.1,256L74.5,386.6c-14.1,14.1-14.1,36.8,0,50.9  c14.1,14.1,36.8,14.1,50.9,0L256,306.9l130.6,130.6c14.1,14.1,36.8,14.1,50.9,0C451.5,423.4,451.5,400.6,437.5,386.6z"/></svg>
            </button>
        </div>
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
        <div id="renderWrapper">

        </div>
    </div>
    <div class="custom-modal-footer">
        <button class="btn btn-success action-btn is-loading">
            <i class="fa fa-circle-o-notch fa-spin mr-1 d-none"></i>
            <span class="button-name is-loading"></span>
        </button>
        <span id="additional-btn"></span>
        <button class="btn btn-default ml-1 close-panel">Cancel</button>
    </div>
</div>
<!-- End : Custom Side Panel -->

<script>
    $(()=> {
        $('body').on('click','[data-is-sidepanel]', toggleCustomSidePanel)
        $('body').on('click','.close-panel, .custom-modal-backdrop', toggleCustomSidePanel);

        function toggleCustomSidePanel() {
            let sidePanelELement    = $('.slideout');
            let backDrop            = $('.custom-modal-backdrop');
            let bodyElement         = $('body');

            sidePanelELement.toggleClass('in');
            backDrop.toggleClass('in');
            bodyElement.toggleClass('side-panel-overlay');
        }
    })
</script>
