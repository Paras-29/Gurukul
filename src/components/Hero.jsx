import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Sparkles, ArrowRight, BookOpen, Sun, ShieldCheck, TreePine } from 'lucide-react';

export default function Hero() {
  const { t } = useLanguage();

  const scrollToSection = (id) => {
    const element = document.querySelector(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="relative overflow-hidden bg-mandala-pattern pt-8 pb-16 lg:pt-16 lg:pb-24 border-b border-[#D99A32]/20">
      
      {/* Decorative Botanical & Sacred Motifs in background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#72A84A]/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#D99A32]/10 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20" />

      {/* Decorative traditional corner borders */}
      <div className="hidden sm:block absolute top-6 left-6 text-[#D99A32]/30 select-none pointer-events-none">
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
          <path d="M0 0 H40 M0 0 V40 M0 8 H32 M8 0 V32" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      </div>
      <div className="hidden sm:block absolute top-6 right-6 text-[#D99A32]/30 select-none pointer-events-none rotate-90">
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
          <path d="M0 0 H40 M0 0 V40 M0 8 H32 M8 0 V32" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Text & CTAs (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Institution Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#245C36]/10 border border-[#245C36]/25 text-[#245C36] text-xs sm:text-sm font-bold mb-5 shadow-xs">
              <TreePine className="w-4 h-4 text-[#72A84A]" />
              <span>{t.hero.badge}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#D99A32]" />
              <span className="text-[#D99A32] italic font-serif">सा विद्या या विमुक्तये</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold text-[#245C36] leading-[1.2] tracking-tight mb-6">
              <span className="block">{t.hero.title}</span>
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-[#263329]/90 leading-relaxed max-w-2xl mb-8 font-normal">
              {t.hero.description}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-8">
              <button
                onClick={() => scrollToSection('#admissions')}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#D99A32] to-[#B57B1B] hover:from-[#F2AE3B] hover:to-[#D99A32] text-white font-bold text-base shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <Sparkles className="w-5 h-5 text-[#FFF9EC]" />
                <span>{t.hero.btnPrimary}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => scrollToSection('#about')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#FFFDF7] hover:bg-[#FFF9EC] text-[#245C36] font-bold text-base border-2 border-[#245C36] shadow-sm hover:shadow-md transition-all"
              >
                <BookOpen className="w-5 h-5 text-[#72A84A]" />
                <span>{t.hero.btnSecondary}</span>
              </button>
            </div>

            {/* Trust / Presentation demo disclaimer */}
            <div className="flex items-center gap-2 text-xs font-semibold text-[#4B594E] bg-[#FFFDF7] px-3.5 py-1.5 rounded-lg border border-[#D99A32]/30">
              <ShieldCheck className="w-4 h-4 text-[#72A84A] shrink-0" />
              <span>{t.hero.trustNotice}</span>
            </div>

          </div>

          {/* Right Column: Visual Frame with Gurukul imagery & Floating Badge (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer Decorative Glow & Borders */}
              <div className="absolute -inset-3 bg-gradient-to-tr from-[#D99A32]/30 via-[#72A84A]/20 to-[#245C36]/30 rounded-3xl blur-md transform -rotate-1" />
              
              {/* Main Card with High-Res Gurukul Campus Image */}
              <div className="relative bg-[#FFFDF7] p-3 rounded-2xl shadow-2xl border-2 border-[#D99A32]/40 overflow-hidden">
                <div className="relative h-80 sm:h-96 w-full rounded-xl overflow-hidden group">
                  <img
                    src="https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&w=1200&q=80"
                    alt="Sanskriti Arya Gurukulam serene educational environment"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#245C36]/80 via-transparent to-black/20" />

                  {/* Caption on image */}
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="inline-block bg-[#D99A32] text-xs font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-md mb-1.5 shadow-xs">
                      ऋषि परंपरा • आधुनिक दृष्टि
                    </span>
                    <p className="text-sm sm:text-base font-bold text-[#FFF9EC] drop-shadow-md">
                      पवित्र हरित वातावरण एवं प्राकृतिक सानिध्य
                    </p>
                  </div>
                </div>

                {/* Floating Medallion Badge */}
                <div className="absolute -top-4 -right-4 bg-[#FFFDF7] border-2 border-[#D99A32] p-2 rounded-2xl shadow-xl flex items-center gap-2">
                  <img src="/logo.svg" alt="Gurukul Emblem" className="w-10 h-10 object-contain" />
                  <div className="text-left pr-2">
                    <div className="text-[11px] font-extrabold text-[#245C36] uppercase tracking-wider">संस्कृति आर्य</div>
                    <div className="text-[10px] font-semibold text-[#D99A32]">गुरुकुलम</div>
                  </div>
                </div>

                {/* Bottom floating achievement tag */}
                <div className="mt-3 pt-2.5 border-t border-[#D99A32]/20 flex items-center justify-between text-xs text-[#263329] px-2 font-medium">
                  <span className="flex items-center gap-1.5 text-[#245C36] font-bold">
                    <Sun className="w-4 h-4 text-[#D99A32]" />
                    <span>वैदिक संस्कार एवं स्वावलंबन</span>
                  </span>
                  <span className="text-[#72A84A] font-bold">सत्र २०२६-२७</span>
                </div>

              </div>
            </div>
          </div>

        </div>

        {/* 4 Feature Cards / Stat Highlights below Hero */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {t.hero.stats.map((stat, idx) => (
            <div 
              key={idx}
              className="bg-[#FFFDF7] p-5 rounded-xl border border-[#D99A32]/25 shadow-xs hover:shadow-md hover:border-[#72A84A] transition-all group"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-2xl font-black text-[#245C36] group-hover:text-[#D99A32] transition-colors">
                  {stat.value}
                </span>
                <span className="w-7 h-7 rounded-full bg-[#72A84A]/15 text-[#245C36] flex items-center justify-center font-bold text-xs">
                  {idx + 1}
                </span>
              </div>
              <h2 className="text-base font-bold text-[#263329] mb-1">
                {stat.label}
              </h2>
              <p className="text-xs text-[#4B594E]">
                {stat.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
