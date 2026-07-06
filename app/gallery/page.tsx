import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/sections/Footer';
import GalleryHero from '@/components/pages/gallery/GalleryHero';
import GalleryGrid from '@/components/pages/gallery/GalleryGrid';

export default function GalleryPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <GalleryHero />
      <GalleryGrid />
      <Footer />
    </main>
  );
}
