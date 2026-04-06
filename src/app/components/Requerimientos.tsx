export default function Requerimientos() {
  const funcionales = [
    'Registro de usuarios y autenticación',
    'Gestión de catálogo de libros',
    'Sistema de préstamos y devoluciones',
    'Búsqueda y filtrado avanzado',
    'Notificaciones automáticas',
    'Generación de reportes estadísticos',
    'Historial de transacciones',
    'Control de inventario'
  ];

  const noFuncionales = [
    { titulo: 'Rendimiento', descripcion: 'Respuesta < 2 segundos', icon: '⚡' },
    { titulo: 'Seguridad', descripcion: 'Encriptación de datos', icon: '🔒' },
    { titulo: 'Disponibilidad', descripcion: 'Uptime > 99%', icon: '✓' },
    { titulo: 'Escalabilidad', descripcion: 'Soportar crecimiento', icon: '📈' }
  ];

  return (
    <section>
      <h2 className="text-[24px] font-semibold text-[#e2e8f0] mb-8">
        Requerimientos del Sistema
      </h2>

      <div className="grid grid-cols-2 gap-12">
        <div>
          <h3 className="text-[18px] font-semibold text-[#e2e8f0] mb-6">
            Funcionales
          </h3>
          <div className="space-y-3">
            {funcionales.map((req, index) => (
              <div
                key={index}
                className="flex items-start gap-3 bg-[#0f172a] border border-[rgba(148,163,184,0.2)] rounded-lg p-4 hover:border-[#38bdf8] transition-all duration-250"
              >
                <div className="mt-0.5 w-5 h-5 rounded-full bg-[#38bdf8] flex items-center justify-center flex-shrink-0">
                  <svg className="w-3 h-3 text-[#020617]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-[14px] text-[#e2e8f0]">{req}</span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-[18px] font-semibold text-[#e2e8f0] mb-6">
            No Funcionales
          </h3>
          <div className="space-y-4">
            {noFuncionales.map((req, index) => (
              <div
                key={index}
                className="bg-[#0f172a] border border-[rgba(148,163,184,0.2)] rounded-lg p-5 hover:border-[#38bdf8] hover:translate-y-[-2px] transition-all duration-250"
              >
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-[24px]">{req.icon}</span>
                  <h4 className="text-[16px] font-semibold text-[#e2e8f0]">
                    {req.titulo}
                  </h4>
                </div>
                <p className="text-[14px] text-[#94a3b8] ml-11">
                  {req.descripcion}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
