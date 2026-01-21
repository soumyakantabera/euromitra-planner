import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Filter, X } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { ItineraryCard } from '@/components/ui/ItineraryCard';
import { GlassCard } from '@/components/ui/GlassCard';
import { Button } from '@/components/ui/button';
import { itineraries, regions, styles, durations } from '@/data/itineraries';
import { cn } from '@/lib/utils';

export default function Itineraries() {
  const [searchParams] = useSearchParams();
  const initialRegion = searchParams.get('region') || '';
  
  const [selectedRegion, setSelectedRegion] = useState(initialRegion);
  const [selectedStyles, setSelectedStyles] = useState<string[]>([]);
  const [selectedDuration, setSelectedDuration] = useState('');
  const [showFilters, setShowFilters] = useState(false);

  const filteredItineraries = useMemo(() => {
    return itineraries.filter((it) => {
      if (selectedRegion && it.region !== selectedRegion) return false;
      if (selectedStyles.length > 0 && !selectedStyles.some((s) => it.style.includes(s))) return false;
      if (selectedDuration) {
        const dur = durations.find((d) => d.id === selectedDuration);
        if (dur && (it.days < dur.min || it.days > dur.max)) return false;
      }
      return true;
    });
  }, [selectedRegion, selectedStyles, selectedDuration]);

  const toggleStyle = (style: string) => {
    setSelectedStyles((prev) =>
      prev.includes(style) ? prev.filter((s) => s !== style) : [...prev, style]
    );
  };

  const clearFilters = () => {
    setSelectedRegion('');
    setSelectedStyles([]);
    setSelectedDuration('');
  };

  const hasFilters = selectedRegion || selectedStyles.length > 0 || selectedDuration;

  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-20 hero-gradient overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1488085061387-422e29b40080?w=1920)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          mixBlendMode: 'overlay',
        }} />
        <div className="container-wide relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Itinerary Library
            </h1>
            <p className="text-lg text-white/80">
              Explore our curated collection of city + nature itineraries. 
              Each one includes budget tiers, transport options, and sustainability tips.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-wide">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Mobile Filter Toggle */}
            <div className="lg:hidden">
              <Button
                variant="outline"
                onClick={() => setShowFilters(!showFilters)}
                className="w-full"
              >
                <Filter className="w-4 h-4 mr-2" />
                Filters
                {hasFilters && (
                  <span className="ml-2 w-5 h-5 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center">
                    {(selectedRegion ? 1 : 0) + selectedStyles.length + (selectedDuration ? 1 : 0)}
                  </span>
                )}
              </Button>
            </div>

            {/* Filters Sidebar */}
            <aside className={cn(
              'lg:w-64 flex-shrink-0 space-y-6',
              showFilters ? 'block' : 'hidden lg:block'
            )}>
              <GlassCard className="sticky top-24">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-semibold">Filters</h3>
                  {hasFilters && (
                    <button
                      onClick={clearFilters}
                      className="text-sm text-primary hover:underline flex items-center gap-1"
                    >
                      <X className="w-3 h-3" />
                      Clear
                    </button>
                  )}
                </div>

                {/* Region */}
                <div className="mb-6">
                  <h4 className="text-sm font-medium mb-3">Region</h4>
                  <div className="space-y-2">
                    {regions.map((region) => (
                      <button
                        key={region.id}
                        onClick={() => setSelectedRegion(selectedRegion === region.id ? '' : region.id)}
                        className={cn(
                          'w-full text-left px-3 py-2 rounded-lg text-sm transition-colors',
                          selectedRegion === region.id
                            ? 'bg-primary text-primary-foreground'
                            : 'hover:bg-muted'
                        )}
                      >
                        {region.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Style */}
                <div className="mb-6">
                  <h4 className="text-sm font-medium mb-3">Style</h4>
                  <div className="flex flex-wrap gap-2">
                    {styles.map((style) => (
                      <button
                        key={style.id}
                        onClick={() => toggleStyle(style.id)}
                        className={cn(
                          'px-3 py-1.5 rounded-full text-xs font-medium transition-colors border',
                          selectedStyles.includes(style.id)
                            ? 'bg-primary text-primary-foreground border-primary'
                            : 'border-border hover:bg-muted'
                        )}
                      >
                        {style.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Duration */}
                <div>
                  <h4 className="text-sm font-medium mb-3">Duration</h4>
                  <div className="space-y-2">
                    {durations.map((dur) => (
                      <button
                        key={dur.id}
                        onClick={() => setSelectedDuration(selectedDuration === dur.id ? '' : dur.id)}
                        className={cn(
                          'w-full text-left px-3 py-2 rounded-lg text-sm transition-colors',
                          selectedDuration === dur.id
                            ? 'bg-primary text-primary-foreground'
                            : 'hover:bg-muted'
                        )}
                      >
                        {dur.label}
                      </button>
                    ))}
                  </div>
                </div>
              </GlassCard>
            </aside>

            {/* Results */}
            <div className="flex-1">
              <div className="flex items-center justify-between mb-6">
                <p className="text-muted-foreground">
                  {filteredItineraries.length} itineraries found
                </p>
              </div>

              {filteredItineraries.length > 0 ? (
                <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
                  {filteredItineraries.map((itinerary) => (
                    <ItineraryCard key={itinerary.id} itinerary={itinerary} />
                  ))}
                </div>
              ) : (
                <GlassCard className="text-center py-12">
                  <p className="text-muted-foreground mb-4">No itineraries match your filters.</p>
                  <Button variant="outline" onClick={clearFilters}>
                    Clear Filters
                  </Button>
                </GlassCard>
              )}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
