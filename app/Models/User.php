<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use Spatie\Permission\Traits\HasRoles;
use Tymon\JWTAuth\Contracts\JWTSubject;

class User extends Authenticatable implements JWTSubject
{
    use HasApiTokens, HasFactory, Notifiable, HasRoles, SoftDeletes;

    const COL_ID = 'id';
    const COL_ROLE_ID = 'role_id';
    const COL_NAME = 'name';
    const COL_EMAIL = 'email';
    const COL_CONTACT_NUMBER = 'contact_number';
    const COL_EMERGENCY_CONTACT_NUMBER = 'emergency_contact_number';
    const COL_PASSWORD = 'password';
    const COL_REMEMBER_TOKEN = 'remember_token';
    const COL_CREATED_AT = 'created_at';
    const COL_UPDATED_AT = 'updated_at';
    const COL_DELETED_AT = 'deleted_at';
    const COL_CREATED_BY = 'created_by';
    const COL_UPDATED_BY = 'updated_by';

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        self::COL_ROLE_ID,
        self::COL_NAME,
        self::COL_EMAIL,
        self::COL_CONTACT_NUMBER,
        self::COL_EMERGENCY_CONTACT_NUMBER,
        self::COL_PASSWORD,
        self::COL_CREATED_AT,
        self::COL_CREATED_BY,
        self::COL_UPDATED_AT,
        self::COL_UPDATED_BY,
        self::COL_DELETED_AT
    ];

    public $ALL_COLUMNS = [
        self::COL_ID,
        self::COL_ROLE_ID,
        self::COL_NAME,
        self::COL_EMAIL,
        self::COL_CONTACT_NUMBER,
        self::COL_EMERGENCY_CONTACT_NUMBER,
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        self::COL_PASSWORD,
        self::COL_REMEMBER_TOKEN,
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
        self::COL_CREATED_AT => 'datetime',
        self::COL_UPDATED_AT => 'datetime',
    ];

    /**
     * Get the identifier that will be stored in the subject claim of the JWT.
     *
     * @return mixed
     */
    public function getJWTIdentifier()
    {
        return $this->getKey();
    }

    /**
     * Return a key value array, containing any custom claims to be added to the JWT.
     *
     * @return array
     */
    public function getJWTCustomClaims()
    {
        return [];
    }
}
