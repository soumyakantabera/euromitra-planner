import { TreePine, Footprints, Train, Droplets, Leaf, MapPin, Check, Globe, Heart, Sparkles } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { GlassCard } from '@/components/ui/GlassCard';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const principles = [
  {
    icon: Footprints,
    title: 'Walk-First Routing',
    description: 'Every itinerary prioritizes walkable neighborhoods and pedestrian zones. See more, spend less on transport.',
    image: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=600',
  },
  {
    icon: Train,
    title: 'Smart Public Transit',
    description: 'Detailed guides on metro passes, bus routes, and train tickets. Skip the car rental, embrace local transport.',
    image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=600',
  },
  {
    icon: Droplets,
    title: 'Refill Culture',
    description: 'Every destination includes tap water quality info and refill station locations. Ditch single-use plastic.',
    image: 'https://images.unsplash.com/photo-1527192491265-7e15c55b1ed2?w=600',
  },
  {
    icon: Leaf,
    title: 'Local & Seasonal',
    description: 'Restaurant recommendations favor local, seasonal ingredients. Support small businesses, taste real flavors.',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600',
  },
  {
    icon: MapPin,
    title: 'Low-Impact Nature',
    description: 'Nature escapes that respect ecosystems. Stay on trails, avoid peak seasons, leave no trace.',
    image: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=600',
  },
  {
    icon: TreePine,
    title: 'Slow Travel',
    description: 'Quality over quantity. Deeper experiences in fewer places. Less rushing, more discovering.',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600',
  },
];

const checklist = [
  { text: 'Pack a refillable water bottle', icon: Droplets },
  { text: 'Bring a reusable shopping bag', icon: Leaf },
  { text: 'Use public transport passes', icon: Train },
  { text: 'Walk when distances are under 2km', icon: Footprints },
  { text: 'Eat at local restaurants, not chains', icon: Heart },
  { text: 'Choose eco-friendly accommodations', icon: TreePine },
  { text: 'Visit attractions during off-peak hours', icon: Globe },
  { text: 'Support local artisans and makers', icon: Sparkles },
  { text: 'Take trains over short-haul flights', icon: Train },
  { text: 'Leave no trace in nature areas', icon: MapPin },
];

const impactStats = [
  { value: '70%', label: 'Less carbon vs car travel' },
  { value: '85%', label: 'Walking score average' },
  { value: '100%', label: 'Local business focus' },
];

export default function Sustainable() {
  return (
    <Layout>
      {/* Hero with nature imagery */}
      <section className="relative py-28 overflow-hidden">
        {/* Background collage */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 grid grid-cols-2 md:grid-cols-4 gap-2 p-2 opacity-40">
            <div className="bg-cover bg-center rounded-2xl" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400)' }} />
            <div className="bg-cover bg-center rounded-2xl translate-y-4" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1501854140801-50d01698950b?w=400)' }} />
            <div className="bg-cover bg-center rounded-2xl hidden md:block" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400)' }} />
            <div className="bg-cover bg-center rounded-2xl translate-y-8 hidden md:block" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400)' }} />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
        </div>
        
        <div className="container-wide relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-6">
              <TreePine className="w-4 h-4 text-secondary" />
              <span className="text-sm font-medium">Our Philosophy</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Walk Around. <span className="text-primary">Sustainable.</span> Attainable.
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-10">
              Travel that respects places and people. Our itineraries minimize impact 
              while maximizing authentic experiences.
            </p>
            
            {/* Impact Stats */}
            <div className="flex flex-wrap justify-center gap-8">
              {impactStats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="text-4xl font-bold text-primary mb-1">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Principles - Visual Grid */}
      <section className="section bg-muted/30">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Sustainable Principles</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Every itinerary is designed with these core values in mind.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {principles.map((principle) => (
              <div 
                key={principle.title} 
                className="group relative overflow-hidden rounded-3xl h-[280px] cursor-pointer"
              >
                {/* Background Image */}
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url(${principle.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20 group-hover:from-primary/90 group-hover:via-primary/50 transition-colors duration-300" />
                
                {/* Content */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur flex items-center justify-center mb-4 group-hover:bg-white/30 transition-colors">
                    <principle.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{principle.title}</h3>
                  <p className="text-sm text-white/80 leading-relaxed">{principle.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainability Score Visual */}
      <section className="section">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Visual side */}
              <div className="relative">
                <div 
                  className="aspect-square rounded-3xl bg-cover bg-center"
                  style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800)' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent rounded-3xl" />
                
                {/* Score badge */}
                <div className="absolute bottom-6 left-6 right-6">
                  <GlassCard className="!p-4 !bg-white/10 backdrop-blur-xl">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center">
                        <span className="text-2xl font-bold text-secondary-foreground">90%</span>
                      </div>
                      <div>
                        <p className="font-bold text-white">Walking Score</p>
                        <p className="text-sm text-white/70">Florence itinerary example</p>
                      </div>
                    </div>
                  </GlassCard>
                </div>
              </div>
              
              {/* Content side */}
              <div>
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                  <Leaf className="w-8 h-8 text-primary" />
                </div>
                <h2 className="text-3xl font-bold mb-4">Sustainability Score</h2>
                <p className="text-muted-foreground mb-6">
                  Every itinerary includes a "Walking Score" that tells you how much you can explore on foot. 
                  Higher scores mean more walkable routes, less transport needed, and lower environmental impact.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-3 rounded-full bg-primary" />
                    <div>
                      <span className="font-bold">90%+</span>
                      <span className="text-muted-foreground ml-2">Excellent - Almost all on foot</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-3 rounded-full bg-primary/70" />
                    <div>
                      <span className="font-bold">70-89%</span>
                      <span className="text-muted-foreground ml-2">Good - Mostly walkable</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-3 rounded-full bg-primary/40" />
                    <div>
                      <span className="font-bold">50-69%</span>
                      <span className="text-muted-foreground ml-2">Moderate - Mixed transport</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Checklist - Interactive Style */}
      <section className="section bg-muted/30">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold mb-4">Traveler's Green Checklist</h2>
              <p className="text-muted-foreground">
                Simple actions for more sustainable travel
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-4">
              {checklist.map((item, index) => (
                <GlassCard 
                  key={item.text} 
                  hover 
                  className="flex items-center gap-4 !p-4 cursor-pointer group"
                >
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-sm font-medium">{item.text}</span>
                  <div className="ml-auto w-6 h-6 rounded-full border-2 border-border flex items-center justify-center group-hover:border-primary group-hover:bg-primary/10 transition-colors">
                    <Check className="w-3 h-3 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </GlassCard>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1920)' }}
        />
        <div className="absolute inset-0 hero-gradient opacity-90" />
        
        <div className="container-wide relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <TreePine className="w-12 h-12 text-secondary mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Travel Thoughtfully</h2>
            <p className="text-lg text-white/80 mb-8">
              Explore our itineraries designed with sustainability in mind. 
              Every trip can make a positive difference.
            </p>
            <Button asChild size="lg" className="rounded-full px-8">
              <Link to="/itineraries">
                Browse Sustainable Itineraries
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
