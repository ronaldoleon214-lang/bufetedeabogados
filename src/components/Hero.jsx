import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, PhoneCall, ShieldCheck, CheckCircle2, Play, X } from 'lucide-react';
import { FIRM_INFO } from '../data/firmData';

export default function Hero() {
  const [vslOpen, setVslOpen] = useState(false);

  const waUrl = `https://wa.me/${FIRM_INFO.phoneMobileRaw}?text=${encodeURIComponent(
    'Hola Lic. Manuel Enrique Magaña, necesito atención legal urgente y quiero agendar una valoración.'
  )}`;

  return (
    <section
      id="inicio"
      className="relative flex items-center overflow-hidden bg-[#150508] text-[#FFFDF9] pt-28 pb-12 lg:pt-32 lg:pb-16"
    >
      <div className="absolute inset-0">
        <img
          src="/img/editorial-despacho.jpg"
          alt=""
          className="h-full w-full object-cover opacity-45"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#150508]/95 via-[#360810]/85 to-[#150508]/80" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
          {/* Izquierda: Mensaje de urgencia y CTAs directos */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="lg:col-span-6"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-[#F6D58E]/35 bg-[#8E1322]/45 px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.14em] text-[#F6D58E]">
              Villahermosa, Tabasco · Cédula desde 2003
            </span>

            <h1 className="mt-4 font-display text-4xl font-extrabold leading-[0.98] tracking-tight sm:text-5xl lg:text-[3.5rem]">
              ¿Detención, citatorio o{' '}
              <span className="bg-gradient-to-r from-[#F6D58E] via-[#DFAA54] to-[#F29C6B] bg-clip-text text-transparent">
                proceso urgente?
              </span>
            </h1>

            <p className="mt-4 max-w-xl text-base text-[#FFFDF9]/90 sm:text-lg">
              Actúa antes de firmar o declarar. Defensa penal y amparo de atención urgente con el <strong>Lic. Manuel Enrique Magaña Espinosa</strong> — más de 22 años litigando en Tabasco y tribunales federales.
            </p>

            <ul className="mt-5 space-y-2 text-sm text-[#FFFDF9]/85">
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="h-4 w-4 text-[#F6D58E] shrink-0" />
                <span>Revisión inmediata de tu carpeta, citatorio o detención desde la primera llamada</span>
              </li>
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="h-4 w-4 text-[#F6D58E] shrink-0" />
                <span>Respuesta urgente y asistencia presencial en juzgados y fiscalías</span>
              </li>
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="h-4 w-4 text-[#F6D58E] shrink-0" />
                <span>Discreción absoluta y honorarios claros antes de iniciar</span>
              </li>
            </ul>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#F6D58E] to-[#DFAA54] px-7 py-3.5 text-sm font-bold text-[#150508] shadow-xl shadow-[#DFAA54]/25 transition hover:brightness-105"
              >
                <MessageCircle className="h-4 w-4" />
                <span>Hablar por WhatsApp ahora</span>
              </a>
              <a
                href={`tel:+${FIRM_INFO.phoneMobileRaw}`}
                className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-6 py-3.5 text-sm font-bold text-white transition hover:border-[#F6D58E] hover:bg-white/15"
              >
                <PhoneCall className="h-4 w-4 text-[#F6D58E]" />
                <span>Llamar al despacho</span>
              </a>
            </div>
            <p className="mt-3 flex items-center gap-1.5 text-xs font-medium text-[#F6D58E]/85">
              <ShieldCheck className="h-4 w-4" />
              <span>Atención presencial y urgente en Villahermosa y Fuero Federal</span>
            </p>
          </motion.div>

          {/* Derecha: Miniatura VSL (simulador de video sin video) */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="lg:col-span-6"
          >
            <button
              type="button"
              onClick={() => setVslOpen(true)}
              aria-label="Reproducir mensaje en video del Lic. Manuel Enrique Magaña Espinosa"
              className="group relative block w-full overflow-hidden rounded-2xl border border-[#F6D58E]/35 bg-[#0D0305] text-left shadow-2xl transition hover:border-[#F6D58E]"
            >
              <div className="relative aspect-video w-full overflow-hidden">
                <img
                  src="/img/editorial-despacho.jpg"
                  alt="Miniatura VSL del Bufete de Abogados"
                  className="h-full w-full object-cover opacity-80 transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#150508] via-[#150508]/35 to-[#150508]/40" />

                {/* Barra superior tipo reproductor */}
                <div className="absolute inset-x-4 top-4 flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-[#8E1322]/90 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#F6D58E] backdrop-blur-sm">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#F6D58E]" />
                    Mensaje del titular
                  </span>
                  <span className="rounded-md bg-black/70 px-2.5 py-1 text-[11px] font-bold tabular-nums text-white/90">
                    02:15
                  </span>
                </div>

                {/* Botón central de Play */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="relative flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-[#F6D58E] to-[#DFAA54] text-[#150508] shadow-2xl transition-transform duration-300 group-hover:scale-110">
                    <span className="absolute inset-0 rounded-full bg-[#F6D58E]/40 animate-ping" />
                    <Play className="relative ml-1 h-7 w-7 fill-current" />
                  </span>
                </div>

                {/* Título y barra de progreso simulada al pie */}
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <p className="font-display text-lg font-bold leading-snug text-white sm:text-xl">
                    Qué hacer en las primeras horas ante una detención o citatorio
                  </p>
                  <p className="mt-1 text-xs text-[#F6D58E]">
                    {FIRM_INFO.lawyer} · {FIRM_INFO.title}
                  </p>
                  <div className="mt-3 h-1 w-full overflow-hidden rounded-full bg-white/20">
                    <div className="h-full w-1/3 rounded-full bg-[#DFAA54]" />
                  </div>
                </div>
              </div>
            </button>
          </motion.div>
        </div>
      </div>

      {/* Modal al hacer clic en la miniatura VSL */}
      <AnimatePresence>
        {vslOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setVslOpen(false)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-lg rounded-2xl border border-[#F6D58E]/30 bg-[#1B060B] p-6 text-[#FFFDF9] shadow-2xl"
            >
              <button
                type="button"
                onClick={() => setVslOpen(false)}
                aria-label="Cerrar"
                className="absolute right-4 top-4 rounded-full p-1.5 text-white/70 hover:bg-white/10 hover:text-white"
              >
                <X className="h-5 w-5" />
              </button>
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#F6D58E]">
                Atención inmediata
              </span>
              <h3 className="mt-2 font-display text-2xl font-bold text-white">
                ¿Necesitas orientación urgente ahora mismo?
              </h3>
              <p className="mt-2 text-sm text-white/80">
                El video informativo estará disponible próximamente. Mientras tanto, habla directamente con el {FIRM_INFO.lawyer} para revisar tu situación sin esperas.
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#F6D58E] to-[#DFAA54] px-5 py-3 text-sm font-bold text-[#150508]"
                >
                  <MessageCircle className="h-4 w-4" />
                  <span>WhatsApp directo</span>
                </a>
                <a
                  href={`tel:+${FIRM_INFO.phoneMobileRaw}`}
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-white/25 bg-white/10 px-5 py-3 text-sm font-bold text-white"
                >
                  <PhoneCall className="h-4 w-4 text-[#F6D58E]" />
                  <span>Llamar ahora</span>
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
