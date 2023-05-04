import React, { Component } from "react";
import ProfileNav from "../components/ProfileNav";
import InterestGroups from "../components/InterestGroups";
import PplSimilarInterest from "../components/PplSimilarInterest"
import Professionals from "../components/Professionals"


const Connection = () => {

    return(<div className="flex flex-col items-center">
        <ProfileNav />

        <div class="flex flex-col justify-center  mt-14 border border-black w-[30em] h-auto">
        <h1 class="pt-5 pl-10 text-4xl font-bold">Professionals</h1> 
        <div  class="m-3 p-12 flex flex-row space-x-12  overflow-auto">
        <Professionals  name={"Lin May"} 
  src="https://i.imgur.com/1bX5QH6.jpg"
  msg="Hi! I worked on my novel today. I am looking for people who have knowledge of ancient Egypt. HMU!" 
  jobTitle="Creative Writing Professor, USC "
  time="17:26" />

<Professionals  name={"Lin May"} 
  src="https://i.imgur.com/1bX5QH6.jpg"
  msg="Hi! I worked on my novel today. I am looking for people who have knowledge of ancient Egypt. HMU!" 
  jobTitle="Creative Writing Professor, USC "
  time="17:26" />

<Professionals  name={"Lin May"} 
  src="https://i.imgur.com/1bX5QH6.jpg"
  msg="Hi! I am working on a novel . I am looking for people who have knowledge of ancient Egypt. HMU!" 
  jobTitle="Creative Writing Professor, USC " />


        </div>
        </div>

        <div class="flex flex-col justify-center  mt-14 border border-black w-[30em] h-auto">
        <h1 class="pt-5 pl-10 text-4xl font-bold">People with Similar Interestd</h1> 
        <div  class="m-3 p-12 flex flex-row space-x-12  overflow-auto">
            <PplSimilarInterest name={"Lin May"} 
  src="https://i.imgur.com/1bX5QH6.jpg" 
  identity="Cat Person"
  hobby={{h1:"books",h2:"cats",h3:"improv"}}/>

  <PplSimilarInterest name={"Lin May"} 
  src="https://i.imgur.com/1bX5QH6.jpg" 
  identity="Cat Person"
  hobby={{h1:"books",h2:"cats",h3:"improv"}}/>

<PplSimilarInterest name={"Lin May"} 
  src="https://i.imgur.com/1bX5QH6.jpg" 
  identity="Cat Person"
  hobby={{h1:"books",h2:"cats",h3:"improv"}}/>

        </div>
        </div>


        <div class="flex flex-col justify-center  mt-14 border border-black w-[30em] h-auto">
        <h1 class="pt-5 pl-10 text-4xl font-bold">Interest Groups</h1> 
        <div  class="m-3 p-12 flex flex-row space-x-12  overflow-auto">
            <InterestGroups 
            groupTitle="Pets"
            groupDescription="We talk about how 
            to take care of our fur babies"
            src="https://images.dog.ceo/breeds/hound-walker/n02089867_1381.jpg"
            num={"20"}/>

<InterestGroups 
            groupTitle="Pets"
            groupDescription="We talk about how 
            to take care of our fur babies"
            src="https://images.dog.ceo/breeds/hound-walker/n02089867_1381.jpg"
            num={"20"}/>

<InterestGroups 
            groupTitle="Pets"
            groupDescription="We talk about how 
            to take care of our fur babies"
            src="https://images.dog.ceo/breeds/hound-walker/n02089867_1381.jpg"
            num={"20"}/>


        </div>
        </div>

    </div>);

}
export default Connection;