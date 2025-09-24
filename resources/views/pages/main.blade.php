@extends('layouts.app')

@section('title', 'Home | Billing&Management')
{{-- DataTables CSS --}}
<link rel="stylesheet" href="{{ asset('dataTable/css/jquery.dataTables.min.css') }}">
<link rel="stylesheet" href="{{ asset('dataTable/css/buttons.dataTables.min.css') }}">
<link rel="stylesheet" href="{{ asset('dataTable/css/fixedColumns.dataTables.min.css') }}">
<link rel="stylesheet" href="{{ asset('dataTable/css/fixedHeader.dataTables.min.css') }}">
@section('page-content')
<div class="row mx-0 whole-container-section ">
    <div class="col-lg-2 col-xs-12 px-0 sidebar-section mb-3 mb-lg-0 ">
        <div class="sidebar-wrapper me-lg-3 bg-white">
            <ul class="nav nav-tabs flex-column border-0 nav-list">
                 <li class="nav-item">
                    <a class="nav-link active" data-bs-toggle="tab" href="#home">
                       <ion-icon name="home-outline"></ion-icon> Home
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" data-bs-toggle="tab" href="#dashboard">
                        <ion-icon name="podium-outline"></ion-icon> Dashboard
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" data-bs-toggle="tab" href="#transactions">
                        <ion-icon name="cash-outline"></ion-icon> Transactions
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" data-bs-toggle="tab" href="#employee">
                        <ion-icon name="people-outline"></ion-icon> Employee
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" data-bs-toggle="tab" href="#quotations">
                        <ion-icon name="document-text-outline"></ion-icon> Quotations
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" data-bs-toggle="tab" href="#orders">
                        <ion-icon name="cart-outline"></ion-icon> Orders
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" data-bs-toggle="tab" href="#reports">
                        <ion-icon name="bar-chart-outline"></ion-icon> Reports
                    </a>
                </li>
            </ul>
        </div>
    </div>

    <div class="col-lg-10 col-xs-12 px-0 position-relative">
        <div class="tab-content">
            <div class="tab-pane fade show active" id="home">
                @include('pages._partials.home')
            </div>
            <div class="tab-pane fade" id="dashboard">
                @include('pages._partials.dashboard')
            </div>
            <div class="tab-pane fade" id="transactions">
                @include('pages._partials.transactions')
            </div>
            <div class="tab-pane fade bg-white" id="employee">
                @include('pages._partials.employee')
            </div>
            <div class="tab-pane fade" id="reports">
                @include('pages._partials.reports')
            </div>
            <div class="tab-pane fade" id="orders">
                @include('pages._partials.orders')
            </div>
            <div class="tab-pane fade" id="quotations">
                @include('pages._partials.quotation')
            </div>
        </div>
    </div>
</div>
@endsection
@section('page-scripts')
{{-- DataTables JS --}}
<script src="{{ asset('dataTable/js/dataTables.min.js') }}"></script>
<script src="{{ asset('dataTable/js/dataTables.buttons.min.js') }}"></script>
<script src="{{ asset('dataTable/js/buttons.html5.min.js') }}"></script>
<script src="{{ asset('dataTable/js/dataTables.fixedColumns.min.js') }}"></script>
<script src="{{ asset('dataTable/js/dataTables.fixedHeader.min.js') }}"></script>
@endsection
