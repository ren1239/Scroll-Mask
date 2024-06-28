"use client";
import React from "react";
import { motion } from "framer-motion";
import image from "../../public/realtime-enhance-enhanced.png";

export default function Page() {
  return (
    <div className="w-screen h-screen bg-gray-300 p-10">
      <motion.div
        className="strip-mask w-full h-full bg-red-600"
        initial={{ "--x": "0%" }}
        animate={{ "--x": "10%" }}
        transition={{ duration: 10 }}
        style={{
          "--x": 1, // Ensure the initial state is set correctly
          "--y": "10%", // This remains fixed
        }}
      >
        <div
          style={{
            backgroundImage: `url("/realtime-enhance-enhanced.png")`,
            backgroundSize: "cover",
            height: "100%", // Ensure the div takes up the full height
            width: "100%", // Ensure the div takes up the full width
          }}
        ></div>
      </motion.div>
    </div>
  );
}
