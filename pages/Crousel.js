import React, { useState, useEffect } from "react";
import Carousel from "../components/Crousel";

const images = [
  "home.jpg",
  "home.jpg",
  "home.jpg",
  // Add more image URLs
];

const IndexPage = () => {
  // Add timer logic here using useState and useEffect

  return (
    <div>
      {/* <h1>Timer Carousel</h1> */}
      <div className="w-full">
        <Carousel images={images} />
      </div>
    </div>
  );
};

export default IndexPage;
