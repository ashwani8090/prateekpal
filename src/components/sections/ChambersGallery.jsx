import React, { useState } from "react";
import { advocateData } from "../../data/siteData";
import { Landmark, Eye, X } from "lucide-react";

export const ChambersGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section id="chambers" className="py-24 bg-slate-950 text-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold tracking-wider uppercase">
            <Landmark className="w-3.5 h-3.5" />
            <span>Infrastructure &amp; Practice Environment</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white tracking-tight">
            Chambers &amp; Appellate Library
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Our New Delhi chambers are equipped with extensive statutory case law
            archives, tax databases, and private client conference suites.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {advocateData.journey.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedImage(item)}
              className="group relative rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 hover:border-amber-500/40 cursor-pointer shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="aspect-[4/3] w-full overflow-hidden bg-slate-950">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                  loading="lazy"
                />
              </div>

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              {/* Caption Content */}
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <h4 className="font-serif font-bold text-white text-base group-hover:text-amber-300 transition-colors">
                  {item.title}
                </h4>
                <p className="text-xs text-slate-300 mt-1 line-clamp-1">
                  {item.caption}
                </p>
              </div>

              {/* Hover quick preview button */}
              <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-slate-950/80 border border-slate-700 flex items-center justify-center text-slate-300 opacity-0 group-hover:opacity-100 transition-opacity">
                <Eye className="w-4 h-4 text-amber-400" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-fade-in">
          <div className="relative max-w-4xl w-full bg-slate-900 rounded-2xl overflow-hidden border border-slate-700 shadow-2xl">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-slate-950/80 text-white hover:bg-amber-500 hover:text-slate-950 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="max-h-[75vh] overflow-hidden bg-black flex items-center justify-center">
              <img
                src={selectedImage.imageUrl}
                alt={selectedImage.title}
                className="max-h-[75vh] w-auto object-contain"
              />
            </div>
            <div className="p-5 bg-slate-900 border-t border-slate-850">
              <h3 className="font-serif text-lg font-bold text-white">
                {selectedImage.title}
              </h3>
              <p className="text-sm text-slate-300 mt-1">
                {selectedImage.caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
