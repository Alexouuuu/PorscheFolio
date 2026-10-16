import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

// Vraies icônes officielles Adobe (SimpleIcons vectorielles)
const PhotoshopIcon = () => (
  <svg viewBox="0 0 24 24" fill="#31A8FF" className="w-[36px] h-[36px] mb-3">
    <path d="M9.85 8.42c-.37-.15-.77-.21-1.18-.2-.26 0-.49 0-.68.01-.2-.01-.34 0-.41.01v3.36c.14.01.27.02.39.02h.53c.39 0 .78-.06 1.15-.18.32-.09.6-.28.82-.53.21-.25.31-.59.31-1.03.01-.31-.07-.62-.23-.89-.17-.26-.41-.46-.7-.57zM19.75.3H4.25C1.9.3 0 2.2 0 4.55v14.899c0 2.35 1.9 4.25 4.25 4.25h15.5c2.35 0 4.25-1.9 4.25-4.25V4.55C24 2.2 22.1.3 19.75.3zm-7.391 11.65c-.399.56-.959.98-1.609 1.22-.68.25-1.43.34-2.25.34-.24 0-.4 0-.5-.01s-.24-.01-.43-.01v3.209c.01.07-.04.131-.11.141H5.52c-.08 0-.12-.041-.12-.131V6.42c0-.07.03-.11.1-.11.17 0 .33 0 .56-.01.24-.01.49-.01.76-.02s.56-.01.87-.02c.31-.01.61-.01.91-.01.82 0 1.5.1 2.06.31.5.17.96.45 1.34.82.32.32.57.71.73 1.14.149.42.229.85.229 1.3.001.86-.199 1.57-.6 2.13zm7.091 3.89c-.28.4-.671.709-1.12.891-.49.209-1.09.318-1.811.318-.459 0-.91-.039-1.359-.129-.35-.061-.7-.17-1.02-.32-.07-.039-.121-.109-.111-.189v-1.74c0-.029.011-.07.041-.09.029-.02.06-.01.09.01.39.23.8.391 1.24.49.379.1.779.15 1.18.15.38 0 .65-.051.83-.141.16-.07.27-.24.27-.42 0-.141-.08-.27-.24-.4-.16-.129-.489-.279-.979-.471-.51-.18-.979-.42-1.42-.719-.31-.221-.569-.51-.761-.85-.159-.32-.239-.67-.229-1.021 0-.43.12-.84.341-1.21.25-.4.619-.72 1.049-.92.469-.239 1.059-.349 1.769-.349.41 0 .83.03 1.24.09.3.04.59.12.86.23.039.01.08.05.1.09.01.04.02.08.02.12v1.63c0 .04-.02.08-.05.1-.09.02-.14.02-.18 0-.3-.16-.62-.27-.96-.34-.37-.08-.74-.13-1.12-.13-.2-.01-.41.02-.601.07-.129.03-.24.1-.31.2-.05.08-.08.18-.08.27s.04.18.101.26c.09.11.209.2.34.27.229.12.47.23.709.33.541.18 1.061.43 1.541.73.33.209.6.49.789.83.16.318.24.67.23 1.029.011.471-.129.94-.389 1.331z" />
  </svg>
);

const IllustratorIcon = () => (
  <svg viewBox="0 0 24 24" fill="#FF9A00" className="w-[36px] h-[36px] mb-3">
    <path d="M10.53 10.73c-.1-.31-.19-.61-.29-.92-.1-.31-.19-.6-.27-.89-.08-.28-.15-.54-.22-.78h-.02c-.09.43-.2.86-.34 1.29-.15.48-.3.98-.46 1.48-.14.51-.29.98-.44 1.4h2.54c-.06-.211-.14-.46-.23-.721-.09-.269-.18-.559-.27-.859zM19.75.3H4.25C1.9.3 0 2.2 0 4.55v14.9c0 2.35 1.9 4.25 4.25 4.25h15.5c2.35 0 4.25-1.9 4.25-4.25V4.55C24 2.2 22.1.3 19.75.3zM14.7 16.83h-2.091c-.069.01-.139-.04-.159-.11l-.82-2.38H7.91l-.76 2.35c-.02.09-.1.15-.19.141H5.08c-.11 0-.14-.061-.11-.18L8.19 7.38c.03-.1.06-.21.1-.33.04-.21.06-.43.06-.65-.01-.05.03-.1.08-.11h2.59c.08 0 .12.03.13.08l3.65 10.3c.03.109 0 .16-.1.16zm3.4-.15c0 .11-.039.16-.129.16H16.01c-.1 0-.15-.061-.15-.16v-7.7c0-.1.041-.14.131-.14h1.98c.09 0 .129.05.129.14v7.7zm-.209-9.03c-.231.24-.571.37-.911.35-.33.01-.65-.12-.891-.35-.23-.25-.35-.58-.34-.92-.01-.34.12-.66.359-.89.242-.23.562-.35.892-.35.391 0 .689.12.91.35.22.24.34.56.33.89.01.34-.11.67-.349.92z" />
  </svg>
);

