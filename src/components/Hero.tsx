"use client";


import { motion } from "framer-motion";

export function Hero() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-[80vh] w-full text-center z-10 pointer-events-none rounded-2xl overflow-hidden shadow-[0_0_30px_rgba(34,197,94,0.15)] my-8">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-60"
      >
        <source src="/after.mp4" type="video/mp4" />
      </video>
      
      {/* Overlay to ensure text readability */}
      <div className="absolute inset-0 bg-black/40 z-0"></div>

      {/* Text on top of video */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="z-10 px-4"
      >
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 tracking-tight drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
          ANIRUDDH NALLI
        </h1>
        <h2 className="text-xl md:text-3xl text-green-400 font-mono tracking-[0.2em] font-medium drop-shadow-[0_0_10px_rgba(34,197,94,0.5)]">
          ELECTRICAL ENGINEER
        </h2>
      </motion.div>
    </div>
  );
}
