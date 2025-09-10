<?php

namespace App\Http\Controllers;

use App\Models\Order;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

class OrderController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        try {
            $fields = config('order.fields');

            return response()->json([
                'status' 			=> 'Success',
                'fields'			=> $fields ?? [],
            ], 200);

        } catch (Exception $e) {
            Log::error($e->getMessage());
        }
    }
    public function getEmployee(){
        try {
            $data = DB::table('employees')->get();
            $total = DB::table('employees')->count();
            return response()->json([
                'status' 			=> 'Success',
                'data'			=> $data ?? [],
                'total' => $total,
            ], 200);
        } catch (Exception $e) {
            Log::error($e->getMessage());
        }
    }
    public function getOrder(){
        try {
            $data = [];
            $total = 0;
            return response()->json([
                'status' 			=> 'Success',
                'data'			=> $data ?? [],
                'total' => $total,
            ], 200);
        } catch (Exception $e) {
            Log::error($e->getMessage());
        }
    }
     public function getEmployeeFields()
    {
        try {
            $fields = config('employee.fields');

            return response()->json([
                'status' 			=> 'Success',
                'fields'			=> $fields ?? [],
            ], 200);

        } catch (Exception $e) {
            Log::error($e->getMessage());
        }
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Order $order)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Order $order)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Order $order)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Order $order)
    {
        //
    }
}
