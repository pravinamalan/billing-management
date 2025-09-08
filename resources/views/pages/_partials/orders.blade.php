<div id="order" class="tab-pane referral-template-wrapper template-wrapper">
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
    <div id="NOTE_SUBJECTS_TAB_WRAPPER" class="list-view d-none">
        <div class="table-action-header">
            <div class="action--left">
                <div class="data-table-search-wrapper">
                    <span class="search-icon">
                        <img src="https://inflowcare.s3.amazonaws.com/static/icons/search.svg" width="18" height="18">
                    </span>
                    <input type="text" class="form-control table_search" data-wrapper="NOTE_SUBJECTS_TAB_WRAPPER" data-type="rule" id="note_subjects_table_search" placeholder="Search" autocomplete="off" style="background: #f9fafb !important;">
                    <span class="focus-border"></span>
                    <img class="note_subjects_table_search_clear esign_table_search_clear visibility-hide" data-wrapper="NOTE_SUBJECTS_TAB_WRAPPER" src="https://inflowcare.s3.amazonaws.com/static/icons/clear.svg" width="12" height="12" style="opacity: .5;">
                </div>
                <div class="table-right-action">
                    <button class="btn btn-dark" id="add-new-order" class="add-new-order">
                        <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.49902 8.20592H13.499M7.99902 2.70592V13.7059" stroke="white" stroke-linecap="round" stroke-linejoin="round"></path>
                        </svg> Add New Order
                    </button>
                </div>
            </div>
        </div>

        <table id="ORDERS_TABLE" class="table" style="width: 100%">
            <thead>
                <tr>
                    <th class="th-order-id">Order ID</th>
                    <th class="th-customer-name">Customer Name</th>
                    <th class="th-customer-contact">Contact Number</th>
                    <th class="th-customer-place">Place</th>
                    <th class="th-service">Service</th>
                    <th class="th-payment-status">Payment Status</th>
                    <th class="th-order-status">Order Status</th>
                    <th class="th-action">Actions</th>
                </tr>
            </thead>
        </table>
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