const InDesignIcon = () => (
  <svg viewBox="0 0 24 24" fill="#FF3366" className="w-[36px] h-[36px] mb-3">
    <path d="M4.25.3C1.9.3 0 2.2 0 4.55v14.9c0 2.35 1.9 4.25 4.25 4.25h15.5c2.35 0 4.25-1.9 4.25-4.25V4.55C24 2.2 22.1.3 19.75.3zm11.31 5.13h2.03c.05-.01.09.03.1.07v9.54c0 .18.01.38.02.6.02.21.03.41.04.58 0 .07-.03.13-.1.16-.52.22-1.07.38-1.63.48-.5.09-1.02.14-1.54.14-.74.01-1.48-.14-2.15-.45-.63-.29-1.15-.77-1.51-1.36-.37-.61-.55-1.37-.55-2.28-.01-.74.18-1.47.55-2.11.38-.65.93-1.19 1.59-1.55.7-.39 1.54-.58 2.53-.58.05 0 .12 0 .21.01s.19.01.31.02V5.54c0-.07.03-.11.1-.11zm-8.93.86h1.95c.06-.01.12.03.13.1.01.01.01.02.01.03v10.26c0 .11-.05.16-.14.16H6.62c-.09 0-.13-.05-.13-.16V6.42c0-.09.05-.13.14-.13zm8.23 4.24c-.39 0-.78.08-1.13.26-.34.17-.63.42-.85.74-.22.32-.33.75-.33 1.27-.01.35.05.7.17 1.03.1.27.25.51.45.71.19.18.42.32.68.4.27.09.55.13.83.13.15 0 .29-.01.42-.02.13.01.25-.01.36-.05v-4.4c-.09-.02-.18-.04-.27-.05-.11-.01-.22-.02-.33-.02z" />
  </svg>
);

const PremiereIcon = () => (
  <svg viewBox="0 0 24 24" fill="#EA77FF" className="w-[36px] h-[36px] mb-3">
    <path d="M10.15 8.42a2.93 2.93 0 00-1.18-.2 13.9 13.9 0 00-1.09.02v3.36l.39.02h.53c.39 0 .78-.06 1.15-.18.32-.09.6-.28.82-.53.21-.25.31-.59.31-1.03a1.45 1.45 0 00-.93-1.46zM19.75.3H4.25A4.25 4.25 0 000 4.55v14.9c0 2.35 1.9 4.25 4.25 4.25h15.5c2.35 0 4.25-1.9 4.25-4.25V4.55C24 2.2 22.1.3 19.75.3zm-7.09 11.65c-.4.56-.96.98-1.61 1.22-.68.25-1.43.34-2.25.34l-.5-.01-.43-.01v3.21a.12.12 0 01-.11.14H5.82c-.08 0-.12-.04-.12-.13V6.42c0-.07.03-.11.1-.11l.56-.01.76-.02.87-.02.91-.01c.82 0 1.5.1 2.06.31.5.17.96.45 1.34.82.32.32.57.71.73 1.14.15.42.23.85.23 1.3 0 .86-.2 1.57-.6 2.13zm6.82-3.15v1.95c0 .08-.05.11-.16.11a4.35 4.35 0 00-1.92.37c-.19.09-.37.21-.51.37v5.1c0 .1-.04.14-.13.14h-1.97a.14.14 0 01-.16-.12v-5.58l-.01-.75-.02-.78c0-.23-.02-.45-.04-.68a.1.1 0 01.07-.11h1.78c.1 0 .18.07.2.16a3.03 3.03 0 01.13.92c.3-.35.67-.64 1.08-.86a3.1 3.1 0 011.52-.39c.07-.01.13.04.14.11v.04z" />
  </svg>
);

