<?php

namespace App\Transformers;

class EmployeesTrasnformer
{
    public static function standardResponse ($employee)
    {
        return [
            'id'                => $employee->id,
            'employee_id'       => $employee->employee_id,
            'full_name'         => $employee->full_name,
            'role_designation'  => $employee->role_designation,
            'contact_number'    => $employee->contact_number,
            'address'           => $employee->address,
            'joining_date'      => $employee->joining_date?->format('Y-m-d'),
            'salary_type'       => $employee->salary_type,
            'base_salary'       => $employee->base_salary,
            'working_status'    => $employee->working_status,
            'assigned_machine'  => $employee->assigned_machine,
            'documents'         => $employee->documents,
            'advance_taken'     => $employee->advance_taken,
            'balance_salary'    => $employee->balance_salary,
            'notes'             => $employee->notes,
            'created_at'        => $employee->created_at?->format('Y-m-d H:i:s'),
            'updated_at'        => $employee->updated_at?->format('Y-m-d H:i:s'),
        ];
    }

    public static function employeeCreateRequest ($request)
    {
        return [
            'full_name'             => $request['full_name'],
            'role_designation'      => $request['role_designation'],
            'contact_number'        => $request['contact_number'],
            'emergency_contact_number' => $request['emergency_contact_number'] ?? null,
            'employee_email'        => $request['employee_email'] ?? null,
            'address'               => $request['address']  ?? null,
            'joining_date'          => $request['joining_date']  ?? null,
            'salary_type'           => $request['salary_type']  ?? null,
            'base_salary'           => $request['base_salary']  ?? null,
            'working_status'        => $request['working_status']  ?? null,
            'assigned_machine'      => $request['assigned_machine']  ?? null,
            'documents'             => $request['documents']  ?? null,
            'advance_taken'         => $request['advance_taken']  ?? 0,
            'balance_salary'        => $request['balance_salary']  ?? 0,
            'notes'                 => $request['notes']  ?? null,
        ];
    }

    public static function employeeUpdateRequest ($request)
    {
        return [
            'full_name'             => $request['full_name'],
            'role_designation'      => $request['role_designation'],
            'contact_number'        => $request['contact_number'],
            'emergency_contact_number' => $request['emergency_contact_number'] ?? null,
            'employee_email'        => $request['employee_email']  ?? null,
            'address'               => $request['address']  ?? null,
            'joining_date'          => $request['joining_date']  ?? null,
            'salary_type'           => $request['salary_type']  ?? null,
            'base_salary'           => $request['base_salary']  ?? null,
            'working_status'        => $request['working_status']  ?? null,
            'assigned_machine'      => $request['assigned_machine']  ?? null,
            'documents'             => $request['documents']  ?? null,
            'advance_taken'         => $request['advance_taken']  ?? 0,
            'balance_salary'        => $request['balance_salary']  ?? 0,
            'notes'                 => $request['notes']  ?? null,
        ];
    }
}
