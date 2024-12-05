import React from 'react';
import { PageTransition } from '../components/animations/PageTransition';
import { ServiceCard } from '../components/services/ServiceCard';
import { Camera, Users, Mountain, Calendar } from 'lucide-react';

const services = [
  {
    title: 'Wedding Photography',
    description: 'Capture your special day with our professional wedding photography services.',
    icon: Camera,
    price: 'From $1,999',
  },
  {
    title: 'Portrait Sessions',
    description: 'Professional portrait photography for individuals and families.',
    icon: Users,
    price: 'From $299',
  },
  {
    title: 'Landscape Photography',
    description: 'Stunning landscape and nature photography for your space.',
    icon: Mountain,
    price: 'From $499',
  },
  {
    title: 'Event Coverage',
    description: 'Full coverage of corporate events and special occasions.',
    icon: Calendar,
    price: 'From $799',
  },
];

export function Services() {
  return (
    <PageTransition>
      <div className="pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h1 className="text-4xl font-bold text-center mb-4">Our Services</h1>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Choose from our range of professional photography services, each tailored to capture
            your special moments perfectly.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </div>
    </PageTransition>
  );
}