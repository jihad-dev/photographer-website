import React from 'react';
import { Camera } from 'lucide-react';
import { Link } from './Link';

export function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Camera className="h-8 w-8 text-indigo-600" />
            <span className="ml-2 text-xl font-semibold">Lens & Light</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/portfolio">Portfolio</Link>
            <Link href="/services">Services</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/testimonials">Testimonials</Link>
            <Link href="/contact" className="bg-indigo-600 text-white px-4 py-2 rounded-md">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}