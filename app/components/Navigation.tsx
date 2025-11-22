'use client';

import { usePathname } from 'next/navigation';
import WhiteContainer from './WhiteContainer';

export default function Navigation() {
  const pathname = usePathname();
  const isHome = pathname === '/';
  const isNewsletter = pathname === '/newsletter';

  return (
    <nav className="w-full max-w-7xl mx-auto px-4">
      <WhiteContainer>
        <div className="flex gap-6 px-6 py-4">
          <a 
            href="/" 
            className={`font-bold text-base transition-opacity ${
              isHome 
                ? 'text-brand-primary hover:opacity-80' 
                : 'text-brand-dark-gray hover:text-brand-primary'
            }`}
          >
            Home
          </a>
          <a 
            href="https://calendly.com/lebensthema/coach" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-dark-gray font-bold text-base hover:text-brand-primary transition-colors"
          >
            Coaching
          </a>
          <a 
            href="/newsletter" 
            className={`font-bold text-base transition-opacity ${
              isNewsletter 
                ? 'text-brand-primary hover:opacity-80' 
                : 'text-brand-dark-gray hover:text-brand-primary'
            }`}
          >
            Newsletter
          </a>
          <a 
            href="https://creators.spotify.com/pod/profile/sergej-tissen2/" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-dark-gray font-bold text-base hover:text-brand-primary transition-colors"
          >
            Podcast
          </a>
        </div>
      </WhiteContainer>
    </nav>
  );
}

