import React, { useState, useEffect, useRef } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import {
  Scale,
  ArrowRight,
  Menu,
  X,
  Phone,
  ChevronDown,
  TrendingUp,
  Building2,
  MapPin,
  Linkedin,
  Youtube,
  Facebook,
  Instagram,
} from "lucide-react";
import { advocateData } from "../../data/siteData";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
  }, [location.pathname, location.hash]);

  // Click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setServicesDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const serviceSubItems = [
    {
      label: "Advocacy & Legal Services",
      href: "/services#advocacy",
      desc: "Litigation support, High Court, GST & tax disputes",
      icon: Scale,
    },
    {
      label: "CA & Taxation Services",
      href: "/services#taxation",
      desc: "GST returns, ITR, TDS, accounting & compliance",
      icon: TrendingUp,
    },
    {
      label: "Property Consultancy",
      href: "/services#property",
      desc: "Due diligence, conveyance, registry & RERA",
      icon: Building2,
    },
  ];

  const isServicesActive = location.pathname.startsWith("/services");

  // Helper for desktop nav link half underline active & hover state
  const getNavLinkClass = (isActive) =>
    `text-xs font-semibold py-1 transition-all relative inline-flex items-center gap-1 ${
      isActive
        ? "text-slate-950 font-bold after:absolute after:bottom-[-2px] after:left-1/2 after:-translate-x-1/2 after:w-1/2 after:h-[2.5px] after:bg-amber-500 after:rounded-full"
        : "text-slate-600 hover:text-slate-950 after:absolute after:bottom-[-2px] after:left-1/2 after:-translate-x-1/2 after:w-0 hover:after:w-1/2 after:h-[2.5px] after:bg-amber-400/80 after:rounded-full after:transition-all after:duration-200"
    }`;

  // Helper for mobile drawer nav link active state
  const getMobileNavLinkClass = (isActive) =>
    `block px-3 py-2.5 rounded-lg text-sm font-medium transition-colors relative ${
      isActive
        ? "text-slate-950 font-bold bg-amber-50/70 after:absolute after:bottom-1 after:left-3 after:w-12 after:h-[2.5px] after:bg-amber-500 after:rounded-full"
        : "text-slate-700 hover:text-slate-900 hover:bg-slate-50"
    }`;

  return (
    <header className="fixed top-0 left-0 right-0 z-40">
      {/* Top Utility Bar (Dark Slate Bar matching mockup) */}
      <div className="bg-[#0B1325] text-slate-300 text-[11px] py-1 px-4 border-b border-slate-800 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5">
              <Scale className="w-3.5 h-3.5 text-amber-400" />
              <span className="text-slate-200 font-medium tracking-wide">
                Legal | CA &amp; Taxation | Property Consultancy
              </span>
            </div>
            <span className="text-slate-600">|</span>
            <div className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-amber-400" />
              <span className="text-slate-200">New Delhi, India</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={`tel:${advocateData.personal.phone}`}
              className="flex items-center gap-1.5 text-slate-200 hover:text-amber-400 transition-colors font-medium"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>{advocateData.personal.phoneDisplay}</span>
            </a>
            <span className="text-slate-600">|</span>
            <div className="flex items-center gap-3 text-slate-300">
              <a
                href={advocateData.personal.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-amber-400 transition-colors"
                aria-label="LinkedIn"
                title="LinkedIn"
              >
                <Linkedin className="w-3.5 h-3.5" />
              </a>
              <a
                href={advocateData.personal.socials.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-amber-400 transition-colors"
                aria-label="YouTube"
                title="YouTube"
              >
                <Youtube className="w-3.5 h-3.5" />
              </a>
              <a
                href={advocateData.personal.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-amber-400 transition-colors"
                aria-label="Facebook"
                title="Facebook"
              >
                <Facebook className="w-3.5 h-3.5" />
              </a>
              <a
                href={advocateData.personal.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-amber-400 transition-colors"
                aria-label="Instagram"
                title="Instagram"
              >
                <Instagram className="w-3.5 h-3.5" />
              </a>
              <a
                href={advocateData.personal.socials.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-amber-400 transition-colors text-xs font-bold font-serif"
                aria-label="X (Twitter)"
                title="X (Twitter)"
              >
                𝕏
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div
        className={`transition-all duration-200 bg-white ${
          isScrolled
            ? "shadow-sm border-b border-slate-200/90 py-2.5"
            : "border-b border-slate-100 py-3"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo with golden scales badge */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-full bg-[#0B1325] border-2 border-amber-400 flex items-center justify-center text-amber-400 shadow-xs group-hover:scale-105 transition-transform">
                <Scale className="w-5 h-5 stroke-[2]" />
              </div>
              <div className="text-left">
                <span className="font-serif text-lg font-bold tracking-tight text-slate-900 block group-hover:text-amber-700 transition-colors leading-tight">
                  Prateek Associates
                </span>
                <span className="text-[11px] tracking-wider font-semibold text-slate-500 block">
                  Trust &bull; Expertise &bull; Results
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-6">
              <NavLink
                to="/"
                className={({ isActive }) => getNavLinkClass(isActive)}
              >
                Home
              </NavLink>

              <NavLink
                to="/about"
                className={({ isActive }) => getNavLinkClass(isActive)}
              >
                About
              </NavLink>

              {/* MERGED SERVICES NAV ITEM WITH DROPDOWN */}
              <div
                ref={dropdownRef}
                className="relative"
                onMouseEnter={() => setServicesDropdownOpen(true)}
                onMouseLeave={() => setServicesDropdownOpen(false)}
              >
                <Link
                  to="/services"
                  className={getNavLinkClass(isServicesActive)}
                >
                  <span>Our Services</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 text-slate-400 transition-transform duration-200 ${
                      servicesDropdownOpen ? "rotate-180 text-amber-600" : ""
                    }`}
                  />
                </Link>

                {/* Dropdown Menu */}
                {servicesDropdownOpen && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-72 z-50 animate-fade-in">
                    <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-2 text-left space-y-1">
                      <Link
                        to="/services"
                        className="block px-3 py-2 rounded-xl hover:bg-amber-50/60 transition-colors text-xs font-bold text-amber-700 border-b border-slate-100 mb-1"
                      >
                        All Services &amp; Divisions Overview &rarr;
                      </Link>
                      {serviceSubItems.map((subItem) => {
                        const Icon = subItem.icon;
                        return (
                          <Link
                            key={subItem.label}
                            to={subItem.href}
                            className="flex items-start gap-2.5 p-2.5 rounded-xl hover:bg-slate-50 transition-colors group"
                          >
                            <div className="w-7 h-7 rounded-lg bg-amber-50 text-amber-700 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-amber-400 group-hover:text-slate-950 transition-colors">
                              <Icon className="w-3.5 h-3.5" />
                            </div>
                            <div>
                              <span className="font-serif font-bold text-slate-900 text-xs block group-hover:text-amber-700 transition-colors">
                                {subItem.label}
                              </span>
                              <span className="text-[10px] text-slate-500 block leading-tight">
                                {subItem.desc}
                              </span>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>

              <NavLink
                to="/clients"
                className={({ isActive }) => getNavLinkClass(isActive)}
              >
                Who We Serve
              </NavLink>

              <NavLink
                to="/process"
                className={({ isActive }) => getNavLinkClass(isActive)}
              >
                Our Process
              </NavLink>

              <NavLink
                to="/contact"
                className={({ isActive }) => getNavLinkClass(isActive)}
              >
                Contact Us
              </NavLink>
            </nav>

            {/* Right Action Button: Call & Book Consultation in Yellow */}
            <div className="hidden sm:flex items-center gap-4">
              <a
                href={`tel:${advocateData.personal.phone}`}
                className="flex items-center gap-1.5 text-xs font-bold text-slate-800 hover:text-amber-600 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                <span>{advocateData.personal.phoneDisplay}</span>
              </a>
              <Link
                to="/contact"
                className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-500 shadow-xs transition-all tracking-wide"
              >
                <span>Consultation</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Mobile menu trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-slate-700 hover:text-slate-900 hover:bg-slate-100"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 shadow-xl space-y-3 text-left">
          <div className="space-y-1">
            <NavLink
              to="/"
              onClick={() => setMobileMenuOpen(false)}
              className={({ isActive }) => getMobileNavLinkClass(isActive)}
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              onClick={() => setMobileMenuOpen(false)}
              className={({ isActive }) => getMobileNavLinkClass(isActive)}
            >
              About Us
            </NavLink>

            {/* Mobile Services Group */}
            <div className="py-1">
              <NavLink
                to="/services"
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) => getMobileNavLinkClass(isActive || isServicesActive)}
              >
                Our Services (All Divisions)
              </NavLink>
              <div className="pl-4 space-y-1 mt-1 border-l-2 border-amber-200 ml-3">
                <Link
                  to="/services#advocacy"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-3 py-1.5 rounded-md text-xs text-slate-600 hover:text-slate-900"
                >
                  Advocacy &amp; Legal Services
                </Link>
                <Link
                  to="/services#taxation"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-3 py-1.5 rounded-md text-xs text-slate-600 hover:text-slate-900"
                >
                  CA &amp; Taxation Services
                </Link>
                <Link
                  to="/services#property"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-3 py-1.5 rounded-md text-xs text-slate-600 hover:text-slate-900"
                >
                  Property Consultancy
                </Link>
              </div>
            </div>

            <NavLink
              to="/clients"
              onClick={() => setMobileMenuOpen(false)}
              className={({ isActive }) => getMobileNavLinkClass(isActive)}
            >
              Who We Serve
            </NavLink>
            <NavLink
              to="/process"
              onClick={() => setMobileMenuOpen(false)}
              className={({ isActive }) => getMobileNavLinkClass(isActive)}
            >
              Our Process
            </NavLink>
            <NavLink
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className={({ isActive }) => getMobileNavLinkClass(isActive)}
            >
              Contact Us
            </NavLink>
          </div>

          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
            <a
              href={`tel:${advocateData.personal.phone}`}
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg border border-slate-200 text-xs font-semibold text-slate-800"
            >
              <Phone className="w-4 h-4 text-amber-600" />
              <span>Call: {advocateData.personal.phoneDisplay}</span>
            </a>
            <Link
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg bg-amber-400 text-slate-950 text-xs font-bold shadow-xs hover:bg-amber-500"
            >
              <span>Book a Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
