import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative min-h-[540px] sm:min-h-[620px] lg:min-h-[640px] flex items-center bg-[#060D1E] text-white overflow-hidden text-left pt-24 sm:pt-28 pb-14 sm:pb-20">
      {/* Full-Width Background Architectural Palace Image Covering Entire Screen */}
      <div className="absolute inset-0 z-0 w-full h-full overflow-hidden">
        <img
          src="/images/supreme_court_hero.jpg"
          alt="Supreme Court Judicial Architecture"
          className="w-full h-full object-cover object-center"
        />
        {/* Balanced cinematic scrim so image spans the entire width while keeping text crystal clear */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#060D1E]/90 via-[#060D1E]/65 to-[#060D1E]/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#060D1E]/80 via-transparent to-[#060D1E]/40" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="max-w-2xl space-y-6">
          {/* Eyebrow badge matching mockup */}
          <div className="anim-top-to-bottom flex items-center gap-2">
            <span className="w-6 h-[2px] bg-amber-400" />
            <span className="text-[11px] sm:text-xs font-bold text-amber-400 uppercase tracking-[0.22em]">
              PROFESSIONAL &bull; TRUSTED &bull; RESULT DRIVEN
            </span>
            <span className="w-6 h-[2px] bg-amber-400" />
          </div>

          {/* Main Headline */}
          <h1 className="anim-top-to-bottom anim-delay-100 font-serif text-3xl sm:text-5xl lg:text-[54px] font-bold text-white leading-[1.14] tracking-tight drop-shadow-md">
            Professional Expertise.<br />
            Practical Solutions.<br />
            <span className="italic text-amber-400 font-normal">
              Trusted Guidance.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="anim-left-to-right anim-delay-200 text-sm sm:text-base text-slate-200 font-normal leading-relaxed max-w-lg drop-shadow-xs">
            Comprehensive legal and property consultancy services with a commitment to excellence.
          </p>

          {/* Dual Action Buttons matching mockup */}
          <div className="anim-left-to-right anim-delay-300 flex flex-wrap items-center gap-4 pt-2">
            <Link
              to="/services"
              className="px-6 sm:px-7 py-3 rounded-lg bg-amber-400 hover:bg-amber-500 text-slate-950 font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-2 shadow-md hover:shadow-lg hover:-translate-y-0.5"
            >
              <span>Explore Our Services</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              to="/contact"
              className="px-6 sm:px-7 py-3 rounded-lg bg-slate-900/70 hover:bg-slate-800 border border-slate-600 hover:border-slate-400 text-white font-semibold text-xs uppercase tracking-wider transition-all backdrop-blur-xs"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
