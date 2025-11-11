import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import NewsletterSignup from '../components/NewsletterSignup';
import WhiteContainer from '../components/WhiteContainer';
import Signatur from '../components/Signatur';

export default function Newsletter() {
  return (
    <div className="min-h-screen bg-brand-page-bg flex flex-col">
      <div className="flex flex-col space-y-4 pt-3">
        <Navigation />
        <NewsletterSignup />
        <Signatur />
      </div>
      <div className="mt-auto pt-4">
        <Footer />
      </div>
    </div>
  );
}

