<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ControllerScedule extends Controller
{
    public function deleteAllPosts()
    {
        // Menghapus semua data dari tabel posts
        DB::table('posts')->truncate(); // menggunakan truncate untuk menghapus semua isi tabel
        return response()->json(['message' => 'All posts deleted successfully.']);
    }
}
