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
        <Link to="/main"> <div className="hover:text-gray-700 active:text-blue-700 hover:cursor-pointer">Home</div></Link>
        <Link to="/meetup"> <div className="hover:text-gray-700 active:text-blue-700 hover:cursor-pointer">Meetups</div></Link>
        <Link to="/opportunities"><div className="hover:text-gray-700 active:text-blue-700 hover:cursor-pointer">Opportunities</div></Link>
        <Link to="/network"><div className="hover:text-gray-700 active:text-blue-700 hover:cursor-pointer">Connect</div></Link>
        <Link to="/profile"><img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" class="h-12 w-12 mr-3 rounded-full" alt="Profile Logo" /></Link>

        </div>

       
      </div>
    </nav>
  );
};

export default Navbar;
