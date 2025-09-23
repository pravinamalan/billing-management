<?php
return [
    /*
    |--------------------------------------------------------------------------
    | Order Field Setting
    |--------------------------------------------------------------------------
    */
    "fields" => [
        "Contact Information" => [
            "section_id"      => "1",
            "section_slug"    => "CONTACT_INFORMATION",
            "fields"        => [
                "customer_name" => [
                    "field_key" => "BM-ORDER-CUSTOMER-NAME-abc123",
                    "field_slug" => "CUSTOMER_NAME",
                    "field_label" => "Customer Name",
                    "is_enabled" => true,
                    "field_type" => "inputText",
                    "field_data_type" => "string",
                    "field_properties" => json_encode([
                        "field_database_name" => "customer_name",
                        "field_table_name" => "orders",
                        "field_name" => "customer_name",
                        "placeholder" => [
                            "label" => "Enter Customer Name"
                        ],
                        "custom_class" => [
                            "filter-count-element"
                        ]
                    ])
                ],
                "customer_contact" => [
                    "field_key" => "BM-ORDER-CUSTOMER-CONTACT-def456",
                    "field_slug" => "CUSTOMER_CONTACT",
                    "field_label" => "Customer Contact",
                    "is_enabled" => true,
                    "field_type" => "inputText",
                    "field_data_type" => "lookup",
                    "field_properties" => json_encode([
                        "field_database_name" => "customer_contact",
                        "field_table_name" => "orders",
                        "field_name" => "customer_contact",
                        "input_mask" => "(###) ###-####",
                        "placeholder" => [
                            "label" => "Enter Phone"
                        ],
                        "custom_class" => [
                            "filter-count-element"
                        ]
                    ])
                ],
                "customer_email" => [
                    "field_key" => "BM-ORDER-CUSTOMER-EMAIL-def456",
                    "field_slug" => "CUSTOMER_EMAIL",
                    "field_label" => "Customer Email",
                    "is_enabled" => true,
                    "field_type" => "inputText",
                    "field_data_type" => "string",
                    "field_properties" => json_encode([
                        "field_database_name" => "customer_email",
                        "field_table_name" => "orders",
                        "field_name" => "customer_email",
                        "placeholder" => [
                            "label" => "Enter Email"
                        ],
                        "custom_class" => [
                            "filter-count-element"
                        ]
                    ])
                ],
                "customer_place" => [
                    "field_key" => "BM-ORDER-CUSTOMER-PLACE-ghi789",
                    "field_slug" => "CUSTOMER_PLACE",
                    "field_label" => "Customer Place",
                    "is_enabled" => true,
                    "field_type" => "inputText",
                    "field_data_type" => "string",
                    "field_properties" => json_encode([
                        "field_database_name" => "customer_place",
                        "field_table_name" => "orders",
                        "field_name" => "customer_place",
                        "placeholder" => [
                            "label" => "Enter Customer Location"
                        ],
                        "custom_class" => [
                            "filter-count-element"
                        ]
                    ])
                ]
            ]
        ],
        "Order Information" => [
            "section_id"      => "2",
            "section_slug"    => "ORDER_INFORMATION",
            "fields"        => [
                "service_type" => [
                    "field_key" => "BM-ORDER-SERVICE-TYPE-jkl012",
                    "field_slug" => "SERVICE_TYPE",
                    "field_label" => "Service Type",
                    "is_enabled" => true,
                    "field_type" => "select",
                    "field_data_type" => "string",
                    "field_properties" => json_encode([
                        "field_database_name" => "service_type",
                        "field_table_name" => "orders",
                        "field_name" => "service_type",
                        "multi_select" => false,
                        "placeholder" => [
                            "label" => "Select Service Type"
                        ],
                        "options" => [
                            "predefined" => "Yes",
                            "values" => [
                                "Earthmover" => "Earthmover",
                                "Water Boring" => "Water Boring",
                                "Crane" => "Crane",
                                "JCB rental" => "JCB rental"
                            ]
                        ],
                        "custom_class" => [
                            "filter-count-element"
                        ]
                    ])
                ],
                "operator_assigned" => [
                    "field_key" => "BM-ORDER-OPERATOR-ASSIGNED-mno345",
                    "field_slug" => "OPERATOR_ASSIGNED",
                    "field_label" => "Driver / Operator Assigned",
                    "is_enabled" => true,
                    "field_type" => "inputText",
                    "field_data_type" => "string",
                    "field_properties" => json_encode([
                        "field_database_name" => "operator_assigned",
                        "field_table_name" => "orders",
                        "field_name" => "operator_assigned",
                        "placeholder" => [
                            "label" => "Enter Driver/Operator Name"
                        ],
                        "custom_class" => [
                            "filter-count-element"
                        ]
                    ])
                ],
                "location_address" => [
                    "field_key" => "BM-ORDER-LOCATION-ADDRESS-pqr678",
                    "field_slug" => "LOCATION_ADDRESS",
                    "field_label" => "Location / Site Address",
                    "is_enabled" => true,
                    "field_type" => "textarea",
                    "field_data_type" => "string",
                    "field_properties" => json_encode([
                        "field_database_name" => "location_address",
                        "field_table_name" => "orders",
                        "field_name" => "location_address",
                        "placeholder" => [
                            "label" => "Enter Work Location"
                        ],
                        "custom_class" => [
                            "filter-count-element"
                        ]
                    ])
                ],
                "order_date" => [
                    "field_key" => "BM-ORDER-DATE-stu901",
                    "field_slug" => "ORDER_DATE",
                    "field_label" => "Order Date",
                    "is_enabled" => true,
                    "field_type" => "inputText",
                    "field_data_type" => "date",
                    "field_properties" => json_encode([
                        "field_database_name" => "order_date",
                        "field_table_name" => "orders",
                        "field_name" => "order_date",
                        "field_data_type" => "date",
                        "date_separator" => "/",
                        "date_format" => "m/d/Y",
                        "show_date"  => "future",
                        "placeholder" => [
                            "label" => "Select Order Date"
                        ],
                        "custom_class" => [
                            "date-field"
                        ],
                        "messages" => [
                            "invalid_date" => "Invalid Order date."
                        ]
                    ])
                ],
                "start_date" => [
                    "field_key" => "BM-ORDER-START-DATE-vwx234",
                    "field_slug" => "START_DATE",
                    "field_label" => "Start Date",
                    "is_enabled" => true,
                    "field_type" => "inputText",
                    "field_data_type" => "date",
                    "field_properties" => json_encode([
                        "field_database_name" => "start_date",
                        "field_table_name" => "orders",
                        "field_name" => "start_date",
                        "field_data_type" => "date",
                        "date_separator" => "/",
                        "date_format" => "m/d/Y",
                        "show_date"  => "future",
                        "placeholder" => [
                            "label" => "Select Start Date"
                        ],
                        "custom_class" => [
                            "date-field"
                        ],
                        "messages" => [
                            "invalid_date" => "Invalid Start date."
                        ]
                    ])
                ],
                "end_date" => [
                    "field_key" => "BM-ORDER-END-DATE-yza567",
                    "field_slug" => "END_DATE",
                    "field_label" => "End Date",
                    "is_enabled" => true,
                    "field_type" => "inputText",
                    "field_data_type" => "date",
                    "field_properties" => json_encode([
                        "field_database_name" => "end_date",
                        "field_table_name" => "orders",
                        "field_name" => "end_date",
                        "field_data_type" => "date",
                        "date_separator" => "/",
                        "date_format" => "m/d/Y",
                        "show_date"  => "future",
                        "placeholder" => [
                            "label" => "Select End Date"
                        ],
                        "custom_class" => [
                            "date-field"
                        ],
                        "messages" => [
                            "invalid_date" => "Invalid End date."
                        ]
                    ])
                ],
                "order_status" => [
                    "field_key" => "BM-ORDER-STATUS-bcd890",
                    "field_slug" => "ORDER_STATUS",
                    "field_label" => "Order Status",
                    "is_enabled" => true,
                    "field_type" => "select",
                    "field_data_type" => "string",
                    "field_properties" => json_encode([
                        "field_database_name" => "order_status",
                        "field_table_name" => "orders",
                        "field_name" => "order_status",
                        "multi_select" => false,
                        "placeholder" => [
                            "label" => "Select Order Status"
                        ],
                        "options" => [
                            "predefined" => "Yes",
                            "values" => [
                                "Pending" => "Pending",
                                "In-progress" => "In-progress",
                                "Completed" => "Completed",
                                "Cancelled" => "Cancelled"
                            ]
                        ],
                        "custom_class" => [
                            "filter-count-element"
                        ]
                    ])
                ]
            ]
        ],
        "Payment Information" => [
            "section_id"      => "3",
            "section_slug"    => "PAYMENT_INFORMATION",
            "fields"        => [
                "working_hours" => [
                    "field_key" => "BM-ORDER-WORKING-HOURS-efg123",
                    "field_slug" => "WORKING_HOURS",
                    "field_label" => "Working Hours / Days",
                    "is_enabled" => true,
                    "field_type" => "inputText",
                    "field_data_type" => "number",
                    "field_properties" => json_encode([
                        "field_database_name" => "working_hours",
                        "field_table_name" => "orders",
                        "field_name" => "working_hours",
                        "placeholder" => [
                            "label" => "Enter Duration"
                        ],
                        "custom_class" => [
                            "filter-count-element"
                        ]
                    ])
                ],
                "rate_type" => [
                    "field_key" => "BM-ORDER-RATE-TYPE-hij456",
                    "field_slug" => "RATE_TYPE",
                    "field_label" => "Rate Type",
                    "is_enabled" => true,
                    "field_type" => "select",
                    "field_data_type" => "string",
                    "field_properties" => json_encode([
                        "field_database_name" => "rate_type",
                        "field_table_name" => "orders",
                        "field_name" => "rate_type",
                        "multi_select" => false,
                        "placeholder" => [
                            "label" => "Select Rate Type"
                        ],
                        "options" => [
                            "predefined" => "Yes",
                            "values" => [
                                "Hourly" => "Hourly",
                                "Daily" => "Daily",
                                "Fixed" => "Fixed"
                            ]
                        ],
                        "custom_class" => [
                            "filter-count-element"
                        ]
                    ])
                ],
                "rate_amount" => [
                    "field_key" => "BM-ORDER-RATE-AMOUNT-klm789",
                    "field_slug" => "RATE_AMOUNT",
                    "field_label" => "Rate (per hr/day)",
                    "is_enabled" => true,
                    "field_type" => "inputText",
                    "field_data_type" => "number",
                    "field_properties" => json_encode([
                        "field_database_name" => "rate_amount",
                        "field_table_name" => "orders",
                        "field_name" => "rate_amount",
                        "placeholder" => [
                            "label" => "Enter Rate Amount"
                        ],
                        "custom_class" => [
                            "filter-count-element"
                        ]
                    ])
                ],
                "total_amount" => [
                    "field_key" => "BM-ORDER-TOTAL-AMOUNT-nop012",
                    "field_slug" => "TOTAL_AMOUNT",
                    "field_label" => "Total Amount",
                    "is_enabled" => true,
                    "field_type" => "inputText",
                    "field_data_type" => "number",
                    "field_properties" => json_encode([
                        "field_database_name" => "total_amount",
                        "field_table_name" => "orders",
                        "field_name" => "total_amount",
                        "placeholder" => [
                            "label" => "Enter Total Amount"
                        ],
                        "custom_class" => [
                            "filter-count-element"
                        ]
                    ])
                ],
                "advance_received" => [
                    "field_key" => "BM-ORDER-ADVANCE-RECEIVED-qrs345",
                    "field_slug" => "ADVANCE_RECEIVED",
                    "field_label" => "Advance Received",
                    "is_enabled" => true,
                    "field_type" => "inputText",
                    "field_data_type" => "number",
                    "field_properties" => json_encode([
                        "field_database_name" => "advance_received",
                        "field_table_name" => "orders",
                        "field_name" => "advance_received",
                        "placeholder" => [
                            "label" => "Enter Advance Amount"
                        ],
                        "custom_class" => [
                            "filter-count-element"
                        ]
                    ])
                ],
                "balance_amount" => [
                    "field_key" => "BM-ORDER-BALANCE-AMOUNT-tuv678",
                    "field_slug" => "BALANCE_AMOUNT",
                    "field_label" => "Balance Amount",
                    "is_enabled" => true,
                    "field_type" => "inputText",
                    "field_data_type" => "number",
                    "field_properties" => json_encode([
                        "field_database_name" => "balance_amount",
                        "field_table_name" => "orders",
                        "field_name" => "balance_amount",
                        "placeholder" => [
                            "label" => "Enter Balance Amount"
                        ],
                        "custom_class" => [
                            "filter-count-element"
                        ]
                    ])
                ],
                "payment_status" => [
                    "field_key" => "BM-ORDER-PAYMENT-STATUS-wxy901",
                    "field_slug" => "PAYMENT_STATUS",
                    "field_label" => "Payment Status",
                    "is_enabled" => true,
                    "field_type" => "select",
                    "field_data_type" => "string",
                    "field_properties" => json_encode([
                        "field_database_name" => "payment_status",
                        "field_table_name" => "orders",
                        "field_name" => "payment_status",
                        "multi_select" => false,
                        "placeholder" => [
                            "label" => "Select Payment Status"
                        ],
                        "options" => [
                            "predefined" => "Yes",
                            "values" => [
                                "Paid" => "Paid",
                                "Partial" => "Partial",
                                "Unpaid" => "Unpaid"
                            ]
                        ],
                        "custom_class" => [
                            "filter-count-element"
                        ]
                    ])
                ],
                "payment_mode" => [
                    "field_key" => "BM-ORDER-PAYMENT-MODE-zab234",
                    "field_slug" => "PAYMENT_MODE",
                    "field_label" => "Payment Mode",
                    "is_enabled" => true,
                    "field_type" => "select",
                    "field_data_type" => "string",
                    "field_properties" => json_encode([
                        "field_database_name" => "payment_mode",
                        "field_table_name" => "orders",
                        "field_name" => "payment_mode",
                        "multi_select" => false,
                        "placeholder" => [
                            "label" => "Select Payment Mode"
                        ],
                        "options" => [
                            "predefined" => "Yes",
                            "values" => [
                                "Cash" => "Cash",
                                "UPI" => "UPI",
                                "Bank Transfer" => "Bank Transfer"
                            ]
                        ],
                        "custom_class" => [
                            "filter-count-element"
                        ]
                    ])
                ]
            ]
        ],
        "Additional Information" => [
            "section_id"      => "4",
            "section_slug"    => "ADDITIONAL_INFORMATION",
            "fields"        => [
                "notes" => [
                    "field_key" => "BM-ORDER-NOTES-cde567",
                    "field_slug" => "NOTES",
                    "field_label" => "Notes / Remarks",
                    "is_enabled" => true,
                    "field_type" => "textarea",
                    "field_data_type" => "string",
                    "field_properties" => json_encode([
                        "field_database_name" => "notes",
                        "field_table_name" => "orders",
                        "field_name" => "notes",
                        "placeholder" => [
                            "label" => "Enter Additional Information"
                        ],
                        "custom_class" => [
                            "filter-count-element"
                        ]
                    ])
                ],
                "invoice_number" => [
                    "field_key" => "BM-ORDER-INVOICE-NUMBER-fgh890",
                    "field_slug" => "INVOICE_NUMBER",
                    "field_label" => "Invoice Number / PDF link",
                    "is_enabled" => true,
                    "field_type" => "inputText",
                    "field_data_type" => "string",
                    "field_properties" => json_encode([
                        "field_database_name" => "invoice_number",
                        "field_table_name" => "orders",
                        "field_name" => "invoice_number",
                        "placeholder" => [
                            "label" => "Enter Invoice Number"
                        ],
                        "custom_class" => [
                            "filter-count-element"
                        ]
                    ])
                ]
            ]
        ]
    ],
];
