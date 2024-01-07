"use client";
import React, { useState } from "react";

const page = () => {
  const [dropdown, setDropdown] = useState(false);
  return (
    <div>
      <nav className="w-full h-[100px] bg-blue-500 flex gap-[200px] items-center">
        <ul className="flex gap-4">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Phone</li>
        </ul>
        <ul className="flex gap-4">
          <li className="relative flex gap-2" onMouseEnter={()=>setDropdown(!dropdown)} onMouseLeave={()=> setDropdown(!dropdown)}>
            
            <span>Dropdown</span>
            <img className="w-[20px]" src={dropdown ? "images/icons/up-arrow.svg" : "images/icons/down-arrow.svg"} alt="" />
            {/* <svg fill="#000000" height="200px" width="200px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 330 330" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path id="XMLID_224_" d="M325.606,229.393l-150.004-150C172.79,76.58,168.974,75,164.996,75c-3.979,0-7.794,1.581-10.607,4.394 l-149.996,150c-5.858,5.858-5.858,15.355,0,21.213c5.857,5.857,15.355,5.858,21.213,0l139.39-139.393l139.397,139.393 C307.322,253.536,311.161,255,315,255c3.839,0,7.678-1.464,10.607-4.394C331.464,244.748,331.464,235.251,325.606,229.393z"></path> </g></svg> */}
            {
              dropdown && <div className="w-[200px] bg-white flex flex-col absolute rounded shadow-sm text-black top-[25px]">
              <span>Dropdown-x</span>
              <span>Dropdown-x</span>
              <span>Dropdown-x</span>
              <span>Dropdown-x</span>
            </div>
            }
          </li>
          <li>Dropdown-2</li>
        </ul>
      </nav>
    </div>
  );
};

export default page;
