import Page from './components/Page';
import NewsletterSignup from './components/NewsletterSignup';
import HeroSection from './components/HeroSection';

export default function Home() {
  return (
    <Page>
      <NewsletterSignup />
      <HeroSection />
    </Page>
  );
}
