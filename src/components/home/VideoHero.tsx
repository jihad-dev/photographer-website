import React from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

export function VideoHero() {
  const [isPlaying, setIsPlaying] = React.useState(false);

  return (
    <div className="relative h-screen">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source
          src="https://joy1.videvo.net/videvo_files/video/free/2019-09/large_watermarked/190828_27_SuperTrees_HD_17_preview.mp4"
          type="video/mp4"
        />
      </video>
      <div className="absolute inset-0 bg-black/40" />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="relative h-full flex items-center justify-center text-center"
      >
        <div className="max-w-4xl px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="text-6xl md:text-7xl font-bold text-white mb-6"
          >
            Capturing Moments in Motion
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="text-xl text-gray-200 mb-8"
          >
            Where every frame tells a story, and every moment becomes timeless
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
            className="space-x-6"
          >
            <a
              href="/portfolio"
              className="bg-white text-gray-900 px-8 py-3 rounded-md inline-block hover:bg-gray-100 transition-colors"
            >
              View Portfolio
            </a>
            <a
              href="/contact"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-md inline-block hover:bg-white/10 transition-colors"
            >
              Get in Touch
            </a>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}