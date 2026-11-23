import Header from './components/Header';
import Hero from './components/Hero';
import TrajectorySection from './components/TrajectorySection';
import PracticeSection from './components/PracticeSection';
import UrgencySection from './components/UrgencySection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function App() {
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
    </div>
  );
}
