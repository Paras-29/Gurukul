import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Menu, X, Globe, Sparkles, ChevronRight, Phone } from 'lucide-react';

export default function Header() {
  const { language, setLanguage, toggleLanguage, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#home', label: t.nav.home },
    { href: '#about', label: t.nav.about },
    { href: '#philosophy', label: t.nav.philosophy },
    { href: '#facilities', label: t.nav.facilities },
    { href: '#activities', label: t.nav.activities },
    { href: '#admissions', label: t.nav.admissions },
    { href: '#contact', label: t.nav.contact },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header 
      className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#FFF9EC]/95 backdrop-blur-md shadow-md py-2 border-b border-[#D99A32]/20' 
          : 'bg-[#FFF9EC] py-3 border-b border-[#245C36]/10'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo & Brand Name */}
          <a 
            href="#home" 
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-3.5 group cursor-pointer"
          >
            <div className="relative w-12 h-12 sm:w-14 sm:h-14 shrink-0 transition-transform duration-300 group-hover:scale-105">
              <img 
                src="/logo.svg" 
                alt="संस्कृति आर्य गुरुकुलम Logo" 
                className="w-full h-full object-contain drop-shadow-sm"
              />
            </div>
            
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-bold tracking-tight text-[#245C36] group-hover:text-[#1A4428] transition-colors leading-tight font-serif-heading">
                {t.nav.brandName}
              </span>
              <span className="text-[11px] sm:text-xs font-medium text-[#D99A32] tracking-wide flex items-center gap-1.5">
                <span>{t.nav.subName}</span>
                <span className="hidden sm:inline text-xs text-[#72A84A]">•</span>
                <span className="hidden sm:inline italic text-[#72A84A] font-semibold">{t.meta.tagline}</span>
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-3 py-1.5 rounded-md text-sm font-semibold text-[#263329] hover:text-[#245C36] hover:bg-[#72A84A]/10 transition-colors relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-[#D99A32] scale-x-0 group-hover:scale-x-100 transition-transform origin-left rounded-full" />
              </a>
            ))}
          </nav>

          {/* Right Header Actions: Language Switcher & Admission Button */}
          <div className="hidden sm:flex items-center gap-3">
            
            {/* Bilingual Toggle Button */}
            <div className="bg-[#FFFDF7] p-1 rounded-full border border-[#D99A32]/40 shadow-xs flex items-center">
              <button
                type="button"
                onClick={() => setLanguage('hi')}
                className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${
                  language === 'hi'
                    ? 'bg-[#245C36] text-[#FFF9EC] shadow-xs'
                    : 'text-[#263329] hover:text-[#245C36]'
                }`}
                title="हिन्दी में पढ़ें"
              >
                हिन्दी
              </button>
              <button
                type="button"
                onClick={() => setLanguage('en')}
                className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${
                  language === 'en'
                    ? 'bg-[#245C36] text-[#FFF9EC] shadow-xs'
                    : 'text-[#263329] hover:text-[#245C36]'
                }`}
                title="Switch to English"
              >
                English
              </button>
            </div>

            {/* Admission CTA Button */}
            <a
              href="#admissions"
              onClick={(e) => handleNavClick(e, '#admissions')}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#D99A32] to-[#B57B1B] hover:from-[#F2AE3B] hover:to-[#D99A32] text-white px-4 py-2 rounded-lg text-sm font-bold shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <Sparkles className="w-4 h-4 text-[#FFF9EC]" />
              <span>{t.nav.enquiryBtn}</span>
            </a>
          </div>

          {/* Mobile Menu Button & Quick Toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={toggleLanguage}
              className="bg-[#245C36] text-[#FFF9EC] text-xs font-bold px-2.5 py-1.5 rounded-md flex items-center gap-1 shadow-xs"
              aria-label="Toggle language"
            >
              <Globe className="w-3.5 h-3.5 text-[#D99A32]" />
              <span>{language === 'hi' ? 'EN' : 'हिन्दी'}</span>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#245C36] hover:bg-[#245C36]/10 transition-colors focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FFFDF7] border-b border-[#D99A32]/30 shadow-xl px-4 pt-3 pb-6 animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col gap-1.5 divide-y divide-[#245C36]/10">
            <div className="pb-3 flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="flex items-center justify-between px-3 py-2.5 rounded-lg text-base font-semibold text-[#263329] hover:bg-[#72A84A]/15 hover:text-[#245C36] transition-colors"
                >
                  <span>{link.label}</span>
                  <ChevronRight className="w-4 h-4 text-[#D99A32]" />
                </a>
              ))}
            </div>

            <div className="pt-4 flex flex-col gap-3">
              {/* Language selection in mobile */}
              <div className="flex items-center justify-between px-2">
                <span className="text-xs font-bold text-[#4B594E] uppercase tracking-wider">
                  {language === 'hi' ? 'भाषा चुनें (Select Language)' : 'Select Language'}
                </span>
                <div className="bg-[#FFF9EC] p-1 rounded-full border border-[#D99A32]/50 flex items-center">
                  <button
                    onClick={() => setLanguage('hi')}
                    className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${
                      language === 'hi' ? 'bg-[#245C36] text-[#FFF9EC]' : 'text-[#263329]'
                    }`}
                  >
                    हिन्दी
                  </button>
                  <button
                    onClick={() => setLanguage('en')}
                    className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${
                      language === 'en' ? 'bg-[#245C36] text-[#FFF9EC]' : 'text-[#263329]'
                    }`}
                  >
                    English
                  </button>
                </div>
              </div>

              {/* Admission button in mobile */}
              <a
                href="#admissions"
                onClick={(e) => handleNavClick(e, '#admissions')}
                className="w-full text-center flex items-center justify-center gap-2 bg-gradient-to-r from-[#D99A32] to-[#B57B1B] text-white py-2.5 rounded-lg font-bold shadow-md text-sm"
              >
                <Sparkles className="w-4 h-4 text-[#FFF9EC]" />
                <span>{t.nav.enquiryBtn}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
