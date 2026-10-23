import React from 'react';

import Hero from "./Hero";
import OurStory from './OurStory';
import WhatWeBelieve from './WhatWeBelieve';
import MeetTheGang from './MeetTheGang';
import Culture from './Culture';
import OurApproach from './Approach';
import CallToAction from './CallToAction';

export default function Page() {
  return (
    <main className="min-h-screen bg-[#F4EFEA]">
      
      <Hero />
      <OurStory />
      <WhatWeBelieve />
      <MeetTheGang />
      <Culture />
      <OurApproach />
      <CallToAction />
    </main>
  );
}