export default function Footer() {
  return (
    <footer className="border-t border-gray-800 bg-gray-950 py-8 text-center text-sm text-gray-500">
      <p>
        &copy; {new Date().getFullYear()}{" "}
        <span className="font-semibold text-indigo-400">AllBots.com</span> — AI Full-Stack DevOps &amp; Blockchain Learning Platform
      </p>
      <p className="mt-1">
        Embedded GitHub App · Teach · Train · Earn · Build
      </p>
    </footer>
  );
}
