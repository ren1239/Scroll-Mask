"use client";
import React from "react";
import Image from "next/image";
import { easeInOut, motion } from "framer-motion";

const parentVariant = {
  initial: { y: 50, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      staggerChildren: 2,
      delay: 2,
      ease: "easeInOut",
    },
  },
};

const childVariant = {
  initial: { y: 50, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: { duration: 1, ease: "easeInOut" },
  },
};

export function Body() {
  return (
    <div className="w-screen h-screen bg-[#A6A999] grid grid-cols-12 z-[20]">
      <div className="col-span-4 h-full overflow-hidden">
        <motion.div
          initial={{ x: -350 }}
          whileInView={{
            x: 0,
            transition: {
              delay: 1,
              duration: 1,
              ease: "easeInOut",
            },
          }}
          className="w-full h-full"
        >
          <Image src={"/Web5.jpg"} alt="boss" width={600} height={900} />
        </motion.div>
      </div>
      <motion.div className="col-span-8 h-full overflow-hidden px-20 pt-[30vh] pb-[20vh] text-neutral-800 gap-4">
        <motion.div
          variants={parentVariant}
          initial="initial"
          whileInView="animate"
          className="flex flex-col gap-4"
        >
          <motion.h2
            variants={childVariant}
            className="text-7xl tracking-tighter font-semibold"
          >
            Our Passion
          </motion.h2>
          <motion.p
            variants={childVariant}
            className="text-xl tracking-tighter font-extralight"
          >
            Our team is driven by a passion for seeing our clients succeed and
            making an impact in the digital world.
          </motion.p>
          <motion.div
            variants={childVariant}
            className="flex gap-10 text-sm pt-12"
          >
            <motion.div className="flex flex-col gap-2 max-w-96">
              <span className="">EFFECTIVE COMMUNICATION</span>
              <p className="text-neutral-600">
                As a global creative studio, we understand the importance of
                staying ahead of the game. That's why we partner with some of
                the world's best talent to bring fresh ideas and perspectives to
                the table. We firmly believe that crafting strategic and
                captivating content is the secret ingredient to building a
                remarkable brand identity on social media. After all, strategy
                is key; content is useless without it.
              </p>
            </motion.div>
            <motion.div className="flex flex-col gap-2 max-w-96">
              <span>MUTUAL TRUST</span>
              <p className="text-neutral-600">
                Think, do, try, repeat… There is no magic trick involved. We
                care about strategy just as much as we care about the craft. Our
                process focuses on defining a clear goal and dedicating as much
                time as possible to working relentlessly to reach it.
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}
