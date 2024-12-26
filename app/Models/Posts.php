<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Posts extends Model
{
    use HasFactory;

    protected $guarded=['id'];

    public function Category(){
        return $this->belongsTo(Category::class);
    }

    public function Media (){
        return $this->belongsTo(Media::class);
    }

    public function Bookmark(){
        return $this->hasMany(Bookmark::class);
    }
}
