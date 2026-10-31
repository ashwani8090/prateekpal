import React, { useState } from "react";
import { X, ArrowUpRight } from "lucide-react";
import { openWhatsApp } from "../../utils/whatsapp";

export const FloatingWhatsApp = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="fixed bottom-6 right-5 sm:bottom-8 sm:right-8 z-40 flex flex-col items-end">
      {/* Tooltip banner */}
      {showTooltip && (
        <div className="mb-3 p-3.5 max-w-xs bg-white border border-emerald-200 rounded-2xl shadow-xl text-slate-800 text-xs animate-slide-up text-left">
          <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-100">
            <span className="flex items-center gap-1.5 font-bold text-emerald-700">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              Advocate Prateek Pal Chambers
            </span>
            <button
              onClick={() => setShowTooltip(false)}
              className="text-slate-400 hover:text-slate-700"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
          <p className="text-slate-600 mb-2.5">
            Facing an urgent GST Show Cause Notice or High Court appeal deadline? Connect directly on WhatsApp.
          </p>
          <button
            onClick={() => {
              openWhatsApp(
                "Hello Advocate Prateek Pal, I have an urgent GST notice / court deadline inquiry. Please let me know your availability."
              );
              setShowTooltip(false);
            }}
            className="w-full py-2 px-3 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-medium flex items-center justify-center gap-1.5 transition-colors"
          >
            <span>Launch WhatsApp Mobile</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Main Floating Button */}
      <button
        onClick={() => openWhatsApp()}
        onMouseEnter={() => setShowTooltip(true)}
        aria-label="Contact Advocate Prateek Pal on WhatsApp"
        className="flex items-center gap-2 px-4 py-3 sm:px-5 sm:py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold shadow-lg shadow-emerald-600/30 hover:scale-105 active:scale-95 transition-all duration-300"
      >
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.301-.15-1.782-.879-2.058-.98-.276-.1-.477-.15-.678.15-.2.301-.777.98-.953 1.181-.176.2-.352.226-.653.075-.301-.15-1.272-.469-2.423-1.496-.895-.798-1.5-1.784-1.676-2.085-.176-.301-.019-.464.132-.614.136-.135.301-.352.452-.528.15-.176.2-.301.301-.502.101-.2.05-.376-.025-.527-.075-.15-.678-1.633-.929-2.235-.244-.587-.492-.507-.678-.516-.176-.008-.376-.01-.577-.01-.2 0-.527.075-.803.376-.276.301-1.054 1.03-1.054 2.511 0 1.481 1.079 2.91 1.23 3.111.15.201 2.124 3.243 5.145 4.549.719.311 1.281.497 1.719.636.723.23 1.38.197 1.9.12.58-.087 1.782-.728 2.033-1.431.251-.703.251-1.306.176-1.431-.076-.126-.276-.201-.577-.352z" />
          <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.982-1.396A9.96 9.96 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18.25c-1.637 0-3.167-.47-4.469-1.284l-.321-.198-2.962.83.844-2.887-.217-.346A8.22 8.22 0 013.75 12c0-4.549 3.701-8.25 8.25-8.25s8.25 3.701 8.25 8.25-3.701 8.25-8.25 8.25z" />
        </svg>
        <span className="text-xs sm:text-sm font-semibold hidden sm:inline">
          WhatsApp Direct
        </span>
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-200 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-100"></span>
        </span>
      </button>
    </div>
  );
};
