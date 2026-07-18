import { Hero } from "@/components/Hero";
import { GithubStats } from "@/components/GithubStats";

export default function Home() {
  return (
    <div className="flex flex-col items-center min-h-screen p-4 sm:p-8">
      <Hero />
      <div className="w-full max-w-6xl mx-auto z-10 relative">
        <h2 className="text-2xl font-bold text-green-400 mb-6 border-b border-green-500/30 pb-2">
          &gt; SYSTEM_TELEMETRY
        </h2>
        <GithubStats />
      </div>
    </div>
  );
}
