<?php

namespace App\Services;

use App\Models\Employee;
use App\Transformers\EmployeesTrasnformer;

class EmployeeService
{
    /**
     * Get all employees
     */
    public function getAllEmployees($search = "", $recordsPerPage = 10)
    {
        $employees = Employee::when(!empty($search), function ($query) use ($search) {
                $query->where('full_name', 'like', "%{$search}$");
            })
            ->paginate($recordsPerPage, ['*'], 'page', null);

        return [
            "data"  => $employees->map(fn (Employee $employee) => EmployeesTrasnformer::standardResponse($employee)),
            "total" => $employees->count(),
        ];
    }

    /**
     * Store new employee
     */
    public function storeEmployee(array $data)
    {
        return Employee::create($data);
    }

    /**
     * Find employee by ID
     */
    public function findEmployee($id)
    {
        return Employee::findOrFail($id);
    }

    /**
     * Update employee
     */
    public function updateEmployee($id, array $data)
    {
        $employee = Employee::findOrFail($id);
        $employee->update($data);
        return $employee;
    }

    /**
     * Delete employee
     */
    public function deleteEmployee($id)
    {
        return Employee::destroy($id);
    }
}
