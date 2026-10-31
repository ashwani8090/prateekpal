import React, { useState } from "react";
import { Link } from "react-router-dom";
import { advocateData } from "../data/siteData";
import { Reveal } from "../components/common/Reveal";
import {
  MessageSquare,
  FileSearch,
  Scale,
  CheckCircle2,
  Briefcase,
  Send,
  ChevronDown,
  ArrowRight,
  Phone,
} from "lucide-react";
import { openWhatsApp } from "../utils/whatsapp";

export const ProcessPage = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  const iconMap = {
    MessageSquare,
    FileSearch,
    Scale,
    CheckCircle2,
    Briefcase,
    Send,
  };

  return (
    <div className="pt-24 pb-20 space-y-16 bg-[#F8FAFC] text-left">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <div className="anim-top-to-bottom inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 text-amber-800 text-xs font-semibold border border-amber-200 uppercase tracking-wider">
          <Scale className="w-3.5 h-3.5" />
          <span>Structured Engagement Model</span>
        </div>
        <h1 className="anim-top-to-bottom anim-delay-100 font-serif text-3xl sm:text-5xl font-bold text-slate-900 tracking-tight">
          Our Working Process
        </h1>
        <p className="anim-left-to-right anim-delay-200 text-slate-600 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed">
          How we work with you: from initial consultation and document review to procedural assessment, execution, and regular updates.
        </p>
      </section>

      {/* 6 Steps Timeline */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        {advocateData.workingProcess.map((item, idx) => {
          const Icon = iconMap[item.icon] || CheckCircle2;
          const direction = idx % 2 === 0 ? "left" : "right";
          return (
            <Reveal key={item.step} direction={direction} delay={idx * 50}>
              <div className="p-7 sm:p-8 rounded-2xl bg-white border border-slate-200 shadow-xs hover:border-amber-400 hover:shadow-md transition-all flex flex-col sm:flex-row items-start gap-6">
                <div className="flex sm:flex-col items-center justify-between gap-2 shrink-0">
                  <span className="font-serif text-3xl sm:text-4xl font-bold text-amber-600">
                    Step {item.step}
                  </span>
                  <div className="w-11 h-11 rounded-xl bg-amber-50 border border-amber-200 text-amber-700 flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                <div className="space-y-2 flex-1">
                  <h3 className="font-serif text-xl font-bold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            </Reveal>
          );
        })}
      </section>

      {/* FAQs Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Reveal direction="top" className="text-center space-y-3 mb-10">
          <div className="text-[11px] font-bold text-amber-600 uppercase tracking-[0.2em]">
            — COMMON QUERIES —
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900">
            Frequently Asked Questions
          </h2>
          <p className="text-xs sm:text-sm text-slate-500">
            Answers regarding our legal drafting, tax notice replies, and property transactions.
          </p>
        </Reveal>

        <Reveal direction="bottom" className="space-y-3">
          {advocateData.faqs.map((faq, idx) => {
            const isOpen = openFaqIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-xl border border-slate-200 bg-white overflow-hidden transition-colors"
              >
                <button
                  onClick={() => setOpenFaqIndex(isOpen ? -1 : idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-serif font-bold text-slate-900 text-sm hover:text-amber-700 transition-colors"
                >
                  <span>
                    {idx + 1}. {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 shrink-0 transition-transform ${
                      isOpen ? "rotate-180 text-amber-600" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/50">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </Reveal>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal direction="bottom">
          <div className="p-8 rounded-2xl bg-slate-900 text-white flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-serif font-bold text-xl text-white">
                Ready to Initiate Step 1?
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Contact Prateek Associates to discuss your legal, taxation, or property matter.
              </p>
            </div>
            <Link
              to="/contact"
              className="shrink-0 px-6 py-3 rounded-lg bg-amber-400 hover:bg-amber-500 text-slate-950 font-bold text-xs uppercase tracking-wider transition-colors inline-flex items-center gap-2 shadow-sm"
            >
              <span>Book Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </Reveal>
      </section>
    </div>
  );
};
