import { Contact } from "./components/Contact";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";

export function App() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 selection:bg-emerald-500/30 selection:text-emerald-200">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <footer className="py-8 text-center text-xs font-mono text-zinc-600 border-t border-zinc-900">
        Engineered with React, TypeScript & Tailwind CSS.
      </footer>
    </div>
  );
}

export default App;
