import { useEffect } from 'react';
import { getProjectBySlug } from '../data/projects';
import Header from './Header';
import Footer from './Footer';

export default function ProjectDetail({ slug }) {
  const project = getProjectBySlug(slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!project) {
    return (
      <div className="min-h-screen bg-waten-bg flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center px-6">
          <div className="text-center">
            <h1 className="font-serif text-2xl text-charcoal mb-4">Project not found</h1>
            <a href="#/" className="text-waten-accent hover:underline">← Back to home</a>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-waten-bg">
      <Header />
      <main className="pt-24 pb-16">
        <div className="max-w-5xl mx-auto px-6">
          <a href="#/" className="inline-flex items-center text-waten-accent hover:underline text-sm mb-8">
            ← Back to Projects
          </a>

          <header className="mb-12">
            <p className="text-waten-muted text-sm font-medium mb-2">{project.city} · {project.type}</p>
            <h1 className="font-serif text-4xl md:text-5xl text-charcoal font-medium mb-4">
              {project.title}
            </h1>
            <p className="text-muted">{project.location}</p>
            <div className="flex flex-wrap gap-3 mt-4">
              <span className="px-3 py-1 bg-waten-card border border-waten-stone rounded text-sm">{project.type}</span>
              <span className={`px-3 py-1 rounded text-sm ${project.status === 'Completed' ? 'bg-waten-accent/90 text-white' : 'bg-amber-600/90 text-white'}`}>
                {project.status}
              </span>
            </div>
          </header>

          {/* Image gallery - same as Waten website */}
          <section className="space-y-6 mb-12">
            {project.images.map((src, i) => (
              <div key={i} className="rounded-lg overflow-hidden border border-waten-stone bg-waten-card">
                <img
                  src={src}
                  alt={`${project.title} — ${i + 1}`}
                  loading={i === 0 ? 'eager' : 'lazy'}
                  decoding="async"
                  className="w-full h-auto object-cover"
                />
              </div>
            ))}
          </section>

          {project.description && (
            <section className="mb-12">
              <h2 className="font-serif text-xl text-charcoal font-medium mb-4">About this project</h2>
              <p className="text-muted leading-relaxed">{project.description}</p>
            </section>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
