import React from 'react';

const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-[#0a0a0a]">
      <div className="absolute inset-0 bg-[#0a0a0a]" />

      <div className="absolute inset-0 flex items-end pb-40 md:pb-48">
        <div className="w-full max-w-[1400px] mx-auto px-6 md:px-10">
          <div>
            <h1 className="text-[clamp(3rem,7vw,6.5rem)] font-light leading-[1.05] mb-10 max-w-[800px]">
              Designer &<br />
              Développeur<br />
              Créatif.
            </h1>

            <a href="#projects" className="p-ghost-btn">
              En savoir plus
            </a>
          </div>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-white/60 hover:text-white transition-colors"
      >
        <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </a>
    </section>
  );
};

export default Hero;
