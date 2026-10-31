import React from "react";
import { advocateData } from "../../data/siteData";
import { Calendar, Users, FileText, Landmark } from "lucide-react";

export const TrustMetrics = () => {
  const icons = [Calendar, Users, FileText, Landmark];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
        {advocateData.metrics.map((item, idx) => {
          const Icon = icons[idx] || Calendar;
          return (
            <div
              key={item.label}
              className="p-5 sm:p-6 rounded-2xl bg-blue-50/60 border border-blue-100 hover:border-blue-200 hover:bg-blue-50 transition-all flex flex-col items-start justify-center shadow-2xs"
            >
              <div className="w-10 h-10 rounded-xl bg-white border border-blue-100 flex items-center justify-center text-blue-600 mb-3 shadow-2xs">
                <Icon className="w-5 h-5" />
              </div>
              <span className="font-serif text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                {item.value}
              </span>
              <span className="text-xs font-medium text-slate-500 mt-1">
                {item.label}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
};
