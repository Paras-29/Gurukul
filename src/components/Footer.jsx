import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Sparkles, Phone, Mail, MapPin, Heart, ChevronRight, ShieldCheck, FileText, CheckCircle2 } from 'lucide-react';

export default function Footer({ onOpenPolicy, onOpenTerms }) {
  const { language, setLanguage, t } = useLanguage();
  const [emailInput, setEmailInput] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!emailInput) return;
    setSubscribed(true);
    setTimeout(() => {
      setSubscribed(false);
      setEmailInput('');
    }, 4000);
  };

  const scrollTo = (id) => {
    const el = document.querySelector(id);
    if (el) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      window.scrollTo({
        top: elementRect - bodyRect - offset,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="bg-[#245C36] text-[#FFF9EC] relative overflow-hidden border-t-4 border-[#D99A32]">
      
      {/* Decorative top pattern */}
      <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-[#D99A32] via-[#72A84A] to-[#D99A32]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#FFF9EC]/15">
          
          {/* Col 1: Brand Info & Shloka (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3.5">
              <div className="w-14 h-14 bg-[#FFFDF7] p-1.5 rounded-2xl shrink-0 shadow-md">
                <img src="/logo.svg" alt="संस्कृति आर्य गुरुकुलम Logo" className="w-full h-full object-contain" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#FFF9EC] font-serif-heading">
                  {t.nav.brandName}
                </h3>
                <p className="text-xs text-[#D99A32] font-semibold">
                  {t.nav.subName}
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#FFFDF7]/85 leading-relaxed">
              {t.footer.aboutText}
            </p>

            {/* Sacred Motto Banner */}
            <div className="p-3 rounded-xl bg-[#1A4428] border border-[#D99A32]/40 text-center">
              <span className="text-sm font-bold text-[#F2AE3B] font-serif tracking-widest block">
                सा विद्या या विमुक्तये
              </span>
              <span className="text-[11px] text-[#FFF9EC]/75 block mt-0.5">
                (Knowledge is that which liberates)
              </span>
            </div>

            {/* Language Switcher in Footer */}
            <div className="flex items-center gap-2 pt-2">
              <span className="text-xs text-[#FFF9EC]/70">भाषा (Language):</span>
              <button
                onClick={() => setLanguage('hi')}
                className={`text-xs px-2.5 py-1 rounded font-bold transition-all ${
                  language === 'hi' ? 'bg-[#D99A32] text-[#245C36]' : 'bg-[#1A4428] text-white hover:bg-white/10'
                }`}
              >
                हिन्दी
              </button>
              <button
                onClick={() => setLanguage('en')}
                className={`text-xs px-2.5 py-1 rounded font-bold transition-all ${
                  language === 'en' ? 'bg-[#D99A32] text-[#245C36]' : 'bg-[#1A4428] text-white hover:bg-white/10'
                }`}
              >
                English
              </button>
            </div>
          </div>

          {/* Col 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-bold text-[#D99A32] uppercase tracking-wider">
              {t.footer.quickLinksTitle}
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-[#FFFDF7]/90">
              <li>
                <button onClick={() => scrollTo('#home')} className="hover:text-[#D99A32] transition-colors flex items-center gap-1 cursor-pointer">
                  <ChevronRight className="w-3.5 h-3.5 text-[#72A84A]" />
                  <span>{t.nav.home}</span>
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('#about')} className="hover:text-[#D99A32] transition-colors flex items-center gap-1 cursor-pointer">
                  <ChevronRight className="w-3.5 h-3.5 text-[#72A84A]" />
                  <span>{t.nav.about}</span>
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('#philosophy')} className="hover:text-[#D99A32] transition-colors flex items-center gap-1 cursor-pointer">
                  <ChevronRight className="w-3.5 h-3.5 text-[#72A84A]" />
                  <span>{t.nav.philosophy}</span>
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('#facilities')} className="hover:text-[#D99A32] transition-colors flex items-center gap-1 cursor-pointer">
                  <ChevronRight className="w-3.5 h-3.5 text-[#72A84A]" />
                  <span>{t.nav.facilities}</span>
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('#activities')} className="hover:text-[#D99A32] transition-colors flex items-center gap-1 cursor-pointer">
                  <ChevronRight className="w-3.5 h-3.5 text-[#72A84A]" />
                  <span>{t.nav.activities}</span>
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('#admissions')} className="hover:text-[#D99A32] transition-colors flex items-center gap-1 cursor-pointer">
                  <ChevronRight className="w-3.5 h-3.5 text-[#72A84A]" />
                  <span>{t.nav.admissions}</span>
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('#contact')} className="hover:text-[#D99A32] transition-colors flex items-center gap-1 cursor-pointer">
                  <ChevronRight className="w-3.5 h-3.5 text-[#72A84A]" />
                  <span>{t.nav.contact}</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Academic Pillars (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-[#D99A32] uppercase tracking-wider">
              {t.footer.academicLinksTitle}
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-[#FFFDF7]/90">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D99A32]" />
                <span>वैदिक एवं सांस्कृतिक ज्ञान</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D99A32]" />
                <span>सत्य, सदाचार एवं नैतिक संस्कार</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D99A32]" />
                <span>दैनिक योग, प्राणायाम व खेल</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D99A32]" />
                <span>आधुनिक गणित एवं विज्ञान</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D99A32]" />
                <span>संस्कृत संभाषण एवं सुभाषित</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D99A32]" />
                <span>पर्यावरण एवं प्रकृति-संवर्धन</span>
              </li>
            </ul>
          </div>

          {/* Col 4: Newsletter & Contact Snippet (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-[#D99A32] uppercase tracking-wider">
              {t.footer.newsletterTitle}
            </h4>
            <p className="text-xs text-[#FFFDF7]/80 leading-relaxed">
              {t.footer.newsletterDesc}
            </p>

            {subscribed ? (
              <div className="p-3 rounded-lg bg-[#72A84A]/30 border border-[#72A84A] text-xs text-[#FFF9EC] flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#D99A32] shrink-0" />
                <span>{t.footer.subscribeSuccess}</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <input
                  type="email"
                  required
                  placeholder={t.footer.newsletterPlaceholder}
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg bg-[#1A4428] border border-[#D99A32]/40 text-xs text-[#FFF9EC] placeholder:text-[#FFF9EC]/50 focus:outline-hidden focus:border-[#D99A32]"
                />
                <button
                  type="submit"
                  className="w-full bg-[#D99A32] hover:bg-[#F2AE3B] text-[#245C36] font-bold py-2 rounded-lg text-xs transition-colors cursor-pointer"
                >
                  {t.footer.subscribeBtn}
                </button>
              </form>
            )}

            <div className="pt-2 text-xs text-[#FFFDF7]/70 space-y-1">
              <div>दूरभाष: +91 98765 43210</div>
              <div>ईमेल: info@sanskriti-gurukul.demo</div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright, Demo Notice, Legal Modals */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#FFFDF7]/75">
          <div>
            {t.footer.copyright}
          </div>

          <div className="text-[11px] text-center text-[#D99A32] font-medium max-w-md">
            {t.footer.disclaimer}
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={onOpenPolicy}
              className="hover:text-[#D99A32] underline cursor-pointer"
            >
              {t.footer.privacyPolicy}
            </button>
            <span>•</span>
            <button
              onClick={onOpenTerms}
              className="hover:text-[#D99A32] underline cursor-pointer"
            >
              {t.footer.terms}
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
