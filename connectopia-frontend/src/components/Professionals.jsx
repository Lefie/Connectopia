import { React } from "react";
import { Link } from "react-router-dom";

const Professionals = (props) => {
    return(<div class="bg-pink-50 flex flex-col items-center border border-black h-96 w-96 p-5 rounded-2xl">
    <div class="flex flex-row gap-4 justify-around"> 
        <img
      className="avatar"
      src={props.src}
      alt="Person"
      class="md relative h-24 w-24 rounded-full"
    />
    <div class="flex flex-col items-center">
        <h1 class="text-xl font-bold"> {props.name} </h1>
        <p> {props.jobTitle}</p>
       
    </div>
    
    </div>

    <div class="p-3 mt-5 border border-black h-72 w-72 bg-white">
          <p>{props.msg} </p>
    </div>

    <div class="p-5 mt-3 flex flex-row gap-4 space-x-16">  
    <button class="bg-purple-700 hover:bg-orange-300 text-white hover:text-black font-bold py-2 px-4 rounded-full">
    Profile
    </button>
   <Link to="/chat">
   <button class="bg-purple-700 hover:bg-orange-300 text-white hover:text-black font-bold py-2 px-4 rounded-full">
    Message
    </button>
   </Link> 

        </div>


        

    </div>)
    
};

export default Professionals;
