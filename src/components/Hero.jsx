import { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, PhoneCall, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { FIRM_INFO } from '../data/firmData';

const URGENT_CASES = [
  'Detención o citatorio de Fiscalía',
  'Auditoría, multa o crédito fiscal',
  'Amparo contra orden de aprehensión',
  'Procedimiento ante OIC de Pemex',
  'Demanda civil, mercantil o laboral',
];

export default function Hero() {
  const [selectedCase, setSelectedCase] = useState(URGENT_CASES[0]);
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const who = name.trim() ? `Soy ${name.trim()}. ` : '';
    const msg = `Hola Lic. Manuel Enrique Magaña, ${who}necesito defensa legal urgente por: ${selectedCase}.`;
    window.open(
      `https://wa.me/${FIRM_INFO.phoneMobileRaw}?text=${encodeURIComponent(msg)}`,
      '_blank',
      'noopener,noreferrer'
    );
  };

  return (
    <section
      id="inicio"
      className="relative flex items-center overflow-hidden bg-[#150508] text-[#FFFDF9] pt-28 pb-12 lg:pt-32 lg:pb-14"
    >
      <div className="absolute inset-0">
        <img
          src="/img/editorial-despacho.jpg"
          alt=""
          className="h-full w-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#150508]/95 via-[#360810]/85 to-[#150508]/80" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="lg:col-span-7"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-[#F6D58E]/35 bg-[#8E1322]/45 px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.14em] text-[#F6D58E]">
              Villahermosa, Tabasco · Cédula desde 2003
            </span>

            <h1 className="mt-4 font-display text-4xl font-extrabold leading-[0.98] tracking-tight sm:text-5xl lg:text-[3.6rem]">
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

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href={`tel:+${FIRM_INFO.phoneMobileRaw}`}
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-bold text-[#150508] shadow-lg transition hover:bg-[#F6D58E]"
              >
                <PhoneCall className="h-4 w-4 text-[#8E1322]" />
                <span>Llamar al despacho ahora</span>
              </a>
              <span className="inline-flex items-center gap-1.5 text-xs font-medium text-[#F6D58E]/90">
                <ShieldCheck className="h-4 w-4" />
                Atención presencial y urgente en Tabasco
              </span>
            </div>
          </motion.div>

          {/* Caja de conversión inmediata */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="lg:col-span-5"
          >
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-[#F6D58E]/35 bg-[#1B060B]/95 p-6 shadow-2xl"
            >
              <p className="text-xs font-bold uppercase tracking-wider text-[#F6D58E]">
                Respuesta inmediata por WhatsApp
              </p>
              <h2 className="mt-1 font-display text-xl font-extrabold text-white">
                Cuéntanos tu situación y recibe orientación hoy
              </h2>

              <div className="mt-4 space-y-2">
                {URGENT_CASES.map((item) => {
                  const active = selectedCase === item;
                  return (
                    <button
                      key={item}
                      type="button"
                      onClick={() => setSelectedCase(item)}
                      className={`flex w-full items-center justify-between rounded-xl px-3.5 py-2.5 text-left text-xs font-semibold transition ${
                        active
                          ? 'bg-[#8E1322] text-white border border-[#F6D58E]/50'
                          : 'bg-white/5 text-white/80 border border-white/10 hover:bg-white/10'
                      }`}
                    >
                      <span>{item}</span>
                      <span className={`h-2 w-2 rounded-full ${active ? 'bg-[#F6D58E]' : 'bg-white/20'}`} />
                    </button>
                  );
                })}
              </div>

              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Tu nombre (opcional)"
                className="mt-3 w-full rounded-xl border border-white/15 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-white/40 focus:border-[#DFAA54] focus:outline-none"
              />

              <button
                type="submit"
                className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#F6D58E] to-[#DFAA54] px-6 py-3.5 text-sm font-bold text-[#150508] shadow-lg transition hover:brightness-105"
              >
                <MessageCircle className="h-4 w-4" />
                <span>Enviar caso por WhatsApp</span>
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
