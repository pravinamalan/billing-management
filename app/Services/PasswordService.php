<?php

namespace App\Services;

use Carbon\Carbon;
use Illuminate\Support\Facades\Hash;

class PasswordService
{

    public function generateToken($length = 64)
    {
        $token  = \Illuminate\Support\Str::random($length);

        return $token;
    }

    public function tokenExpire ($minutes = 5)
    {
        return Carbon::now()->addMinutes($minutes);
    }

    public function hashPassword($password)
    {
        return Hash::make($password);
    }
}
