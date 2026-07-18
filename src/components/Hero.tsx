"use client";

import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center z-10 relative pointer-events-none">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="border border-green-500/30 bg-black/60 backdrop-blur-md p-8 md:p-12 rounded-lg shadow-[0_0_20px_rgba(34,197,94,0.1)] inline-block pointer-events-auto"
      >
        <h1 className="text-4xl md:text-6xl font-bold text-green-400 mb-6 tracking-tight">
          Hi, I'm Aniruddh.
        </h1>
        <div className="text-xl md:text-2xl text-green-500/80 mb-6 font-mono h-8">
          <Typewriter
            words={[
              "Electrical Engineer",
              "Research Intern",
              "Embedded Systems",
              "FPGA",
              "Space Technology"
            ]}
            loop={true}
            cursor
            cursorStyle="█"
            typeSpeed={50}
            deleteSpeed={30}
            delaySpeed={2000}
          />
        </div>
        <p className="text-green-600 font-mono text-sm uppercase tracking-widest max-w-md mx-auto">
          Building the next generation of space technology, embedded systems, and robotics.
        </p>
      </motion.div>
    </div>
  );
}
