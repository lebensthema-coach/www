'use client';

import { useEffect } from 'react';
import WhiteContainer from './WhiteContainer';

export default function NewsletterSignup() {
  useEffect(() => {
    // MailerLite Universal Script
    if (typeof window !== 'undefined' && !(window as any).ml) {
      (function(w: any, d: Document, e: string, u: string, f: string) {
        w[f] = w[f] || function(...args: any[]) {
          (w[f].q = w[f].q || []).push(args);
        };
        const l = d.createElement(e) as HTMLScriptElement;
        l.async = true;
        l.src = u;
        const n = d.getElementsByTagName(e)[0] as HTMLScriptElement | null;
        if (n && n.parentNode) {
          n.parentNode.insertBefore(l, n);
        } else {
          d.head.appendChild(l);
        }
      })(window, document, 'script', 'https://assets.mailerlite.com/js/universal.js', 'ml');
      
      (window as any).ml('account', '1873724');
    } else if ((window as any).ml) {
      (window as any).ml('account', '1873724');
    }
  }, []);

  return (
    <section className="w-full max-w-7xl mx-auto px-4">
      <WhiteContainer>
        <div className="px-6 py-10">
          <div className="ml-embedded" data-form="ifzLRo" />
        </div>
      </WhiteContainer>
    </section>
  );
}

