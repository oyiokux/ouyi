import React from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import Link from 'next/link';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  href?: string;
  target?: string;
  rel?: string;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({ 
  className, 
  variant = 'primary', 
  size = 'md', 
  href,
  children,
  ...props 
}, ref) => {
  const variants = {
    // High contrast white on black
    primary: 'bg-white text-black hover:bg-zinc-200 border border-transparent font-semibold tracking-wide',
    
    // Dark gray
    secondary: 'bg-zinc-800 text-white hover:bg-zinc-700 border border-zinc-700',
    
    // Thin borders
    outline: 'bg-transparent border border-zinc-700 text-zinc-300 hover:text-white hover:border-white transition-colors',
    
    ghost: 'bg-transparent text-zinc-400 hover:text-white hover:bg-zinc-900',
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-xs rounded-md',
    md: 'px-5 py-2.5 text-sm rounded-lg',
    lg: 'px-8 py-3 text-base rounded-lg',
    xl: 'px-10 py-4 text-lg rounded-lg',
  };

  const classes = cn(
    'inline-flex items-center justify-center transition-all duration-200 outline-none disabled:opacity-50 disabled:cursor-not-allowed',
    variants[variant],
    sizes[size],
    className
  );

  if (href) {
    if (href.startsWith('http') || href.startsWith('mailto:')) {
      return (
        <a 
          href={href} 
          className={classes} 
          target={props.target} 
          rel={props.rel}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button
      className={classes}
      type={props.type || 'button'}
      ref={ref}
      {...props}
    >
      {children}
    </button>
  );
});

Button.displayName = 'Button';
