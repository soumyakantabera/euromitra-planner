import { Link } from 'react-router-dom';
import { MapPin, Calendar, Footprints, Sun } from 'lucide-react';
import { Itinerary } from '@/data/itineraries';
import { GlassCard } from './GlassCard';
import { cn } from '@/lib/utils';

interface ItineraryCardProps {
  itinerary: Itinerary;
  className?: string;
}

export function ItineraryCard({ itinerary, className }: ItineraryCardProps) {
  return (
    <Link to={`/itineraries/${itinerary.id}`} className={cn('block group', className)}>
      <GlassCard hover className="h-full overflow-hidden p-0">
        {/* Image */}
        <div className="relative h-48 overflow-hidden">
          <img
            src={itinerary.heroImage}
            alt={itinerary.destination}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent" />
          <div className="absolute bottom-4 left-4 right-4">
            <h3 className="text-lg font-semibold text-white leading-tight">{itinerary.destination}</h3>
          </div>
        </div>

        {/* Content */}
        <div className="p-5 space-y-4">
          <p className="text-sm text-muted-foreground line-clamp-2">{itinerary.title}</p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {itinerary.style.slice(0, 3).map((style) => (
              <span
                key={style}
                className="tag text-xs capitalize"
              >
                {style}
              </span>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-3 pt-2">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Calendar className="w-4 h-4 text-primary" />
              <span>{itinerary.days} days</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Footprints className="w-4 h-4 text-primary" />
              <span>{itinerary.walkingScore}% walk</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="w-4 h-4 text-primary" />
              <span className="capitalize">{itinerary.region.replace('-', '/')}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Sun className="w-4 h-4 text-primary" />
              <span className="text-xs">{itinerary.bestSeason}</span>
            </div>
          </div>

          {/* Budget */}
          <div className="pt-2 border-t border-border/50">
            <p className="text-xs text-muted-foreground mb-1">From</p>
            <p className="font-semibold text-primary">{itinerary.budgetTiers.cheap.perDay}/day</p>
          </div>
        </div>
      </GlassCard>
    </Link>
  );
}
