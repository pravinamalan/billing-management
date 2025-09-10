{{-- <nav class="navbar navbar-expand-lg">
    <div class="container-fluid d-flex align-items-center justify-content-space-between">
        <a class="navbar-brand" href="#">Billing & Management</a>
        <div class="dropdown">
            <button class="btn dropdown-toggle" type="button" data-bs-toggle="dropdown"
                aria-expanded="false">
                BM
            </button>
            <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
        </div>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" aria-current="page" href="#dashboard">Dashboard</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" aria-current="page" href="#income">Income</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" aria-current="page" href="#expense">Enpense</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" aria-current="page" href="#employees">Employees</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" aria-current="page" href="#orders">Orders</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" aria-current="page" href="#report">Report</a>
                </li>
            </ul>

        </div>
    </div>
</nav> --}}

<div class="header d-flex align-items-center justify-content-between fixed-top w-full">
    <div class="titile">
        <h4>Billing & Mangement</h4>
    </div>
    <div class="profile d-flex align-items-center gap-2 ">
        <div class="tabluator-input-search-wrapper d-none d-lg-flex" id="ORDER_SEARCH">
            <span class="search-icon">
                <img src="https://inflowcare.s3.amazonaws.com/static/icons/search.svg" width="18" height="18">
            </span>
            <input type="text" class="form-control search" id="search" placeholder="Search" autocomplete="off" style="background: #f1f3f4 !important;">
            <span class="focus-border"></span>
            <img class="search-clear visibility-hide" src="https://inflowcare.s3.amazonaws.com/static/icons/clear.svg" width="12" height="12" style="opacity: .5;">
        </div>
        <div class="dropdown">
            <button class="btn  dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M10.146 3.248a2 2 0 0 1 3.708 0A7.003 7.003 0 0 1 19 10v4.697l1.832 2.748A1 1 0 0 1 20 19h-4.535a3.501 3.501 0 0 1-6.93 0H4a1 1 0 0 1-.832-1.555L5 14.697V10c0-3.224 2.18-5.94 5.146-6.752zM10.586 19a1.5 1.5 0 0 0 2.829 0h-2.83zM12 5a5 5 0 0 0-5 5v5a1 1 0 0 1-.168.555L5.869 17H18.13l-.963-1.445A1 1 0 0 1 17 15v-5a5 5 0 0 0-5-5z"
                        fill="#f6f6f6" />
                </svg>
            </button>
            <ul class="dropdown-menu dropdown-menu-start dropdown-menu-lg-start notification-card">
                <div class="card">
                    <div class="card-header">
                      Daily Order Reminder
                    </div>
                    <div class="card-body d-flex flex-column">
                        <span>Customer Name</span>
                        <span>Contact Number</span>
                        <span>Order Place</span>
                        <span>Service Type</span>
                    </div>
                    <div class="card-footer text-center">
                        View all orders
                    </div>
                </div>
            </ul>
        </div>
        <div class="dropdown">
            <button class="btn  dropdown-toggle profile-toggle" type="button" data-bs-toggle="dropdown"
                aria-expanded="false">
                <svg fill="#f6f6f6" width="24" height="24" viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd"
                        d="M6.03531778,18.739764 C7.62329979,20.146176 9.71193925,21 12,21 C14.2880608,21 16.3767002,20.146176 17.9646822,18.739764 C17.6719994,17.687349 15.5693823,17 12,17 C8.43061774,17 6.32800065,17.687349 6.03531778,18.739764 Z M4.60050358,17.1246475 C5.72595131,15.638064 8.37060189,15 12,15 C15.6293981,15 18.2740487,15.638064 19.3994964,17.1246475 C20.4086179,15.6703183 21,13.9042215 21,12 C21,7.02943725 16.9705627,3 12,3 C7.02943725,3 3,7.02943725 3,12 C3,13.9042215 3.59138213,15.6703183 4.60050358,17.1246475 Z M12,23 C5.92486775,23 1,18.0751322 1,12 C1,5.92486775 5.92486775,1 12,1 C18.0751322,1 23,5.92486775 23,12 C23,18.0751322 18.0751322,23 12,23 Z M8,10 C8,7.75575936 9.57909957,6 12,6 C14.4141948,6 16,7.92157821 16,10.2 C16,13.479614 14.2180861,15 12,15 C9.76086382,15 8,13.4273743 8,10 Z M10,10 C10,12.2692568 10.8182108,13 12,13 C13.1777063,13 14,12.2983927 14,10.2 C14,8.95041736 13.2156568,8 12,8 C10.7337387,8 10,8.81582479 10,10 Z" />
                </svg>
            </button>
            <ul class="dropdown-menu dropdown-menu-start dropdown-menu-lg-start">
                <li><a class="dropdown-item" href="#"><ion-icon name="person-outline"></ion-icon>Profile</a></li>
                <li><a class="dropdown-item" href="#"> <ion-icon name="settings-outline"></ion-icon> Settings</a>
                </li>
                </li>
                <hr>
                <li><a class="dropdown-item" href="#"><ion-icon name="exit-outline"></ion-icon>Logout</a></li>
            </ul>
        </div>
    </div>
</div>
