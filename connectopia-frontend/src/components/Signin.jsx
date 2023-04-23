import { React } from "react";

const Signin = () => {

    return (
      <div className="relative w-full max-w-sm">
    <form className="relative w-full max-w-sm top-0 left-[30em]">

<div className="flex flex-row  w-full m-3">
  <label className="block text-gray-700 text-sm font-bold p-3 mb-3" for="email"> phone or email </label>
  <input className="shadow appearance-none border rounded-md border-gray-600 m-3 w-40 text-sm" id="email" type="text" /> 
  
  </div>


  <div className="flex flex-row w-full  m-3">
  <label className="block text-gray-700 text-sm font-bold p-3 mb-3" for="password"> password </label>
  <input className="shadow appearance-none border rounded-md border-gray-600 m-3 w-40" id="password" type="password" /> 
  
  </div>

  <div class="flex flex-col ">
  <button class="bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
        Sign In
    </button>

    <button  class="mt-5 bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button"> Join Now!</button>
  


  </div>

  
    
      </form>
      </div>

    )

}

export default Signin;