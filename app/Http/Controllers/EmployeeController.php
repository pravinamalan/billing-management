<?php

namespace App\Http\Controllers;

use App\Http\Requests\EmployeeCreateRequest;
use App\Http\Requests\EmployeeUpdateRequest;
use App\Services\EmployeeService;
use App\Transformers\EmployeesTrasnformer;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Symfony\Component\HttpFoundation\Response;

class EmployeeController extends Controller
{
    public $employeeService;

    public function __construct(EmployeeService $employeeService)
    {
        $this->employeeService = $employeeService;
    }
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        try {
            $search         = $request->query('search', null);
            $recordsPerPage = $request->query('recordsPerPage', 10);

            $data           = $this->employeeService->getAllEmployees($search, $recordsPerPage);

            return response()->json([
                'status'    => 'Success',
                'data'        => $data['data'] ?? [],
                'total'     => $data['total'] ?? 0
            ], Response::HTTP_OK);
        } catch (Exception $e) {
            Log::error($e->getMessage());
            return response()->json([
                'status' => 'Error',
                'message' => 'Failed to get employees list',
            ], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        try {
            $fields = config('employee.fields');

            return response()->json([
                'status'             => 'Success',
                'fields'            => $fields ?? [],
            ], 200);
        } catch (Exception $e) {
            Log::error($e->getMessage());
            return response()->json([
                'status' => 'Error',
                'message' => 'Failed to get employees fields',
            ], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(EmployeeCreateRequest $request)
    {
        try {
            $data = $request->validated();

            $transformData  = EmployeesTrasnformer::employeeCreateRequest($data);
            $employeeSave   = $this->employeeService->storeEmployee($transformData);

            return response()->json([
                'status'   => 'Success',
                'data'     => $employeeSave ?? [],
                'message'  => "Employee created successfully."
            ], Response::HTTP_CREATED);
        } catch (Exception $e) {
            Log::error($e->getMessage());
            return response()->json([
                'status'    => 'Error',
                'message'   => 'Failed to create employee.',
            ], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id, Request $request)
    {
        try {
            $data   = $this->employeeService->findEmployee($id);

            return response()->json([
                'status'    => 'Success',
                'data'        => $data['data'] ?? []
            ], Response::HTTP_OK);
        } catch (Exception $e) {
            Log::error($e->getMessage());
            return response()->json([
                'status' => 'Error',
                'message' => 'Failed to get employee',
            ], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(EmployeeUpdateRequest $request, string $id)
    {
        try {
            $data = $request->validated();

            $transformData  = EmployeesTrasnformer::employeeUpdateRequest($data);
            $data           = $this->employeeService->updateEmployee($id, $transformData);

            return response()->json([
                'status'    => 'Success',
                'message'   => "Employee updated successfully."
            ], Response::HTTP_OK);
        } catch (Exception $e) {
            Log::error($e->getMessage());
            return response()->json([
                'status' => 'Error',
                'message' => 'Failed to update employee',
            ], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        try {
            $this->employeeService->deleteEmployee($id);

            return response()->json([
                'status' => 'Success',
                'message' => 'Employee deleted successfully'
            ], Response::HTTP_OK);
        } catch (Exception $e) {
            Log::error($e->getMessage());

            return response()->json([
                'status' => 'Error',
                'message' => 'Failed to delete employee',
            ], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }
}
