import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Wallet, Bus, Building, Car, Bed, Hotel, Crown, ArrowRight, MessageCircle, Sparkles, Globe, MapPin } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { GlassCard } from '@/components/ui/GlassCard';
import { Button } from '@/components/ui/button';
import { ItineraryCard } from '@/components/ui/ItineraryCard';
import { itineraries } from '@/data/itineraries';
import { cn } from '@/lib/utils';

const budgetOptions = [
  { 
    id: 'cheap', 
    label: 'Budget', 
    icon: Wallet, 
    description: 'Smart spending, local experiences',
    image: 'https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?w=600',
    color: 'from-emerald-500/20 to-teal-500/20',
  },
  { 
    id: 'mid', 
    label: 'Mid-range', 
    icon: Sparkles, 
    description: 'Comfort without excess',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600',
    color: 'from-blue-500/20 to-cyan-500/20',
  },
  { 
    id: 'luxury', 
    label: 'Luxury', 
    icon: Crown, 
    description: 'Premium comfort, exclusive access',
    image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=600',
    color: 'from-amber-500/20 to-orange-500/20',
  },
];

const transportOptions = [
  { 
    id: 'public', 
    label: 'Public Transit', 
    icon: Bus, 
    description: 'Metro, buses, trains',
    image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=600',
  },
  { 
    id: 'shuttle', 
    label: 'Shuttle/Tours', 
    icon: Building, 
    description: 'Guided + group transport',
    image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=600',
  },
  { 
    id: 'carRental', 
    label: 'Car Rental', 
    icon: Car, 
    description: 'Freedom + flexibility',
    image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=600',
  },
];

const stayOptions = [
  { 
    id: 'hostel', 
    label: 'Hostel', 
    icon: Bed, 
    description: 'Social, budget-friendly',
    image: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=600',
  },
  { 
    id: 'hotel', 
    label: 'Hotel', 
    icon: Hotel, 
    description: 'Comfort + privacy',
    image: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=600',
  },
  { 
    id: 'luxury', 
    label: 'Luxury', 
    icon: Crown, 
    description: 'Premium experience',
    image: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=600',
  },
];

