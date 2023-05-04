import { React } from "react";
import { Link } from "react-router-dom";

const PplSimilarInterest = (props) => {
    console.log(props.hobby.length);


    return(
        <div class="bg-sky-50 flex flex-col items-center border border-black h-96 w-96 p-5 rounded-2xl">
    <div class="flex flex-row gap-4 justify-around"> 
        <img
      className="avatar"
      src={props.src}
      alt="Person"
      class="md relative h-24 w-24 rounded-full"
    />
    <div class="flex flex-col items-center">
        <h1 class="text-xl font-bold"> {props.name} </h1>
        <p> {props.identity}</p>
        <p class="text-sm text-gray-700">{props.time}</p>
    </div>
    
    </div>

    <div class="p-3 mt-5 border border-black h-72 w-72 bg-white">
    <span class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-orange-600 bg-orange-200 last:mr-0 mr-1">
  {props.hobby.h1}

 
</span>

<span class="text-xs font-semibold inline-block py-1 px-2  rounded-full text-green-600 bg-green-200 uppercase last:mr-0 mr-1">
{props.hobby.h2}
</span>

<span class="text-xs font-semibold inline-block py-1 px-2  rounded-full text-sky-600 bg-sky-200 uppercase last:mr-0 mr-1">
{props.hobby.h3}
</span>
         
    </div>

    <div class="p-5 mt-3 flex flex-row gap-4 space-x-16">  
    <button class="bg-sky-700 hover:bg-orange-300 text-white hover:text-black font-bold py-2 px-4 rounded-full">
    Profile
    </button>
    <Link to = "/chat"><button class="bg-sky-700 hover:bg-orange-300 text-white hover:text-black font-bold py-2 px-4 rounded-full">
    Message
    </button>
    </Link>

        </div>


        

    </div>
    )

};

export default PplSimilarInterest;
