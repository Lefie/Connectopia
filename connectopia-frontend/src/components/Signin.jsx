import { React } from "react";
import { Link } from "react-router-dom";

const Signin = () => {
  return (
    <form className="relative w-full max-w-sm top-[8em] left-[28em] pb-[4em] border border-black shadow-2xl">
      <div className="flex flex-row m-3 ">
        <label
          className="block text-gray-700 text-sm font-bold p-3 mb-3"
          for="email"
        >
        
          phone or email{" "}
        </label>
        <input
          className="shadow appearance-none border rounded-md border-gray-600 m-3 w-40 text-sm"
          id="email"
          type="text"
        />
      </div>

      <div className="flex flex-row m-3">
        <label
          className="block text-gray-700 text-sm font-bold p-3 mb-3 pl-[3em]"
          for="password"
        >
          
          password{" "}
        </label>
        <input
          className="shadow appearance-none border rounded-md border-gray-600 m-3 w-40"
          id="password"
          type="password"
        />
      </div>

     
      <div class="flex flex-col items-center pr-4 mt-5">
      <Link to="/profile">
        <button
          class="bg-black hover:bg-gray-700 w-[12em] text-white font-bold py-2 px-4 rounded"
          type="button"
        >
          Sign In
        </button>
        </Link>

        <Link to="/register">
          <button
            class="mt-5 w-[12em] bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 rounded "
            type="button"
          >
            {" "}
            Join Now!
          </button>
        </Link>
      </div>
    </form>
  );
};

export default Signin;
