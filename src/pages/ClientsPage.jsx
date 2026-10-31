import React from "react";
import { Link } from "react-router-dom";
import { advocateData } from "../data/siteData";
import { Reveal } from "../components/common/Reveal";
import {
  User,
  Briefcase,
  ShoppingBag,
  Users,
  Building2,
  Rocket,
  Factory,
  Home,
  Landmark,
  Globe,
  AlertTriangle,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";
import { openWhatsApp } from "../utils/whatsapp";

export const ClientsPage = () => {
  const iconMap = {
    User,
    Briefcase,
    ShoppingBag,
    Users,
    Building2,
    Rocket,
    Factory,
    Home,
    Landmark,
    Globe,
    AlertTriangle,
  };

  return (
    <div className="pt-24 pb-20 space-y-16 bg-[#F8FAFC] text-left">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <div className="anim-top-to-bottom inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 text-amber-800 text-xs font-semibold border border-amber-200 uppercase tracking-wider">
          <Users className="w-3.5 h-3.5" />
          <span>Clientele &amp; Sectoral Representation</span>
        </div>
        <h1 className="anim-top-to-bottom anim-delay-100 font-serif text-3xl sm:text-5xl font-bold text-slate-900 tracking-tight">
          Who We Serve
        </h1>
        <p className="anim-left-to-right anim-delay-200 text-slate-600 text-xs sm:text-sm max-w-3xl mx-auto leading-relaxed">
          Prateek Associates provides professional assistance to a diverse range of clients across Delhi, Uttar Pradesh, and across borders for NRIs.
        </p>
      </section>

      {/* 11 Client Groups Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {advocateData.whoWeServe.map((item, idx) => {
            const Icon = iconMap[item.icon] || Users;
            const direction = idx % 2 === 0 ? "left" : "right";
            return (
              <Reveal key={idx} direction={direction} delay={(idx % 3) * 100}>
                <div className="p-7 rounded-2xl bg-white border border-slate-200 hover:border-amber-400 hover:shadow-md transition-all space-y-3 group h-full">
                  <div className="w-11 h-11 rounded-xl bg-amber-50 text-amber-700 border border-amber-200/80 flex items-center justify-center group-hover:scale-105 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif font-bold text-slate-900 text-base group-hover:text-amber-700 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Regulatory & Tailored Service Framework Note */}
        <Reveal direction="bottom" delay={200}>
          <div className="mt-12 p-6 rounded-2xl bg-white border border-slate-200 flex items-start gap-4 text-xs text-slate-600">
            <ShieldCheck className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <p className="leading-relaxed">
              <strong className="text-slate-800 font-semibold">Tailored Assignment Framework:</strong> Our services are tailored to the specific nature of each assignment, the client&apos;s documentation, and the applicable legal and regulatory framework. Outcomes depend on the facts, applicable law, evidence, and decisions of the relevant authorities or courts.
            </p>
          </div>
        </Reveal>
      </section>

      {/* Bottom CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal direction="bottom">
          <div className="p-8 sm:p-10 rounded-3xl bg-slate-900 text-white flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-2">
              <h3 className="font-serif font-bold text-2xl text-white">
                Discuss Your Requirements With Us
              </h3>
              <p className="text-xs text-slate-400 max-w-xl">
                Whether you are an individual taxpayer, business owner, trader, or NRI, we provide practical solutions and structured guidance.
              </p>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <Link
                to="/contact"
                className="px-6 py-3 rounded-lg bg-amber-400 hover:bg-amber-500 text-slate-950 font-bold text-xs uppercase tracking-wider transition-colors inline-flex items-center gap-2 shadow-sm"
              >
                <span>Contact Us Today</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
};
