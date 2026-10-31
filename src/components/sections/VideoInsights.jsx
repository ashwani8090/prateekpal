import React from "react";
import { advocateData } from "../../data/siteData";
import { Youtube, ExternalLink, Play, BookOpen } from "lucide-react";

export const VideoInsights = () => {
  return (
    <section id="insights" className="py-24 bg-slate-900/60 text-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-semibold tracking-wider uppercase">
              <Youtube className="w-3.5 h-3.5" />
              <span>Legal Insights &amp; Briefings</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Appellate Law &amp; GST Masterclasses
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed">
              Watch Advocate Prateek Pal dissect complex provisions of the CGST Act,
              tribunal litigation nuances, and proven tactics for replying to
              show-cause notices.
            </p>
          </div>

          <a
            href={advocateData.personal.socials.youtube}
            target="_blank"
            rel="noopener noreferrer"
            className="self-start md:self-auto px-5 py-2.5 rounded-xl bg-red-600 hover:bg-red-500 text-white font-semibold text-xs flex items-center gap-2 shadow-lg shadow-red-950/40 transition-all hover:scale-105"
          >
            <Youtube className="w-4 h-4" />
            <span>Visit Official YouTube Channel</span>
            <ExternalLink className="w-3 h-3 ml-1" />
          </a>
        </div>

        {/* Video Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {advocateData.youtubeVideos.map((video) => (
            <div
              key={video.id}
              className="bg-slate-950 rounded-2xl border border-slate-800 overflow-hidden shadow-2xl flex flex-col group hover:border-amber-500/40 transition-colors"
            >
              {/* Responsive 16:9 Video Embed */}
              <div className="relative aspect-video w-full bg-slate-900">
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube-nocookie.com/embed/${video.videoId}`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>

              {/* Video metadata */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif font-bold text-white text-lg mb-2 group-hover:text-amber-400 transition-colors">
                    {video.title}
                  </h3>
                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-4">
                    {video.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-900 flex items-center justify-between">
                  <span className="text-xs text-amber-400 font-medium flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>Appellate Guide</span>
                  </span>
                  <a
                    href={video.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold text-slate-300 hover:text-white flex items-center gap-1"
                  >
                    <span>Watch on YouTube</span>
                    <ExternalLink className="w-3 h-3 text-red-400" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
