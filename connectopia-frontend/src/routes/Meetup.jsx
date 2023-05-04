import React, { Component } from "react";
import MeetupCard from "../components/MeetupCard";
import ProfileNav from "../components/ProfileNav";


const Meetup = () => {
  return (
    <div className="flex flex-col items-center">
        <ProfileNav />

        
        <button
  type="button"
  className="block rounded-full border-2 border-neutral-800 
  px-6 p-3 text-md font-bold uppercase w-64">
 	📍 New York City, NY 
</button>


<div class="flex flex-col justify-center  mt-14 border border-black w-[30em] h-auto"> 
    <h1 class="pt-5 pl-10 text-4xl font-bold">Networking Events</h1>
    <div  class="m-3 p-12 flex flex-row space-x-12  overflow-auto">
        <MeetupCard name="VIBE: Tech Meet-Up with Microsoft in New York" 
        location ={"Microsoft Technology Center Times Square 11 Times Square, Central Park East, 6th Floor, New York, NY"}
        date={"April 20, 10:45 am-1:00 pm EDT"} /> 

<MeetupCard name="VIBE: Tech Meet-Up with Microsoft in New York" 
        location ={"Microsoft Technology Center Times Square 11 Times Square, Central Park East, 6th Floor, New York, NY"}
        date={"April 20, 10:45 am-1:00 pm EDT"} /> 

<MeetupCard name="VIBE: Tech Meet-Up with Microsoft in New York" 
        location ={"Microsoft Technology Center Times Square 11 Times Square, Central Park East, 6th Floor, New York, NY"}
        date={"April 20, 10:45 am-1:00 pm EDT"} /> 
    </div>
    
</div>

<div class="flex flex-col justify-center  mt-14 border border-black w-[30em] h-auto"> 
    <h1 class="pt-5 pl-10 text-4xl font-bold">Social Events</h1>
    <div  class="m-3 p-12 flex flex-row justify-start space-x-12  overflow-auto overflow-y-auto scroll-smooth">
        <MeetupCard name="Janeane Garofalo, Prime-Time Comedy, featuring Nyc's Best Comedians!" 
        location ={"Microsoft Technology Center Times Square 11 Times Square, Central Park East, 6th Floor, New York, NY"}
        date={"April 20, 10:45 am-1:00 pm EDT"} /> 

<MeetupCard name="Earth Day Hike + Trail Clean Up" 
        location ={"Worthwild 156 9th Ave, New York, NY"}
        date={"April 20, 10:45 am-1:00 pm EDT"} /> 

<MeetupCard name="VIBE: Brunch at Park" 
        location ={"Central Park"}
        date={"April 20, 10:45 am-1:00 pm EDT"}
        /> 
    </div>
    
</div>


       
        
    </div>
  );
};

export default Meetup;
