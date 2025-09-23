<?php

return [
    "fields" => [
        "User Information" => [
            "section_id"      => "1",
            "section_slug"    => "USER_INFORMATION",
            "fields"        => [
                "full_name" => [
                    "field_key" => "BM-USER-FULL-NAME-def456",
                    "field_slug" => "FULL_NAME",
                    "field_label" => "Full Name",
                    "is_enabled" => true,
                    "field_type" => "inputText",
                    "field_data_type" => "string",
                    "field_properties" => json_encode([
                        "field_database_name" => "full_name",
                        "field_table_name" => "user",
                        "field_name" => "full_name",
                        "placeholder" => [
                            "label" => "Enter User Full Name"
                        ],
                        "custom_class" => [
                            "filter-count-element"
                        ]
                    ])
                ],
                "contact_number" => [
                    "field_key" => "BM-USER-CONTACT-jkl012",
                    "field_slug" => "CONTACT_NUMBER",
                    "field_label" => "Contact Number",
                    "is_enabled" => true,
                    "field_type" => "inputText",
                    "field_data_type" => "lookup",
                    "field_properties" => json_encode([
                        "field_database_name" => "contact_number",
                        "field_table_name" => "user",
                        "field_name" => "contact_number",
                        "input_mask" => "(###) ###-####",
                        "placeholder" => [
                            "label" => "Enter Contact Number"
                        ],
                        "custom_class" => [
                            "filter-count-element"
                        ]
                    ])
                ],
                "emergency_contact_number" => [
                    "field_key" => "BM-USER-EMERGENCY-CONTACT-jkl013",
                    "field_slug" => "EMERGENCY_CONTACT_NUMBER",
                    "field_label" => "Emergency Contact Number",
                    "is_enabled" => true,
                    "field_type" => "inputText",
                    "field_data_type" => "lookup",
                    "field_properties" => json_encode([
                        "field_database_name" => "emergency_contact_number",
                        "field_table_name" => "user",
                        "field_name" => "emergency_contact_number",
                        "input_mask" => "(###) ###-####",
                        "placeholder" => [
                            "label" => "Enter Emergency Contact Number"
                        ],
                        "custom_class" => [
                            "filter-count-element"
                        ]
                    ])
                ],
                "user_email" => [
                    "field_key" => "BM-USER-EMAIL-def456",
                    "field_slug" => "USER_EMAIL",
                    "field_label" => "Email",
                    "is_enabled" => true,
                    "field_type" => "inputText",
                    "field_data_type" => "string",
                    "field_properties" => json_encode([
                        "field_database_name" => "user_email",
                        "field_table_name" => "user",
                        "field_name" => "user_email",
                        "placeholder" => [
                            "label" => "Enter Email"
                        ],
                        "custom_class" => [
                            "filter-count-element"
                        ]
                    ])
                ],
                "address" => [
                    "field_key" => "BM-USER-ADDRESS-mno345",
                    "field_slug" => "ADDRESS",
                    "field_label" => "Address",
                    "is_enabled" => true,
                    "field_type" => "textarea",
                    "field_data_type" => "string",
                    "field_properties" => json_encode([
                        "field_database_name" => "address",
                        "field_table_name" => "user",
                        "field_name" => "address",
                        "placeholder" => [
                            "label" => "Enter Current Address"
                        ],
                        "custom_class" => [
                            "filter-count-element"
                        ]
                    ])
                ],
                "role_designation" => [
                    "field_key" => "BM-USER-ROLE-ghi789",
                    "field_slug" => "ROLE_DESIGNATION",
                    "field_label" => "Role / Designation",
                    "is_enabled" => true,
                    "field_type" => "select",
                    "field_data_type" => "string",
                    "field_properties" => json_encode([
                        "field_database_name" => "role_designation",
                        "field_table_name" => "user",
                        "field_name" => "role_designation",
                        "multi_select" => false,
                        "placeholder" => [
                            "label" => "Select Role/Designation"
                        ],
                        "options" => [
                            "predefined" => "Yes",
                            "values" => [
                                "Admin" => "Admin",
                                "Management" => "Management",
                            ]
                        ],
                        "custom_class" => [
                            "filter-count-element"
                        ]
                    ])
                ],
            ]
        ]
    ]
];
