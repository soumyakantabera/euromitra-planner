import { Check, MessageCircle, Users, Zap, Map } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { GlassCard } from '@/components/ui/GlassCard';
import { Button } from '@/components/ui/button';

const packages = [
  {
    name: 'Quick 30',
    price: '€15',
    description: '30-minute planning call + itinerary PDF/Doc + Google Maps links',
    bestFor: '1 city, short trips, first-time planners',
    features: [
      'Day-by-day plan (or hour-by-hour for 1 day)',
      'Walkable route suggestions + "city | nature" spots',
      'Transport guidance (public / shuttle / car rental)',
      'Stay suggestions (hostel / hotel / luxury)',
    ],
    icon: Zap,
    popular: false,
  },
  {
    name: 'Deep Plan',
    price: '€50',
    description: 'Multi-city planning + bookings guidance + day-by-day optimization',
    bestFor: '2–4 cities, longer trips, first-time Europe/Asia',
    features: [
      'Route + city order optimization',
      'Budget breakdown + time-saving tips',
      'Day-by-day plan with backup options (Plan A/Plan B)',
      'Booking guidance (what to book first, what to avoid)',
    ],
    icon: Map,
    popular: true,
  },
  {
    name: 'Group / Family / Student',
    price: '€75',
    description: 'Planning for groups, families, students, or mixed preferences',
    bestFor: '3+ travelers, different budgets, family pace, student savings',
    features: [
      'Options per person type (food, pace, interests)',
      'Group logistics + meeting points',
      'Budget splits + student-friendly alternatives',
      'Safety, convenience, and accessibility considerations',
    ],
    icon: Users,
    popular: false,
  },
];

export default function Plan() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-20 hero-gradient overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1920)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          mixBlendMode: 'overlay',
        }} />
        <div className="container-wide relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Plan With Us
            </h1>
            <p className="text-lg text-white/80">
              Personalized travel planning in a quick online call — itinerary ready right after.
              Pick the planning depth you need. Then message us on WhatsApp to book your slot.
            </p>
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="section">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Choose Your Package</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Every package includes a video call with us and a complete, personalized itinerary.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {packages.map((pkg) => (
              <GlassCard
                key={pkg.name}
                className={`relative flex flex-col ${pkg.popular ? 'ring-2 ring-primary' : ''}`}
              >
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
                  <pkg.icon className="w-7 h-7 text-primary" />
                </div>

                <h3 className="text-xl font-bold mb-2">{pkg.name}</h3>
                <p className="text-3xl font-bold text-primary mb-2">{pkg.price}</p>
                <p className="text-sm text-muted-foreground mb-4">{pkg.description}</p>

                <div className="bg-accent/50 rounded-lg px-3 py-2 mb-6">
                  <p className="text-xs text-muted-foreground">Best for:</p>
                  <p className="text-sm font-medium">{pkg.bestFor}</p>
                </div>

                <ul className="space-y-3 mb-8 flex-1">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm">
                      <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  asChild
                  className="w-full rounded-full"
                  variant={pkg.popular ? 'default' : 'outline'}
                >
                  <a
                    href={`https://wa.me/393479249860?text=Hi%20EuroMitra!%20I'm%20interested%20in%20the%20${encodeURIComponent(pkg.name)}%20package.`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Book This Package
                  </a>
                </Button>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="section bg-muted/30">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">What You'll Receive</h2>
            
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                'Complete day-by-day itinerary',
                'Google Maps links for all locations',
                'Budget breakdown by tier',
                'Transport recommendations',
                'Stay suggestions (hostel to luxury)',
                'Restaurant zones + food tips',
                'Photo spots + timing tips',
                'Packing essentials list',
                'SIM + connectivity tips',
                'Safety notes + local customs',
                'Sustainability guidance',
                'PDF + Doc format delivery',
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 p-3 rounded-lg glass">
                  <Check className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section hero-gradient">
        <div className="container-wide">
          <GlassCard className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4 text-foreground">Ready to Plan?</h2>
            <p className="text-muted-foreground mb-6">
              Send your destination, dates, and budget tier on WhatsApp. 
              We'll reply with available slots within 24 hours.
            </p>
            <Button asChild size="lg" className="rounded-full px-8">
              <a
                href="https://wa.me/393479249860?text=Hi%20EuroMitra!%20I%20want%20to%20book%20a%20planning%20call.%20Destination:%20___.%20Dates:%20___.%20Budget:%20Cheap/Mid/Luxury.%20Travelers:%20___."
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Message on WhatsApp
              </a>
            </Button>
            <p className="text-xs text-muted-foreground mt-4">+39 347 924 9860</p>
          </GlassCard>
        </div>
      </section>
    </Layout>
  );
}
