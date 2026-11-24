import { useState } from 'react';
import {
  ArrowUpRight,
  Briefcase,
  Building2,
  FileText,
  Gavel,
  Globe,
  Landmark,
  Scale,
  Shield,
  ShieldAlert,
} from 'lucide-react';
import { PRACTICE_AREAS, FIRM_INFO } from '../data/firmData';

const ICONS = {
  '01': ShieldAlert,
  '02': Scale,
  '03': FileText,
  '04': Landmark,
  '05': Gavel,
  '06': Shield,
  '07': Building2,
  '08': Briefcase,
  '09': Globe,
};

const FILTERS = [
  { id: 'all', label: 'Todas (9)' },
  { id: 'penal', label: 'Penal & Amparo' },
  { id: 'fiscal', label: 'Fiscal & Admin' },
  { id: 'civil', label: 'Civil & Laboral' },
];

export default function PracticeSection() {
  const [filter, setFilter] = useState('all');

  const visibleAreas =
    filter === 'all'
      ? PRACTICE_AREAS
      : PRACTICE_AREAS.filter((a) => a.category === filter);

  return (
    <section
      id="servicios"
      className="bg-gradient-to-br from-[#360810] via-[#22060B] to-[#150508] py-12 text-[#FFFDF9] lg:py-14"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-wrap items-end justify-between gap-4 border-b border-white/10 pb-5">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#F6D58E]">
              Áreas de Defensa
            </span>
            <h2 className="mt-1 font-display text-2xl font-extrabold tracking-tight sm:text-4xl">
              Elige tu materia y{' '}
              <span className="bg-gradient-to-r from-[#F6D58E] to-[#DFAA54] bg-clip-text text-transparent">
                contáctanos directo.
              </span>
            </h2>
          </div>

          <div className="flex flex-wrap gap-1.5 rounded-full border border-white/15 bg-white/5 p-1">
            {FILTERS.map((f) => {
              const active = filter === f.id;
              return (
                <button
                  key={f.id}
                  type="button"
                  onClick={() => setFilter(f.id)}
                  className={`rounded-full px-3.5 py-1.5 text-xs font-bold transition ${
                    active ? 'bg-[#F6D58E] text-[#150508]' : 'text-[#FFFDF9]/75 hover:text-white'
                  }`}
                >
                  {f.label}
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {visibleAreas.map((area) => {
            const Icon = ICONS[area.num] || Scale;
            const waUrl = `https://wa.me/${FIRM_INFO.phoneMobileRaw}?text=${encodeURIComponent(
              `Hola Lic. Manuel Enrique Magaña, quiero contratar defensa en: ${area.title}.`
            )}`;

            return (
              <a
                key={area.num}
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col justify-between rounded-xl border border-white/10 bg-white/[0.04] p-5 transition hover:-translate-y-0.5 hover:border-[#F6D58E]/60 hover:bg-[#8E1322]/30"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-display text-xs font-bold text-[#F6D58E]">
                      {area.num}
                    </span>
                    <Icon className="h-4 w-4 text-[#DFAA54]" />
                  </div>
                  <h3 className="mt-2.5 font-display text-lg font-bold text-white group-hover:text-[#F6D58E]">
                    {area.title}
                  </h3>
                  <p className="mt-1 text-xs leading-relaxed text-[#FFFDF9]/70">
                    {area.short}
                  </p>
                </div>

                <div className="mt-4 flex items-center justify-between border-t border-white/10 pt-3 text-xs font-bold text-[#F6D58E]">
                  <span>Contratar defensa</span>
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
