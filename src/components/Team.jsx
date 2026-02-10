import { team } from '../data/team';

function getInitials(name) {
  return name
    .split(/\s+/)
    .map((w) => w[0])
    .slice(0, 2)
    .join('')
    .toUpperCase();
}

export default function Team() {
  return (
    <section id="team" className="py-28 lg:py-36 bg-waten-bg">
      <div className="max-w-6xl mx-auto px-6">
        <header className="text-center max-w-xl mx-auto mb-16">
          <p className="uppercase tracking-[0.18em] text-waten-muted text-xs font-medium mb-4">
            The Team
          </p>
          <h2 className="font-serif text-5xl md:text-6xl text-charcoal font-semibold leading-tight mb-4">
            Our Team
          </h2>
          <p className="text-stone-600 text-sm leading-body max-w-xl mx-auto mt-4">
            Professionals dedicated to elevating urban spaces across the Kingdom.
          </p>
        </header>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 lg:gap-10">
          {team.map((member, i) => (
            <div
              key={i}
              className="group text-center p-4 rounded-xl bg-waten-card/60 border border-waten-stone/60 hover:border-waten-stone transition-colors"
            >
              <div className="w-20 h-20 md:w-24 md:h-24 mx-auto mb-3 rounded-full overflow-hidden bg-waten-stone flex items-center justify-center flex-shrink-0">
                {member.image ? (
                  <img
                    src={member.image}
                    alt={member.name}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                ) : (
                  <span className="font-serif text-xl md:text-2xl text-waten-accent/60 font-medium select-none">
                    {getInitials(member.name)}
                  </span>
                )}
              </div>
              <h3 className="font-serif text-base md:text-lg text-charcoal font-medium leading-tight">
                {member.name}
              </h3>
              <p className="text-waten-accent font-medium text-xs uppercase tracking-wide mt-0.5">
                {member.role}
              </p>
              {member.education && (
                <p className="text-stone-600 text-xs mt-1 leading-body">
                  {member.education}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