const AfterEffectsIcon = () => (
  <svg viewBox="0 0 24 24" fill="#9999FF" className="w-[36px] h-[36px] mb-3">
    <path d="M8.54 10.73c-.1-.31-.19-.61-.29-.92s-.19-.6-.27-.89c-.08-.28-.15-.54-.22-.78h-.02c-.09.43-.2.86-.34 1.29-.15.48-.3.98-.46 1.48-.13.51-.29.98-.44 1.4h2.54c-.06-.21-.14-.46-.23-.72-.09-.27-.18-.56-.27-.86zm8.58-.29c-.55-.03-1.07.26-1.33.76-.12.23-.19.47-.22.72h2.109c.26 0 .45 0 .57-.01.08-.01.16-.03.23-.08v-.1c0-.13-.021-.25-.061-.37-.178-.56-.708-.94-1.298-.92zM19.75.3H4.25C1.9.3 0 2.2 0 4.55v14.9c0 2.35 1.9 4.25 4.25 4.25h15.5c2.35 0 4.25-1.9 4.25-4.25V4.55C24 2.2 22.1.3 19.75.3zm-7.04 16.511h-2.09c-.07.01-.14-.041-.16-.11l-.82-2.4H5.92l-.76 2.36c-.02.09-.1.15-.19.14H3.09c-.11 0-.14-.06-.11-.18L6.2 7.39c.03-.1.06-.19.1-.31.04-.21.06-.43.06-.65-.01-.05.03-.1.08-.11h2.59c.07 0 .12.03.13.08l3.65 10.25c.03.11.001.161-.1.161zm7.851-3.991c-.021.189-.031.33-.041.42-.01.07-.069.13-.14.13-.06 0-.17.01-.33.021-.159.02-.35.029-.579.029-.23 0-.471-.04-.73-.04h-3.17c.039.31.14.62.31.89.181.271.431.48.729.601.4.17.841.26 1.281.25.35-.011.699-.04 1.039-.11.311-.039.61-.119.891-.23.05-.039.08-.02.08.08v1.531c0 .039-.01.08-.021.119-.021.03-.04.051-.069.07-.32.14-.65.24-1 .3-.471.09-.94.13-1.42.12-.761 0-1.4-.12-1.92-.35-.49-.211-.921-.541-1.261-.95-.319-.39-.55-.83-.69-1.31-.14-.471-.209-.961-.209-1.461 0-.539.08-1.07.25-1.59.16-.5.41-.96.75-1.37.33-.4.739-.72 1.209-.95.471-.23 1.03-.31 1.67-.31.531-.01 1.06.09 1.55.31.41.18.77.45 1.05.8.26.34.47.72.601 1.14.129.4.189.81.189 1.22 0 .24-.01.45-.019.64z" />
  </svg>
);

const XdIcon = () => (
  <svg viewBox="0 0 24 24" fill="#FF61F6" className="w-[36px] h-[36px] mb-3">
    <path d="M4.25.3C1.9.3 0 2.2 0 4.55v14.9c0 2.35 1.9 4.25 4.25 4.25h15.5c2.35 0 4.25-1.9 4.25-4.25V4.55C24 2.2 22.1.3 19.75.3Zm14.07 5.13h2.03c.05-.01.09.03.1.07v9.54c0 .18.01.38.02.6.02.21.03.41.04.58 0 .07-.03.13-.1.16-.52.22-1.07.38-1.63.48-.51.09-1.02.14-1.54.14-.74.01-1.48-.14-2.15-.45-.63-.29-1.15-.77-1.51-1.36-.37-.61-.55-1.37-.55-2.28a4.107 4.107 0 0 1 2.14-3.66c.7-.39 1.54-.58 2.53-.58.05 0 .12 0 .21.01s.19.01.31.02V5.54c0-.07.03-.11.1-.11zM3.68 6.3h2.27c.05 0 .1.01.14.02.04.02.07.05.1.09.19.43.41.86.64 1.29.24.43.47.85.72 1.27.24.42.46.84.67 1.27h.02c.21-.44.43-.87.65-1.29.22-.42.45-.84.68-1.26.23-.42.45-.85.67-1.26.01-.04.03-.08.06-.1a.19.19 0 0 1 .13-.02h2.11c.05-.01.1.02.11.07.01.01-.01.05-.03.07l-3 4.95 3.2 5.25c.02.04.03.08.02.12-.01.04-.05.01-.11.02h-2.29c-.16 0-.27-.01-.34-.11-.21-.42-.43-.83-.64-1.25-.21-.41-.44-.83-.68-1.26-.24-.43-.48-.86-.72-1.3h-.02c-.21.43-.44.86-.67 1.29-.23.43-.46.86-.68 1.28-.23.42-.46.85-.69 1.26-.04.1-.12.11-.23.11h-2.2c-.04 0-.07.02-.07-.03a.14.14 0 0 1 .02-.11l3.11-5.1L3.6 6.44c-.03-.04-.04-.08-.02-.1.02-.03.06-.04.1-.04zm13.94 4.23c-.39 0-.78.08-1.13.26-.34.17-.63.42-.85.74-.22.32-.33.75-.33 1.27-.01.35.05.7.17 1.03.1.27.25.51.45.71.19.18.42.32.68.4.27.09.55.13.83.13.15 0 .29-.01.42-.02.13.01.24-.01.36-.05v-4.4c-.09-.02-.18-.04-.27-.05-.11-.01-.22-.02-.33-.02Z" />
  </svg>
);

