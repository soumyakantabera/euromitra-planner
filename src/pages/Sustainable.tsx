import { TreePine, Footprints, Train, Droplets, Leaf, MapPin, Check } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { GlassCard } from '@/components/ui/GlassCard';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const principles = [
  {
    icon: Footprints,
    title: 'Walk-First Routing',
    description: 'Every itinerary prioritizes walkable neighborhoods and pedestrian zones. See more, spend less on transport.',
  },
  {
    icon: Train,
    title: 'Smart Public Transit',
    description: 'Detailed guides on metro passes, bus routes, and train tickets. Skip the car rental, embrace local transport.',
  },
  {
    icon: Droplets,
    title: 'Refill Culture',
    description: 'Every destination includes tap water quality info and refill station locations. Ditch single-use plastic.',
  },
  {
    icon: Leaf,
    title: 'Local & Seasonal',
    description: 'Restaurant recommendations favor local, seasonal ingredients. Support small businesses, taste real flavors.',
  },
  {
    icon: MapPin,
    title: 'Low-Impact Nature',
    description: 'Nature escapes that respect ecosystems. Stay on trails, avoid peak seasons, leave no trace.',
  },
  {
    icon: TreePine,
    title: 'Slow Travel',
    description: 'Quality over quantity. Deeper experiences in fewer places. Less rushing, more discovering.',
  },
];

const checklist = [
  'Pack a refillable water bottle',
  'Bring a reusable shopping bag',
  'Use public transport passes',
  'Walk when distances are under 2km',
  'Eat at local restaurants, not chains',
  'Choose accommodations with green practices',
  'Visit attractions during off-peak hours',
  'Support local artisans and makers',
  'Take trains over short-haul flights',
  'Leave no trace in nature areas',
];

export default function Sustainable() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-20 hero-gradient overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1920)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          mixBlendMode: 'overlay',
        }} />
        <div className="container-wide relative z-10">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-6">
              <TreePine className="w-4 h-4 text-secondary" />
              <span className="text-sm font-medium text-white/90">Our Philosophy</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Walk Around. Sustainable. Attainable.
            </h1>
            <p className="text-lg text-white/80">
              Travel that respects places and people. Our itineraries minimize impact 
              while maximizing authentic experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="section">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Sustainable Principles</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Every itinerary is designed with these core values in mind.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {principles.map((principle) => (
              <GlassCard key={principle.title} hover>
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
                  <principle.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{principle.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{principle.description}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainability Score */}
      <section className="section bg-muted/30">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto">
            <GlassCard className="text-center p-8">
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <Leaf className="w-10 h-10 text-primary" />
              </div>
              <h2 className="text-2xl font-bold mb-4">Sustainability Score</h2>
              <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                Every itinerary includes a "Walking Score" that tells you how much you can explore on foot. 
                Higher scores mean more walkable routes, less transport needed, and lower environmental impact.
              </p>
              <div className="grid grid-cols-3 gap-4 max-w-md mx-auto">
                <div className="p-4 rounded-xl bg-accent/50">
                  <p className="text-2xl font-bold text-primary">90%+</p>
                  <p className="text-xs text-muted-foreground">Excellent</p>
                </div>
                <div className="p-4 rounded-xl bg-accent/30">
                  <p className="text-2xl font-bold">70-89%</p>
                  <p className="text-xs text-muted-foreground">Good</p>
                </div>
                <div className="p-4 rounded-xl bg-muted">
                  <p className="text-2xl font-bold">50-69%</p>
                  <p className="text-xs text-muted-foreground">Moderate</p>
                </div>
              </div>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* Checklist */}
      <section className="section">
        <div className="container-wide">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-center mb-8">Traveler's Green Checklist</h2>
            <GlassCard>
              <div className="grid sm:grid-cols-2 gap-3">
                {checklist.map((item) => (
                  <div key={item} className="flex items-center gap-3 p-2">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section hero-gradient">
        <div className="container-wide">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Travel Thoughtfully</h2>
            <p className="text-lg text-white/80 mb-8">
              Explore our itineraries designed with sustainability in mind.
            </p>
            <Button asChild size="lg" className="rounded-full px-8">
              <Link to="/itineraries">
                Browse Itineraries
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
