import { React } from "react";
import connection from "../assets/connection.svg";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import brown from "../assets/connect.svg";

const ProfileTop = () => {
  const [isHuman, setHuman] = useState(true);

  return (
    <div>
      <div class="min-w-full border border-yellow-800">
        <div class="h-32 w-full bg-gradient-to-r from-purple-500 to-pink-100"></div>

        <div class="card__media--aside"></div>

        <div class="flex items-center  p-4">
          <div class="relative flex w-full flex-col items-center">
            <div class="md avatar text-purple-650 absolute -top-16 row-start-1 row-end-3 flex h-24 w-24 min-w-max items-end justify-end rounded-full bg-purple-200 text-purple-100 text-purple-600 ring-1 ring-white">
              <img
                class="md relative h-24 w-24 rounded-full"
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
                alt=""
              />
              <div class="absolute"></div>
            </div>

            <div class="mt-8 flex w-full flex-row justify-around space-y-1">
              <div class="flex flex-col items-center">
                <span class="whitespace-nowrap text-lg font-semibold text-gray-800">
                 Ariana Johnson
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
                  Coderusu
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
            <button
              onClick={() => {
                setHuman(true);
              }}
              class="rounded border border-gray-800 bg-transparent px-4 py-2 font-semibold text-gray-700 hover:border-transparent hover:bg-yellow-500 hover:text-white"
            >
              Me as a human
            </button>

            <button
              onClick={() => {
                setHuman(false);
              }}
              class="rounded border border-gray-800 bg-transparent px-4 py-2 font-semibold text-gray-700 hover:border-transparent hover:bg-yellow-500 hover:text-white"
            >
              Me as a professional
            </button>
          </div>

          {isHuman && (
            <div class="m-5 flex flex-row justify-around h-auto w-10/12">
              <img
                class=" m-3 md relative h-56 w-48"
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"

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
          )}
          {!isHuman && (
            <div class="m-5 flex flex-row justify-around h-auto w-10/12 overflow-x-auto ">
              <ol class="items-center sm:flex">
                <li class="relative mb-6 sm:mb-0">
                  <div class="flex items-center">
                    <div class="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                      <svg
                        aria-hidden="true"
                        class="w-3 h-3 text-blue-800 dark:text-blue-300"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </div>
                    <div class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                  </div>
                  <div class="mt-3 sm:pr-8">
                    <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                      Web Designer Freelance
                    </h3>
                    <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                      Since December 2, 2021
                    </time>
                    <p class="text-base font-normal text-gray-500 dark:text-gray-400">
                      Started building websites with Wix for people
                    </p>
                  </div>
                </li>
                <li class="relative mb-6 sm:mb-0">
                  <div class="flex items-center">
                    <div class="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                      <svg
                        aria-hidden="true"
                        class="w-3 h-3 text-blue-800 dark:text-blue-300"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </div>
                    <div class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                  </div>
                  <div class="mt-3 sm:pr-8">
                    <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                      Intern UI/UX designer at Mochi{" "}
                    </h3>
                    <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                      {" "}
                      May 23, 2022- August 22,2022
                    </time>
                    <p class="text-base font-normal text-gray-500 dark:text-gray-400">
                      Designed for this company's website
                    </p>
                  </div>
                </li>
                <li class="relative mb-6 sm:mb-0">
                  <div class="flex items-center">
                    <div class="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                      <svg
                        aria-hidden="true"
                        class="w-3 h-3 text-blue-800 dark:text-blue-300"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </div>
                    <div class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                  </div>
                  <div class="mt-3 sm:pr-8">
                    <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                      Software Engineer at Spotify
                    </h3>
                    <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                      Since January 5, 2023
                    </time>
                    <p class="text-base font-normal text-gray-500 dark:text-gray-400">
                      {" "}
                      Started a new job at Spotify
                    </p>
                  </div>
                </li>
              </ol>
            </div>
          )}
        </div>

        <div class=" mt-10 flex h-auto flex-col border border-gray-900 m-2">
          <h1 class="text-black text-2xl font-bold pl-3"> Projects </h1>

          <div class="flex h-auto flex-row justify-start gap-5   m-2">
            <div class="flex flex-col items-center border border-black shadow-xl h-48 w-48 justify-center">
              <h1 class="font-bold text-xl ">Weather App </h1>
              <li class=" p-2 text-sm">
                Used React Framework and developed components following design
                principles.
              </li>
              <p class="font-semibold">March 2023 </p>
            </div>

            <div class=" flex flex-col items-center border border-black shadow-xl h-48 w-48 justify-center">
              <h1 class="font-bold text-xl ">Online Market Place </h1>
              <li class=" p-2 text-sm">
                Used Java Spring Framework and developed RESTful API for an
                online market place.
              </li>
              <p class="font-semibold">Aril 2023 </p>
            </div>
          </div>
        </div>

        <div class=" mt-10 flex h-auto flex-col border border-gray-900 m-2">
          <h1 class="text-black text-2xl font-bold pl-3"> Blogs </h1>

          <div class="flex h-auto flex-row justify-start gap-5   m-2">
            <div class="flex flex-col items-center border border-black shadow-xl h-48 w-48 justify-center bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100 ">
              <h1 class=" p-3 font-bold text-xl ">
                Why is Java a better programming language?
              </h1>

              <p class="font-semibold">March 2023 </p>
            </div>

            <div class="flex flex-col items-center border border-black shadow-xl h-48 w-48 justify-center">
              <div class="flex flex-col items-center border border-black shadow-xl h-48 w-48 justify-center bg-gradient-to-r from-indigo-100 from-10% via-sky-100 via-30% to-emerald-100 to-90%">
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
