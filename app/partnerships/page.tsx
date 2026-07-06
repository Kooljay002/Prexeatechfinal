import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/sections/Footer';
import PartnershipsHero from '@/components/pages/partnerships/PartnershipsHero';
import PartnershipsTiers from '@/components/pages/partnerships/PartnershipsTiers';
import PartnershipsForm from '@/components/pages/partnerships/PartnershipsForm';

export default function PartnershipsPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <PartnershipsHero />
      <PartnershipsTiers />
      <PartnershipsForm />
      <Footer />
    </main>
  );
}
