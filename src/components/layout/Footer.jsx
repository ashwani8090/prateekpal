import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Scale,
  Phone,
  Mail,
  MapPin,
  Send,
  Linkedin,
  Twitter,
  Youtube,
  Facebook,
  Instagram,
  Globe,
  Building,
  Landmark,
} from "lucide-react";
import { advocateData } from "../../data/siteData";
import { openWhatsApp } from "../../utils/whatsapp";

export const Footer = () => {
  const [emailSub, setEmailSub] = useState("");
  const [subDone, setSubDone] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (emailSub) {
      setSubDone(true);
      setEmailSub("");
    }
  };

  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800 pt-16 pb-12 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800/80">
          {/* Col 1: Brand & Overview */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-slate-900 border border-amber-500/40 flex items-center justify-center text-amber-400">
                <Scale className="w-5 h-5 stroke-[2]" />
              </div>
              <div>
                <h4 className="font-serif text-lg font-bold text-white tracking-wide">
                  Prateek Associates
                </h4>
                <p className="text-[10px] text-amber-400/90 font-semibold tracking-wider uppercase">
                  Legal | CA &amp; Taxation | Property Consultancy
                </p>
              </div>
            </Link>

            <p className="text-xs text-slate-400 leading-relaxed">
              Professional consultancy providing integrated services in legal advocacy, taxation, financial compliance, and property transactions across Delhi and Uttar Pradesh.
            </p>

            <p className="text-[11px] text-slate-500 font-medium">
              Founder: <strong className="text-slate-300 font-semibold">Prateek Pal, Advocate</strong>
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-2.5 pt-1">
              <a
                href={advocateData.personal.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-slate-900 hover:bg-amber-400 hover:text-slate-950 text-slate-300 flex items-center justify-center transition-colors"
                title="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={advocateData.personal.socials.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-slate-900 hover:bg-amber-400 hover:text-slate-950 text-slate-300 flex items-center justify-center transition-colors"
                title="Twitter / X"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href={advocateData.personal.socials.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-slate-900 hover:bg-amber-400 hover:text-slate-950 text-slate-300 flex items-center justify-center transition-colors"
                title="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${advocateData.personal.email}`}
                className="w-8 h-8 rounded-full bg-slate-900 hover:bg-amber-400 hover:text-slate-950 text-slate-300 flex items-center justify-center transition-colors"
                title="Email Inquiry"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Core Divisions & Quick Links */}
          <div>
            <h5 className="text-[11px] font-bold text-white uppercase tracking-[0.2em] mb-4">
              PRACTICE DIVISIONS
            </h5>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link to="/services#advocacy" className="hover:text-amber-400 transition-colors">
                  Advocacy &amp; Legal Services
                </Link>
              </li>
              <li>
                <Link to="/services#taxation" className="hover:text-amber-400 transition-colors">
                  CA &amp; Taxation Services
                </Link>
              </li>
              <li>
                <Link to="/services#property" className="hover:text-amber-400 transition-colors">
                  Property Consultancy
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-amber-400 transition-colors">
                  About Prateek Associates
                </Link>
              </li>
              <li>
                <Link to="/process" className="hover:text-amber-400 transition-colors">
                  Our Working Process
                </Link>
              </li>
              <li>
                <Link to="/clients" className="hover:text-amber-400 transition-colors">
                  Who We Serve
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-amber-400 transition-colors">
                  Contact &amp; Consultations
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Dual Offices (Delhi & UP) */}
          <div className="space-y-4">
            <h5 className="text-[11px] font-bold text-white uppercase tracking-[0.2em] mb-3">
              OFFICE LOCATIONS
            </h5>
            
            <div className="space-y-3 text-xs">
              {/* New Delhi Chamber */}
              <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                <div className="flex items-center gap-2 text-amber-400 font-semibold text-xs mb-1">
                  <Landmark className="w-3.5 h-3.5" />
                  <span>New Delhi Chamber</span>
                </div>
                <p className="text-slate-300 font-medium">
                  {advocateData.personal.offices.delhi.address}
                </p>
                <p className="text-[11px] text-slate-400">
                  {advocateData.personal.offices.delhi.city}
                </p>
              </div>

              {/* Uttar Pradesh Corporate Office */}
              <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                <div className="flex items-center gap-2 text-amber-400 font-semibold text-xs mb-1">
                  <Building className="w-3.5 h-3.5" />
                  <span>Uttar Pradesh Office</span>
                </div>
                <p className="text-slate-300 font-medium">
                  {advocateData.personal.offices.up.address}
                </p>
                <p className="text-[11px] text-slate-400">
                  {advocateData.personal.offices.up.city}
                </p>
              </div>
            </div>
          </div>

          {/* Col 4: Quick Contact & Direct Action */}
          <div>
            <h5 className="text-[11px] font-bold text-white uppercase tracking-[0.2em] mb-4">
              DIRECT CONTACT
            </h5>
            <ul className="space-y-3 text-xs text-slate-400 mb-5">
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <a
                  href={`tel:${advocateData.personal.phone}`}
                  className="hover:text-amber-400 font-semibold text-white transition-colors"
                >
                  {advocateData.personal.phoneDisplay}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <a
                  href={`mailto:${advocateData.personal.email}`}
                  className="hover:text-amber-400 text-slate-300 transition-colors"
                >
                  {advocateData.personal.email}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Globe className="w-4 h-4 text-amber-400 shrink-0" />
                <span className="text-slate-300">
                  {advocateData.personal.website}
                </span>
              </li>
            </ul>

            <button
              onClick={() => openWhatsApp("Hello Prateek Associates, I would like to schedule a consultation.")}
              className="w-full py-2.5 px-4 rounded-lg bg-emerald-700 hover:bg-emerald-600 text-white text-xs font-semibold flex items-center justify-center gap-2 shadow-sm transition-all"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.301-.15-1.782-.879-2.058-.98-.276-.1-.477-.15-.678.15-.2.301-.777.98-.953 1.181-.176.2-.352.226-.653.075-.301-.15-1.272-.469-2.423-1.496-.895-.798-1.5-1.784-1.676-2.085-.176-.301-.019-.464.132-.614.136-.135.301-.352.452-.528.15-.176.2-.301.301-.502.101-.2.05-.376-.025-.527-.075-.15-.678-1.633-.929-2.235-.244-.587-.492-.507-.678-.516-.176-.008-.376-.01-.577-.01-.2 0-.527.075-.803.376-.276.301-1.054 1.03-1.054 2.511 0 1.481 1.079 2.91 1.23 3.111.15.201 2.124 3.243 5.145 4.549.719.311 1.281.497 1.719.636.723.23 1.38.197 1.9.12.58-.087 1.782-.728 2.033-1.431.251-.703.251-1.306.176-1.431-.076-.126-.276-.201-.577-.352z" />
                <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.982-1.396A9.96 9.96 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18.25c-1.637 0-3.167-.47-4.469-1.284l-.321-.198-2.962.83.844-2.887-.217-.346A8.22 8.22 0 013.75 12c0-4.549 3.701-8.25 8.25-8.25s8.25 3.701 8.25 8.25-3.701 8.25-8.25 8.25z" />
              </svg>
              <span>Instant WhatsApp Connect</span>
            </button>
          </div>
        </div>

        {/* Regulatory & Statutory Disclaimers */}
        <div className="pt-8 pb-4 text-[11px] text-slate-500 leading-relaxed border-b border-slate-900 space-y-2">
          <p>
            <strong className="text-slate-400">Legal &amp; Professional Disclaimer:</strong> {advocateData.disclaimers.general}
          </p>
          <p>
            <strong className="text-slate-400">Statutory Notice:</strong> {advocateData.disclaimers.caServices}
          </p>
        </div>

        {/* Sub-Footer Bottom Bar matching mockup */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#0B1325] border border-amber-400 text-amber-400 flex items-center justify-center">
              <Scale className="w-4 h-4" />
            </div>
            <div>
              <span className="font-serif font-bold text-white text-sm">
                Prateek Associates
              </span>
              <span className="text-[10px] text-slate-500 block">
                Trust &bull; Expertise &bull; Results
              </span>
            </div>
          </div>

          <div className="flex gap-4 text-xs font-medium text-slate-400">
            <Link to="/" className="hover:text-amber-400 transition-colors">
              Home
            </Link>
            <span>|</span>
            <Link to="/about" className="hover:text-amber-400 transition-colors">
              About
            </Link>
            <span>|</span>
            <Link to="/services" className="hover:text-amber-400 transition-colors">
              Services
            </Link>
            <span>|</span>
            <Link to="/contact" className="hover:text-amber-400 transition-colors">
              Contact
            </Link>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <div className="flex items-center gap-2.5">
              <span className="text-[10px] font-bold uppercase text-slate-400">Follow Us:</span>
              <a
                href={advocateData.personal.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-amber-400 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-3.5 h-3.5" />
              </a>
              <a
                href={advocateData.personal.socials.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-amber-400 transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-3.5 h-3.5" />
              </a>
              <a
                href={advocateData.personal.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-amber-400 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-3.5 h-3.5" />
              </a>
              <a
                href={advocateData.personal.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-amber-400 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-3.5 h-3.5" />
              </a>
              <a
                href={advocateData.personal.socials.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-amber-400 transition-colors text-xs font-bold"
                aria-label="X (Twitter)"
              >
                𝕏
              </a>
            </div>
            <p className="text-[11px] text-slate-500">
              &copy; 2026 Prateek Associates. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
