<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    use HasFactory;

    protected $guarded=['id'];

    public function Posts(){
        return $this->hasMany(Posts::class);
    }

    public Function Media(){
        return $this->belongsTo(Media::class);
    }
}
