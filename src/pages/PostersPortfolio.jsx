import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { postersData } from '../data/posters';
import LazyImage from '../components/LazyImage';

const PostersPortfolio = () => {
  const [sortConfig, setSortConfig] = useState({ key: 'date', direction: 'desc' });
  const [activeMarque, setActiveMarque] = useState('Toutes');
  const [activeLogiciel, setActiveLogiciel] = useState('Tous');
  const [searchQuery, setSearchQuery] = useState('');

  // Filtres uniques
  const marques = ['Toutes', ...new Set(postersData.map(p => p.marque))];
  const logiciels = ['Tous', ...new Set(postersData.map(p => p.logiciel))];

  const handleSort = (key) => {
    setSortConfig((prev) => ({
      key,
      direction: prev.key === key && prev.direction === 'asc' ? 'desc' : 'asc',
    }));
  };

  const filteredAndSortedPosters = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    let result = postersData;

    if (query) {
      result = result.filter(p =>
        p.titre?.toLowerCase().includes(query) ||
        p.marque?.toLowerCase().includes(query) ||
        p.modele?.toLowerCase().includes(query) ||
        p.logiciel?.toLowerCase().includes(query) ||
        p.description?.toLowerCase().includes(query)
      );
    }

    if (activeMarque !== 'Toutes') {
      result = result.filter(p => p.marque === activeMarque);
    }
    if (activeLogiciel !== 'Tous') {
      result = result.filter(p => p.logiciel === activeLogiciel);
    }

    result = [...result].sort((a, b) => {
      const valA = a[sortConfig.key] || '';
      const valB = b[sortConfig.key] || '';
      if (valA < valB) return sortConfig.direction === 'asc' ? -1 : 1;
      if (valA > valB) return sortConfig.direction === 'asc' ? 1 : -1;
      return 0;
    });

    return result;
  }, [sortConfig, activeMarque, activeLogiciel, searchQuery]);

  const handleResetFilters = () => {
    setSearchQuery('');
    setActiveMarque('Toutes');
    setActiveLogiciel('Tous');
  };

  return (
    <section className="min-h-screen bg-[#111111] pt-32 pb-24 text-white">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        
        <Link to="/portfolio" className="inline-flex items-center gap-2 text-white/50 hover:text-white transition-colors mb-12 text-[13px] uppercase tracking-[0.2em]">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
          </svg>
          Retour aux projets
        </Link>

        <h1 className="text-[clamp(2.5rem,5vw,5rem)] font-light leading-[1.1] mb-4 text-white">
          Posters
        </h1>
        <p className="text-[16px] text-white/40 mb-12 max-w-[500px]">
          Galerie de mes créations de posters et affiches automobiles.
        </p>

        {/* Barre de recherche */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mb-8"
        >
          <div className="relative w-full max-w-xl">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-white/40">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
              </svg>
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Trouver un poster (modèle, marque, logiciel...)"
              className="w-full bg-[#181818] border border-white/15 focus:border-white text-white text-[14px] pl-12 pr-10 py-3.5 outline-none transition-all placeholder:text-white/30 font-light"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute inset-y-0 right-0 pr-4 flex items-center text-white/40 hover:text-white transition-colors cursor-pointer"
                aria-label="Effacer la recherche"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>
        </motion.div>

        {/* Filtres et tri */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-12 pb-6 border-b border-white/10">
          
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="text-[11px] uppercase tracking-[0.2em] text-white/30 mr-2">Marque:</span>
              <select 
                value={activeMarque} 
                onChange={(e) => setActiveMarque(e.target.value)}
                className="bg-transparent border border-white/20 text-white text-[13px] px-3 py-1.5 outline-none cursor-pointer"
              >
                {marques.map(m => <option key={m} value={m} className="bg-black text-white">{m}</option>)}
              </select>
            </div>
            
            <div className="flex items-center gap-2">
              <span className="text-[11px] uppercase tracking-[0.2em] text-white/30 mr-2">Logiciel:</span>
              <select 
                value={activeLogiciel} 
                onChange={(e) => setActiveLogiciel(e.target.value)}
                className="bg-transparent border border-white/20 text-white text-[13px] px-3 py-1.5 outline-none cursor-pointer"
              >
                {logiciels.map(l => <option key={l} value={l} className="bg-black text-white">{l}</option>)}
              </select>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-6">
            <span className="text-[12px] text-white/40 font-light uppercase tracking-wider">
              {filteredAndSortedPosters.length} {filteredAndSortedPosters.length > 1 ? 'posters' : 'poster'}
            </span>

            <div className="flex items-center gap-4">
              <span className="text-[11px] uppercase tracking-[0.2em] text-white/30 hidden md:block">Trier par:</span>
              <button 
                onClick={() => handleSort('modele')} 
                className={`text-[12px] uppercase tracking-wide transition-colors cursor-pointer ${sortConfig.key === 'modele' ? 'text-white border-b border-white' : 'text-white/40 hover:text-white'}`}
              >
                Modèle
              </button>
              <button 
                onClick={() => handleSort('marque')} 
                className={`text-[12px] uppercase tracking-wide transition-colors cursor-pointer ${sortConfig.key === 'marque' ? 'text-white border-b border-white' : 'text-white/40 hover:text-white'}`}
              >
                Marque
              </button>
              <button 
                onClick={() => handleSort('date')} 
                className={`text-[12px] uppercase tracking-wide transition-colors cursor-pointer ${sortConfig.key === 'date' ? 'text-white border-b border-white' : 'text-white/40 hover:text-white'}`}
              >
                Date
              </button>
            </div>
          </div>

        </div>

        {/* Grille des posters */}
        {filteredAndSortedPosters.length === 0 ? (
          <div className="py-20 flex flex-col items-center justify-center text-center border border-white/10 bg-[#151515] p-8">
            <div className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center mb-4 text-white/30">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
              </svg>
            </div>
            <h3 className="text-xl text-white font-light mb-2">Aucun poster trouvé</h3>
            <p className="text-white/40 text-[14px] max-w-md mb-6 font-light">
              Aucun résultat ne correspond à votre recherche.
            </p>
            <button
              onClick={handleResetFilters}
              className="px-6 py-2.5 bg-white text-black text-[12px] uppercase tracking-widest hover:bg-white/90 transition-colors cursor-pointer font-medium"
            >
              Réinitialiser les filtres
            </button>
          </div>
        ) : (
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence>
              {filteredAndSortedPosters.map((poster) => (
                <motion.div
                  layout
                  key={poster.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className="group relative overflow-hidden bg-black border border-white/10"
                >
                  <Link to={`/posters/${poster.id}`} className="block h-full w-full">
                    <div className="aspect-[3/4] w-full bg-[#111111]">
                      <LazyImage 
                        src={poster.imagemain} 
                        alt={poster.titre} 
                        fallbackTitle={poster.titre}
                        className="w-full h-full object-cover opacity-80 transition-all duration-700 group-hover:opacity-100 group-hover:scale-105" 
                      />
                    </div>
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent pointer-events-none" />
                    
                    <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col justify-end pointer-events-none">
                      <span className="text-[10px] uppercase tracking-[0.3em] text-white/50 mb-2">
                        {poster.marque} • {poster.modele}
                      </span>
                      <h3 className="text-2xl text-white font-light mb-1">
                        {poster.titre}
                      </h3>
                      <div className="flex items-center justify-between mt-2 border-t border-white/10 pt-3">
                        <span className="text-[11px] text-white/40 uppercase tracking-[0.2em]">
                          {poster.logiciel}
                        </span>
                        <span className="text-[11px] text-white/40 font-mono">
                          {poster.date}
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        )}

      </div>
    </section>
  );
};

export default PostersPortfolio;
