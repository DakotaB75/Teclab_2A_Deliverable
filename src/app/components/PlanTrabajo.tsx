export default function PlanTrabajo() {
  const fases = [
    { nombre: 'Análisis', duracion: 40, color: '#38bdf8', semanas: '2 semanas' },
    { nombre: 'Diseño', duracion: 30, color: '#10b981', semanas: '1.5 semanas' },
    { nombre: 'Desarrollo', duracion: 50, color: '#f59e0b', semanas: '3 semanas' },
    { nombre: 'Testing', duracion: 25, color: '#ef4444', semanas: '1 semana' },
    { nombre: 'Deploy', duracion: 15, color: '#8b5cf6', semanas: '0.5 semanas' }
  ];

  const totalDuracion = fases.reduce((sum, fase) => sum + fase.duracion, 0);

  return (
    <section>
      <h2 className="text-[24px] font-semibold text-[#e2e8f0] mb-8">
        Plan de Trabajo
      </h2>

      <div className="bg-[#0f172a] border border-[rgba(148,163,184,0.2)] rounded-xl p-8">
        <h3 className="text-[18px] font-semibold text-[#e2e8f0] mb-6">
          Cronograma de Implementación
        </h3>

        <div className="mb-8">
          <div className="flex h-3 rounded-full overflow-hidden bg-[#1e293b]">
            {fases.map((fase, index) => (
              <div
                key={index}
                className="h-full transition-all duration-500 hover:opacity-80"
                style={{
                  width: `${(fase.duracion / totalDuracion) * 100}%`,
                  backgroundColor: fase.color
                }}
                title={`${fase.nombre}: ${fase.semanas}`}
              />
            ))}
          </div>
        </div>

        <div className="grid grid-cols-5 gap-4">
          {fases.map((fase, index) => (
            <div
              key={index}
              className="bg-[#1e293b] rounded-lg p-4 hover:translate-y-[-2px] transition-all duration-250"
            >
              <div
                className="w-3 h-3 rounded-full mb-3"
                style={{ backgroundColor: fase.color }}
              />
              <h4 className="text-[16px] font-semibold text-[#e2e8f0] mb-2">
                {fase.nombre}
              </h4>
              <p className="text-[14px] text-[#94a3b8] mb-1">{fase.semanas}</p>
              <p className="text-[12px] text-[#94a3b8]">
                {Math.round((fase.duracion / totalDuracion) * 100)}%
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8 pt-6 border-t border-[rgba(148,163,184,0.2)]">
          <h3 className="text-[18px] font-semibold text-[#e2e8f0] mb-4">
            Hitos Principales
          </h3>
          <div className="space-y-3">
            {[
              'Completar análisis de requerimientos',
              'Finalizar diseño de base de datos y arquitectura',
              'Implementar módulo de autenticación y gestión de usuarios',
              'Desarrollar sistema de préstamos y devoluciones',
              'Realizar pruebas de integración y UAT',
              'Desplegar en producción'
            ].map((hito, index) => (
              <div
                key={index}
                className="flex items-center gap-3 text-[14px] text-[#e2e8f0]"
              >
                <div className="w-2 h-2 rounded-full bg-[#38bdf8]" />
                {hito}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
