<?php

return [
    "fields" => [
        "Employee Information" => [
            "section_id"      => "1",
            "section_slug"    => "EMPLOYEE_INFORMATION",
            "fields"        => [
                "full_name" => [
                    "field_key" => "BM-EMPLOYEE-FULL-NAME-def456",
                    "field_slug" => "FULL_NAME",
                    "field_label" => "Full Name",
                    "is_enabled" => true,
                    "field_type" => "inputText",
                    "field_data_type" => "string",
                    "field_properties" => json_encode([
                        "field_database_name" => "full_name",
                        "field_table_name" => "employees",
                        "field_name" => "full_name",
                        "placeholder" => [
                            "label" => "Enter Employee Full Name"
                        ],
                        "custom_class" => [
                            "filter-count-element"
                        ]
                    ])
                ],
                "contact_number" => [
                    "field_key" => "BM-EMPLOYEE-CONTACT-jkl012",
                    "field_slug" => "CONTACT_NUMBER",
                    "field_label" => "Contact Number",
                    "is_enabled" => true,
                    "field_type" => "inputText",
                    "field_data_type" => "lookup",
                    "field_properties" => json_encode([
                        "field_database_name" => "contact_number",
                        "field_table_name" => "employees",
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
                    "field_key" => "BM-EMPLOYEE-EMERGENCY-CONTACT-jkl013",
                    "field_slug" => "EMERGENCY_CONTACT_NUMBER",
                    "field_label" => "Emergency Contact Number",
                    "is_enabled" => true,
                    "field_type" => "inputText",
                    "field_data_type" => "lookup",
                    "field_properties" => json_encode([
                        "field_database_name" => "emergency_contact_number",
                        "field_table_name" => "employees",
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
                "employee_email" => [
                    "field_key" => "BM-EMPLOYEE-EMAIL-def456",
                    "field_slug" => "EMPLOYEE_EMAIL",
                    "field_label" => "Email",
                    "is_enabled" => true,
                    "field_type" => "inputText",
                    "field_data_type" => "string",
                    "field_properties" => json_encode([
                        "field_database_name" => "employee_email",
                        "field_table_name" => "orders",
                        "field_name" => "employee_email",
                        "placeholder" => [
                            "label" => "Enter Email"
                        ],
                        "custom_class" => [
                            "filter-count-element"
                        ]
                    ])
                ],
                "address" => [
                    "field_key" => "BM-EMPLOYEE-ADDRESS-mno345",
                    "field_slug" => "ADDRESS",
                    "field_label" => "Address",
                    "is_enabled" => true,
                    "field_type" => "textarea",
                    "field_data_type" => "string",
                    "field_properties" => json_encode([
                        "field_database_name" => "address",
                        "field_table_name" => "employees",
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
                    "field_key" => "BM-EMPLOYEE-ROLE-ghi789",
                    "field_slug" => "ROLE_DESIGNATION",
                    "field_label" => "Role / Designation",
                    "is_enabled" => true,
                    "field_type" => "select",
                    "field_data_type" => "string",
                    "field_properties" => json_encode([
                        "field_database_name" => "role_designation",
                        "field_table_name" => "employees",
                        "field_name" => "role_designation",
                        "multi_select" => false,
                        "placeholder" => [
                            "label" => "Select Role/Designation"
                        ],
                        "options" => [
                            "predefined" => "Yes",
                            "values" => [
                                "Driver" => "Driver",
                                "Operator" => "Operator",
                                "Cleaner" => "Cleaner",
                                "Supervisor" => "Supervisor",
                                "Helper" => "Helper",
                                "Mechanic" => "Mechanic",
                                "Accountant" => "Accountant"
                            ]
                        ],
                        "custom_class" => [
                            "filter-count-element"
                        ]
                    ])
                ],
                "joining_date" => [
                    "field_key" => "BM-EMPLOYEE-JOINING-DATE-pqr678",
                    "field_slug" => "JOINING_DATE",
                    "field_label" => "Joining Date",
                    "is_enabled" => true,
                    "field_type" => "inputText",
                    "field_data_type" => "date",
                    "field_properties" => json_encode([
                        "field_database_name" => "joining_date",
                        "field_table_name" => "employees",
                        "field_name" => "joining_date",
                        "field_data_type" => "date",
                        "date_separator" => "/",
                        "date_format" => "m/d/Y",
                        "show_date"  => "past",
                        "placeholder" => [
                            "label" => "Select Joining Date"
                        ],
                        "custom_class" => [
                            "date-field"
                        ],
                        "messages" => [
                            "invalid_date" => "Invalid Joining date."
                        ]
                    ])
                ],
                "salary_type" => [
                    "field_key" => "BM-EMPLOYEE-SALARY-TYPE-stu901",
                    "field_slug" => "SALARY_TYPE",
                    "field_label" => "Salary Type",
                    "is_enabled" => true,
                    "field_type" => "select",
                    "field_data_type" => "string",
                    "field_properties" => json_encode([
                        "field_database_name" => "salary_type",
                        "field_table_name" => "employees",
                        "field_name" => "salary_type",
                        "multi_select" => false,
                        "placeholder" => [
                            "label" => "Select Salary Type"
                        ],
                        "options" => [
                            "predefined" => "Yes",
                            "values" => [
                                "Monthly" => "Monthly",
                                "Daily" => "Daily",
                                "Hourly" => "Hourly"
                            ]
                        ],
                        "custom_class" => [
                            "filter-count-element"
                        ]
                    ])
                ],
                "base_salary" => [
                    "field_key" => "BM-EMPLOYEE-BASE-SALARY-vwx234",
                    "field_slug" => "BASE_SALARY",
                    "field_label" => "Base Salary / Wage",
                    "is_enabled" => true,
                    "field_type" => "inputText",
                    "field_data_type" => "number",
                    "field_properties" => json_encode([
                        "field_database_name" => "base_salary",
                        "field_table_name" => "employees",
                        "field_name" => "base_salary",
                        "placeholder" => [
                            "label" => "Enter Base Salary/Wage"
                        ],
                        "custom_class" => [
                            "filter-count-element"
                        ]
                    ])
                ],
                "working_status" => [
                    "field_key" => "BM-EMPLOYEE-STATUS-yza567",
                    "field_slug" => "WORKING_STATUS",
                    "field_label" => "Working Status",
                    "is_enabled" => true,
                    "field_type" => "select",
                    "field_data_type" => "string",
                    "field_properties" => json_encode([
                        "field_database_name" => "working_status",
                        "field_table_name" => "employees",
                        "field_name" => "working_status",
                        "multi_select" => false,
                        "placeholder" => [
                            "label" => "Select Working Status"
                        ],
                        "options" => [
                            "predefined" => "Yes",
                            "values" => [
                                "Active" => "Active",
                                "Inactive" => "Inactive",
                                "Left" => "Left"
                            ]
                        ],
                        "custom_class" => [
                            "filter-count-element"
                        ]
                    ])
                ],
                "assigned_machine" => [
                    "field_key" => "BM-EMPLOYEE-ASSIGNED-MACHINE-bcd890",
                    "field_slug" => "ASSIGNED_MACHINE",
                    "field_label" => "Assigned Machine",
                    "is_enabled" => true,
                    "field_type" => "select",
                    "field_data_type" => "string",
                    "field_properties" => json_encode([
                        "field_database_name" => "assigned_machine",
                        "field_table_name" => "employees",
                        "field_name" => "assigned_machine",
                        "multi_select" => false,
                        "placeholder" => [
                            "label" => "Select Assigned Machine"
                        ],
                        "options" => [
                            "predefined" => "Yes",
                            "values" => [
                                "JCB" => "JCB",
                                "Crane" => "Crane",
                                "Earthmover" => "Earthmover",
                                "Water Boring Machine" => "Water Boring Machine",
                                "Truck" => "Truck",
                                "None" => "None"
                            ]
                        ],
                        "custom_class" => [
                            "filter-count-element"
                        ]
                    ])
                ],
                "documents" => [
                    "field_key" => "BM-EMPLOYEE-DOCUMENTS-efg123",
                    "field_slug" => "DOCUMENTS",
                    "field_label" => "Documents (License, ID Proof Details)",
                    "is_enabled" => true,
                    "field_type" => "textarea",
                    "field_data_type" => "string",
                    "field_properties" => json_encode([
                        "field_database_name" => "documents",
                        "field_table_name" => "employees",
                        "field_name" => "documents",
                        "placeholder" => [
                            "label" => "Enter License Number, Aadhar Details, etc."
                        ],
                        "custom_class" => [
                            "filter-count-element"
                        ]
                    ])
                ],
                "notes" => [
                    "field_key" => "BM-EMPLOYEE-NOTES-nop012",
                    "field_slug" => "NOTES",
                    "field_label" => "Notes / Remarks",
                    "is_enabled" => true,
                    "field_type" => "textarea",
                    "field_data_type" => "string",
                    "field_properties" => json_encode([
                        "field_database_name" => "notes",
                        "field_table_name" => "employees",
                        "field_name" => "notes",
                        "placeholder" => [
                            "label" => "Enter Additional Information"
                        ],
                        "custom_class" => [
                            "filter-count-element"
                        ]
                    ])
                ]
            ]
        ]
    ]
];
