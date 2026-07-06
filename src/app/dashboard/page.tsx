import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard — AllBots.com",
  description: "Manage your AI AgentBots, Swarms, and Synthetic Intelligence Engines.",
};

const bots = [
  {
    name: "CodeReview-Bot",
    type: "DevOps Agent",
    status: "active",
    tasks: 142,
    description: "Automatically reviews pull requests, checks code style, and enforces best practices.",
  },
  {
    name: "BlockchainAuditor",
    type: "Smart-Contract Agent",
    status: "active",
    tasks: 89,
    description: "Audits Solidity contracts for vulnerabilities and gas optimization opportunities.",
  },
  {
    name: "CI-Orchestrator",
    type: "CI/CD Swarm",
    status: "active",
    tasks: 317,
    description: "Orchestrates build, test, and deploy pipelines across multiple repositories.",
  },
  {
    name: "LearnerAssist",
    type: "Training Agent",
    status: "idle",
    tasks: 54,
    description: "Guides learners through programming challenges and provides contextual hints.",
  },
  {
    name: "RewardEngine",
    type: "Reward Bot",
    status: "active",
    tasks: 203,
    description: "Tracks learner progress, validates completions, and distributes token rewards.",
  },
  {
    name: "DataSwarm-Alpha",
    type: "Data Swarm",
    status: "idle",
    tasks: 11,
    description: "Aggregates on-chain and off-chain data for analytics and model training.",
  },
];

const metrics = [
  { label: "Active Bots", value: "4", icon: "🤖" },
  { label: "Tasks Completed Today", value: "816", icon: "✅" },
  { label: "Swarms Running", value: "2", icon: "🌐" },
  { label: "Avg. Response Time", value: "34ms", icon: "⚡" },
];

function StatusBadge({ status }: { status: string }) {
  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-medium ${
        status === "active"
          ? "bg-green-900 text-green-300"
          : "bg-gray-800 text-gray-400"
      }`}
    >
      <span
        className={`inline-block h-1.5 w-1.5 rounded-full ${
          status === "active" ? "bg-green-400" : "bg-gray-500"
        }`}
      />
      {status.charAt(0).toUpperCase() + status.slice(1)}
    </span>
  );
}

export default function DashboardPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-extrabold text-white">Bot Dashboard</h1>
        <p className="mt-2 text-gray-400">
          Monitor and manage your AI AgentBots, Swarms, and Synthetic Intelligence Engines.
        </p>
      </div>

      {/* Metrics */}
      <div className="mb-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
        {metrics.map(({ label, value, icon }) => (
          <div
            key={label}
            className="rounded-xl border border-gray-800 bg-gray-900 px-5 py-4"
          >
            <div className="text-2xl">{icon}</div>
            <div className="mt-2 text-2xl font-bold text-white">{value}</div>
            <div className="mt-0.5 text-sm text-gray-400">{label}</div>
          </div>
        ))}
      </div>

      {/* Bot List */}
      <h2 className="mb-4 text-xl font-semibold text-white">Registered Bots &amp; Agents</h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {bots.map((bot) => (
          <div
            key={bot.name}
            className="flex flex-col rounded-xl border border-gray-800 bg-gray-900 p-5 transition hover:border-indigo-700"
          >
            <div className="mb-3 flex items-start justify-between gap-2">
              <div>
                <h3 className="font-semibold text-white">{bot.name}</h3>
                <span className="text-xs text-indigo-400">{bot.type}</span>
              </div>
              <StatusBadge status={bot.status} />
            </div>
            <p className="mb-4 flex-1 text-sm text-gray-400">{bot.description}</p>
            <div className="flex items-center justify-between text-xs text-gray-500">
              <span>{bot.tasks} tasks completed</span>
              <button className="rounded-md border border-gray-700 px-3 py-1 text-gray-300 transition hover:bg-gray-800">
                Configure
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Deploy New Bot */}
      <div className="mt-10 rounded-xl border border-dashed border-indigo-700 bg-indigo-950/30 p-8 text-center">
        <div className="text-3xl">➕</div>
        <h3 className="mt-3 text-lg font-semibold text-white">Deploy a New Bot</h3>
        <p className="mx-auto mt-2 max-w-md text-sm text-gray-400">
          Connect your GitHub repository and configure a new AI agent or swarm from one of our
          pre-built templates.
        </p>
        <button className="mt-5 rounded-full bg-indigo-600 px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-500">
          + New Bot
        </button>
      </div>
    </div>
  );
}
