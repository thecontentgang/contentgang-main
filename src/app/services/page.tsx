import React from 'react';
import ServicesHero from './Hero';
import ServicesList from './ServicesList';

export default function Page() {
  return (
    // Clean, empty wrapper that lets the Hero component control the layout
    <main className="min-h-screen bg-[#F4EFEA]">
      <ServicesHero />
      <ServicesList />
    </main>
  );
}