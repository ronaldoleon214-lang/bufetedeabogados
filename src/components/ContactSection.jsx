import { useState } from 'react';
import { Copy, Check, MapPin, Mail, Phone, MessageCircle, ArrowUpRight } from 'lucide-react';
import { FIRM_INFO } from '../data/firmData';

export default function ContactSection() {
  const [copiedKey, setCopiedKey] = useState(null);
  const [clientName, setClientName] = useState('');
  const [matter, setMatter] = useState('Asunto Penal / Detención');

  const handleCopy = async (key, text) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedKey(key);
      setTimeout(() => setCopiedKey(null), 2200);
    } catch {
      setCopiedKey(null);
    }
  };

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();
    const intro = clientName.trim() ? `Hola Lic. Manuel Enrique Magaña, soy ${clientName.trim()}.` : 'Hola Lic. Manuel Enrique Magaña.';
    const url = `https://wa.me/${FIRM_INFO.phoneMobileRaw}?text=${encodeURIComponent(
      `${intro} Solicito orientación jurídica respecto a: ${matter}.`
    )}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contacto" className="bg-[#FAF6EE] py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-6 lg:grid-cols-12 lg:items-end border-b border-[#191314]/10 pb-8">
          <div className="lg:col-span-7">
            <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#8E1322]">
              03 · Comunicación Directa
            </span>
            <h2 className="mt-2 font-display text-3xl font-extrabold tracking-tight text-[#191314] sm:text-5xl">
              Estamos a <span className="text-[#8E1322]">un contacto</span> de distancia.
            </h2>
          </div>
          <div className="lg:col-span-5 flex flex-wrap items-center justify-between gap-4 lg:justify-end">
            <div className="text-left lg:text-right">
              <p className="text-sm font-semibold text-[#191314]">
                Atención presencial en Villahermosa, Tabasco
              </p>
              <p className="text-xs text-[#5A4E4E] mt-0.5">
                Consulta inicial inmediata por teléfono, WhatsApp o cita en despacho.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-12">
          {/* Canales directos + Formulario rápido */}
          <div className="lg:col-span-6 space-y-6">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-[#191314]/10 bg-[#FFFDF9] p-6">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#8E1322]">
                  <Phone className="h-4 w-4" />
                  <span>Móvil / WhatsApp</span>
                </div>
                <a
                  href={`tel:+${FIRM_INFO.phoneMobileRaw}`}
                  className="mt-3 block font-display text-2xl font-extrabold tabular-nums text-[#191314] hover:text-[#8E1322]"
                >
                  {FIRM_INFO.phoneMobile}
                </a>
                <span className="mt-1 block text-xs text-[#5A4E4E]">Atención directa e inmediata</span>
              </div>

              <div className="rounded-2xl border border-[#191314]/10 bg-[#FFFDF9] p-6">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#8E1322]">
                  <Phone className="h-4 w-4" />
                  <span>Oficina</span>
                </div>
                <a
                  href={`tel:+${FIRM_INFO.phoneOfficeRaw}`}
                  className="mt-3 block font-display text-2xl font-extrabold tabular-nums text-[#191314] hover:text-[#8E1322]"
                >
                  {FIRM_INFO.phoneOffice}
                </a>
                <span className="mt-1 block text-xs text-[#5A4E4E]">Línea fija del despacho</span>
              </div>
            </div>

            <div className="rounded-2xl border border-[#191314]/10 bg-[#FFFDF9] p-6 space-y-5">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#191314]/10 pb-4">
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#8E1322]">
                    <Mail className="h-4 w-4" />
                    <span>Correo electrónico</span>
                  </div>
                  <a
                    href={`mailto:${FIRM_INFO.email}`}
                    className="mt-1.5 block font-display text-lg font-bold text-[#191314] break-all hover:text-[#8E1322]"
                  >
                    {FIRM_INFO.email}
                  </a>
                </div>
                <button
                  type="button"
                  onClick={() => handleCopy('email', FIRM_INFO.email)}
                  className="inline-flex items-center gap-1.5 rounded-full border border-[#191314]/15 px-3.5 py-1.5 text-xs font-semibold text-[#191314] hover:border-[#8E1322] hover:text-[#8E1322]"
                >
                  {copiedKey === 'email' ? <Check className="h-3.5 w-3.5 text-emerald-700" /> : <Copy className="h-3.5 w-3.5" />}
                  <span>{copiedKey === 'email' ? 'Copiado' : 'Copiar'}</span>
                </button>
              </div>

              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#8E1322]">
                    <MapPin className="h-4 w-4" />
                    <span>Despacho en Villahermosa</span>
                  </div>
                  <address className="mt-1.5 not-italic text-sm font-medium text-[#191314]">
                    {FIRM_INFO.address}
                  </address>
                </div>
                <div className="flex gap-2">
                  <a
                    href={FIRM_INFO.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 rounded-full bg-[#8E1322] px-3.5 py-1.5 text-xs font-semibold text-white hover:bg-[#B51B2E]"
                  >
                    <span>Maps</span>
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                  <button
                    type="button"
                    onClick={() => handleCopy('addr', FIRM_INFO.address)}
                    className="inline-flex items-center gap-1.5 rounded-full border border-[#191314]/15 px-3.5 py-1.5 text-xs font-semibold text-[#191314] hover:border-[#8E1322] hover:text-[#8E1322]"
                  >
                    {copiedKey === 'addr' ? <Check className="h-3.5 w-3.5 text-emerald-700" /> : <Copy className="h-3.5 w-3.5" />}
                    <span>{copiedKey === 'addr' ? 'Copiado' : 'Copiar'}</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Formulario rápido a WhatsApp */}
            <form
              onSubmit={handleWhatsAppSubmit}
              className="rounded-2xl bg-[#150508] p-6 text-[#FFFDF9] shadow-xl"
            >
              <h3 className="font-display text-xl font-bold text-[#F6D58E]">
                Inicia tu consulta en 30 segundos
              </h3>
              <p className="mt-1 text-xs text-[#FFFDF9]/70">
                Prepara tu mensaje y conéctate directo por WhatsApp con el despacho.
              </p>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <input
                  type="text"
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  placeholder="Tu nombre (opcional)"
                  className="rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-[#DFAA54] focus:outline-none"
                />
                <select
                  value={matter}
                  onChange={(e) => setMatter(e.target.value)}
                  className="rounded-xl border border-white/15 bg-[#22060B] px-4 py-3 text-sm text-white focus:border-[#DFAA54] focus:outline-none"
                >
                  <option>Asunto Penal / Detención</option>
                  <option>Delito Federal</option>
                  <option>Asunto Fiscal / Auditoría</option>
                  <option>Juicio de Amparo</option>
                  <option>OIC de Pemex</option>
                  <option>Asunto Civil / Mercantil</option>
                  <option>Asunto Laboral</option>
                  <option>Defensa Migratoria</option>
                </select>
              </div>
              <button
                type="submit"
                className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#F6D58E] to-[#DFAA54] px-6 py-3.5 text-sm font-bold text-[#150508] transition hover:opacity-95"
              >
                <MessageCircle className="h-4 w-4" />
                <span>Enviar mensaje por WhatsApp</span>
              </button>
            </form>
          </div>

          {/* Mapa interactivo de Villahermosa */}
          <div className="lg:col-span-6 flex flex-col">
            <div className="relative h-full min-h-[420px] overflow-hidden rounded-2xl border border-[#191314]/15 bg-[#EAE3D5] shadow-lg">
              <iframe
                title="Ubicación del Bufete de Abogados en Villahermosa, Tabasco"
                src={FIRM_INFO.mapsEmbedUrl}
                className="h-full w-full min-h-[420px] border-0"
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
