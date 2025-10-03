<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>@yield('title', 'Auth')</title>

    {{-- Jquery --}}
    <script  type="text/javascript" src="{{ URL::asset('plugins/jquery/jquery.min.js') }}"></script>

    @include('layouts/external-style')

    @vite(['resources/sass/auth/auth.scss', 'resources/js/auth/auth.js'])
</head>
<body>
    @yield('content')

    @include('layouts/external-script')
</body>
</html>
