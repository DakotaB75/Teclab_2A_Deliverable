export default function Conclusion() {
  const comparaciones = [
    {
      aspecto: 'Gestión',
      antes: 'Excel manual',
      despues: 'Sistema Web',
      mejora: '+90%'
    },
    {
      aspecto: 'Errores',
      antes: 'Error humano frecuente',
      despues: 'Automatización',
      mejora: '-85%'
    },
    {
      aspecto: 'Tiempo',
      antes: 'Procesos lentos',
      despues: 'Tiempo real',
      mejora: '+75%'
    },
    {
      aspecto: 'Acceso',
      antes: 'Solo presencial',
      despues: 'Remoto 24/7',
      mejora: '+100%'
    },
    {
      aspecto: 'Reportes',
      antes: 'Manual complejo',
      despues: 'Automático',
      mejora: '+95%'
    },
    {
      aspecto: 'Seguridad',
      antes: 'Riesgo de pérdida',
      despues: 'Backup automático',
      mejora: '+100%'
    }
  ];

  return (
    <section>
      <h2 className="text-[24px] font-semibold text-[#e2e8f0] mb-8">
        Conclusión
      </h2>

      <div className="bg-[#0f172a] border border-[rgba(148,163,184,0.2)] rounded-xl p-8 mb-8">
        <h3 className="text-[18px] font-semibold text-[#e2e8f0] mb-6">
          Comparativa: Antes vs Después
        </h3>

        <div className="grid grid-cols-3 gap-6">
          {comparaciones.map((comp, index) => (
            <div
              key={index}
              className="bg-[#1e293b] rounded-lg p-5 hover:translate-y-[-2px] hover:border hover:border-[#38bdf8] transition-all duration-250"
            >
              <h4 className="text-[16px] font-semibold text-[#e2e8f0] mb-4">
                {comp.aspecto}
              </h4>
              <div className="space-y-3">
                <div>
                  <div className="text-[12px] text-[#94a3b8] mb-1">ANTES</div>
                  <div className="text-[14px] text-[#ef4444]">{comp.antes}</div>
                </div>
                <div className="flex items-center justify-center">
                  <svg className="w-5 h-5 text-[#38bdf8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </div>
                <div>
                  <div className="text-[12px] text-[#94a3b8] mb-1">DESPUÉS</div>
                  <div className="text-[14px] text-[#10b981]">{comp.despues}</div>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-[rgba(148,163,184,0.2)]">
                <div className="text-[18px] font-bold text-[#38bdf8] text-center">
                  {comp.mejora}
                </div>
                <div className="text-[12px] text-[#94a3b8] text-center">
                  mejora
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gradient-to-r from-[#38bdf815] to-[#10b98115] border border-[#38bdf8] rounded-xl p-8">
        <h3 className="text-[18px] font-semibold text-[#e2e8f0] mb-4">
          Resultados Esperados
        </h3>
        <div className="grid grid-cols-2 gap-6 text-[14px] text-[#e2e8f0]">
          <div>
            <h4 className="font-medium text-[#38bdf8] mb-3">Beneficios Operacionales</h4>
            <ul className="space-y-2 text-[#94a3b8]">
              <li>• Reducción de errores en un 85%</li>
              <li>• Ahorro de tiempo del 75%</li>
              <li>• Acceso remoto 24/7</li>
              <li>• Reportes automáticos en tiempo real</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-[#38bdf8] mb-3">Beneficios Estratégicos</h4>
            <ul className="space-y-2 text-[#94a3b8]">
              <li>• Mejor toma de decisiones basada en datos</li>
              <li>• Escalabilidad para crecimiento futuro</li>
              <li>• Mejora en experiencia del usuario</li>
              <li>• Mayor seguridad de la información</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-8 text-center text-[14px] text-[#94a3b8] pt-8 border-t border-[rgba(148,163,184,0.2)]">
        <p>Entregable Teclab 2A — System Analysis Case Study</p>
        <p className="mt-2">© 2026 Dakota Bazan</p>
      </div>
    </section>
  );
}
