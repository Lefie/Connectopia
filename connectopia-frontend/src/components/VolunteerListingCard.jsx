import { React } from "react";

const VolListingCard = (props) => {
    return(<div className="p-12 bg-green-200 flex flex-col items-center border border-black h-auto w-96 rounded-2xl">
         <div>
         <h1 class="text-2xl font-bold text-center"> {props.projTitle} </h1>
         <div class="bg-yellow-50 flex items-center justify-center p-3 mt-5 border border-black h-auto w-72">
          <p>{props.projDescription} </p>
        </div>
        <div class="bg-green-50 flex flex-col items-center justify-center p-3 mt-5 border border-black h-auto w-72">
            <li>{props.req.req1}</li>
            <li>{props.req.req2}</li>
        </div>

        <div class="p-5 mt-3 flex flex-row gap-4 space-x-16">  
    <button class="bg-green-700 hover:bg-orange-300 text-white hover:text-black font-bold py-2 px-4 rounded-full">
    Learn
    </button>
    <button class="bg-green-700 hover:bg-orange-300 text-white hover:text-black font-bold py-2 px-4 rounded-full">
    Apply
    </button>

        </div>
         </div>


        
    </div>)
}

export default VolListingCard;

