import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HeroSection } from "../components/sections/HeroSection";
import { Reveal } from "../components/common/Reveal";
import { advocateData } from "../data/siteData";
import {
  Scale,
  TrendingUp,
  Building2,
  ArrowRight,
  ShieldCheck,
  Users,
  CheckCircle2,
  Lock,
  FileCheck,
  Target,
  Layers,
  Compass,
  FileCheck2,
  Building,
  Network,
  CheckCheck,
  ShieldAlert,
  MapPin,
  ChevronDown,
  ChevronRight,
  User,
  Briefcase,
  ShoppingBag,
  Rocket,
  Factory,
  Home,
  Landmark,
  Globe,
  AlertTriangle,
  Phone,
  Mail,
  Send,
  HelpCircle,
  Plus,
  Minus,
  Check,
} from "lucide-react";
import { openWhatsApp } from "../utils/whatsapp";

export const HomePage = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  // Form states
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    openWhatsApp(
      `Hello Prateek Associates, I would like to enquire. Name: ${formData.name}, Phone: ${formData.phone}, Email: ${formData.email}. Message: ${formData.message}`
    );
  };

  // 1. Core Service Divisions Data matching mockup
  const coreDivisions = [
    {
      id: "legal",
      title: "Legal Consultancy",
      description: "Expert legal advice and representation in civil, criminal and corporate matters.",
      image: "/images/supreme_court_hero.jpg",
      icon: Scale,
      link: "/services#advocacy",
    },
    {
      id: "taxation",
      title: "Taxation Services",
      description: "Strategic tax planning and compliance for individuals and businesses.",
      image: "/images/client_consultation_hd.jpg",
      icon: TrendingUp,
      link: "/services#taxation",
    },
    {
      id: "property",
      title: "Property Consultancy",
      description: "Trusted assistance for property buying, selling and documentation.",
      image: "/images/property_building_hd.jpg",
      icon: Building2,
      link: "/services#property",
    },
  ];

  // 2. Practice Grid (6 Cards) matching mockup
  const practiceGrid = [
    {
      title: "Supreme Court of India",
      image: "/images/supreme_court_hero.jpg",
      link: "/about",
    },
    {
      title: "Chambers & Library",
      image: "/images/chambers_graphic.jpg",
      link: "/chambers",
    },
    {
      title: "Official Practice Profile",
      image: "/images/prateek_portrait_4.jpg",
      link: "/about",
    },
    {
      title: "Courtroom Practice",
      image: "/images/courtroom_gavel_hd.jpg",
      link: "/services#advocacy",
    },
    {
      title: "Client Consultation",
      image: "/images/client_consultation_hd.jpg",
      link: "/contact",
    },
    {
      title: "Legal Advisory",
      image: "/images/prateek_banner.jpg",
      link: "/services",
    },
  ];

  // 3. Why Choose Us (6 Pillars) matching mockup
  const whyChooseUs = [
    {
      title: "Expertise & Experience",
      desc: "Decades of in-depth legal knowledge",
      icon: Landmark,
    },
    {
      title: "Client-First Approach",
      desc: "Your goals, our priority",
      icon: Users,
    },
    {
      title: "Transparent Process",
      desc: "Clear and honest advice",
      icon: CheckCircle2,
    },
    {
      title: "Timely Support",
      desc: "Always here when you need us",
      icon: ShieldCheck,
    },
    {
      title: "Wide Range of Services",
      desc: "Legal, Tax & Property",
      icon: Layers,
    },
    {
      title: "Proven Track Record",
      desc: "Trusted by individuals and businesses",
      icon: Target,
    },
  ];

  // 4. Working Process (4 Steps) matching mockup
  const processSteps = [
    {
      step: "01",
      title: "Consultation",
      desc: "Discuss your needs",
    },
    {
      step: "02",
      title: "Strategy",
      desc: "Plan the best approach",
    },
    {
      step: "03",
      title: "Execution",
      desc: "Implement the solution",
    },
    {
      step: "04",
      title: "Support",
      desc: "Ongoing assistance",
    },
  ];

  // 5. Frequently Asked Questions matching mockup
  const faqs = [
    {
      q: "Do you provide online consultation?",
      a: "Yes, we provide online virtual consultations via video conference, phone, and secure document sharing for clients in Delhi, across India, and NRIs globally.",
    },
    {
      q: "What are your consultation charges?",
      a: "Our consultation charges depend on the specific nature and complexity of the matter (Litigation, GST/Income Tax Notice, or Property Review). Transparent pricing is communicated upfront before proceeding.",
    },
    {
      q: "How long does a legal case take?",
      a: "The duration depends on court listings, jurisdiction, and the procedural stage. We prioritize fast filings, timely replies to departmental notices, and proactive court follow-ups.",
    },
    {
      q: "Can I get help with tax filing?",
      a: "Yes. Our CA & Taxation division manages end-to-end ITR, GST monthly returns, scrutiny assessment replies, and appellate representation.",
    },
    {
      q: "Do you assist with property matters?",
      a: "Yes. We offer complete property due diligence, title search, sale deed drafting, registry assistance, and RERA dispute resolution.",
    },
  ];

  return (
    <div className="bg-white text-slate-800">
      {/* 1. Hero Section matching mockup */}
      <HeroSection />

      {/* 2. Core Service Divisions Section matching mockup */}
      <section className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Reveal direction="top">
          <div className="space-y-2 max-w-2xl mx-auto mb-12 sm:mb-14">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
              Our Core Service Divisions
            </h2>
            <p className="text-xs sm:text-sm text-slate-500">
              Expertise across multiple areas to meet your legal and consultancy needs.
            </p>
          </div>
        </Reveal>

        {/* 3 Dark / White Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          {coreDivisions.map((division, idx) => {
            const Icon = division.icon;
            return (
              <Reveal key={division.id} direction="bottom" delay={idx * 150}>
                <div className="group rounded-2xl bg-white border border-slate-200 shadow-xs hover:border-amber-400 hover:shadow-xl transition-all duration-300 flex flex-col h-full">
                  {/* Photo container made bigger with floating circular badge that is NEVER cut */}
                  <div className="relative">
                    <div className="h-60 sm:h-68 w-full overflow-hidden rounded-t-2xl bg-slate-100">
                      <img
                        src={division.image}
                        alt={division.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />
                    </div>

                    {/* Floating Circular Badge cleanly overlapping - 100% full circle, no cut */}
                    <div className="absolute -bottom-6 left-6 z-20">
                      <div className="w-13 h-13 rounded-full bg-[#0B1325] border-2 border-amber-400 text-amber-400 flex items-center justify-center shadow-xl group-hover:bg-amber-400 group-hover:text-slate-950 transition-colors">
                        <Icon className="w-6 h-6 stroke-[2]" />
                      </div>
                    </div>
                  </div>

                  {/* Card Content with pt-9 so text never collides with the circular icon */}
                  <div className="pt-9 p-6 flex-1 flex flex-col justify-between space-y-4 rounded-b-2xl bg-white">
                    <div>
                      <h3 className="font-serif font-bold text-slate-900 text-lg group-hover:text-amber-700 transition-colors">
                        {division.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-500 leading-relaxed mt-2">
                        {division.description}
                      </p>
                    </div>

                    <div className="pt-2">
                      <Link
                        to={division.link}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-600 hover:text-amber-700 group-hover:translate-x-1 transition-all"
                      >
                        <span>Learn More</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* 3. About Us Split Feature Box matching mockup */}
      <section className="py-6 sm:py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal direction="bottom">
          <div className="rounded-3xl border border-slate-200/90 shadow-sm bg-white overflow-hidden p-6 sm:p-10 text-left">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left Photo of Supreme Court Building in Crisp Daylight */}
              <div className="lg:col-span-5">
                <div className="rounded-2xl overflow-hidden shadow-md border border-slate-200 bg-slate-100 group aspect-[4/3]">
                  <img
                    src="/images/about_supreme_court_daylight.jpg"
                    alt="Supreme Court of India"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>

              {/* Right Content */}
              <div className="lg:col-span-7 space-y-5">
                {/* Gold eyebrow */}
                <div className="flex items-center gap-2">
                  <span className="w-6 h-[2px] bg-amber-400" />
                  <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-900">
                    ABOUT US
                  </span>
                </div>

                <h2 className="font-serif text-2xl sm:text-3xl lg:text-[34px] font-bold text-slate-900 leading-tight">
                  Integrated Guidance for Legal, Taxation<br className="hidden sm:inline" /> &amp; Real Estate Decisions.
                </h2>

                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed max-w-2xl">
                  With deep expertise and a client-first approach, we help you navigate complex legal,
                  tax and business challenges with confidence.
                </p>

                {/* 2-Column Checkmark Grid matching mockup */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {[
                    "Client-Centric Approach",
                    "Professional Expertise",
                    "Transparent Process",
                    "Timely Support",
                    "Result Oriented",
                    "Trusted Partner",
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 text-xs text-slate-700 font-medium">
                      <div className="w-4 h-4 rounded-full bg-amber-400 text-slate-950 flex items-center justify-center shrink-0">
                        <Check className="w-2.5 h-2.5 stroke-[3]" />
                      </div>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                {/* Dual Action Buttons matching mockup */}
                <div className="pt-4 flex flex-wrap items-center gap-4">
                  <Link
                    to="/about"
                    className="px-6 py-3 rounded-lg bg-[#0B1325] hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider transition-colors inline-flex items-center gap-2"
                  >
                    <span>Know More About Us</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  <Link
                    to="/contact"
                    className="px-6 py-3 rounded-lg border border-slate-300 hover:border-slate-500 text-slate-800 font-semibold text-xs uppercase tracking-wider transition-colors"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* 4. Advocate Prateek Pal in Practice (6 Grid Cards) matching mockup */}
      <section className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Reveal direction="top">
          <div className="space-y-2 max-w-2xl mx-auto mb-12 sm:mb-14">
            <div className="flex items-center justify-center gap-2">
              <span className="w-6 h-[2px] bg-amber-400" />
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight">
                Advocate Prateek Pal in Practice
              </h2>
              <span className="w-6 h-[2px] bg-amber-400" />
            </div>
            <p className="text-xs sm:text-sm text-slate-500">
              Explore our legal expertise through real case work and practice areas.
            </p>
          </div>
        </Reveal>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
          {practiceGrid.map((item, idx) => (
            <Reveal key={idx} direction={idx % 2 === 0 ? "left" : "right"} delay={(idx % 3) * 100}>
              <Link
                to={item.link}
                className="group relative rounded-2xl overflow-hidden bg-slate-950 aspect-[16/10] block shadow-xs hover:shadow-xl transition-all"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                />
                {/* Bottom Overlay with title and gold circular arrow */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent flex items-end p-4 sm:p-5">
                  <div className="w-full flex items-center justify-between text-white">
                    <span className="font-serif font-bold text-sm sm:text-base text-white group-hover:text-amber-400 transition-colors">
                      {item.title}
                    </span>
                    <div className="w-7 h-7 rounded-full bg-amber-400 text-slate-950 flex items-center justify-center shrink-0 shadow-md group-hover:scale-110 transition-transform">
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* 5. Why Choose Prateek Associates? (6 Pillars) matching mockup */}
      <section className="py-16 sm:py-20 bg-slate-50/70 border-t border-slate-200 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Reveal direction="top">
          <div className="space-y-2 max-w-2xl mx-auto mb-12 sm:mb-14">
            <div className="flex items-center justify-center gap-2">
              <span className="w-6 h-[2px] bg-amber-400" />
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight">
                Why Choose Prateek Associates?
              </h2>
              <span className="w-6 h-[2px] bg-amber-400" />
            </div>
            <p className="text-xs sm:text-sm text-slate-500">
              Your trusted legal and tax consultancy partner.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
          {whyChooseUs.map((item, idx) => {
            const Icon = item.icon;
            return (
              <Reveal key={idx} direction="bottom" delay={(idx % 3) * 100}>
                <div className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-amber-400 hover:shadow-md transition-all group h-full">
                  <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 border border-amber-200/80 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif font-bold text-slate-900 text-base mb-1.5 group-hover:text-amber-700 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* 6. Who We Serve (Dark Navy Full-Width Banner) matching mockup */}
      <section className="bg-[#0B1325] text-white py-12 px-4 sm:px-6 lg:px-8 border-y border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
          <div className="space-y-4 text-left">
            <div>
              <span className="text-[11px] font-bold text-amber-400 uppercase tracking-[0.2em] block">
                &mdash; WHO WE SERVE &mdash;
              </span>
              <p className="text-xs text-slate-300 mt-1">
                Dedicated to individuals, businesses and institutions.
              </p>
            </div>

            {/* 4 Sector Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-left">
              {[
                { icon: User, title: "Individuals", desc: "Personal legal & tax advice" },
                { icon: Briefcase, title: "Businesses", desc: "Corporate legal support" },
                { icon: Landmark, title: "Institutions", desc: "Advisory for institutions" },
                { icon: Globe, title: "NRIs", desc: "Cross-border legal solutions" },
              ].map((badge, idx) => {
                const Icon = badge.icon;
                return (
                  <div key={idx} className="flex items-start gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-amber-400/15 border border-amber-400/30 text-amber-400 flex items-center justify-center shrink-0 mt-0.5">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-serif font-bold text-white text-xs sm:text-sm">
                        {badge.title}
                      </h4>
                      <p className="text-[10px] text-slate-400 leading-tight">
                        {badge.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Gold Consultation Button */}
          <div className="shrink-0 flex items-center">
            <Link
              to="/contact"
              className="px-6 py-3 rounded-lg bg-amber-400 hover:bg-amber-500 text-slate-950 font-bold text-xs uppercase tracking-wider transition-colors inline-flex items-center gap-2 shadow-md"
            >
              <span>Consultation</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 7. Two-Column Split: Our Working Process + FAQs matching mockup */}
      <section className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 text-left">
          {/* Left Column: Our Working Process */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900">
                Our Working Process
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                A simple and transparent process to get the best results.
              </p>
            </div>

            {/* 4 Process Circles in Line */}
            <div className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
              {processSteps.map((step) => (
                <div key={step.step} className="space-y-2 flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full border-2 border-amber-400 bg-amber-50 text-amber-800 font-serif font-bold text-sm flex items-center justify-center shadow-xs">
                    {step.step}
                  </div>
                  <h4 className="font-serif font-bold text-slate-900 text-xs">
                    {step.title}
                  </h4>
                  <p className="text-[10px] text-slate-500 leading-tight">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Frequently Asked Questions */}
          <div className="lg:col-span-6 space-y-4">
            <div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900">
                Frequently Asked Questions
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Quick answers to common queries.
              </p>
            </div>

            <div className="space-y-2 pt-2">
              {faqs.map((faq, idx) => {
                const isOpen = openFaqIndex === idx;
                return (
                  <div
                    key={idx}
                    className="border border-slate-200 rounded-xl bg-white overflow-hidden transition-colors"
                  >
                    <button
                      onClick={() => setOpenFaqIndex(isOpen ? -1 : idx)}
                      className="w-full p-4 text-left flex items-center justify-between gap-3 text-xs sm:text-sm font-serif font-bold text-slate-900 hover:text-amber-700 transition-colors"
                    >
                      <span>{faq.q}</span>
                      <span className="text-amber-600 shrink-0 font-bold text-base">
                        {isOpen ? "−" : "+"}
                      </span>
                    </button>
                    {isOpen && (
                      <div className="px-4 pb-4 pt-1 text-xs text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/50">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 8. Contact Prateek Associates (Split Card) matching mockup */}
      <section className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal direction="top">
          <div className="space-y-2 max-w-2xl mx-auto mb-10 text-center">
            <div className="flex items-center justify-center gap-2">
              <span className="w-6 h-[2px] bg-amber-400" />
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                Contact Prateek Associates
              </h2>
              <span className="w-6 h-[2px] bg-amber-400" />
            </div>
            <p className="text-xs sm:text-sm text-slate-500">
              Get in touch for expert legal and tax advice.
            </p>
          </div>
        </Reveal>

        {/* Split Card */}
        <Reveal direction="bottom">
          <div className="rounded-3xl border border-slate-200 shadow-sm bg-white p-6 sm:p-10 text-left">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left Side: 3 Contact Info Pills */}
              <div className="lg:col-span-5 space-y-4">
                <a
                  href={`tel:${advocateData.personal.phone}`}
                  className="flex items-center gap-3.5 p-4 rounded-xl border border-slate-200 hover:border-amber-400 hover:shadow-xs transition-all group"
                >
                  <div className="w-10 h-10 rounded-full bg-amber-50 text-amber-600 border border-amber-200 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-slate-900 text-sm">
                      {advocateData.personal.phoneDisplay}
                    </h4>
                    <p className="text-[11px] text-slate-500">Call us anytime</p>
                  </div>
                </a>

                <a
                  href={`mailto:${advocateData.personal.email}`}
                  className="flex items-center gap-3.5 p-4 rounded-xl border border-slate-200 hover:border-amber-400 hover:shadow-xs transition-all group"
                >
                  <div className="w-10 h-10 rounded-full bg-amber-50 text-amber-600 border border-amber-200 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-slate-900 text-sm">
                      {advocateData.personal.email}
                    </h4>
                    <p className="text-[11px] text-slate-500">Email us directly</p>
                  </div>
                </a>

                <div className="flex items-center gap-3.5 p-4 rounded-xl border border-slate-200">
                  <div className="w-10 h-10 rounded-full bg-amber-50 text-amber-600 border border-amber-200 flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-slate-900 text-sm">
                      New Delhi, India
                    </h4>
                    <p className="text-[11px] text-slate-500">
                      Chamber 527, Patiala House Courts
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Side: Contact Form matching mockup */}
              <div className="lg:col-span-7">
                <form onSubmit={handleFormSubmit} className="space-y-3.5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <input
                      type="text"
                      required
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 text-xs text-slate-800 outline-hidden bg-slate-50/50"
                    />
                    <input
                      type="email"
                      required
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 text-xs text-slate-800 outline-hidden bg-slate-50/50"
                    />
                  </div>

                  <input
                    type="tel"
                    required
                    placeholder="Phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 text-xs text-slate-800 outline-hidden bg-slate-50/50"
                  />

                  <textarea
                    rows={3}
                    required
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 text-xs text-slate-800 outline-hidden bg-slate-50/50"
                  />

                  <button
                    type="submit"
                    className="w-full py-3 px-6 rounded-lg bg-[#0B1325] hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors shadow-xs"
                  >
                    <span>Send Message</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  {formSubmitted && (
                    <p className="text-center text-xs text-emerald-600 font-semibold pt-1">
                      Thank you! Opening WhatsApp to connect with Advocate Prateek Pal...
                    </p>
                  )}
                </form>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
};
