"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export function Navbar() {
  const navItems = [
    { name: "HOME", path: "/" },
    { name: "PROJECTS", path: "/projects" },
    { name: "DRAWINGS", path: "/drawings" },
    { name: "BLOG", path: "/blog" },
    { name: "ABOUT", path: "/about" },
    { name: "CONTACT", path: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur-md border-b border-green-500/20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 font-mono text-green-400 font-bold tracking-wider">
            ANIRUDDH.OS_v1.0
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.path}
                  className="font-mono text-green-500/70 hover:text-green-400 px-3 py-2 text-sm transition-colors relative group"
                >
                  {item.name}
                  <motion.div
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-green-400 origin-left scale-x-0 group-hover:scale-x-100 transition-transform"
                    transition={{ duration: 0.3 }}
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
