import { React } from "react";

const MeetupCard = (props) => {
   
   

    return(
    <div class="p-12 bg-yellow-200 flex flex-col items-center border border-black h-auto w-96 rounded-2xl">

        <div>
            <h1 class="text-2xl font-bold text-center"> {props.name} </h1>

            <div class="bg-yellow-50 flex items-center justify-center p-3 mt-5 border border-black h-36 w-72">
          <p>{props.location} </p>
            </div>

            <div class="bg-yellow-50 flex items-center justify-center rounded-lg p-5 mt-5 border border-black h-12 w-72">
          <p>{props.date} </p>
            </div>

         </div>

         <div class="p-5 mt-3 flex flex-row gap-4 space-x-16">  
    <button class="bg-orange-700 hover:bg-orange-300 text-white hover:text-black font-bold py-2 px-4 rounded-full">
    Learn
    </button>
    <button class="bg-orange-700 hover:bg-orange-300 text-white hover:text-black font-bold py-2 px-4 rounded-full">
    RSVP
    </button>
</div>
        
  
        
      
   

  

 
    

    </div>)


}
export default MeetupCard;