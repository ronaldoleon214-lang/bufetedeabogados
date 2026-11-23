import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle, ShieldCheck, Scale, Clock } from 'lucide-react';
import { FIRM_INFO } from '../data/firmData';

export default function Hero() {
  const waUrl = `https://wa.me/${FIRM_INFO.phoneMobileRaw}?text=${encodeURIComponent(
    'Hola Lic. Manuel Enrique Magaña, solicito información para una consulta jurídica.'
  )}`;

  return (
    <section
      id="inicio"
      className="relative min-h-[96vh] flex items-end overflow-hidden bg-[#150508] text-[#FFFDF9] pt-28 pb-12"
    >
      <div className="absolute inset-0">
        <img
          src="/img/editorial-despacho.jpg"
          alt=""
          className="h-full w-full object-cover opacity-60 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#150508]/95 via-[#360810]/80 to-[#150508]/45" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#150508] via-transparent to-[#150508]/50" />
        <div className="pointer-events-none absolute -left-24 -bottom-24 h-[460px] w-[460px] rounded-full bg-[#B51B2E]/30 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-8"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-[#F6D58E]/30 bg-[#8E1322]/35 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.16em] text-[#F6D58E]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#F6D58E]" />
              {FIRM_INFO.city} · Cédula desde {FIRM_INFO.since}
            </span>

            <h1 className="mt-6 font-display text-5xl font-extrabold leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
              Asesoría y <br />
              <span className="bg-gradient-to-r from-[#F6D58E] via-[#DFAA54] to-[#F29C6B] bg-clip-text text-transparent">
                defensa jurídica.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base text-[#FFFDF9]/85 sm:text-lg">
              Protege tu libertad y tu patrimonio con un abogado litigante con más de 22 años en tribunales. Defensa penal, fiscal y amparo con estrategia clara, discreción y respuesta inmediata.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-[#F6D58E] to-[#DFAA54] px-7 py-4 text-sm font-bold text-[#150508] shadow-xl shadow-[#DFAA54]/25 transition hover:-translate-y-0.5 hover:shadow-[#DFAA54]/40"
              >
                <MessageCircle className="h-4 w-4" />
                <span>Evaluar mi caso ahora</span>
              </a>
              <a
                href={`tel:+${FIRM_INFO.phoneMobileRaw}`}
                className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 px-6 py-4 text-sm font-semibold text-[#FFFDF9] backdrop-blur-sm transition hover:border-[#F6D58E] hover:bg-white/10"
              >
                <span>Llamar al despacho</span>
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
            <p className="mt-4 text-xs font-medium text-[#F6D58E]/80">
              Respuesta directa del titular · Confidencialidad garantizada · Tabasco y Fuero Federal
            </p>
          </motion.div>

          {/* Tarjeta flotante de respaldo profesional (sin números crudos) */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-4"
          >
            <div className="rounded-2xl border border-[#F6D58E]/25 bg-[#150508]/75 p-6 backdrop-blur-md shadow-2xl">
              <div className="flex items-center gap-3 pb-4 border-b border-white/10">
                <img
                  src="/img/monograma.webp"
                  alt="Emblema"
                  className="h-11 w-11 rounded-full border border-[#DFAA54]"
                />
                <div>
                  <p className="font-display text-base font-bold text-[#FFFDF9]">
                    {FIRM_INFO.lawyer}
                  </p>
                  <p className="text-xs text-[#F6D58E]">{FIRM_INFO.title}</p>
                </div>
              </div>

              <div className="mt-4 space-y-3 text-sm text-[#FFFDF9]/80">
                <div className="flex items-center gap-3">
                  <Clock className="h-4 w-4 text-[#DFAA54] shrink-0" />
                  <span><strong className="text-white">22+ años</strong> de litigio ante el Poder Judicial</span>
                </div>
                <div className="flex items-center gap-3">
                  <Scale className="h-4 w-4 text-[#DFAA54] shrink-0" />
                  <span><strong className="text-white">9 materias</strong> de defensa especializada</span>
                </div>
                <div className="flex items-center gap-3">
                  <ShieldCheck className="h-4 w-4 text-[#DFAA54] shrink-0" />
                  <span>Atención personal directa y confidencial</span>
                </div>
              </div>

              <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-3.5 text-xs">
                <span className="font-semibold text-[#F6D58E]">
                  Cédula desde 2003
                </span>
                <span className="text-white/60">Tabasco · Fuero Federal</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Cinta animada de especialidades */}
        <div className="mt-12 overflow-hidden border-t border-white/15 pt-6">
          <motion.div
            animate={{ x: ['0%', '-50%'] }}
            transition={{ repeat: Infinity, ease: 'linear', duration: 22 }}
            className="flex w-max items-center gap-8 text-xs font-bold uppercase tracking-[0.18em] text-[#F6D58E]/85"
          >
            {[
              'Penal',
              'Delitos Federales',
              'Fiscal',
              'Juicios de Amparo',
              'OIC Pemex',
              'Civil & Mercantil',
              'Laboral',
              'Administrativo',
              'Penal',
              'Delitos Federales',
              'Fiscal',
              'Juicios de Amparo',
              'OIC Pemex',
              'Civil & Mercantil',
              'Laboral',
              'Administrativo',
            ].map((item, i) => (
              <span key={`${item}-${i}`} className="flex items-center gap-8 whitespace-nowrap">
                <span>{item}</span>
                <span className="h-1.5 w-1.5 rounded-full bg-[#DFAA54]" />
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
