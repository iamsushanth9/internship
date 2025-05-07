import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./pages/About";
import OrgStructure from "./pages/OrgStructure";
import Gallery from "./pages/Gallery";
import OurClients from "./pages/OurClients";
import Licence from "./pages/Licence";
import WhyUs from './pages/WhyUs';
import RecruitmentTraining from "./pages/RecruitmentTraining";
import SpecialistSupport from "./pages/SpecialistSupport";
import CrewManagement from "./pages/CrewManagement";
import ShipRepairing from "./pages/ShipRepairing";
import HiringProcessPage from "./pages/HiringProcessPage";


export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/org-structure" element={<OrgStructure />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/our-clients" element={<OurClients />} />
        <Route path="/licence" element={<Licence />} />
        <Route path="/why-us" element={<WhyUs />} />
        <Route path="/recruitment-training" element={<RecruitmentTraining />} />
        <Route path="/specialist-support" element={<SpecialistSupport />} />
        <Route path="/crew-management" element={<CrewManagement />} />
        <Route path="/ship-repairing" element={<ShipRepairing />} />
        <Route path="/" element={<Home />} />
        <Route path="/hiring-process" element={<HiringProcessPage />} />

      </Routes>
    </Router>
  );
}
