import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { testimonialsData } from '../data/testimonialsData';
import { Quote, ChevronLeft, ChevronRight, Star, Heart, Sparkles, AlertCircle } from 'lucide-react';

export default function Testimonials() {
  const { language, t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonialsData.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === testimonialsData.length - 1 ? 0 : prev + 1));
  };

  // Optional auto-slide every 7s
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev === testimonialsData.length - 1 ? 0 : prev + 1));
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const current = testimonialsData[currentIndex];

  return (
    <section className="py-16 sm:py-24 bg-[#FFFDF7] relative border-b border-[#D99A32]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#72A84A]/15 text-[#245C36] text-xs font-bold uppercase tracking-wider mb-3">
            <Heart className="w-3.5 h-3.5 text-[#D99A32]" />
            <span>{t.testimonials.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#245C36] tracking-tight mb-4">
            {t.testimonials.title}
          </h2>
          <p className="text-base sm:text-lg text-[#263329]/80 leading-relaxed mb-4">
            {t.testimonials.description}
          </p>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#FFF9EC] border border-[#D99A32]/30 text-xs text-[#4B594E] italic">
            <AlertCircle className="w-3.5 h-3.5 text-[#D99A32] shrink-0" />
            <span>{t.testimonials.demoTag}</span>
          </div>
        </div>

        {/* Testimonials Carousel Box */}
        <div className="max-w-4xl mx-auto relative">
          
          {/* Main Card */}
          <div className="relative bg-[#FFF9EC] rounded-3xl p-8 sm:p-12 border-2 border-[#D99A32]/30 shadow-xl transition-all duration-500 overflow-hidden">
            
            {/* Background Decorative Quote Marks */}
            <Quote className="w-24 h-24 text-[#D99A32]/10 absolute -top-4 -right-4 pointer-events-none" />
            
            <div className="flex flex-col items-center text-center relative z-10">
              
              {/* Star Ratings */}
              <div className="flex items-center gap-1 mb-6 text-[#D99A32]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#D99A32] text-[#D99A32]" />
                ))}
              </div>

              {/* Quote Text */}
              <p className="text-base sm:text-xl font-medium text-[#263329] leading-relaxed italic mb-8 max-w-2xl font-serif">
                {current.quote[language]}
              </p>

              {/* Author Info */}
              <div className="flex items-center gap-4">
                <img
                  src={current.avatar}
                  alt={current.name[language]}
                  className="w-14 h-14 rounded-full object-cover border-2 border-[#245C36] shadow-md"
                />
                <div className="text-left">
                  <h4 className="text-base font-bold text-[#245C36]">
                    {current.name[language]}
                  </h4>
                  <p className="text-xs font-semibold text-[#D99A32]">
                    {current.role[language]}
                  </p>
                  <p className="text-[11px] text-[#4B594E]">
                    {current.city[language]}
                  </p>
                </div>
              </div>

            </div>

          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center justify-between absolute top-1/2 -left-4 -right-4 -translate-y-1/2 pointer-events-none">
            <button
              onClick={prevSlide}
              className="w-11 h-11 rounded-full bg-[#FFFDF7] border-2 border-[#D99A32] text-[#245C36] hover:bg-[#245C36] hover:text-white shadow-lg flex items-center justify-center transition-all pointer-events-auto transform hover:scale-110 cursor-pointer"
              aria-label={t.testimonials.prevBtn}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              className="w-11 h-11 rounded-full bg-[#FFFDF7] border-2 border-[#D99A32] text-[#245C36] hover:bg-[#245C36] hover:text-white shadow-lg flex items-center justify-center transition-all pointer-events-auto transform hover:scale-110 cursor-pointer"
              aria-label={t.testimonials.nextBtn}
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex items-center justify-center gap-2 mt-6">
            {testimonialsData.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                  currentIndex === idx ? 'w-8 bg-[#245C36]' : 'w-2.5 bg-[#D99A32]/40 hover:bg-[#D99A32]'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
