@extends('layouts.app')

@section('title', 'Home | Billing&Management')

@section('page-content')
<div class="row mx-0 whole-container-section">
    <div class="col-lg-2 col-xs-12 px-0 sidebar-section mb-3 mb-lg-0">
        <div class="sidebar-wrapper me-lg-3 bg-white">
            <ul class="nav nav-tabs flex-column border-0 nav-list">
                <li class="nav-item">
                    <a class="nav-link" id="home-tab" data-bs-toggle="tab" href="#home">
                        <ion-icon name="home-outline"></ion-icon> Home
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" id="dashboard-tab" data-bs-toggle="tab" href="#dashboard">
                        <ion-icon name="podium-outline"></ion-icon> Dashboard
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" id="transaction-tab" data-bs-toggle="tab" href="#transactions">
                        <ion-icon name="cash-outline"></ion-icon> Transactions
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" id="employee-tab" data-bs-toggle="tab" href="#employee">
                        <ion-icon name="people-outline"></ion-icon> Employee
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" id="quotation-tab" data-bs-toggle="tab" href="#quotations">
                        <ion-icon name="document-text-outline"></ion-icon> Quotation
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" id="order-tab" data-bs-toggle="tab" href="#orders">
                        <ion-icon name="cart-outline"></ion-icon> Orders
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" id="report-tab" data-bs-toggle="tab" href="#reports">
                        <ion-icon name="bar-chart-outline"></ion-icon> Reports
                    </a>
                </li>
            </ul>
        </div>
    </div>

    <div class="col-lg-10 col-xs-12 px-0 position-relative">
        <div class="tab-content">
            <div class="tab-pane fade" id="home">@include('pages._partials.home')</div>
            <div class="tab-pane fade" id="dashboard">@include('pages._partials.dashboard')</div>
            <div class="tab-pane fade bg-white" id="transactions">@include('pages._partials.transactions')</div>
            <div class="tab-pane fade bg-white" id="employee">@include('pages._partials.employee')</div>
            <div class="tab-pane fade bg-white" id="reports">@include('pages._partials.reports')</div>
            <div class="tab-pane fade bg-white" id="orders">@include('pages._partials.orders')</div>
            <div class="tab-pane fade bg-white" id="quotations">@include('pages._partials.quotation')</div>
        </div>
    </div>
</div>
@endsection


@push('scripts')
    <script>
        document.addEventListener("DOMContentLoaded", () => {
            initializeTabFromUrl();
        });

        function initializeTabFromUrl() {
            const urlParams = new URLSearchParams(window.location.search);
            const currentTab = urlParams.get("t") || "home";

            if (!urlParams.has("t")) {
                history.replaceState(null, "", `?t=${currentTab}`);
            }


            const activeTab = document.querySelector(`.nav-list a[href="#${currentTab}"]`);
            if (activeTab) {
                new bootstrap.Tab(activeTab).show();
            }


            document.querySelectorAll('.nav-list a[data-bs-toggle="tab"]').forEach(el => {
                el.addEventListener("shown.bs.tab",async(e) => {
                    const newTab = e.target.getAttribute("href").replace("#", "");
                    history.replaceState(null, "", `?t=${newTab}`);
                });
            });
        }

    </script>
@endpush
