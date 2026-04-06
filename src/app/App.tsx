import { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import Overview from './components/Overview';
import SistemaActual from './components/SistemaActual';
import Problemas from './components/Problemas';
import Requerimientos from './components/Requerimientos';
import Modelo from './components/Modelo';
import PlanTrabajo from './components/PlanTrabajo';
import Conclusion from './components/Conclusion';

export default function App() {
  const [activeSection, setActiveSection] = useState('overview');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['overview', 'sistema-actual', 'problemas', 'requerimientos', 'modelo', 'plan-trabajo', 'conclusion'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-[#020617]">
      <Sidebar activeSection={activeSection} onNavigate={scrollToSection} />

      <main className="ml-[260px] p-16 max-w-[1040px]">
        <div id="overview" className="mb-20">
          <Overview />
        </div>

        <div id="sistema-actual" className="mb-20">
          <SistemaActual />
        </div>

        <div id="problemas" className="mb-20">
          <Problemas />
        </div>

        <div id="requerimientos" className="mb-20">
          <Requerimientos />
        </div>

        <div id="modelo" className="mb-20">
          <Modelo />
        </div>

        <div id="plan-trabajo" className="mb-20">
          <PlanTrabajo />
        </div>

        <div id="conclusion" className="mb-20">
          <Conclusion />
        </div>
      </main>
    </div>
  );
}
