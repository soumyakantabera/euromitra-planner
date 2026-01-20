import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ItineraryCard } from '@/components/ui/ItineraryCard';
import { itineraries } from '@/data/itineraries';

export function ItineraryPreview() {
  const featured = itineraries.slice(0, 6);

  return (
    <section className="section bg-muted/30">
      <div className="container-wide">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Sample Itineraries</h2>
            <p className="text-muted-foreground max-w-xl">
              Browse our curated collection. Each one comes with budget tiers, transport options, and local tips.
            </p>
          </div>
          <Button asChild variant="ghost" className="group self-start md:self-auto">
            <Link to="/itineraries">
              View All
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((itinerary) => (
            <ItineraryCard key={itinerary.id} itinerary={itinerary} />
          ))}
        </div>
      </div>
    </section>
  );
}
