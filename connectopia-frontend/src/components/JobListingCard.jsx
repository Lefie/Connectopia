import { React } from "react";

const JobListingCard = (props) => {

    return(<div className="p-12 bg-green-200 flex flex-col items-center border border-black h-auto w-96 rounded-2xl">
        <div>
        <h1 class="text-2xl font-bold text-center"> {props.title} </h1>
        <div class="bg-yellow-50 flex items-center justify-center p-3 mt-5 border border-black h-12 w-72">
          <p>{props.location} </p>
        </div>

        <div class="space-x-3 bg-green-50 flex items-center justify-center rounded-lg p-5 mt-5  h-18 w-72">
        <button class="bg-transparent text-sm text-blue-700 font-semibold py-2 px-4 border border-blue-500 rounded">
  {props.label.label1}
</button>
<button class="bg-transparent text-sm  text-blue-700 font-semibold py-2 px-4 border border-blue-500 rounded">
  {props.label.label2}
</button>
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

export default JobListingCard;

