import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { advocateData } from "../data/siteData";
import { Reveal } from "../components/common/Reveal";
import {
  Scale,
  TrendingUp,
  Building2,
  Landmark,
  FileSpreadsheet,
  Briefcase,
  Handshake,
  ShieldAlert,
  Building,
  FileText,
  Globe,
  FileCheck,
  Calculator,
  BookOpen,
  ShieldCheck,
  AlertOctagon,
  PieChart,
  Globe2,
  Home,
  Repeat,
  FileSearch,
  FileSignature,
  MapPin,
  Receipt,
  Key,
  ArrowRight,
  CheckCircle2,
  AlertTriangle,
} from "lucide-react";
import { openWhatsApp } from "../utils/whatsapp";

export const ServicesPage = () => {
  const location = useLocation();
  const [activeDivision, setActiveDivision] = useState("advocacy");

  useEffect(() => {
    if (location.hash) {
      const cleanHash = location.hash.replace("#", "");
      if (["advocacy", "taxation", "property"].includes(cleanHash)) {
        setActiveDivision(cleanHash);
      }
    }
  }, [location.hash]);

  const iconMap = {
    Scale,
    TrendingUp,
    Building2,
    Landmark,
    FileSpreadsheet,
    Briefcase,
    Handshake,
    ShieldAlert,
    Building,
    FileText,
    Globe,
    FileCheck,
    Calculator,
    BookOpen,
    ShieldCheck,
    AlertOctagon,
    PieChart,
    Globe2,
    Home,
    Repeat,
    FileSearch,
    FileSignature,
    MapPin,
    Receipt,
    Key,
  };

  const currentDivisionData =
    advocateData.serviceDivisionsDetailed.find((d) => d.id === activeDivision) ||
    advocateData.serviceDivisionsDetailed[0];

  return (
    <div className="pt-24 pb-20 space-y-12 bg-[#F8FAFC]">
      {/* 1. Header Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <div className="anim-top-to-bottom inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 text-amber-800 text-xs font-semibold border border-amber-200 uppercase tracking-wider">
          <Scale className="w-3.5 h-3.5" />
          <span>Integrated Practice Divisions</span>
        </div>
        <h1 className="anim-top-to-bottom anim-delay-100 font-serif text-3xl sm:text-5xl font-bold text-slate-900 tracking-tight">
          Comprehensive Services &amp; Advisory
        </h1>
        <p className="anim-left-to-right anim-delay-200 text-slate-600 text-xs sm:text-sm max-w-3xl mx-auto leading-relaxed">
          Integrated professional solutions across legal advocacy, tax compliance, corporate accounts, and residential/commercial real estate transactions.
        </p>

        {/* Division Tab Switcher */}
        <div className="anim-left-to-right anim-delay-300 pt-6 flex flex-wrap items-center justify-center gap-3">
          {advocateData.serviceDivisionsDetailed.map((division) => {
            const isActive = activeDivision === division.id;
            return (
              <button
                key={division.id}
                onClick={() => setActiveDivision(division.id)}
                className={`px-5 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2.5 ${
                  isActive
                    ? "bg-slate-900 text-amber-400 shadow-md scale-105"
                    : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-50 hover:text-slate-900"
                }`}
              >
                {division.id === "advocacy" && <Scale className="w-4 h-4" />}
                {division.id === "taxation" && <TrendingUp className="w-4 h-4" />}
                {division.id === "property" && <Building2 className="w-4 h-4" />}
                <span>{division.name}</span>
              </button>
            );
          })}
        </div>
      </section>

      {/* 2. Active Division Overview Box with Division Photo */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-6 text-left">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <Reveal direction="left" className="space-y-4">
                <div>
                  <span className="text-[11px] font-bold text-amber-600 uppercase tracking-[0.2em] block mb-1">
                    DIVISION OVERVIEW
                  </span>
                  <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900">
                    {currentDivisionData.name}
                  </h2>
                  <p className="text-xs font-semibold text-slate-500 mt-1">
                    {currentDivisionData.headline}
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {currentDivisionData.intro}
                </p>

                {/* Philosophy / Approach / Commitment Note */}
                {currentDivisionData.approach && (
                  <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200 text-xs text-amber-950">
                    <strong className="font-serif font-bold text-amber-900 block mb-1">
                      Our Legal Approach:
                    </strong>
                    {currentDivisionData.approach}
                  </div>
                )}
                {currentDivisionData.philosophy && (
                  <div className="p-4 rounded-xl bg-slate-100 border border-slate-200 text-xs text-slate-800">
                    <strong className="font-serif font-bold text-slate-900 block mb-1">
                      Our Taxation Philosophy:
                    </strong>
                    {currentDivisionData.philosophy}
                  </div>
                )}
                {currentDivisionData.commitment && (
                  <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200 text-xs text-amber-950">
                    <strong className="font-serif font-bold text-amber-900 block mb-1">
                      Our Property Consultancy Commitment:
                    </strong>
                    {currentDivisionData.commitment}
                  </div>
                )}

                <div className="pt-2">
                  <button
                    onClick={() =>
                      openWhatsApp(
                        `Hello Prateek Associates, I would like to consult regarding ${currentDivisionData.name}.`
                      )
                    }
                    className="px-5 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs flex items-center gap-2 shadow-xs transition-colors"
                  >
                    <span>Consult Regarding This Division</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </Reveal>
            </div>

            {/* Division Photo: Covers Entire Card with Zero Black Space */}
            <div className="lg:col-span-4 flex justify-center">
              <Reveal direction="right" className="w-full max-w-sm">
                <div className="rounded-2xl overflow-hidden border border-slate-200/90 bg-white shadow-lg group">
                  {/* Full-bleed image covering the card edge-to-edge */}
                  <div className="aspect-[3/4] w-full overflow-hidden bg-slate-100">
                    <img
                      src={
                        activeDivision === "advocacy"
                          ? "/images/prateek_portrait_2.jpg"
                          : activeDivision === "taxation"
                          ? "/images/prateek_portrait_5.jpg"
                          : "/images/prateek_portrait_4.jpg"
                      }
                      alt={currentDivisionData.name}
                      className={`w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ${
                        activeDivision === "taxation" ? "object-[center_12%]" : "object-center"
                      }`}
                    />
                  </div>
                  {/* Clean white info bar underneath - zero black space */}
                  <div className="p-4 bg-white text-left border-t border-slate-100">
                    <p className="font-serif font-bold text-sm text-slate-900">
                      Advocate Prateek Pal
                    </p>
                    <p className="text-[11px] font-semibold text-amber-600 mt-0.5">
                      Lead Practice Counsel &bull; {currentDivisionData.name}
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Detailed Subsections Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
          {currentDivisionData.sections.map((sec, idx) => {
            const Icon = iconMap[sec.icon] || Scale;
            const direction = idx % 2 === 0 ? "left" : "right";
            return (
              <Reveal key={sec.code} direction={direction} delay={(idx % 2) * 100}>
                <div className="p-7 rounded-2xl bg-white border border-slate-200 hover:border-amber-400 hover:shadow-md transition-all space-y-4 h-full">
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-slate-100 border border-slate-200 text-amber-700 flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold text-amber-700 uppercase tracking-wider block">
                        Section {sec.code}
                      </span>
                      <h3 className="font-serif font-bold text-slate-900 text-base leading-snug">
                        {sec.title}
                      </h3>
                    </div>
                  </div>

                  <ul className="space-y-2 pt-2 text-xs text-slate-600">
                    {sec.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>

                  {sec.note && (
                    <div className="p-3 rounded-lg bg-slate-50 border border-slate-200 text-[11px] text-slate-500 italic mt-3">
                      {sec.note}
                    </div>
                  )}
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* 4. Bottom CTA Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal direction="bottom">
          <div className="p-8 rounded-3xl bg-slate-900 text-white flex flex-col sm:flex-row items-center justify-between gap-6 text-left">
            <div className="space-y-1">
              <h3 className="font-serif font-bold text-xl sm:text-2xl text-white">
                Need Professional Guidance in {currentDivisionData.name}?
              </h3>
              <p className="text-xs text-slate-400">
                Share your case files, notice documents, or property records for an initial assessment.
              </p>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <Link
                to="/contact"
                className="px-6 py-3 rounded-lg bg-amber-400 hover:bg-amber-500 text-slate-950 font-bold text-xs uppercase tracking-wider transition-colors inline-flex items-center gap-2 shadow-sm"
              >
                <span>Schedule Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
};
