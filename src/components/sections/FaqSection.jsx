import React, { useState } from "react";
import { advocateData } from "../../data/siteData";
import { ChevronDown, HelpCircle, MessageCircle } from "lucide-react";
import { openWhatsApp } from "../../utils/whatsapp";

export const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
      <div className="text-center mb-10 space-y-2">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-semibold border border-blue-100 uppercase tracking-wider">
          <HelpCircle className="w-3.5 h-3.5" />
          <span>Statutory &amp; Procedure Guidance</span>
        </div>
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
          Frequently Addressed Questions
        </h2>
        <p className="text-slate-500 text-xs sm:text-sm">
          Key procedural guidelines concerning tax notices, tribunal appeals, and engaging legal counsel.
        </p>
      </div>

      {/* Accordions */}
      <div className="space-y-3">
        {advocateData.faqs.map((faq, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={idx}
              className="rounded-2xl bg-white border border-slate-200 overflow-hidden transition-colors shadow-2xs"
            >
              <button
                onClick={() => toggle(idx)}
                className="w-full p-5 text-left flex items-center justify-between gap-4 hover:text-blue-600 transition-colors"
              >
                <span className="font-serif font-bold text-slate-900 text-sm sm:text-base">
                  {faq.q}
                </span>
                <div
                  className={`w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center shrink-0 transition-transform duration-300 ${
                    isOpen ? "rotate-180 bg-blue-50 text-blue-600" : "text-slate-400"
                  }`}
                >
                  <ChevronDown className="w-4 h-4" />
                </div>
              </button>

              {isOpen && (
                <div className="px-5 pb-5 pt-1 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 animate-fade-in">
                  {faq.a}
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="mt-8 text-center">
        <button
          onClick={() =>
            openWhatsApp(
              "Hello Advocate Prateek Pal, I have a specific legal question not answered on your FAQ."
            )
          }
          className="inline-flex items-center gap-2 text-xs font-semibold text-blue-600 hover:text-blue-700 transition-colors underline underline-offset-4"
        >
          <MessageCircle className="w-4 h-4 fill-current text-blue-600" />
          <span>Have a specific query? Ask Advocate Prateek Pal on WhatsApp directly</span>
        </button>
      </div>
    </div>
  );
};
