import React, { useState, useEffect } from "react";
import Layout from "../Layouts/Layout";
import { usePage, useForm } from "@inertiajs/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";

function Bookmark() {

    const { auth, medias,posts } = usePage().props;
 console.log(posts);

    const [categories, setCategories] = useState(null);
    const [selected , setSelected] = useState(true);
    

    const {
        get,
        data,
        setData,
        delete: destroy,
    } = useForm({
        posts_id: "",
        media: "",
        category: "",

    });


    const handlemediachange = (media) => {
       setData('media',media.id)
      
        setCategories(media.category);

    }

    const handlecategorychange = (category) =>{
     
        setData('category',category)
    }

    
    useEffect(()=>{
        console.log(data)
            },[handlemediachange,handlecategorychange])

    const searchbookmark = (e)=> {
        e.preventDefault()
        get('/searchbookmark')

    }
    
  


    const handleClick = (postId) => {
        setData("posts_id", postId);
    };

    const deletebookmark = (e) => {
        e.preventDefault();
        destroy("/bookmark/destroy", {
            preserveScroll: true,
        });
    };

    return (
        <div class="md:pl-5">
            {posts.length > 0 ? (
                <div class="text-center my-6 pt-6 ">
                    <h2 class="text-3xl font-bold tracking-tight colortexpost dark:text-white">
                        Berita Tersimpan
                    </h2>
                    <p class="text-lg font-normal colortexpost dark:text-gray-400">
                        Dapatkan berita terkini yang tepercaya dan terverifikasi
                        langsung dari sumber media.
                    </p>
                </div>
            ) : (
                <div class="text-center my-6 pt-6">
                    <h2 class="text-3xl font-bold tracking-tight colortexpost dark:text-white">
                        Tidak Ada Berita Tersimpan
                    </h2>
                </div>
            )}

            <form class="max-w-lg  mx-auto" onSubmit={searchbookmark}>
                <div class="flex mb-4">
                    <div class=" flex-1 w-full ...">
                        <div>
                            <label
                                media
                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                Select an Media
                            </label>
                            <select
                                id="media"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                
                                onChange={(e) =>
                                    handlemediachange(
                                        medias.find(
                                            (media) =>
                                                media.id == e.target.value
                                        )
                                    )
                                }
                            >
                               


                             
                                {medias.map((media) => (
                                    <>
                                    <option
                                        key={media.id}
                                        value={media.id}
                                        selected
                                        >
                                        {media.media}
                                    </option>
                                </>
                                ))}
                                   <option selected value="">Choose a media</option>

                            </select>
                        </div>
                    </div>

                    <div class="flex-1 pl-5 w-full ...">
                        <label
                            for="categories"
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                            Select an categories
                        </label>

                        {categories ? (
                            <select
                                id="countries"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            
                                onChange={(e) =>
                                    handlecategorychange(e.target.value)
                                }
                            >
                                <option selected value="" >Choose a category</option>
                                {categories.map((category) => (
                                    <>
                                    <option
                                        key={category.id}
                                        value={category.id}
                                        selected
                                        >
                                        {category.name}
                                    </option>
                                        </>
                                ))}
                            </select>
                        ) : (
                            <select
                                
                                id="countries"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            >
                                <option selected>Choose a categories</option>
                            </select>
                        )}
                    </div>
                </div>

                <button

                    type="submit"
                    class="
                    text-white bg-yellow-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium  text-sm w-full  sm:w-auto px-8 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mb-4 "
                >
                    Search
                </button>
              

            </form>
            <ul>
                <div class="grid grid-cols-1    md:grid-cols-2 gap-4">
                    {posts.map((postItem, index) => (
                        <div key={index}>
                            {postItem.post ? (

                            <div class="flex ">
                                <div class="flex-1 w-14 ...">
                                    <a
                                        target="blank"
                                        href={postItem.post.link}
                                        class="flex flex-col items-center bg-white border border-gray-200  shadow md:flex-row md:max-w-lg hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 mb-4"
                                    >
                                        <img
                                            class="object-cover w-full ml-3  h-full md:h-auto md:w-48 "
                                            src={postItem.post.thumbnail}
                                            alt=""
                                        />
                                        <div class="flex flex-col justify-between p-4 leading-normal">
                                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                                {postItem.post.title}
                                            </h5>
                                            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                                {postItem.post.description}
                                            </p>
                                            <div class=" bottom-2 right-2 text-xs text-gray-500 dark:text-gray-400">
                                                pubDate :{" "}
                                                {postItem.post.pubDate}
                                            </div>
                                            {auth.user && (
                                                <div class="pt-2 ">
                                                    <form
                                                        onSubmit={
                                                            deletebookmark
                                                        }
                                                    >
                                                        <button
                                                            type="submit"
                                                            onClick={() =>
                                                                handleClick(
                                                                    postItem
                                                                        .post.id
                                                                )
                                                            }
                                                        >
                                                            <p>
                                                                <FontAwesomeIcon
                                                                    icon={
                                                                        faBookmark
                                                                    }
                                                                    style={{
                                                                        color: "blue",
                                                                    }}
                                                                />{" "}
                                                                Delete Bookmark
                                                            </p>
                                                        </button>
                                                    </form>
                                                </div>
                                            )}
                                        </div>
                                    </a>
                                </div>
                            </div>
                            ):(
                                <div class="flex ">
                                <div class="flex-1 w-14 ...">
                                    <a
                                        target="blank"
                                        href={postItem.link}
                                        class="flex flex-col items-center bg-white border border-gray-200  shadow md:flex-row md:max-w-lg hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 mb-4"
                                    >
                                        <img
                                            class="object-cover w-full ml-3  h-full md:h-auto md:w-48 "
                                            src={postItem.thumbnail}
                                            alt=""
                                        />
                                        <div class="flex flex-col justify-between p-4 leading-normal">
                                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                                {postItem.title}
                                            </h5>
                                            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                                {postItem.description}
                                            </p>
                                            <div class=" bottom-2 right-2 text-xs text-gray-500 dark:text-gray-400">
                                                pubDate :{" "}
                                                {postItem.pubDate}
                                            </div>
                                            {auth.user && (
                                                <div class="pt-2 ">
                                                    <form
                                                        onSubmit={
                                                            deletebookmark
                                                        }
                                                    >
                                                        <button
                                                            type="submit"
                                                            onClick={() =>
                                                                handleClick(
                                                                    postItem
                                                                        .id
                                                                )
                                                            }
                                                        >
                                                            <p>
                                                                <FontAwesomeIcon
                                                                    icon={
                                                                        faBookmark
                                                                    }
                                                                    style={{
                                                                        color: "blue",
                                                                    }}
                                                                />{" "}
                                                                Delete Bookmark
                                                            </p>
                                                        </button>
                                                    </form>
                                                </div>
                                            )}
                                        </div>
                                    </a>
                                </div>
                            </div>
                            )}
                        </div>
                    ))}
                </div>
            </ul>
        </div>
    );
}
Bookmark.layout = (page) => <Layout main={page} title="Welcome" />;

export default Bookmark;
