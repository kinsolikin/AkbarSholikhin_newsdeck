
import React from "react";
import Nav from "../Components/Nav";
import Sidebar from "../Components/Sidebar";
import { usePage } from "@inertiajs/react";
import { data } from "autoprefixer";

function Layout({main,content }) {

  const {category} = usePage().props


    return (
        <div>
          <div className="fixed top-0 w-full  z-50 mb-10">
          <Nav/>
          </div>
          <div className="flex min-h-screen mt-10 pt-10">
      {/* Sidebar */}

      
      
      {category ?(

        <div className="flex-none w-48  bg-gray-800   p-4 ml-10">
      <Sidebar category={category}/>
      </div>
      ):(<></>)}
     

      {/* Content Area 1 */}
      <div className="flex-1 w-64 colormain p-4  flex-col mt-5">
       {main}
      </div>
     

    </div>
        </div>
    );
}

export default Layout;
