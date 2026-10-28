import React from 'react';
import { X, ShieldCheck, FileText } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function LegalModal({ isOpen, onClose, type }) {
  const { t } = useLanguage();

  if (!isOpen) return null;

  const isPrivacy = type === 'privacy';
  const title = isPrivacy ? t.modals.privacyTitle : t.modals.termsTitle;
  const content = isPrivacy ? t.modals.privacyText : t.modals.termsText;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-[#FFFDF7] max-w-lg w-full rounded-2xl shadow-2xl border-2 border-[#D99A32] overflow-hidden">
        <div className="bg-[#245C36] text-[#FFF9EC] p-4 px-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            {isPrivacy ? (
              <ShieldCheck className="w-5 h-5 text-[#D99A32]" />
            ) : (
              <FileText className="w-5 h-5 text-[#D99A32]" />
            )}
            <h3 className="font-bold text-base text-[#FFF9EC]">
              {title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="text-white/80 hover:text-white p-1 rounded-full transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 space-y-4">
          <p className="text-sm text-[#263329] leading-relaxed">
            {content}
          </p>

          <div className="bg-[#FFF9EC] p-3.5 rounded-xl border border-[#D99A32]/30 text-xs text-[#4B594E] space-y-1">
            <div className="font-bold text-[#245C36]">
              संस्कृति आर्य गुरुकुलम • आधिकारिक डेमो पोर्टल
            </div>
            <p>
              यह दस्तावेज़ संस्थान के प्रारंभिक तकनीकी प्रदर्शन हेतु निर्मित किया गया है। किसी भी कानूनी अथवा प्रशासनिक स्पष्टीकरण हेतु गुरुकुल कार्यालय से संपर्क करें।
            </p>
          </div>

          <div className="pt-2">
            <button
              onClick={onClose}
              className="w-full bg-[#245C36] hover:bg-[#1A4428] text-white font-bold py-2.5 rounded-xl text-sm transition-colors cursor-pointer"
            >
              {t.modals.closeBtn}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
