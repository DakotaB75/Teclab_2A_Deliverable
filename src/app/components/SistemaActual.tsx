export default function SistemaActual() {
  const flow = [
    { step: 'Usuario', description: 'Solicita préstamo' },
    { step: 'Registro Manual', description: 'Anotación en papel' },
    { step: 'Excel', description: 'Transcripción manual' },
    { step: 'Reporte', description: 'Generación manual' }
  ];

  const badges = [
    { label: 'Manual', color: '#ef4444' },
    { label: 'Error humano', color: '#f59e0b' },
    { label: 'No tiempo real', color: '#ef4444' }
  ];

  return (
    <section>
      <h2 className="text-[24px] font-semibold text-[#e2e8f0] mb-8">
        Sistema Actual
      </h2>

      <div className="flex items-center justify-between mb-8 bg-[#0f172a] rounded-xl p-8">
        {flow.map((item, index) => (
          <div key={index} className="flex items-center">
            <div className="text-center">
              <div className="w-[180px] h-[80px] bg-[#1e293b] border border-[rgba(148,163,184,0.2)] rounded-xl flex items-center justify-center mb-2">
                <div>
                  <div className="text-[16px] font-medium text-[#e2e8f0] mb-1">
                    {item.step}
                  </div>
                  <div className="text-[12px] text-[#94a3b8]">
                    {item.description}
                  </div>
                </div>
              </div>
            </div>
            {index < flow.length - 1 && (
              <div className="mx-4 text-[#38bdf8] text-[24px]">→</div>
            )}
          </div>
        ))}
      </div>

      <div className="flex gap-4 justify-center">
        {badges.map((badge, index) => (
          <div
            key={index}
            className="px-4 py-2 rounded-full text-[14px] font-medium"
            style={{
              backgroundColor: `${badge.color}20`,
              color: badge.color,
              border: `1px solid ${badge.color}40`
            }}
          >
            {badge.label}
          </div>
        ))}
      </div>
    </section>
  );
}
