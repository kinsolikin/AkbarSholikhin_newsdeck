<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Media extends Model
{
    use HasFactory;

    protected $guarded=['id'];

    public function Posts(){
        return $this->hasMany(Posts::class);
    }

    public function Category(){
        return $this->hasMany(Category::class);
    }


}
