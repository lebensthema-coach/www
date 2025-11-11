import Navigation from './components/Navigation';
import NewsletterSignup from './components/NewsletterSignup';
import HeroSection from './components/HeroSection';
import Signatur from './components/Signatur';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-brand-page-bg flex flex-col">
      <div className="flex flex-col space-y-4 pt-3">
        <Navigation />
        <NewsletterSignup />
        <HeroSection />
        <Signatur />
      </div>
      <div className="mt-auto pt-4">
        <Footer />
      </div>
    </div>
  );
}
