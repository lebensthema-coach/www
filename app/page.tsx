import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import Signatur from './components/Signatur';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-brand-page-bg flex flex-col">
      <Navigation />
      <HeroSection />
      <Signatur />
      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
}
