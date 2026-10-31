import React, { useState } from "react";
import { Link } from "react-router-dom";
import { advocateData } from "../data/siteData";
import { Reveal } from "../components/common/Reveal";
import {
  Scale,
  ShieldCheck,
  Briefcase,
  CheckCircle,
  Landmark,
  ArrowRight,
  Target,
  Users,
  CheckCircle2,
  Lock,
  FileCheck,
  Building,
  MapPin,
  Layers,
  Compass,
  FileCheck2,
  Network,
  CheckCheck,
  ShieldAlert,
  Camera,
  Maximize2,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { openWhatsApp } from "../utils/whatsapp";

export const AboutPage = () => {
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(null);

  const featuredCards = [
    {
      badge: "SUPREME COURT OF INDIA",
      image: "/images/about_supreme_court_daylight.jpg",
      title: "Advocate Prateek Pal at Supreme Court",
      description: "Principal Advocate & Multidisciplinary Consultant at Prateek Associates",
      fullImage: "/images/prateek_portrait_main.jpg",
      category: "Supreme Court of India",
      caption: "Principal Advocate & Multidisciplinary Consultant at Prateek Associates",
    },
    {
      badge: "CHAMBERS & LIBRARY",
      image: "/images/chambers_graphic.jpg",
      title: "New Delhi Chambers & Appellate Research Library",
      description: "Chamber 527, Patiala House Courts — equipped with statutory archives and briefing desk.",
      fullImage: "/images/chambers_graphic.jpg",
      category: "Chambers & Library",
      caption: "Chamber 527, Patiala House Courts — equipped with statutory archives and briefing desk.",
      hasBakedBadge: true,
    },
    {
      badge: "OFFICIAL PRACTICE PROFILE",
      image: "/images/prateek_banner.jpg",
      title: "Practice Areas & Consultancy Profile",
      description: "High Court, Supreme Court, and Consultancy overview.",
      fullImage: "/images/prateek_banner.jpg",
      category: "Official Practice Profile",
      caption: "High Court, Supreme Court, and Consultancy overview.",
    },
  ];

  const coreValueIcons = {
    "Professional Integrity": ShieldCheck,
    "Client-Centred Approach": Users,
    "Transparency": CheckCircle2,
    "Confidentiality": Lock,
    "Diligence": FileCheck,
    "Practical Solutions": Target,
  };

  const whyChooseIcons = [
    Layers,
    Compass,
    FileCheck2,
    Building,
    Network,
    CheckCheck,
    ShieldAlert,
    MapPin,
  ];

  const activePhoto = selectedPhotoIndex !== null ? featuredCards[selectedPhotoIndex] : null;

  const handlePrevPhoto = (e) => {
    e.stopPropagation();
    setSelectedPhotoIndex((prev) => (prev > 0 ? prev - 1 : featuredCards.length - 1));
  };

  const handleNextPhoto = (e) => {
    e.stopPropagation();
    setSelectedPhotoIndex((prev) => (prev < featuredCards.length - 1 ? prev + 1 : 0));
  };

  return (
    <div className="pb-20 space-y-12 sm:space-y-16 bg-[#F8FAFC]">
      {/* 1. Hero Banner: Full-Width Panoramic Image Covering Entire Width of Screen (Exact Reference Match) */}
      <section className="relative w-full overflow-hidden border-b border-slate-200/80 pt-28 sm:pt-36 pb-16 sm:pb-24 flex items-center text-left">
        {/* Full-bleed background image covering entire width of screen */}
        <div className="absolute inset-0 z-0 w-full h-full overflow-hidden">
          <img
            src="/images/about_hero_panoramic.jpg"
            alt="Law Library and Scales of Justice"
            className="w-full h-full object-cover object-right md:object-center"
          />
          {/* Daylight gradient overlay: soft light fade on left for crisp typography, transparent on right for golden scales */}
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/85 md:via-white/70 to-transparent" />
          <div className="absolute inset-0 bg-white/10" />
        </div>

        {/* Content Container overlaid directly on top */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl space-y-4">
            {/* Gold dash accent + ABOUT US */}
            <div className="anim-top-to-bottom flex items-center gap-2.5">
              <span className="w-8 h-[3.5px] bg-amber-400 rounded-full" />
              <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.22em] text-slate-900">
                ABOUT US
              </span>
            </div>

            {/* Main Headline matching mockup */}
            <h1 className="anim-top-to-bottom anim-delay-100 font-serif text-3xl sm:text-4xl lg:text-[44px] font-bold text-slate-900 leading-[1.18] tracking-tight">
              Dedicated counsel for high-stakes litigation,<br className="hidden sm:inline" />
              tax strategy, and client advisory.
            </h1>

            {/* Subtitle Paragraph matching mockup */}
            <p className="anim-left-to-right anim-delay-200 text-slate-700 text-xs sm:text-sm md:text-base leading-relaxed max-w-xl font-normal pt-1">
              With deep expertise and a client-first approach, we help you navigate complex legal,
              tax and business challenges with confidence.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Three Featured Showcase Cards Matching Mockup */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          {featuredCards.map((card, idx) => (
            <Reveal key={idx} direction="bottom" delay={idx * 120}>
              <div
                onClick={() => setSelectedPhotoIndex(idx)}
                className="bg-white rounded-2xl border border-slate-200/90 shadow-xs hover:border-amber-400 hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col h-full cursor-pointer group"
              >
                {/* Image Container with Badge - Edge to Edge, zero dark border */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
                  {/* Top-left Badge matching mockup */}
                  {!card.hasBakedBadge && (
                    <div className="absolute top-3 left-3 z-20 flex items-center bg-[#0B1325]/95 backdrop-blur-xs text-white text-[10px] font-bold px-3 py-1.5 rounded-sm shadow-md uppercase tracking-wider">
                      <span className="w-1 h-3.5 bg-amber-400 rounded-xs mr-2" />
                      <span>{card.badge}</span>
                    </div>
                  )}

                  {/* Zoom hint on hover */}
                  <div className="absolute top-3 right-3 z-20 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="w-7 h-7 rounded-full bg-slate-900/80 backdrop-blur-xs text-amber-400 flex items-center justify-center border border-amber-400/40">
                      <Maximize2 className="w-3.5 h-3.5" />
                    </span>
                  </div>

                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Card Body */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4 bg-white">
                  <div>
                    <h3 className="font-serif font-bold text-slate-900 text-lg group-hover:text-amber-700 transition-colors leading-snug">
                      {card.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500 leading-relaxed mt-2">
                      {card.description}
                    </p>
                  </div>

                  {/* Yellow Accent Line at Bottom-Left matching mockup */}
                  <div className="pt-2">
                    <div className="w-12 h-0.5 bg-amber-400 rounded-full" />
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* 3. Comprehensive Narrative & Mission/Vision Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 flex justify-center">
            <Reveal direction="left" className="w-full max-w-sm">
              <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-white group">
                {/* Full-bleed 3:4 image filling entire card edge-to-edge with ZERO black space */}
                <div className="aspect-[3/4] w-full overflow-hidden bg-slate-100">
                  <img
                    src={advocateData.personal.avatarUrl}
                    alt="Prateek Pal, Advocate - Founder"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-5 bg-white text-left border-t border-slate-100">
                  <p className="font-serif font-bold text-slate-900 text-lg">
                    Prateek Pal, Advocate
                  </p>
                  <p className="text-amber-600 text-xs font-bold uppercase tracking-wider mt-0.5">
                    Founder &amp; Principal Counsel
                  </p>
                  <p className="text-xs text-slate-500 mt-2">
                    Chamber No. 527, Patiala House Courts, New Delhi
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal direction="right" className="space-y-5 text-left">
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 leading-snug">
                Professional Expertise. Practical Solutions. Trusted Guidance.
              </h2>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Prateek Associates is a multidisciplinary professional consultancy founded by Prateek Pal, Advocate, offering legal, taxation, compliance, and property consultancy services across Delhi and Uttar Pradesh, subject to the nature and requirements of each assignment.
              </p>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                We understand that legal disputes, tax notices, regulatory obligations, business documentation, and property transactions can involve complicated procedures and important financial decisions. Our objective is to help clients understand their options, prepare appropriate documentation, manage compliance requirements, and pursue suitable remedies under applicable law.
              </p>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Our approach combines legal analysis, documentation, procedural assistance, and coordination with qualified professionals wherever specialist services are required.
              </p>

              {/* Mission & Vision Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-3">
                <Reveal direction="left" delay={150}>
                  <div className="p-5 rounded-2xl bg-amber-50/70 border border-amber-200/80 space-y-2 h-full">
                    <div className="flex items-center gap-2 text-amber-900 font-bold text-sm">
                      <Target className="w-4 h-4 text-amber-700" />
                      <span>Our Mission</span>
                    </div>
                    <p className="text-xs text-slate-700 leading-relaxed">
                      {advocateData.about.mission}
                    </p>
                  </div>
                </Reveal>

                <Reveal direction="right" delay={200}>
                  <div className="p-5 rounded-2xl bg-slate-100 border border-slate-200 space-y-2 h-full">
                    <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                      <ShieldCheck className="w-4 h-4 text-slate-700" />
                      <span>Our Vision</span>
                    </div>
                    <p className="text-xs text-slate-700 leading-relaxed">
                      {advocateData.about.vision}
                    </p>
                  </div>
                </Reveal>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 4. Core Values (6 Values) */}
      <section className="py-16 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Reveal direction="top" className="space-y-3 max-w-2xl mx-auto mb-12">
            <div className="text-[11px] font-bold text-amber-600 uppercase tracking-[0.2em]">
              — GUIDING PRINCIPLES —
            </div>
            <h2 className="font-serif text-3xl font-bold text-slate-900">
              Our Core Values
            </h2>
            <p className="text-xs sm:text-sm text-slate-500">
              Six pillars that govern every consultation, document review, and case representation.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
            {advocateData.about.coreValues.map((val, idx) => {
              const Icon = coreValueIcons[val.title] || ShieldCheck;
              const direction = idx % 2 === 0 ? "left" : "right";
              return (
                <Reveal key={idx} direction={direction} delay={(idx % 3) * 100}>
                  <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-amber-400 hover:shadow-md transition-all group h-full">
                    <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 border border-amber-200/80 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-serif font-bold text-slate-900 text-base mb-2 group-hover:text-amber-700 transition-colors">
                      {val.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {val.desc}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. Why Choose Prateek Associates (8 points) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Reveal direction="top" className="space-y-3 max-w-2xl mx-auto mb-12">
          <div className="text-[11px] font-bold text-amber-600 uppercase tracking-[0.2em]">
            — ADVANTAGE &amp; DISTINCTION —
          </div>
          <h2 className="font-serif text-3xl font-bold text-slate-900">
            Why Choose Prateek Associates?
          </h2>
          <p className="text-xs sm:text-sm text-slate-500">
            Integrated professional services with transparent communication and diligent execution.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
          {advocateData.whyChooseUs.map((item, idx) => {
            const Icon = whyChooseIcons[idx] || ShieldCheck;
            return (
              <Reveal key={idx} direction="bottom" delay={(idx % 4) * 80}>
                <div className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-amber-400 hover:shadow-sm transition-all h-full">
                  <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-800 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-amber-700" />
                  </div>
                  <h3 className="font-serif font-bold text-slate-900 text-base mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* 6. Geographic Presence (Delhi & Uttar Pradesh) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal direction="bottom">
          <div className="p-8 sm:p-10 rounded-3xl bg-slate-900 text-white text-left">
            <div className="max-w-3xl space-y-4">
              <span className="text-[11px] font-bold text-amber-400 uppercase tracking-[0.2em]">
                DUAL REGIONAL FOOTPRINT
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                Delhi &amp; Uttar Pradesh Presence
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                With a professional presence associated with New Delhi (Chamber 527, Patiala House Courts) and Farrukhabad, Uttar Pradesh (Corporate Office, Loco Road), we support clients according to the location, jurisdiction, and requirements of their matters.
              </p>
              <div className="pt-4 flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="px-6 py-3 rounded-lg bg-amber-400 hover:bg-amber-500 text-slate-950 font-bold text-xs uppercase tracking-wider transition-colors inline-flex items-center gap-2 shadow-sm"
                >
                  <span>Contact Our Chambers</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <button
                  onClick={() => openWhatsApp("Hello Prateek Associates, I would like to enquire about your chambers.")}
                  className="px-6 py-3 rounded-lg border border-slate-700 hover:border-slate-500 text-slate-200 font-semibold text-xs transition-colors"
                >
                  Message on WhatsApp
                </button>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Interactive Lightbox Modal for Full View */}
      {selectedPhotoIndex !== null && activePhoto && (
        <div
          onClick={() => setSelectedPhotoIndex(null)}
          className="fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-fade-in"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-5xl w-full max-h-[92vh] flex flex-col items-center bg-slate-900 border border-slate-700/80 rounded-3xl overflow-hidden shadow-2xl"
          >
            <div className="w-full px-6 py-4 border-b border-slate-800 flex items-center justify-between text-white bg-slate-950/80">
              <div className="flex items-center gap-3">
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-amber-400/20 text-amber-400 border border-amber-400/30">
                  {activePhoto.badge}
                </span>
                <span className="text-xs text-slate-400 font-mono">
                  {selectedPhotoIndex + 1} / {featuredCards.length}
                </span>
              </div>
              <button
                onClick={() => setSelectedPhotoIndex(null)}
                className="w-9 h-9 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
                aria-label="Close photo preview"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="relative w-full flex-1 max-h-[68vh] p-4 flex items-center justify-center bg-slate-950 overflow-hidden">
              <img
                src={activePhoto.fullImage || activePhoto.image}
                alt=""
                aria-hidden="true"
                className="absolute inset-0 w-full h-full object-cover blur-3xl opacity-25 scale-125 pointer-events-none"
              />
              <img
                src={activePhoto.fullImage || activePhoto.image}
                alt={activePhoto.title}
                className="relative z-10 max-h-[64vh] max-w-full object-contain drop-shadow-2xl rounded-xl"
              />

              <button
                onClick={handlePrevPhoto}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-slate-900/80 hover:bg-amber-500 hover:text-slate-950 text-white border border-slate-700 flex items-center justify-center transition-all shadow-lg"
                aria-label="Previous photo"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                onClick={handleNextPhoto}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-slate-900/80 hover:bg-amber-500 hover:text-slate-950 text-white border border-slate-700 flex items-center justify-center transition-all shadow-lg"
                aria-label="Next photo"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            <div className="w-full px-6 py-4 bg-slate-950/90 border-t border-slate-800 text-left space-y-1">
              <h3 className="font-serif font-bold text-white text-base sm:text-lg">
                {activePhoto.title}
              </h3>
              <p className="text-xs text-slate-300">
                {activePhoto.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
