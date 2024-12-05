import React from 'react';

export function Hero() {
  return (
    <div className="relative h-screen">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>
      <div className="relative h-full flex items-center justify-center text-center">
        <div className="max-w-3xl px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Capturing Life's Beautiful Moments
          </h1>
          <p className="text-xl text-gray-200 mb-8">
            Professional photography that tells your unique story
          </p>
          <div className="space-x-4">
            <a
              href="/portfolio"
              className="bg-indigo-600 text-white px-8 py-3 rounded-md inline-block hover:bg-indigo-700 transition-colors"
            >
              View Portfolio
            </a>
            <a
              href="/contact"
              className="bg-white text-gray-900 px-8 py-3 rounded-md inline-block hover:bg-gray-100 transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}