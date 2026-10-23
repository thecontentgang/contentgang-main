import React from 'react';
import IndustriesHero from './Hero'; // Adjust the path if necessary
import IndustriesList from './IndustriesList';

export default function Page() {
  return (
    // Clean wrapper that lets the Hero component control the layout edge-to-edge
    <main className="min-h-screen bg-[#F4EFEA]">
      <IndustriesHero />
      <IndustriesList />
    </main>
  );
}