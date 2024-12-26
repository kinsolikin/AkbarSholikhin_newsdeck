import React from "react";
import Layout from "../Layouts/Layout";
import { Link } from "@inertiajs/react";
import { usePage } from "@inertiajs/react";

function Sidebar() {

    const { category, media,posts,icon } = usePage().props;

    const handleClick = (path) => {
        // Mengubah URL saat ini dengan path baru
        const baseUrl = window.location.origin; // Mendapatkan base URL (misalnya http://127.0.0.1:8000)
        const newUrl = `${baseUrl}${path}`;
        window.history.replaceState(null, "", newUrl); // Menghapus parameter URL dan mengganti URL saat ini
    };



    return (
        <div class="sidebar fixed pt-5">
            <div class="ml-3">
                <div class="pt-10">
                    { icon && icon.data? (

                        <img
                        class=" mt-3  mb-7 flex w-auto h-8 sm:h-9"
                        src={icon.data.image}
                        alt=""
                    />
                ):(<>
                   
                   
                    </>)}
                   
                    </div>
                    
                <div class="pt-3">
                    <p class="text-white ">Our category form Media {media}</p>
                </div>
            </div>

            <div class="flex flex-col justify-between flex-1 mt-1 ml-3">
                <nav>
                    <ul>
                        {category.map((category) => (
                            <Link href={`media/${media}/category/${category}`}>
                                <li
                                    onClick={() => handleClick(``)}
                                    key={category}
                                    class="flex items-center px-4 py-2 mt-3  text-white transition-colors duration-500 transform  dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-900"
                                >
                                    <span class="mx-4 font-medium">
                                        {category}
                                    </span>
                                </li>
                            </Link>
                        ))}

                        <hr class="my-6 border-gray-200 dark:border-gray-600" />
                    </ul>
                </nav>
            </div>
        </div>
    );
}

Sidebar.layout = (page) => <Layout main={page} title="Welcome" />;
export default Sidebar;
