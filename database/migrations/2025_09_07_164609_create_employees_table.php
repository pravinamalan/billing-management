<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
         Schema::create('employees', function (Blueprint $table) {
            $table->id();
            $table->string('employee_id', 50)->unique();
            $table->string('full_name', 100);
            $table->string('role_designation', 50);
            $table->string('contact_number', 20)->nullable();
            $table->text('address')->nullable();
            $table->date('joining_date')->nullable();
            $table->string('salary_type', 20)->nullable();
            $table->decimal('base_salary', 10, 2)->nullable();
            $table->string('working_status', 20)->nullable();
            $table->string('assigned_machine', 50)->nullable();
            $table->text('documents')->nullable();
            $table->decimal('advance_taken', 10, 2)->default(0);
            $table->decimal('balance_salary', 10, 2)->default(0);
            $table->text('notes')->nullable();
            $table->timestamps();

            // Optional: Add indexes for better performance
            $table->index('role_designation');
            $table->index('working_status');
            $table->index('assigned_machine');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('employees');
    }
};
