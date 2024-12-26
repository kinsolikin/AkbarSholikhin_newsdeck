import React from "react";
import Layout from "../Layouts/Layout";
function Category({ category, media,flash }) {

    console.log(flash)
    
    return (
        <div class ="mt-14">
            {flash.success ? (
                <div class="flex text-center justify-center items-center p-4 mb-4 text-sm text-red-800  bg-red-200 dark:bg-gray-800 dark:text-red-400" role="alert">
                <svg class="flex-shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
                </svg>
                <span class="sr-only">info</span>
                <div>
                  <span class="font-medium">{flash.success}</span> 
                </div>
              </div>
            ):(
                <>
                </>
            )}
            {flash.error ? (
                <div class=" flex text-center justify-center items-center p-4 mb-4 text-sm text-red-800 bg-red-200 dark:bg-gray-800 dark:text-red-400" role="alert">
                <svg class="flex-shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
                </svg>
                <span class="sr-only">info</span>
                <div>
                  <span class="font-medium">{flash.error}</span> 
                </div>
              </div>
            ):(
                <>
                </>
            )}
            <link
                rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
            />
            <div class="bg-gray-100 px-4  ">
                <div class="container mx-auto  flex flex-col items-center py-12 sm:py-24">
                    <div class="w-11/12 sm:w-2/3 lg:flex justify-center items-center flex-col  mb-5 sm:mb-10">
                        <h1 class="text-2xl sm:text-3xl md:text-4xl  lg:text-5xl xl:text-6xl text-center text-gray-800 font-black leading-7 md:leading-10">
                        Welcome to Media 
                            <span class="text-indigo-700"> {media} </span>
                             please select the news category you want
                        </h1>
                        <p class="mt-5 sm:mt-10 lg:w-10/12 text-gray-400 font-normal text-center text-sm sm:text-lg">
                        "Temukan Berita Terbaru dari Berbagai Media dengan Mudah dan Cepat!" Kami menyederhanakan cara Anda mengakses berita dari berbagai sumber sebagai 
                        <span class="text-indigo-700 "> agregator </span> berita terpercaya. Baca berita terkini tanpa ribet di satu platform kami.
                        </p>
                    </div>
                    <div class="flex justify-center items-center">
                        <a class=" animated-arrow  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 lg:text-xl lg:font-bold   text-white px-4 sm:px-10 border border-indigo-700 py-2 sm:py-4 text-sm">
                            <i
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                class="animated-arrow fas fa-arrow-left mr-2"
                            ></i>
                            Pilih Category Di samping Kiri
                        </a>
                        
                    </div>
                </div>
            </div>
        </div>
    );
}
Category.layout = (page) => <Layout main={page} title="Welcome" />;

export default Category;
