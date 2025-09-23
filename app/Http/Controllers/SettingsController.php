<?php

namespace App\Http\Controllers;

use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class SettingsController extends Controller
{
   public function index(){
    return view('pages.settings');
   }
    public function getUsers(){
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
       public function getFields()
    {
        try {
            $fields = config('user.fields');

            return response()->json([
                'status' 			=> 'Success',
                'fields'			=> $fields ?? [],
            ], 200);

        } catch (Exception $e) {
            Log::error($e->getMessage());
        }
    }
}
