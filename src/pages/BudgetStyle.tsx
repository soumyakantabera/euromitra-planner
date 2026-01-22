import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Wallet, Bus, Building, Car, Bed, Hotel, Crown, ArrowRight, MessageCircle, Sparkles, Globe, MapPin, Check, RotateCcw, Footprints, Zap } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { GlassCard } from '@/components/ui/GlassCard';
import { Button } from '@/components/ui/button';
import { ItineraryCard } from '@/components/ui/ItineraryCard';
import { allItineraries } from '@/data/itineraries';
import { cn } from '@/lib/utils';

const budgetOptions = [
  { 
    id: 'cheap', 
    label: 'Budget', 
    icon: Wallet, 
    description: 'Smart spending, local experiences',
    image: 'https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?w=600',
    priceRange: '€30-60/day',
    highlights: ['Street food', 'Hostels', 'Walking tours'],
  },
  { 
    id: 'mid', 
    label: 'Mid-range', 
    icon: Sparkles, 
    description: 'Comfort without excess',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600',
    priceRange: '€80-150/day',
    highlights: ['Local restaurants', '3-4★ hotels', 'Skip-the-line'],
  },
  { 
    id: 'luxury', 
    label: 'Luxury', 
    icon: Crown, 
    description: 'Premium comfort, exclusive access',
    image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=600',
    priceRange: '€200+/day',
    highlights: ['Fine dining', '5★ hotels', 'Private guides'],
  },
];

const transportOptions = [
  { 
    id: 'public', 
    label: 'Public Transit', 
    icon: Bus, 
    description: 'Metro, buses, trains',
    image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=600',
    eco: true,
  },
  { 
    id: 'shuttle', 
    label: 'Shuttle/Tours', 
    icon: Building, 
    description: 'Guided + group transport',
    image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=600',
    eco: false,
  },
  { 
    id: 'carRental', 
    label: 'Car Rental', 
    icon: Car, 
    description: 'Freedom + flexibility',
    image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=600',
    eco: false,
  },
];

const stayOptions = [
  { 
    id: 'hostel', 
    label: 'Hostel', 
    icon: Bed, 
    description: 'Social, budget-friendly',
    image: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=600',
    features: ['Shared rooms', 'Common areas', 'Kitchen'],
  },
  { 
    id: 'hotel', 
    label: 'Hotel', 
    icon: Hotel, 
    description: 'Comfort + privacy',
    image: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=600',
    features: ['Private room', 'Daily cleaning', 'Breakfast'],
  },
  { 
    id: 'luxury', 
    label: 'Luxury', 
    icon: Crown, 
    description: 'Premium experience',
    image: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=600',
    features: ['Suite', 'Spa access', 'Concierge'],
  },
];

const paceOptions = [
  { id: 'slow', label: 'Slow', icon: Footprints, description: '2-3 activities/day' },
  { id: 'normal', label: 'Normal', icon: Sparkles, description: '4-5 activities/day' },
  { id: 'packed', label: 'Packed', icon: Zap, description: '6+ activities/day' },
];

