import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { activitiesData } from '../data/activitiesData';
import { Calendar, Filter, Sparkles, AlertCircle, ArrowRight } from 'lucide-react';

export default function Activities() {
  const { language, t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState('all');
  const [showAll, setShowAll] = useState(false);

  const filterTabs = [
    { key: 'all', label: t.activities.categories.all },
    { key: 'yoga', label: t.activities.categories.yoga },
    { key: 'cultural', label: t.activities.categories.cultural },
    { key: 'vedic', label: t.activities.categories.vedic },
    { key: 'sports', label: t.activities.categories.sports },
    { key: 'workshop', label: t.activities.categories.workshop },
  ];

  const filteredActivities = activeCategory === 'all'
    ? activitiesData
    : activitiesData.filter(item => item.category === activeCategory);

  const displayedActivities = showAll ? filteredActivities : filteredActivities.slice(0, 6);

  return (
    <section id="activities" className="py-16 sm:py-24 bg-[#FFFDF7] relative border-b border-[#D99A32]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D99A32]/15 text-[#B57B1B] text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t.activities.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#245C36] tracking-tight mb-4">
            {t.activities.title}
          </h2>
          <p className="text-base sm:text-lg text-[#263329]/80 leading-relaxed mb-4">
            {t.activities.description}
          </p>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#FFF9EC] border border-[#D99A32]/30 text-xs text-[#4B594E] italic">
            <AlertCircle className="w-3.5 h-3.5 text-[#D99A32] shrink-0" />
            <span>{t.activities.demoNote}</span>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center justify-center flex-wrap gap-2 sm:gap-3 mb-12">
          {filterTabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => {
                setActiveCategory(tab.key);
                setShowAll(false);
              }}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
                activeCategory === tab.key
                  ? 'bg-[#245C36] text-[#FFF9EC] shadow-md scale-105'
                  : 'bg-[#FFF9EC] text-[#263329] hover:bg-[#72A84A]/15 hover:text-[#245C36] border border-[#D99A32]/25'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Activities Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {displayedActivities.map((act) => (
            <div
              key={act.id}
              className="bg-[#FFF9EC] rounded-2xl overflow-hidden border border-[#D99A32]/30 shadow-xs hover:shadow-xl hover:border-[#245C36] transition-all duration-300 flex flex-col group transform hover:-translate-y-1"
            >
              {/* Image & Tag */}
              <div className="relative h-52 w-full overflow-hidden">
                <img
                  src={act.image}
                  alt={act.title[language]}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                {/* Category Tag */}
                <div className="absolute top-3 left-3 bg-[#D99A32] text-white text-xs font-bold px-2.5 py-0.5 rounded-md shadow-xs">
                  {act.tag[language]}
                </div>

                {/* Session frequency badge */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center gap-1.5 text-xs text-[#FFF9EC] font-semibold">
                  <Calendar className="w-3.5 h-3.5 text-[#F2AE3B]" />
                  <span>{act.date[language]}</span>
                </div>
              </div>

              {/* Text Information */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-[#245C36] group-hover:text-[#1A4428] transition-colors mb-2 leading-snug">
                    {act.title[language]}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#4B594E] leading-relaxed">
                    {act.desc[language]}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-[#D99A32]/20 flex items-center justify-between text-xs font-bold text-[#72A84A]">
                  <span>संस्कार एवं अनुशासन</span>
                  <span className="flex items-center gap-1 group-hover:translate-x-1 transition-transform text-[#D99A32]">
                    <span>भागीदारी</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        {filteredActivities.length > 6 && !showAll && (
          <div className="text-center">
            <button
              onClick={() => setShowAll(true)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#245C36] hover:bg-[#1A4428] text-white font-bold text-sm shadow-md hover:shadow-lg transition-all"
            >
              <span>{t.activities.viewAllBtn}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
