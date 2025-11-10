import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import WhiteContainer from '../components/WhiteContainer';

export default function Impressum() {
  return (
    <div className="min-h-screen bg-brand-page-bg flex flex-col">
      <Navigation />
      <main className="flex-1">
        <section className="w-full max-w-7xl mx-auto px-4 pt-4 pb-2">
          <WhiteContainer>
            <div className="px-6 md:px-10 py-8 md:py-12">
              <h1 className="text-brand-primary text-3xl md:text-4xl font-bold mb-8 md:mb-10">
                Impressum
              </h1>
              
              <div className="space-y-8 text-brand-dark-gray">
                <section>
                  <p className="text-lg font-semibold mb-4">Angaben gemäß § 5 DDG</p>
                  <div className="space-y-2 mb-6">
                    <p className="font-semibold">Sergej Tissen Consulting</p>
                    <p>
                      Adalbertstr. 37<br />
                      80799 München
                    </p>
                  </div>
                </section>

                <section>
                  <h2 className="text-xl md:text-2xl font-bold mb-4">Vertreten durch</h2>
                  <p className="mb-6">Sergej Tissen</p>
                </section>

                <section>
                  <h2 className="text-xl md:text-2xl font-bold mb-4">Kontakt</h2>
                  <p className="mb-6">
                    E-Mail: <a href="mailto:sergej@lebensthema.coach" className="text-brand-primary hover:underline">sergej@lebensthema.coach</a>
                  </p>
                </section>

                <section>
                  <h2 className="text-xl md:text-2xl font-bold mb-4">Umsatzsteuer-ID</h2>
                  <p className="mb-6">
                    Umsatzsteuer-Identifikationsnummer gemäß §27a Umsatzsteuergesetz: DE357496623
                  </p>
                </section>

                <section>
                  <h2 className="text-xl md:text-2xl font-bold mb-4">Verbraucherstreitbeilegung / Universalschlichtungsstelle</h2>
                  <p className="mb-6">
                    Wir nehmen nicht an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teil und sind dazu auch nicht verpflichtet.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl md:text-2xl font-bold mb-4">Datenschutzerklärung</h2>
                  <p className="mb-6">
                    Unter dem folgenden Link finden Sie unsere <a href="/datenschutz" className="text-brand-primary hover:underline">Datenschutzerklärung</a>.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl md:text-2xl font-bold mb-4">Haftungsausschluss</h2>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg md:text-xl font-semibold mb-3">Haftung für Inhalte</h3>
                      <p className="mb-4 leading-relaxed">
                        Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs.1 DDG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 DDG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg md:text-xl font-semibold mb-3">Haftung für Links</h3>
                      <p className="mb-4 leading-relaxed">
                        Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg md:text-xl font-semibold mb-3">Urheberrecht</h3>
                      <p className="mb-4 leading-relaxed">
                        Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
                      </p>
                    </div>
                  </div>
                </section>

                <section className="mt-8 pt-6 border-t border-gray-200">
                  <p className="text-sm text-gray-500">
                    Impressum von <a href="https://impressum-generator.de" target="_blank" rel="dofollow" className="text-brand-primary hover:underline">Impressum-Generator.de</a>. Powered by <a href="https://www.kanzlei-hasselbach.de/" target="_blank" rel="nofollow" className="text-brand-primary hover:underline">Franziska Hasselbach, Bonn</a>.
                  </p>
                </section>
              </div>
            </div>
          </WhiteContainer>
        </section>
      </main>
      <div className="mt-auto">
        <Footer />
      </div>
    </div >
  );
}

