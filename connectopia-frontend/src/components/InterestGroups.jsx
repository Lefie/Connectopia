import { React } from "react";

const InterestGroups = (props) => {
    return(<div class="bg-rose-50 flex flex-col items-center border border-black h-96 w-96 p-5 rounded-2xl">
    <div class="flex flex-col gap-8 items-center"> 
        <img
      className="avatar"
      src={props.src}
      alt="Person"
      class="md relative h-24 w-24 "
    />
  
        <h1 class="text-xl font-bold"> {props.groupTitle} </h1>
        <p class="text-lg font-semibold">{props.groupDescription}</p>
       
   
    </div>

   

    <div class="p-5 mt-9 flex flex-row gap-4 space-x-16">  
    <p class="text-sm">{props.num}+ in chat</p>
    <button class="bg-rose-700 hover:bg-orange-300 text-white hover:text-black font-bold py-2 px-4 w-24 rounded-full">
    Join
    </button>

    </div>

    </div>)
};

export default InterestGroups;
