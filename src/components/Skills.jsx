import React from 'react';
import { motion } from 'framer-motion';

const skillGroups = [
  {
    title: 'Front-end',
    skills: ['React / Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'HTML / CSS'],
  },
  {
    title: 'Design',
    skills: ['UI/UX Design', 'Design System', 'Figma', 'Prototypage', 'Accessibilité'],
  },
  {
    title: 'Outils',
    skills: ['Git / GitHub', 'VS Code', 'Vite / Webpack', 'Node.js', 'REST API'],
  },
  {
    title: 'Audiovisuel',
    skills: ['Photographie Auto', 'Premiere Pro', 'Lightroom', 'After Effects', 'DaVinci Resolve'],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="bg-white">
      <div className="relative w-full aspect-[21/9] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2070&auto=format&fit=crop"
          alt="Workspace"
          loading="lazy"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 max-w-[1400px] mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-[clamp(2rem,4vw,3.5rem)] font-light text-white leading-tight max-w-[700px]"
          >
            Découvrez mes compétences techniques.
          </motion.h2>
          <p className="text-white/60 text-[15px] mt-3 max-w-[500px]">Design & Développement</p>
          <a href="#contact" className="p-arrow-link mt-4 inline-flex">
            Me contacter →
          </a>
        </div>
      </div>

      <div className="py-24 md:py-32">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-[clamp(1.8rem,3vw,2.5rem)] font-normal text-black mb-16"
          >
            Spécifications techniques.
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {skillGroups.map((group, i) => (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <h4 className="text-[14px] font-bold text-black uppercase tracking-[0.05em] mb-6 pb-4 border-b border-black/10">
                  {group.title}
                </h4>
                <ul className="space-y-3">
                  {group.skills.map((skill) => (
                    <li key={skill} className="text-[15px] text-black/60 leading-[1.6]">
                      {skill}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