// Vraie icône officielle Unity (SimpleIcons vectorielle)
const UnityIcon = () => (
  <svg viewBox="0 0 24 24" fill="#FFFFFF" className="w-[36px] h-[36px] mb-3">
    <path d="m12.9288 4.2939 3.7997 2.1929c.1366.077.1415.2905 0 .3675l-4.515 2.6076a.4192.4192 0 0 1-.4246 0L7.274 6.8543c-.139-.0745-.1415-.293 0-.3675l3.7972-2.193V0L1.3758 5.5977V16.793l3.7177-2.1456v-4.3858c-.0025-.1565.1813-.2682.318-.1838l4.5148 2.6076a.4252.4252 0 0 1 .2136.3676v5.2127c.0025.1565-.1813.2682-.3179.1838l-3.7996-2.1929-3.7178 2.1457L12 24l9.6954-5.5977-3.7178-2.1457-3.7996 2.1929c-.1341.082-.3229-.0248-.3179-.1838V13.053c0-.1565.087-.2956.2136-.3676l4.5149-2.6076c.134-.082.3228.0224.3179.1838v4.3858l3.7177 2.1456V5.5977L12.9288 0Z" />
  </svg>
);

const Langages = [
  { name: 'HTML5', icon: 'devicon-html5-plain colored' },
  { name: 'CSS3', icon: 'devicon-css3-plain colored' },
  { name: 'SCSS', icon: 'devicon-sass-original colored' },
  { name: 'JavaScript', icon: 'devicon-javascript-plain colored' },
  { name: 'TypeScript', icon: 'devicon-typescript-plain colored' },
  { name: 'React', icon: 'devicon-react-original colored' },
  { name: 'Angular', icon: 'devicon-angular-plain colored' },
  { name: 'PHP', icon: 'devicon-php-plain colored' },
  { name: 'Symfony', icon: 'devicon-symfony-original text-white' },
  { name: 'SQL', icon: 'devicon-mysql-plain colored' },
  { name: 'Tailwind', icon: 'devicon-tailwindcss-original colored' },
  { name: 'Bootstrap', icon: 'devicon-bootstrap-plain colored' },
  { name: 'Git', icon: 'devicon-git-plain colored' },
  { name: 'Docker', icon: 'devicon-docker-plain colored' }
];

const Logiciels = [
  { name: 'Photoshop', custom: <PhotoshopIcon /> },
  { name: 'Illustrator', custom: <IllustratorIcon /> },
  { name: 'InDesign', custom: <InDesignIcon /> },
  { name: 'Premiere Pro', custom: <PremiereIcon /> },
  { name: 'After Effects', custom: <AfterEffectsIcon /> },
  { name: 'Adobe XD', custom: <XdIcon /> },
  { name: 'Figma', icon: 'devicon-figma-plain colored' },
  { name: 'Blender', icon: 'devicon-blender-original colored' },
  { name: 'Unity', custom: <UnityIcon /> },
  { name: 'Godot', icon: 'devicon-godot-plain colored' },
  { name: 'GitHub', icon: 'devicon-github-original text-white' },
  { name: 'GitLab', icon: 'devicon-gitlab-plain colored' },
  { name: 'WordPress', icon: 'devicon-wordpress-plain text-[#21759B]' },
  { name: 'Jira', icon: 'devicon-jira-plain colored' },
  { name: 'Trello', icon: 'devicon-trello-plain colored' },
  { name: 'Canva', icon: 'devicon-canva-original colored' }
];

