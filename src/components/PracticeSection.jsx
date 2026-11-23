import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
      className="relative overflow-hidden bg-gradient-to-br from-[#360810] via-[#22060B] to-[#150508] py-20 text-[#FFFDF9] lg:py-24"
    >
      <div className="pointer-events-none absolute right-0 top-0 h-[420px] w-[420px] rounded-full bg-[#B51B2E]/25 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="flex flex-wrap items-end justify-between gap-6 border-b border-white/10 pb-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#F6D58E]">
              02 · Áreas de Práctica
            </span>
            <h2 className="mt-2 font-display text-3xl font-extrabold leading-tight tracking-tight sm:text-5xl">
              Nueve frentes de{' '}
              <span className="bg-gradient-to-r from-[#F6D58E] to-[#DFAA54] bg-clip-text text-transparent">
                defensa especializada.
              </span>
            </h2>
          </div>

          {/* Filtros interactivos por materia */}
          <div className="flex flex-wrap gap-2 rounded-full border border-white/15 bg-white/5 p-1.5 backdrop-blur-sm">
            {FILTERS.map((f) => {
              const active = filter === f.id;
              return (
                <button
                  key={f.id}
                  type="button"
                  onClick={() => setFilter(f.id)}
                  className={`rounded-full px-4 py-2 text-xs font-bold transition ${
                    active
                      ? 'bg-[#F6D58E] text-[#150508] shadow-md'
                      : 'text-[#FFFDF9]/75 hover:text-white'
                  }`}
                >
                  {f.label}
                </button>
              );
            })}
          </div>
        </div>

        <motion.div layout className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {visibleAreas.map((area) => {
              const Icon = ICONS[area.num] || Scale;
              const waUrl = `https://wa.me/${FIRM_INFO.phoneMobileRaw}?text=${encodeURIComponent(
                `Hola Lic. Manuel Enrique Magaña, requiero asesoría en materia de: ${area.title}.`
              )}`;

              return (
                <motion.article
                  key={area.num}
                  layout
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.25 }}
                  className="group flex flex-col justify-between rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm transition-colors duration-300 hover:-translate-y-1 hover:border-[#F6D58E]/50 hover:bg-[#8E1322]/25"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="font-display text-xs font-bold tracking-[0.16em] text-[#F6D58E]">
                        {area.num} / 09
                      </span>
                      <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#F6D58E]/10 text-[#F6D58E] transition-colors group-hover:bg-[#F6D58E] group-hover:text-[#150508]">
                        <Icon className="h-4 w-4" />
                      </span>
                    </div>

                    <h3 className="mt-4 font-display text-xl font-bold leading-snug text-white group-hover:text-[#F6D58E]">
                      {area.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-[#FFFDF9]/75">
                      {area.desc}
                    </p>
                  </div>

                  <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-4">
                    <span className="text-[11px] font-medium text-[#F6D58E]/75">
                      {area.highlights[0]}
                    </span>
                    <a
                      href={waUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-bold text-[#F6D58E] transition group-hover:translate-x-0.5"
                    >
                      <span>Consultar</span>
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
