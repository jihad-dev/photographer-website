import React from 'react';
import { PageTransition } from '../components/animations/PageTransition';
import { PortfolioGrid } from '../components/portfolio/PortfolioGrid';

export function Portfolio() {
  return (
    <PageTransition>
      <div className="pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h1 className="text-4xl font-bold text-center mb-4">Portfolio</h1>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Explore our collection of captivating moments, each telling its own unique story through
            the lens of professional photography.
          </p>
          <PortfolioGrid />
        </div>
      </div>
    </PageTransition>
  );
}