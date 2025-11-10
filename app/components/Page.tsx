import Navigation from './Navigation';
import Signatur from './Signatur';
import Footer from './Footer';

interface PageProps {
  children: React.ReactNode;
}

export default function Page({ children }: PageProps) {
  return (
    <div className="min-h-screen bg-brand-page-bg flex flex-col">
      <div className="flex flex-col space-y-4 pt-3">
        <Navigation />
        {children}
        <Signatur />
      </div>
      <div className="mt-auto pt-4">
        <Footer />
      </div>
    </div>
  );
}

