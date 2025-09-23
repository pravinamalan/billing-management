<?php
return [
    /*
    |--------------------------------------------------------------------------
    | Quotation Field Setting
    |--------------------------------------------------------------------------
    */
    "fields" => [

        "Customer Information" => [
            "section_id"      => "1",
            "section_slug"    => "CUSTOMER_INFORMATION",
            "fields"        => [
                "customer_name" => [
                    "field_key" => "QT-CUSTOMER-NAME-abc123",
                    "field_slug" => "CUSTOMER_NAME",
                    "field_label" => "Customer Name",
                    "is_enabled" => true,
                    "field_type" => "inputText",
                    "field_data_type" => "string",
                    "field_properties" => json_encode([
                        "field_database_name" => "customer_name",
                        "field_table_name" => "quotations",
                        "field_name" => "customer_name",
                        "placeholder" => [
                            "label" => "Enter Customer Name"
                        ],
                        "custom_class" => [
                            "form-control"
                        ],
                        "validation" => "required"
                    ])
                ],
                "customer_phone" => [
                    "field_key" => "QT-CUSTOMER-PHONE-def456",
                    "field_slug" => "CUSTOMER_PHONE",
                    "field_label" => "Phone",
                    "is_enabled" => true,
                    "field_type" => "inputText",
                    "field_data_type" => "string",
                    "field_properties" => json_encode([
                        "field_database_name" => "customer_phone",
                        "field_table_name" => "quotations",
                        "field_name" => "customer_phone",
                        "placeholder" => [
                            "label" => "Enter Phone Number"
                        ],
                        "custom_class" => [
                            "form-control"
                        ]
                    ])
                ],
                "customer_email" => [
                    "field_key" => "QT-CUSTOMER-EMAIL-ghi789",
                    "field_slug" => "CUSTOMER_EMAIL",
                    "field_label" => "Email",
                    "is_enabled" => true,
                    "field_type" => "inputText",
                    "field_data_type" => "email",
                    "field_properties" => json_encode([
                        "field_database_name" => "customer_email",
                        "field_table_name" => "quotations",
                        "field_name" => "customer_email",
                        "placeholder" => [
                            "label" => "Enter Email Address"
                        ],
                        "custom_class" => [
                            "form-control"
                        ]
                    ])
                ],
                "customer_address" => [
                    "field_key" => "QT-CUSTOMER-ADDRESS-jkl012",
                    "field_slug" => "CUSTOMER_ADDRESS",
                    "field_label" => "Address",
                    "is_enabled" => true,
                    "field_type" => "textarea",
                    "field_data_type" => "string",
                    "field_properties" => json_encode([
                        "field_database_name" => "customer_address",
                        "field_table_name" => "quotations",
                        "field_name" => "customer_address",
                        "placeholder" => [
                            "label" => "Enter Customer Address"
                        ],
                        "custom_class" => [
                            "form-control"
                        ]
                    ])
                ]
            ]
        ],
        "Quotation Details" => [
            "section_id"      => "2",
            "section_slug"    => "QUOTATION_DETAILS",
            "fields"        => [
                "quotation_date" => [
                    "field_key" => "QT-DATE-mno345",
                    "field_slug" => "QUOTATION_DATE",
                    "field_label" => "Quotation Date",
                    "is_enabled" => true,
                    "field_type" => "inputText",
                    "field_data_type" => "date",
                    "field_properties" => json_encode([
                        "field_database_name" => "quotation_date",
                        "field_table_name" => "quotations",
                        "field_name" => "quotation_date",
                        "field_data_type" => "date",
                        "date_separator" => "/",
                        "date_format" => "m/d/Y",
                        "placeholder" => [
                            "label" => "Select Quotation Date"
                        ],
                        "custom_class" => [
                            "form-control",
                            "date-field"
                        ]
                    ])
                ],
                "valid_until" => [
                    "field_key" => "QT-VALID-UNTIL-pqr678",
                    "field_slug" => "VALID_UNTIL",
                    "field_label" => "Valid Until",
                    "is_enabled" => true,
                    "field_type" => "inputText",
                    "field_data_type" => "date",
                    "field_properties" => json_encode([
                        "field_database_name" => "valid_until",
                        "field_table_name" => "quotations",
                        "field_name" => "valid_until",
                        "field_data_type" => "date",
                        "date_separator" => "/",
                        "date_format" => "m/d/Y",
                        "placeholder" => [
                            "label" => "Select Valid Until Date"
                        ],
                        "custom_class" => [
                            "form-control",
                            "date-field"
                        ]
                    ])
                ]
            ]
        ],
        "Quotation Price Details" => [
            "section_id"      => "3",
            "section_slug"    => "QUOTATION_PRICE_DETAILS",
            "fields"  => [
                "service_name" => [
                    "field_key" => "QT-SERVICE-NAME-col001",
                    "field_slug" => "SERVICE_NAME",
                    "field_label" => "Enter Name of Item/ Service",
                    "is_enabled" => true,
                    "field_type" => "inputText",
                    "field_properties" => json_encode([
                        "field_name" => "items[0][service_name]",
                        "placeholder" => [
                            "label" => "Enter Name of Item/ Service"
                        ],
                        "custom_class" => [
                            "form-control"
                        ],
                        "validation" => "required"
                    ])
                ],
                "quantity" => [
                    "field_key" => "QT-QUANTITY-col002",
                    "field_slug" => "QUANTITY",
                    "field_label" => "Qty",
                    "is_enabled" => true,
                    "field_type" => "inputText",
                    "field_properties" => json_encode([
                        "field_name" => "items[0][quantity]",
                        "placeholder" => [
                            "label" => "Qty"
                        ],
                        "custom_class" => [
                            "form-control",
                            "qty"
                        ],
                        "default_value" => 1,
                        "min_value" => 1,
                        "step" => 1
                    ])
                ],
                "unit_price" => [
                    "field_key" => "QT-UNIT-PRICE-col003",
                    "field_slug" => "UNIT_PRICE",
                    "field_label" => "Unit Price",
                    "is_enabled" => true,
                    "field_type" => "inputText",
                    "field_properties" => json_encode([
                        "field_name" => "items[0][unit_price]",
                        "placeholder" => [
                            "label" => "Price"
                        ],
                        "custom_class" => [
                            "form-control",
                            "price"
                        ],
                        "step" => 0.01,
                        "min_value" => 0
                    ])
                ],
                "line_total" => [
                    "field_key" => "QT-LINE-TOTAL-col004",
                    "field_slug" => "LINE_TOTAL",
                    "field_label" => "Total",
                    "is_enabled" => true,
                    "field_type" => "inputText",
                    "field_properties" => json_encode([
                        "placeholder" => [
                            "label" => "Total Amount"
                        ],
                        "field_name" => "line_total",
                        "custom_class" => [
                            "form-control",
                            "line-total"
                        ],
                        "readonly" => true
                    ])
                ],
                "add_row" => [
                    "field_key" => "QT-ACTIONS-col005",
                    "field_slug" => "ACTIONS",
                    "field_label" => "",
                    "is_enabled" => true,
                    "field_type" => "actions",
                    "field_properties" => json_encode([
                        "field_name" => "add_service",
                        "field_id"   => "add_service",
                        "button_class" => [
                            "btn",
                            "btn-danger",
                            "add-row"
                        ],
                        "button_text" => "Add Service",
                    ])
                ],
                "delete_row" => [
                    "field_key" => "QT-ACTIONS-col006",
                    "field_slug" => "ACTIONS",
                    "field_label" => "",
                    "is_enabled" => true,
                    "field_type" => "actions",
                    "field_properties" => json_encode([
                        "field_name" => "delete_service",
                        "field_id"   => "delete_service",
                        "button_class" => [
                            "btn",
                            "btn-danger",
                            "delete-row"
                        ],
                        "button_text" => "Delete Service",
                    ])
                ],
            ]
        ]

    ]
];
