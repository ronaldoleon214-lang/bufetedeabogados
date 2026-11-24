import { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, PhoneCall, ShieldCheck, Scale, Clock, ArrowRight } from 'lucide-react';
import { FIRM_INFO } from '../data/firmData';

const QUICK_TOPICS = [
  'Detención o asunto penal',
  'Auditoría o crédito fiscal',
  'Juicio de amparo',
  'OIC Pemex / Administrativo',
  'Civil, mercantil o laboral',
];

export default function Hero() {
  const [topic, setTopic] = useState(QUICK_TOPICS[0]);
  const [name, setName] = useState('');

  const handleQuickWhatsApp = (e) => {
    e.preventDefault();
    const who = name.trim() ? `Soy ${name.trim()}. ` : '';
    const msg = `Hola Lic. Manuel Enrique Magaña, ${who}necesito atención urgente por: ${topic}.`;
    window.open(
      `https://wa.me/${FIRM_INFO.phoneMobileRaw}?text=${encodeURIComponent(msg)}`,
      '_blank',
      'noopener,noreferrer'
    );
  };

  return (
    <section
      id="inicio"
      className="relative flex items-center overflow-hidden bg-[#150508] text-[#FFFDF9] pt-28 pb-14 lg:min-h-[92vh] lg:pt-32 lg:pb-16"
    >
      <div className="absolute inset-0">
        <img
          src="/img/editorial-despacho.jpg"
          alt=""
          className="h-full w-full object-cover opacity-55"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#150508]/95 via-[#360810]/85 to-[#150508]/75" />
        <div className="pointer-events-none absolute -left-24 -bottom-24 h-[420px] w-[420px] rounded-full bg-[#B51B2E]/35 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
          {/* Izquierda: Propuesta directa + prueba rápida */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="lg:col-span-7"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-[#F6D58E]/30 bg-[#8E1322]/40 px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.15em] text-[#F6D58E]">
              {FIRM_INFO.city} · Litigio desde {FIRM_INFO.since}
            </span>

            <h1 className="mt-5 font-display text-4xl font-extrabold leading-[0.98] tracking-tight sm:text-6xl lg:text-[3.9rem]">
              Defensa penal, fiscal y amparo{' '}
              <span className="bg-gradient-to-r from-[#F6D58E] via-[#DFAA54] to-[#F29C6B] bg-clip-text text-transparent">
                sin intermediarios.
              </span>
            </h1>

            <p className="mt-4 max-w-xl text-base text-[#FFFDF9]/85 sm:text-lg">
              Más de 22 años litigando ante juzgados de Tabasco y tribunales federales. Respuesta directa del titular cuando tu libertad o patrimonio están en juego.
            </p>

            {/* 3 puntos clave compactos */}
            <div className="mt-6 grid gap-3 sm:grid-cols-3 border-t border-white/15 pt-5 text-xs">
              <div className="flex items-center gap-2.5">
                <Clock className="h-4 w-4 text-[#F6D58E] shrink-0" />
                <span><strong className="text-white">22+ años</strong> de litigio real</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Scale className="h-4 w-4 text-[#F6D58E] shrink-0" />
                <span><strong className="text-white">Atención directa</strong> del titular</span>
              </div>
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="h-4 w-4 text-[#F6D58E] shrink-0" />
                <span><strong className="text-white">Reserva total</strong> en tu caso</span>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href={`tel:+${FIRM_INFO.phoneMobileRaw}`}
                className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-6 py-3.5 text-sm font-bold text-white transition hover:border-[#F6D58E] hover:bg-white/15"
              >
                <PhoneCall className="h-4 w-4 text-[#F6D58E]" />
                <span>Llamar al despacho</span>
              </a>
              <a
                href="#servicios"
                className="inline-flex items-center gap-1.5 px-3 py-3 text-sm font-semibold text-[#F6D58E] hover:underline"
              >
                <span>Ver las 9 áreas de defensa</span>
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </motion.div>

          {/* Derecha: Widget de conversión inmediata a la mano */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-5"
          >
            <form
              onSubmit={handleQuickWhatsApp}
              className="rounded-2xl border border-[#F6D58E]/30 bg-[#1B060B]/90 p-6 backdrop-blur-md shadow-2xl"
            >
              <div className="flex items-center gap-3 pb-4 border-b border-white/10">
                <img
                  src="/img/monograma.webp"
                  alt="Emblema"
                  className="h-10 w-10 rounded-full border border-[#DFAA54]"
                />
                <div>
                  <p className="font-display text-sm font-bold text-white">
                    {FIRM_INFO.lawyer}
                  </p>
                  <p className="text-xs text-[#F6D58E]">Evalúa tu caso en segundos</p>
                </div>
              </div>

              <div className="mt-4">
                <span className="block text-[11px] font-bold uppercase tracking-wider text-white/70">
                  1. ¿Qué asunto necesitas resolver?
                </span>
                <div className="mt-2.5 flex flex-wrap gap-2">
                  {QUICK_TOPICS.map((t) => {
                    const active = topic === t;
                    return (
                      <button
                        key={t}
                        type="button"
                        onClick={() => setTopic(t)}
                        className={`rounded-full px-3 py-1.5 text-xs font-semibold transition ${
                          active
                            ? 'bg-[#F6D58E] text-[#150508]'
                            : 'border border-white/15 bg-white/5 text-white/80 hover:border-[#F6D58E]/50'
                        }`}
                      >
                        {t}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="mt-4">
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Tu nombre (opcional)"
                  className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-[#DFAA54] focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#F6D58E] to-[#DFAA54] px-6 py-3.5 text-sm font-bold text-[#150508] shadow-lg transition hover:brightness-105"
              >
                <MessageCircle className="h-4 w-4" />
                <span>Hablar por WhatsApp ahora</span>
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
