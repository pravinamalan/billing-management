@extends('layouts.auth')

@section('title', 'Forgot Password')
    <div class="login-wrapper forgot-wrapper">
          <div class="login-card">
            <div class="login-header text-center">
                <svg width="40px" height="40px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                        <g id="icomoon-ignore">
                        </g>
                    <path d="M29.532 25.76l-5.655-5.655 0.754-0.754-0.754-0.754-2.261 2.261-3.771-3.77 4.53-4.532c0.603 0.215 1.234 0.324 1.882 0.324 1.493 0 2.897-0.582 3.954-1.637 1.63-1.631 2.092-4.054 1.178-6.174l-0.311-0.722-2.43 2.43-1.956 0.027 0.026-1.866 2.477-2.477-0.72-0.312c-0.706-0.306-1.457-0.461-2.229-0.461-1.494 0-2.897 0.582-3.952 1.637-1.546 1.545-2.043 3.802-1.311 5.84l-4.529 4.529-6.409-6.408 0.754-0.754-4.145-4.146-2.264 2.261 4.147 4.147 0.753-0.754 6.409 6.408-4.529 4.529c-0.605-0.217-1.239-0.326-1.888-0.326-1.493 0-2.897 0.582-3.953 1.637-1.633 1.632-2.095 4.059-1.176 6.181l0.312 0.72 2.477-2.477 1.865-0.025-0.027 1.956-2.43 2.43 0.722 0.311c0.704 0.303 1.452 0.458 2.221 0.458 1.494 0 2.897-0.581 3.952-1.636 1.544-1.544 2.041-3.799 1.314-5.833l4.532-4.532 3.771 3.769-2.263 2.263 0.754 0.754 0.754-0.754 5.654 5.654c0.503 0.504 1.174 0.781 1.885 0.781s1.381-0.277 1.885-0.781c1.039-1.039 1.039-2.73-0-3.769zM3.899 4.648l0.754-0.753 2.638 2.638-0.754 0.754-2.639-2.639zM11.448 22.456c0.739 1.716 0.364 3.679-0.955 4.999-0.854 0.854-1.989 1.324-3.198 1.324-0.347 0-0.689-0.039-1.021-0.116l1.569-1.569 0.047-3.485-3.394 0.046-1.619 1.619c-0.356-1.51 0.081-3.103 1.208-4.229 0.854-0.854 1.99-1.325 3.199-1.325 0.626 0 1.233 0.125 1.806 0.373l0.333 0.144 10.819-10.819-0.144-0.333c-0.744-1.719-0.37-3.682 0.952-5.004 0.854-0.854 1.99-1.325 3.198-1.325 0.35 0 0.695 0.040 1.030 0.117l-1.618 1.618-0.047 3.394 3.485-0.047 1.57-1.57c0.352 1.507-0.086 3.097-1.209 4.221-0.855 0.854-1.991 1.325-3.2 1.325-0.624 0-1.23-0.125-1.801-0.371l-0.332-0.143-10.821 10.823 0.143 0.332zM28.779 28.775c-0.302 0.302-0.704 0.469-1.131 0.469s-0.829-0.167-1.131-0.469l-5.654-5.654 2.262-2.262 5.655 5.655c0.624 0.624 0.624 1.638 0.001 2.261z" fill="#fff">

                    </path>
                </svg>
                <h2>Fotgot Password</h2>
                <p>No worries, we'll send you reset instruction</p>
            </div>

            <form class="login-form" id="loginForm"action="{{ route('forgot.password.post') }}" method="POST" >
                <div class="form-group">
                    <label class="text-color text-color--dark ">
                        <span>Email<span class="mandatory text-danger">*</span></span>
                    </label>
                    <div class="input-field-wrapper  ">
                        <input type="text" class="form-control  email-validator" id="email-input" name="email" value="" placeholder="Enter Email" data-placeholder-name="Enter Email" false="" autocomplete="off">
                        <span class="error error-msg email-input_error " id="email-input_error"></span>
                    </div>
                </div>
                <div class="text-center mt-3">
                    <button type="submit" class="login-btn">Reset Password</button>
                </div>
                <div class="d-flex align-items-center justify-content-end gap-2 mt-3">
                    <span class="mt-1"><svg width="20px" height="20px" viewBox="0 0 1024 1024" class="icon" xmlns="http://www.w3.org/2000/svg"><path fill="#fff" d="M224 480h640a32 32 0 110 64H224a32 32 0 010-64z"/><path fill="#fff" d="M237.248 512l265.408 265.344a32 32 0 01-45.312 45.312l-288-288a32 32 0 010-45.312l288-288a32 32 0 1145.312 45.312L237.248 512z"/></svg></span>
                    <a href="/" class="forgot-password text-white ">Back to login</a>
                </div>
                @csrf
            </form>
        </div>
    </div>
@section('content')

@endsection
