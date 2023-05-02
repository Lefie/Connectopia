import { React } from "react";
import connection from "../assets/connection.svg";
import profilePic from "../assets/profilePic.svg"
import { Link } from "react-router-dom";



const Navbar = () => {
  return (
    <nav className="w-screen bg-white border border-gray-100 dark:bg-gray-900 dark:border-gray-700 ">
      <div className="max-w-screen flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#" className="flex items-center">
          <img src={connection} class="h-8 mr-3" alt="Connectopia Logo" />
          <Link to="/" >
          <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Connectopia
          </span>
          </Link>
         
        </a>

        <div className="flex justify-center gap-9 p-3">
        <div className="hover:text-gray-700 active:text-blue-700 hover:cursor-pointer">Home</div>
            <div className="hover:text-gray-700 active:text-blue-700 hover:cursor-pointer">Meetups</div>
            <div className="hover:text-gray-700 active:text-blue-700 hover:cursor-pointer">Opportunities</div>
            <div className="hover:text-gray-700 active:text-blue-700 hover:cursor-pointer">Network</div>
            <div className="hover:text-gray-700 active:text-blue-700 hover:cursor-pointer">Social</div>
            <img src="https://avatars3.githubusercontent.com/u/11801238?v=4" class="h-12 mr-3 rounded-full" alt="Profile Logo" />



        </div>



        

       
      </div>
    </nav>
  );
};

export default Navbar;
