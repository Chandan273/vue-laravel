<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Book extends Model
{
    use HasFactory;
    protected $fillable = ['name','img'];
    protected $appends = ['image'];

    function getImageAttribute()
    {
        return asset("/uploads/$this->img");
    }
}
