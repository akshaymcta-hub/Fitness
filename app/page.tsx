import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Programs from '@/components/Programs';
import Trainers from '@/components/Trainers';
import Pricing from '@/components/Pricing';
import BMICalculator from '@/components/BMICalculator';
import Testimonials from '@/components/Testimonials';
import Gallery from '@/components/Gallery';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Programs />
      <Trainers />
      <Pricing />
      <BMICalculator />
      <Testimonials />
      <Gallery />
      <Contact />
      <Footer />
    </main>
  );
}