const Skills = () => {
  return (
    <section className="min-h-screen bg-[#111111] pt-32 pb-24 text-white">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">

        {/* Bouton retour */}
        <div className="mb-14">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-white/50 hover:text-white transition-colors mb-8 text-[13px] uppercase tracking-[0.2em]"
          >
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

        <div className="space-y-12">
          
          {/* Bloc Présentation / Profil */}
          <div className="bg-white/[0.02] border border-white/10 p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              <div className="lg:col-span-6 space-y-5">
                <h2 className="text-[12px] font-bold uppercase tracking-[0.3em] text-white/40 pb-2 border-b border-white/10">
                  Sebastian Chisiu
                </h2>
                <p className="text-[15px] text-white/70 font-light leading-[1.8]">
                  Je suis Alex, développeur web en formation en 3ᵉ année de B.U.T MMI à l'Université Gustave Eiffel.<br /><br />
                  Passionné par le développement web et la création numérique, je combine compétences techniques, design et audiovisuel pour concevoir des expériences web modernes et interactives.
                  Curieux et polyvalent, j'aime transformer des idées en projets concrets, de la conception à la réalisation.<br /><br />
                  Je recherche actuellement une alternance en développement web pour continuer à progresser et mettre mes compétences au service de projets ambitieux.
                </p>
              </div>

              <div className="lg:col-span-3 space-y-5">
                <h2 className="text-[12px] font-bold uppercase tracking-[0.3em] text-white/40 pb-2 border-b border-white/10">
                  Langues
                </h2>
                <ul className="space-y-4 text-[15px] text-white/70 font-light">
                  <li>
                    <span className="font-medium text-white block">Français</span>
                    <span className="text-[13px] text-white/40">Langue maternelle</span>
                  </li>
                  <li>
                    <span className="font-medium text-white block">Roumain</span>
                    <span className="text-[13px] text-white/40">Langue maternelle</span>
                  </li>
                  <li>
                    <span className="font-medium text-white block">Anglais</span>
                    <span className="text-[13px] text-white/40">Niveau B2</span>
                  </li>
                  <li>
                    <span className="font-medium text-white block">Espagnol</span>
                    <span className="text-[13px] text-white/40">Niveau B1</span>
                  </li>
                </ul>
              </div>

              <div className="lg:col-span-3 space-y-5">
                <h2 className="text-[12px] font-bold uppercase tracking-[0.3em] text-white/40 pb-2 border-b border-white/10">
                  Profil & Méthode
                </h2>
                <ul className="space-y-4 text-[15px] text-white/70 font-light">
                  <li>
                    <span className="font-medium text-white block">Créativité</span>
                    <span className="text-[13px] text-white/40">Passionné d'univers visuels</span>
                  </li>
                  <li>
                    <span className="font-medium text-white block">Autonomie</span>
                    <span className="text-[13px] text-white/40">Gestion de projet de A à Z</span>
                  </li>
                  <li>
                    <span className="font-medium text-white block">Rigueur</span>
                    <span className="text-[13px] text-white/40">Méthodes agiles & organisation</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Deux colonnes : Langages & Logiciels */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Langages de programmation */}
            <div className="bg-white/[0.02] border border-white/10 p-6 md:p-8">
              <h2 className="text-[13px] font-bold uppercase tracking-[0.25em] text-white/50 mb-8 pb-3 border-b border-white/10">
                Langages de programmation
              </h2>
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4">
                {Langages.map((lang) => (
                  <div
                    key={lang.name}
                    className="flex flex-col items-center justify-center p-4 bg-white/[0.02] border border-white/10 hover:border-white/30 transition-colors text-center"
                  >
                    <i className={`${lang.icon} text-[36px] mb-3`} />
                    <span className="text-[11px] font-mono tracking-wider text-white/70">
                      {lang.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Logiciels & Outils */}
            <div className="bg-white/[0.02] border border-white/10 p-6 md:p-8">
              <h2 className="text-[13px] font-bold uppercase tracking-[0.25em] text-white/50 mb-8 pb-3 border-b border-white/10">
                Logiciels & Outils
              </h2>
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4">
                {Logiciels.map((tool) => (
                  <div
                    key={tool.name}
                    className="flex flex-col items-center justify-center p-4 bg-white/[0.02] border border-white/10 hover:border-white/30 transition-colors text-center"
                  >
                    {tool.custom ? (
                      tool.custom
                    ) : (
                      <i className={`${tool.icon} text-[36px] mb-3`} />
                    )}
                    <span className="text-[11px] font-mono tracking-wider text-white/70">
                      {tool.name}
                    </span>
                  </div>
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
