import React from 'react';
import randomquote from "../assets/fcc-randomquote.JPG";
import markdown from "../assets/fcc-markdown.JPG";
import drummachine from "../assets/fcc-drummachine.JPG";
import jscalculator from "../assets/fcc-jscalculator.JPG";
import intervaltimer from "../assets/fcc-intervaltimer.JPG";

const Fcc = () => {
  return (
    <div
      name="project"
      className="w-full h-screen text-gray-300 bg-[#0a192f]"
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
      <div className="pb-8 text-center" data-aos="fade-right">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
            FreeCodeCamp Projects
          </p>
          <p className="py-6">Check out some of my FreeCodeCamp Projects for FE certification</p>
        </div>

        {/* Container */}
        <div className="max-w-[1000px] grid sm:grid-cols-2 md:grid-cols-3 gap-4" data-aos="zoom-in">
          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${randomquote})` }} data-aos="zoom-in" data-aos-delay="100"
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-[0.001] p-3 text-center hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
              Random Quotes
              </span>
              <div className="text-center">
                <a href="https://codepen.io/kevinkellyyyy/pen/gOoeXzX?editors=1111" target="_blank" rel="noopener noreferrer">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
              </div>
              <span className="text-sm font-bold text-white tracking-wider">
                Random quotes generator from local array of object quotes name with it's author using.
              </span>
            </div>
          </div>
          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${markdown})` }} data-aos="zoom-in" data-aos-delay="200"
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-[0.001] p-3 text-center group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Markdown Previewer
              </span>
              <div className="text-center">
                <a href="https://codepen.io/kevinkellyyyy/pen/dyJeyPy" target="_blank" rel="noopener noreferrer">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
              </div>
              <span className="text-sm font-bold text-white tracking-wider">
                A lightweight markup language with plain text formatting syntax with markedjs library.
              </span>
            </div>
          </div>
          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${drummachine})` }} data-aos="zoom-in" data-aos-delay="300"
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-[0.001] py-3 text-center group-hover:opacity-100">
              <span className="text-md font-bold text-white tracking-wider">
                Drum Machine
              </span>
              <div className="text-center">
                <a href="https://codepen.io/kevinkellyyyy/pen/LYerVNd" target="_blank" rel="noopener noreferrer">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
              </div>
              <span className="text-sm font-bold text-white tracking-wider">
                Simple drum pad with keyboard control to play drumpad sound
              </span>
            </div>
          </div>
          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${jscalculator})` }} data-aos="zoom-in" data-aos-delay="400"
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-[0.001] p-3 text-center group-hover:opacity-100">
              <span className="text-md font-bold text-white tracking-wider">
                Javascript Calculator
              </span>
              <div className="text-center">
                <a href="https://codepen.io/kevinkellyyyy/pen/LYerVNd" target="_blank" rel="noopener noreferrer">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${intervaltimer})` }} data-aos="zoom-in" data-aos-delay="500"
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-[0.001] p-3 text-center group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                25 + 5 Clock (Pomodoro Clock)
              </span>
              <div className="text-center">
                <a href="https://codepen.io/kevinkellyyyy/pen/gOoKpME" target="_blank" rel="noopener noreferrer">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
              </div>
              <span className="text-sm font-bold text-white tracking-wider">
                Basically an interval timer for session and break length
              </span>
            </div>
          </div>         
        </div>
      </div>
    </div>
  )
}

export default Fcc