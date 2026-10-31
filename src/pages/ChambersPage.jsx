import React, { useState } from "react";
import { Link } from "react-router-dom";
import { advocateData } from "../data/siteData";
import {
  Landmark,
  Eye,
  X,
  BookOpen,
  ShieldCheck,
  MessageCircle,
} from "lucide-react";
import { openWhatsApp } from "../utils/whatsapp";

export const ChambersPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="pt-24 pb-20 space-y-16 bg-[#F8FAFC]">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-semibold border border-blue-100 uppercase tracking-wider">
          <Landmark className="w-3.5 h-3.5" />
          <span>Practice Chambers &amp; Infrastructure</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-slate-900 tracking-tight">
          Chambers &amp; Appellate Library
        </h1>
        <p className="text-slate-600 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed">
          Situated in New Delhi, Prateek Associates is equipped with comprehensive tax research archives, constitutional law repositories, and secure client briefing suites.
        </p>
      </section>

      {/* Gallery Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {advocateData.journey.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedImage(item)}
              className="group relative rounded-2xl overflow-hidden bg-white border border-slate-200 hover:border-amber-400 hover:shadow-xl cursor-pointer transition-all flex flex-col h-full"
            >
              {/* Image covers entire card - zero black borders */}
              <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-slate-100">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 z-20">
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-slate-900/85 backdrop-blur-md text-amber-400 border border-amber-500/30">
                    {item.category || "Practice"}
                  </span>
                </div>
              </div>

              <div className="p-5 text-left flex-1 flex flex-col justify-between space-y-1 bg-white">
                <div>
                  <h3 className="font-serif font-bold text-slate-900 text-base group-hover:text-amber-700 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                    {item.caption}
                  </p>
                </div>
                <div className="pt-2 text-[11px] font-bold text-amber-600">
                  Click to view full photo &rarr;
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-xs animate-fade-in">
          <div className="relative max-w-3xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-3 right-3 z-10 p-2 rounded-full bg-slate-950/70 text-white hover:bg-slate-900"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="max-h-[70vh] overflow-hidden bg-black flex items-center justify-center">
              <img
                src={selectedImage.imageUrl}
                alt={selectedImage.title}
                className="max-h-[70vh] w-auto object-contain"
              />
            </div>
            <div className="p-5 text-left bg-white border-t border-slate-100">
              <h3 className="font-serif text-base font-bold text-slate-900">
                {selectedImage.title}
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                {selectedImage.caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
