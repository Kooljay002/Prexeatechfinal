import Navigation from '@/components/layout/Navigation';
import Hero from '@/components/sections/Hero';
import TrustSection from '@/components/sections/TrustSection';
import WhatWeDo from '@/components/sections/WhatWeDo';
import FeaturedTechnology from '@/components/sections/FeaturedTechnology';
import HowPrexeaWorks from '@/components/sections/HowPrexeaWorks';
import Industries from '@/components/sections/Industries';
import GlobalPartnerships from '@/components/sections/GlobalPartnerships';
import Impact from '@/components/sections/Impact';
import Insights from '@/components/sections/Insights';
import Footer from '@/components/sections/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <TrustSection />
      <WhatWeDo />
      <FeaturedTechnology />
      <HowPrexeaWorks />
      <Industries />
      <GlobalPartnerships />
      <Impact />
      <Insights />
      <Footer />
    </main>
  );
}