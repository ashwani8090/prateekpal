import React, { useState } from "react";
import { advocateData } from "../../data/siteData";
import {
  ShieldAlert,
  Gavel,
  FileCheck,
  Scale,
  Briefcase,
  FileText,
  Landmark,
  Handshake,
  TrendingUp,
  Calculator,
  FileSpreadsheet,
  Award,
  ArrowRight,
  MessageCircle,
} from "lucide-react";
import { openWhatsApp } from "../../utils/whatsapp";

export const ServicesMatrix = () => {
  const [activeTab, setActiveTab] = useState("gst");

  const iconMap = {
    ShieldAlert,
    Gavel,
    FileCheck,
    Scale,
    Briefcase,
    FileText,
    Landmark,
    Handshake,
    TrendingUp,
    Calculator,
    FileSpreadsheet,
    Award,
  };

  const currentCategory =
    advocateData.serviceCategories.find((cat) => cat.id === activeTab) ||
    advocateData.serviceCategories[0];

  return (
    <section id="services" className="py-24 bg-slate-900/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold tracking-wider uppercase">
            <Gavel className="w-3.5 h-3.5" />
            <span>Practice Areas &amp; Capabilities</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white tracking-tight">
            Specialized Legal &amp; Fiscal Representation
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            From High Court constitutional writ petitions to routine statutory
            filings, our chambers offer end-to-end advocacy and strategic tax
            counsel tailored for growing companies and individual taxpayers.
          </p>

          {/* Interactive Category Tabs */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {advocateData.serviceCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 flex items-center gap-2 ${
                  activeTab === cat.id
                    ? "bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/25 scale-105"
                    : "bg-slate-800/80 text-slate-300 hover:bg-slate-800 hover:text-white border border-slate-700/80"
                }`}
              >
                <span>{cat.name}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.5 rounded-md font-bold uppercase ${
                    activeTab === cat.id
                      ? "bg-slate-950/20 text-slate-900"
                      : "bg-slate-900 text-amber-400"
                  }`}
                >
                  {cat.badge}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {currentCategory.services.map((svc) => {
            const Icon = iconMap[svc.icon] || Scale;
            return (
              <div
                key={svc.id}
                className="group p-6 rounded-2xl bg-slate-950/80 border border-slate-800 hover:border-amber-500/40 hover:bg-slate-900/90 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 shadow-xl"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 group-hover:scale-110 group-hover:bg-amber-500 group-hover:text-slate-950 transition-all duration-300 mb-5">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif font-bold text-white text-lg mb-2.5 group-hover:text-amber-300 transition-colors">
                    {svc.title}
                  </h3>
                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-6">
                    {svc.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-850/80 flex items-center justify-between">
                  <button
                    onClick={() =>
                      openWhatsApp(
                        `Hello Advocate Prateek Pal, I would like to consult regarding "${svc.title}".`
                      )
                    }
                    className="text-xs font-semibold text-emerald-400 hover:text-emerald-300 flex items-center gap-1.5 transition-colors"
                  >
                    <MessageCircle className="w-3.5 h-3.5 fill-current" />
                    <span>Inquire via WhatsApp</span>
                  </button>

                  <a
                    href="#contact"
                    className="text-slate-500 group-hover:text-amber-400 transition-colors p-1"
                    title="Book Consultation"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner for urgent assessment orders */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-850 to-slate-900 border border-amber-500/30 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <h4 className="font-serif font-bold text-white text-base sm:text-lg">
              Have a time-sensitive GST assessment order or recovery notice?
            </h4>
            <p className="text-xs text-slate-400 mt-1">
              Filing limitation clock starts immediately upon departmental service.
              Early statutory drafting prevents irreversible recovery actions.
            </p>
          </div>
          <button
            onClick={() =>
              openWhatsApp(
                "Hello Advocate Prateek Pal, I have an urgent GST assessment order / recovery notice deadline and require expedited drafting."
              )
            }
            className="shrink-0 px-6 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs tracking-wide shadow-md shadow-amber-500/20 transition-all flex items-center gap-2"
          >
            <span>Consult on WhatsApp Mobile</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </section>
  );
};
