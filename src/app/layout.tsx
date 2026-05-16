import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "AllBots.com — AI DevOps & Blockchain Learning Platform",
  description:
    "An embedded GitHub application for AI Full-Stack DevOps Synthetic Intelligence Engines, AgentBots, and Swarms. Teach, train, and earn while learning to become a better programmer and blockchain developer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-950 font-sans text-gray-100 antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
