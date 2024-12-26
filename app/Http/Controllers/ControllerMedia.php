<?php

namespace App\Http\Controllers;

use LDAP\Result;
use Inertia\Inertia;
use App\Models\Media;
use App\Models\Posts;
use App\Models\Category;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use PhpParser\Node\Stmt\Foreach_;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Session;
use Symfony\Component\DomCrawler\Crawler;
use Illuminate\Pagination\LengthAwarePaginator;
use Illuminate\Support\Facades\Auth;


class ControllerMedia extends Controller
{
    public $slug;





    public function index()
    {
        session(['visited_home' => true]);

        $response = Http::get('https://api-berita-ten.vercel.app/');

        if ($response->successful()) {
            $data = $response->json();

            foreach ($data['endpoints'] as $endpoint) {

                $media =   Media::updateOrCreate(
                    [

                        'media' => $endpoint['name'],
                        'slug'  =>  Str::slug($endpoint['name']),
                    ]
                );

                $mediaId = $media->id;


                foreach ($endpoint['paths'] as $path) {



                    Category::updateOrCreate([
                        'media_id' => $mediaId,
                        'slug' => Str::slug($path['name']),
                        'name' => $path['name'],
                        'path' => "https://api-berita-ten.vercel.app" . $path['path']
                    ]);
                }
            }
        }
        

        return Inertia::render('Home', [

        ]);
    }

    public function showcategory(Request $request)
    {



        try {
            // Mencari media berdasarkan slug yang diberikan
            $data = Media::firstWhere('media', $request->slug);

            // Jika media ditemukan
            if ($data) {
                $category = $data->category;
                $results = $category->pluck('name');

                return Inertia::render('Category', [
                    'category' => $results,
                    'media' => $request->slug
                ]);
            }
            // Jika media tidak ditemukan, redirect back dengan pesan
            return redirect()->back()->with('message', 'Maaf, media yang Anda cari tidak ditemukan');
        } catch (\Throwable $th) {
            // Jika ada error yang tidak terduga
            return redirect()->back()->with('error', 'Terjadi kesalahan. Silakan coba lagi.');
        }
    }


    public function showsandstore(Request $request)
    {

        $data = Media::with('category')->firstWhere('media', $request->media);

        if ($data) {

            $category = $data->category;

            $results = $category->pluck('name');

            $paths = $category->firstWhere('name', $request->category);

            if ($paths) {

                $path = $paths->path;

                $response = Http::retry(3, 100)->get($path);

                if ($response->successful()) {

                    $datas = $response->json();

                    if ($datas['success'] === true) {



                        $media = $request->media;
                        $category = $request->category;
                        

                        // mengambil id dari table media dan category
                        $media_id = Media::firstWhere('media', $media)->id;
                        $category_id = Category::firstWhere('name', $category)->id;

                        $posts = $datas['data']['posts'];


                        foreach ($posts as $dataini) {



                            $thumbnail = $dataini['thumbnail'] ?? 'default-thumbnail.jpg';


                            $store = Posts::updateOrCreate(
                                [
                                    'link' => $dataini['link'],
                                ],
                                [
                                    'category_id' => $category_id,
                                    'media_id' => $media_id,
                                    'title' => $dataini['title'],
                                    'pubDate' => $dataini['pubDate'],
                                    'description' => $dataini['description'],
                                    'thumbnail' => $thumbnail
                                ]
                            );
                        }


                        if ($store) {

                            $posts = Posts::where('category_id', $category_id)
                                ->where('media_id', $media_id)->orderBy('pubDate', 'desc')
                                ->get();






                            if (Auth::user()) {

                                $bookmarkedPostIds = Auth::user()->bookmarks()->pluck('post_id')->toArray();
                                foreach ($posts as $post) {
                                    $post->is_bookmarked = in_array($post->id, $bookmarkedPostIds);
                                }
                            }



                            return Inertia::render('PostAll', [
                                'posts' => $posts,
                                'category' => $results,
                                'media' => $request->media,
                                'onecategory' => $request->category,
                                
                            ]);
                        }
                    }

                    return redirect()->back()->with('message', 'Maaf, category yang anda cari tidak di temukan/kosong');
                }

                if ($response->failed()) {
                }
                return redirect()->back()->with('message', 'Maaf, category yang anda cari tidak di temukan/kosong');
            }
            return redirect()->back()->with('message', 'Maaf, category yang anda cari tidak di temukan/kosong');
        }
        return redirect()->back()->with('message', 'Maaf, media yang anda cari tidak di temukan/kosong');
    }






    public function search(Request $request)
    {


        $query = $request->input('query');

        // mengambil semua kategori dalam media yang di pilih

        $data = Media::firstWhere(
            'media',
            $request->input('onemedia')
        );
        $category = $data->category;
        $results = $category->pluck('name');


        // ambil id dari kategori terpilih
        $categoryid = Category::firstWhere('name', $request->input('onecategory'));
        $categoryid = $categoryid->id;

        // ambil id dari media terpilih
        $mediaid = Media::firstWhere('media', $request->input('onemedia'));
        $mediaid = $mediaid->id;



        $posts = Posts::where('title', 'like', '%' . $query . '%')
            ->where('category_id', $categoryid)
            ->where('media_id', $mediaid)
            ->get();


        if (Auth::user()) {

            $bookmarkedPostIds = Auth::user()->bookmarks()->pluck('post_id')->toArray();
            foreach ($posts as $post) {
                $post->is_bookmarked = in_array($post->id, $bookmarkedPostIds);
            }
        }

        // Kembalikan hasil ke tampilan
        return Inertia::render('PostAll', [
            'posts' => $posts,
            'category' => $results,
            'media' => $request->input('onemedia'),
            'onecategory' => $request->input('onecategory')
        ]);
    }


    public function storebookmark(Request $request)
    {

        dd('halo');
    }
}
