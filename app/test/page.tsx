"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import image from "../../public/realtime-enhance-enhanced.png";

const array = Array.from({ length: 20 }, (_, i) => i);

export default function Page() {
  const targetRef = useRef();
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });
  const moveX = useTransform(
    scrollYProgress,
    [0, 1],
    [0, 35] // Adjust the end value to stagger the movement
  );

  return (
    <div className="w-screen h-[300vh] relative bg-gray-300 p-10">
      <div className=" w-[90vw] h-[90vh] fixed  flex ">
        <div className="w-full h-full flex gap-0 absolute z-10 ">
          {array.map((i) => {
            // Create a unique transformation for each element

            return (
              <div className="w-full h-full overflow-clip" key={i}>
                <motion.div
                  initial={{ x: 0 }}
                  style={{ x: moveX }}
                  className="w-full h-full bg-gray-300"
                ></motion.div>
              </div>
            );
          })}
        </div>
        <div
          style={{
            backgroundImage: `url("/realtime-enhance-enhanced.png")`,
            backgroundSize: "cover",
            height: "100%", // Ensure the div takes up the full height
            width: "100%", // Ensure the div takes up the full width
          }}
        ></div>
      </div>
    </div>
  );
}
