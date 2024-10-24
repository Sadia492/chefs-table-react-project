import React from "react";
import banner from "../assets/images/rectangle1.png";

export default function Banner() {
  return (
    <div>
      <div
        className="hero py-32 rounded-xl mt-3"
        style={{
          backgroundImage: `url(${banner})`,
        }}
      >
        <div className=""></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="w-3/4 mx-auto">
            <h1 className="mb-5 text-5xl font-bold">
              Discover an exceptional cooking class tailored for you!
            </h1>
            <p className="mb-5">
              Learn and Master Basic Programming, Data Structures, Algorithm,
              OOP, Database and solve 500+ coding problems to become an
              exceptionally well world-class Programmer.
            </p>
            <button className="btn bg-green-500">Explore Now</button>
            <button className="btn btn-outline btn-success ml-2">
              Our Feedback
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
