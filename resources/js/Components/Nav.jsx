import React, { useEffect, useState } from "react";
import { usePage, useForm, router } from "@inertiajs/react";
import { Link } from "@inertiajs/react";
import { initFlowbite } from "flowbite";
function Nav() {
    const { apiData, auth } = usePage().props;
    const { post } = useForm({});
    const [show , setShow] = useState(true);

    const handleClick = (path) => {
        // Mengubah URL saat ini dengan path baru
        const baseUrl = window.location.origin; // Mendapatkan base URL (misalnya http://127.0.0.1:8000)
        const newUrl = `${baseUrl}${path}`;
        window.history.replaceState(null, "", newUrl); // Menghapus parameter URL dan mengganti URL saat ini
    };

    useEffect(()=>{
        initFlowbite()
    },[auth,show])

    const handlelogout = () => {
        post("/logout");
    };

    const deleteacount = () => {
        router.post("deleteacount");
    };

    const handleClose = () =>{
        setShow(false)
      

       
    }

    
    return (
        <div>
            <nav class="colormain border-gray-200 dark:bg-white">
                <div class="flex flex-wrap justify-between items-center mx-auto  p-4">
                    <a
                        href="https://flowbite.com"
                        class="flex items-center space-x-3 rtl:space-x-reverse"
                    >
                        <img
                            src="http://localhost:8000/logo.png"
                            class="h-8"
                            alt="Flowbite Logo"
                        />
                        <span class="self-center text-2xl font-semibold whitespace-nowrap colortexpost">
                            NewsDeck
                        </span>
                    </a>
                    <div class="flex items-center space-x-6 rtl:space-x-reverse">
                        {auth.user ? (
                            <div class="flex items-center ms-3 bg-transparent">
                                <button
                                    type="button"
                                    id="dropdownButton"
                                    aria-expanded="false"
                                    data-dropdown-toggle="dropdown-user"
                                >
                                    <span class="self-center text-2xl font-semibold whitespace-nowrap colortexpost">
                                        <span class="text-sm">
                                            Welcome,{" "}
                                            <span class="text-lg"></span>
                                        </span>

                                        <span class="text-xl">
                                            {auth.user.name}
                                        </span>
                                    </span>
                                </button>

{show && (

    <div
    class="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600"
    id="dropdown-user"
    >
                                    <div class="px-4 py-3" role="none">
                                        <p
                                            class="text-sm font-medium text-gray-900 truncate dark:text-gray-300"
                                            role="none"
                                            >
                                            {auth.user.email}
                                        </p>
                                    </div>
                                    <ul class="py-1" role="none">
                                        <li>
                                            <Link
                                                href="/mybookmark"
                                                type="button"
                                                class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                                                role="menuitem"
                                                onClick={handleClose}
                                                >
                                                My bookmark
                                            </Link>
                                        </li>
                                        <li>
                                            <button
                                                onClick={handlelogout}
                                                type="button"
                                                class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                                                role="menuitem"
                                            >
                                                Sign out
                                            </button>
                                        </li>
                                        <li>
                                            <button
                                                onClick={deleteacount}
                                                type="button"
                                                class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                                                role="menuitem"
                                            >
                                                Delete Acount
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                                )}
                            </div>
                        ) : (
                            <Link
                            href="/login"
                            class="text-white colornav hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium  text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                            >
                                Login
                            </Link>
                        )}
                    </div>
                </div>
                
            </nav>

            <nav class="colornav  dark:bg-gray-700">
                <div class="max-w-screen-xl px-4 py-3 mx-auto">
                    <div class="flex items-center text-center justify-center">
                        <ul class="flex flex-wrap   font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
                            {apiData.endpoints.map((endpoint) => (
                                <li>
                                    <Link
                                        onClick={() => handleClick(`/`)}
                                        href={`media/${endpoint.name}`}
                                        class="colortextwo dark:text-white hover:underline"
                                        aria-current="page"
                                    >
                                        {endpoint.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Nav;
