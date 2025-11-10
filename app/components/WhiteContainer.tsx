import type { ReactNode } from 'react';

interface WhiteContainerProps {
  children: ReactNode;
  className?: string;
}

export default function WhiteContainer({ children, className = '' }: WhiteContainerProps) {
  return (
    <div 
      className={`
        bg-white 
        rounded-lg 
        shadow-[0_2px_8px_rgba(0,0,0,0.1)]
        ${className}
      `}
    >
      {children}
    </div>
  );
}

