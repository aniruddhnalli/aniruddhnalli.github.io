import profileData from "@/data/profile.json";

interface GithubData {
  public_repos: number;
  followers: number;
  following: number;
  stargazers_count: number;
}

export async function GithubStats() {
  const username = profileData.github_username;
  let data: GithubData = { public_repos: 0, followers: 0, following: 0, stargazers_count: 0 };
  let errorMsg = null;

  try {
    const headersObj: Record<string, string> = {};
    if (process.env.NEXT_PUBLIC_GITHUB_TOKEN) {
      headersObj.Authorization = `token ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`;
    }

    const res = await fetch(`https://api.github.com/users/${username}`, { headers: headersObj, next: { revalidate: 3600 } });
    if (!res.ok) throw new Error("Failed to fetch user");
    const user = await res.json();

    const reposRes = await fetch(
      `https://api.github.com/users/${username}/repos?per_page=100`,
      { headers: headersObj, next: { revalidate: 3600 } }
    );
    if (!reposRes.ok) throw new Error("Failed to fetch repos");
    const repos = await reposRes.json();
    
    let stars = 0;
    if (Array.isArray(repos)) {
      stars = repos.reduce((acc, repo) => acc + (repo.stargazers_count || 0), 0);
    }

    data = {
      public_repos: user.public_repos || 0,
      followers: user.followers || 0,
      following: user.following || 0,
      stargazers_count: stars,
    };
  } catch (error) {
    console.error("Failed to fetch GitHub stats:", error);
    errorMsg = "API RATE LIMIT OR UNAVAILABLE";
  }

  return (
    <div className="w-full max-w-2xl mx-auto my-16 border border-green-500/30 bg-black/60 backdrop-blur-md rounded-lg p-6 font-mono shadow-[0_0_15px_rgba(34,197,94,0.1)]">
      <div className="text-green-400 mb-4 font-bold border-b border-green-500/30 pb-2">
        <span className="mr-2">GITHUB_DATALINK</span>
        <span className="text-xs font-normal text-green-500/70">
          STATUS: {errorMsg ? <span className="text-red-500">{errorMsg}</span> : "CONNECTED (STATIC)"}
        </span>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <StatBox label="REPOSITORIES" value={data.public_repos} />
        <StatBox label="STARS" value={data.stargazers_count} />
        <StatBox label="FOLLOWERS" value={data.followers} />
        <StatBox label="FOLLOWING" value={data.following} />
      </div>
    </div>
  );
}

function StatBox({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div className="flex flex-col items-center p-3 bg-green-500/5 rounded border border-green-500/20">
      <div className="text-xs text-green-500/70 mb-1">{label}</div>
      <div className="text-2xl text-green-400 font-bold">{value !== undefined ? value : "ERR"}</div>
    </div>
  );
}
