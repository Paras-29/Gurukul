import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import confetti from 'canvas-confetti';
import { Sparkles, Send, CheckCircle2, AlertCircle, Phone, User, Mail, GraduationCap, MessageSquare, Globe2, ShieldCheck, X } from 'lucide-react';

export default function AdmissionsForm() {
  const { t } = useLanguage();

  const [formData, setFormData] = useState({
    studentName: '',
    parentName: '',
    mobile: '',
    email: '',
    grade: '',
    languagePreference: 'हिन्दी (Hindi)',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);

  const validate = () => {
    const newErrors = {};

    // Student Name
    if (!formData.studentName.trim()) {
      newErrors.studentName = t.admissions.validation.studentNameRequired;
    }

    // Parent Name
    if (!formData.parentName.trim()) {
      newErrors.parentName = t.admissions.validation.parentNameRequired;
    }

    // Indian Mobile Number (10 digits starting with 6,7,8,9)
    const cleanMobile = formData.mobile.replace(/\D/g, '');
    if (!cleanMobile) {
      newErrors.mobile = t.admissions.validation.mobileRequired;
    } else if (!/^[6-9]\d{9}$/.test(cleanMobile)) {
      newErrors.mobile = t.admissions.validation.mobileInvalid;
    }

    // Email (optional, but validate if entered)
    if (formData.email.trim()) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email.trim())) {
        newErrors.email = t.admissions.validation.emailInvalid;
      }
    }

    // Grade
    if (!formData.grade) {
      newErrors.grade = t.admissions.validation.gradeRequired;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error on edit
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate polite network delay for demo
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedData({ ...formData });
      setShowSuccessModal(true);

      // Trigger celebratory confetti
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#245C36', '#72A84A', '#D99A32', '#FFF9EC']
        });
      } catch {
        // Confetti optional
      }

      // Reset form
      setFormData({
        studentName: '',
        parentName: '',
        mobile: '',
        email: '',
        grade: '',
        languagePreference: 'हिन्दी (Hindi)',
        message: ''
      });
      setErrors({});
    }, 800);
  };

  return (
    <section id="admissions" className="py-16 sm:py-24 bg-[#FFF9EC] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#245C36]/15 text-[#245C36] text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#D99A32]" />
            <span>{t.admissions.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#245C36] tracking-tight mb-4">
            {t.admissions.title}
          </h2>
          <p className="text-base sm:text-lg text-[#263329]/80 leading-relaxed mb-4">
            {t.admissions.description}
          </p>

          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#FFFDF7] border border-[#D99A32]/30 text-xs text-[#4B594E] shadow-2xs">
            <ShieldCheck className="w-4 h-4 text-[#72A84A] shrink-0" />
            <span>{t.admissions.demoNotice}</span>
          </div>
        </div>

        {/* Form Container Grid (Form on Left 7 cols, Benefits on Right 5 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Main Form Box (7 cols) */}
          <div className="lg:col-span-7 bg-[#FFFDF7] p-6 sm:p-8 rounded-2xl border-2 border-[#D99A32]/30 shadow-xl">
            <div className="border-b border-[#D99A32]/20 pb-4 mb-6">
              <h3 className="text-xl font-bold text-[#245C36] flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-[#D99A32]" />
                <span>{t.admissions.formTitle}</span>
              </h3>
              <p className="text-xs text-[#4B594E] mt-1">
                * चिह्नित सभी विवरण भरना अनिवार्य हैं
              </p>
            </div>

            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              
              {/* Row 1: Student Name & Parent Name */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Student Name */}
                <div>
                  <label htmlFor="studentName" className="block text-xs font-bold text-[#245C36] mb-1">
                    {t.admissions.fields.studentName} <span className="text-red-600">*</span>
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-[#72A84A] absolute left-3 top-3 pointer-events-none" />
                    <input
                      type="text"
                      id="studentName"
                      name="studentName"
                      value={formData.studentName}
                      onChange={handleChange}
                      placeholder={t.admissions.fields.studentNamePlaceholder}
                      className={`w-full pl-9 pr-3 py-2.5 rounded-lg text-sm bg-[#FFF9EC] border ${
                        errors.studentName ? 'border-red-500 bg-red-50/30' : 'border-[#D99A32]/30 focus:border-[#245C36]'
                      } focus:outline-hidden transition-colors`}
                    />
                  </div>
                  {errors.studentName && (
                    <p className="text-xs text-red-600 mt-1 flex items-center gap-1 font-medium">
                      <AlertCircle className="w-3 h-3 shrink-0" />
                      <span>{errors.studentName}</span>
                    </p>
                  )}
                </div>

                {/* Parent Name */}
                <div>
                  <label htmlFor="parentName" className="block text-xs font-bold text-[#245C36] mb-1">
                    {t.admissions.fields.parentName} <span className="text-red-600">*</span>
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-[#72A84A] absolute left-3 top-3 pointer-events-none" />
                    <input
                      type="text"
                      id="parentName"
                      name="parentName"
                      value={formData.parentName}
                      onChange={handleChange}
                      placeholder={t.admissions.fields.parentNamePlaceholder}
                      className={`w-full pl-9 pr-3 py-2.5 rounded-lg text-sm bg-[#FFF9EC] border ${
                        errors.parentName ? 'border-red-500 bg-red-50/30' : 'border-[#D99A32]/30 focus:border-[#245C36]'
                      } focus:outline-hidden transition-colors`}
                    />
                  </div>
                  {errors.parentName && (
                    <p className="text-xs text-red-600 mt-1 flex items-center gap-1 font-medium">
                      <AlertCircle className="w-3 h-3 shrink-0" />
                      <span>{errors.parentName}</span>
                    </p>
                  )}
                </div>
              </div>

              {/* Row 2: Mobile Number & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Mobile Number */}
                <div>
                  <label htmlFor="mobile" className="block text-xs font-bold text-[#245C36] mb-1">
                    {t.admissions.fields.mobile} <span className="text-red-600">*</span>
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-[#72A84A] absolute left-3 top-3 pointer-events-none" />
                    <input
                      type="tel"
                      id="mobile"
                      name="mobile"
                      maxLength={10}
                      value={formData.mobile}
                      onChange={handleChange}
                      placeholder={t.admissions.fields.mobilePlaceholder}
                      className={`w-full pl-9 pr-3 py-2.5 rounded-lg text-sm bg-[#FFF9EC] border ${
                        errors.mobile ? 'border-red-500 bg-red-50/30' : 'border-[#D99A32]/30 focus:border-[#245C36]'
                      } focus:outline-hidden transition-colors`}
                    />
                  </div>
                  {errors.mobile && (
                    <p className="text-xs text-red-600 mt-1 flex items-center gap-1 font-medium">
                      <AlertCircle className="w-3 h-3 shrink-0" />
                      <span>{errors.mobile}</span>
                    </p>
                  )}
                </div>

                {/* Email Address */}
                <div>
                  <label htmlFor="email" className="block text-xs font-bold text-[#245C36] mb-1">
                    {t.admissions.fields.email}
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-[#72A84A] absolute left-3 top-3 pointer-events-none" />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder={t.admissions.fields.emailPlaceholder}
                      className={`w-full pl-9 pr-3 py-2.5 rounded-lg text-sm bg-[#FFF9EC] border ${
                        errors.email ? 'border-red-500 bg-red-50/30' : 'border-[#D99A32]/30 focus:border-[#245C36]'
                      } focus:outline-hidden transition-colors`}
                    />
                  </div>
                  {errors.email && (
                    <p className="text-xs text-red-600 mt-1 flex items-center gap-1 font-medium">
                      <AlertCircle className="w-3 h-3 shrink-0" />
                      <span>{errors.email}</span>
                    </p>
                  )}
                </div>
              </div>

              {/* Row 3: Class of Interest & Preferred Language */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Grade */}
                <div>
                  <label htmlFor="grade" className="block text-xs font-bold text-[#245C36] mb-1">
                    {t.admissions.fields.grade} <span className="text-red-600">*</span>
                  </label>
                  <div className="relative">
                    <GraduationCap className="w-4 h-4 text-[#72A84A] absolute left-3 top-3 pointer-events-none" />
                    <select
                      id="grade"
                      name="grade"
                      value={formData.grade}
                      onChange={handleChange}
                      className={`w-full pl-9 pr-3 py-2.5 rounded-lg text-sm bg-[#FFF9EC] border ${
                        errors.grade ? 'border-red-500 bg-red-50/30' : 'border-[#D99A32]/30 focus:border-[#245C36]'
                      } focus:outline-hidden transition-colors`}
                    >
                      <option value="">{t.admissions.fields.gradePlaceholder}</option>
                      {t.admissions.fields.grades.map((gr, idx) => (
                        <option key={idx} value={gr}>{gr}</option>
                      ))}
                    </select>
                  </div>
                  {errors.grade && (
                    <p className="text-xs text-red-600 mt-1 flex items-center gap-1 font-medium">
                      <AlertCircle className="w-3 h-3 shrink-0" />
                      <span>{errors.grade}</span>
                    </p>
                  )}
                </div>

                {/* Preferred Language */}
                <div>
                  <label htmlFor="languagePreference" className="block text-xs font-bold text-[#245C36] mb-1">
                    {t.admissions.fields.languagePreference}
                  </label>
                  <div className="relative">
                    <Globe2 className="w-4 h-4 text-[#72A84A] absolute left-3 top-3 pointer-events-none" />
                    <select
                      id="languagePreference"
                      name="languagePreference"
                      value={formData.languagePreference}
                      onChange={handleChange}
                      className="w-full pl-9 pr-3 py-2.5 rounded-lg text-sm bg-[#FFF9EC] border border-[#D99A32]/30 focus:border-[#245C36] focus:outline-hidden transition-colors"
                    >
                      {t.admissions.fields.languageOptions.map((opt, idx) => (
                        <option key={idx} value={opt}>{opt}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Row 4: Message (Optional) */}
              <div>
                <label htmlFor="message" className="block text-xs font-bold text-[#245C36] mb-1">
                  {t.admissions.fields.message}
                </label>
                <div className="relative">
                  <MessageSquare className="w-4 h-4 text-[#72A84A] absolute left-3 top-3 pointer-events-none" />
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder={t.admissions.fields.messagePlaceholder}
                    className="w-full pl-9 pr-3 py-2.5 rounded-lg text-sm bg-[#FFF9EC] border border-[#D99A32]/30 focus:border-[#245C36] focus:outline-hidden transition-colors"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#D99A32] to-[#B57B1B] hover:from-[#F2AE3B] hover:to-[#D99A32] text-white font-bold text-base shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-50 cursor-pointer"
                >
                  <Send className="w-4 h-4 text-[#FFF9EC]" />
                  <span>{isSubmitting ? t.admissions.submittingBtn : t.admissions.submitBtn}</span>
                </button>
              </div>

            </form>
          </div>

          {/* Right Information Column: Admission Steps & Values (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Gurukul Admission Highlights Card */}
            <div className="bg-[#245C36] text-[#FFF9EC] p-6 sm:p-7 rounded-2xl shadow-xl border border-[#D99A32]/40 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-36 h-36 bg-[#D99A32]/15 rounded-full blur-xl pointer-events-none" />
              
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-[#FFF9EC] p-1.5 shrink-0 shadow-md">
                  <img src="/logo.svg" alt="Emblem" className="w-full h-full object-contain" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-[#FFF9EC]">
                    संस्कृति आर्य गुरुकुलम
                  </h4>
                  <p className="text-xs text-[#D99A32] font-semibold">
                    प्रवेश प्रक्रिया दिशानिर्देश
                  </p>
                </div>
              </div>

              <div className="space-y-3.5 text-xs sm:text-sm text-[#FFFDF7]/90 leading-relaxed">
                <div className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-[#D99A32] text-[#245C36] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                    १
                  </span>
                  <span>प्रारंभिक ऑनलाइन पूछताछ एवं अभिभावक संवाद</span>
                </div>

                <div className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-[#D99A32] text-[#245C36] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                    २
                  </span>
                  <span>गुरुकुल परिसर भ्रमण एवं गुरुजनों से साक्षात्कार</span>
                </div>

                <div className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-[#D99A32] text-[#245C36] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                    ३
                  </span>
                  <span>विद्यार्थी की स्वाभाविक अभिरुचि एवं संस्कार आकलन</span>
                </div>

                <div className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-[#D99A32] text-[#245C36] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                    ४
                  </span>
                  <span>प्रवेश औपचारिकताओं की पूर्ति एवं गुरुकुल प्रवेश</span>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#FFF9EC]/20 flex items-center justify-between text-xs">
                <span className="text-[#D99A32] font-bold">हेल्पलाइन:</span>
                <span className="font-mono font-semibold">+91 98765 43210</span>
              </div>
            </div>

            {/* Note about Demo */}
            <div className="bg-[#FFFDF7] p-5 rounded-xl border border-[#D99A32]/30 text-xs text-[#4B594E] space-y-2">
              <div className="font-bold text-[#245C36] flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#72A84A]" />
                <span>गोपनीयता एवं सुरक्षा सूचना (Demo Privacy)</span>
              </div>
              <p>
                यह वेबसाइट संस्थान की अग्रिम प्रस्तुति हेतु तैयार की गई है। इस प्रपत्र पर परीक्षण हेतु दर्ज की गई जानकारी किसी सार्वजनिक डेटाबेस पर संग्रहीत नहीं होती।
              </p>
            </div>

          </div>

        </div>

      </div>

      {/* Honest Demo Submission Confirmation Modal */}
      {showSuccessModal && submittedData && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="bg-[#FFFDF7] max-w-lg w-full rounded-2xl overflow-hidden shadow-2xl border-2 border-[#D99A32] p-6 sm:p-8">
            <div className="text-center mb-6">
              <div className="w-16 h-16 rounded-full bg-[#72A84A]/20 text-[#245C36] flex items-center justify-center mx-auto mb-3">
                <CheckCircle2 className="w-10 h-10 text-[#245C36]" />
              </div>
              <h3 className="text-2xl font-bold text-[#245C36] mb-1">
                {t.admissions.successTitle}
              </h3>
              <p className="text-sm text-[#D99A32] font-semibold">
                {t.admissions.successDesc}
              </p>
            </div>

            {/* Submitted Summary */}
            <div className="bg-[#FFF9EC] p-4 rounded-xl border border-[#D99A32]/30 mb-5 text-xs sm:text-sm text-[#263329] space-y-2">
              <div className="font-bold text-[#245C36] border-b border-[#D99A32]/20 pb-1.5 mb-2">
                प्रस्तुत विवरण सारांश (Submitted Summary):
              </div>
              <div className="flex justify-between">
                <span className="text-[#4B594E]">विद्यार्थी का नाम:</span>
                <span className="font-bold">{submittedData.studentName}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#4B594E]">अभिभावक:</span>
                <span className="font-semibold">{submittedData.parentName}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#4B594E]">मोबाइल नंबर:</span>
                <span className="font-mono font-semibold">{submittedData.mobile}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#4B594E]">इच्छित कक्षा:</span>
                <span className="font-semibold">{submittedData.grade}</span>
              </div>
              {submittedData.email && (
                <div className="flex justify-between">
                  <span className="text-[#4B594E]">ईमेल:</span>
                  <span>{submittedData.email}</span>
                </div>
              )}
            </div>

            {/* Clear, honest demo note */}
            <div className="bg-[#245C36]/10 p-3 rounded-lg border border-[#245C36]/20 text-xs text-[#245C36] flex items-start gap-2 mb-6">
              <AlertCircle className="w-4 h-4 text-[#D99A32] shrink-0 mt-0.5" />
              <span>{t.admissions.demoConfirmationNotice}</span>
            </div>

            <button
              onClick={() => setShowSuccessModal(false)}
              className="w-full bg-[#245C36] hover:bg-[#1A4428] text-white font-bold py-3 rounded-xl text-sm transition-all shadow-md cursor-pointer"
            >
              {t.admissions.closeBtn}
            </button>
          </div>
        </div>
      )}

    </section>
  );
}