export default function BudgetStyle() {
  const [selectedBudget, setSelectedBudget] = useState<string>('');
  const [selectedTransport, setSelectedTransport] = useState<string>('');
  const [selectedStay, setSelectedStay] = useState<string>('');

  const isComplete = selectedBudget && selectedTransport && selectedStay;
  const recommendedItineraries = itineraries.slice(0, 3);

  return (
    <Layout>
      {/* Hero with floating images */}
      <section className="relative py-24 hero-gradient overflow-hidden">
        {/* Background images grid */}
        <div className="absolute inset-0 grid grid-cols-3 gap-4 opacity-20 p-8">
          <div 
            className="rounded-2xl bg-cover bg-center"
            style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=400)' }}
          />
          <div 
            className="rounded-2xl bg-cover bg-center translate-y-8"
            style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=400)' }}
          />
          <div 
            className="rounded-2xl bg-cover bg-center"
            style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1520986606214-8b456906c813?w=400)' }}
          />
        </div>
        
        <div className="container-wide relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-6">
              <Globe className="w-4 h-4 text-secondary" />
              <span className="text-sm font-medium text-white/90">Find Your Style</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Choose Your <span className="text-secondary">Travel Vibe</span>
            </h1>
            <p className="text-lg text-white/80 max-w-xl mx-auto">
              Tell us how you like to travel. We'll match you with perfect itineraries 
              and create a customized trip just for you.
            </p>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-background to-transparent" />
      </section>

      <section className="section -mt-12 relative z-20">
        <div className="container-wide max-w-5xl">
          {/* Budget Section */}
          <div className="mb-16">
            <div className="flex items-center gap-4 mb-8">
              <span className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">1</span>
              <div>
                <h2 className="text-2xl font-bold">Budget Tier</h2>
                <p className="text-muted-foreground text-sm">How do you prefer to spend?</p>
              </div>
            </div>
            
            <div className="grid sm:grid-cols-3 gap-6">
              {budgetOptions.map((option) => (
                <button
                  key={option.id}
                  onClick={() => setSelectedBudget(option.id)}
                  className={cn(
                    'group relative overflow-hidden rounded-3xl text-left transition-all duration-300 border-2',
                    selectedBudget === option.id
                      ? 'border-primary shadow-xl scale-[1.02]'
                      : 'border-transparent hover:border-primary/50'
                  )}
                >
                  {/* Background Image */}
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                    style={{ backgroundImage: `url(${option.image})` }}
                  />
                  <div className={cn(
                    'absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent',
                    selectedBudget === option.id && 'from-primary/80 via-primary/40'
                  )} />
                  
                  {/* Content */}
                  <div className="relative p-6 min-h-[200px] flex flex-col justify-end">
                    <option.icon className={cn(
                      'w-10 h-10 mb-3',
                      selectedBudget === option.id ? 'text-white' : 'text-white/80'
                    )} />
                    <h3 className="text-xl font-bold text-white mb-1">{option.label}</h3>
                    <p className="text-sm text-white/70">{option.description}</p>
                    
                    {selectedBudget === option.id && (
                      <div className="absolute top-4 right-4 w-6 h-6 rounded-full bg-white flex items-center justify-center">
                        <div className="w-3 h-3 rounded-full bg-primary" />
                      </div>
                    )}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Transport Section */}
          <div className="mb-16">
            <div className="flex items-center gap-4 mb-8">
              <span className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">2</span>
              <div>
                <h2 className="text-2xl font-bold">Transport Style</h2>
                <p className="text-muted-foreground text-sm">How do you like to get around?</p>
              </div>
            </div>
            
            <div className="grid sm:grid-cols-3 gap-6">
              {transportOptions.map((option) => (
                <button
                  key={option.id}
                  onClick={() => setSelectedTransport(option.id)}
                  className={cn(
                    'group relative overflow-hidden rounded-3xl text-left transition-all duration-300 border-2',
                    selectedTransport === option.id
                      ? 'border-primary shadow-xl scale-[1.02]'
                      : 'border-transparent hover:border-primary/50'
                  )}
                >
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                    style={{ backgroundImage: `url(${option.image})` }}
                  />
                  <div className={cn(
                    'absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent',
                    selectedTransport === option.id && 'from-primary/80 via-primary/40'
                  )} />
                  
                  <div className="relative p-6 min-h-[180px] flex flex-col justify-end">
                    <option.icon className={cn(
                      'w-8 h-8 mb-3',
                      selectedTransport === option.id ? 'text-white' : 'text-white/80'
                    )} />
                    <h3 className="text-lg font-bold text-white mb-1">{option.label}</h3>
                    <p className="text-sm text-white/70">{option.description}</p>
                    
                    {selectedTransport === option.id && (
                      <div className="absolute top-4 right-4 w-6 h-6 rounded-full bg-white flex items-center justify-center">
                        <div className="w-3 h-3 rounded-full bg-primary" />
                      </div>
                    )}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Stay Section */}
          <div className="mb-16">
            <div className="flex items-center gap-4 mb-8">
              <span className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">3</span>
              <div>
                <h2 className="text-2xl font-bold">Stay Preference</h2>
                <p className="text-muted-foreground text-sm">Where do you like to rest?</p>
              </div>
            </div>
            
            <div className="grid sm:grid-cols-3 gap-6">
              {stayOptions.map((option) => (
                <button
                  key={option.id}
                  onClick={() => setSelectedStay(option.id)}
                  className={cn(
                    'group relative overflow-hidden rounded-3xl text-left transition-all duration-300 border-2',
                    selectedStay === option.id
                      ? 'border-primary shadow-xl scale-[1.02]'
                      : 'border-transparent hover:border-primary/50'
                  )}
                >
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                    style={{ backgroundImage: `url(${option.image})` }}
                  />
                  <div className={cn(
                    'absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent',
                    selectedStay === option.id && 'from-primary/80 via-primary/40'
                  )} />
                  
                  <div className="relative p-6 min-h-[180px] flex flex-col justify-end">
                    <option.icon className={cn(
                      'w-8 h-8 mb-3',
                      selectedStay === option.id ? 'text-white' : 'text-white/80'
                    )} />
                    <h3 className="text-lg font-bold text-white mb-1">{option.label}</h3>
                    <p className="text-sm text-white/70">{option.description}</p>
                    
                    {selectedStay === option.id && (
                      <div className="absolute top-4 right-4 w-6 h-6 rounded-full bg-white flex items-center justify-center">
                        <div className="w-3 h-3 rounded-full bg-primary" />
                      </div>
                    )}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Results */}
          {isComplete && (
            <div className="animate-fade-in">
              <div className="border-t border-border pt-12">
                <div className="flex items-center gap-3 mb-8">
                  <MapPin className="w-6 h-6 text-primary" />
                  <h2 className="text-2xl font-bold">Your Perfect Matches</h2>
                </div>
                
                <div className="grid sm:grid-cols-3 gap-6 mb-10">
                  {recommendedItineraries.map((it) => (
                    <ItineraryCard key={it.id} itinerary={it} />
                  ))}
                </div>

                <GlassCard className="text-center bg-gradient-to-r from-primary/5 to-secondary/5">
                  <Sparkles className="w-10 h-10 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-3">Want a Personalized Plan?</h3>
                  <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
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
