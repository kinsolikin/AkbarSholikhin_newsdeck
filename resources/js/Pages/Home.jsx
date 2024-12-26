import React from "react";
import { Link,usePage } from "@inertiajs/react";
function Home({ data }) {

    console.log(window.location.origin);

   

    return (
        <div>
            <section class="py-10 sm:py-16 lg:py-24">
                <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div class="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
                        <div>
                            <h1 class="text-4xl font-bold text-black sm:text-6xl lg:text-7xl">
                                Selamat Datang di Website,
                                <div class="relative inline-flex">
                                    <span class="absolute inset-x-0 bottom-0 border-b-[30px] border-[#4ADE80]"></span>
                                    <h1 class="relative text-4xl font-bold text-orange-500 sm:text-6xl lg:text-7xl">
                                        NewsDeck.
                                    </h1>
                                </div>
                            </h1>

                            <p class="mt-8 text-base text-black sm:text-xl">
                                Temukan berita terkini dari berbagai sumber
                                tepercaya dalam satu platform. Kami mengumpulkan
                                berita dari media nasional dan internasional
                                untuk memberikan Anda akses cepat dan mudah ke
                                informasi yang Anda butuhkan. Tetap update
                                dengan berita terbaru di semua kategori, mulai
                                dari politik, ekonomi, teknologi, hingga
                                hiburan, langsung dari satu tempat." .
                            </p>

                            <div class="mt-10 sm:flex sm:items-center sm:space-x-8">
                                <Link
                                    href="media/antara"
                                    title=""
                                    class="inline-flex items-center justify-center px-4 py-4 text-base font-semibold text-white transition-all duration-200 bg-orange-500 hover:bg-orange-600 focus:bg-orange-600"
                                    role="button"
                                >
                                    {" "}
                                    Start exploring{" "}
                                </Link>
                            </div>

                            <div class="social-icons mt-4">
                                <a
                                    href="https://instagram.com"
                                    target="_blank"
                                    class="icon instagram"
                                >
                                    <i class="fab fa-instagram"></i>
                                </a>
                                <a
                                    href="https://facebook.com"
                                    target="_blank"
                                    class="icon facebook"
                                >
                                    <i class="fab fa-facebook-f"></i>
                                </a>
                                <a
                                    href="https://whatsapp.com"
                                    target="_blank"
                                    class="icon whatsapp"
                                >
                                    <i class="fab fa-whatsapp"></i>
                                </a>
                            </div>
                        </div>
                      

                        

<div class="grid grid-cols-2 md:grid-cols-4 gap-4">
    <div class="grid gap-4">
        <div>


          <Link href="media/antara">
            <img 
            class="h-auto max-w-full " src="http://localhost:8000/antara.png"  alt=""/>
            </Link>
        </div>
        <div>
        <Link href="media/cnbc">
            <img class="h-auto max-w-full " 
             src="http://localhost:8000/cnbc.png"
             alt=""/>
             </Link>
        </div>
        <div>
        <Link href="media/jpnn">

            <img class="h-auto max-w-full " src="http://localhost:8000/jpnn.png" alt=""/>
            </Link>
        </div>
    </div>
    <div class="grid gap-4">
        <div>
        <Link href="media/kumparan">

            <img class="h-auto max-w-full " src="http://localhost:8000/kumparan.png" alt=""/>
            </Link>
        </div>
        <div>
        <Link href="media/merdeka">

            <img class="h-auto max-w-full " src="http://localhost:8000/merdeka.png" alt=""/>
            </Link>
        </div>
        <div>
        <Link href="media/okezone">

            <img class="h-auto max-w-full " src="http://localhost:8000/okezone.jpeg" alt=""/>
            </Link>
        </div>
    </div>
    <div class="grid gap-4">
        <div>
        <Link href="media/republika">

            <img class="h-auto max-w-full " src="http://localhost:8000/republika.png" alt=""/>
            </Link>
        </div>
        <div>
        <Link href="media/sindonews">

            <img class="h-auto max-w-full " src="http://localhost:8000/sindo.png" alt=""/>
            </Link>
        </div>
        <div>
        <Link href="media/suara">

            <img class="h-auto max-w-full " src="http://localhost:8000/suara.jpg" alt=""/>
            </Link>
        </div>
    </div>
    <div class="grid gap-4">
        <div>
        <Link href="media/tempo">

            <img class="h-auto max-w-full " src="http://localhost:8000/tempo.jpg" alt=""/>
            </Link>
        </div>
     
    </div>
</div>

                        
                    </div>
                </div>
            </section>
        </div>
    );
}

// Home.layout = (page) => <Layout main={page} title="Welcome" />;

export default Home;
