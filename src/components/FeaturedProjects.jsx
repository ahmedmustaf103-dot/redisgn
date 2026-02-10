import { useState, useMemo } from 'react';
import { projects } from '../data/projects';

const ALL = 'all';

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
    <section id="projects" className="py-28 lg:py-36 bg-waten-bg">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="uppercase tracking-[0.2em] text-waten-muted text-sm font-medium mb-5">
            Portfolio
          </p>
          <h2 className="font-serif text-5xl md:text-6xl text-charcoal font-semibold leading-tight mb-6">
            Featured Projects
          </h2>
          <p className="text-stone-600 text-lg leading-body max-w-xl mx-auto mt-2">
            Thoughtfully designed developments across the major cities of the Kingdom.
          </p>
        </div>

        {/* Property Search Bar */}
        <div className="max-w-xl mx-auto mb-10">
          <label htmlFor="property-search" className="sr-only">Search properties</label>
          <input
            id="property-search"
            type="search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by project name or location..."
            className="w-full px-4 py-3 bg-waten-card border border-stone-300 text-charcoal placeholder:text-muted focus:border-waten-accent focus:ring-1 focus:ring-waten-accent outline-none rounded"
            aria-label="Search properties"
          />
        </div>

        {/* Filter UI */}
        <div className="flex flex-wrap gap-4 justify-center mb-14">
          <select
            value={cityFilter}
            onChange={(e) => setCityFilter(e.target.value)}
            className="px-4 py-2 bg-waten-card border border-stone-300 text-charcoal text-sm focus:border-waten-accent focus:ring-1 focus:ring-waten-accent outline-none rounded"
            aria-label="Filter by city"
          >
            {cities.map((c) => (
              <option key={c} value={c}>{c === ALL ? 'All Cities' : c}</option>
            ))}
          </select>
          <select
            value={typeFilter}
            onChange={(e) => setTypeFilter(e.target.value)}
            className="px-4 py-2 bg-waten-card border border-stone-300 text-charcoal text-sm focus:border-waten-accent focus:ring-1 focus:ring-waten-accent outline-none rounded"
            aria-label="Filter by type"
          >
            {types.map((t) => (
              <option key={t} value={t}>{t === ALL ? 'All Types' : t}</option>
            ))}
          </select>
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="px-4 py-2 bg-waten-card border border-stone-300 text-charcoal text-sm focus:border-waten-accent focus:ring-1 focus:ring-waten-accent outline-none rounded"
            aria-label="Filter by status"
          >
            {statuses.map((s) => (
              <option key={s} value={s}>{s === ALL ? 'All Status' : s}</option>
            ))}
          </select>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12">
          {filtered.map((project) => {
            const shortDesc = project.description ? project.description.slice(0, 90).trim() + (project.description.length > 90 ? '…' : '') : `${project.location} · ${project.type}`;
            return (
              <article
                key={project.slug}
                className="group overflow-hidden rounded-lg transition-all duration-300"
              >
                <a href={`#/project/${project.slug}`} className="block h-full">
                  <div className="aspect-[4/5] overflow-hidden relative rounded-lg">
                    <img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover transition-transform duration-300 ease-out group-hover:scale-105"
                    />
                    {/* Dark gradient overlay at bottom — darkens on hover */}
                    <div
                      className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-all duration-300 ease-out group-hover:from-black/90 group-hover:via-black/30"
                      aria-hidden="true"
                    />
                    {/* Title and description on top of image */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 pt-16 text-white">
                      <h3 className="font-serif text-2xl md:text-3xl font-medium leading-tight mb-2">
                        {project.title}
                      </h3>
                      <p className="text-white/90 text-sm leading-relaxed mb-4 max-w-md">
                        {shortDesc}
                      </p>
                      <span className="inline-flex items-center text-sm font-medium text-white/95 group-hover:text-white transition-colors duration-300">
                        View project →
                      </span>
                    </div>
                    {/* Status pill top-right */}
                    <span className={`absolute top-4 right-4 px-3 py-1.5 text-xs font-medium rounded-full transition-colors duration-300 ${
                      project.status === 'Completed' ? 'bg-waten-accent/95 text-white' : 'bg-amber-600/95 text-white'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                </a>
              </article>
            );
          })}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-stone-600 py-12">No projects match the selected filters.</p>
        )}
      </div>
    </section>
  );
}
