import { ArrowUpRight, Landmark, Scale, ShieldAlert, Briefcase } from 'lucide-react';
import { FIRM_INFO } from '../data/firmData';

const SOLUTIONS = [
  {
    icon: ShieldAlert,
    tag: 'Penal & Federal',
    title: 'Detenciones, carpetas y órdenes de aprehensión',
    desc: 'Asistencia urgente en audiencias iniciales, medidas cautelares, delitos federales y amparo contra detención.',
    cta: 'Solicitar defensa penal',
  },
  {
    icon: Landmark,
    tag: 'Fiscal & OIC Pemex',
    title: 'Auditorías, créditos fiscales y OIC de Pemex',
    desc: 'Impugnación de multas, clausuras, créditos fiscales y defensa de servidores o contratistas ante el OIC.',
    cta: 'Blindar mi situación fiscal',
  },
  {
    icon: Scale,
    tag: 'Amparo & Civil',
    title: 'Juicios de amparo, propiedad y contratos',
    desc: 'Amparo directo e indirecto contra actos de autoridad, juicios ejecutivos mercantiles y acciones reivindicatorias.',
    cta: 'Proteger mi patrimonio',
  },
  {
    icon: Briefcase,
    tag: 'Laboral & Migratorio',
    title: 'Conflictos laborales y defensa migratoria',
    desc: 'Representación ante tribunales laborales, conciliación y litigio estratégico contra deportación de extranjeros.',
    cta: 'Consultar mi caso',
  },
];

export default function ProofSection() {
  return (
    <section id="servicios" className="bg-[#FAF6EE] py-12 border-b border-[#191314]/10">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-wrap items-end justify-between gap-4 border-b border-[#191314]/10 pb-5">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#8E1322]">
              Problemas que resolvemos
            </span>
            <h2 className="mt-1 font-display text-2xl font-extrabold tracking-tight text-[#191314] sm:text-4xl">
              Elige tu situación y <span className="text-[#8E1322]">actúa hoy mismo.</span>
            </h2>
          </div>
          <p className="text-xs font-medium text-[#5A4E4E]">
            9 especialidades agrupadas por solución inmediata en Tabasco y Fuero Federal.
          </p>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {SOLUTIONS.map((s) => {
            const Icon = s.icon;
            const waUrl = `https://wa.me/${FIRM_INFO.phoneMobileRaw}?text=${encodeURIComponent(
              `Hola Lic. Manuel Enrique Magaña, requiero ayuda urgente con: ${s.title}.`
            )}`;
            return (
              <div
                key={s.title}
                className="flex flex-col justify-between rounded-2xl border border-[#191314]/10 bg-[#FFFDF9] p-6 transition hover:border-[#8E1322]/40 hover:shadow-md"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="rounded-full bg-[#8E1322]/10 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[#8E1322]">
                      {s.tag}
                    </span>
                    <Icon className="h-5 w-5 text-[#8E1322]" />
                  </div>
                  <h3 className="mt-4 font-display text-xl font-bold text-[#191314]">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm text-[#5A4E4E]">{s.desc}</p>
                </div>

                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex w-fit items-center gap-1.5 text-xs font-bold text-[#8E1322] hover:underline"
                >
                  <span>{s.cta}</span>
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
