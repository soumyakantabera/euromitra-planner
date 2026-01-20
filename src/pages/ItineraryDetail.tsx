import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, MapPin, Calendar, Footprints, Sun, Bus, Car, Building, TreePine, MessageCircle, ChevronDown } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { GlassCard } from '@/components/ui/GlassCard';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { itineraries } from '@/data/itineraries';

export default function ItineraryDetail() {
  const { id } = useParams();
  const itinerary = itineraries.find((it) => it.id === id);

  if (!itinerary) {
    return (
      <Layout>
        <div className="container-wide py-20 text-center">
          <h1 className="text-2xl font-bold mb-4">Itinerary not found</h1>
          <Button asChild>
            <Link to="/itineraries">Back to Itineraries</Link>
          </Button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[400px]">
        <img
          src={itinerary.heroImage}
          alt={itinerary.destination}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/40 to-transparent" />
        
        <div className="absolute inset-0 flex items-end">
          <div className="container-wide pb-12">
            <Link
              to="/itineraries"
              className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Itineraries
            </Link>

            <GlassCard className="max-w-3xl p-8">
              <div className="flex flex-wrap gap-2 mb-4">
                {itinerary.style.map((style) => (
                  <span key={style} className="tag capitalize">{style}</span>
                ))}
              </div>

              <h1 className="text-3xl md:text-4xl font-bold mb-2">{itinerary.destination}</h1>
              <p className="text-lg text-muted-foreground mb-6">{itinerary.title}</p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-primary" />
                  <span>{itinerary.days} days</span>
                </div>
                <div className="flex items-center gap-2">
                  <Footprints className="w-5 h-5 text-primary" />
                  <span>{itinerary.walkingScore}% walkable</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span className="capitalize">{itinerary.region.replace('-', ' / ')}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Sun className="w-5 h-5 text-primary" />
                  <span>{itinerary.bestSeason}</span>
                </div>
              </div>
            </GlassCard>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-wide">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Description */}
              <GlassCard>
                <h2 className="text-2xl font-bold mb-4">Why This Itinerary Works</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">{itinerary.description}</p>
                <div className="flex flex-wrap gap-2">
                  {itinerary.highlights.map((highlight) => (
                    <span key={highlight} className="tag bg-accent text-accent-foreground">
                      {highlight}
                    </span>
                  ))}
                </div>
              </GlassCard>

              {/* Day by Day */}
              <GlassCard>
                <h2 className="text-2xl font-bold mb-6">Day-by-Day Schedule</h2>
                <Accordion type="multiple" className="space-y-4">
                  {itinerary.dayByDay.map((day) => (
                    <AccordionItem key={day.day} value={`day-${day.day}`} className="border rounded-xl px-4">
                      <AccordionTrigger className="hover:no-underline py-4">
                        <div className="flex items-center gap-4 text-left">
                          <span className="w-10 h-10 rounded-full bg-primary/10 text-primary font-bold flex items-center justify-center flex-shrink-0">
                            {day.day}
                          </span>
                          <span className="font-semibold">{day.title}</span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="pb-4 pl-14">
                        <div className="space-y-4">
                          <div>
                            <h4 className="text-sm font-medium text-muted-foreground mb-2">Activities</h4>
                            <ul className="list-disc list-inside space-y-1 text-sm">
                              {day.activities.map((activity, i) => (
                                <li key={i}>{activity}</li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h4 className="text-sm font-medium text-muted-foreground mb-1">Meals</h4>
                            <p className="text-sm">{day.meals}</p>
                          </div>
                          <div>
                            <h4 className="text-sm font-medium text-muted-foreground mb-1">Transport</h4>
                            <p className="text-sm">{day.transport}</p>
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </GlassCard>

              {/* Transport */}
              <GlassCard>
                <h2 className="text-2xl font-bold mb-6">Transport Options</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-muted/50">
                    <Bus className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-medium mb-1">Public Transit</h4>
                      <p className="text-sm text-muted-foreground">{itinerary.transport.public}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-muted/50">
                    <Building className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-medium mb-1">Shuttle / Tours</h4>
                      <p className="text-sm text-muted-foreground">{itinerary.transport.shuttle}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-muted/50">
                    <Car className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-medium mb-1">Car Rental</h4>
                      <p className="text-sm text-muted-foreground">{itinerary.transport.carRental}</p>
                    </div>
                  </div>
                </div>
              </GlassCard>

              {/* Sustainability */}
              <GlassCard>
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <TreePine className="w-6 h-6 text-primary" />
                  Sustainability Tips
                </h2>
                <ul className="space-y-3">
                  {itinerary.sustainabilityTips.map((tip, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="w-6 h-6 rounded-full bg-accent text-accent-foreground text-sm flex items-center justify-center flex-shrink-0">
                        ✓
                      </span>
                      <span className="text-sm">{tip}</span>
                    </li>
                  ))}
                </ul>
              </GlassCard>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Budget */}
              <GlassCard strong className="sticky top-24">
                <h3 className="font-bold mb-4">Budget Breakdown</h3>
                <div className="space-y-4">
                  <div className="p-4 rounded-xl bg-accent/50 border border-accent">
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-medium">Budget</span>
                      <span className="text-sm text-muted-foreground">{itinerary.budgetTiers.cheap.perDay}/day</span>
                    </div>
                    <p className="text-lg font-bold text-primary">{itinerary.budgetTiers.cheap.total} total</p>
                  </div>
                  <div className="p-4 rounded-xl bg-muted/50">
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-medium">Mid-range</span>
                      <span className="text-sm text-muted-foreground">{itinerary.budgetTiers.mid.perDay}/day</span>
                    </div>
                    <p className="text-lg font-bold">{itinerary.budgetTiers.mid.total} total</p>
                  </div>
                  <div className="p-4 rounded-xl bg-muted/50">
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-medium">Luxury</span>
                      <span className="text-sm text-muted-foreground">{itinerary.budgetTiers.luxury.perDay}/day</span>
                    </div>
                    <p className="text-lg font-bold">{itinerary.budgetTiers.luxury.total} total</p>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-border">
                  <h4 className="font-medium mb-3">Stay Suggestions</h4>
                  <div className="space-y-3 text-sm">
                    <div>
                      <span className="text-muted-foreground">Hostel:</span>
                      <p>{itinerary.stay.hostel.join(', ')}</p>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Hotel:</span>
                      <p>{itinerary.stay.hotel.join(', ')}</p>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Luxury:</span>
                      <p>{itinerary.stay.luxury.join(', ')}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <Button asChild className="w-full rounded-full" size="lg">
                    <a
                      href={`https://wa.me/393479249860?text=Hi%20EuroMitra!%20I'm%20interested%20in%20the%20${encodeURIComponent(itinerary.destination)}%20itinerary.%20Can%20we%20book%20a%20planning%20call?`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageCircle className="w-5 h-5 mr-2" />
                      Customize This Trip
                    </a>
                  </Button>
                  <p className="text-xs text-center text-muted-foreground mt-3">
                    30-min call • Personalized for you
                  </p>
                </div>
              </GlassCard>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
