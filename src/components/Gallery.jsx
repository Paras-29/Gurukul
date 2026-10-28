import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { galleryCategories, galleryData } from '../data/galleryData';
import { Camera, Maximize2, X, ChevronLeft, ChevronRight, Sparkles, Image as ImageIcon } from 'lucide-react';

export default function Gallery() {
  const { language, t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState('all');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const filteredItems = activeCategory === 'all'
    ? galleryData
    : galleryData.filter(item => item.category === activeCategory);

  const openLightbox = (index) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const prevLightbox = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev === 0 ? filteredItems.length - 1 : prev - 1));
    }
  };

  const nextLightbox = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev === filteredItems.length - 1 ? 0 : prev + 1));
    }
  };

  return (
    <section id="gallery" className="py-16 sm:py-24 bg-[#FFF9EC] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#245C36]/15 text-[#245C36] text-xs font-bold uppercase tracking-wider mb-3">
            <Camera className="w-3.5 h-3.5 text-[#D99A32]" />
            <span>{t.gallery.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#245C36] tracking-tight mb-4">
            {t.gallery.title}
          </h2>
          <p className="text-base sm:text-lg text-[#263329]/80 leading-relaxed">
            {t.gallery.description}
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-10">
          {galleryCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-[#245C36] text-[#FFF9EC] shadow-md scale-105'
                  : 'bg-[#FFFDF7] text-[#263329] hover:bg-[#72A84A]/15 hover:text-[#245C36] border border-[#D99A32]/25'
              }`}
            >
              {cat.label[language]}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {filteredItems.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => openLightbox(idx)}
              className="group relative h-64 sm:h-72 rounded-2xl overflow-hidden cursor-pointer shadow-xs hover:shadow-2xl border border-[#D99A32]/30 transition-all duration-300 transform hover:-translate-y-1"
            >
              <img
                src={item.src}
                alt={item.title[language]}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-70 group-hover:opacity-90 transition-opacity" />

              {/* Hover Zoom Icon */}
              <div className="absolute top-3 right-3 w-9 h-9 rounded-full bg-[#FFFDF7]/90 text-[#245C36] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:scale-105 shadow-md">
                <Maximize2 className="w-4 h-4" />
              </div>

              {/* Title & Caption */}
              <div className="absolute bottom-3 left-3 right-3 text-white">
                <h4 className="text-sm font-bold text-[#FFF9EC] mb-1 line-clamp-1 drop-shadow-xs">
                  {item.title[language]}
                </h4>
                <p className="text-[11px] text-white/80 line-clamp-2 leading-tight">
                  {item.caption[language]}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Note at bottom of gallery */}
        <p className="text-center text-xs text-[#4B594E] mt-8 italic">
          * {t.gallery.clickToEnlarge} • छायाचित्र केवल परिचयात्मक उद्देश्य हेतु प्रदर्शित हैं
        </p>

      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && filteredItems[lightboxIndex] && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 animate-in fade-in duration-200">
          
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-5 right-5 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors z-50 cursor-pointer"
            aria-label="Close"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Previous image */}
          <button
            onClick={prevLightbox}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors z-50 cursor-pointer"
            aria-label="Previous"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next image */}
          <button
            onClick={nextLightbox}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors z-50 cursor-pointer"
            aria-label="Next"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Image & Caption Box */}
          <div className="max-w-4xl w-full flex flex-col items-center">
            <div className="relative max-h-[75vh] w-auto overflow-hidden rounded-xl border border-white/20 shadow-2xl">
              <img
                src={filteredItems[lightboxIndex].src}
                alt={filteredItems[lightboxIndex].title[language]}
                className="max-h-[75vh] w-auto object-contain mx-auto"
              />
            </div>

            <div className="mt-4 text-center text-white max-w-2xl px-4">
              <h3 className="text-lg font-bold text-[#F2AE3B] mb-1">
                {filteredItems[lightboxIndex].title[language]}
              </h3>
              <p className="text-xs sm:text-sm text-white/90">
                {filteredItems[lightboxIndex].caption[language]}
              </p>
              <div className="text-[11px] text-white/60 mt-2">
                {lightboxIndex + 1} / {filteredItems.length}
              </div>
            </div>
          </div>

        </div>
      )}

    </section>
  );
}
