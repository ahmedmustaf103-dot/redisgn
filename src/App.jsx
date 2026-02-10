import { useState, useEffect } from 'react';
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
import ProjectDetail from './components/ProjectDetail';
import FadeUp from './components/FadeUp';

function HomePage() {
  return (
    <>
      <ConceptBanner />
      <Header />
      <main>
        <Hero />
        <FadeUp><TrustElements /></FadeUp>
        <FadeUp><About /></FadeUp>
        <FadeUp><FeaturedProjects /></FadeUp>
        <FadeUp><WhyChooseUs /></FadeUp>
        <FadeUp><Team /></FadeUp>
        <FadeUp><Contact /></FadeUp>
        <FadeUp><FAQ /></FadeUp>
      </main>
      <FadeUp><Footer /></FadeUp>
      <FloatingCTA />
    </>
  );
}

export default function App() {
  const [route, setRoute] = useState(() => {
    const hash = window.location.hash.slice(1) || '';
    const match = hash.match(/^\/project\/(.+)$/);
    return match ? { page: 'project', slug: match[1] } : { page: 'home' };
  });

  useEffect(() => {
    const onHashChange = () => {
      const hash = window.location.hash.slice(1) || '';
      const match = hash.match(/^\/project\/(.+)$/);
      setRoute(match ? { page: 'project', slug: match[1] } : { page: 'home' });
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  if (route.page === 'project') {
    return <ProjectDetail slug={route.slug} />;
  }

  return <HomePage />;
}
