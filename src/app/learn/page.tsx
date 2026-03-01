import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Learn — AllBots.com",
  description: "Courses on full-stack development, DevOps, smart contracts, and blockchain for programmers, bots, and robots.",
};

const tracks = [
  {
    id: "fullstack",
    icon: "💻",
    title: "Full-Stack Development",
    level: "Beginner → Advanced",
    modules: 12,
    description:
      "Master HTML, CSS, TypeScript, React, Next.js, Node.js, REST APIs, and databases. Build production-grade applications end-to-end.",
    tags: ["HTML/CSS", "TypeScript", "React", "Node.js", "SQL"],
  },
  {
    id: "devops",
    icon: "⚙️",
    title: "AI DevOps Engineering",
    level: "Intermediate → Advanced",
    modules: 10,
    description:
      "Learn CI/CD pipelines, Docker, Kubernetes, GitHub Actions, Infrastructure as Code, and how to integrate AI agents into your workflows.",
    tags: ["GitHub Actions", "Docker", "Kubernetes", "Terraform"],
  },
  {
    id: "blockchain",
    icon: "⛓️",
    title: "Blockchain Development",
    level: "Beginner → Advanced",
    modules: 15,
    description:
      "Deep dive into Ethereum, Solidity, smart contract security, DeFi protocols, NFTs, and cross-chain development.",
    tags: ["Solidity", "Ethereum", "DeFi", "Hardhat", "Web3.js"],
  },
  {
    id: "ai",
    icon: "🧠",
    title: "Synthetic Intelligence & Bots",
    level: "Intermediate → Expert",
    modules: 8,
    description:
      "Build AI agents, multi-agent swarms, and bot automation systems. Learn LLM integration, prompt engineering, and autonomous agent design.",
    tags: ["LLMs", "AutoGen", "LangChain", "Agents", "Swarms"],
  },
  {
    id: "robotics",
    icon: "🦾",
    title: "Robotics Programming",
    level: "Intermediate → Advanced",
    modules: 7,
    description:
      "Program robots with Python, ROS, and embedded systems. Bridge AI models with physical robotics for real-world automation.",
    tags: ["Python", "ROS", "Embedded", "SLAM", "Sensors"],
  },
  {
    id: "security",
    icon: "🔐",
    title: "Smart Contract Security",
    level: "Advanced",
    modules: 6,
    description:
      "Identify and exploit common vulnerabilities: reentrancy, overflow, flash loan attacks. Audit contracts and write defensive code.",
    tags: ["Solidity", "Auditing", "Slither", "Fuzzing"],
  },
];

const levels: Record<string, string> = {
  "Beginner → Advanced": "bg-green-900 text-green-300",
  "Intermediate → Advanced": "bg-yellow-900 text-yellow-300",
  "Intermediate → Expert": "bg-orange-900 text-orange-300",
  Advanced: "bg-red-900 text-red-300",
};

export default function LearnPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12">
      <div className="mb-10 text-center">
        <h1 className="text-4xl font-extrabold text-white">Learning Platform</h1>
        <p className="mx-auto mt-3 max-w-2xl text-gray-400">
          Structured, hands-on courses for programmers, blockchain developers, and AI engineers.
          Whether you&apos;re human, bot, or robot — there&apos;s a track for you.
        </p>
      </div>

      {/* Progress Bar */}
      <div className="mb-10 rounded-xl border border-gray-800 bg-gray-900 px-6 py-5">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-400">Your Overall Progress</p>
            <p className="mt-1 text-xl font-bold text-white">3 / 58 modules completed</p>
          </div>
          <Link
            href="/earn"
            className="rounded-full bg-indigo-600 px-5 py-2 text-sm font-semibold text-white transition hover:bg-indigo-500"
          >
            View Rewards
          </Link>
        </div>
        <div className="mt-4 h-2.5 w-full overflow-hidden rounded-full bg-gray-800">
          <div
            className="h-2.5 rounded-full bg-indigo-500"
            style={{ width: "5.17%" }}
          />
        </div>
      </div>

      {/* Tracks */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {tracks.map((track) => (
          <div
            key={track.id}
            className="flex flex-col rounded-2xl border border-gray-800 bg-gray-900 p-6 transition hover:border-indigo-700"
          >
            <div className="mb-3 flex items-start gap-3">
              <span className="text-3xl">{track.icon}</span>
              <div>
                <h3 className="font-semibold text-white">{track.title}</h3>
                <span
                  className={`mt-1 inline-block rounded-full px-2 py-0.5 text-xs font-medium ${
                    levels[track.level]
                  }`}
                >
                  {track.level}
                </span>
              </div>
            </div>
            <p className="mb-4 flex-1 text-sm text-gray-400">{track.description}</p>
            <div className="mb-4 flex flex-wrap gap-1.5">
              {track.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-md border border-gray-700 px-2 py-0.5 text-xs text-gray-300"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex items-center justify-between">
              <span className="text-xs text-gray-500">{track.modules} modules</span>
              <button className="rounded-full border border-indigo-600 px-4 py-1.5 text-xs font-semibold text-indigo-400 transition hover:bg-indigo-600 hover:text-white">
                Start Track →
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* How it works */}
      <div className="mt-16">
        <h2 className="mb-6 text-center text-2xl font-bold text-white">How It Works</h2>
        <div className="grid gap-4 sm:grid-cols-3">
          {[
            { step: "1", title: "Choose a Track", desc: "Pick from 6 learning tracks covering full-stack, DevOps, blockchain, AI, robotics, and security." },
            { step: "2", title: "Complete Modules", desc: "Work through video lessons, coding challenges, and bot-assisted exercises at your own pace." },
            { step: "3", title: "Earn & Certify", desc: "Earn tokens for every completed module and receive verifiable on-chain certificates." },
          ].map(({ step, title, desc }) => (
            <div key={step} className="rounded-xl border border-gray-800 bg-gray-900 p-6 text-center">
              <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-indigo-600 text-lg font-bold text-white">
                {step}
              </div>
              <h3 className="mb-2 font-semibold text-white">{title}</h3>
              <p className="text-sm text-gray-400">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
