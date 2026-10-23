import React from 'react';
import Testimonials from './TestimonialPage'; // Update this if your file is named Testimonials.tsx

export const metadata = {
  title: 'Client Stories & Testimonials | The Content Gang',
  description: 'See how we have helped brands grow through content, strategy, and digital marketing. Read our client reviews and success stories.',
};

export default function Page() {
  return (
    // Clean wrapper that lets the Testimonials component handle the layout
    <main className="min-h-screen bg-[#F4EFEA]">
      <Testimonials />
    </main>
  );
}