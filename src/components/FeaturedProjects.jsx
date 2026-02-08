const projects = [
  {
    title: 'Murabbaa Residence',
    location: 'Riyadh',
    link: 'https://www.waten.com/cultural-center',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2070&auto=format&fit=crop',
  },
  {
    title: 'Plaza Dan',
    location: 'Makkah, Awali District — Saudi Arabia',
    link: 'https://www.waten.com/greenspacing',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop',
  },
  {
    title: 'Princess Sara',
    location: 'Riyadh',
    link: 'https://www.waten.com/portfolio/princess-sara',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop',
  },
];

export default function FeaturedProjects() {
  return (
    <section id="projects" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="uppercase tracking-[0.2em] text-waten-accent text-sm font-medium mb-4">
            Portfolio
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-charcoal font-medium leading-tight mb-4">
            Projects
          </h2>
          <p className="text-muted text-lg">
            Thoughtfully designed developments across the major cities of the Kingdom.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
          {projects.map((project, i) => (
            <article
              key={i}
              className="group bg-cream overflow-hidden border border-stone-200/80 hover:border-waten-accent/40 transition-colors"
            >
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="block">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-8">
                  <p className="text-waten-accent text-sm font-medium mb-1">{project.location}</p>
                  <h3 className="font-serif text-2xl text-charcoal font-medium mb-4">
                    {project.title}
                  </h3>
                  <span className="inline-flex items-center text-waten-green font-medium hover:underline">
                    Read more →
                  </span>
                </div>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
