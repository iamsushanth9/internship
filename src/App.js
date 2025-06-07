// src/App.js
import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingSpinner from "./components/LoadingSpinner"; // Make sure this path is correct

// Lazy load all page components
const Home = lazy(() => import("./Home"));
const About = lazy(() => import("./pages/About"));
const OrgStructure = lazy(() => import("./pages/OrgStructure"));
const Gallery = lazy(() => import("./pages/Gallery"));
const CSR = lazy(() => import("./pages/csr"));
const WhyUs = lazy(() => import('./pages/WhyUs'));
const RecruitmentTraining = lazy(() => import("./pages/RecruitmentTraining"));
const SpecialistSupport = lazy(() => import("./pages/SpecialistSupport"));
const CrewManagement = lazy(() => import("./pages/CrewManagement"));
const ShipRepairing = lazy(() => import("./pages/ShipRepairing"));
const HiringProcessPage = lazy(() => import("./pages/HiringProcessPage"));
const ContactUs = lazy(() => import("./pages/ContactUs"));
const ClientImage = lazy(() => import("./pages/clientimage"));

export default function App() {
  return (
    <Router>
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/org-structure" element={<OrgStructure />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/our-clients" element={<ClientImage />} />
          <Route path="/csr" element={<CSR />} />
          <Route path="/why-us" element={<WhyUs />} />
          <Route path="/recruitment-training" element={<RecruitmentTraining />} />
          <Route path="/specialist-support" element={<SpecialistSupport />} />
          <Route path="/crew-management" element={<CrewManagement />} />
          <Route path="/ship-repairing" element={<ShipRepairing />} />
          <Route path="/hiring-process" element={<HiringProcessPage />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/clientimage" element={<ClientImage />} />
        </Routes>
      </Suspense>
    </Router>
  );
}