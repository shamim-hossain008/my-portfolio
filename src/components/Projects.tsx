import { motion } from "framer-motion";
import { PROJECTS } from "../data/portfolioData";
import { GithubIcon, LinkedinIcon } from "./icons/SocialIcons";

export const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-12 flex items-center gap-3">
        <span className="text-emerald-400 font-mono text-xl">01.</span> Featured
        Projects
      </h2>
      <div className="grid md:grid-cols-2 gap-6">
        {PROJECTS.map((project, idx) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="bg-zinc-900/50 border border-zinc-800 p-6 rounded-xl hover:border-emerald-500/40 transition group"
          >
            <div className="flex justify-between items-start mb-4">
              <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded">
                {project.category}
              </span>
              <div className="flex gap-3 text-zinc-400">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-zinc-100"
                >
                  <GithubIcon className="w-5 h-5" />
                </a>
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-zinc-100"
                  >
                    <LinkedinIcon className="w-5 h-5" />
                  </a>
                )}
              </div>
            </div>
            <h3 className="text-xl font-bold text-zinc-100 mb-2 group-hover:text-emerald-400 transition">
              {project.title}
            </h3>
            <p className="text-zinc-400 text-sm mb-6 leading-relaxed">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="text-xs font-mono text-zinc-300 bg-zinc-800 px-2.5 py-1 rounded"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
