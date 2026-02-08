import { useState, useMemo } from 'react';

const ALL = 'all';

const projects = [
  {
    title: 'Murabbaa Residence',
    city: 'Riyadh',
    location: 'Riyadh, Saudi Arabia',
    type: 'Residential',
    status: 'Completed',
    link: 'https://www.waten.com/cultural-center',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=800&auto=format&fit=crop',
  },
  {
    title: 'Plaza Dan',
    city: 'Makkah',
    location: 'Makkah, Awali District — Saudi Arabia',
    type: 'Commercial',
    status: 'In Progress',
    link: 'https://www.waten.com/greenspacing',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop',
  },
  {
    title: 'Princess Sara',
    city: 'Riyadh',
    location: 'Riyadh, Saudi Arabia',
    type: 'Residential',
    status: 'Completed',
    link: 'https://www.waten.com/portfolio/princess-sara',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop',
  },
];

const cities = [ALL, ...new Set(projects.map((p) => p.city))];
const types = [ALL, ...new Set(projects.map((p) => p.type))];
const statuses = [ALL, ...new Set(projects.map((p) => p.status))];

export default function FeaturedProjects() {
  const [cityFilter, setCityFilter] = useState(ALL);
  const [typeFilter, setTypeFilter] = useState(ALL);
  const [statusFilter, setStatusFilter] = useState(ALL);
  const [searchQuery, setSearchQuery] = useState('');

  const filtered = useMemo(() => {
    return projects.filter((p) => {
      if (searchQuery && !p.title.toLowerCase().includes(searchQuery.toLowerCase()) && !p.location.toLowerCase().includes(searchQuery.toLowerCase())) return false;
      if (cityFilter !== ALL && p.city !== cityFilter) return false;
      if (typeFilter !== ALL && p.type !== typeFilter) return false;
      if (statusFilter !== ALL && p.status !== statusFilter) return false;
      return true;
    });
  }, [searchQuery, cityFilter, typeFilter, statusFilter]);

  return (
    <section id="projects" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="uppercase tracking-[0.2em] text-waten-muted text-sm font-medium mb-4">
            Portfolio
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-charcoal font-medium leading-tight mb-4">
            Featured Projects
          </h2>
          <p className="text-muted text-lg">
            Thoughtfully designed developments across the major cities of the Kingdom.
          </p>
        </div>

        {/* Property Search Bar */}
        <div className="max-w-xl mx-auto mb-8">
          <label htmlFor="property-search" className="sr-only">Search properties</label>
          <input
            id="property-search"
            type="search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by project name or location..."
            className="w-full px-4 py-3 bg-cream border border-stone-300 text-charcoal placeholder:text-muted focus:border-waten-ink focus:ring-1 focus:ring-waten-ink outline-none rounded"
            aria-label="Search properties"
          />
        </div>

        {/* Filter UI */}
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          <select
            value={cityFilter}
            onChange={(e) => setCityFilter(e.target.value)}
            className="px-4 py-2 bg-cream border border-stone-300 text-charcoal text-sm focus:border-waten-ink focus:ring-1 focus:ring-waten-ink outline-none rounded"
            aria-label="Filter by city"
          >
            {cities.map((c) => (
              <option key={c} value={c}>{c === ALL ? 'All Cities' : c}</option>
            ))}
          </select>
          <select
            value={typeFilter}
            onChange={(e) => setTypeFilter(e.target.value)}
            className="px-4 py-2 bg-cream border border-stone-300 text-charcoal text-sm focus:border-waten-ink focus:ring-1 focus:ring-waten-ink outline-none rounded"
            aria-label="Filter by type"
          >
            {types.map((t) => (
              <option key={t} value={t}>{t === ALL ? 'All Types' : t}</option>
            ))}
          </select>
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="px-4 py-2 bg-cream border border-stone-300 text-charcoal text-sm focus:border-waten-ink focus:ring-1 focus:ring-waten-ink outline-none rounded"
            aria-label="Filter by status"
          >
            {statuses.map((s) => (
              <option key={s} value={s}>{s === ALL ? 'All Status' : s}</option>
            ))}
          </select>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {filtered.map((project, i) => (
            <article
              key={i}
              className="group bg-cream overflow-hidden border border-stone-200/80 hover:border-waten-ink/30 transition-colors"
            >
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="block">
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-waten-ink/90 text-white text-xs font-medium rounded">
                      {project.location}
                    </span>
                    <span className="px-2 py-1 bg-white/90 text-charcoal text-xs font-medium rounded">
                      {project.type}
                    </span>
                    <span className={`px-2 py-1 text-xs font-medium rounded ${
                      project.status === 'Completed' ? 'bg-waten-ink/90 text-white' : 'bg-amber-600/90 text-white'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                </div>
                <div className="p-8">
                  <p className="text-waten-muted text-sm font-medium mb-1">{project.city} — {project.type}</p>
                  <h3 className="font-serif text-2xl text-charcoal font-medium mb-2">
                    {project.title}
                  </h3>
                  <p className="text-muted text-sm mb-3">{project.location}</p>
                  <div className="flex gap-4 text-muted text-xs mb-4">
                    <span>{project.type}</span>
                    <span>·</span>
                    <span>{project.status}</span>
                  </div>
                  <span className="inline-flex items-center text-waten-muted font-medium hover:underline">
                    Read more →
                  </span>
                </div>
              </a>
            </article>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-muted py-12">No projects match the selected filters.</p>
        )}
      </div>
    </section>
  );
}
