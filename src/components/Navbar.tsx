import { ShieldCheck, Terminal } from "lucide-react";

export const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a
          href="#"
          className="flex items-center gap-2 font-mono font-bold text-emerald-400 text-lg"
        >
          <Terminal className="w-5 h-5" />
          <span>Shamim Hossain</span>
        </a>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
          <a href="#projects" className="hover:text-emerald-400 transition">
            Projects
          </a>
          <a href="#skills" className="hover:text-emerald-400 transition">
            Skills
          </a>
          <a href="#contact" className="hover:text-emerald-400 transition">
            Contact
          </a>
        </div>
        <a
          href="#contact"
          className="flex items-center gap-1.5 text-xs font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 px-3 py-1.5 rounded hover:bg-emerald-500/20 transition"
        >
          <ShieldCheck className="w-4 h-4" />
          <span>Hire Me</span>
        </a>
      </div>
    </nav>
  );
};
