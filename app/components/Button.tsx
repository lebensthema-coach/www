import type { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  className?: string;
  target?: string;
  rel?: string;
}

export default function Button({ 
  children, 
  href, 
  onClick, 
  variant = 'primary',
  className = '',
  target,
  rel
}: ButtonProps) {
  const baseClasses = 'inline-block px-6 md:px-8 py-3 md:py-4 rounded-full font-bold text-base md:text-lg hover:opacity-90 transition-opacity shadow-md';
  
  const variantClasses = {
    primary: 'bg-brand-primary text-white',
    secondary: 'bg-brand-primary text-white',
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes} target={target} rel={rel}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
}

