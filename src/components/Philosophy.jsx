import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { BookOpen, HeartHandshake, Activity, Sparkles, Check, Compass } from 'lucide-react';

export default function Philosophy() {
  const { language, t } = useLanguage();

  const iconMap = {
    BookOpen: BookOpen,
    HeartHandshake: HeartHandshake,
    Activity: Activity,
    Sparkles: Sparkles
  };

  return (
    <section id="philosophy" className="py-16 sm:py-24 bg-[#FFFDF7] relative border-y border-[#D99A32]/20">
      
      {/* Decorative background mandala accents */}
      <div className="absolute top-0 right-1/4 w-72 h-72 bg-[#D99A32]/5 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-[#72A84A]/5 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D99A32]/15 text-[#B57B1B] text-xs font-bold uppercase tracking-wider mb-3">
            <Compass className="w-3.5 h-3.5" />
            <span>{t.philosophy.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#245C36] tracking-tight mb-4">
            {t.philosophy.title}
          </h2>
          <p className="text-base sm:text-lg text-[#263329]/80 leading-relaxed">
            {t.philosophy.description}
          </p>
        </div>

        {/* 4 Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {t.philosophy.pillars.map((pillar) => {
            const IconComponent = iconMap[pillar.icon] || Sparkles;

            return (
              <div
                key={pillar.id}
                className="group relative bg-[#FFF9EC] rounded-2xl p-6 sm:p-7 border border-[#D99A32]/30 shadow-xs hover:shadow-xl hover:border-[#245C36] transition-all duration-300 flex flex-col justify-between transform hover:-translate-y-1.5"
              >
                {/* Top Badge & Number */}
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-13 h-13 rounded-2xl bg-gradient-to-tr from-[#245C36] to-[#72A84A] text-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                      <IconComponent className="w-6 h-6 text-[#FFF9EC]" />
                    </div>
                    <span className="text-3xl font-black text-[#D99A32]/35 group-hover:text-[#D99A32] transition-colors">
                      0{pillar.id}
                    </span>
                  </div>

                  {/* Pillar Titles */}
                  <h3 className="text-lg sm:text-xl font-bold text-[#245C36] mb-1 group-hover:text-[#1A4428] transition-colors">
                    {language === 'hi' ? pillar.sanskrit : pillar.english}
                  </h3>
                  <div className="text-xs font-semibold text-[#D99A32] mb-3">
                    {language === 'hi' ? pillar.english : pillar.sanskrit}
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-[#4B594E] leading-relaxed mb-5">
                    {pillar.desc}
                  </p>
                </div>

                {/* Sub-tags */}
                <div className="pt-4 border-t border-[#D99A32]/20 flex flex-wrap gap-1.5">
                  {pillar.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="inline-flex items-center gap-1 text-[11px] font-medium bg-[#FFFDF7] text-[#245C36] px-2 py-0.5 rounded-md border border-[#72A84A]/30"
                    >
                      <Check className="w-3 h-3 text-[#72A84A]" />
                      <span>{tag}</span>
                    </span>
                  ))}
                </div>

                {/* Bottom decorative bar */}
                <div className="absolute bottom-0 left-6 right-6 h-1 bg-gradient-to-r from-transparent via-[#D99A32] to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-full" />
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
