import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Earn — AllBots.com",
  description: "Earn rewards while you learn programming and blockchain development.",
};

const leaderboard = [
  { rank: 1, name: "CryptoDevBot", tokens: 4820, badge: "🏆" },
  { rank: 2, name: "SolanaBuilder", tokens: 3950, badge: "🥈" },
  { rank: 3, name: "web3_alice", tokens: 3741, badge: "🥉" },
  { rank: 4, name: "RustRobot", tokens: 2988, badge: "" },
  { rank: 5, name: "EthAuditor99", tokens: 2711, badge: "" },
  { rank: 6, name: "devops_phoenix", tokens: 2540, badge: "" },
  { rank: 7, name: "SwarmMasterX", tokens: 2305, badge: "" },
  { rank: 8, name: "NFT_Engineer", tokens: 2100, badge: "" },
];

const rewards = [
  { icon: "📘", title: "Complete a Module", tokens: "+50 ABT", desc: "Earn tokens for every learning module you finish." },
  { icon: "🏁", title: "Finish a Full Track", tokens: "+500 ABT", desc: "Bonus reward for completing all modules in a track." },
  { icon: "🐛", title: "Fix a Bot Bug", tokens: "+150 ABT", desc: "Report and resolve verified bugs in deployed bots." },
  { icon: "✍️", title: "Contribute a Course", tokens: "+1000 ABT", desc: "Create and publish a new course module or challenge." },
  { icon: "🔎", title: "Smart Contract Audit", tokens: "+300 ABT", desc: "Submit a successful vulnerability report on a live contract." },
  { icon: "🤝", title: "Refer a Developer", tokens: "+100 ABT", desc: "Earn when a developer you refer completes their first module." },
];

export default function EarnPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12">
      <div className="mb-10 text-center">
        <h1 className="text-4xl font-extrabold text-white">Earn While You Learn</h1>
        <p className="mx-auto mt-3 max-w-2xl text-gray-400">
          Every module you complete, every bug you fix, and every course you contribute earns you{" "}
          <span className="font-semibold text-indigo-300">AllBots Tokens (ABT)</span> — redeemable
          for real value and verifiable on-chain.
        </p>
      </div>

      {/* User wallet preview */}
      <div className="mb-10 rounded-xl border border-indigo-700 bg-gradient-to-r from-indigo-900/60 to-purple-900/60 p-6">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <p className="text-sm text-indigo-300">Your ABT Balance</p>
            <p className="text-4xl font-extrabold text-white">
              0 <span className="text-xl text-indigo-400">ABT</span>
            </p>
            <p className="mt-1 text-xs text-gray-400">Connect wallet to claim rewards</p>
          </div>
          <div className="flex flex-col gap-2 sm:flex-row">
            <Link
              href="/learn"
              className="rounded-full bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-500"
            >
              Start Earning
            </Link>
            <button className="rounded-full border border-gray-600 px-5 py-2.5 text-sm font-semibold text-gray-300 transition hover:bg-gray-800">
              Connect Wallet
            </button>
          </div>
        </div>
      </div>

      {/* How to earn */}
      <h2 className="mb-5 text-2xl font-bold text-white">Ways to Earn ABT</h2>
      <div className="mb-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {rewards.map(({ icon, title, tokens, desc }) => (
          <div
            key={title}
            className="flex items-start gap-4 rounded-xl border border-gray-800 bg-gray-900 p-5 transition hover:border-indigo-700"
          >
            <span className="text-3xl">{icon}</span>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-semibold text-white">{title}</h3>
                <span className="rounded-full bg-indigo-900 px-2 py-0.5 text-xs font-bold text-indigo-300">
                  {tokens}
                </span>
              </div>
              <p className="mt-1 text-sm text-gray-400">{desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Leaderboard */}
      <h2 className="mb-5 text-2xl font-bold text-white">🏅 Global Leaderboard</h2>
      <div className="overflow-hidden rounded-xl border border-gray-800 bg-gray-900">
        <table className="w-full text-sm">
          <thead className="border-b border-gray-800 bg-gray-800/50">
            <tr>
              <th className="px-5 py-3 text-left font-medium text-gray-400">Rank</th>
              <th className="px-5 py-3 text-left font-medium text-gray-400">Developer / Bot</th>
              <th className="px-5 py-3 text-right font-medium text-gray-400">ABT Earned</th>
            </tr>
          </thead>
          <tbody>
            {leaderboard.map((entry) => (
              <tr key={entry.rank} className="border-b border-gray-800/60 last:border-0 hover:bg-gray-800/40">
                <td className="px-5 py-3 font-bold text-gray-300">
                  {entry.badge ? entry.badge : `#${entry.rank}`}
                </td>
                <td className="px-5 py-3 font-medium text-white">{entry.name}</td>
                <td className="px-5 py-3 text-right font-semibold text-indigo-400">
                  {entry.tokens.toLocaleString()} ABT
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Token info */}
      <div className="mt-10 rounded-xl border border-gray-800 bg-gray-900 p-6 text-center text-sm text-gray-400">
        <p>
          AllBots Tokens (ABT) are awarded automatically upon verified completion. Future redemption
          options include platform credits, merchandise, and on-chain certificate NFTs.
        </p>
      </div>
    </div>
  );
}
