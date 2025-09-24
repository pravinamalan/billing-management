<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Employee extends Model
{
    use HasFactory;

    const COL_EMPLOYEE_ID      = 'employee_id';
    const COL_FULL_NAME        = 'full_name';
    const COL_ROLE_DESIGNATION = 'role_designation';
    const COL_CONTACT_NUMBER   = 'contact_number';
    const COL_EMPLOYEE_EMAIL   = 'employee_email';
    const COL_ADDRESS          = 'address';
    const COL_JOINING_DATE     = 'joining_date';
    const COL_SALARY_TYPE      = 'salary_type';
    const COL_BASE_SALARY      = 'base_salary';
    const COL_WORKING_STATUS   = 'working_status';
    const COL_ASSIGNED_MACHINE = 'assigned_machine';
    const COL_DOCUMENTS        = 'documents';
    const COL_ADVANCE_TAKEN    = 'advance_taken';
    const COL_BALANCE_SALARY   = 'balance_salary';
    const COL_NOTES            = 'notes';
    const COL_CREATED_AT       = 'created_at';
    const COL_UPDATED_AT       = 'updated_at';

    protected $fillable = [
        self::COL_EMPLOYEE_ID,
        self::COL_FULL_NAME,
        self::COL_ROLE_DESIGNATION,
        self::COL_EMPLOYEE_EMAIL,
        self::COL_CONTACT_NUMBER,
        self::COL_ADDRESS,
        self::COL_JOINING_DATE,
        self::COL_SALARY_TYPE,
        self::COL_BASE_SALARY,
        self::COL_WORKING_STATUS,
        self::COL_ASSIGNED_MACHINE,
        self::COL_DOCUMENTS,
        self::COL_ADVANCE_TAKEN,
        self::COL_BALANCE_SALARY,
        self::COL_NOTES,
        self::COL_CREATED_AT,
        self::COL_UPDATED_AT,
    ];

    protected $casts = [
        self::COL_JOINING_DATE => 'datetime',
        self::COL_CREATED_AT   => 'datetime',
        self::COL_UPDATED_AT   => 'datetime',
    ];

    const ALL_COLUMNS = [
        self::COL_EMPLOYEE_ID,
        self::COL_FULL_NAME,
        self::COL_ROLE_DESIGNATION,
        self::COL_EMPLOYEE_EMAIL,
        self::COL_CONTACT_NUMBER,
        self::COL_ADDRESS,
        self::COL_JOINING_DATE,
        self::COL_SALARY_TYPE,
        self::COL_BASE_SALARY,
        self::COL_WORKING_STATUS,
        self::COL_ASSIGNED_MACHINE,
        self::COL_DOCUMENTS,
        self::COL_ADVANCE_TAKEN,
        self::COL_BALANCE_SALARY,
        self::COL_NOTES,
        self::COL_CREATED_AT,
        self::COL_UPDATED_AT,
    ];

    protected static function booted()
    {
        static::creating(function ($employee) {
            // Get the latest employee ID
            $lastEmployee = static::latest('id')->first();

            // Extract the numeric part and increment it
            $nextNumber = $lastEmployee ? (int) substr($lastEmployee->employee_id, 4) + 1 : 1;

            // Format the new ID with leading zeros and the prefix
            $employee->employee_id = 'EMP-' . str_pad($nextNumber, 5, '0', STR_PAD_LEFT);
        });
    }
}
