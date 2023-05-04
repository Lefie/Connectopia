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
            />

        <JobListingCard title={"Film Director"} 
            location={"TBA"}
            label={{label1:"Full Time",label2:"50,000 a year"}}
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
            />

<VolListingCard projTitle={"K Drama Casting"} 
            projDescription={"We are casting one female supporting actor for a K drama"}
            req={{req1:"must be 18 years old and female",req2:"must have been cast in shows before"}}
            />


        </div>


        </div>

    </div>);


};

export default Opportunities;