import ConceptBanner from './components/ConceptBanner';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import FeaturedProjects from './components/FeaturedProjects';
import WhyChooseUs from './components/WhyChooseUs';
import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';

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
        <Team />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
