import React from "react";

export function NavBar() {
  return (
    <nav className=" fixed top-0 left-0 w-full  flex justify-between items-center h-[150px] z-[20] px-8">
      <div className="w-60">
        <div className=" h-24 rounded-full ring-white  items-center justify-center text-white text-center flex flex-col">
          <span>SCROLL TO EXPLORE</span>
        </div>
      </div>
      <div className="text-white text-sm ">
        <span className=" p-2 bg-neutral-900 rounded-full ring-1 ring-white bg-opacity-20">
          {" "}
          Welcome to our vision for the future
        </span>
      </div>
      <div className="w-60 flex flex-col text-white font-extralight tracking-tighter items-end gap-4">
        <div className="bg-white rounded-full w-6 h-6"></div>
        <div className="bg-white rounded-full w-6 h-6"></div>
        <div className="bg-white rounded-full w-6 h-6"></div>
      </div>
    </nav>
  );
}
