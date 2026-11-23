import { MessageCircle } from 'lucide-react';
import Header from './components/Header';
import Hero from './components/Hero';
import TrajectorySection from './components/TrajectorySection';
import PracticeSection from './components/PracticeSection';
import UrgencySection from './components/UrgencySection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import { FIRM_INFO } from './data/firmData';

export default function App() {
  const waFloatUrl = `https://wa.me/${FIRM_INFO.phoneMobileRaw}?text=${encodeURIComponent(
    'Hola Lic. Manuel Enrique Magaña, solicito información para una consulta jurídica.'
  )}`;

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <TrajectorySection />
        <PracticeSection />
        <UrgencySection />
        <ContactSection />
      </main>
      <Footer />

      {/* Botón flotante de WhatsApp */}
      <a
        href={waFloatUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Escribir por WhatsApp"
        className="fixed bottom-5 right-5 z-40 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#F6D58E] to-[#DFAA54] px-4 py-3 text-xs font-bold text-[#150508] shadow-2xl shadow-black/35 transition hover:-translate-y-1 hover:scale-105"
      >
        <MessageCircle className="h-4 w-4" />
        <span className="hidden sm:inline">WhatsApp directo</span>
      </a>
    </div>
  );
}
