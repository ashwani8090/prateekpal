import React, { useState, useEffect } from "react";
import { ShieldCheck, Scale } from "lucide-react";

export const BciDisclaimerModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const acknowledged = localStorage.getItem("bci_disclaimer_accepted");
    if (!acknowledged) {
      setIsOpen(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("bci_disclaimer_accepted", "true");
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-xs animate-fade-in text-left">
      <div className="relative max-w-lg w-full bg-white border border-amber-500/30 rounded-2xl shadow-2xl p-6 sm:p-8 text-slate-700">
        <div className="flex items-center gap-3 pb-4 border-b border-slate-100">
          <div className="p-2.5 rounded-full bg-legal-navy text-legal-gold">
            <Scale className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-serif text-xl font-bold text-slate-900 tracking-tight">
              Bar Council of India Disclaimer
            </h3>
            <p className="text-[10px] text-amber-700 font-bold tracking-widest uppercase">
              Regulatory Compliance Notice
            </p>
          </div>
        </div>

        <div className="mt-4 space-y-3 text-xs text-slate-600 leading-relaxed max-h-[55vh] overflow-y-auto pr-1">
          <p>
            As per the rules of the <strong>Bar Council of India</strong>, advocates and law firms are strictly prohibited from soliciting work or advertising.
          </p>
          <p>
            By clicking <strong>&quot;I Agree &amp; Proceed&quot;</strong>, the user acknowledges that:
          </p>
          <ul className="list-disc list-inside space-y-1.5 pl-1 text-slate-500">
            <li>You are seeking information relating to Advocate Prateek Pal of your own accord.</li>
            <li>There has been no form of advertisement, personal communication, or solicitation.</li>
            <li>Information on this website is solely available for general informational purposes.</li>
            <li>The contents do not constitute legal advice or create an attorney-client relationship.</li>
          </ul>
        </div>

        <div className="mt-6 pt-4 border-t border-slate-100 flex justify-end">
          <button
            onClick={handleAccept}
            className="w-full sm:w-auto px-6 py-2.5 rounded-md bg-legal-gold hover:bg-legal-goldDark text-legal-navyDark font-semibold text-xs tracking-wide shadow-sm transition-all flex items-center justify-center gap-2"
          >
            <ShieldCheck className="w-4 h-4" />
            <span>I Agree &amp; Proceed</span>
          </button>
        </div>
      </div>
    </div>
  );
};
