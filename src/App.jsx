import ConceptBanner from './components/ConceptBanner';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import FeaturedProjects from './components/FeaturedProjects';
import WhyChooseUs from './components/WhyChooseUs';
import TrustElements from './components/TrustElements';
import Team from './components/Team';
import Contact from './components/Contact';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import FloatingCTA from './components/FloatingCTA';

export default function App() {
  return (
    <>
      <ConceptBanner />
      <Header />
      <main>
        <Hero />
        <About />
        <FeaturedProjects />
        <WhyChooseUs />
        <TrustElements />
        <Team />
        <Contact />
        <FAQ />
      </main>
      <Footer />
      <FloatingCTA />
    </>
  );
}
