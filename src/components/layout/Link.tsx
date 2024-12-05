import React from 'react';

interface LinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export function Link({ href, children, className = '' }: LinkProps) {
  return (
    <a
      href={href}
      className={`text-gray-700 hover:text-indigo-600 transition-colors ${className}`}
    >
      {children}
    </a>
  );
}