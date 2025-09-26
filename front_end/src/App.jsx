import { Routes, Route } from "react-router-dom";
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import VisionMission from './components/VisionMission';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import LifeAtTechNew from './components/LifeAtTechNew';
import Lifeabout from './components/Lifeabout';
import ScrollToTop from './components/ScrollToTop';



function App() {
  return (
    <>
      <Navigation />
       <ScrollToTop />
      <Routes>
        <Route path="/" element={<><Hero /><LifeAtTechNew/></>} />
        <Route path="/about" element={<><About  /><VisionMission /><Lifeabout/></>} />
        <Route path="/services" element={<Services />} />
        <Route path="/vision-mission" element={<VisionMission />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/service" element={<Services />} />
      </Routes>
      <Footer />
      <BackToTop />
    </>
  );
}

export default App;
