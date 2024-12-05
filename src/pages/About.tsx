import React from 'react';
import { motion } from 'framer-motion';
import { Camera, Award, Users, Heart } from 'lucide-react';
import { PageTransition } from '../components/animations/PageTransition';

export function About() {
  return (
    <PageTransition>
      <div className="pt-16">
        <section className="relative py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h1 className="text-4xl font-bold mb-6">About Me</h1>
                <p className="text-gray-600 mb-6">
                  With over a decade of experience in photography, I've had the privilege of capturing
                  countless precious moments and telling unique stories through my lens. My journey
                  began with a simple passion for preserving memories and has evolved into a
                  lifelong dedication to the art of photography.
                </p>
                <p className="text-gray-600 mb-6">
                  I specialize in wedding photography, portraits, and landscape photography, bringing
                  a unique perspective to each shot while ensuring that every client's vision is
                  brought to life.
                </p>
                <div className="grid grid-cols-2 gap-6">
                  <div className="flex items-center space-x-3">
                    <Camera className="h-6 w-6 text-indigo-600" />
                    <span className="text-gray-700">1000+ Shoots</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Award className="h-6 w-6 text-indigo-600" />
                    <span className="text-gray-700">15+ Awards</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Users className="h-6 w-6 text-indigo-600" />
                    <span className="text-gray-700">500+ Clients</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Heart className="h-6 w-6 text-indigo-600" />
                    <span className="text-gray-700">100% Satisfaction</span>
                  </div>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative"
              >
                <img
                  src="https://images.unsplash.com/photo-1554048612-b6a482bc67e5?auto=format&fit=crop&q=80"
                  alt="Photographer at work"
                  className="rounded-lg shadow-xl"
                />
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}