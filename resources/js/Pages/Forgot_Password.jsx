import React from "react";
import { useForm } from "@inertiajs/react";

import { useState } from "react";
function Forgot_Password() {
    const [loading, setLoading] = useState(false);

    
    const handlesubmit = async () => {

        if(data.email){

            setLoading(true);
    
            await new Promise((resolve) => setTimeout(resolve, 9000));
        }

        setLoading(false);
    };

    const { data, setData, post, errors } = useForm({
        email: "",
    });

    function submit(e) {
        e.preventDefault();
        post("/forgot-password",{
            onSuccess :()=>{
                setLoading(false)
            },
            onError :()=>{
                setLoading(false)
            }
        });
    }

    return (
        <div>
            <div>
                <div>
                    <div>
                        <section class="pt-20 ">
                            <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                                <a
                                    href="#"
                                    class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
                                >
                                  
                                    Forgot Password
                                </a>
                                <div class="w-96 p-6 bg-white  shadow dark:border md:mt-0 sm:max-w-md dark:bg-gray-800 dark:border-gray-700 sm:p-8">
                                    <h2 class="mb-1 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                        Change Password
                                    </h2>
                                    <form
                                        class="mt-4 space-y-4 lg:mt-5 md:space-y-5"
                                        onSubmit={submit}
                                    >
                                        <form class="max-w-sm mx-auto">
                                            <label
                                                for="email-address-icon"
                                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                            >
                                                Your Email
                                            </label>
                                            
                                     
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
                                  
                                        </form>

                                        <button
                                    onClick={handlesubmit}
                                    type="submit"
                                    class="w-full text-black bg-yellow-400  font-medium  text-sm px-5 py-2.5 me-2 mb-2  "

                                >
                                    {loading ? (
                                        <>
                                            <div className="spinner" />
                                        </>
                                    ) : (
                                        "Reset Password"
                                    )}
                                </button>
                                    </form>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Forgot_Password;
