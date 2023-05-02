import { React } from "react";
import connection from "../assets/connection.svg";
import { Link } from "react-router-dom";

const ProfileTop = () => {
  return (
    <div>
      <div class="min-w-full border border-yellow-800">
        <div class="h-32 w-full bg-[url('https://image.freepik.com/free-vector/abstract-binary-code-techno-background_1048-12836.jpg')] bg-cover bg-center"></div>

        <div class="card__media--aside"></div>

        <div class="flex items-center  p-4">
          <div class="relative flex w-full flex-col items-center">
            <div class="md avatar text-purple-650 absolute -top-16 row-start-1 row-end-3 flex h-24 w-24 min-w-max items-end justify-end rounded-full bg-purple-200 text-purple-100 text-purple-600 ring-1 ring-white">
              <img
                class="md relative h-24 w-24 rounded-full"
                src="https://avatars3.githubusercontent.com/u/11801238?v=4"
                alt=""
              />
              <div class="absolute"></div>
            </div>

            <div class="mt-8 flex w-full flex-row justify-around space-y-1">
              <div class="flex flex-col items-center">
                <span class="whitespace-nowrap text-lg font-semibold text-gray-800">
                  John Smith
                </span>
                <span class="text-md text-black-600 whitespace-nowrap">
                  Software Engineer at Spotify
                </span>
                <span class="whitespace-nowrap text-[12px] text-gray-600">
                  New York,New York,United States
                </span>
              </div>

              <div class="flex flex-row flex-wrap ml-16 h-32 w-72 bg-yellow-100 p-4 gap-3">
                Open to:
                <span class="mr-2 rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-300">
                  Cat Lover
                </span>
                <span class="mr-2 rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800 dark:bg-gray-700 dark:text-gray-300">
                  Coder
                </span>
                <span class="mr-2 rounded-full bg-red-100 px-2.5 py-0.5 text-xs font-medium text-red-800 dark:bg-red-900 dark:text-red-300">
                  Gym
                </span>
                <span class="mr-2 rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:bg-green-900 dark:text-green-300">
                  Python
                </span>
                <span class="mr-2 rounded-full bg-purple-100 px-2.5 py-0.5 text-xs font-medium text-purple-800 dark:bg-purple-900 dark:text-purple-300">
                  Hiking
                </span>
                <span class="mr-2 rounded-full bg-pink-100 px-2.5 py-0.5 text-xs font-medium text-pink-800 dark:bg-pink-900 dark:text-pink-300">
                  History Books
                </span>
              </div>
            </div>
          </div>
        </div>

        <div class=" mt-10 flex h-auto flex-col items-center border border-gray-900 m-2">
          <div class="mt-7 flex flex-row justify-center gap-6">
            <button class="rounded border-gray-800 border-transparent bg-yellow-500 px-4 py-2 font-semibold text-white hover:border-transparent hover:bg-yellow-500 hover:text-white">
              Me as a human
            </button>

            <button class="rounded border border-gray-800 bg-transparent px-4 py-2 font-semibold text-gray-700 hover:border-transparent hover:bg-yellow-500 hover:text-white">
              Me as a professional
            </button>
          </div>

          <div class="m-5 flex flex-row justify-around h-auto w-10/12">
            <img
              class=" m-3 md relative h-48 w-48"
              src="https://avatars3.githubusercontent.com/u/11801238?v=4"
              alt="peronal photo"
            />
            <div class="flex flex-col m-5">
              <li>
                {" "}
                I love doing outdoor activities. I am running a hiking meetup
                group{" "}
              </li>
              <li>
                Currently learning how to speak French and take photographs.{" "}
              </li>
              <li> I am looking for a collaborator on my java project</li>
              <div>
                <span class="mr-2 rounded-full bg-red-100 px-2.5 py-0.5 text-xs font-medium text-red-800 dark:bg-red-900 dark:text-red-300">
                  Hiking
                </span>

                <span class="mr-2 rounded-full bg-yellow-100 px-2.5 py-0.5 text-xs font-medium text-red-800 dark:bg-red-900 dark:text-red-300">
                  Coding{" "}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div class=" mt-10 flex h-auto flex-col border border-gray-900 m-2">
          <h1 class="text-black text-2xl font-bold pl-3"> Projects </h1>

          <div class="flex h-auto flex-row justify-start gap-5   m-2">
            <div class="flex flex-col items-center border border-black shadow-xl h-48 w-48 justify-center">
              <h1 class="font-bold text-xl ">Weather App </h1>
              <li class=" p-2 text-sm">
                {" "}
                Used React Framework and developed components following design
                principles.{" "}
              </li>
              <p class="font-semibold">March 2023 </p>
            </div>

            <div class=" flex flex-col items-center border border-black shadow-xl h-48 w-48 justify-center">
              <h1 class="font-bold text-xl ">Online Market Place </h1>
              <li class=" p-2 text-sm">
                {" "}
                Used Java Spring Framework and developed RESTful API for an
                online market place.{" "}
              </li>
              <p class="font-semibold">Aril 2023 </p>
            </div>
          </div>
        </div>

        <div class=" mt-10 flex h-auto flex-col border border-gray-900 m-2">
          <h1 class="text-black text-2xl font-bold pl-3"> Blogs </h1>

          <div class="flex h-auto flex-row justify-start gap-5   m-2">
            <div class="flex flex-col items-center border border-black shadow-xl h-48 w-48 justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ">
              <h1 class=" p-3 font-bold text-xl ">
                Why is Java a better programming language?
              </h1>

              <p class="font-semibold">March 2023 </p>
            </div>

            <div class="flex flex-col items-center border border-black shadow-xl h-48 w-48 justify-center">
              <div class="flex flex-col items-center border border-black shadow-xl h-48 w-48 justify-center bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
                <h1 class=" p-3 font-bold text-xl ">
                  Why are cats better than dogs?
                </h1>
                <p class="font-semibold">April 2023 </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileTop;
