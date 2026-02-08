// Placeholder team – replace with real names, roles, and photos when available
const team = [
  {
    name: 'Leadership',
    role: 'Executive Team',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&auto=format&fit=crop',
  },
  {
    name: 'Development',
    role: 'Projects & Design',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop',
  },
  {
    name: 'Operations',
    role: 'Strategy & Growth',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop',
  },
];

export default function Team() {
  return (
    <section id="team" className="py-24 lg:py-32 bg-cream">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="uppercase tracking-[0.2em] text-waten-accent text-sm font-medium mb-4">
            The Team
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-charcoal font-medium leading-tight mb-4">
            People Behind Waten
          </h2>
          <p className="text-muted text-lg">
            Meet the professionals dedicated to elevating urban spaces across the Kingdom.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-10">
          {team.map((member, i) => (
            <div key={i} className="group text-center">
              <div className="aspect-square rounded-sm overflow-hidden mb-4 bg-stone-200">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="font-serif text-xl text-charcoal font-medium">{member.name}</h3>
              <p className="text-muted text-sm">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
