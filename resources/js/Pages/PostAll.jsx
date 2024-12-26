import React, { useEffect, useState } from "react";
import Layout from "../Layouts/Layout";
import { Link, useForm } from "@inertiajs/react";
import { usePage } from "@inertiajs/react";

import "react-toastify/dist/ReactToastify.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";

function PostAll({ posts, category, media, onecategory }) {
    const { flash, auth } = usePage().props;

    
    const {
        data,
        setData,
        post,
        get,
        delete: destroy,
        processing,
        errors,
    } = useForm({
        query: "",
        onemedia: media,
        onecategory: onecategory,
        posts_id: "",
    });

    const notify = (message) => toast(message);

    const [bookmarkedPosts, setBookmarkedPosts] = useState(
        posts.map((post) => ({
            id: post.id,
            isBookmarked: post.is_bookmarked,
        }))
    );

    useEffect(() => {
        if (flash.success) {
            // notify(flash.success);
            console.log(flash.success);
        }
        if (flash.error) {
            notify(flash.error);
        }
    }, [flash]);

    const handleSearch = (e) => {
        e.preventDefault();
        get("/search", {
            preserveScroll: true,
            preserveState: true,
        });
    };

   

    const handleBookmarkToggle = (postId) => {
        setBookmarkedPosts((prevBookmarked) =>
            prevBookmarked.map((post) =>
                post.id === postId
                    ? { ...post, isBookmarked: !post.isBookmarked }
                    : post
            )
        );
        setData("posts_id", postId);
    };
    const addBookmark = (e) => {
        e.preventDefault();
       
        post("/bookmark/store", {
            preserveScroll: true,
        });
    };

    const deleteBookmark = (e) => {
        e.preventDefault();
        destroy("/bookmark/destroy", {
            preserveScroll: true,
        });
    };

    return (
        <div class="pt-2">
            {flash.success && (
                <div
                    class="flex text-center justify-center items-center  p-4 text-sm text-blue-800  bg-blue-200 dark:bg-gray-800 dark:text-blue-400"
                    role="alert"
                >
                    <svg
                        class="flex-shrink-0 inline w-4 h-4 me-3"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                    >
                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                    </svg>
                    <span class="sr-only">info</span>
                    <div>
                        <span class="font-medium">{flash.success}</span>
                    </div>
                </div>
            )}

            {flash.error && (
                <div
                    class="flex text-center justify-center items-center p-4  mt-10  text-sm text-red-800  bg-red-200 dark:bg-gray-800 dark:text-red-400"
                    role="alert"
                >
                    <svg
                        class="flex-shrink-0 inline w-4 h-4 me-3"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                    >
                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                    </svg>
                    <span class="sr-only">info</span>
                    <div>
                        <span class="font-medium">{flash.error}</span>
                    </div>
                </div>
            )}

            <form onSubmit={handleSearch} class="max-w-md mx-auto  pt-8">
                <label
                    for="default-search"
                    class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                >
                    Search
                </label>
                <div class="relative">
                    <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"></div>
                    <input
                        value={data.query}
                        onChange={(e) => setData("query", e.target.value)}
                        type="search"
                        id="default-search"
                        class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 bg-gray-50 focus:ring-blue-500 focus:border-yellow-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-yellow-500 dark:focus:border-yellow-500"
                        placeholder="search for words from categories"
                        required
                    />
                    <button
                        type="submit"
                        class="text-white absolute end-2.5 bottom-2.5 colornav hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium  text-sm px-4 py-2 dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800"
                    >
                        Search
                    </button>
                </div>
            </form>

            {posts && (
                <>
                <div class="text-center my-6 ">
                                <h2 class="text-3xl font-bold tracking-tight colortexpost dark:text-white">
                                    Berita {onecategory} dari Media {media}
                                </h2>
                                <p class="text-lg font-normal colortexpost dark:text-gray-400">
                                    Dapatkan berita terkini yang tepercaya dan
                                    terverifikasi langsung dari sumber media.
                                </p>
                            </div>
                    {posts.length > 0 ? (
                        <div class="grid grid-cols-1  md:grid-cols-2 gap-4">
                            
                            {posts.map((post) => {
                                const isBookmarked = bookmarkedPosts.find(
                                    (p) => p.id === post.id
                                ).isBookmarked;

                                return (
                                    <div class="flex" key={post.id}>
                                        <div class="flex-1 w-14 ...">
                                            <a target="blank"
                                                href={post.link}
                                                class="flex flex-col items-center bg-white border border-gray-200 shadow md:flex-row md:max-w-lg hover:bg-gray-200 dark:border-gray-700 dark:bg-gray-900 dark:hover:bg-gray-700 mb-4"
                                            >
                                                <img
                                                    class="object-cover w-full ml-3 h-full md:h-auto md:w-48"
                                                    src={post.thumbnail}
                                                    alt=""
                                                />
                                                <div class="flex flex-col justify-between p-4 leading-normal">
                                                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                                        {post.title}
                                                    </h5>
                                                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                                        {post.description}
                                                    </p>
                                                    <div class=" bottom-2 right-2 text-xs text-gray-500 dark:text-gray-400">
                                                        pubDate: {post.pubDate}
                                                    </div>
                                                    
                                                <div class="pt-2 ">
                                                    <form
                                                        onSubmit={
                                                            isBookmarked
                                                                ?addBookmark 
                                                                
                                                                :deleteBookmark 
                                                        }
                                                    >
                                                        <button
                                                            type="submit"
                                                            
                                                            onClick={() =>
                                                                handleBookmarkToggle(
                                                                    post.id
                                                                )
                                                            }
                                                        >
                                                            <p>
                                                                <FontAwesomeIcon
                                                                    icon={
                                                                        faBookmark
                                                                    }
                                                                    style={{
                                                                        color: isBookmarked
                                                                            ? "blue"
                                                                            : "gray",
                                                                    }}
                                                                />{" "}
                                                                {isBookmarked
                                                                    ? "Delete Bookmark"
                                                                    : "Add Bookmark"}
                                                            </p>
                                                        </button>
                                                    </form>
                                                </div>
                                            
                                                </div>
                                            </a>

                                            
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    ) : (
                        <div class="text-center my-6">
                            <h2 class="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
                                Maaf pencarian tidak ditemukan
                            </h2>
                            <p class="text-lg font-normal text-gray-700 dark:text-gray-400">
                                Silakan cari dengan kata kunci yang lain
                            </p>
                        </div>
                    )}
                </>
            )}
        </div>
    );
}

PostAll.layout = (page) => <Layout main={page} title="Welcome" />;
export default PostAll;
