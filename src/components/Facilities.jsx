import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Landmark, AlertCircle, ArrowUpRight, Check, X } from 'lucide-react';

export default function Facilities() {
  const { t } = useLanguage();
  const [selectedFacility, setSelectedFacility] = useState(null);

  return (
    <section id="facilities" className="py-16 sm:py-24 bg-[#FFF9EC] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#72A84A]/15 text-[#245C36] text-xs font-bold uppercase tracking-wider mb-3">
            <Landmark className="w-3.5 h-3.5 text-[#D99A32]" />
            <span>{t.facilities.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#245C36] tracking-tight mb-4">
            {t.facilities.title}
          </h2>
          <p className="text-base sm:text-lg text-[#263329]/80 leading-relaxed mb-4">
            {t.facilities.description}
          </p>

          {/* Demo disclaimer pill */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#FFFDF7] border border-[#D99A32]/30 text-xs text-[#4B594E] italic">
            <AlertCircle className="w-3.5 h-3.5 text-[#D99A32] shrink-0" />
            <span>{t.facilities.demoDisclaimer}</span>
          </div>
        </div>

        {/* Facilities Grid (6 items) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {t.facilities.items.map((facility, idx) => (
            <div
              key={idx}
              className="bg-[#FFFDF7] rounded-2xl overflow-hidden border border-[#D99A32]/25 shadow-xs hover:shadow-xl hover:border-[#72A84A] transition-all duration-300 flex flex-col group"
            >
              {/* Image Container with Tag */}
              <div className="relative h-56 w-full overflow-hidden">
                <img
                  src={facility.image}
                  alt={facility.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                {/* Category tag */}
                <div className="absolute top-3 left-3 bg-[#245C36]/90 backdrop-blur-xs text-[#FFF9EC] text-xs font-bold px-2.5 py-1 rounded-md shadow-xs border border-[#72A84A]/30">
                  {facility.tag}
                </div>

                {/* Index badge */}
                <div className="absolute top-3 right-3 bg-[#FFFDF7]/90 text-[#245C36] text-xs font-black w-6 h-6 rounded-full flex items-center justify-center shadow-xs">
                  {idx + 1}
                </div>

                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <h3 className="text-base sm:text-lg font-bold drop-shadow-sm text-[#FFFDF7]">
                    {facility.title}
                  </h3>
                </div>
              </div>

              {/* Text Body */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <p className="text-xs sm:text-sm text-[#4B594E] leading-relaxed mb-4">
                  {facility.desc}
                </p>

                <div className="pt-3 border-t border-[#D99A32]/15 flex items-center justify-between">
                  <span className="text-[11px] font-semibold text-[#72A84A] flex items-center gap-1">
                    <Check className="w-3.5 h-3.5" />
                    <span>अनुकूल वातावरण</span>
                  </span>

                  <button
                    onClick={() => setSelectedFacility(facility)}
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#D99A32] group-hover:text-[#B57B1B] hover:underline cursor-pointer"
                  >
                    <span>विवरण देखें</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Facility Detail Quick Modal */}
      {selectedFacility && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="bg-[#FFFDF7] max-w-lg w-full rounded-2xl overflow-hidden shadow-2xl border border-[#D99A32]">
            <div className="relative h-60 w-full">
              <img 
                src={selectedFacility.image} 
                alt={selectedFacility.title}
                className="w-full h-full object-cover" 
              />
              <button
                onClick={() => setSelectedFacility(null)}
                className="absolute top-3 right-3 bg-[#263329]/80 hover:bg-[#263329] text-white p-1.5 rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="absolute bottom-3 left-3 bg-[#D99A32] text-[#263329] font-bold text-xs px-2.5 py-0.5 rounded-md">
                {selectedFacility.tag}
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-[#245C36] mb-2">
                {selectedFacility.title}
              </h3>
              <p className="text-sm text-[#4B594E] leading-relaxed mb-4">
                {selectedFacility.desc}
              </p>
              <div className="bg-[#FFF9EC] p-3 rounded-lg border border-[#D99A32]/30 text-xs text-[#263329] flex items-center gap-2 mb-4">
                <AlertCircle className="w-4 h-4 text-[#D99A32] shrink-0" />
                <span>यह विवरण संस्थान की अवधारणा के आधार पर डेमो स्वरूप प्रस्तुत किया गया है।</span>
              </div>
              <button
                onClick={() => setSelectedFacility(null)}
                className="w-full bg-[#245C36] hover:bg-[#1A4428] text-white font-bold py-2 rounded-lg text-sm transition-colors"
              >
                बंद करें (Close)
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
