import Link from "next/link";

const features = [
  {
    icon: "🤖",
    title: "AI AgentBots & Swarms",
    description:
      "Deploy, monitor, and orchestrate AI agent bots and swarms. Manage synthetic intelligence engines from a single dashboard.",
    href: "/dashboard",
    cta: "Open Dashboard",
  },
  {
    icon: "🎓",
    title: "Learn Programming & Blockchain",
    description:
      "Structured courses for full-stack development, DevOps, smart contracts, and blockchain technology — designed for humans and bots alike.",
    href: "/learn",
    cta: "Start Learning",
  },
  {
    icon: "💰",
    title: "Earn While You Learn",
    description:
      "Complete challenges, earn rewards, and climb the leaderboard. Get compensated for every skill you master on your way to becoming a top developer.",
    href: "/earn",
    cta: "View Rewards",
  },
  {
    icon: "🐙",
    title: "Embedded GitHub App",
    description:
      "Deep GitHub integration: automated code reviews, CI/CD pipelines, repository analytics, and bot-driven pull request workflows.",
    href: "/github",
    cta: "Connect GitHub",
  },
];

const stats = [
  { value: "10K+", label: "Active Learners" },
  { value: "500+", label: "AI Bots Deployed" },
  { value: "200+", label: "Courses & Modules" },
  { value: "$2M+", label: "Rewards Distributed" },
];

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative flex flex-col items-center justify-center overflow-hidden px-4 py-28 text-center">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(99,102,241,0.15)_0%,_transparent_60%)]" />
        <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-indigo-700 bg-indigo-950 px-4 py-1 text-sm text-indigo-300">
          🚀 Embedded GitHub Application — Now Live
        </span>
        <h1 className="max-w-4xl text-5xl font-extrabold leading-tight tracking-tight text-white md:text-6xl">
          AI Full-Stack DevOps &amp;{" "}
          <span className="text-indigo-400">Blockchain Learning</span> Platform
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-400">
          AllBots.com is your gateway to Synthetic Intelligence Engines, AgentBots, and Swarms.
          Teach and train people, robotics, and bots to become better programmers
          and blockchain developers — and{" "}
          <span className="font-semibold text-indigo-300">earn while you learn</span>.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            href="/learn"
            className="rounded-full bg-indigo-600 px-7 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-indigo-500"
          >
            Start Learning Free
          </Link>
          <Link
            href="/dashboard"
            className="rounded-full border border-gray-700 bg-gray-800 px-7 py-3 text-sm font-semibold text-gray-200 transition hover:bg-gray-700"
          >
            Launch Dashboard
          </Link>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-gray-800 bg-gray-900/50 px-4 py-10">
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-8 text-center md:grid-cols-4">
          {stats.map(({ value, label }) => (
            <div key={label}>
              <div className="text-3xl font-extrabold text-indigo-400">{value}</div>
              <div className="mt-1 text-sm text-gray-400">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto w-full max-w-7xl px-4 py-20">
        <h2 className="mb-12 text-center text-3xl font-bold text-white">
          Everything You Need to Build &amp; Earn
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon, title, description, href, cta }) => (
            <div
              key={title}
              className="flex flex-col rounded-2xl border border-gray-800 bg-gray-900 p-6 transition hover:border-indigo-700"
            >
              <div className="mb-4 text-4xl">{icon}</div>
              <h3 className="mb-2 text-lg font-semibold text-white">{title}</h3>
              <p className="mb-6 flex-1 text-sm text-gray-400">{description}</p>
              <Link
                href={href}
                className="mt-auto inline-flex items-center gap-1 text-sm font-medium text-indigo-400 hover:text-indigo-300"
              >
                {cta} →
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Banner */}
      <section className="mx-auto mb-20 w-full max-w-4xl rounded-2xl border border-indigo-700 bg-gradient-to-r from-indigo-900 via-purple-900 to-gray-900 px-8 py-14 text-center">
        <h2 className="text-3xl font-extrabold text-white">
          Ready to Level Up?
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-gray-300">
          Join thousands of developers, engineers, and AI bots mastering programming
          and blockchain technology — and getting paid for it.
        </p>
        <Link
          href="/earn"
          className="mt-8 inline-block rounded-full bg-indigo-500 px-8 py-3 text-sm font-bold text-white shadow-lg transition hover:bg-indigo-400"
        >
          View Earn &amp; Learn Rewards →
        </Link>
      </section>
    </div>
  );
}

