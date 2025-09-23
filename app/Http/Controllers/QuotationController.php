<?php

namespace App\Http\Controllers;

use App\Models\Quotation;
use App\Models\QuotationItem;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use PDF;

class QuotationController extends Controller
{
    public function create()
    {
        return view('quotations.create');
    }
      public function getQuotationFields()
    {
        try {
            $fields = config('quotation.fields');

            return response()->json([
                'status' 			=> 'Success',
                'fields'			=> $fields ?? [],
            ], 200);

        } catch (Exception $e) {
            Log::error($e->getMessage());
        }
    }
    public function store(Request $request)
    {
        $request->validate([
            'customer_name' => 'required',
            'items.*.service_name' => 'required',
            'items.*.quantity' => 'required|integer|min:1',
            'items.*.unit_price' => 'required|numeric|min:0',
        ]);

        $quotation = Quotation::create([
            'customer_name' => $request->customer_name,
            'customer_phone' => $request->customer_phone,
            'customer_email' => $request->customer_email,
            'customer_address' => $request->customer_address,
            'total_amount' => 0,
        ]);

        $total = 0;
        foreach ($request->quotation_data as $item) {
            $lineTotal = $item['quantity'] * $item['unit_price'];
            $total += $lineTotal;

            QuotationItem::create([
                'quotation_id' => $quotation->id,
                'service_name' => $item['service_name'],
                'quantity' => $item['quantity'],
                'unit_price' => $item['unit_price'],
                'total' => $lineTotal,
            ]);
        }

        $quotation->update(['total_amount' => $total]);
        return response()->json([
            'status' 			=> 'Success',
            'data'			=> $quotation ?? [],
            'total' => $total,
        ], 200);
    }

    public function show()
    {

        try {
            $quotation = Quotation::with('items')->get()->toArray();
            $total = Quotation::with('items')->count();
            return response()->json([
                'status' 			=> 'Success',
                'data'			=> $quotation ?? [],
                'total' => $total,
            ], 200);
        } catch (Exception $e) {
            Log::error($e->getMessage());
        }
    }

    public function downloadPdf($id)
    {
        $quotation = Quotation::with('items')->findOrFail($id);

        $pdf = PDF::loadView('pdf.quotation', compact('quotation'));
        return $pdf->download('quotation_'.$quotation->id.'.pdf', [
            'Content-Type' => 'application/pdf',
            'Content-Disposition' => 'attachment; filename="quotation_'.$quotation->id.'.pdf"',
        ]);
    }

}
