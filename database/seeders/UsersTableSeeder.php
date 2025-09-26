<?php

namespace Database\Seeders;

use App\Models\Role;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('users')->insert([
            [
                User::COL_NAME                      => 'Super Admin',
                User::COL_EMAIL                     => 'superadmin@mail.com',
                User::COL_PASSWORD                  => Hash::make('Admin@123'),
                User::COL_CONTACT_NUMBER            => '(987) 654-3210',
                User::COL_EMERGENCY_CONTACT_NUMBER  => '(987) 654-3210',
                User::COL_ROLE_ID                   => Role::where('name', 'Super Admin')->first()->id,
            ],
            [
                User::COL_NAME                      => 'Admin',
                User::COL_EMAIL                     => 'admin@mail.com',
                User::COL_PASSWORD                  => Hash::make('Admin@123'),
                User::COL_CONTACT_NUMBER            => '(987) 654-3210',
                User::COL_EMERGENCY_CONTACT_NUMBER  => '(987) 654-3210',
                User::COL_ROLE_ID                   => Role::where('name', 'Admin')->first()->id,
            ],
            [
                User::COL_NAME                      => 'Manager',
                User::COL_EMAIL                     => 'managern@mail.com',
                User::COL_PASSWORD                  => Hash::make('Manager@123'),
                User::COL_CONTACT_NUMBER            => '(987) 654-3222',
                User::COL_EMERGENCY_CONTACT_NUMBER  => '(987) 654-3233',
                User::COL_ROLE_ID                   => Role::where('name', 'Management')->first()->id,
            ],
        ]);
    }
}
