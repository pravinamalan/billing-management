<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Quotation #{{ $quotation->id }}</title>
    <style>
        body { font-family: DejaVu Sans, sans-serif; font-size: 12px; margin: 0; padding: 20px; color: #333; }
        .header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; }
        .company-logo {
            width: 100px !important;
            height: auto;
        }
        .header-content {
            text-align: center;
            flex-grow: 1;
        }
        .header-content h2 { margin: 0; font-size: 18px; }
        .header-content p { margin: 5px 0 0 0; font-size: 14px; }

        .company-info { text-align: right; font-size: 11px; margin-bottom: 20px; }
        .customer-info { margin: 20px 0; padding: 15px; background: #f9f9f9; border-radius: 5px; }

        table { width: 100%; border-collapse: collapse; margin: 20px 0; }
        table th, table td { border: 1px solid #666; padding: 10px; text-align: left; }
        table th { background: #eee; font-weight: bold; }

        .total { text-align: right; margin: 20px 0; font-size: 16px; font-weight: bold; }
        .footer { text-align: center; margin-top: 40px; font-size: 11px; border-top: 1px solid #ccc; padding-top: 10px; }

        /* Remove all table borders in header */
        .header-table { border: none !important; }
        .header-table tr, .header-table td { border: none !important; }
    </style>
</head>
<body>

    <!-- Header with logo + company name -->
    <div class="header">
        <div class="logo-container">
            <img src="{{ public_path('images/company_logo.png') }}" class="company-logo" alt="Company Logo">
        </div>

        <div class="header-content">
            <h2>Earthmovers & Construction Services</h2>
            <p>Billing & Quotation Software</p>
        </div>

        <!-- Empty div for spacing balance -->
        <div style="width: 80px;"></div>
    </div>

    <!-- Company Info -->
    <div class="company-info">
        <p><strong>Company:</strong> Your Company Name</p>
        <p><strong>Phone:</strong> +91-9876543210</p>
        <p><strong>Email:</strong> info@yourcompany.com</p>
        <p><strong>Date:</strong> {{ $quotation->created_at->format('d-m-Y') }}</p>
    </div>

    <!-- Customer Info -->
    <div class="customer-info">
        <p><strong>Quotation To:</strong> {{ $quotation->customer_name }}</p>
        <p><strong>Phone:</strong> {{ $quotation->customer_phone }}</p>
        @if($quotation->customer_email)
            <p><strong>Email:</strong> {{ $quotation->customer_email }}</p>
        @endif
        @if($quotation->customer_address)
            <p><strong>Address:</strong> {{ $quotation->customer_address }}</p>
        @endif
    </div>

    <!-- Services Table -->
    <table>
        <thead>
            <tr>
                <th>#</th>
                <th>Service</th>
                <th>Qty</th>
                <th>Unit Price (₹)</th>
                <th>Total (₹)</th>
            </tr>
        </thead>
        <tbody>
            @foreach($quotation->items as $index => $item)
            <tr>
                <td>{{ $index+1 }}</td>
                <td>{{ $item->service_name }}</td>
                <td>{{ $item->quantity }}</td>
                <td>{{ number_format($item->unit_price, 2) }}</td>
                <td>{{ number_format($item->total, 2) }}</td>
            </tr>
            @endforeach
        </tbody>
    </table>

    <!-- Total -->
    <p class="total">Grand Total: ₹ {{ number_format($quotation->total_amount, 2) }}</p>

    <!-- Footer -->
    <div class="footer">
        <p><strong>Terms & Conditions:</strong> Quotation valid for 15 days from issue date.</p>
        <p>For queries, contact us at info@yourcompany.com | +91-9876543210</p>
        <p>Thank you for choosing our services 🚜</p>
    </div>

</body>
</html>
