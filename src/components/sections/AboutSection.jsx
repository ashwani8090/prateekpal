import React from "react";
import { advocateData } from "../../data/siteData";
import { ShieldCheck, Scale, BookOpen, Briefcase, Award, CheckCircle } from "lucide-react";
import { openWhatsApp } from "../../utils/whatsapp";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-slate-950 text-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Chambers Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold tracking-wider uppercase">
              <Scale className="w-3.5 h-3.5" />
              <span>Chambers Background &amp; Philosophy</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white tracking-tight leading-snug">
              Rigorous Statutory Interpretation Combined with Financial Forensic Defense.
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Advocate Prateek Pal is the founder and Principal Advocate at{" "}
              <strong className="text-white">Prateek Associates</strong>, an appellate
              advocacy practice based in New Delhi. He represents enterprises,
              directors, and corporate entities before the Delhi High Court,
              Appellate Authorities, and Indirect Tax Tribunals (GSTAT).
            </p>

            <p className="text-slate-400 text-sm leading-relaxed">
              What sets Prateek Associates apart is the deliberate integration of{" "}
              <strong className="text-slate-200">lawyers and chartered accountants</strong>.
              Tax litigation rarely turns on law alone; it requires reconciling voluminous
              financial ledgers, e-way bill records, and Input Tax Credit (ITC)
              chains with constitutional provisions. Our multidisciplinary chamber
              conducts in-depth forensic investigations before any petition or
              rebuttal is filed.
            </p>

            {/* Differentiating pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
                <div className="flex items-center gap-2 text-amber-400 font-semibold text-sm mb-1">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Zero Statutory Surprises</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Every notice is mapped against the latest GST Council circulars,
                  Supreme Court ratio decidendi, and limitation deadlines.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
                <div className="flex items-center gap-2 text-amber-400 font-semibold text-sm mb-1">
                  <BookOpen className="w-4 h-4" />
                  <span>Transparent Representation</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Full draft concurrence prior to submission, nominal transparent
                  fee structures, and continuous hearing debriefs.
                </p>
              </div>
            </div>

            {/* WhatsApp Quick Link */}
            <div className="pt-2 flex items-center gap-4">
              <button
                onClick={() =>
                  openWhatsApp(
                    "Hello Advocate Prateek Pal, I would like to learn more about your chambers and representation options."
                  )
                }
                className="text-xs font-semibold text-amber-400 hover:text-amber-300 flex items-center gap-1.5 underline underline-offset-4"
              >
                <span>Direct WhatsApp Consultation for Chambers Inquiries</span>
                <span>&rarr;</span>
              </button>
            </div>
          </div>

          {/* Right Column: Career Experience Cards */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="font-serif text-xl font-bold text-white flex items-center gap-2.5 mb-6">
              <Briefcase className="w-5 h-5 text-amber-400" />
              <span>Professional Trajectory</span>
            </h3>

            <div className="relative pl-6 space-y-8 before:absolute before:left-2.5 before:top-3 before:bottom-3 before:w-0.5 before:bg-slate-800">
              {advocateData.experience.map((exp) => (
                <div key={exp.id} className="relative group">
                  {/* Timeline bullet */}
                  <div className="absolute -left-6 top-1 w-5 h-5 rounded-full bg-slate-900 border-2 border-amber-500 group-hover:scale-125 transition-transform" />

                  <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-amber-500/40 transition-colors">
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                        {exp.period}
                      </span>
                      {exp.current && (
                        <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 text-[10px] font-semibold border border-emerald-500/20">
                          Active Chamber
                        </span>
                      )}
                    </div>

                    <h4 className="font-serif font-bold text-white text-base">
                      {exp.role}
                    </h4>
                    <p className="text-xs font-medium text-slate-400 mb-2">
                      {exp.company} • {exp.location}
                    </p>

                    <p className="text-xs text-slate-300 leading-relaxed">
                      {exp.description}
                    </p>

                    {exp.highlights && exp.highlights.length > 0 && (
                      <div className="mt-3 pt-3 border-t border-slate-800/80">
                        {exp.highlights.map((h, i) => (
                          <div
                            key={i}
                            className="flex items-start gap-2 text-[11px] text-amber-300/90"
                          >
                            <CheckCircle className="w-3.5 h-3.5 shrink-0 mt-0.5 text-amber-400" />
                            <span>{h}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
