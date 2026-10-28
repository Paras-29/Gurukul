# संस्कृति आर्य गुरुकुलम (Sanskriti Arya Gurukulam)
### Bilingual Institutional Demo Website • शिक्षा, संस्कार और संस्कृति का संगम

An institutional demonstration website for **Sanskriti Arya Gurukulam**, an educational sanctuary inspired by Indian knowledge traditions, Vedic values, nature, and holistic student development.

---

## 🌟 Key Highlights & Features

- **🌐 Complete Bilingual Architecture**:
  - Instant toggle between **Hindi (हिन्दी - Default)** and **English**.
  - All navigation links, headlines, descriptions, buttons, forms, validation messages, demo notifications, and footer elements switch seamlessly without page reload.
  - Selected language persists in `localStorage` (`sanskriti_gurukul_lang`).
  - Sets appropriate `lang="hi"` or `lang="en"` and updates browser document title dynamically.

- **🎨 Authentic Vedic & Modern Visual Identity**:
  - **Color Palette**:
    - Forest Green: `#245C36` (Primary)
    - Leaf Green: `#72A84A` (Accent & Growth)
    - Warm Saffron: `#D99A32` (Sacred Wisdom & Vibrancy)
    - Cream Canvas: `#FFF9EC` (Calm & Natural background)
    - Deep Charcoal: `#263329` (High-contrast typography)
  - **Typography**: Google Fonts loaded with `Noto Sans Devanagari`, `Rozha One`, `Cinzel`, and `Plus Jakarta Sans`.
  - **Custom High-Resolution Vector Emblem**: Features the sacred Banyan tree (वटवृक्ष), rising sun of enlightenment, open Vedic text (ग्रंथ), sacred flame (दीपक), and the timeless motto *"सा विद्या या विमुक्तये"* (Knowledge is that which liberates).

- **🏛️ Website Sections**:
  1. **Notice Bar**: Important updates, admission notice for academic session 2026-27, phone helpline, and quick language toggle.
  2. **Sticky Header**: Responsive navigation, emblem, Hindi/English toggle, mobile drawer menu, and "Admission Enquiry" CTA.
  3. **Hero Section**: Traditional Indian Gurukul atmosphere, bilingual headlines, CTA buttons, and 4 core stat highlights.
  4. **About the Gurukul**: Narrative story, Sanskrit shloka with translation, 4 feature points, and expandable details.
  5. **Educational Philosophy**: 4 core pillars (Vedic & Cultural Learning, Moral Values, Physical Wellness & Yoga, Holistic Modern Education).
  6. **Facilities Grid**: Air-conditioned classrooms, Library & Vedic Study, Yajnashala & Meditation, Botanical Campus, Sports Arena, and Gurukul Residence with demo preview modals.
  7. **Activities & Events**: Interactive category filters (All, Yoga, Cultural, Vedic, Sports, Workshops) with bilingual event cards.
  8. **Admissions Enquiry Form**: 
     - Complete validation for Student Name, Parent Name, Class of Interest.
     - Indian 10-digit mobile number validation (`/^[6-9]\d{9}$/`).
     - Optional email format validation.
     - Celebratory confetti feedback and an honest demo confirmation modal.
  9. **Testimonials**: Interactive parent and educationist testimonial carousel with dot navigation and sample badges.
  10. **Gallery**: Categorized photo gallery with responsive full-screen Lightbox viewer.
  11. **Contact Section**: Institution address, phone, email, office hours, stylized campus map preview, and contact message form.
  12. **Footer & Legal**: Complete bilingual footer with newsletter subscription, quick links, and popups for Privacy Policy and Terms & Conditions.

---

## 🛠️ Technology Stack

- **Framework**: [React 19](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) with custom `@theme` color tokens and mandala patterns
- **Icons**: [Lucide React](https://lucide.dev/)
- **Visual Effects**: [canvas-confetti](https://www.npmjs.com/package/canvas-confetti)
- **Fonts**: Noto Sans Devanagari & Plus Jakarta Sans via Google Fonts

---

## 🚀 Getting Started Locally

### 1. Prerequisites
- **Node.js** (v18 or higher recommended)
- **npm** (v9 or higher)

### 2. Installation
Open your terminal in the project directory:
```bash
npm install
```

### 3. Run Development Server
```bash
npm run dev
```
Open your browser and navigate to the local server URL (typically `http://localhost:5173`).

### 4. Build for Production
To build optimized static production files:
```bash
npm run build
```
The output will be placed in the `dist/` directory.

### 5. Preview Production Build
```bash
npm run preview
```

---

## 📂 Project Structure

```
Gurukul/
├── public/
│   ├── favicon.svg          # Gurukul emblem as favicon
│   └── logo.svg             # High-res vector logo
├── src/
│   ├── assets/
│   │   └── logo.svg         # SVG asset
│   ├── components/
│   │   ├── About.jsx        # About Gurukul section
│   │   ├── Activities.jsx   # Filterable campus activities
│   │   ├── AdmissionsForm.jsx # Validated admission enquiry form
│   │   ├── Contact.jsx      # Contact details & form
│   │   ├── Facilities.jsx   # Facilities grid & quick view modal
│   │   ├── Footer.jsx       # Bilingual footer with newsletter
│   │   ├── Gallery.jsx      # Categorized photo gallery & lightbox
│   │   ├── Header.jsx       # Sticky header & navigation
│   │   ├── Hero.jsx         # Hero section & stats
│   │   ├── LegalModal.jsx   # Privacy policy & terms modal
│   │   ├── NoticeBar.jsx    # Top announcement bar
│   │   ├── Philosophy.jsx   # 4 core educational pillars
│   │   └── Testimonials.jsx # Testimonial carousel
│   ├── context/
│   │   └── LanguageContext.jsx # Hindi / English state provider
│   ├── data/
│   │   ├── activitiesData.js   # Sample activities
│   │   ├── galleryData.js      # Categorized gallery photos
│   │   ├── testimonialsData.js # Sample testimonials
│   │   └── translations.js     # Comprehensive bilingual dictionary
│   ├── App.jsx              # Main App assembly
│   ├── index.css            # Tailwind v4 theme & typography
│   └── main.jsx             # React entry point
├── index.html               # HTML with SEO tags & Google Fonts
├── package.json
├── vite.config.js
└── README.md
```

---

## 🏛️ Disclaimer

*This website is an official frontend demonstration prepared for presentation to the management of Sanskriti Arya Gurukulam. Unconfirmed institutional specifics (such as official campus photographs, finalized fee schedules, and registered phone numbers) are clearly marked as representative placeholders and will be updated upon official administrative confirmation.*
