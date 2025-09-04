@extends('layouts.app')

@section('title', 'Home | Billing&Management')

@section('page-content')
<div class="row">
    <div class="col-lg-2 col-xs-12 px-0 sidebar-section mb-3 referral-sidebar-nav">
        <ul class="nav nav-tabs flex-column border-0">
            <li class="nav-item">
                <a class="nav-link active" data-bs-toggle="tab" href="#dashboard">
                    <ion-icon name="podium-outline"></ion-icon> Dashboard
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link" data-bs-toggle="tab" href="#income">
                    <ion-icon name="cash-outline"></ion-icon> Income
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link" data-bs-toggle="tab" href="#expense">
                    <ion-icon name="wallet-outline"></ion-icon> Expense
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link" data-bs-toggle="tab" href="#employee">
                    <ion-icon name="people-outline"></ion-icon> Employee
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link" data-bs-toggle="tab" href="#reports">
                    <ion-icon name="bar-chart-outline"></ion-icon> Reports
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link" data-bs-toggle="tab" href="#settings">
                    <ion-icon name="settings-outline"></ion-icon> Settings
                </a>
            </li>
        </ul>
    </div>

    <div class="col-lg-10 col-xs-12 px-0 staff-customize-view position-relative bg-white">
        <div class="tab-content">
            <div class="tab-pane fade show active" id="dashboard">
                @include('pages._partials.dashboard')
            </div>
            <div class="tab-pane fade" id="income">
                @include('pages._partials.income')
            </div>
            {{-- <div class="tab-pane fade" id="expense">
                @include('pages._partials.expense')
            </div>
            <div class="tab-pane fade" id="employee">
                @include('pages._partials.employee')
            </div>
            <div class="tab-pane fade" id="reports">
                @include('pages._partials.reports')
            </div>
            <div class="tab-pane fade" id="settings">
                @include('pages._partials.settings')
            </div> --}}
        </div>
    </div>
</div>
@endsection
