<?php

namespace App\Services;

use App\Models\User;
use Carbon\Carbon;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class AuthenticateService
{
    protected $passwordService;

    public function __construct(PasswordService $passwordService)
    {
        $this->passwordService = $passwordService;
    }

    public function resetPassword($email, $token, $password)
    {

        $tokenData = DB::table('password_reset_tokens')
            ->where('email', $email)
            ->where('token', $token)
            ->first();

        if (!$tokenData) {
            return [
                'status' => 'error',
                'message' => 'Invalid token or email!!'
            ];
        }

        if (Carbon::now()->isAfter(Carbon::parse($tokenData->expires_at))) {
            return [
                'status' => 'error',
                'message' => 'Token has Expired!'
            ];
        }

        $newPassword = $this->passwordService->hashPassword($password);;

        $updateUsers = User::where(User::COL_EMAIL, $email)->first();
        $updateUsers[User::COL_PASSWORD] = $newPassword;
        $updateUsers[User::COL_UPDATED_AT] = Carbon::now();
        $updateUsers->save();

        DB::table('password_reset_tokens')->where('email', $email)->delete();
    }
}
