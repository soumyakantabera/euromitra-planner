import { Check, MessageCircle, Users, Zap, Map, ArrowRight, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { GlassCard } from '@/components/ui/GlassCard';
import { Button } from '@/components/ui/button';

const packages = [
  {
    name: 'Quick 30',
    price: '€15',
    description: '30-min call + itinerary PDF + map links',
    bestFor: '1 city, short trips',
    features: ['Day-by-day plan', 'Walkable routes', 'Transport + stay tips', 'Budget breakdown'],
    icon: Zap,
    popular: false,
    gradient: 'from-[#17A2A6] to-[#0B1F3B]',
  },
  {
    name: 'Deep Plan',
    price: '€50',
    description: 'Multi-city + bookings guidance',
    bestFor: '2–4 cities, longer trips',
    features: ['Route optimization', 'Budget breakdown', 'Plan A/B options', 'Booking support', '48h follow-up'],
    icon: Map,
    popular: true,
    gradient: 'from-[#D6A84A] to-[#17A2A6]',
  },
  {
    name: 'Group/Family',
    price: '€75',
    description: 'Group logistics + accessibility',
    bestFor: '3+ travelers, families',
    features: ['Per-person options', 'Budget splits', 'Safety + accessibility', 'Kid-friendly options', 'Emergency contacts'],
    icon: Users,
    popular: false,
    gradient: 'from-[#0B1F3B] to-[#D6A84A]',
  },
];

export function PlanWithUs() {
  return (
    <section className="section relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1920)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#0B1F3B] via-[#17A2A6]/60 to-[#D6A84A]/40" />
      </div>
      
      <div className="container-wide relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-6">
            <Star className="w-4 h-4 text-secondary fill-secondary" />
            <span className="text-sm font-medium text-white">Plan With Us</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Your Trip, Personalized
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto text-lg">
            Book a quick video call. Get a complete itinerary with maps, budget tiers, and local tips—ready right after.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-10">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={`relative rounded-3xl overflow-hidden ${pkg.popular ? 'md:scale-105 md:-my-4 z-10' : ''}`}
            >
              {/* Gradient background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${pkg.gradient} opacity-90`} />
              
              <GlassCard
                className="relative bg-transparent border-white/20 flex flex-col h-full"
                hover
              >
                {pkg.popular && (
                  <div className="absolute -top-0 left-1/2 -translate-x-1/2">
                    <span className="bg-secondary text-secondary-foreground text-xs font-bold px-4 py-1.5 rounded-b-xl shadow-lg">
                      ⭐ Most Popular
                    </span>
                  </div>
                )}

                <div className={`w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-6 ${pkg.popular ? 'mt-4' : ''}`}>
                  <pkg.icon className="w-7 h-7 text-white" />
                </div>

                <h3 className="text-xl font-bold mb-1 text-white">{pkg.name}</h3>
                <p className="text-4xl font-bold text-white mb-3">{pkg.price}</p>
                <p className="text-sm text-white/80 mb-4">{pkg.description}</p>

                <div className="bg-white/10 rounded-xl px-4 py-3 mb-6">
                  <span className="text-white/60 text-xs">Best for:</span>
                  <p className="font-semibold text-white text-sm">{pkg.bestFor}</p>
                </div>

                <ul className="space-y-3 mb-8 flex-1">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-sm text-white/90">
                      <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  asChild
                  className={`w-full rounded-full ${pkg.popular ? 'bg-white text-[#0B1F3B] hover:bg-white/90' : 'bg-white/20 text-white hover:bg-white/30'}`}
                  size="lg"
                >
                  <a
                    href={`https://wa.me/393479249860?text=Hi%20EuroMitra!%20I'm%20interested%20in%20the%20${encodeURIComponent(pkg.name)}%20package.`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Book Now
                  </a>
                </Button>
              </GlassCard>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button asChild variant="ghost" className="group text-white hover:text-white hover:bg-white/10">
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