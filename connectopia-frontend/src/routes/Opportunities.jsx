import React, { Component } from "react";
import ProfileNav from "../components/ProfileNav";
import JobListingCard from "../components/JobListingCard"
import VolListingCard from "../components/VolunteerListingCard"



const Opportunities = () => {
    return(<div className="flex flex-col items-center">
        <ProfileNav />

        <div class="flex flex-col justify-center  mt-14 border border-black w-[30em] h-auto">
        <h1 class="pt-5 pl-10 text-4xl font-bold">Job Listings</h1> 
        <div  class="m-3 p-12 flex flex-row space-x-12  overflow-auto">

            {/* card */}
            <JobListingCard title={"Talent Assistant"} 
            location={"Remote"}
            label={{label1:"Full Time",label2:"50,000 a year"}}
            description={"Talent assistants write brief job descriptions explaining the role and required skills, prepare adverts and post them on the company and other recruitment websites. "}
            />

        <JobListingCard title={"Film Director"} 
            location={"TBA"}
            label={{label1:"Full Time",label2:"50,000 a year"}}
            description={"Film directors make creative decisions to determine the look of a movie, including those that impact the special effects, filming locations, shot angles, and actors' performances. "}
            />


        </div>


        </div>

        <div class="flex flex-col justify-center  mt-14 border border-black w-[30em] h-auto">
        <h1 class="pt-5 pl-10 text-4xl font-bold">Volunteer Listings</h1> 
        <div  class="m-3 p-12 flex flex-row space-x-12  overflow-auto">

            {/* card */}
            <VolListingCard projTitle={"Horror Movie Casting"} 
            projDescription={"We are casting one female lead for a student horror/psychological film"}
            req={{req1:"must be 18 years old and female",req2:"must have been cast in shows before"}}
            description={`Title: The Forgotten Doll

            Synopsis:
            
            When a young girl named Lily moves into a new house with her family, she discovers an old doll hidden away in the attic. Drawn to its eerie presence, Lily begins playing with the doll, not realizing that it holds a dark secret.
            
            As strange things start happening around the house, Lily's parents begin to worry about their daughter's safety. But it's too late - the doll has already taken control of Lily's mind and body.`}
            />

<VolListingCard projTitle={"K Drama Casting"} 
            projDescription={"We are casting one female supporting actor for a K drama"}
            req={{req1:"must be 18 years old and female",req2:"must have been cast in shows before"}}
            description={`Title: The Last Song of Love

            Synopsis:
            
            "The Last Song of Love" follows the story of Yoo-jin, a talented singer-songwriter who dreams of making it big in the music industry. But when her boyfriend, a famous producer, betrays her and steals her music, she is left heartbroken and struggling to make ends meet.
            
            Desperate for a new start, Yoo-jin moves to Seoul, where she meets Ji-won, a handsome and mysterious musician who becomes her mentor and friend. With his help, Yoo-jin begins to rebuild her career and finds a new sense of purpose in life.`}
            />


        </div>


        </div>

    </div>);


};

export default Opportunities;