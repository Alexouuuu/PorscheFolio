import React, { useEffect, useState, useMemo, useCallback } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { carsData } from '../data/cars';
import LazyImage from '../components/LazyImage';

const CarPage = () => {
  const { id } = useParams();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const car = useMemo(() => {
    return carsData.find(c => c.id === parseInt(id, 10));
  }, [id]);

  useEffect(() => {
    window.scrollTo(0, 0);
    setCurrentImageIndex(0);
  }, [id]);

  const images = useMemo(() => {
    if (!car) return [];
    return car.images && car.images.length > 0 
      ? car.images 
      : (car.imagemain ? [car.imagemain] : []);
  }, [car]);

  const nextImage = useCallback((e) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    if (images.length > 0) {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }
  }, [images.length]);

  const prevImage = useCallback((e) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    if (images.length > 0) {
      setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
    }
  }, [images.length]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (images.length <= 1) return;
      if (e.key === 'ArrowLeft') prevImage();
      if (e.key === 'ArrowRight') nextImage();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [images.length, prevImage, nextImage]);

  if (!car) {
    return <Navigate to="/automotive" replace />;
  }

  return (
    <section className="min-h-screen bg-[#111111] pt-32 pb-24">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        
        <Link to="/automotive" className="inline-flex items-center gap-2 text-white/50 hover:text-white transition-colors mb-12 text-[13px] uppercase tracking-[0.2em]">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" /></svg>
          Retour à la galerie
        </Link>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          
          <div className="w-full lg:w-3/5">
            <div className="relative aspect-[4/3] w-full border border-white/10 overflow-hidden bg-black group shadow-2xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentImageIndex}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.35 }}
                  className="w-full h-full"
                >
                  <LazyImage
                    src={images[currentImageIndex]}
                    alt={`${car.nom} - vue ${currentImageIndex + 1}`}
                    fallbackTitle={car.nom}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </AnimatePresence>

              {images.length > 1 && (
                <>
                  <button 
                    type="button"
                    onClick={(e) => prevImage(e)} 
                    className="absolute left-3 md:left-4 top-1/2 -translate-y-1/2 z-30 bg-black/75 hover:bg-white hover:text-black backdrop-blur-md border border-white/25 text-white w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-all duration-200 cursor-pointer shadow-2xl active:scale-90 opacity-90 md:opacity-0 md:group-hover:opacity-100"
                    aria-label="Image précédente"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" /></svg>
                  </button>
                  <button 
                    type="button"
                    onClick={(e) => nextImage(e)} 
                    className="absolute right-3 md:right-4 top-1/2 -translate-y-1/2 z-30 bg-black/75 hover:bg-white hover:text-black backdrop-blur-md border border-white/25 text-white w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-all duration-200 cursor-pointer shadow-2xl active:scale-90 opacity-90 md:opacity-0 md:group-hover:opacity-100"
                    aria-label="Image suivante"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" /></svg>
                  </button>
                  
                  <div className="absolute top-4 right-4 z-30 bg-black/80 backdrop-blur-sm border border-white/15 px-3 py-1 text-[11px] text-white/80 font-mono tracking-wider">
                    0{currentImageIndex + 1} / 0{images.length}
                  </div>

                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 flex gap-1.5 pointer-events-auto">
                    {images.map((_, idx) => (
                      <button 
                        key={idx}
                        type="button"
                        onClick={(e) => { e.preventDefault(); e.stopPropagation(); setCurrentImageIndex(idx); }}
                        className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${idx === currentImageIndex ? 'bg-white w-8' : 'bg-white/30 hover:bg-white/70 w-2.5'}`}
                        aria-label={`Aller à la vue ${idx + 1}`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
            {images.length > 1 && (
               <div className="mt-4">
                  <p className="text-[11px] uppercase tracking-[0.2em] text-white/40 mb-2">Vues du véhicule ({images.length})</p>
                  <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
                    {images.map((img, idx) => (
                      <button 
                        key={idx}
                        type="button"
                        onClick={(e) => { e.preventDefault(); e.stopPropagation(); setCurrentImageIndex(idx); }}
                        className={`relative flex-shrink-0 w-24 md:w-28 aspect-[4/3] border overflow-hidden transition-all duration-300 cursor-pointer ${
                          idx === currentImageIndex 
                            ? 'border-white opacity-100 ring-2 ring-white scale-[1.02]' 
                            : 'border-white/15 opacity-40 hover:opacity-90 hover:border-white/40'
                        }`}
                        aria-label={`Sélectionner l'image ${idx + 1}`}
                      >
                        <LazyImage 
                          src={img} 
                          alt={`Miniature ${idx + 1}`} 
                          fallbackTitle={`${idx + 1}`}
                          className="w-full h-full object-cover" 
                        />
                        {idx === currentImageIndex && (
                          <div className="absolute bottom-0 left-0 right-0 h-1 bg-white" />
                        )}
                      </button>
                    ))}
                  </div>
               </div>
            )}
          </div>

          <div className="w-full lg:w-2/5 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="flex items-center gap-4 mb-4">
                <span className="text-[11px] text-white/40 uppercase tracking-[0.3em]">{car.marque}</span>
                <span className="w-1 h-1 bg-white/20 rounded-full" />
                <span className="text-[11px] text-white/40 uppercase tracking-[0.3em]">{car.modele}</span>
              </div>
              
              <h1 className="text-[clamp(2.5rem,4vw,4rem)] font-light text-white leading-[1.1] mb-6">
                {car.nom}
              </h1>

              <div className="flex items-center gap-4 mb-10 pb-10 border-b border-white/10">
                <span className="px-3 py-1 border border-white/20 text-white/60 text-[11px] uppercase tracking-[0.2em]">
                  {car.type}
                </span>
                <span className="text-white/40 text-[12px] uppercase tracking-[0.2em]">
                  {car.date}
                </span>
              </div>

              <div className="mb-10">
                <h3 className="text-[10px] uppercase tracking-[0.2em] text-white/30 mb-4">Description</h3>
                <p className="text-[16px] leading-relaxed text-white/70 font-light">
                  {car.description}
                </p>
              </div>

              {car.appareil && (
                <div className="bg-white/5 p-6 border border-white/10">
                  <h3 className="text-[10px] uppercase tracking-[0.2em] text-white/40 mb-3">
                    Matériel Utilisé ({car.type})
                  </h3>
                  <div className="flex items-start gap-4">
                    <div className="mt-1">
                      {car.type === 'Vidéo' ? (
                        <svg className="w-5 h-5 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z" />
                        </svg>
                      ) : (
                        <svg className="w-5 h-5 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z" />
                        </svg>
                      )}
                    </div>
                    <p className="text-white text-[15px] font-light">
                      {car.appareil}
                    </p>
                  </div>
                </div>
              )}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CarPage;
