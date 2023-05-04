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
        date={"April 20, 10:45 am-1:00 pm EDT"}
        description={`Join us on May 11 for this exclusive opportunity to hear directly from Microsoft on their Teams Rooms strategy and latest updates, and learn about best practices from AVI-SPL, 
        a Microsoft Managed Partner. We will discuss: The latest in Microsoft Teams Rooms technology
        New innovations with VR designs to support your Microsoft Teams Rooms deployments
        How to ensure inclusive collaboration today and tomorrow`} /> 
 <MeetupCard name="VIBE: Tech Meet-Up with Microsoft in New York" 
        location ={"Microsoft Technology Center Times Square 11 Times Square, Central Park East, 6th Floor, New York, NY"}
        date={"April 20, 10:45 am-1:00 pm EDT"}
        description={`Join us on May 11 for this exclusive opportunity to hear directly from Microsoft on their Teams Rooms strategy and latest updates, and learn about best practices from AVI-SPL, 
        a Microsoft Managed Partner. We will discuss: The latest in Microsoft Teams Rooms technology
        New innovations with VR designs to support your Microsoft Teams Rooms deployments
        How to ensure inclusive collaboration today and tomorrow`} /> 
 <MeetupCard name="VIBE: Tech Meet-Up with Microsoft in New York" 
        location ={"Microsoft Technology Center Times Square 11 Times Square, Central Park East, 6th Floor, New York, NY"}
        date={"April 20, 10:45 am-1:00 pm EDT"}
        description={`Join us on May 11 for this exclusive opportunity to hear directly from Microsoft on their Teams Rooms strategy and latest updates, and learn about best practices from AVI-SPL, 
        a Microsoft Managed Partner. We will discuss: The latest in Microsoft Teams Rooms technology
        New innovations with VR designs to support your Microsoft Teams Rooms deployments
        How to ensure inclusive collaboration today and tomorrow`} /> 
    </div>
    
</div>

<div class="flex flex-col justify-center  mt-14 border border-black w-[30em] h-auto"> 
    <h1 class="pt-5 pl-10 text-4xl font-bold">Social Events</h1>
    <div  class="m-3 p-12 flex flex-row justify-start space-x-12  overflow-auto overflow-y-auto scroll-smooth">
        <MeetupCard name="Janeane Garofalo, Prime-Time Comedy, featuring Nyc's Best Comedians!" 
        location ={"Microsoft Technology Center Times Square 11 Times Square, Central Park East, 6th Floor, New York, NY"}
        date={"April 20, 10:45 am-1:00 pm EDT"}
        description={`Janeane has had many memorable and critically acclaimed roles in film and television since bursting on the scene in 1992. She's appeared in films such as "The Truth About Cats and Dogs," "Wet Hot American Summer," "Ratatouille" and "Reality Bites." She was a cast member of the Emmy award winning "Ben Stiller Show," as well as the comedy classic "The Larry Sanders Show," and had recurring roles on "24"`} /> 

<MeetupCard name="Earth Day Hike + Trail Clean Up" 
        location ={"Worthwild 156 9th Ave, New York, NY"}
        date={"April 20, 10:45 am-1:00 pm EDT"}
        description={`Join us on Earth Day Saturday, April 22 for a special Earth Day hike and trail clean up. Let's show our gratitude to outdoors and clean up the trail while enjoying our natural surroundings!   Bring your hiking shoes or sturdy sneakers (you’ll need them), dress warm, pack water and a sandwich, invite some friends and get ready to enjoy the outdoors. We’ll start the day at Worthwild in Chelsea. After the hike we'll make a stop at a local eatery for food and drinks before heading back home.`} /> 

<MeetupCard name="VIBE: Brunch at Park" 
        location ={"Central Park"}
        date={"April 20, 10:45 am-1:00 pm EDT"}
        description={`The Park stands out from the rest. This hip spot in the heart of the Meatpacking District is bound to impress even the most jaded of the New York elite. Each room evokes a different theme--from the rainforest-style dining room to the Red Room infused with Asian aesthetic.`}
        /> 
    </div>
    
</div>


       
        
    </div>
  );
};

export default Meetup;
