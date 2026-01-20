import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Map } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 hero-gradient" />
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1920)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          mixBlendMode: 'overlay',
        }}
      />
      
      {/* Floating Elements */}
      <div className="absolute top-1/4 left-10 w-20 h-20 rounded-full bg-secondary/20 blur-xl animate-float" />
      <div className="absolute bottom-1/3 right-20 w-32 h-32 rounded-full bg-primary/20 blur-2xl animate-float animation-delay-200" />
      
      <div className="container-wide relative z-10 py-20">
        <div className="max-w-3xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-8 animate-fade-in">
            <Sparkles className="w-4 h-4 text-secondary" />
            <span className="text-sm font-medium text-white/90">Based in Florence & Kolkata</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight animate-fade-in animation-delay-100">
            City | Nature itineraries
            <br />
            <span className="text-secondary">in 30 minutes</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-white/80 mb-10 max-w-xl mx-auto animate-fade-in animation-delay-200">
            Walkable routes, smart transport, budget tiers—ready after a quick video call. 
            Cityscapes + Nature. Sustainable. Attainable.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in animation-delay-300">
            <Button
              asChild
              size="lg"
              className="rounded-full px-8 py-6 text-base font-semibold shadow-lg glow-hover"
            >
              <a
                href="https://wa.me/393479249860?text=Hi%20EuroMitra!%20I%20want%20to%20book%20a%20planning%20call."
                target="_blank"
                rel="noopener noreferrer"
              >
                Book a 30-min Call
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </Button>
            
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full px-8 py-6 text-base font-semibold bg-white/10 border-white/30 text-white hover:bg-white/20 hover:text-white"
            >
              <Link to="/itineraries">
                <Map className="w-5 h-5 mr-2" />
                Explore Itineraries
              </Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-3 gap-8 max-w-lg mx-auto animate-fade-in animation-delay-300">
            <div className="text-center">
              <p className="text-3xl font-bold text-white">9+</p>
              <p className="text-sm text-white/60">Destinations</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-white">3</p>
              <p className="text-sm text-white/60">Continents</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-white">30</p>
              <p className="text-sm text-white/60">Min Calls</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
