import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons/SocialIcons";

import profileImageUrl from "../assets/image/profile.jpg";

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center pt-16 px-6 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7"
        >
          <div className="inline-block font-mono text-xs text-emerald-400 bg-emerald-950/50 border border-emerald-800/50 px-3 py-1 rounded-full mb-6">
            Frontend Engineer &amp; Security Researcher
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-zinc-100 mb-6 leading-tight">
            Building resilient, high-speed web apps with a{" "}
            <span className="text-emerald-400">security-first</span> mindset.
          </h1>
          <p className="text-zinc-400 text-lg mb-8 leading-relaxed">
            I specialize in architecting scalable React &amp; TypeScript
            interfaces while ensuring zero-trust client-side security against
            modern web vulnerabilities.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="flex items-center gap-2 bg-emerald-500 text-zinc-950 font-semibold px-6 py-3 rounded-lg hover:bg-emerald-400 transition"
            >
              View Work <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="https://github.com/shamim-hossain008"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="p-3 bg-zinc-900 border border-zinc-800 rounded-lg hover:border-zinc-700 text-zinc-300"
            >
              <GithubIcon />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="p-3 bg-zinc-900 border border-zinc-800 rounded-lg hover:border-zinc-700 text-zinc-300"
            >
              <LinkedinIcon />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="lg:col-span-5 flex justify-center"
        >
          <div className="relative w-full max-w-md rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-900 shadow-2xl">
            <img
              src={profileImageUrl}
              alt="Profile showcase"
              className="w-full h-auto object-contain"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
