<div id="ORDER_WRAPPER" class="tab-pane template-wrapper ORDER_WRAPPER">
    <div class="bg-white">
        <div class="mx-3 py-3">
            <div class="">
                <h3 class="m-0 title">Orders</h3>
                <span class="sub-text">Manage all your orders here.</span>
            </div>
        </div>
        <hr class="mt-0 mb-2">
    </div>

    @include('widget/list/table-pre-loader')
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
    <div>
        <div class="d-flex flex-column flex-lg-row align-items-lg-center justify-content-between p-3">
            <div class="tabluator-input-search-wrapper d-none" id="ORDER_SEARCH">
                <span class="search-icon">
                    <img src="https://inflowcare.s3.amazonaws.com/static/icons/search.svg" width="18" height="18">
                </span>
                <input type="text" class="form-control search" id="search" placeholder="Search" autocomplete="off" style="background: #f1f3f4 !important;">
                <span class="focus-border"></span>
                <img class="search-clear visibility-hide" src="https://inflowcare.s3.amazonaws.com/static/icons/clear.svg" width="12" height="12" style="opacity: .5;">
            </div>
            <div class="mt-2 mt-lg-0">
                <button type="button" class="btn btn-ash refresh-table  d-none" data-section="ORDER">
                    <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.5127 6.23126H14.5127M14.5127 6.23126V3.23126M14.5127 6.23126L12.3877 4.1125C11.6187 3.34286 10.6387 2.81859 9.57172 2.60601C8.5047 2.39343 7.3986 2.50209 6.39335 2.91824C5.38809 3.33439 4.52885 4.03933 3.9243 4.9439C3.31975 5.84847 2.99707 6.91201 2.99707 8C2.99707 9.08799 3.31975 10.1515 3.9243 11.0561C4.52885 11.9607 5.38809 12.6656 6.39335 13.0818C7.3986 13.4979 8.5047 13.6066 9.57172 13.394C10.6387 13.1814 11.6187 12.6571 12.3877 11.8875" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    Refresh
                </button>
                <button class="btn btn-dark add-btn d-none add-new-order" id="add-new-order"  data-section="ORDER">
                    <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.49902 8.20592H13.499M7.99902 2.70592V13.7059" stroke="white" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg> Add New Order
                </button>
            </div>
        </div>
        <div class="empty-wrapper d-none"  id="ORDER_EMPTY_WRAPPER">
            <div class="empty-section">
                <div class="text-center empty-content">
                    <svg width="80" height="80" viewBox="0 0 647.63626 632.17383"><path d="M687.3279,276.08691H512.81813a15.01828,15.01828,0,0,0-15,15v387.85l-2,.61005-42.81006,13.11a8.00676,8.00676,0,0,1-9.98974-5.31L315.678,271.39691a8.00313,8.00313,0,0,1,5.31006-9.99l65.97022-20.2,191.25-58.54,65.96972-20.2a7.98927,7.98927,0,0,1,9.99024,5.3l32.5498,106.32Z" transform="translate(-276.18187 -133.91309)" fill="#f2f2f2"/><path d="M725.408,274.08691l-39.23-128.14a16.99368,16.99368,0,0,0-21.23-11.28l-92.75,28.39L380.95827,221.60693l-92.75,28.4a17.0152,17.0152,0,0,0-11.28028,21.23l134.08008,437.93a17.02661,17.02661,0,0,0,16.26026,12.03,16.78926,16.78926,0,0,0,4.96972-.75l63.58008-19.46,2-.62v-2.09l-2,.61-64.16992,19.65a15.01489,15.01489,0,0,1-18.73-9.95l-134.06983-437.94a14.97935,14.97935,0,0,1,9.94971-18.73l92.75-28.4,191.24024-58.54,92.75-28.4a15.15551,15.15551,0,0,1,4.40966-.66,15.01461,15.01461,0,0,1,14.32032,10.61l39.0498,127.56.62012,2h2.08008Z" transform="translate(-276.18187 -133.91309)" fill="#2A90BB"/><path d="M398.86279,261.73389a9.0157,9.0157,0,0,1-8.61133-6.3667l-12.88037-42.07178a8.99884,8.99884,0,0,1,5.9712-11.24023l175.939-53.86377a9.00867,9.00867,0,0,1,11.24072,5.9707l12.88037,42.07227a9.01029,9.01029,0,0,1-5.9707,11.24072L401.49219,261.33887A8.976,8.976,0,0,1,398.86279,261.73389Z" transform="translate(-276.18187 -133.91309)" fill="#2A90BB"/><circle cx="190.15351" cy="24.95465" r="20" fill="#2A90BB"/><circle cx="190.15351" cy="24.95465" r="12.66462" fill="#fff"/><path d="M878.81836,716.08691h-338a8.50981,8.50981,0,0,1-8.5-8.5v-405a8.50951,8.50951,0,0,1,8.5-8.5h338a8.50982,8.50982,0,0,1,8.5,8.5v405A8.51013,8.51013,0,0,1,878.81836,716.08691Z" transform="translate(-276.18187 -133.91309)" fill="#e6e6e6"/><path d="M723.31813,274.08691h-210.5a17.02411,17.02411,0,0,0-17,17v407.8l2-.61v-407.19a15.01828,15.01828,0,0,1,15-15H723.93825Zm183.5,0h-394a17.02411,17.02411,0,0,0-17,17v458a17.0241,17.0241,0,0,0,17,17h394a17.0241,17.0241,0,0,0,17-17v-458A17.02411,17.02411,0,0,0,906.81813,274.08691Zm15,475a15.01828,15.01828,0,0,1-15,15h-394a15.01828,15.01828,0,0,1-15-15v-458a15.01828,15.01828,0,0,1,15-15h394a15.01828,15.01828,0,0,1,15,15Z" transform="translate(-276.18187 -133.91309)" fill="#2A90BB"/><path d="M801.81836,318.08691h-184a9.01015,9.01015,0,0,1-9-9v-44a9.01016,9.01016,0,0,1,9-9h184a9.01016,9.01016,0,0,1,9,9v44A9.01015,9.01015,0,0,1,801.81836,318.08691Z" transform="translate(-276.18187 -133.91309)" fill="#2A90BB"/><circle cx="433.63626" cy="105.17383" r="20" fill="#2A90BB"/><circle cx="433.63626" cy="105.17383" r="12.18187" fill="#fff"/></svg>
                    <div class="mt-3"><span>No records are available.</span></div>
                </div>
            </div>
        </div>
        <div id="ORDER_TABLE" class="d-none"></div>
    </div>

    @include('widget/helper/sidepanel')
</div>
























































{{-- Order Table Columns (Earthmovers Business)

Order ID – Unique identifier (auto increment).

Customer Name / Company Name – Order vangura client details. - input

Customer Contact (Phone/Email) – Easy reach out. - input

Service Type – (Earthmover / Water Boring / Crane / JCB rental). - select2

Machine Assigned – Machine name/id.

Driver / Operator Assigned – Driver/Worker name/id. - input

Location / Site Address – Work location. -  text area

Order Date – Job booked date. - date

Start Date – Job start date. - date

End Date – Job completion date. - date

Working Hours / Days – Duration worked.

Rate Type – Hourly / Daily / Fixed. - select

Rate (per hr/day) – Price unit. input

Total Amount – Auto calculated (rate × duration). - input

Advance Received – Payment collected before. - input

Balance Amount – Pending amount.- input

Payment Status – Paid / Partial / Unpaid. - select

Order Status – Pending / In-progress / Completed / Cancelled. - select

Notes / Remarks – Extra info. - text area


Invoice Number / PDF link


Payment Mode (Cash/UPI/Bank) - select
 --}}
