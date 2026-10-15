import React from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
  return (
    <section id="projects">
      <div className="bg-[#0a0a0a] py-24 md:py-32 border-t border-white/[0.06]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-[clamp(2.5rem,5vw,5rem)] font-light text-white leading-[1.1] max-w-[800px]"
          >
            Mes projets.
          </motion.h2>
        </div>
      </div>

      <div className="bg-[#0a0a0a]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 pb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {projects.map((project, i) => (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="p-card group"
              >
                <div className="absolute top-0 left-0 right-0 z-20 p-6 md:p-8">
                  <span className="text-[clamp(2rem,3.5vw,3rem)] italic font-light text-white">
                    {project.script}
                  </span>
                </div>

                <div className="aspect-[4/3]">
                  <img src={project.image} alt={project.name} loading="lazy" />
                </div>

                <div className="absolute bottom-0 left-0 right-0 z-20 bg-gradient-to-t from-black/80 via-black/50 to-transparent p-6 md:p-8 pt-20">
                  <div className="flex gap-2 mb-3">
                    {project.tags.map((tag) => (
                      <span key={tag} className="p-tag">{tag}</span>
                    ))}
                  </div>
                  <div className="flex items-end justify-between">
                    <span className="text-[15px] text-white/80">{project.desc}</span>
                    <svg
                      className="w-5 h-5 text-white flex-shrink-0 ml-4 opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition-all"
                      fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
