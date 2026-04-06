export default function Overview() {
  const metrics = [
    { label: 'Libros', value: '2500+' },
    { label: 'Método actual', value: 'Excel' },
    { label: 'Problemas', value: '6' },
    { label: 'Objetivo', value: 'Web System' }
  ];

  return (
    <section className="opacity-0 translate-y-5 animate-[fadeIn_0.8s_ease-out_forwards]">
      <div className="text-[14px] text-[#38bdf8] font-medium mb-3 tracking-wide">
        Case Study — System Analysis
      </div>
      <div className="text-[14px] text-[#94a3b8] mb-2">
        Frontend Documentation Experience
      </div>
      <div className="text-[14px] text-[#94a3b8] mb-8">
        Author: Dakota Bazan
      </div>

      <h1 className="text-[36px] font-semibold text-[#e2e8f0] mb-4">
        Sistema de Información — Biblioteca Teclab
      </h1>
      <p className="text-[16px] text-[#94a3b8] mb-12 leading-relaxed">
        System Analysis Case Study
      </p>

      <div className="grid grid-cols-4 gap-6">
        {metrics.map((metric, index) => (
          <div
            key={index}
            className="bg-[#0f172a] border border-[rgba(148,163,184,0.2)] rounded-xl p-6 h-[120px] flex flex-col justify-between hover:translate-y-[-4px] hover:border-[#38bdf8] transition-all duration-250"
            style={{
              animation: `fadeIn 0.8s ease-out ${0.2 + index * 0.1}s forwards`,
              opacity: 0
            }}
          >
            <div className="text-[14px] text-[#94a3b8]">{metric.label}</div>
            <div className="text-[24px] font-semibold text-[#e2e8f0]">
              {metric.value}
            </div>
          </div>
        ))}
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
