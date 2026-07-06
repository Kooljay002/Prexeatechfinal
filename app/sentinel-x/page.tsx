import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/sections/Footer';
import SentinelHero from '@/components/pages/sentinel-x/SentinelHero';
import SentinelChallenge from '@/components/pages/sentinel-x/SentinelChallenge';
import SentinelHowItWorks from '@/components/pages/sentinel-x/SentinelHowItWorks';
import SentinelImpact from '@/components/pages/sentinel-x/SentinelImpact';
import SentinelCaseStudy from '@/components/pages/sentinel-x/SentinelCaseStudy';
import SentinelDashboard from '@/components/pages/sentinel-x/SentinelDashboard';
import SentinelPartners from '@/components/pages/sentinel-x/SentinelPartners';
import SentinelCommercialization from '@/components/pages/sentinel-x/SentinelCommercialization';
import SentinelGallery from '@/components/pages/sentinel-x/SentinelGallery';
import SentinelFAQ from '@/components/pages/sentinel-x/SentinelFAQ';
import SentinelCTASection from '@/components/pages/sentinel-x/SentinelCTASection';
import SentinelContact from '@/components/pages/sentinel-x/SentinelContact';

export default function SentinelXPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <SentinelHero />
      <SentinelChallenge />
      <SentinelHowItWorks />
      <SentinelImpact />
      <SentinelCaseStudy />
      <SentinelDashboard />
      <SentinelPartners />
      <SentinelCommercialization />
      <SentinelGallery />
      <SentinelFAQ />
      <SentinelCTASection />
      <SentinelContact />
      <Footer />
    </main>
  );
}
