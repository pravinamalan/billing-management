<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\AuthenticateRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthenticateController extends Controller
{
    public function authenticate(AuthenticateRequest $request)
    {
        $requestValue = $request->validated();

        if(!$token = Auth::attempt(($requestValue))) {
            return redirect()->back()->with('error', 'Invalid Credentials');
        }

        return redirect()->route('home')->with('token', $token);
    }

    public function forgotPassword()
    {
        return view('auth.forgot-password');
    }

    public function logout ()
    {
        Auth::logout();
        return redirect()->route('login');
    }
}
