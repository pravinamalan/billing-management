<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class EmployeeUpdateRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'full_name'                => 'required|string|max:255',
            'contact_number'           => 'required|string|max:20',
            'emergency_contact_number' => 'nullable|string|max:20',
            'employee_email'           => 'nullable|email|unique:employees,employee_email',
            'address'                  => 'nullable|string|max:500',
            'role_designation'         => 'required|string|max:100',
            'joining_date'             => 'nullable|date',
            'salary_type'              => 'nullable|in:Daily,Monthly,Weekly',
            'base_salary'              => 'nullable|numeric|min:0',
            'working_status'           => 'nullable|in:Active,Inactive,On Leave',
            'assigned_machine'         => 'nullable|string|max:100',
            'documents'                => 'nullable|string|max:255',
            'notes'                    => 'nullable|string|max:1000',
        ];
    }
}
