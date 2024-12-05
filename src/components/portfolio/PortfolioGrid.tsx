import React from 'react';
import { motion } from 'framer-motion';

const categories = [
  { id: 'all', name: 'All' },
  { id: 'weddings', name: 'Weddings' },
  { id: 'portraits', name: 'Portraits' },
  { id: 'landscapes', name: 'Landscapes' },
  { id: 'events', name: 'Events' },
];

const portfolioItems = [
  {
    id: 1,
    category: 'weddings',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80',
    title: 'Beach Wedding',
  },
  {
    id: 2,
    category: 'portraits',
    image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&q=80',
    title: 'Urban Portrait',
  },
  {
    id: 3,
    category: 'landscapes',
    image: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&q=80',
    title: 'Mountain Sunrise',
  },
  {
    id: 4,
    category: 'events',
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80',
    title: 'Corporate Event',
  },
  {
    id: 5,
    category: 'weddings',
    image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80',
    title: 'Garden Ceremony',
  },
  {
    id: 6,
    category: 'portraits',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80',
    title: 'Studio Portrait',
  },
];

export function PortfolioGrid() {
  const [activeCategory, setActiveCategory] = React.useState('all');

  const filteredItems = portfolioItems.filter(
    item => activeCategory === 'all' || item.category === activeCategory
  );

  return (
    <div>
      <div className="flex justify-center space-x-4 mb-8">
        {categories.map(category => (
          <button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            className={`px-4 py-2 rounded-md transition-colors ${
              activeCategory === category.id
                ? 'bg-indigo-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {filteredItems.map(item => (
          <motion.div
            key={item.id}
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="group relative aspect-square overflow-hidden rounded-lg"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-white text-xl font-semibold">{item.title}</h3>
                <p className="text-gray-200 capitalize">{item.category}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}