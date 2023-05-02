import { React } from "react";
import { Link } from 'react-router-dom';

const Signup = () => {

    return (
      
    <form className="relative w-full max-w-sm top-[8em] left-[28em] pb-[4em] border border-black shadow-2xl">

<div className="flex flex-row m-3 pl-14">
  <label className="block text-gray-700 text-sm font-bold p-3 mb-3" for="email"> phone </label>
  <input className="shadow appearance-none border rounded-md border-gray-600 m-3 w-40 text-sm" id="phone" type="numbwe" /> 
  
  </div>

  <div className="flex flex-row m-3 pl-14">
  <label className="block text-gray-700 text-sm font-bold p-3 mb-3" for="email"> email </label>
  <input className="shadow appearance-none border rounded-md border-gray-600 m-3 w-40 text-sm" id="email" type="email" /> 
  </div>




  <div className="flex flex-row m-3">
  <label className="block text-gray-700 text-sm font-bold p-3 mb-3 pl-[3em]" for="password"> password </label>
  <input className="shadow appearance-none border rounded-md border-gray-600 m-3 w-40" id="password" type="password" /> 
  
  </div>

  <div className="flex flex-col items-center pr-4 mt-5">
  <Link to="/profile">
  <button className="bg-black hover:bg-gray-700 w-[12em] text-white font-bold py-2 px-4 rounded" type="button">
        Sign up
    </button>
    </Link>

    <div className="mt-[1em]" > Welcome! </div>

  </div>

      </form>
  

    )

}

export default Signup;