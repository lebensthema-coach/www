'use client';

import { useEffect } from 'react';
import WhiteContainer from './WhiteContainer';

export default function NewsletterSignup() {
  useEffect(() => {
    // MailerLite Universal Script
    if (typeof window !== 'undefined' && !(window as any).ml) {
      (function (w: any, d: Document, e: string, u: string, f: string) {
        w[f] = w[f] || function (...args: any[]) {
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
        <div className="px-6 md:px-10 py-8 md:py-12">
          {/* H1 - Primary Quote */}
          <div className="mb-6 md:mb-8">
            <h1 className="text-brand-primary text-2xl md:text-4xl lg:text-5xl font-bold leading-tight text-center">
              <span className="inline-block">"Dieser Newsletter ist wie ein sanfter Spiegel – er zeigt mir, was in mir wirkt, ohne zu urteilen."</span>
            </h1>
          </div>

          {/* Description Text */}
          <div className="mb-8 md:mb-10 max-w-4xl mx-auto  space-y-4">
            <p className="text-brand-dark-gray text-base md:text-lg lg:text-xl leading-relaxed font-medium">
              In diesem Newsletter begegnest Du <strong>echten Fallgeschichten</strong> aus dem Coaching – berührend, tief, ehrlich.
            </p>
            <p className="text-brand-dark-gray text-base md:text-lg lg:text-xl leading-relaxed ">
              Geschichten von Menschen, die ähnliche Wege gehen wie Du: mit Selbstzweifeln, Anpassung, dem Wunsch, <strong>endlich sie selbst zu sein</strong>.
            </p>
            <p className="text-brand-dark-gray text-base md:text-lg lg:text-xl leading-relaxed ">
              Du erlebst:
            </p>
            <p className="text-brand-dark-gray text-base md:text-lg lg:text-xl leading-relaxed font-medium">
              <span className="text-[#28A745] font-bold">✓ </span>Bewegende Fallgeschichten aus echten Coachings
              <br />
              <span className="text-[#28A745] font-bold">✓ </span>Tiefe Einblicke in Lebensthemen und ihre Wurzeln
              <br />
              <span className="text-[#28A745] font-bold">✓ </span>Fragen und Reflexionsimpulse für Deinen eigenen Weg
            </p>
            <p className="text-brand-dark-gray text-base md:text-lg lg:text-xl leading-relaxed ">
              Du bekommst <strong>Verständnis</strong> statt Vorwürfe, <strong>Tiefe</strong> statt Oberfläche, <strong>Integration</strong> statt Selbstoptimierung.
            </p>
          </div>
          <div className="ml-embedded" data-form="ifzLRo" />
        </div>


      </WhiteContainer>
    </section>
  );
}

