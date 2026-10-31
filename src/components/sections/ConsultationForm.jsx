import React, { useState } from "react";
import { advocateData } from "../../data/siteData";
import {
  Phone,
  Mail,
  MapPin,
  Send,
  MessageCircle,
  CheckCircle,
  Landmark,
  Building,
  Globe,
  Clock,
} from "lucide-react";
import { openWhatsApp } from "../../utils/whatsapp";

export const ConsultationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    division: "Advocacy & Legal Services",
    specificArea: "GST Litigation & Notices",
    location: "New Delhi",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleSendViaWhatsApp = () => {
    const text = `*New Inquiry - Prateek Associates (prateekpal.com)*
*Name:* ${formData.name || "Client"}
*Phone:* ${formData.phone || "Not provided"}
*Email:* ${formData.email || "Not provided"}
*Division:* ${formData.division}
*Subject / Specific Area:* ${formData.specificArea}
*Location Preference:* ${formData.location}
*Brief Description:* ${formData.message || "Consultation requested."}`;

    openWhatsApp(text);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Dual Offices & Direct Contacts */}
        <div className="lg:col-span-5 space-y-6">
          <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-6">
            {/* Founder Profile Badge with Photo */}
            <div className="flex items-center gap-4 pb-4 border-b border-slate-100">
              <div className="w-16 h-16 rounded-2xl overflow-hidden border border-amber-400 bg-slate-900 shrink-0 shadow-sm">
                <img
                  src="/images/prateek_portrait_main.jpg"
                  alt="Prateek Pal, Advocate"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div>
                <span className="text-[10px] font-bold text-amber-700 uppercase tracking-widest block">
                  FOUNDER &bull; PRINCIPAL ADVOCATE
                </span>
                <h3 className="font-serif text-lg font-bold text-slate-900">
                  Prateek Pal, Advocate
                </h3>
                <p className="text-xs text-slate-500">
                  Direct Chambers &amp; Advisory Coordination
                </p>
              </div>
            </div>

            <div className="space-y-4 pt-1">
              {/* Phone */}
              <a
                href={`tel:${advocateData.personal.phone}`}
                className="flex items-start gap-3.5 p-4 rounded-2xl bg-slate-50 hover:bg-amber-50/50 border border-slate-200/80 transition-colors group"
              >
                <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider block">
                    Phone Consultation
                  </span>
                  <span className="font-serif font-bold text-slate-900 text-base">
                    {advocateData.personal.phoneDisplay}
                  </span>
                  <span className="text-[11px] text-emerald-600 block mt-0.5">
                    Monday to Saturday: 10:00 AM – 7:30 PM
                  </span>
                </div>
              </a>

              {/* WhatsApp Native Mobile */}
              <div
                onClick={() =>
                  openWhatsApp("Hello Prateek Associates, I would like to schedule a consultation.")
                }
                className="flex items-start gap-3.5 p-4 rounded-2xl bg-emerald-50/60 hover:bg-emerald-50 border border-emerald-200 transition-colors cursor-pointer group"
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <MessageCircle className="w-5 h-5 fill-current" />
                </div>
                <div>
                  <span className="text-[10px] font-semibold text-emerald-800 uppercase tracking-wider block">
                    Instant Messaging
                  </span>
                  <span className="font-serif font-bold text-emerald-950 text-base">
                    Chat on WhatsApp
                  </span>
                  <span className="text-[11px] text-emerald-700 block mt-0.5">
                    Fast response &bull; Case brief transmission
                  </span>
                </div>
              </div>

              {/* Email */}
              <a
                href={`mailto:${advocateData.personal.email}`}
                className="flex items-start gap-3.5 p-4 rounded-2xl bg-slate-50 hover:bg-amber-50/50 border border-slate-200/80 transition-colors group"
              >
                <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider block">
                    Official Email
                  </span>
                  <span className="font-serif font-bold text-slate-900 text-sm break-all">
                    {advocateData.personal.email}
                  </span>
                  <span className="text-[11px] text-slate-500 block mt-0.5">
                    Website: {advocateData.personal.website}
                  </span>
                </div>
              </a>

              {/* Delhi Chambers */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1">
                <div className="flex items-center gap-2 text-xs font-bold text-amber-700">
                  <Landmark className="w-4 h-4" />
                  <span>Delhi Chamber</span>
                </div>
                <p className="font-serif font-bold text-slate-900 text-sm">
                  {advocateData.personal.offices.delhi.address}
                </p>
                <p className="text-xs text-slate-500">
                  {advocateData.personal.offices.delhi.city}
                </p>
              </div>

              {/* UP Corporate Office */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1">
                <div className="flex items-center gap-2 text-xs font-bold text-amber-700">
                  <Building className="w-4 h-4" />
                  <span>Uttar Pradesh Corporate Office</span>
                </div>
                <p className="font-serif font-bold text-slate-900 text-sm">
                  {advocateData.personal.offices.up.address}
                </p>
                <p className="text-xs text-slate-500">
                  {advocateData.personal.offices.up.city}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Case Inquiry / Consultation Form */}
        <div className="lg:col-span-7">
          <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-sm">
            {submitted ? (
              <div className="text-center py-10 space-y-4">
                <div className="w-14 h-14 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle className="w-7 h-7" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-slate-900">
                  Inquiry Transmitted
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm max-w-md mx-auto leading-relaxed">
                  Thank you. Your inquiry has been recorded. For instant response, click below to transmit directly to Advocate Prateek Pal on WhatsApp.
                </p>
                <div className="pt-3 flex flex-col sm:flex-row gap-3 justify-center">
                  <button
                    onClick={handleSendViaWhatsApp}
                    className="px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs flex items-center justify-center gap-2 shadow-sm"
                  >
                    <MessageCircle className="w-4 h-4 fill-current" />
                    <span>Send via WhatsApp</span>
                  </button>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 rounded-xl bg-slate-100 text-slate-700 hover:bg-slate-200 text-xs font-semibold"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-left">
                <div>
                  <span className="text-[11px] font-bold text-amber-600 uppercase tracking-[0.2em] block mb-1">
                    GET IN TOUCH
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-slate-900">
                    Schedule a Discussion
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    Share a brief description of your matter. All inquiries are handled with strict professional confidentiality.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ramesh Kumar"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 focus:outline-none focus:border-amber-500 focus:bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. +91 98765 43210"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 focus:outline-none focus:border-amber-500 focus:bg-white"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="e.g. name@company.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 focus:outline-none focus:border-amber-500 focus:bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Preferred Location
                    </label>
                    <select
                      value={formData.location}
                      onChange={(e) =>
                        setFormData({ ...formData, location: e.target.value })
                      }
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 focus:outline-none focus:border-amber-500 focus:bg-white"
                    >
                      <option value="New Delhi">New Delhi (Patiala House Courts)</option>
                      <option value="Farrukhabad">Farrukhabad (Uttar Pradesh)</option>
                      <option value="Virtual / Phone">Online / Video / Phone</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Service Division *
                    </label>
                    <select
                      value={formData.division}
                      onChange={(e) =>
                        setFormData({ ...formData, division: e.target.value })
                      }
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 focus:outline-none focus:border-amber-500 focus:bg-white"
                    >
                      <option value="Advocacy & Legal Services">
                        Advocacy &amp; Legal Services
                      </option>
                      <option value="GST & Income Tax Consultancy">
                        GST &amp; Income Tax Consultancy
                      </option>
                      <option value="CA & Accounting Services">
                        CA &amp; Accounting Services
                      </option>
                      <option value="Business Registration & Compliance">
                        Business Registration &amp; Compliance
                      </option>
                      <option value="RERA & Property Legal Assistance">
                        RERA &amp; Property Legal Assistance
                      </option>
                      <option value="Residential & Commercial Property Consultancy">
                        Residential &amp; Commercial Property
                      </option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Specific Matter / Subject
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. GST Notice Section 73 / Registry / ITR"
                      value={formData.specificArea}
                      onChange={(e) =>
                        setFormData({ ...formData, specificArea: e.target.value })
                      }
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 focus:outline-none focus:border-amber-500 focus:bg-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Brief Description of the Matter
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Provide relevant facts, notice date, property location, or specific questions..."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 focus:outline-none focus:border-amber-500 focus:bg-white"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <button
                    type="submit"
                    className="flex-1 py-3 px-6 rounded-xl bg-amber-400 hover:bg-amber-500 text-slate-950 font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2 shadow-xs"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Inquiry</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleSendViaWhatsApp}
                    className="py-3 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center justify-center gap-2 transition-colors"
                  >
                    <MessageCircle className="w-4 h-4 fill-current" />
                    <span>Send via WhatsApp</span>
                  </button>
                </div>

                <p className="text-[11px] text-slate-400 text-center pt-2">
                  Professional services are subject to the nature of the assignment, applicable laws, jurisdiction, documentation, and professional eligibility requirements.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
