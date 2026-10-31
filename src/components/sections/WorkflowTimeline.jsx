import React from "react";
import { advocateData } from "../../data/siteData";
import { CheckCircle2, ArrowRight } from "lucide-react";

export const WorkflowTimeline = () => {
  return (
    <section id="workflow" className="py-24 bg-slate-950 text-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold tracking-wider uppercase">
            <span>Client Engagement Framework</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white tracking-tight">
            How We Protect Your Interests
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Our structured 4-phase representation process guarantees total
            clarity, rigorous evidentiary collation, and zero guesswork from
            the first notice review to final court orders.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {advocateData.workflowSteps.map((step, idx) => (
            <div
              key={step.step}
              className="relative p-6 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-amber-500/30 transition-all flex flex-col justify-between group"
            >
              {/* Step indicator header */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-serif text-3xl font-extrabold text-amber-500/80 group-hover:text-amber-400 transition-colors">
                    {step.step}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                </div>

                <h3 className="font-serif font-bold text-white text-lg mb-2 group-hover:text-amber-300 transition-colors">
                  {step.title}
                </h3>

                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Progress arrow indicator for desktop */}
              {idx < advocateData.workflowSteps.length - 1 && (
                <div className="hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-slate-950 border border-slate-700 flex items-center justify-center text-slate-400">
                  <ArrowRight className="w-4 h-4" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
