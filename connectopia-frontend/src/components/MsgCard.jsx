import { React } from "react";

const MsgCard = (props) => {
    const src1 = ""

    return(
    <div class="flex flex-col items-center border border-black h-96 w-96 p-5 rounded-2xl">
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
        <p class="text-sm text-gray-700">{props.time}</p>
    </div>
    
    </div>

    <div class="p-3 mt-5 border border-black h-72 w-72 bg-white">
          <p>{props.msg} </p>
          </div>


        

    </div>)


}
export default MsgCard;