import { React } from "react";
import ProfileNav from "../components/ProfileNav";
import MsgCard from "../components/MsgCard";

const Main = () => {

    return(<div>
         <ProfileNav />
         <div class="flex h-screen w-full flex-row gap-2">
  <div class=" ml-14 mb-5 mt-24 flex h-96 w-3/12 flex-col items-center bg-yellow-100 p-4 border border-black rounded-2xl">
    <h1 class="mb-5 pl-4 text-lg font-bold ">Share Something</h1>

    <form>
      <div class="mb-4 w-[15rem] rounded-lg border border-gray-200 bg-gray-50 dark:border-gray-600 dark:bg-gray-700">
        <div class="flex items-center justify-between border-b px-3 py-2 dark:border-gray-600">
          <div class="flex flex-wrap items-center divide-gray-200 dark:divide-gray-600 sm:divide-x">
            <div class="flex items-center space-x-1 sm:pr-4">
              <button type="button" class="cursor-pointer rounded p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white">
                <svg aria-hidden="true" class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clip-rule="evenodd"></path></svg>
                <span class="sr-only">Upload image</span>
              </button>
              <button type="button" class="cursor-pointer rounded p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white">
                <svg aria-hidden="true" class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                <span class="sr-only">Format code</span>
              </button>
              <button type="button" class="cursor-pointer rounded p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white">
                <svg aria-hidden="true" class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zm-.464 5.535a1 1 0 10-1.415-1.414 3 3 0 01-4.242 0 1 1 0 00-1.415 1.414 5 5 0 007.072 0z" clip-rule="evenodd"></path></svg>
                <span class="sr-only">Add emoji</span>
              </button>
            </div>
          </div>
        </div>
        <div class="rounded-b-lg bg-white px-4 py-2 dark:bg-gray-800">
          <label for="editor" class="sr-only">Publish post</label>
          <textarea id="editor" rows="8" class="block w-full border-0 bg-white px-0 text-sm text-gray-800" placeholder="Write an article..." required></textarea>
        </div>
      </div>
      <button type="submit" class="text-blue focus:ring-white-200 inline-flex items-center rounded-lg border border-gray-500 bg-transparent px-5 py-2.5 text-center text-sm font-medium hover:bg-gray-800 hover:text-white focus:ring-4 dark:focus:ring-blue-900">Publish post</button>
    </form>
  </div>


  <div class="m-5 mb-5 mt-8 flex h-screen w-6/12  flex-col items-center p-4 gap-5 overflow-y-scroll">
  <div class="flex flex-col items-center border border-black h-96 w-96 p-5 rounded-2xl"> 
    <div class="flex flex-row gap-4 justify-around">
       <img
                class="md relative h-24 w-24 rounded-full"
                src="https://avatars3.githubusercontent.com/u/11801238?v=4"
                alt=""
              /> 
          <div class="flex flex-col items-center">
            <h1 class="text-xl font-bold"> Brian Cooper </h1>
            <p> Software Engineer, Google</p>
            <p class="text-sm text-gray-700"> 14:23</p>
            </div>
        </div>

        <div class="p-4 mt-5 border border-black h-72 w-72 bg-white">
          <p>Congratulations to the 2022-23 
#EntrepreneursChallenge Finalists! 🚀 🚀 ! </p>
          </div>
    
  </div>

  <div class="flex flex-col items-center border border-black h-96 w-96 p-5 rounded-2xl"> 
    <div class="flex flex-row gap-4 justify-around">
       <img
                class="md relative h-24 w-24 rounded-full"
                src="https://avatars3.githubusercontent.com/u/11801238?v=4"
                alt=""
              /> 
          <div class="flex flex-col items-center">
            <h1 class="text-xl font-bold"> Liam Cooper </h1>
            <p> Software Engineer, Google</p>
            <p class="text-sm text-gray-700"> 14:23</p>
            </div>
    </div>

        <div class="p-3 mt-5 border border-black h-72 w-72 bg-white">
          <p>Congratulations to the 2022-23 
#EntrepreneursChallenge Finalists! 🚀 🚀 ! </p>
          </div>
    
  </div>

  <MsgCard 
  name={"Lin May"} 
  src="https://i.imgur.com/1bX5QH6.jpg"
  msg="Hi! I am happy to be here" 
  jobTitle="Creative Writing Professor, UCLA "
  time="14:23"/>

  
  
  </div>

  


  <div class="mr-14 mb-5 mt-24 flex h-96 w-3/12 flex-col items-center bg-yellow-100 p-4 border border-black rounded-2xl overflow-auto">
  <h1 class="text-2xl font-bold"> Trending </h1>
  <div class="flex flex-row gap-3 mt-3">
    <button class="bg-transparent hover:bg-gray-500 text-black font-semibold hover:text-white py-2 px-4 border border-black hover:border-transparent rounded">
  Interests
</button> 

<button class=" bg-gray-500 text-white font-semibold py-2 px-4 border border-black hover:border-transparent rounded">
  Industry
</button>

</div>
<div class="mt-5 font-sm p-5"> 
  <li> Reddit to charge AI companies for use of its API</li>
  <li> Meta begins another round of layoffs as Zuckerberg’s ‘year of efficiency’ continues</li>
  <li> Technology helps you keep an eye on the crop
</li>
</div>
  
  </div>
  
</div>

        
        

    </div>);

};

export default Main;