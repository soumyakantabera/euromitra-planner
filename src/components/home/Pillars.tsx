import { Building2, Trees, Footprints } from 'lucide-react';
import { GlassCard } from '@/components/ui/GlassCard';

const pillars = [
  {
    icon: Building2,
    title: 'Cityscapes',
    description: 'Historic centers, art districts, local neighborhoods. Walk the city like a resident, not a tourist.',
  },
  {
    icon: Trees,
    title: 'Nature Escapes',
    description: 'Half-day trips to hills, lakes, and forests. Nature is always closer than you think.',
  },
  {
    icon: Footprints,
    title: 'Sustainable Walking',
    description: 'Routes designed for walking + public transport. Lower impact, richer experience.',
  },
];

export function Pillars() {
  return (
    <section className="section bg-background">
      <div className="container-wide">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How We Plan</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Every itinerary balances three elements for the perfect travel experience.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {pillars.map((pillar, index) => (
            <GlassCard key={pillar.title} hover className="text-center">
              <div
                className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <pillar.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{pillar.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{pillar.description}</p>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
