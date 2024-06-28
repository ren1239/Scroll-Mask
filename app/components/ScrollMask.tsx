"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export function ScrollMask() {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  const maskScale = useTransform(scrollYProgress, [0, 0.25], ["0%", "200%"]);
  const maskScale2 = useTransform(scrollYProgress, [0.25, 0.5], ["0%", "200%"]);
  const maskScale3 = useTransform(scrollYProgress, [0.5, 0.75], ["0%", "200%"]);
  const maskScale4 = useTransform(scrollYProgress, [0.75, 1], ["0%", "200%"]);

  return (
    <div>
      <div ref={targetRef} className="relative w-full h-[400vh] bg-gray-300">
        <motion.div className="sticky top-0 w-full h-screen">
          <motion.div
            style={{
              "--maskScale": maskScale,
            }}
            className="window-mask w-full h-screen grid place-content-center absolute top-0 left-0  z-[4]"
          >
            <div
              style={{
                backgroundImage: `url("/Web1.jpg")`,
                backgroundSize: "cover",
                height: "100%",
                width: "100%",
              }}
              className="grid absolute place-items-center"
            >
              <h2 className="font-bold text-9xl text-white">Lets</h2>
            </div>
          </motion.div>
          <motion.div
            style={{ "--maskScale": maskScale2 }}
            className="window-mask w-full h-screen grid place-content-center absolute top-0 left-0 bg-green-800 z-[3]"
          >
            <div
              style={{
                backgroundImage: `url("/Web2.jpg")`,
                backgroundSize: "cover",
                height: "100%",
                width: "100%",
              }}
              className="grid absolute place-items-center"
            >
              <h2 className="font-bold text-9xl text-white">Change</h2>
            </div>
          </motion.div>
          <motion.div
            style={{ "--maskScale": maskScale3 }}
            className="window-mask w-full h-screen grid place-content-center absolute top-0 left-0 bg-pink-300 z-[2]"
          >
            <div
              style={{
                backgroundImage: `url("/Web3.jpg")`,
                backgroundSize: "cover",
                height: "100%",
                width: "100%",
              }}
              className="grid absolute place-items-center"
            >
              <h2 className="font-bold text-9xl text-white">Design</h2>
            </div>{" "}
          </motion.div>
          <motion.div
            style={{ "--maskScale": maskScale4 }}
            className=" w-full h-screen grid place-content-center absolute top-0 left-0 bg-yellow-300 z-[1]"
          >
            <div
              style={{
                backgroundImage: `url("/Web4.jpg")`,
                backgroundSize: "cover",
                height: "100%",
                width: "100%",
              }}
              className="grid absolute place-items-center"
            >
              <h2 className="font-bold text-9xl text-white">Together</h2>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
