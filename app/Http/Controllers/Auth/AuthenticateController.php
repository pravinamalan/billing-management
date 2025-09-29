<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\AuthenticateRequest;
use App\Http\Requests\ResetPasswordRequest;
use App\Models\User;
use App\Services\AuthenticateService;
use App\Services\MailService;
use App\Services\PasswordService;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;
use Illuminate\Validation\Rule;

class AuthenticateController extends Controller
{
    protected $passwordService;
    protected $authenticateService;

    public function __construct(PasswordService $passwordService, AuthenticateService $authenticateService)
    {
        $this->passwordService = $passwordService;
        $this->authenticateService = $authenticateService;
    }

    /**
     * Handle an incoming authentication request to the application.
     */
    public function authenticate(AuthenticateRequest $request)
    {
        $requestValue = $request->validated();

        if (!$token = Auth::attempt(($requestValue))) {
            return redirect()->back()->with('error', 'Invalid Credentials');
        }

        return redirect()->route('home')->with('token', $token);
    }

    /**
     * Display the forgot password view page
     */
    public function forgotPassword()
    {
        return view('auth.forgot-password');
    }

    /**
     * Handle an incoming forgot password request.
     */
    public function submitForgotPasswordForm(Request $request)
    {
        $request->validate([
            'email' => ['required', 'email', Rule::exists('users', User::COL_EMAIL)]
        ]);

        // create password reset token
        $email = $request->email;
        $token = $this->passwordService->generateToken();

        // insert token in password reset tokens table
        DB::table('password_reset_tokens')->updateOrInsert(
            ['email' => $request->email],
            [
                'email'      => $email,
                'token'      => $token,
                'expires_at' => $this->passwordService->tokenExpire(5),
                'created_at' => Carbon::now(),
            ]
        );

        // password reset link generation
        $resetURL = url('/reset-password?token=' . $token);

        // send password reset link to user email
        $sendMail = (new MailService())->sendMail(
            $email,
            'Reset Password Notification',
            'emails.password-reset',
            ['resetLink' => $resetURL]
        );

        return back()->with('success', 'We have e-mailed your password reset link!');
    }

    /**
     * Display the password reset view for the given token.
     */
    public function resetPassword(Request $request)
    {
        $request->validate([
            'token' => ['required', 'string']
        ]);

        $token = $request->token;
        return view('auth.reset-password')->with(['token' => $token]);
    }

    /**
     * Handle an incoming new password request
     */
    public function updatePassword (ResetPasswordRequest $request)
    {
        $requestValue = $request->validated();

        $resetPassword = $this->authenticateService->resetPassword(
            $requestValue['email'],
            $requestValue['token'],
            $requestValue['password']
        );

        if(isset($resetPassword['status']) && $resetPassword['status'] == 'error') {
            return back()->with('error', $resetPassword['message']);
        }

        return redirect()->route('login')->with('success', 'Your password has been changed!');
    }

    /**
     * Log out the user and redirect to login page
     */
    public function logout ()
    {
        Auth::logout();
        return redirect()->route('login');
    }
}
