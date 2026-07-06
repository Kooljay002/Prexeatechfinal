import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/sections/Footer';
import ContactHero from '@/components/pages/contact/ContactHero';
import ContactForm from '@/components/pages/contact/ContactForm';

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <ContactHero />
      <ContactForm />
      <Footer />
    </main>
  );
}
