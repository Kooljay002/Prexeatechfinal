import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/sections/Footer';
import SolutionsHero from '@/components/pages/solutions/SolutionsHero';
import SolutionsAgritech from '@/components/pages/solutions/SolutionsAgritech';
import SolutionsGovernment from '@/components/pages/solutions/SolutionsGovernment';
import SolutionsHealthcare from '@/components/pages/solutions/SolutionsHealthcare';
import SolutionsEnterprise from '@/components/pages/solutions/SolutionsEnterprise';
import SolutionsEnvironmental from '@/components/pages/solutions/SolutionsEnvironmental';
import SolutionsResearch from '@/components/pages/solutions/SolutionsResearch';

export default function SolutionsPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <SolutionsHero />
      <SolutionsAgritech />
      <SolutionsGovernment />
      <SolutionsHealthcare />
      <SolutionsEnterprise />
      <SolutionsEnvironmental />
      <SolutionsResearch />
      <Footer />
    </main>
  );
}
