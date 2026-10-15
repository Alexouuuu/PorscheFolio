import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#0d0d0d] border-t border-white/[0.06]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-16 md:py-20">
        <div className="mb-16">
          <Link to="/" className="text-[18px] font-bold tracking-[0.35em] uppercase text-white hover:opacity-70 transition-opacity">
            Chisiu Sebastian
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-20">
          <div>
            <h4 className="text-[14px] font-bold text-white mb-5">Navigation</h4>
            <ul className="space-y-3">
              <li><Link to="/portfolio" className="text-[14px] text-white/40 hover:text-white transition-colors">Projets</Link></li>
              <li><Link to="/skills" className="text-[14px] text-white/40 hover:text-white transition-colors">Compétences</Link></li>
              <li><Link to="/experience" className="text-[14px] text-white/40 hover:text-white transition-colors">Parcours</Link></li>
              <li><Link to="/contact" className="text-[14px] text-white/40 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-[14px] font-bold text-white mb-5">Réseaux</h4>
            <ul className="space-y-3">
              <li><a href="https://www.instagram.com/alexou7575/" target="_blank" rel="noreferrer" className="text-[14px] text-white/40 hover:text-white transition-colors">Instagram</a></li>
              <li><a href="https://www.linkedin.com/in/sebastian-chisiu-a115bb338/" target="_blank" rel="noreferrer" className="text-[14px] text-white/40 hover:text-white transition-colors">LinkedIn</a></li>
              <li><a href="https://github.com/Alexouuuu" target="_blank" rel="noreferrer" className="text-[14px] text-white/40 hover:text-white transition-colors">GitHub</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/[0.06] flex flex-col md:flex-row justify-between items-center gap-4">
          <span className="text-[13px] text-white/25">
            © {new Date().getFullYear()} Chisiu Sebastian. Tous droits réservés.
          </span>
          <span className="text-[13px] text-white/15">
            Inspiré par Porsche.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
