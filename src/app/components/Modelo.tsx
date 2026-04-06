import { useEffect, useRef, useState } from 'react';

export default function Modelo() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const nodos = [
    { titulo: 'Entrada', items: ['Usuarios', 'Libros', 'Solicitudes'], color: '#38bdf8' },
    { titulo: 'Procesamiento', items: ['Validación', 'Registro', 'Actualización'], color: '#10b981' },
    { titulo: 'Salida', items: ['Reportes', 'Notificaciones', 'Consultas'], color: '#f59e0b' },
    { titulo: 'Feedback', items: ['Estadísticas', 'Auditoría', 'Mejoras'], color: '#8b5cf6' }
  ];

  return (
    <section ref={sectionRef}>
      <h2 className="text-[24px] font-semibold text-[#e2e8f0] mb-4 text-center">
        Modelo del Sistema
      </h2>
      <p className="text-[14px] text-[#94a3b8] mb-12 text-center">
        Flujo de información y procesamiento
      </p>

      <div className="flex items-center justify-center gap-6">
        {nodos.map((nodo, index) => (
          <div key={index} className="flex items-center">
            <div
              className={`w-[200px] h-[100px] rounded-xl border-2 flex flex-col items-center justify-center transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
              }`}
              style={{
                backgroundColor: `${nodo.color}15`,
                borderColor: nodo.color,
                transitionDelay: `${index * 150}ms`
              }}
            >
              <h3
                className="text-[16px] font-semibold mb-2"
                style={{ color: nodo.color }}
              >
                {nodo.titulo}
              </h3>
              <div className="text-[12px] text-[#94a3b8] text-center px-3">
                {nodo.items.map((item, i) => (
                  <div key={i}>{item}</div>
                ))}
              </div>
            </div>
            {index < nodos.length - 1 && (
              <div
                className={`mx-3 text-[24px] transition-all duration-500 ${
                  isVisible ? 'opacity-100' : 'opacity-0'
                }`}
                style={{
                  color: nodo.color,
                  transitionDelay: `${index * 150 + 75}ms`
                }}
              >
                →
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-12 bg-[#0f172a] border border-[rgba(148,163,184,0.2)] rounded-xl p-6">
        <h3 className="text-[18px] font-semibold text-[#e2e8f0] mb-4">
          Componentes Principales
        </h3>
        <div className="grid grid-cols-2 gap-6">
          <div>
            <h4 className="text-[14px] font-medium text-[#38bdf8] mb-3">Frontend</h4>
            <ul className="space-y-2 text-[14px] text-[#94a3b8]">
              <li>• Interfaz de usuario React</li>
              <li>• Panel de administración</li>
              <li>• Dashboard de estadísticas</li>
            </ul>
          </div>
          <div>
            <h4 className="text-[14px] font-medium text-[#38bdf8] mb-3">Backend</h4>
            <ul className="space-y-2 text-[14px] text-[#94a3b8]">
              <li>• API REST</li>
              <li>• Base de datos relacional</li>
              <li>• Sistema de autenticación</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
