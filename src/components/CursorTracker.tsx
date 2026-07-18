"use client";

import { useMouse } from "@/hooks/useMouse";

export function CursorTracker() {
  const { x, y, isMoving } = useMouse();

  return (
    <div className="fixed bottom-4 right-4 z-50 font-mono text-green-500 bg-black/60 p-3 rounded border border-green-500/30 backdrop-blur-sm shadow-[0_0_10px_rgba(34,197,94,0.2)] pointer-events-none">
      <div className="text-xs text-green-400/80 mb-1">Cursor</div>
      <div className="text-sm">
        X : {x.toString().padStart(4, "0")}
      </div>
      <div className="text-sm">
        Y : {y.toString().padStart(4, "0")}
      </div>
      <div className="mt-2 text-xs flex items-center gap-2">
        {isMoving ? (
          <>
            <span>Tracking</span>
            <span className="animate-pulse bg-green-500 h-2 w-8 inline-block"></span>
            <span className="text-green-300 font-bold">LIVE</span>
          </>
        ) : (
          <span className="text-green-500/50">Tracking...</span>
        )}
      </div>
    </div>
  );
}
