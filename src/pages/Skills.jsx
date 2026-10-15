import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Langages = [
  { name: 'HTML5', icon: 'devicon-html5-plain colored' },
  { name: 'CSS3', icon: 'devicon-css3-plain colored' },
  { name: 'SCSS', icon: 'custom-scss' },
  { name: 'GSAP', type: 'custom-gsap' },
  { name: 'JavaScript', icon: 'devicon-javascript-plain colored' },
  { name: 'TypeScript', icon: 'devicon-typescript-plain colored' },
  { name: 'PHP', icon: 'devicon-php-plain colored' },
  { name: 'SQL', icon: 'devicon-mysql-plain colored' },
  { name: 'React', icon: 'devicon-react-original colored' },
  { name: 'Angular', icon: 'devicon-angular-plain colored' },
  { name: 'Symfony', icon: 'devicon-symfony-original text-white' },
  { name: 'Tailwind', icon: 'devicon-tailwindcss-original colored' },
  { name: 'Bootstrap', icon: 'devicon-bootstrap-plain colored' },
  { name: 'Git', icon: 'devicon-git-plain colored' },
  { name: 'Docker', icon: 'devicon-docker-plain colored' }
];

const Logiciels = [
  { type: 'adobe', name: 'Ps', border: '#00c8ff', bg: '#001d34', text: '#00c8ff', fullName: 'Photoshop' },
  { type: 'adobe', name: 'Pr', border: '#ea77ff', bg: '#180026', text: '#ea77ff', fullName: 'Premiere Pro' },
  { type: 'adobe', name: 'Ae', border: '#d19aff', bg: '#13002a', text: '#d19aff', fullName: 'After Effects' },
  { type: 'adobe', name: 'Ai', border: '#ff9a00', bg: '#261300', text: '#ff9a00', fullName: 'Illustrator' },
  { type: 'adobe', name: 'Id', border: '#ff43a5', bg: '#240015', text: '#ff43a5', fullName: 'InDesign' },
  { type: 'adobe', name: 'Xd', border: '#ff2bc2', bg: '#2c001e', text: '#ff2bc2', fullName: 'Adobe XD' },
  { type: 'devicon', name: 'Canva', icon: 'devicon-canva-original colored', fullName: 'Canva' },
  { type: 'devicon', name: 'Figma', icon: 'devicon-figma-plain colored', fullName: 'Figma' },
  { type: 'devicon', name: 'GitHub', icon: 'devicon-github-original text-white', fullName: 'GitHub' },
  { type: 'devicon', name: 'GitLab', icon: 'devicon-gitlab-plain colored', fullName: 'GitLab' },
  { type: 'devicon', name: 'Blender', icon: 'devicon-blender-original colored', fullName: 'Blender' },
  { type: 'custom-unity', fullName: 'Unity' },
  { type: 'devicon', name: 'Godot', icon: 'devicon-godot-plain colored', fullName: 'Godot' },
  { type: 'devicon', name: 'Trello', icon: 'devicon-trello-plain colored', fullName: 'Trello' },
  { type: 'devicon', name: 'Jira', icon: 'devicon-jira-plain colored', fullName: 'Jira' },
  { type: 'devicon', name: 'WordPress', icon: 'devicon-wordpress-plain text-[#21759B]', fullName: 'WordPress' }
];

const GsapIcon = () => (
  <svg viewBox="0 0 100 100" fill="none" className="w-[36px] h-[36px] mb-3">
    <rect width="100" height="100" rx="12" fill="#88ce02" />
    <text x="50" y="62" fill="#ffffff" fontSize="32" fontWeight="bold" fontFamily="monospace" textAnchor="middle">GSAP</text>
  </svg>
);

const ScssIcon = () => (
  <svg viewBox="0 0 100 100" fill="none" className="w-[36px] h-[36px] mb-3">
    <rect width="100" height="100" rx="12" fill="#cd6799" />
    <text x="50" y="62" fill="#ffffff" fontSize="32" fontWeight="bold" fontFamily="monospace" textAnchor="middle">SCSS</text>
  </svg>
)

const UnityIcon = () => (
  <svg viewBox="0 0 512 512" fill="currentColor" className="w-[36px] h-[36px] text-white mb-3">
    <path d="M110.5 407.5L50 302.7 110.5 198l121 69.8-121 139.7zm291 0l-121-139.7 121-69.8 60.5 104.7-60.5 104.8zm-145.5-168l-121-69.9L256 64.9l121 69.8-121 169.8v-65z" />
  </svg>
);

