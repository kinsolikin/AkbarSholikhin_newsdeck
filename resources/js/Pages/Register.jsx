import React, { useState } from "react";
import { Link, useForm } from "@inertiajs/react";


function Regist({ verify }) {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmationPassword, setShowConfirmationPassword] =
        useState(false);

    const [loading, setLoading] = useState(false);
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
        password_confirmation: "",
    });

    function submit(e) {
        e.preventDefault();
        post("/register", {
            onError: () => {
                reset("password", "password_confirmation");
            },
            onFinish:() =>{
                setLoading(false);
            }
        });
    }

    const handlesubmit = async () => {
        if(data.email&&data.password&&data.password_confirmation){

            setLoading(true);

            await new Promise((resolve) => setTimeout(resolve, 9000));
    
        }else{
            setLoading(false);

        }

    };

    return (
        <div>
            {verify ? (
                <div
                    id="toast-warning"
                    class="flex items-center w-full max-w-xs p-4 text-gray-500 bg-white  shadow dark:text-gray-400 dark:bg-gray-800"
                    role="alert"
                >
                    <div class="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-orange-500 bg-orange-100  dark:bg-orange-700 dark:text-orange-200">
                        <svg
                            class="w-5 h-5"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                        >
                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM10 15a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm1-4a1 1 0 0 1-2 0V6a1 1 0 0 1 2 0v5Z" />
                        </svg>
                        <span class="sr-only">Warning icon</span>
                    </div>
                    <div class="ms-3 text-sm font-normal">{verify}.</div>
                    <button
                        type="button"
                        class="ms-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900  focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
                        data-dismiss-target="#toast-warning"
                        aria-label="Close"
                    >
                        <span class="sr-only">Close</span>
                        <svg
                            class="w-3 h-3"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 14 14"
                        >
                            <path
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                            />
                        </svg>
                    </button>
                </div>
            ) : (
                <></>
            )}

            <section class="">
                <div class="flex flex-col items-center justify-center  mx-auto md:h-screen lg:py-0">
                  <div class = 'mt-14'>

                    <a
                        href="#"
                        class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
                        >
                        Register
                    </a>
                        </div>
                    <div class="w-96 bg-white  shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-500 md:text-2xl dark:text-white">
                                Create an account
                            </h1>

                            <a
                                    href="/auth/redirect"
                                    class="
    
     py-2 border flex items-center justify-center gap-2 border-slate-200 dark:border-slate-700  text-slate-700 dark:text-slate-200 hover:border-slate-400 dark:hover:border-slate-500 hover:text-slate-900 dark:hover:text-slate-300 hover:shadow transition duration-150"
                                >
                                    <img
                                        class="w-6 h-6 "
                                        src="https://www.svgrepo.com/show/475656/google-color.svg"
                                        loading="lazy"
                                        alt="google logo"
                                    />
                                    <span>Login with Google</span>
                                </a>
                            <div class="flex items-center space-x-2">
                                    <hr class="w-full border-slate-300 dark:border-slate-700" />
                                    <span class="text-sm text-slate-500 dark:text-slate-400">
                                        or
                                    </span>
                                    <hr class="w-full border-slate-300 dark:border-slate-700" />
                                </div>
                            <form
                                class="space-y-4 md:space-y-6"
                                onSubmit={submit}
                            >
                                <div>
                                    <label
                                        for="email"
                                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                        Your email
                                    </label>
                                    <div class="relative">
                                        
                                        <input
                                            type="email"
                                            name="email"
                                            id="email"
                                            class={`pl-10 bg-gray-50 border text-gray-900 text-sm  focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 
                        ${
                            errors.email
                                ? "border-red-500 dark:border-red-500"
                                : "border-gray-300 dark:border-gray-600"
                        }
                        `}
                                            placeholder="name@company.com
                      
                      "
                                            required
                                            value={data.email}
                                            onChange={(e) =>
                                                setData("email", e.target.value)
                                            }
                                        />
                                        {errors.email && (
                                            <p className="text-red-500 text-xs mt-1">
                                                {" "}
                                                {errors.email}
                                            </p>
                                        )}
                                        <div></div>
                                    </div>

                                    <label
                                        for="password"
                                        class="block mb-2 mt-3 text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                        Password
                                    </label>

                                    <div class="relative">
                                        <div class="absolute mr-5 inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none"></div>

                                        <input
                                            type={
                                                showPassword
                                                    ? "text"
                                                    : "password"
                                            }
                                            name="password"
                                            id="password"
                                            placeholder="••••••••"
                                            class={` pl-0 bg-gray-50 border text-gray-900 text-sm  focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 
                                                ${
                                                    errors.password
                                                        ? "pl-10 border-red-500 dark:border-red-500"
                                                        : "border-gray-300 dark:border-gray-600"
                                                }
                                                dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
                                                                    required
                                            value={data.password}
                                            onChange={(e) =>
                                                setData(
                                                    "password",
                                                    e.target.value
                                                )
                                            }
                                        />
                                           <button
                                            type="button"
                                            onClick={() =>
                                                setShowPassword(!showPassword)
                                            }
                                            className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"
                                        >
                                            {showPassword ? (
                                                <svg
                                                    class="w-6 h-6 text-gray-500 dark:text-white"
                                                    aria-hidden="true"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="24"
                                                    height="24"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path
                                                        stroke="currentColor"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        stroke-width="2"
                                                        d="M3.933 13.909A4.357 4.357 0 0 1 3 12c0-1 4-6 9-6m7.6 3.8A5.068 5.068 0 0 1 21 12c0 1-3 6-9 6-.314 0-.62-.014-.918-.04M5 19 19 5m-4 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                                                    />
                                                </svg>
                                            ) : (
                                                <svg
                                                    class="w-6 h-6 text-gray-500 dark:text-white"
                                                    aria-hidden="true"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="24"
                                                    height="24"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path
                                                        stroke="currentColor"
                                                        stroke-width="2"
                                                        d="M21 12c0 1.2-4.03 6-9 6s-9-4.8-9-6c0-1.2 4.03-6 9-6s9 4.8 9 6Z"
                                                    />
                                                    <path
                                                        stroke="currentColor"
                                                        stroke-width="2"
                                                        d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                                                    />
                                                </svg>
                                            )}
                                        </button>
                                    </div>

                                    {errors.password && (
                                        <p className="text-red-500 text-xs mt-1">
                                            {" "}
                                            {errors.password}
                                        </p>
                                    )}
                                </div>

                                <div>
                                    <label
                                        for="confirm-password"
                                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                        Confirm password
                                    </label>

                                    <div class="relative">
                                        <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none"></div>
                                        <input
                                            required
                                            type={
                                                showConfirmationPassword
                                                    ? "text"
                                                    : "password"
                                            }
                                            name="confirm-password"
                                            id="confirm-password"
                                            placeholder="••••••••"
                                            class={`bg-gray-50 border text-gray-900 text-sm  focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 
                                        ${
                                            errors.password
                                                ? "border-red-500 dark:border-red-500"
                                                : "border-gray-300 dark:border-gray-600"
                                        }
                                        dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
                                            value={data.password_confirmation}
                                            onChange={(e) =>
                                                setData(
                                                    "password_confirmation",
                                                    e.target.value
                                                )
                                            }
                                        />

                                        <button
                                            type="button"
                                            onClick={() =>
                                                setShowConfirmationPassword(
                                                    !showConfirmationPassword
                                                )
                                            }
                                            className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"
                                        >
                                            {showConfirmationPassword ? (
                                                <svg
                                                    class="w-6 h-6 text-gray-500 dark:text-white"
                                                    aria-hidden="true"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="24"
                                                    height="24"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path
                                                        stroke="currentColor"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        stroke-width="2"
                                                        d="M3.933 13.909A4.357 4.357 0 0 1 3 12c0-1 4-6 9-6m7.6 3.8A5.068 5.068 0 0 1 21 12c0 1-3 6-9 6-.314 0-.62-.014-.918-.04M5 19 19 5m-4 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                                                    />
                                                </svg>
                                            ) : (
                                                <svg
                                                    class="w-6 h-6 text-gray-500 dark:text-white"
                                                    aria-hidden="true"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="24"
                                                    height="24"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path
                                                        stroke="currentColor"
                                                        stroke-width="2"
                                                        d="M21 12c0 1.2-4.03 6-9 6s-9-4.8-9-6c0-1.2 4.03-6 9-6s9 4.8 9 6Z"
                                                    />
                                                    <path
                                                        stroke="currentColor"
                                                        stroke-width="2"
                                                        d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                                                    />
                                                </svg>
                                            )}
                                        </button>
                                    </div>

                                    {errors.password_confirmation && (
                                        <p className="text-red-500 text-xs mt-1">
                                            {" "}
                                            {errors.password_confirmation}
                                        </p>
                                    )}
                                </div>
                                <div class="flex items-start">
                                    <div class="flex items-center h-5">
                                        <input
                                            id="terms"
                                            aria-describedby="terms"
                                            type="checkbox"
                                            class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                                            required=""
                                        />
                                    </div>
                                    <div class="ml-3 text-sm">
                                        <label
                                            for="terms"
                                            class="font-light text-gray-500 dark:text-gray-300"
                                        >
                                            I accept the{" "}
                                            <a
                                                class="font-medium text-primary-600 hover:underline dark:text-primary-500"
                                                href="#"
                                            >
                                                Terms and Conditions
                                            </a>
                                        </label>
                                    </div>
                                </div>
                                <button
                                    type="submit"
                                    onClick={handlesubmit}
                                    disabled={processing}
                                    class="w-full text-black bg-yellow-400  font-medium  text-sm px-5 py-2.5 me-2 mb-2  "
                                >
                                    {loading ? (
                                        <>
                                            <div className="spinner" />
                                        </>
                                    ) : (
                                        "Create Acount"
                                    )}
                                </button>
                                <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                                    Already have an account?{" "}
                                    <Link
                                        href="/login"
                                        class="font-medium text-primary-600 hover:underline dark:text-primary-500"
                                    >
                                        Login here
                                    </Link>
                                </p>
                                


                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
// Regist.layout = (page) => <Layout guest={page} title="Welcome" />;

export default Regist;
