import React from "react";
import { ConsultationForm } from "../components/sections/ConsultationForm";
import { advocateData } from "../data/siteData";
import { Reveal } from "../components/common/Reveal";
import {
  Phone,
  AlertTriangle,
  MessageCircle,
  Landmark,
  Building,
  Mail,
  ShieldCheck,
} from "lucide-react";
import { openWhatsApp } from "../utils/whatsapp";

export const ContactPage = () => {
  return (
    <div className="pt-24 pb-20 space-y-12 bg-[#F8FAFC]">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <div className="anim-top-to-bottom inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 text-amber-800 text-xs font-semibold border border-amber-200 uppercase tracking-wider">
          <Phone className="w-3.5 h-3.5" />
          <span>Professional Consultations &bull; Delhi &amp; Uttar Pradesh</span>
        </div>
        <h1 className="anim-top-to-bottom anim-delay-100 font-serif text-3xl sm:text-5xl font-bold text-slate-900 tracking-tight">
          Contact Prateek Associates
        </h1>
        <p className="anim-left-to-right anim-delay-200 text-slate-600 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed">
          Professional Assistance for Legal, Taxation, Financial Compliance &amp; Property Matters.
          Reach out to our chambers in New Delhi or our corporate office in Uttar Pradesh.
        </p>
      </section>

      {/* Emergency / Notice Response Alert Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal direction="top">
          <div className="p-4 sm:p-5 rounded-2xl bg-amber-50/90 border border-amber-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-amber-950 text-left">
            <div className="flex items-center gap-3">
              <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0" />
              <div>
                <strong className="block sm:inline font-bold">
                  Urgent Notice or Limitation Deadline:
                </strong>{" "}
                If you have received an Income Tax / GST Notice, Summons, or have an impending High Court filing limitation, please contact via WhatsApp directly for immediate triaging.
              </div>
            </div>
            <button
              onClick={() =>
                openWhatsApp(
                  "URGENT: Hello Prateek Associates, I have a GST / Income Tax notice or court deadline requiring immediate attention. Please advise."
                )
              }
              className="shrink-0 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center gap-1.5 shadow-xs"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Urgent WhatsApp Line</span>
            </button>
          </div>
        </Reveal>
      </section>

      {/* Main Consultation Form */}
      <section className="max-w-7xl mx-auto">
        <Reveal direction="bottom">
          <ConsultationForm />
        </Reveal>
      </section>
    </div>
  );
};
