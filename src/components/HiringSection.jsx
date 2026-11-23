import { ArrowUpRight, CheckCircle2, Lock, MessageSquare, Scale, UserCheck } from 'lucide-react';
import { FIRM_INFO } from '../data/firmData';

const REASONS = [
  {
    icon: UserCheck,
    title: 'Atención directa del titular',
    desc: 'Tu caso no se delega a pasantes. El Lic. Manuel Enrique Magaña Espinosa diseña y ejecuta personalmente tu defensa.',
  },
  {
    icon: Scale,
    title: 'Diagnóstico honesto y claro',
    desc: 'Desde la primera consulta te explicamos la viabilidad real, los riesgos y la ruta procesal antes de contratar.',
  },
  {
    icon: Lock,
    title: 'Confidencialidad absoluta',
    desc: 'Reserva total en detenciones, carpetas de investigación, auditorías fiscales y disputas patrimoniales.',
  },
  {
    icon: MessageSquare,
    title: 'Respuesta rápida en urgencias',
    desc: 'Comunicación directa por teléfono o WhatsApp para actuar a tiempo ante citatorios, multas o detenciones.',
  },
];

const STEPS = [
  {
    num: '01',
    title: 'Cuéntanos tu caso',
    desc: 'Escríbenos por WhatsApp o llámanos para exponer brevemente tu situación.',
  },
  {
    num: '02',
    title: 'Evaluación y estrategia',
    desc: 'Revisamos tu citatorio, carpeta o crédito fiscal y definimos el plan legal.',
  },
  {
    num: '03',
    title: 'Defensa inmediata',
    desc: 'Asumimos tu representación formal ante juzgados, fiscalías o autoridades.',
  },
];

export default function HiringSection() {
  const waUrl = `https://wa.me/${FIRM_INFO.phoneMobileRaw}?text=${encodeURIComponent(
    'Hola Lic. Manuel Enrique Magaña, quiero evaluar mi caso y conocer cómo contratar sus servicios.'
  )}`;

  return (
    <section className="bg-[#FAF6EE] py-16 lg:py-20 border-b border-[#191314]/10">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-wrap items-end justify-between gap-4 border-b border-[#191314]/10 pb-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#8E1322]">
              Por qué elegir el despacho
            </span>
            <h2 className="mt-2 font-display text-3xl font-extrabold leading-tight tracking-tight text-[#191314] sm:text-4xl">
              Contratas <span className="text-[#8E1322]">certeza jurídica</span>, no improvisación.
            </h2>
          </div>
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[#8E1322] px-6 py-3 text-xs font-bold text-[#FFFDF9] shadow-md transition hover:bg-[#B51B2E]"
          >
            <span>Evaluar mi caso ahora</span>
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        {/* 4 razones de contratación */}
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {REASONS.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="rounded-2xl border border-[#191314]/10 bg-[#FFFDF9] p-6 transition hover:border-[#8E1322]/40 hover:shadow-md"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#8E1322]/10 text-[#8E1322]">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-display text-lg font-bold text-[#191314]">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#5A4E4E]">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Proceso de contratación en 3 pasos */}
        <div className="mt-6 rounded-2xl bg-[#150508] p-6 text-[#FFFDF9] sm:p-8">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-4">
            <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#F6D58E]">
              ¿Cómo iniciar tu defensa?
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs text-white/75">
              <CheckCircle2 className="h-4 w-4 text-[#DFAA54]" />
              Proceso claro desde el primer contacto
            </span>
          </div>

          <div className="mt-5 grid gap-6 md:grid-cols-3">
            {STEPS.map((s) => (
              <div key={s.num} className="flex items-start gap-3.5">
                <span className="font-display text-2xl font-extrabold text-[#F6D58E]">
                  {s.num}
                </span>
                <div>
                  <h4 className="font-display text-base font-bold text-white">
                    {s.title}
                  </h4>
                  <p className="mt-1 text-xs leading-relaxed text-white/75">
                    {s.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