export default function BudgetStyle() {
  const [selectedBudget, setSelectedBudget] = useState<string>('');
  const [selectedTransport, setSelectedTransport] = useState<string>('');
  const [selectedStay, setSelectedStay] = useState<string>('');
  const [selectedPace, setSelectedPace] = useState<string>('');
  const [step, setStep] = useState(1);
  const [showResults, setShowResults] = useState(false);

  const isComplete = selectedBudget && selectedTransport && selectedStay && selectedPace;
  
  // Auto-advance steps
  useEffect(() => {
    if (selectedBudget && step === 1) {
      setTimeout(() => setStep(2), 400);
    }
  }, [selectedBudget]);

  useEffect(() => {
    if (selectedTransport && step === 2) {
      setTimeout(() => setStep(3), 400);
    }
  }, [selectedTransport]);

  useEffect(() => {
    if (selectedStay && step === 3) {
      setTimeout(() => setStep(4), 400);
    }
  }, [selectedStay]);

  useEffect(() => {
    if (selectedPace && step === 4) {
      setTimeout(() => setShowResults(true), 400);
    }
  }, [selectedPace]);

  const resetQuiz = () => {
    setSelectedBudget('');
    setSelectedTransport('');
    setSelectedStay('');
    setSelectedPace('');
    setStep(1);
    setShowResults(false);
  };

  const recommendedItineraries = allItineraries.slice(0, 3);
  const progress = ((selectedBudget ? 1 : 0) + (selectedTransport ? 1 : 0) + (selectedStay ? 1 : 0) + (selectedPace ? 1 : 0)) / 4 * 100;

  return (
    <Layout>
      {/* Hero with floating images */}
      <section className="relative py-24 hero-gradient overflow-hidden">
        {/* Animated background images */}
        <div className="absolute inset-0 opacity-30">
          <div 
            className="absolute top-10 left-10 w-48 h-32 rounded-2xl bg-cover bg-center animate-float shadow-2xl"
            style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=400)' }}
          />
          <div 
            className="absolute top-20 right-20 w-40 h-28 rounded-2xl bg-cover bg-center animate-float animation-delay-200 shadow-2xl"
            style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=400)' }}
          />
          <div 
            className="absolute bottom-20 left-1/4 w-36 h-24 rounded-2xl bg-cover bg-center animate-float animation-delay-300 shadow-2xl"
            style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1520986606214-8b456906c813?w=400)' }}
          />
        </div>
        
        <div className="container-wide relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <Globe className="w-4 h-4 text-secondary" />
              <span className="text-sm font-medium text-white">Interactive Quiz</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Find Your <span className="text-secondary">Travel Vibe</span>
            </h1>
            <p className="text-lg text-white/80 max-w-xl mx-auto mb-8">
              Answer 4 quick questions and we'll match you with perfect itineraries.
            </p>
            
            {/* Progress bar */}
            <div className="max-w-md mx-auto">
              <div className="flex justify-between text-xs text-white/60 mb-2">
                <span>Progress</span>
                <span>{Math.round(progress)}% Complete</span>
              </div>
              <div className="h-2 bg-white/20 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-secondary to-primary rounded-full transition-all duration-500 ease-out"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-background to-transparent" />
      </section>

      <section className="section -mt-12 relative z-20">
        <div className="container-wide max-w-5xl">
          
          {/* Reset button */}
          {(selectedBudget || selectedTransport || selectedStay || selectedPace) && (
            <div className="flex justify-end mb-6">
              <Button variant="ghost" size="sm" onClick={resetQuiz} className="text-muted-foreground">
                <RotateCcw className="w-4 h-4 mr-2" />
                Start Over
              </Button>
            </div>
          )}

          {/* Step 1: Budget */}
          <div className={cn(
            "mb-16 transition-all duration-500",
            step >= 1 ? "opacity-100 translate-y-0" : "opacity-50 translate-y-4 pointer-events-none"
          )}>
            <div className="flex items-center gap-4 mb-8">
              <span className={cn(
                "w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg transition-colors",
                selectedBudget ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
              )}>
                {selectedBudget ? <Check className="w-6 h-6" /> : '1'}
              </span>
              <div>
                <h2 className="text-2xl font-bold">Budget Tier</h2>
                <p className="text-muted-foreground text-sm">How do you prefer to spend?</p>
              </div>
            </div>
            
            <div className="grid sm:grid-cols-3 gap-6">
              {budgetOptions.map((option, index) => (
                <button
                  key={option.id}
                  onClick={() => setSelectedBudget(option.id)}
                  className={cn(
                    'group relative overflow-hidden rounded-3xl text-left transition-all duration-300 border-2 transform',
                    selectedBudget === option.id
                      ? 'border-primary shadow-2xl scale-[1.02] ring-4 ring-primary/20'
                      : 'border-transparent hover:border-primary/50 hover:shadow-xl hover:scale-[1.01]',
                    `animate-fade-in`
                  )}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url(${option.image})` }}
                  />
                  <div className={cn(
                    'absolute inset-0 transition-all duration-300',
                    selectedBudget === option.id 
                      ? 'bg-gradient-to-t from-primary/90 via-primary/60 to-primary/30'
                      : 'bg-gradient-to-t from-black/80 via-black/40 to-transparent'
                  )} />
                  
                  <div className="relative p-6 min-h-[260px] flex flex-col justify-end">
                    <div className={cn(
                      "w-12 h-12 rounded-xl flex items-center justify-center mb-3 transition-all duration-300",
                      selectedBudget === option.id ? "bg-white/30" : "bg-white/20 group-hover:bg-white/30"
                    )}>
                      <option.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-1">{option.label}</h3>
                    <p className="text-sm text-white/70 mb-3">{option.description}</p>
                    
                    {/* Price range badge */}
                    <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 w-fit mb-3">
                      <span className="text-xs font-semibold text-white">{option.priceRange}</span>
                    </div>
                    
                    {/* Highlights */}
                    <div className="flex flex-wrap gap-1">
                      {option.highlights.map((h) => (
                        <span key={h} className="text-xs text-white/60 bg-white/10 rounded-full px-2 py-0.5">
                          {h}
                        </span>
                      ))}
                    </div>
                    
                    {selectedBudget === option.id && (
                      <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-lg animate-scale-in">
                        <Check className="w-5 h-5 text-primary" />
                      </div>
                    )}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Step 2: Transport */}
          <div className={cn(
            "mb-16 transition-all duration-500",
            step >= 2 ? "opacity-100 translate-y-0" : "opacity-30 translate-y-4 pointer-events-none"
          )}>
            <div className="flex items-center gap-4 mb-8">
              <span className={cn(
                "w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg transition-colors",
                selectedTransport ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
              )}>
                {selectedTransport ? <Check className="w-6 h-6" /> : '2'}
              </span>
              <div>
                <h2 className="text-2xl font-bold">Transport Style</h2>
                <p className="text-muted-foreground text-sm">How do you like to get around?</p>
              </div>
            </div>
            
            <div className="grid sm:grid-cols-3 gap-6">
              {transportOptions.map((option, index) => (
                <button
                  key={option.id}
                  onClick={() => setSelectedTransport(option.id)}
                  className={cn(
                    'group relative overflow-hidden rounded-3xl text-left transition-all duration-300 border-2',
                    selectedTransport === option.id
                      ? 'border-primary shadow-2xl scale-[1.02] ring-4 ring-primary/20'
                      : 'border-transparent hover:border-primary/50 hover:shadow-xl hover:scale-[1.01]'
                  )}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url(${option.image})` }}
                  />
                  <div className={cn(
                    'absolute inset-0 transition-all duration-300',
                    selectedTransport === option.id 
                      ? 'bg-gradient-to-t from-primary/90 via-primary/60 to-primary/30'
                      : 'bg-gradient-to-t from-black/80 via-black/40 to-transparent'
                  )} />
                  
                  <div className="relative p-6 min-h-[200px] flex flex-col justify-end">
                    <div className="flex items-center gap-2 mb-3">
                      <div className={cn(
                        "w-10 h-10 rounded-xl flex items-center justify-center transition-all",
                        selectedTransport === option.id ? "bg-white/30" : "bg-white/20 group-hover:bg-white/30"
                      )}>
                        <option.icon className="w-5 h-5 text-white" />
                      </div>
                      {option.eco && (
                        <span className="bg-green-500/80 text-white text-xs font-medium px-2 py-0.5 rounded-full">
                          🌿 Eco
                        </span>
                      )}
                    </div>
                    <h3 className="text-lg font-bold text-white mb-1">{option.label}</h3>
                    <p className="text-sm text-white/70">{option.description}</p>
                    
                    {selectedTransport === option.id && (
                      <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-lg animate-scale-in">
                        <Check className="w-5 h-5 text-primary" />
                      </div>
                    )}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Step 3: Stay */}
          <div className={cn(
            "mb-16 transition-all duration-500",
            step >= 3 ? "opacity-100 translate-y-0" : "opacity-30 translate-y-4 pointer-events-none"
          )}>
            <div className="flex items-center gap-4 mb-8">
              <span className={cn(
                "w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg transition-colors",
                selectedStay ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
              )}>
                {selectedStay ? <Check className="w-6 h-6" /> : '3'}
              </span>
              <div>
                <h2 className="text-2xl font-bold">Stay Preference</h2>
                <p className="text-muted-foreground text-sm">Where do you like to rest?</p>
              </div>
            </div>
            
            <div className="grid sm:grid-cols-3 gap-6">
              {stayOptions.map((option, index) => (
                <button
                  key={option.id}
                  onClick={() => setSelectedStay(option.id)}
                  className={cn(
                    'group relative overflow-hidden rounded-3xl text-left transition-all duration-300 border-2',
                    selectedStay === option.id
                      ? 'border-primary shadow-2xl scale-[1.02] ring-4 ring-primary/20'
                      : 'border-transparent hover:border-primary/50 hover:shadow-xl hover:scale-[1.01]'
                  )}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url(${option.image})` }}
                  />
                  <div className={cn(
                    'absolute inset-0 transition-all duration-300',
                    selectedStay === option.id 
                      ? 'bg-gradient-to-t from-primary/90 via-primary/60 to-primary/30'
                      : 'bg-gradient-to-t from-black/80 via-black/40 to-transparent'
                  )} />
                  
                  <div className="relative p-6 min-h-[220px] flex flex-col justify-end">
                    <div className={cn(
                      "w-10 h-10 rounded-xl flex items-center justify-center mb-3 transition-all",
                      selectedStay === option.id ? "bg-white/30" : "bg-white/20 group-hover:bg-white/30"
                    )}>
                      <option.icon className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-1">{option.label}</h3>
                    <p className="text-sm text-white/70 mb-3">{option.description}</p>
                    
                    {/* Features */}
                    <div className="flex flex-wrap gap-1">
                      {option.features.map((f) => (
                        <span key={f} className="text-xs text-white/60 bg-white/10 rounded-full px-2 py-0.5">
                          {f}
                        </span>
                      ))}
                    </div>
                    
                    {selectedStay === option.id && (
                      <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-lg animate-scale-in">
                        <Check className="w-5 h-5 text-primary" />
                      </div>
                    )}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Step 4: Pace */}
          <div className={cn(
            "mb-16 transition-all duration-500",
            step >= 4 ? "opacity-100 translate-y-0" : "opacity-30 translate-y-4 pointer-events-none"
          )}>
            <div className="flex items-center gap-4 mb-8">
              <span className={cn(
                "w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg transition-colors",
                selectedPace ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
              )}>
                {selectedPace ? <Check className="w-6 h-6" /> : '4'}
              </span>
              <div>
                <h2 className="text-2xl font-bold">Travel Pace</h2>
                <p className="text-muted-foreground text-sm">How packed should your days be?</p>
              </div>
            </div>
            
            <div className="grid sm:grid-cols-3 gap-6">
              {paceOptions.map((option, index) => (
                <button
                  key={option.id}
                  onClick={() => setSelectedPace(option.id)}
                  className={cn(
                    'group relative overflow-hidden rounded-2xl text-left transition-all duration-300 border-2 p-6',
                    selectedPace === option.id
                      ? 'border-primary bg-primary/10 shadow-xl scale-[1.02]'
                      : 'border-border bg-card hover:border-primary/50 hover:shadow-lg hover:scale-[1.01]'
                  )}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-center gap-4">
                    <div className={cn(
                      "w-12 h-12 rounded-xl flex items-center justify-center transition-all",
                      selectedPace === option.id ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground group-hover:bg-primary/20"
                    )}>
                      <option.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">{option.label}</h3>
                      <p className="text-sm text-muted-foreground">{option.description}</p>
                    </div>
                    {selectedPace === option.id && (
                      <div className="ml-auto w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                        <Check className="w-4 h-4 text-primary-foreground" />
                      </div>
                    )}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Results */}
          {showResults && isComplete && (
            <div className="animate-fade-in">
              <div className="border-t border-border pt-12">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold">Your Perfect Matches</h2>
                    <p className="text-muted-foreground text-sm">Based on your travel style</p>
                  </div>
                </div>
                
                {/* Selected summary */}
                <div className="flex flex-wrap gap-3 mb-8">
                  <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                    {budgetOptions.find(b => b.id === selectedBudget)?.label} Budget
                  </span>
                  <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                    {transportOptions.find(t => t.id === selectedTransport)?.label}
                  </span>
                  <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                    {stayOptions.find(s => s.id === selectedStay)?.label} Stays
                  </span>
                  <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                    {paceOptions.find(p => p.id === selectedPace)?.label} Pace
                  </span>
                </div>
                
                <div className="grid sm:grid-cols-3 gap-6 mb-10">
                  {recommendedItineraries.map((it) => (
                    <ItineraryCard key={it.id} itinerary={it} />
                  ))}
                </div>

                <GlassCard className="text-center bg-gradient-to-r from-primary/5 to-secondary/5 border-primary/20">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-primary to-secondary flex items-center justify-center mx-auto mb-4">
                    <Sparkles className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">Want a Personalized Plan?</h3>
                  <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
                    Book a 30-minute call and we'll create a custom itinerary 
                    matching your {budgetOptions.find(b => b.id === selectedBudget)?.label.toLowerCase()} budget, 
                    {transportOptions.find(t => t.id === selectedTransport)?.label.toLowerCase()}, 
                    and {stayOptions.find(s => s.id === selectedStay)?.label.toLowerCase()} stays.
                  </p>
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Button asChild size="lg" className="rounded-full px-8 shadow-lg">
                      <a
                        href={`https://wa.me/393479249860?text=Hi%20EuroMitra!%20I%20want%20a%20${selectedBudget}%20budget%20trip%20with%20${selectedTransport}%20transport,%20${selectedStay}%20stays,%20and%20${selectedPace}%20pace.`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <MessageCircle className="w-5 h-5 mr-2" />
                        Book a Call – €15
                      </a>
                    </Button>
                    <Button asChild variant="outline" size="lg" className="rounded-full px-8">
                      <Link to="/itineraries">
                        Browse All 34 Itineraries
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