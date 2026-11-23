import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  Landmark,
  MessageCircle,
  PhoneCall,
  Scale,
  ShieldAlert,
} from 'lucide-react';
import { URGENCY_SCENARIOS, FIRM_INFO } from '../data/firmData';

const SCENARIO_META = {
  penal: {
    icon: ShieldAlert,
    steps: [
      'Conserva la calma y ejerce tu derecho a no declarar sin abogado presente.',
      'Comunica de inmediato la ubicación, juzgado o fiscalía donde se encuentra el asunto.',
      'Activamos defensa técnica presencial o amparo contra orden de aprehensión.',
    ],
  },
  fiscal: {
    icon: Landmark,
    steps: [
      'No dejes vencer los plazos legales de notificación, requerimiento o multa.',
      'Reúne el oficio, crédito fiscal o citatorio emitido por la autoridad.',
      'Evaluamos la procedencia de recurso de revocación, nulidad o amparo.',
    ],
  },
  patrimonial: {
    icon: Scale,
    steps: [
      'Recopila contratos, escrituras, pagarés o demandas notificadas.',
      'Analizamos la vía procesal más rápida para proteger tus bienes o derechos.',
      'Definimos estrategia de litigio o negociación directa ante tribunales.',
    ],
  },
};

export default function UrgencySection() {
  const [activeId, setActiveId] = useState(URGENCY_SCENARIOS[0].id);
  const current = URGENCY_SCENARIOS.find((s) => s.id === activeId) || URGENCY_SCENARIOS[0];
  const meta = SCENARIO_META[current.id];
  const waUrl = `https://wa.me/${FIRM_INFO.phoneMobileRaw}?text=${encodeURIComponent(current.whatsappText)}`;

  return (
    <section className="relative overflow-hidden bg-[#F2EBE0] py-20 lg:py-24 border-y border-[#191314]/10">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
          {/* Columna izquierda: Título + selector de escenarios */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#8E1322]">
                Orientación por escenario
              </span>
              <h2 className="mt-3 font-display text-3xl font-extrabold leading-[1.06] tracking-tight text-[#191314] sm:text-4xl">
                ¿Cuál es tu{' '}
                <span className="text-[#8E1322]">situación actual?</span>
              </h2>
              <p className="mt-3 text-sm text-[#5A4E4E]">
                Elige el escenario más cercano a tu caso para ver el protocolo de atención inmediata.
              </p>
            </div>

            <div className="space-y-3">
              {URGENCY_SCENARIOS.map((item) => {
                const isSelected = item.id === activeId;
                const Icon = SCENARIO_META[item.id].icon;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setActiveId(item.id)}
                    className={`flex w-full items-center justify-between rounded-2xl px-5 py-4 text-left transition-all ${
                      isSelected
                        ? 'bg-[#8E1322] text-[#FFFDF9] shadow-lg shadow-[#8E1322]/20'
                        : 'bg-[#FFFDF9] text-[#191314] border border-[#191314]/10 hover:border-[#8E1322]/40'
                    }`}
                  >
                    <div className="flex items-center gap-3.5">
                      <span
                        className={`flex h-9 w-9 items-center justify-center rounded-xl ${
                          isSelected
                            ? 'bg-[#F6D58E]/20 text-[#F6D58E]'
                            : 'bg-[#FAF6EE] text-[#8E1322]'
                        }`}
                      >
                        <Icon className="h-4 w-4" />
                      </span>
                      <span className="font-display text-base font-bold">
                        {item.label}
                      </span>
                    </div>
                    <ArrowRight
                      className={`h-4 w-4 transition-transform ${
                        isSelected ? 'translate-x-0.5 text-[#F6D58E]' : 'text-[#5A4E4E]'
                      }`}
                    />
                  </button>
                );
              })}
            </div>
          </div>

          {/* Columna derecha: Panel de protocolo y acción inmediata */}
          <div className="lg:col-span-7 flex">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.22 }}
                className="relative flex w-full flex-col justify-between overflow-hidden rounded-3xl bg-[#150508] p-8 text-[#FFFDF9] shadow-2xl sm:p-10"
              >
                <img
                  src="/img/editorial-despacho.jpg"
                  alt=""
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-15"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#360810]/90 via-[#150508]/95 to-[#150508]" />

                <div className="relative z-10">
                  <span className="inline-block rounded-full border border-[#F6D58E]/30 bg-[#8E1322]/40 px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.14em] text-[#F6D58E]">
                    Protocolo recomendado · {current.label}
                  </span>

                  <h3 className="mt-5 font-display text-2xl font-bold leading-snug text-white sm:text-3xl">
                    {current.headline}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#FFFDF9]/80">
                    {current.note}
                  </p>

                  <div className="mt-6 space-y-3 border-t border-white/10 pt-6">
                    {meta.steps.map((step, i) => (
                      <div key={step} className="flex items-start gap-3">
                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#DFAA54]/20 font-display text-xs font-bold text-[#F6D58E]">
                          0{i + 1}
                        </span>
                        <p className="text-sm text-[#FFFDF9]/85">{step}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="relative z-10 mt-8 flex flex-wrap gap-3 border-t border-white/10 pt-6">
                  <a
                    href={waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#F6D58E] to-[#DFAA54] px-6 py-3.5 text-sm font-bold text-[#150508] shadow-lg transition hover:-translate-y-0.5"
                  >
                    <MessageCircle className="h-4 w-4" />
                    <span>Escribir por WhatsApp</span>
                  </a>
                  <a
                    href={`tel:+${FIRM_INFO.phoneMobileRaw}`}
                    className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition hover:border-[#F6D58E] hover:bg-white/10"
                  >
                    <PhoneCall className="h-4 w-4" />
                    <span>Llamar al despacho</span>
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
