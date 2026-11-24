import { MessageCircle, PhoneCall } from 'lucide-react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProofSection from './components/ProofSection';
import PracticeSection from './components/PracticeSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import { FIRM_INFO } from './data/firmData';

export default function App() {
  const waFloatUrl = `https://wa.me/${FIRM_INFO.phoneMobileRaw}?text=${encodeURIComponent(
    'Hola Lic. Manuel Enrique Magaña, quiero evaluar mi caso y contratar defensa jurídica.'
  )}`;

  return (
    <div className="min-h-screen flex flex-col pb-14 md:pb-0">
      <Header />
      <main className="flex-1">
        <Hero />
        <ProofSection />
        <PracticeSection />
        <ContactSection />
      </main>
      <Footer />

      {/* Botón flotante desktop de WhatsApp */}
      <a
        href={waFloatUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Escribir por WhatsApp"
        className="hidden md:inline-flex fixed bottom-5 right-5 z-40 items-center gap-2 rounded-full bg-gradient-to-r from-[#F6D58E] to-[#DFAA54] px-5 py-3 text-xs font-bold text-[#150508] shadow-2xl shadow-black/35 transition hover:-translate-y-1"
      >
        <MessageCircle className="h-4 w-4" />
        <span>Evalúa tu caso aquí</span>
      </a>

      {/* Barra fija de conversión en móvil */}
      <div className="md:hidden fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 border-t border-white/15 bg-[#150508]/95 backdrop-blur-md">
        <a
          href={`tel:+${FIRM_INFO.phoneMobileRaw}`}
          className="flex items-center justify-center gap-2 py-3.5 text-xs font-bold text-[#FFFDF9] border-r border-white/15"
        >
          <PhoneCall className="h-4 w-4 text-[#F6D58E]" />
          <span>Llamar ahora</span>
        </a>
        <a
          href={waFloatUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 bg-gradient-to-r from-[#F6D58E] to-[#DFAA54] py-3.5 text-xs font-bold text-[#150508]"
        >
          <MessageCircle className="h-4 w-4" />
          <span>WhatsApp</span>
        </a>
      </div>
    </div>
  );
}
