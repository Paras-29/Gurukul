import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, AlertCircle, Sparkles, Navigation } from 'lucide-react';

export default function Contact() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-[#FFFDF7] relative border-b border-[#D99A32]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#72A84A]/15 text-[#245C36] text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#D99A32]" />
            <span>{t.contact.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#245C36] tracking-tight mb-4">
            {t.contact.title}
          </h2>
          <p className="text-base sm:text-lg text-[#263329]/80 leading-relaxed">
            {t.contact.description}
          </p>
        </div>

        {/* 2-Column Grid: Contact Information & Interactive Message Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Contact Cards & Campus Location Preview (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Info Cards */}
            <div className="bg-[#FFF9EC] p-6 sm:p-7 rounded-2xl border border-[#D99A32]/30 shadow-md space-y-5">
              
              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#245C36] text-white flex items-center justify-center shrink-0 shadow-xs">
                  <MapPin className="w-5 h-5 text-[#F2AE3B]" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#D99A32] uppercase tracking-wider mb-1">
                    {t.contact.addressLabel}
                  </h4>
                  <p className="text-sm font-medium text-[#263329] leading-relaxed">
                    {t.contact.addressVal}
                  </p>
                </div>
              </div>

              {/* Telephone */}
              <div className="flex items-start gap-4 pt-4 border-t border-[#D99A32]/20">
                <div className="w-10 h-10 rounded-xl bg-[#245C36] text-white flex items-center justify-center shrink-0 shadow-xs">
                  <Phone className="w-5 h-5 text-[#F2AE3B]" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#D99A32] uppercase tracking-wider mb-1">
                    {t.contact.phoneLabel}
                  </h4>
                  <p className="text-sm font-semibold font-mono text-[#263329]">
                    {t.contact.phoneVal}
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4 pt-4 border-t border-[#D99A32]/20">
                <div className="w-10 h-10 rounded-xl bg-[#245C36] text-white flex items-center justify-center shrink-0 shadow-xs">
                  <Mail className="w-5 h-5 text-[#F2AE3B]" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#D99A32] uppercase tracking-wider mb-1">
                    {t.contact.emailLabel}
                  </h4>
                  <p className="text-sm font-medium font-mono text-[#263329]">
                    {t.contact.emailVal}
                  </p>
                </div>
              </div>

              {/* Office Hours */}
              <div className="flex items-start gap-4 pt-4 border-t border-[#D99A32]/20">
                <div className="w-10 h-10 rounded-xl bg-[#245C36] text-white flex items-center justify-center shrink-0 shadow-xs">
                  <Clock className="w-5 h-5 text-[#F2AE3B]" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#D99A32] uppercase tracking-wider mb-1">
                    {t.contact.hoursLabel}
                  </h4>
                  <p className="text-sm font-medium text-[#263329]">
                    {t.contact.hoursVal}
                  </p>
                </div>
              </div>

            </div>

            {/* Stylized Campus Location Map Box */}
            <div className="relative rounded-2xl overflow-hidden border-2 border-[#D99A32]/30 shadow-md bg-[#245C36]/5 h-56 flex flex-col items-center justify-center text-center p-6">
              <div className="w-12 h-12 rounded-full bg-[#245C36] text-white flex items-center justify-center mb-3 shadow-md">
                <Navigation className="w-6 h-6 text-[#F2AE3B]" />
              </div>
              <h4 className="text-base font-bold text-[#245C36] mb-1">
                परिसर मानचित्र (Campus Location Map)
              </h4>
              <p className="text-xs text-[#4B594E] max-w-sm mb-3">
                संस्थान द्वारा आधिकारिक जीपीएस निर्देशांक एवं भूमि विवरण उपलब्ध कराने पर लाइव गूगल मैप्स एकीकरण सक्रिय होगा।
              </p>
              <span className="text-[11px] font-bold text-[#D99A32] uppercase tracking-wider bg-[#FFF9EC] px-3 py-1 rounded-full border border-[#D99A32]/40">
                स्थान विवरण प्रतीक्षारत (Pending Confirmation)
              </span>
            </div>

          </div>

          {/* Right Column: Quick Contact Enquiry Form (6 cols) */}
          <div className="lg:col-span-6 bg-[#FFF9EC] p-6 sm:p-8 rounded-2xl border-2 border-[#D99A32]/30 shadow-xl">
            <h3 className="text-xl font-bold text-[#245C36] mb-1">
              {t.contact.formHeading}
            </h3>
            <p className="text-xs text-[#4B594E] mb-6">
              सामान्य परामर्श अथवा परिसर भ्रमण हेतु संदेश प्रेषित करें:
            </p>

            {submitted ? (
              <div className="p-6 rounded-xl bg-[#72A84A]/15 border border-[#72A84A] text-center space-y-2 animate-in fade-in duration-300">
                <CheckCircle2 className="w-10 h-10 text-[#245C36] mx-auto" />
                <h4 className="text-base font-bold text-[#245C36]">
                  {t.contact.sentNotice}
                </h4>
                <p className="text-xs text-[#4B594E]">
                  यह एक डेमो संदेश है जो परीक्षण हेतु सफलतापूर्वक दर्ज हुआ है।
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-[#245C36] mb-1">
                    {t.contact.name} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg text-sm bg-[#FFFDF7] border border-[#D99A32]/30 focus:border-[#245C36] focus:outline-hidden"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#245C36] mb-1">
                      {t.contact.phone} <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg text-sm bg-[#FFFDF7] border border-[#D99A32]/30 focus:border-[#245C36] focus:outline-hidden"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-[#245C36] mb-1">
                      {t.contact.email}
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg text-sm bg-[#FFFDF7] border border-[#D99A32]/30 focus:border-[#245C36] focus:outline-hidden"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#245C36] mb-1">
                    {t.contact.subject}
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg text-sm bg-[#FFFDF7] border border-[#D99A32]/30 focus:border-[#245C36] focus:outline-hidden"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#245C36] mb-1">
                    {t.contact.message}
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg text-sm bg-[#FFFDF7] border border-[#D99A32]/30 focus:border-[#245C36] focus:outline-hidden"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#245C36] hover:bg-[#1A4428] text-white font-bold text-sm shadow-md hover:shadow-lg transition-all cursor-pointer"
                >
                  <Send className="w-4 h-4 text-[#F2AE3B]" />
                  <span>{t.contact.sendBtn}</span>
                </button>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
