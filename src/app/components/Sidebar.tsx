interface SidebarProps {
  activeSection: string;
  onNavigate: (section: string) => void;
}

export default function Sidebar({ activeSection, onNavigate }: SidebarProps) {
  const sections = [
    { id: 'overview', label: 'Overview' },
    { id: 'sistema-actual', label: 'Sistema Actual' },
    { id: 'problemas', label: 'Problemas' },
    { id: 'requerimientos', label: 'Requerimientos' },
    { id: 'modelo', label: 'Modelo SI' },
    { id: 'plan-trabajo', label: 'Plan Trabajo' },
    { id: 'conclusion', label: 'Conclusión' }
  ];

  return (
    <aside className="fixed left-0 top-0 w-[260px] h-screen bg-[#0f172a] px-6 py-8 overflow-y-auto">
      <div className="mb-12">
        <div className="text-[18px] font-semibold text-[#e2e8f0] leading-tight mb-1">
          ENTREGABLE TECLAB 2A
        </div>
        <div className="text-[14px] text-[#94a3b8]">
          System Analysis Case Study
        </div>
      </div>

      <nav className="space-y-4">
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => onNavigate(section.id)}
            className={`w-full text-left text-[14px] px-3 py-2 rounded-lg transition-all duration-250 ${
              activeSection === section.id
                ? 'bg-[#38bdf8] text-[#020617] font-medium'
                : 'text-[#94a3b8] hover:text-[#e2e8f0] hover:bg-[#1e293b]'
            }`}
          >
            {section.label}
          </button>
        ))}
      </nav>
    </aside>
  );
}
