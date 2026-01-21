import { Check, MessageCircle, Users, Zap, Map, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { GlassCard } from '@/components/ui/GlassCard';
import { Button } from '@/components/ui/button';

const packages = [
  {
    name: 'Quick 30',
    price: '€15',
    description: '30-min call + itinerary PDF + map links',
    bestFor: '1 city, short trips',
    features: ['Day-by-day plan', 'Walkable routes', 'Transport + stay tips'],
    icon: Zap,
    popular: false,
  },
  {
    name: 'Deep Plan',
    price: '€50',
    description: 'Multi-city + bookings guidance',
    bestFor: '2–4 cities, longer trips',
    features: ['Route optimization', 'Budget breakdown', 'Plan A/B options'],
    icon: Map,
    popular: true,
  },
  {
    name: 'Group/Family',
    price: '€75',
    description: 'Group logistics + accessibility',
    bestFor: '3+ travelers, families',
    features: ['Per-person options', 'Budget splits', 'Safety + accessibility'],
    icon: Users,
    popular: false,
  },
];

export function PlanWithUs() {
  return (
    <section className="section relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1920)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'brightness(0.4)',
          }}
        />
      </div>
      
      <div className="container-wide relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-6">
            <MessageCircle className="w-4 h-4 text-secondary" />
            <span className="text-sm font-medium">Plan With Us</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Your Trip, Personalized
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Book a quick video call. Get a complete itinerary with maps, budget tiers, and local tips—ready right after.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-10">
          {packages.map((pkg) => (
            <GlassCard
              key={pkg.name}
              className={`relative flex flex-col ${pkg.popular ? 'ring-2 ring-primary scale-105' : ''}`}
              hover
            >
              {pkg.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <pkg.icon className="w-6 h-6 text-primary" />
              </div>

              <h3 className="text-lg font-bold mb-1">{pkg.name}</h3>
              <p className="text-2xl font-bold text-primary mb-2">{pkg.price}</p>
              <p className="text-sm text-muted-foreground mb-3">{pkg.description}</p>

              <div className="bg-accent/50 rounded-lg px-3 py-2 mb-4 text-xs">
                <span className="text-muted-foreground">Best for:</span>{' '}
                <span className="font-medium">{pkg.bestFor}</span>
              </div>

              <ul className="space-y-2 mb-6 flex-1">
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm">
                    <Check className="w-4 h-4 text-primary flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                asChild
                className="w-full rounded-full"
                variant={pkg.popular ? 'default' : 'outline'}
                size="sm"
              >
                <a
                  href={`https://wa.me/393479249860?text=Hi%20EuroMitra!%20I'm%20interested%20in%20the%20${encodeURIComponent(pkg.name)}%20package.`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Book Now
                </a>
              </Button>
            </GlassCard>
          ))}
        </div>

        <div className="text-center">
          <Button asChild variant="ghost" className="group">
            <Link to="/plan">
              See Full Details
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
