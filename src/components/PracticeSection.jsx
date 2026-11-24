import { ArrowUpRight, CheckCircle2, Lock, Scale, UserCheck } from 'lucide-react';
import { FIRM_INFO } from '../data/firmData';

const GUARANTEES = [
  {
    icon: UserCheck,
    title: 'Atención directa del titular',
    desc: 'Tu caso no se delega a pasantes ni intermediarios.',
  },
  {
    icon: Scale,
    title: 'Diagnóstico honesto',
    desc: 'Te explicamos la viabilidad real antes de contratar.',
  },
  {
    icon: Lock,
    title: 'Confidencialidad absoluta',
    desc: 'Reserva total en asuntos penales, fiscales y patrimoniales.',
  },
  {
    icon: CheckCircle2,
    title: 'Tabasco y Fuero Federal',
    desc: 'Cobertura en juzgados locales, fiscalías y juicios de amparo.',
  },
];

export default function PracticeSection() {
  const waUrl = `https://wa.me/${FIRM_INFO.phoneMobileRaw}?text=${encodeURIComponent(
    'Hola Lic. Manuel Enrique Magaña, quiero agendar una valoración de mi caso.'
  )}`;

  return (
    <section
      id="bufete"
      className="bg-gradient-to-br from-[#360810] via-[#22060B] to-[#150508] py-12 text-[#FFFDF9]"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-6">
            <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#F6D58E]">
              Cómo iniciamos tu defensa
            </span>
            <h2 className="mt-2 font-display text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">
              Contratas certeza y{' '}
              <span className="bg-gradient-to-r from-[#F6D58E] to-[#DFAA54] bg-clip-text text-transparent">
                respuesta inmediata en 3 pasos.
              </span>
            </h2>
            <div className="mt-5 space-y-2.5 text-sm text-white/85">
              <p className="flex items-center gap-2.5">
                <CheckCircle2 className="h-4 w-4 text-[#DFAA54] shrink-0" />
                <span><strong>Paso 1:</strong> Revisamos tu citatorio, carpeta o multa por WhatsApp o en oficina.</span>
              </p>
              <p className="flex items-center gap-2.5">
                <CheckCircle2 className="h-4 w-4 text-[#DFAA54] shrink-0" />
                <span><strong>Paso 2:</strong> Te damos un diagnóstico claro, estrategia y cotización transparente.</span>
              </p>
              <p className="flex items-center gap-2.5">
                <CheckCircle2 className="h-4 w-4 text-[#DFAA54] shrink-0" />
                <span><strong>Paso 3:</strong> Asumimos tu representación formal ante la autoridad de inmediato.</span>
              </p>
            </div>
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#F6D58E] to-[#DFAA54] px-6 py-3.5 text-sm font-bold text-[#150508] transition hover:brightness-105"
            >
              <span>Agendar valoración hoy</span>
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>

          <div className="lg:col-span-6 grid gap-3 sm:grid-cols-2">
            {GUARANTEES.map((g) => {
              const Icon = g.icon;
              return (
                <div
                  key={g.title}
                  className="rounded-xl border border-white/10 bg-white/[0.05] p-5"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#F6D58E]/15 text-[#F6D58E]">
                    <Icon className="h-4 w-4" />
                  </span>
                  <h3 className="mt-3 font-display text-base font-bold text-white">
                    {g.title}
                  </h3>
                  <p className="mt-1 text-xs leading-relaxed text-white/75">
                    {g.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
