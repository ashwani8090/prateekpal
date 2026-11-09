import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { BciDisclaimerModal } from "./components/layout/BciDisclaimerModal";
import { FloatingWhatsApp } from "./components/ui/FloatingWhatsApp";
import { ScrollToTop } from "./components/common/ScrollToTop";
import { SeoManager } from "./components/common/SeoManager";

// Dedicated Pages
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { ServicesPage } from "./pages/ServicesPage";
import { ProcessPage } from "./pages/ProcessPage";
import { InsightsPage } from "./pages/InsightsPage";
import { ClientsPage } from "./pages/ClientsPage";
import { ChambersPage } from "./pages/ChambersPage";
import { ContactPage } from "./pages/ContactPage";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <SeoManager />
      <div className="min-h-screen bg-white text-slate-800 flex flex-col relative selection:bg-amber-400 selection:text-slate-950 font-sans">
        {/* Mandatory Bar Council of India Regulatory Modal */}
        <BciDisclaimerModal />

        {/* Floating WhatsApp Action Pill with Native Mobile Deep-link */}
        <FloatingWhatsApp />

        {/* Header Navigation */}
        <Navbar />

        {/* Multi-Page Routes */}
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/process" element={<ProcessPage />} />
            <Route path="/insights" element={<InsightsPage />} />
            <Route path="/clients" element={<ClientsPage />} />
            <Route path="/chambers" element={<ChambersPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
