<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Media;
use App\Models\Posts;
use App\Models\Bookmark;
use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;

class BookmarkController extends Controller
{
    public function index()
    {

        if (Auth::check()) {
            $id = Auth::id();
        }

        $bookmarkedPosts = Bookmark::where('user_id', $id)->with('post')->get();
        $media = Media::with('Category')->get();


        return Inertia::render('Bookmark', [
            'medias' => $media,
            'posts' => $bookmarkedPosts,
        ]);
    }

    public function store(Request $request)
    {

        $validated = $request->validate([
            'posts_id' => 'required|integer|exists:posts,id',
        ]);

        Bookmark::create([
            'user_id' => Auth::id(),
            'post_id' => $validated['posts_id'],
        ]);
    }

    public function destroy(Request $request)
    {
        Bookmark::firstWhere('post_id', $request->input('posts_id'))->delete();
    }

    public function searchbookmarks(Request $request)
    {
        $media = $request->media;
        $category = $request->category;

        if (Auth::check()) {
            $id = Auth::id();
        }

        $posts = Bookmark::where('user_id', $id)
        ->whereHas('post', function($postQuery) use ($media, $category) {
            // Jika filter media ada, tambahkan ke query
            if ($media) {
                $postQuery->where('media_id', $media);
            }
            // Jika filter kategori ada, tambahkan ke query
            if ($category) {
                $postQuery->where('category_id', $category);
            }
        })
        ->with(['post.media', 'post.category'])
    ->join('posts', 'bookmarks.post_id', '=', 'posts.id') 
    ->orderBy('posts.pubDate', 'desc') 
    ->select('bookmarks.*') 
    ->get();

        $media = Media::with('Category')->get();



     
        return Inertia::render('Bookmark', [
            'medias' => $media,
            'posts' => $posts,
        ]);
    }
}
