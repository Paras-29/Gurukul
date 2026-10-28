import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { BookOpen, CheckCircle2, Sparkles, ChevronDown, ChevronUp, AlertCircle, Quote } from 'lucide-react';

export default function About() {
  const { t } = useLanguage();
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section id="about" className="py-16 sm:py-24 bg-[#FFF9EC] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#72A84A]/15 text-[#245C36] text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#D99A32]" />
            <span>{t.about.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#245C36] tracking-tight mb-4">
            {t.about.title}
          </h2>
          <p className="text-base sm:text-lg text-[#D99A32] font-semibold">
            {t.about.subtitle}
          </p>
        </div>

        {/* 2-Column Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Image with traditional frame and badge (5 cols) */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative">
              {/* Border decoration */}
              <div className="absolute -inset-2 bg-gradient-to-r from-[#D99A32] to-[#72A84A] rounded-2xl opacity-20 blur-sm" />
              
              <div className="relative bg-[#FFFDF7] p-2.5 rounded-2xl shadow-xl border border-[#D99A32]/30">
                <img
                  src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1200&q=80"
                  alt="Students and teacher in natural learning environment"
                  className="w-full h-80 sm:h-96 object-cover rounded-xl"
                />
                
                {/* Floating Sanskrit quote box */}
                <div className="mt-4 p-4 rounded-xl bg-[#245C36] text-[#FFF9EC] shadow-md border-l-4 border-[#D99A32]">
                  <div className="flex items-start gap-2.5">
                    <Quote className="w-6 h-6 text-[#D99A32] shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs sm:text-sm font-serif italic leading-relaxed text-[#FFFDF7]">
                        {t.about.quote}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative text & points (7 cols) */}
          <div className="lg:col-span-7 order-1 lg:order-2 text-left">
            
            <p className="text-base sm:text-lg text-[#263329] leading-relaxed mb-4">
              {t.about.p1}
            </p>
            <p className="text-sm sm:text-base text-[#4B594E] leading-relaxed mb-6">
              {t.about.p2}
            </p>

            {/* 4 Feature Points Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              {t.about.points.map((pt, idx) => (
                <div 
                  key={idx}
                  className="bg-[#FFFDF7] p-4 rounded-xl border border-[#D99A32]/25 shadow-2xs hover:border-[#245C36] transition-colors"
                >
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-[#72A84A] shrink-0 mt-0.5" />
                    <div>
                      <h3 className="text-sm font-bold text-[#245C36] mb-1">
                        {pt.title}
                      </h3>
                      <p className="text-xs text-[#4B594E] leading-normal">
                        {pt.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Expandable Extra Details */}
            {isExpanded && (
              <div className="mb-6 p-4 rounded-xl bg-[#FFFDF7] border-2 border-dashed border-[#72A84A]/40 text-sm text-[#263329] space-y-3 animate-in fade-in duration-300">
                <div className="font-bold text-[#245C36] flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-[#D99A32]" />
                  <span>प्राचीन गुरुकुल संस्कार एवं आधुनिक विज्ञान का संतुलन (Extended Overview)</span>
                </div>
                <p className="text-xs sm:text-sm text-[#4B594E] leading-relaxed">
                  गुरुकुल में प्रत्येक दिवस का प्रारंभ प्रकृति वंदन, प्राणायाम और गायत्री मंत्र के सामूहिक उच्चारण से होता है। पाठ्यक्रम में राष्ट्रीय शैक्षिक अनुसंधान के मानकों के साथ-साथ उपनिषदों की सूक्तियाँ, नैतिक जीवन कथाएँ, व्यावहारिक आयुर्वेद की बुनियादी समझ, और आत्मरक्षा के पारंपरिक अभ्यास सम्मिलित किए जाते हैं।
                </p>
                <div className="text-xs text-[#D99A32] font-semibold italic">
                  * हमारा लक्ष्य है: चरित्रवान, विवेकशील, और समाज के कल्याण के प्रति समर्पित नेतृत्वकर्ता तैयार करना।
                </div>
              </div>
            )}

            {/* Read More Toggle Button */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={() => setIsExpanded(!isExpanded)}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#245C36] hover:bg-[#1A4428] text-white text-sm font-bold shadow-md hover:shadow-lg transition-all"
              >
                <span>{isExpanded ? t.about.btnReadLess : t.about.btnReadMore}</span>
                {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </button>

              <span className="text-xs text-[#4B594E] flex items-center gap-1.5 italic">
                <AlertCircle className="w-3.5 h-3.5 text-[#D99A32] shrink-0" />
                <span>{t.about.placeholderNotice}</span>
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
