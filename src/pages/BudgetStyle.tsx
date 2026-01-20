import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Wallet, Bus, Building, Car, Bed, Hotel, Crown, ArrowRight, MessageCircle } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { GlassCard } from '@/components/ui/GlassCard';
import { Button } from '@/components/ui/button';
import { ItineraryCard } from '@/components/ui/ItineraryCard';
import { itineraries } from '@/data/itineraries';
import { cn } from '@/lib/utils';

const budgetOptions = [
  { id: 'cheap', label: 'Budget', icon: Wallet, description: 'Smart spending, local experiences' },
  { id: 'mid', label: 'Mid-range', icon: Wallet, description: 'Comfort without excess' },
  { id: 'luxury', label: 'Luxury', icon: Crown, description: 'Premium comfort, exclusive access' },
];

const transportOptions = [
  { id: 'public', label: 'Public Transit', icon: Bus, description: 'Metro, buses, trains' },
  { id: 'shuttle', label: 'Shuttle/Tours', icon: Building, description: 'Guided + group transport' },
  { id: 'carRental', label: 'Car Rental', icon: Car, description: 'Freedom + flexibility' },
];

const stayOptions = [
  { id: 'hostel', label: 'Hostel', icon: Bed, description: 'Social, budget-friendly' },
  { id: 'hotel', label: 'Hotel', icon: Hotel, description: 'Comfort + privacy' },
  { id: 'luxury', label: 'Luxury', icon: Crown, description: 'Premium experience' },
];

export default function BudgetStyle() {
  const [selectedBudget, setSelectedBudget] = useState<string>('');
  const [selectedTransport, setSelectedTransport] = useState<string>('');
  const [selectedStay, setSelectedStay] = useState<string>('');

  const isComplete = selectedBudget && selectedTransport && selectedStay;
  const recommendedItineraries = itineraries.slice(0, 3);

  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-20 hero-gradient overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1920)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          mixBlendMode: 'overlay',
        }} />
        <div className="container-wide relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Choose Your Vibe
            </h1>
            <p className="text-lg text-white/80">
              Tell us your travel style. We'll show you matching itineraries 
              and customize the perfect trip for you.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-wide max-w-4xl">
          {/* Budget */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <span className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold">1</span>
              Budget Tier
            </h2>
            <div className="grid sm:grid-cols-3 gap-4">
              {budgetOptions.map((option) => (
                <button
                  key={option.id}
                  onClick={() => setSelectedBudget(option.id)}
                  className={cn(
                    'p-6 rounded-2xl text-left transition-all duration-200 border-2',
                    selectedBudget === option.id
                      ? 'border-primary bg-primary/5 shadow-lg'
                      : 'border-border hover:border-primary/50 glass'
                  )}
                >
                  <option.icon className={cn(
                    'w-8 h-8 mb-4',
                    selectedBudget === option.id ? 'text-primary' : 'text-muted-foreground'
                  )} />
                  <h3 className="font-semibold mb-1">{option.label}</h3>
                  <p className="text-sm text-muted-foreground">{option.description}</p>
                </button>
              ))}
            </div>
          </div>

          {/* Transport */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <span className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold">2</span>
              Transport Style
            </h2>
            <div className="grid sm:grid-cols-3 gap-4">
              {transportOptions.map((option) => (
                <button
                  key={option.id}
                  onClick={() => setSelectedTransport(option.id)}
                  className={cn(
                    'p-6 rounded-2xl text-left transition-all duration-200 border-2',
                    selectedTransport === option.id
                      ? 'border-primary bg-primary/5 shadow-lg'
                      : 'border-border hover:border-primary/50 glass'
                  )}
                >
                  <option.icon className={cn(
                    'w-8 h-8 mb-4',
                    selectedTransport === option.id ? 'text-primary' : 'text-muted-foreground'
                  )} />
                  <h3 className="font-semibold mb-1">{option.label}</h3>
                  <p className="text-sm text-muted-foreground">{option.description}</p>
                </button>
              ))}
            </div>
          </div>

          {/* Stay */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <span className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold">3</span>
              Stay Preference
            </h2>
            <div className="grid sm:grid-cols-3 gap-4">
              {stayOptions.map((option) => (
                <button
                  key={option.id}
                  onClick={() => setSelectedStay(option.id)}
                  className={cn(
                    'p-6 rounded-2xl text-left transition-all duration-200 border-2',
                    selectedStay === option.id
                      ? 'border-primary bg-primary/5 shadow-lg'
                      : 'border-border hover:border-primary/50 glass'
                  )}
                >
                  <option.icon className={cn(
                    'w-8 h-8 mb-4',
                    selectedStay === option.id ? 'text-primary' : 'text-muted-foreground'
                  )} />
                  <h3 className="font-semibold mb-1">{option.label}</h3>
                  <p className="text-sm text-muted-foreground">{option.description}</p>
                </button>
              ))}
            </div>
          </div>

          {/* Results */}
          {isComplete && (
            <div className="animate-fade-in">
              <div className="border-t border-border pt-12">
                <h2 className="text-2xl font-bold mb-6">Recommended Itineraries</h2>
                <div className="grid sm:grid-cols-3 gap-6 mb-8">
                  {recommendedItineraries.map((it) => (
                    <ItineraryCard key={it.id} itinerary={it} />
                  ))}
                </div>

                <GlassCard className="text-center">
                  <h3 className="text-xl font-bold mb-3">Want a Personalized Plan?</h3>
                  <p className="text-muted-foreground mb-6">
                    Book a 30-minute call and we'll create a custom itinerary 
                    matching your {budgetOptions.find(b => b.id === selectedBudget)?.label.toLowerCase()} budget, 
                    {transportOptions.find(t => t.id === selectedTransport)?.label.toLowerCase()}, 
                    and {stayOptions.find(s => s.id === selectedStay)?.label.toLowerCase()} stays.
                  </p>
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Button asChild size="lg" className="rounded-full px-8">
                      <a
                        href={`https://wa.me/393479249860?text=Hi%20EuroMitra!%20I%20want%20a%20${selectedBudget}%20budget%20trip%20with%20${selectedTransport}%20transport%20and%20${selectedStay}%20stays.`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <MessageCircle className="w-5 h-5 mr-2" />
                        Book a Call
                      </a>
                    </Button>
                    <Button asChild variant="outline" size="lg" className="rounded-full px-8">
                      <Link to="/itineraries">
                        Browse All Itineraries
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                  </div>
                </GlassCard>
              </div>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
}
