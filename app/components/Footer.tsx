import React from "react";

export function Footer() {
  return (
    <footer className=" fixed bottom-0 left-0 w-full h-[150px] z-[20] flex  justify-between items-center px-8">
      <div className="w-60">
        <div className=" h-24 rounded-full ring-white  items-center justify-center text-white text-center flex flex-col">
          <span>SCROLL TO EXPLORE</span>
          <div className="w-6 h-6 bg-white rounded-full text-black"> I</div>
        </div>
      </div>
      <div className="text-white text-sm "></div>
      <div className="w-60 flex flex-col text-white font-extralight tracking-tighter text-right">
        <span className="text-7xl">June</span>
        <span>28 , 2024</span>
        <span className=" text-[10px]">time to change</span>
      </div>
    </footer>
  );
}
