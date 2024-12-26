<?php

namespace App\Http\Middleware;



use Inertia\Middleware;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;





class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that's loaded on the first page visit.
     *
     * @see https://inertiajs.com/server-side-setup#root-template
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determines the current asset version.
     *
     * @see https://inertiajs.com/asset-versioning
     */
    public function version(Request $request): ?string
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @see https://inertiajs.com/shared-data
     *
     * @return array<string, mixed>
     */
    public function share(Request $request): array
    {
        
        return array_merge(parent::share($request), [



            'apiData' => function () {
                
                try {
                    //code...
                    $response = Http::get('https://api-berita-ten.vercel.app/');
                    
                    if($response->successful()){
                        return $response->json();
                    }else{
                        return [];
                    }
                } catch (\Throwable $th) {
                    //throw $th;
                    return [];
                }
            },


           
            'flash' => [
                'error' => fn () => $request->session()->get('message'),
                'success' => fn () => $request->session()->get('berhasil'),
            ],

            'auth' => [
                'user' => $request->user() 
            ],

           
        ]);
    }
}
