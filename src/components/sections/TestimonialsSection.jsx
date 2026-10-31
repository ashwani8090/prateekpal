import React from "react";
import { advocateData } from "../../data/siteData";
import { Quote, Star, ShieldCheck } from "lucide-react";

export const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-24 bg-slate-900/40 text-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold tracking-wider uppercase">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Client Perspectives</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white tracking-tight">
            Trusted by Businesses &amp; Founders
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Real outcomes from entrepreneurs, corporate leadership, and proprietors
            who relied on our chambers for tax defense and contract clarity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {advocateData.testimonials.map((t) => (
            <div
              key={t.id}
              className="p-8 rounded-2xl bg-slate-950/80 border border-slate-800 hover:border-amber-500/40 transition-all flex flex-col justify-between shadow-xl relative group hover:-translate-y-1"
            >
              <div>
                {/* Quote Icon & Stars */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
                    <Quote className="w-5 h-5 fill-current" />
                  </div>
                  <div className="flex gap-1 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                </div>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed italic mb-8 font-serif">
                  &ldquo;{t.text}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-slate-850 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center font-bold text-amber-400 text-sm">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-serif font-bold text-white text-sm">
                    {t.name}
                  </h4>
                  <p className="text-xs text-slate-400">
                    {t.role} • {t.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
