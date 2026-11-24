import { useState } from 'react';
import { Copy, Check, MapPin, Mail, Phone, ArrowUpRight, ChevronDown } from 'lucide-react';
import { FIRM_INFO } from '../data/firmData';

const QUICK_FAQS = [
  {
    q: '¿Atienden detenciones urgentes en Villahermosa y Tabasco?',
    a: 'Sí, respuesta inmediata en detenciones, citatorios, audiencias iniciales y amparo contra orden de aprehensión.',
  },
  {
    q: '¿Cómo es la primera valoración?',
    a: 'Nos escribes por WhatsApp o llamas, revisamos tu situación o documento y te indicamos estrategia y honorarios.',
  },
  {
    q: '¿Llevan defensa ante el OIC de Pemex y asuntos fiscales?',
    a: 'Sí, representamos servidores públicos, contratistas y contribuyentes ante el OIC de Pemex, SAT y tribunales.',
  },
];

export default function ContactSection() {
  const [copiedKey, setCopiedKey] = useState(null);
  const [faqIdx, setFaqIdx] = useState(0);

  const handleCopy = async (key, text) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedKey(key);
      setTimeout(() => setCopiedKey(null), 2000);
    } catch {
      setCopiedKey(null);
    }
  };

  return (
    <section id="contacto" className="bg-[#FAF6EE] py-12 lg:py-14">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-wrap items-end justify-between gap-4 border-b border-[#191314]/10 pb-5">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#8E1322]">
              Contacto Directo
            </span>
            <h2 className="mt-1 font-display text-2xl font-extrabold tracking-tight text-[#191314] sm:text-4xl">
              Atención inmediata en <span className="text-[#8E1322]">Villahermosa, Tabasco.</span>
            </h2>
          </div>
          <p className="text-xs font-medium text-[#5A4E4E]">
            Cita presencial en Guayabal o valoración directa por teléfono y WhatsApp.
          </p>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-12 lg:items-stretch">
          {/* Izquierda: Teléfonos + Correo + Dirección + Mini FAQ sin huecos */}
          <div className="lg:col-span-6 flex flex-col justify-between gap-4">
            <div className="grid gap-3 sm:grid-cols-2">
              <a
                href={`tel:+${FIRM_INFO.phoneMobileRaw}`}
                className="rounded-xl border border-[#191314]/10 bg-[#FFFDF9] p-4 transition hover:border-[#8E1322]/40"
              >
                <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-[#8E1322]">
                  <Phone className="h-3.5 w-3.5" />
                  <span>Móvil / WhatsApp</span>
                </div>
                <span className="mt-2 block font-display text-2xl font-extrabold tabular-nums text-[#191314]">
                  {FIRM_INFO.phoneMobile}
                </span>
              </a>

              <a
                href={`tel:+${FIRM_INFO.phoneOfficeRaw}`}
                className="rounded-xl border border-[#191314]/10 bg-[#FFFDF9] p-4 transition hover:border-[#8E1322]/40"
              >
                <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-[#8E1322]">
                  <Phone className="h-3.5 w-3.5" />
                  <span>Oficina</span>
                </div>
                <span className="mt-2 block font-display text-2xl font-extrabold tabular-nums text-[#191314]">
                  {FIRM_INFO.phoneOffice}
                </span>
              </a>
            </div>

            <div className="rounded-xl border border-[#191314]/10 bg-[#FFFDF9] p-4 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#191314]/10 pb-3">
                <div className="min-w-0">
                  <div className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-[#8E1322]">
                    <Mail className="h-3.5 w-3.5" />
                    <span>Correo</span>
                  </div>
                  <a
                    href={`mailto:${FIRM_INFO.email}`}
                    className="block font-display text-sm font-bold text-[#191314] truncate hover:text-[#8E1322]"
                  >
                    {FIRM_INFO.email}
                  </a>
                </div>
                <button
                  type="button"
                  onClick={() => handleCopy('email', FIRM_INFO.email)}
                  className="inline-flex items-center gap-1 rounded-full border border-[#191314]/15 px-3 py-1 text-xs font-semibold hover:border-[#8E1322]"
                >
                  {copiedKey === 'email' ? <Check className="h-3 w-3 text-emerald-700" /> : <Copy className="h-3 w-3" />}
                  <span>{copiedKey === 'email' ? 'Copiado' : 'Copiar'}</span>
                </button>
              </div>

              <div className="flex flex-wrap items-start justify-between gap-2">
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-[#8E1322]">
                    <MapPin className="h-3.5 w-3.5" />
                    <span>Despacho</span>
                  </div>
                  <address className="not-italic text-xs font-medium text-[#191314] mt-0.5">
                    {FIRM_INFO.address}
                  </address>
                </div>
                <a
                  href={FIRM_INFO.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 rounded-full bg-[#8E1322] px-3 py-1.5 text-xs font-semibold text-white hover:bg-[#B51B2E]"
                >
                  <span>Maps</span>
                  <ArrowUpRight className="h-3 w-3" />
                </a>
              </div>
            </div>

            {/* Mini FAQ compacto */}
            <div className="rounded-xl border border-[#191314]/10 bg-[#FFFDF9] px-4 divide-y divide-[#191314]/10">
              {QUICK_FAQS.map((item, idx) => {
                const open = idx === faqIdx;
                return (
                  <div key={item.q} className="py-3">
                    <button
                      type="button"
                      onClick={() => setFaqIdx(open ? -1 : idx)}
                      className="flex w-full items-center justify-between gap-2 text-left text-xs font-bold text-[#191314]"
                    >
                      <span>{item.q}</span>
                      <ChevronDown className={`h-4 w-4 shrink-0 text-[#8E1322] transition-transform ${open ? 'rotate-180' : ''}`} />
                    </button>
                    {open && <p className="mt-1.5 text-xs text-[#5A4E4E]">{item.a}</p>}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Derecha: Mapa alineado exactamente */}
          <div className="lg:col-span-6">
            <div className="h-full min-h-[360px] overflow-hidden rounded-xl border border-[#191314]/15 bg-[#EAE3D5]">
              <iframe
                title="Ubicación del Bufete de Abogados en Villahermosa, Tabasco"
                src={FIRM_INFO.mapsEmbedUrl}
                className="h-full w-full min-h-[360px] border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
