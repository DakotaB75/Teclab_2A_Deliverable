export default function Problemas() {
  const problemas = [
    {
      titulo: 'Errores de transcripción',
      descripcion: 'Datos incorrectos al pasar de papel a Excel',
      impacto: 'Alto'
    },
    {
      titulo: 'Información desactualizada',
      descripcion: 'No hay sincronización en tiempo real',
      impacto: 'Alto'
    },
    {
      titulo: 'Tiempo excesivo',
      descripcion: 'Procesos manuales lentos e ineficientes',
      impacto: 'Medio'
    },
    {
      titulo: 'Falta de reportes',
      descripcion: 'Difícil generar estadísticas y análisis',
      impacto: 'Alto'
    },
    {
      titulo: 'Pérdida de datos',
      descripcion: 'Riesgo de perder información en papel',
      impacto: 'Alto'
    },
    {
      titulo: 'Sin acceso remoto',
      descripcion: 'Necesidad de estar físicamente presente',
      impacto: 'Medio'
    }
  ];

  return (
    <section>
      <h2 className="text-[24px] font-semibold text-[#e2e8f0] mb-8">
        Problemas Detectados
      </h2>

      <div className="grid grid-cols-3 gap-8">
        {problemas.map((problema, index) => (
          <div
            key={index}
            className="bg-[#0f172a] border border-[rgba(148,163,184,0.2)] rounded-[14px] p-7 min-h-[160px] flex flex-col justify-between hover:translate-y-[-4px] hover:border-[#38bdf8] transition-all duration-250 cursor-pointer"
          >
            <div>
              <h3 className="text-[18px] font-semibold text-[#e2e8f0] mb-3">
                {problema.titulo}
              </h3>
              <p className="text-[14px] text-[#94a3b8] leading-relaxed">
                {problema.descripcion}
              </p>
            </div>
            <div className="mt-4">
              <span
                className={`inline-block px-3 py-1 rounded-full text-[12px] font-medium ${
                  problema.impacto === 'Alto'
                    ? 'bg-[#ef444420] text-[#ef4444] border border-[#ef444440]'
                    : 'bg-[#f59e0b20] text-[#f59e0b] border border-[#f59e0b40]'
                }`}
              >
                Impacto: {problema.impacto}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
