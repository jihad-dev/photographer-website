import React from 'react';
import { PageTransition } from '../components/animations/PageTransition';
import { TestimonialCard } from '../components/testimonials/TestimonialCard';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Bride',
    content: 'The photos from our wedding day were absolutely stunning. Every special moment was captured perfectly!',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80',
    rating: 5,
  },
  {
    name: 'Michael Chen',
    role: 'Corporate Client',
    content: 'Professional service and amazing results for our company event. Would highly recommend!',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80',
    rating: 5,
  },
  {
    name: 'Emily Davis',
    role: 'Family Portrait',
    content: 'Our family photos turned out beautifully. The photographer made everyone feel comfortable.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80',
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <PageTransition>
      <div className="pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h1 className="text-4xl font-bold text-center mb-4">Client Testimonials</h1>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Read what our clients have to say about their experience working with us.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </div>
    </PageTransition>
  );
}