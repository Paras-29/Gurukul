import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Sparkles, PhoneCall, Globe } from 'lucide-react';

export default function NoticeBar() {
  const { language, toggleLanguage, t } = useLanguage();

  return (
    <div className="bg-[#245C36] text-[#FFF9EC] text-xs sm:text-sm py-2 px-4 border-b border-[#D99A32]/30 relative z-50">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
        {/* Notice text */}
        <div className="flex items-center gap-2 text-center sm:text-left">
          <span className="inline-flex items-center gap-1 bg-[#D99A32] text-[#263329] font-bold text-[11px] uppercase tracking-wider px-2 py-0.5 rounded-full shadow-xs">
            <Sparkles className="w-3 h-3" />
            {t.notice.badge}
          </span>
          <span className="font-medium opacity-95">
            {t.notice.text}
          </span>
        </div>

        {/* Right side contact & quick toggle */}
        <div className="flex items-center gap-4 text-xs font-medium">
          <a 
            href="tel:+919876543210" 
            className="flex items-center gap-1.5 hover:text-[#D99A32] transition-colors"
            title="Helpline"
          >
            <PhoneCall className="w-3.5 h-3.5 text-[#D99A32]" />
            <span>{t.notice.helpline}</span>
          </a>

          <span className="opacity-40">|</span>

          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1.5 bg-[#FFF9EC]/15 hover:bg-[#FFF9EC]/25 text-[#FFF9EC] px-2.5 py-0.5 rounded border border-[#FFF9EC]/30 transition-all font-semibold"
            aria-label="Switch Language"
          >
            <Globe className="w-3.5 h-3.5 text-[#D99A32]" />
            <span>{language === 'hi' ? 'EN' : 'हिन्दी'}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
