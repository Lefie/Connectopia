import { React } from "react";
import { useState, useEffect } from "react";

const MeetupCard = (props) => {
  const [show, setShow] = useState(false);
  const [learn, setLearn] = useState(true);

  return (
    <div class="p-12 bg-yellow-200 flex flex-col items-center border border-black h-auto w-96 rounded-2xl">
      {learn && (
        <div>
          <h1 class="text-2xl font-bold text-center"> {props.name} </h1>

          <div class="bg-yellow-50 flex items-center justify-center p-3 mt-5 border border-black h-36 w-72">
            <p>{props.location} </p>
          </div>

          <div class="bg-yellow-50 flex items-center justify-center rounded-lg p-5 mt-5 border border-black h-12 w-72">
            <p>{props.date} </p>
          </div>
        </div>
      )}

      {!learn && (
        <div onClick={() => {
          setLearn(true);
        }}>
          {props.description}
          
        </div>
      )}

      <div class="p-5 mt-3 flex flex-row gap-4 space-x-16">
        <button
          onClick={() => {
            setLearn(false);
          }}
          class="bg-orange-700 hover:bg-orange-300 text-white hover:text-black font-bold py-2 px-4 rounded-full"
        >
          Learn
        </button>
        <button
          onClick={() => {
            setShow(true);
          }}
          class="bg-orange-700 hover:bg-orange-300 text-white hover:text-black font-bold py-2 px-4 rounded-full"
        >
          RSVP
        </button>
      </div>
      {show && (
        <div
          onClick={() => {
            setShow(false);
          }}
          class="p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400"
          role="alert"
        >
          <span class="font-medium">Successfully RSVPed!</span>
        </div>
      )}
    </div>
  );
};
export default MeetupCard;
