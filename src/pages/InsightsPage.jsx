import React from "react";
import { advocateData } from "../data/siteData";
import { FaqSection } from "../components/sections/FaqSection";
import { Youtube, ExternalLink, BookOpen, MessageCircle } from "lucide-react";
import { openWhatsApp } from "../utils/whatsapp";

export const InsightsPage = () => {
  return (
    <div className="pt-24 pb-20 space-y-16 bg-[#F8FAFC]">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 text-red-600 text-xs font-semibold border border-red-100 uppercase tracking-wider">
          <Youtube className="w-3.5 h-3.5" />
          <span>Knowledge &amp; Procedural Hub</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-slate-900 tracking-tight">
          Legal Insights &amp; Video Briefings
        </h1>
        <p className="text-slate-600 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed">
          Educational video masterclasses, statutory interpretations, and answers to frequent procedural tax questions.
        </p>
      </section>

      {/* Videos */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-left">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-slate-200">
          <div>
            <h2 className="font-serif text-2xl font-bold text-slate-900">
              Appellate Law Masterclasses
            </h2>
            <p className="text-xs text-slate-500 mt-0.5">
              Curated legal briefings explaining high-stakes tax concepts simply.
            </p>
          </div>

          <a
            href={advocateData.personal.socials.youtube}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-xl bg-red-600 hover:bg-red-700 text-white font-semibold text-xs flex items-center gap-2 shadow-xs transition-all"
          >
            <Youtube className="w-4 h-4" />
            <span>Subscribe on YouTube</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {advocateData.youtubeVideos.map((video) => (
            <div
              key={video.id}
              className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-xs flex flex-col justify-between"
            >
              <div className="relative aspect-video w-full bg-slate-900">
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube-nocookie.com/embed/${video.videoId}`}
                  title={video.title}
                  allowFullScreen
                ></iframe>
              </div>

              <div className="p-6 space-y-3">
                <h3 className="font-serif font-bold text-slate-900 text-lg">
                  {video.title}
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  {video.description}
                </p>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                  <button
                    onClick={() =>
                      openWhatsApp(
                        `Hello Advocate Prateek Pal, I watched your video briefing "${video.title}" and would like to consult.`
                      )
                    }
                    className="text-xs font-semibold text-emerald-700 hover:text-emerald-800 flex items-center gap-1.5"
                  >
                    <MessageCircle className="w-3.5 h-3.5 fill-current text-emerald-600" />
                    <span>Inquire About This Topic</span>
                  </button>

                  <a
                    href={video.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold text-blue-600 hover:text-blue-700 flex items-center gap-1"
                  >
                    <span>Watch on YouTube</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-white py-16 border-y border-slate-200">
        <FaqSection />
      </section>
    </div>
  );
};
