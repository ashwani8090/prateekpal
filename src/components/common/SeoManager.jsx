import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ROUTE_SEO_MAP = {
  "/": {
    title: "Prateek Associates | Advocate Prateek Pal | Legal, CA & Taxation, Property Consultancy",
    description: "Integrated professional advocacy, CA & taxation compliance, and property consultancy across New Delhi and Uttar Pradesh. Chambers at Patiala House Courts.",
  },
  "/services": {
    title: "Practice Divisions & Services | Legal, CA & Property | Prateek Associates",
    description: "Explore our three integrated divisions: Advocacy & Litigation, CA & Taxation Advisory, and Commercial Property Title Verification & Consulting.",
  },
  "/about": {
    title: "About Advocate Prateek Pal | Founder & Legal Practice | Prateek Associates",
    description: "Learn about Advocate Prateek Pal, appellate credentials before the Supreme Court of India & Delhi High Court, and our multi-disciplinary firm.",
  },
  "/chambers": {
    title: "Chambers & Court Practice | Supreme Court & Delhi High Court | Prateek Associates",
    description: "Chambers of Advocate Prateek Pal at Patiala House Courts, New Delhi, handling appellate litigation, constitutional writs, and corporate disputes.",
  },
  "/process": {
    title: "Advisory Protocol & Engagement Workflow | Prateek Associates",
    description: "Structured, confidential, and transparent legal consultation workflow from initial case assessment to courtroom representation and compliance.",
  },
  "/insights": {
    title: "Legal, Tax & Property Insights | Articles & Regulatory Analysis | Prateek Associates",
    description: "Authoritative analysis on GST disputes, Income Tax compliance, High Court rulings, RERA documentation, and commercial property due diligence.",
  },
  "/clients": {
    title: "Client Portfolio & Sectors Served | Prateek Associates",
    description: "Serving institutional clients, corporate enterprises, MSMEs, traders, high-net-worth property investors, and individual litigants across North India.",
  },
  "/contact": {
    title: "Contact Chambers & Offices | New Delhi & Farrukhabad | Prateek Associates",
    description: "Schedule a confidential consultation with Advocate Prateek Pal. Dual offices at Patiala House Courts, New Delhi and Farrukhabad, Uttar Pradesh.",
  },
};

export const SeoManager = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const seoData = ROUTE_SEO_MAP[pathname] || ROUTE_SEO_MAP["/"];
    const canonicalUrl = `https://www.prateekpal.com${pathname === "/" ? "" : pathname}`;

    // Update document title
    document.title = seoData.title;

    // Update or insert meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement("meta");
      metaDesc.setAttribute("name", "description");
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute("content", seoData.description);

    // Update or insert canonical link
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", canonicalUrl);

    // Update OpenGraph tags
    const updateOrCreateMeta = (attr, attrValue, content) => {
      let el = document.querySelector(`meta[${attr}="${attrValue}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, attrValue);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    updateOrCreateMeta("property", "og:title", seoData.title);
    updateOrCreateMeta("property", "og:description", seoData.description);
    updateOrCreateMeta("property", "og:url", canonicalUrl);
    updateOrCreateMeta("name", "twitter:title", seoData.title);
    updateOrCreateMeta("name", "twitter:description", seoData.description);
  }, [pathname]);

  return null;
};
