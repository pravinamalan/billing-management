<?php

namespace App\Http\Controllers;

use App\Models\Employee;
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
            $data = [];
            $total = 0;
            return response()->json([
                'status'             => 'Success',
                'data'            => $data ?? [],
                'total' => $total,
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
        try {
            $fields = config('order.fields');

            $OrderInformation = $fields['Order Information'] ?? [];

            foreach ($OrderInformation['fields'] as $key => &$field) {
                if ($key === 'operator_assigned') {
                    $properties = json_decode($field['field_properties'], true) ?? [];
                    $properties['options']['values'] = Employee::whereIn('role_designation', ['Driver', 'Operator'])
                        ->pluck('full_name', 'id')
                        ->toArray();
                    $field['field_properties'] = json_encode($properties);
                }
            }
            unset($field);

            $fields['Order Information'] = $OrderInformation;

            return response()->json([
                'status'             => 'Success',
                'fields'            => $fields ?? [],
            ], 200);
        } catch (Exception $e) {
            Log::error($e->getMessage());
        }
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
