import React from 'react';
import { motion } from 'framer-motion';

const highlights = [
  {
    title: 'Projets Web.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop',
    href: '#projects',
  },
  {
    title: 'Photographie Auto.',
    image: 'https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=1200&auto=format&fit=crop',
    href: '#projects',
  },
  {
    title: 'Création Audiovisuelle.',
    image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1200&auto=format&fit=crop',
    href: '#projects',
  },
];

const About = () => {
  return (
    <section id="about">
      <div className="bg-[#0a0a0a] py-16">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {highlights.map((item, i) => (
              <motion.a
                key={item.title}
                href={item.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="p-card aspect-[4/3] block"
              >
                <img src={item.image} alt={item.title} loading="lazy" />
                <div className="p-card__overlay">
                  <span className="text-[16px] font-normal text-white">{item.title}</span>
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white py-24 md:py-32">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-[clamp(2.5rem,5vw,5rem)] font-light text-black leading-[1.1] max-w-[900px]"
          >
            Votre expérience digitale commence ici.
          </motion.h2>
        </div>
      </div>

      <div className="bg-white pb-24 md:pb-32">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-[clamp(1.8rem,3vw,2.5rem)] font-normal text-black leading-tight mb-6">
                Un profil créatif, polyvalent et passionné.
              </h3>
              <p className="text-[16px] text-black/60 leading-[1.7] mb-6">
                Depuis mon plus jeune âge, je suis fasciné par la mécanique de précision 
                et l'esthétique intemporelle de l'automobile. Cette même fascination m'anime 
                aujourd'hui dans la création d'expériences digitales.
              </p>
              <p className="text-[16px] text-black/60 leading-[1.7] mb-8">
                En tant que designer et développeur web, je sculpte le code comme on modèle 
                une carrosserie : avec rigueur, attention aux détails et une obsession pour la fluidité.
              </p>
              <a href="#contact" className="p-ghost-btn p-ghost-btn--dark">
                Me contacter
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1614200187524-dc4b892acf16?q=80&w=987&auto=format&fit=crop"
                alt="Portrait"
                loading="lazy"
                className="w-full aspect-[4/5] object-cover"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
