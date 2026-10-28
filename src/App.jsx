import React, { useState, useEffect } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import NoticeBar from './components/NoticeBar';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Philosophy from './components/Philosophy';
import Facilities from './components/Facilities';
import Activities from './components/Activities';
import AdmissionsForm from './components/AdmissionsForm';
import Testimonials from './components/Testimonials';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LegalModal from './components/LegalModal';
import { ArrowUp } from 'lucide-react';

function AppContent() {
  const [legalModalType, setLegalModalType] = useState(null);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FFF9EC] text-[#263329] selection:bg-[#D99A32]/30 selection:text-[#245C36]">
      {/* Top Announcement Bar */}
      <NoticeBar />

      {/* Main Sticky Header */}
      <Header />

      {/* Main Page Sections */}
      <main className="flex-1">
        <Hero />
        <About />
        <Philosophy />
        <Facilities />
        <Activities />
        <AdmissionsForm />
        <Testimonials />
        <Gallery />
        <Contact />
      </main>

      {/* Comprehensive Footer */}
      <Footer
        onOpenPolicy={() => setLegalModalType('privacy')}
        onOpenTerms={() => setLegalModalType('terms')}
      />

      {/* Legal & Policy Modals */}
      <LegalModal
        isOpen={Boolean(legalModalType)}
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
      />

      {/* Floating Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-40 w-11 h-11 rounded-full bg-[#245C36] text-[#FFF9EC] hover:bg-[#1A4428] shadow-xl flex items-center justify-center transition-all transform hover:scale-110 active:scale-95 border-2 border-[#D99A32] cursor-pointer"
          aria-label="Scroll to top"
          title="शीर्ष पर जाएँ (Scroll to top)"
        >
          <ArrowUp className="w-5 h-5 text-[#FFF9EC]" />
        </button>
      )}
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}
