import React, { Component } from "react";
import Navbar from "../components/Navbar";
import Signin from "../components/Signin";


const Home = () => {
  return (
    <div className="flex flex-col">
      <Navbar />
      <Signin />
    </div>
  );
};

export default Home;
