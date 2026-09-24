import HeroSection from '@/components/homepage/HeroSection';
import Workouts from '@/components/homepage/Workouts';
import React from 'react';

const page = () => {
  return (
    <div>
      <HeroSection />
      <Workouts />
    </div>
  );
};

export default page;