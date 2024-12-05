import React from 'react';
import { motion } from 'framer-motion';

interface BlogCardProps {
  title: string;
  excerpt: string;
  image: string;
  date: string;
  category: string;
}

export function BlogCard({ title, excerpt, image, date, category }: BlogCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-lg overflow-hidden shadow-lg"
    >
      <div className="relative aspect-video">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-indigo-600 text-white px-3 py-1 rounded-full text-sm">
            {category}
          </span>
        </div>
      </div>
      <div className="p-6">
        <time className="text-sm text-gray-500">{date}</time>
        <h3 className="text-xl font-semibold mt-2 mb-3">{title}</h3>
        <p className="text-gray-600">{excerpt}</p>
        <a
          href="#"
          className="inline-block mt-4 text-indigo-600 hover:text-indigo-700 font-medium"
        >
          Read More →
        </a>
      </div>
    </motion.article>
  );
}