<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport"> {{--Tell the browser to be responsive to screen width --}}
    <meta http-equiv="Content-Type" content="text/html;Charset=UTF-8">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="theme-color" content="#ffffff">
    <meta name="app-environment" content="{{ config('app.env') }}">
    <meta name="app-version" content="{{ config('app.version') }}">
    <title>@yield('title')</title>

    {{-- Jquery --}}
    <script  type="text/javascript" src="{{ URL::asset('plugins/jquery/jquery.min.js') }}"></script>
    @vite(['resources/css/app.css', 'resources/js/app.js'])
    {{-- External Style --}}
    @include('layouts/external-style')
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    {{-- icon --}}
    <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
    <script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>
    {{-- Page Style --}}
    @yield('page-styles')
</head>
<body>
    <div class="container-fluid page-content-wrapper">
        @yield('page-content')
    </div>
    {{-- Footer --}}
    @include('layouts/footer')
    {{-- Page Script --}}
    @yield('page-scripts')
    {{-- External Scripts --}}
    @include('layouts/external-script')
</body>
</html>
