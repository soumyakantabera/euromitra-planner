import { Link } from 'react-router-dom';
import { ArrowRight, Globe, Compass } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ItineraryCard } from '@/components/ui/ItineraryCard';
import { allItineraries } from '@/data/itineraries';

export function ItineraryPreview() {
  // Show 6 featured itineraries with diverse destinations
  const featured = allItineraries.slice(0, 6);

  return (
    <section className="section relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/30 via-background to-muted/30" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-secondary/5 rounded-full blur-3xl" />
      
      <div className="container-wide relative z-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-4">
              <Globe className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">34 Curated Itineraries</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Explore Destinations</h2>
            <p className="text-muted-foreground max-w-xl text-lg">
              Browse our curated collection. Each one comes with budget tiers, transport options, and local tips.
            </p>
          </div>
          <Button asChild variant="default" size="lg" className="rounded-full group self-start md:self-auto">
            <Link to="/itineraries">
              <Compass className="w-5 h-5 mr-2" />
              View All 34
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((itinerary) => (
            <ItineraryCard key={itinerary.id} itinerary={itinerary} />
          ))}
        </div>
        
        {/* Region tags */}
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {['Italy', 'Japan', 'Switzerland', 'India', 'Portugal', 'Spain'].map((region) => (
            <Link
              key={region}
              to={`/itineraries?region=${region.toLowerCase()}`}
              className="glass rounded-full px-5 py-2.5 text-sm font-medium hover:bg-primary/10 transition-colors"
            >
              {region}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}