const Skills = () => {
  return (
    <section className="min-h-screen bg-[#111111] pt-32 pb-24 text-white">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">

        <div className="mb-16">
          <Link to="/" className="inline-flex items-center gap-2 text-white/50 hover:text-white transition-colors mb-8 text-[13px] uppercase tracking-[0.2em]">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
            Retour
          </Link>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-[clamp(2.5rem,5vw,5rem)] font-light leading-[1.1]"
          >
            Mes Compétences
          </motion.h1>
        </div>

        <div className="space-y-16">
          
          <div className="bg-white/[0.02] border border-white/5 p-8 md:p-12 rounded-xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              <div className="lg:col-span-6 space-y-6">
                <h2 className="text-[12px] font-bold uppercase tracking-[0.3em] text-white/30 pb-2 border-b border-white/10">Sebastian Chisiu</h2>
                <p className="text-[15px] text-white/70 font-light leading-[1.8]">
                Je suis Alex, développeur web en formation en 3ᵉ année de B.U.T MMI à l'Université Gustave Eiffel.<br></br><br></br>
                Passionné par le développement web et la création numérique, je combine compétences techniques, design et audiovisuel pour concevoir des expériences web modernes et interactives.
                Curieux et polyvalent, j'aime transformer des idées en projets concrets, de la conception à la réalisation. <br></br><br></br> Je recherche actuellement une alternance en développement web pour continuer à progresser et mettre mes compétences au service de projets ambitieux.
                </p>
              </div>

              <div className="lg:col-span-3 space-y-6">
                <h2 className="text-[12px] font-bold uppercase tracking-[0.3em] text-white/30 pb-2 border-b border-white/10">Langues</h2>
                <ul className="space-y-4 text-[15px] text-white/70 font-light">
                  <li>
                    <span className="font-medium block">Français</span>
                    <span className="text-[13px] text-white/40">Langue maternelle</span>
                  </li>
                  <li>
                    <span className="font-medium block">Roumain</span>
                    <span className="text-[13px] text-white/40">Langue maternelle</span>
                  </li>
                  <li>
                    <span className="font-medium block">Anglais</span>
                    <span className="text-[13px] text-white/40">Niveau B2</span>
                  </li>
                  <li>
                    <span className="font-medium block">Espagnol</span>
                    <span className="text-[13px] text-white/40">Niveau B1</span>
                  </li>
                </ul>
              </div>

              <div className="lg:col-span-3 space-y-6">
                <h2 className="text-[12px] font-bold uppercase tracking-[0.3em] text-white/30 pb-2 border-b border-white/10">Profil & Soft Skills</h2>
                <ul className="space-y-4 text-[15px] text-white/70 font-light">
                  <li>
                    <span className="font-medium block">Créativité</span>
                    <span className="text-[13px] text-white/40">Passionné d'univers visuels</span>
                  </li>
                  <li>
                    <span className="font-medium block">Autonomie</span>
                    <span className="text-[13px] text-white/40">Gestion de projet de A à Z</span>
                  </li>
                  <li>
                    <span className="font-medium block">Rigueur</span>
                    <span className="text-[13px] text-white/40">Méthodes agiles & organisation</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            <div className="bg-white/[0.02] border border-white/5 p-8 md:p-12 rounded-xl">
              <h2 className="text-[12px] font-bold uppercase tracking-[0.3em] text-white/30 mb-10 pb-2 border-b border-white/10">Langages de programmation</h2>
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-6">
                {Langages.map((lang) => (
                  <motion.div
                    key={lang.name}
                    whileHover={{ scale: 1.05 }}
                    className="flex flex-col items-center justify-center p-4 bg-white/[0.01] border border-white/5 hover:border-white/10 transition-all rounded-lg text-center"
                  >
                    {lang.type === 'custom-gsap' ? (
                      <GsapIcon />
                    ) : lang.type === 'custom-scss' ? (
                      <ScssIcon />
                    ) : (
                      <i className={`${lang.icon} text-[36px] mb-3`} />
                    )}
                    <span className="text-[11px] font-mono tracking-wider text-white/50">{lang.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="bg-white/[0.02] border border-white/5 p-8 md:p-12 rounded-xl">
              <h2 className="text-[12px] font-bold uppercase tracking-[0.3em] text-white/30 mb-10 pb-2 border-b border-white/10">Logiciels & Outils</h2>
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-6">
                {Logiciels.map((tool) => (
                  <motion.div
                    key={tool.fullName}
                    whileHover={{ scale: 1.05 }}
                    className="flex flex-col items-center justify-center p-4 bg-white/[0.01] border border-white/5 hover:border-white/10 transition-all rounded-lg text-center"
                  >
                    {tool.type === 'adobe' ? (
                      <div
                        style={{
                          borderColor: tool.border,
                          backgroundColor: tool.bg,
                          color: tool.text
                        }}
                        className="w-[36px] h-[36px] border-2 rounded-lg flex items-center justify-center font-bold text-[14px] select-none mb-3"
                      >
                        {tool.name}
                      </div>
                    ) : tool.type === 'custom-unity' ? (
                      <UnityIcon />
                    ) : (
                      <i className={`${tool.icon} text-[36px] mb-3`} />
                    )}
                    <span className="text-[11px] font-mono tracking-wider text-white/50">{tool.fullName}</span>
                  </motion.div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Skills;
