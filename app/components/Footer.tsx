import WhiteContainer from './WhiteContainer';

export default function Footer() {
  return (
    <footer className="w-full max-w-7xl mx-auto px-4 pb-4">
      <WhiteContainer>
        <div className="flex justify-end items-center gap-6 px-6 py-4">
          <a 
            href="/datenschutz" 
            className="text-gray-500 text-base font-normal hover:text-brand-primary transition-colors"
          >
            Datenschutz
          </a>
          <a 
            href="/impressum" 
            className="text-gray-500 text-base font-normal hover:text-brand-primary transition-colors"
          >
            Impressum
          </a>
        </div>
      </WhiteContainer>
    </footer>
  );
}

