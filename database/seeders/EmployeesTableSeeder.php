<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class EmployeesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('employees')->insert([
            [
                'employee_id' => 'EMP-001',
                'full_name' => 'Rajesh Kumar',
                'role_designation' => 'Driver',
                'contact_number' => '(987) 654-3210',
                'address' => '123 Main Street, Chennai, Tamil Nadu',
                'joining_date' => '2023-01-15',
                'salary_type' => 'Monthly',
                'base_salary' => 18000.00,
                'working_status' => 'Active',
                'assigned_machine' => 'JCB',
                'documents' => 'License No: TN01 20210000123, Aadhar: 1234 5678 9012',
                'advance_taken' => 5000.00,
                'balance_salary' => 13000.00,
                'notes' => 'Experienced operator, good with earthmoving equipment',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'employee_id' => 'EMP-002',
                'full_name' => 'Suresh Patel',
                'role_designation' => 'Operator',
                'contact_number' => '(876) 543-2109',
                'address' => '456 Oak Avenue, Bangalore, Karnataka',
                'joining_date' => '2023-03-22',
                'salary_type' => 'Daily',
                'base_salary' => 700.00,
                'working_status' => 'Active',
                'assigned_machine' => 'Crane',
                'documents' => 'License No: KA02 20220000456, Aadhar: 2345 6789 0123',
                'advance_taken' => 3000.00,
                'balance_salary' => 0.00,
                'notes' => 'Specialized in crane operations, available for overtime',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'employee_id' => 'EMP-003',
                'full_name' => 'Priya Sharma',
                'role_designation' => 'Supervisor',
                'contact_number' => '(765) 432-1098',
                'address' => '789 Elm Road, Hyderabad, Telangana',
                'joining_date' => '2022-11-05',
                'salary_type' => 'Monthly',
                'base_salary' => 25000.00,
                'working_status' => 'Active',
                'assigned_machine' => 'None',
                'documents' => 'Aadhar: 3456 7890 1234, PAN: ABCPS1234D',
                'advance_taken' => 0.00,
                'balance_salary' => 25000.00,
                'notes' => 'Site supervisor, manages daily operations and crew',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'employee_id' => 'EMP-004',
                'full_name' => 'Vijay Singh',
                'role_designation' => 'Helper',
                'contact_number' => '(654) 321-0987',
                'address' => '321 Pine Lane, Mumbai, Maharashtra',
                'joining_date' => '2023-05-18',
                'salary_type' => 'Daily',
                'base_salary' => 500.00,
                'working_status' => 'Active',
                'assigned_machine' => 'Earthmover',
                'documents' => 'Aadhar: 4567 8901 2345',
                'advance_taken' => 1500.00,
                'balance_salary' => 2000.00,
                'notes' => 'New helper, learning equipment operations',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'employee_id' => 'EMP-005',
                'full_name' => 'Arun Mehta',
                'role_designation' => 'Driver',
                'contact_number' => '(543) 210-9876',
                'address' => '654 Cedar Court, Delhi',
                'joining_date' => '2022-08-30',
                'salary_type' => 'Monthly',
                'base_salary' => 20000.00,
                'working_status' => 'Inactive',
                'assigned_machine' => 'Water Boring Machine',
                'documents' => 'License No: DL03 20200000789, Aadhar: 5678 9012 3456',
                'advance_taken' => 0.00,
                'balance_salary' => 0.00,
                'notes' => 'On leave for 2 months, will return next quarter',
                'created_at' => now(),
                'updated_at' => now(),
            ]
        ]);
    }
}
