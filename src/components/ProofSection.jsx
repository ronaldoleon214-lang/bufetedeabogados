import { CheckCircle2, Lock, Scale, UserCheck } from 'lucide-react';
import { TIMELINE_STEPS } from '../data/firmData';

const GUARANTEES = [
  { icon: UserCheck, title: 'Trato directo del titular', desc: 'Tu asunto no pasa a pasantes.' },
  { icon: Scale, title: 'Diagnóstico honesto', desc: 'Viabilidad real antes de contratar.' },
  { icon: Lock, title: 'Reserva absoluta', desc: 'Discreción total en casos penales y fiscales.' },
  { icon: CheckCircle2, title: 'Tabasco y Fuero Federal', desc: 'Cobertura local y juicios de amparo.' },
];

export default function ProofSection() {
  return (
    <section id="bufete" className="bg-[#FAF6EE] py-10 lg:py-12 border-b border-[#191314]/10">
      <div className="mx-auto max-w-7xl px-6 space-y-8">
        {/* 4 garantías compactas */}
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {GUARANTEES.map((g) => {
            const Icon = g.icon;
            return (
              <div
                key={g.title}
                className="flex items-start gap-3 rounded-xl border border-[#191314]/10 bg-[#FFFDF9] p-4"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#8E1322]/10 text-[#8E1322]">
                  <Icon className="h-4 w-4" />
                </span>
                <div>
                  <h3 className="font-display text-sm font-bold text-[#191314]">{g.title}</h3>
                  <p className="text-xs text-[#5A4E4E] mt-0.5">{g.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Trayectoria compacta en 4 hitos sin huecos */}
        <div className="rounded-2xl bg-[#150508] p-6 text-[#FFFDF9]">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-3">
            <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#F6D58E]">
              Trayectoria documentada · 2003 – 2026
            </span>
            <span className="text-xs text-white/65">Poder Judicial de Tabasco y Fuero Federal</span>
          </div>
          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {TIMELINE_STEPS.map((s) => (
              <div key={s.year} className="border-l-2 border-[#DFAA54]/50 pl-3.5">
                <span className="font-display text-xl font-extrabold text-[#F6D58E]">{s.year}</span>
                <h4 className="font-display text-sm font-bold text-white mt-0.5">{s.title}</h4>
                <p className="text-xs text-white/70 mt-1 line-clamp-2">{s.summary}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
