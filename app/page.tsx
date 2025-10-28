export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-blue-900 dark:to-indigo-900 font-sans">
      <main className="text-center px-4 py-16 max-w-2xl">
        {/* Animated Construction Icon */}
        <div className="mb-8 relative">
          <div className="inline-flex items-center justify-center w-32 h-32 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 dark:from-blue-600 dark:to-indigo-700 shadow-lg animate-bounce">
            <svg 
              className="w-16 h-16 text-white" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" 
              />
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" 
              />
            </svg>
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute -top-2 -left-2 w-8 h-8 bg-yellow-400 rounded-full animate-ping opacity-75"></div>
          <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-orange-500 rounded-full animate-pulse opacity-75"></div>
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
          In Bearbeitung
        </h1>

        {/* Subheading */}
        <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-4 font-medium">
          Wir arbeiten an etwas Großartigem
        </p>

        {/* Description */}
        <p className="text-base md:text-lg text-slate-500 dark:text-slate-400 mb-8 max-w-lg mx-auto">
          Diese Seite befindet sich derzeit im Aufbau. Bitte besuchen Sie uns später wieder für neue Inhalte und Features.
        </p>

        {/* Decorative Line */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-slate-300 dark:to-slate-600"></div>
          <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></div>
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-slate-300 dark:to-slate-600"></div>
        </div>

        {/* Status Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm rounded-full border border-slate-200 dark:border-slate-700 shadow-sm">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
          <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
            Bald verfügbar
          </span>
        </div>
      </main>
    </div>
  );
}
