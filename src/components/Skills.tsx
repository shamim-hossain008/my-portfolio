import { motion } from "framer-motion";
import { SKILLS } from "../data/portfolioData";

export const Skills = () => {
  return (
    <section
      id="skills"
      className="py-24 px-6 max-w-6xl mx-auto border-t border-zinc-900"
    >
      <h2 className="text-3xl font-bold mb-12 flex items-center gap-3">
        <span className="text-emerald-400 font-mono text-xl">02.</span>{" "}
        Technical Arsenal
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        {SKILLS.map((group, idx) => (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, x: idx === 0 ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-zinc-900/30 border border-zinc-800/80 p-6 rounded-xl"
          >
            <h3 className="text-lg font-semibold text-zinc-200 mb-4">
              {group.title}
            </h3>
            <div className="flex flex-wrap gap-2.5">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="text-sm font-mono bg-zinc-900 border border-zinc-700/70 text-zinc-300 px-3 py-1.5 rounded-md"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
