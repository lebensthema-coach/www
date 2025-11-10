import WhiteContainer from './WhiteContainer';
import Button from './Button';

export default function HeroSection() {
  return (
    <section className="w-full max-w-7xl mx-auto px-4">
      <WhiteContainer>
        <div className="px-6 md:px-10 py-8 md:py-12 text-center">
          {/* H1 - Primary Quote */}
          <div className="mb-6 md:mb-8">
            <h1 className="text-brand-primary text-2xl md:text-4xl lg:text-5xl font-bold leading-tight text-center">
              <span className="inline-block">"Warum gerate ich immer wieder in dieselben Situationen?"</span>
            </h1>
          </div>

          {/* H2 - Subheading */}
          <div className="mb-8 md:mb-10">
            <h2 className="text-brand-dark-gray text-xl md:text-2xl lg:text-3xl font-semibold leading-relaxed text-center tracking-tight max-w-3xl mx-auto">
              Ein Online-Coaching, in dem Du Dein Lebensthema wirklich erlebst.
            </h2>
          </div>

          {/* Description Text */}
          <div className="mb-8 md:mb-10 max-w-4xl mx-auto text-center space-y-4">
            <p className="text-brand-dark-gray text-base md:text-lg lg:text-xl leading-relaxed text-center">
              Vielleicht passt Du Dich an, funktionierst, übernimmst Verantwortung für alle – und verlierst Dich selbst dabei. Trotz aller Anstrengung nagt an Dir das Gefühl: „Es ist nie genug."
            </p>
            <p className="text-brand-dark-gray text-base md:text-lg lg:text-xl leading-relaxed text-center">
              Gemeinsam decken wir solche tiefliegenden Muster auf, die Dich immer wieder in die selben Schmerzen treiben.
            </p>
            <p className="text-brand-dark-gray text-base md:text-lg lg:text-xl leading-relaxed text-center font-medium">
              Du verstehst, das Warum dahinter – und beginnst, Dich daraus zu lösen.
            </p>
          </div>

          {/* CTA Button */}
          <div className="text-center">
            <Button href="/coaching">
              Coaching-Termin sofort sichern
            </Button>
          </div>
        </div>
      </WhiteContainer>
    </section>
  );
}

