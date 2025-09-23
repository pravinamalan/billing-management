<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Quotation extends Model
{
    use HasFactory;
    protected $fillable = [
        'customer_name', 'customer_phone', 'customer_email', 'customer_address', 'total_amount'
    ];

    public function items()
    {
        return $this->hasMany(QuotationItem::class);
    }
}
