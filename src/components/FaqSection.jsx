import { useState } from 'react';
import { ChevronDown, MessageCircle } from 'lucide-react';
import { FIRM_INFO } from '../data/firmData';

const FAQS = [
  {
    q: '¿Atienden detenciones urgentes o citatorios en Villahermosa y todo Tabasco?',
    a: 'Sí. Brindamos atención inmediata para detenciones en flagrancia, audiencias iniciales ante juez de control, citatorios de fiscalía y promoción urgente de amparos contra órdenes de aprehensión en Villahermosa, Tabasco y ante juzgados federales.',
  },
  {
    q: '¿Cómo funciona la primera valoración de mi caso?',
    a: 'Puedes enviarnos un mensaje por WhatsApp o llamarnos directamente. Revisamos brevemente tu situación, citatorio, carpeta de investigación o crédito fiscal para indicarte la ruta legal viable y cotizar la representación sin compromiso.',
  },
  {
    q: '¿Quién atiende personalmente mi asunto?',
    a: 'Tu caso es atendido directamente por el Lic. Manuel Enrique Magaña Espinosa, abogado penal-fiscalista con cédula profesional desde 2003 y más de 22 años de litigio documentado ante el Poder Judicial de Tabasco y tribunales federales.',
  },
  {
    q: '¿Llevan defensa ante el Órgano Interno de Control (OIC) de Pemex y asuntos fiscales?',
    a: 'Sí. Representamos a servidores públicos, contratistas y contribuyentes en procedimientos de responsabilidad administrativa ante el OIC de Pemex, así como en impugnación de multas, auditorías, créditos fiscales y juicios de nulidad.',
  },
  {
    q: '¿Puedo agendar una cita presencial en el despacho?',
    a: 'Sí, atendemos con cita previa en nuestras oficinas ubicadas en Circuito del Parque número 229, Fraccionamiento del Parque, Colonia Guayabal, Villahermosa, Tabasco, o mediante asesoría inicial a distancia.',
  },
];

export default function FaqSection() {
  const [openIdx, setOpenIdx] = useState(0);
  const waUrl = `https://wa.me/${FIRM_INFO.phoneMobileRaw}?text=${encodeURIComponent(
    'Hola Lic. Manuel Enrique Magaña, tengo una duda sobre mi caso y quisiera agendar una valoración.'
  )}`;

  return (
    <section id="preguntas" className="bg-[#FFFDF9] py-12 lg:py-16 border-b border-[#191314]/10">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-5">
            <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#8E1322]">
              Preguntas Frecuentes
            </span>
            <h2 className="mt-2 font-display text-3xl font-extrabold leading-tight tracking-tight text-[#191314] sm:text-4xl">
              Resuelve tus dudas antes de <span className="text-[#8E1322]">iniciar tu defensa.</span>
            </h2>
            <p className="mt-3 text-sm text-[#5A4E4E]">
              Información clara sobre tiempos de respuesta, cobertura en Tabasco y fuero federal, y cómo contratar la representación del despacho.
            </p>
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#8E1322] px-6 py-3 text-xs font-bold text-[#FFFDF9] shadow-md transition hover:bg-[#B51B2E]"
            >
              <MessageCircle className="h-4 w-4" />
              <span>Hacer una pregunta por WhatsApp</span>
            </a>
          </div>

          <div className="lg:col-span-7 divide-y divide-[#191314]/10 border-y border-[#191314]/10">
            {FAQS.map((item, idx) => {
              const isOpen = idx === openIdx;
              return (
                <div key={item.q} className="py-4">
                  <button
                    type="button"
                    onClick={() => setOpenIdx(isOpen ? -1 : idx)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 text-left"
                  >
                    <span className="font-display text-base font-bold text-[#191314] sm:text-lg">
                      {item.q}
                    </span>
                    <ChevronDown
                      className={`h-5 w-5 shrink-0 text-[#8E1322] transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <p className="mt-3 text-sm leading-relaxed text-[#5A4E4E] pr-6">
                      {item.a}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
