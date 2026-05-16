import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "GitHub Integration — AllBots.com",
  description: "Connect AllBots.com to your GitHub repositories for automated CI/CD, bot-driven code reviews, and AI-powered DevOps.",
};

const capabilities = [
  {
    icon: "🔍",
    title: "Automated Code Reviews",
    description:
      "AllBots AI agents analyze every pull request for bugs, security vulnerabilities, code style violations, and blockchain anti-patterns.",
  },
  {
    icon: "🚀",
    title: "Bot-Driven CI/CD",
    description:
      "Trigger build, test, and deployment pipelines automatically. AI orchestrators manage parallelism, retries, and rollback logic.",
  },
  {
    icon: "⛓️",
    title: "Smart Contract Verification",
    description:
      "On every push to a contract repo, bots run static analysis (Slither, Mythril) and post detailed security reports as GitHub comments.",
  },
  {
    icon: "📊",
    title: "Repository Analytics",
    description:
      "Track commit frequency, PR cycle times, code churn, and contributor performance — visualized directly in your dashboard.",
  },
  {
    icon: "🤖",
    title: "Bot-Authored PRs",
    description:
      "Let AI agents propose dependency upgrades, refactors, and documentation improvements as real GitHub pull requests for human review.",
  },
  {
    icon: "🎓",
    title: "Learning Activity Sync",
    description:
      "Learning progress, badges, and completed challenges are synced to your GitHub profile as verified achievements.",
  },
];

const setupSteps = [
  {
    step: "1",
    title: "Install the GitHub App",
    desc: "Click 'Install App' to add AllBots.com to your GitHub account or organization. Grant the required repository permissions.",
  },
  {
    step: "2",
    title: "Select Repositories",
    desc: "Choose which repositories to enable. You can allow all repos or select specific ones — and change this at any time.",
  },
  {
    step: "3",
    title: "Configure Bots & Workflows",
    desc: "From your AllBots dashboard, pick which agents to activate: code reviewer, CI orchestrator, smart-contract auditor, and more.",
  },
  {
    step: "4",
    title: "Go Live",
    desc: "Push a commit or open a PR — your bots start working immediately. Monitor activity from the dashboard in real time.",
  },
];

export default function GitHubPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12">
      <div className="mb-12 text-center">
        <div className="mb-4 text-5xl">🐙</div>
        <h1 className="text-4xl font-extrabold text-white">GitHub App Integration</h1>
        <p className="mx-auto mt-3 max-w-2xl text-gray-400">
          Embed AllBots.com directly into your GitHub workflow. Automated code reviews, bot-driven
          CI/CD, smart-contract auditing, and learning progress sync — all powered by AI agents.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <button className="rounded-full bg-indigo-600 px-7 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-indigo-500">
            Install GitHub App
          </button>
          <a
            href="https://docs.github.com/en/apps"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-gray-700 bg-gray-800 px-7 py-3 text-sm font-semibold text-gray-200 transition hover:bg-gray-700"
          >
            GitHub Apps Docs ↗
          </a>
        </div>
      </div>

      {/* Capabilities */}
      <h2 className="mb-6 text-2xl font-bold text-white">What AllBots Can Do in Your Repos</h2>
      <div className="mb-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {capabilities.map(({ icon, title, description }) => (
          <div
            key={title}
            className="rounded-xl border border-gray-800 bg-gray-900 p-5 transition hover:border-indigo-700"
          >
            <div className="mb-3 text-3xl">{icon}</div>
            <h3 className="mb-1 font-semibold text-white">{title}</h3>
            <p className="text-sm text-gray-400">{description}</p>
          </div>
        ))}
      </div>

      {/* Setup Steps */}
      <h2 className="mb-6 text-2xl font-bold text-white">Getting Started in 4 Steps</h2>
      <div className="mb-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {setupSteps.map(({ step, title, desc }) => (
          <div
            key={step}
            className="rounded-xl border border-gray-800 bg-gray-900 p-5"
          >
            <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-full bg-indigo-600 text-sm font-bold text-white">
              {step}
            </div>
            <h3 className="mb-1 font-semibold text-white">{title}</h3>
            <p className="text-sm text-gray-400">{desc}</p>
          </div>
        ))}
      </div>

      {/* Permissions info */}
      <div className="rounded-xl border border-gray-800 bg-gray-900 p-6">
        <h3 className="mb-3 font-semibold text-white">🔒 Permissions &amp; Security</h3>
        <ul className="space-y-2 text-sm text-gray-400">
          <li>✅ Read access to repository code, commits, and pull requests</li>
          <li>✅ Write access to create comments, status checks, and bot-authored PRs</li>
          <li>✅ Webhook events for push, pull_request, and workflow triggers</li>
          <li>✅ All tokens are stored encrypted; no secrets are committed to repositories</li>
          <li>✅ GDPR compliant — revoke access any time from your GitHub settings</li>
        </ul>
      </div>
    </div>
  );
}
