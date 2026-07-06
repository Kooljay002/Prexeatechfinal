import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/sections/Footer';
import IndustriesHero from '@/components/pages/industries/IndustriesHero';
import IndustriesGrid from '@/components/pages/industries/IndustriesGrid';

export default function IndustriesPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <IndustriesHero />
      <IndustriesGrid />
      <Footer />
    </main>
  );
}
