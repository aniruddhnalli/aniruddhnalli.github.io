"use client";

import { useEffect, useState } from "react";
import profileData from "@/data/profile.json";

export function LocationCard() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString("en-US", { hour12: false }) + " LOC");
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed bottom-4 left-4 z-50 font-mono text-green-500 bg-black/60 p-3 rounded border border-green-500/30 backdrop-blur-sm shadow-[0_0_10px_rgba(34,197,94,0.2)]">
      <div className="text-xs text-green-400/80 mb-1 flex items-center gap-1">
        <span className="animate-pulse">📍</span> Currently based in
      </div>
      <div className="text-sm font-bold uppercase">
        {profileData.city}, {profileData.country}
      </div>
      <div className="text-sm text-green-600">
        {profileData.timezone}
      </div>
      <div className="mt-2 text-xs border-t border-green-500/20 pt-1">
        SYS TIME: {time}
      </div>
    </div>
  );
}
