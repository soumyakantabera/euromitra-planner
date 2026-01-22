import { Building2, Trees, Footprints, Sparkles } from 'lucide-react';
import { GlassCard } from '@/components/ui/GlassCard';

const pillars = [
  {
    icon: Building2,
    title: 'Cityscapes',
    description: 'Historic centers, art districts, local neighborhoods. Walk the city like a resident, not a tourist.',
    image: 'https://images.unsplash.com/photo-1541370976299-4d24ebbc9077?w=600',
    color: 'from-[#17A2A6] to-[#0B1F3B]',
  },
  {
    icon: Trees,
    title: 'Nature Escapes',
    description: 'Half-day trips to hills, lakes, and forests. Nature is always closer than you think.',
    image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600',
    color: 'from-[#4CAF50] to-[#0B1F3B]',
  },
  {
    icon: Footprints,
    title: 'Sustainable Walking',
    description: 'Routes designed for walking + public transport. Lower impact, richer experience.',
    image: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=600',
    color: 'from-[#D6A84A] to-[#0B1F3B]',
  },
];

export function Pillars() {
  return (
    <section className="section bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary/5 rounded-full blur-3xl" />
      
      <div className="container-wide relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-6">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Our Philosophy</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">How We Plan</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Every itinerary balances three elements for the perfect travel experience.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <div 
              key={pillar.title} 
              className="group relative"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Image background */}
              <div className="absolute inset-0 rounded-3xl overflow-hidden">
                <img 
                  src={pillar.image} 
                  alt={pillar.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${pillar.color} opacity-80`} />
              </div>
              
              <GlassCard 
                hover 
                className="relative bg-transparent border-white/20 text-center min-h-[320px] flex flex-col justify-end"
              >
                <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <pillar.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-white">{pillar.title}</h3>
                <p className="text-white/80 text-sm leading-relaxed">{pillar.description}</p>
              </GlassCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}