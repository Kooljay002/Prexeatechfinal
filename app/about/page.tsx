import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/sections/Footer';
import AboutHero from '@/components/pages/about/AboutHero';
import AboutMission from '@/components/pages/about/AboutMission';

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <AboutHero />
      <AboutMission />
      <Footer />
    </main>
  );
}
