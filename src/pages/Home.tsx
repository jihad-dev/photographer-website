import React from 'react';
import { VideoHero } from '../components/home/VideoHero';
import { FeaturedWork } from '../components/home/FeaturedWork';
import { PageTransition } from '../components/animations/PageTransition';

export function Home() {
  return (
    <PageTransition>
      <VideoHero />
      <FeaturedWork />
    </PageTransition>
  );
}