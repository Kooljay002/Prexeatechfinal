import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/sections/Footer';
import InsightsHero from '@/components/pages/insights/InsightsHero';
import InsightsList from '@/components/pages/insights/InsightsList';

export default function InsightsPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <InsightsHero />
      <InsightsList />
      <Footer />
    </main>
  );
}
