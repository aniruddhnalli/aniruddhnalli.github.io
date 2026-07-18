"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useMouse } from "@/hooks/useMouse";

export function CustomCursor() {
  const { x, y } = useMouse();
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName.toLowerCase() === "button" ||
        target.tagName.toLowerCase() === "a" ||
        target.closest("button") ||
        target.closest("a")
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mouseover", handleMouseOver);
    return () => window.removeEventListener("mouseover", handleMouseOver);
  }, []);

  return (
    <>
      {/* Outer Cursor */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-green-500 z-[100] pointer-events-none mix-blend-screen"
        animate={{
          x: x - 16,
          y: y - 16,
          scale: isHovering ? 1.5 : 1,
          rotate: isHovering ? 45 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 150,
          damping: 15,
          mass: 0.1,
        }}
      />
      {/* Inner Dot (+) */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 flex items-center justify-center text-green-400 z-[100] pointer-events-none mix-blend-screen text-[10px] font-bold"
        animate={{
          x: x - 4,
          y: y - 4,
        }}
        transition={{
          type: "spring",
          stiffness: 800,
          damping: 30,
          mass: 0.1,
        }}
      >
        +
      </motion.div>
    </>
  );
}
