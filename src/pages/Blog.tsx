import React from 'react';
import { PageTransition } from '../components/animations/PageTransition';
import { BlogCard } from '../components/blog/BlogCard';

const blogPosts = [
  {
    title: 'Essential Tips for Wedding Photography',
    excerpt: 'Learn the key techniques to capture perfect wedding moments...',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80',
    date: 'March 15, 2024',
    category: 'Wedding',
  },
  {
    title: 'Mastering Natural Light in Portraits',
    excerpt: 'Discover how to use natural light to create stunning portraits...',
    image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&q=80',
    date: 'March 10, 2024',
    category: 'Tips',
  },
  {
    title: 'Best Locations for Landscape Photography',
    excerpt: 'Explore the most photogenic locations for landscape photography...',
    image: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&q=80',
    date: 'March 5, 2024',
    category: 'Travel',
  },
];

export function Blog() {
  return (
    <PageTransition>
      <div className="pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h1 className="text-4xl font-bold text-center mb-4">Photography Blog</h1>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Discover tips, techniques, and stories from our photography adventures.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <BlogCard key={index} {...post} />
            ))}
          </div>
        </div>
      </div>
    </PageTransition>
  );
}