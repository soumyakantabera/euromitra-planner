import { Link } from 'react-router-dom';
import { ArrowRight, Map, Play, Compass, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import euroMitraLogo from '@/assets/euromitra-logo.svg';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Video-style animated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0B1F3B] via-[#17A2A6]/80 to-[#D6A84A]/60" />
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1920)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            mixBlendMode: 'overlay',
          }}
        />
        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>
      
      {/* Floating destination cards */}
      <div className="absolute top-20 right-10 hidden lg:block animate-float">
        <div className="glass rounded-2xl p-4 flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl overflow-hidden">
            <img src="https://images.unsplash.com/photo-1541370976299-4d24ebbc9077?w=200" alt="Florence" className="w-full h-full object-cover" />
          </div>
          <div>
            <p className="text-white font-semibold text-sm">Florence</p>
            <p className="text-white/60 text-xs">5 days • City + Hills</p>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-32 left-10 hidden lg:block animate-float animation-delay-200">
        <div className="glass rounded-2xl p-4 flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl overflow-hidden">
            <img src="https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=200" alt="Kyoto" className="w-full h-full object-cover" />
          </div>
          <div>
            <p className="text-white font-semibold text-sm">Kyoto</p>
            <p className="text-white/60 text-xs">7 days • Temple + Nature</p>
          </div>
        </div>
      </div>

      <div className="absolute top-1/3 right-1/4 hidden xl:block animate-float animation-delay-300">
        <div className="glass rounded-2xl p-4 flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl overflow-hidden">
            <img src="https://images.unsplash.com/photo-1530841377377-3ff06c0ca713?w=200" alt="Swiss Alps" className="w-full h-full object-cover" />
          </div>
          <div>
            <p className="text-white font-semibold text-sm">Swiss Alps</p>
            <p className="text-white/60 text-xs">10 days • Mountains</p>
          </div>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-1/4 left-20 w-24 h-24 rounded-full bg-secondary/20 blur-2xl animate-float" />
      <div className="absolute bottom-1/4 right-32 w-40 h-40 rounded-full bg-primary/20 blur-3xl animate-float animation-delay-200" />
      <div className="absolute top-1/2 left-1/3 w-16 h-16 rounded-full bg-[#D6A84A]/30 blur-xl animate-float animation-delay-300" />
      
      <div className="container-wide relative z-10 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo */}
          <div className="mb-8 animate-fade-in">
            <img src={euroMitraLogo} alt="EuroMitra" className="w-24 h-24 mx-auto drop-shadow-2xl" />
          </div>

          {/* Main Title */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight animate-fade-in animation-delay-100">
            <span className="block">City | Nature</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#17A2A6] to-[#D6A84A]">
              Travel Planning
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-white/80 mb-4 max-w-2xl mx-auto animate-fade-in animation-delay-200">
            Personalized itineraries in 30 minutes.
          </p>
          <p className="text-lg text-white/60 mb-12 max-w-xl mx-auto animate-fade-in animation-delay-200">
            Walkable routes • Smart transport • Budget tiers • Sustainable travel
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-in animation-delay-300">
            <Button
              asChild
              size="lg"
              className="rounded-full px-10 py-7 text-lg font-semibold shadow-2xl glow-hover bg-gradient-to-r from-primary to-[#17A2A6] hover:from-primary/90 hover:to-[#17A2A6]/90"
            >
              <a
                href="https://wa.me/393479249860?text=Hi%20EuroMitra!%20I%20want%20to%20book%20a%20planning%20call."
                target="_blank"
                rel="noopener noreferrer"
              >
                <Play className="w-5 h-5 mr-2 fill-current" />
                Book a 30-min Call
              </a>
            </Button>
            
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full px-10 py-7 text-lg font-semibold bg-white/10 border-white/30 text-white hover:bg-white/20 hover:text-white backdrop-blur-sm"
            >
              <Link to="/itineraries">
                <Map className="w-5 h-5 mr-2" />
                Browse 34 Itineraries
              </Link>
            </Button>
          </div>

          {/* Feature pills */}
          <div className="flex flex-wrap justify-center gap-3 mb-12 animate-fade-in animation-delay-300">
            <div className="glass rounded-full px-5 py-2.5 flex items-center gap-2">
              <Compass className="w-4 h-4 text-secondary" />
              <span className="text-white/90 text-sm font-medium">Based in Florence & Kolkata</span>
            </div>
            <div className="glass rounded-full px-5 py-2.5 flex items-center gap-2">
              <MapPin className="w-4 h-4 text-secondary" />
              <span className="text-white/90 text-sm font-medium">3 Continents</span>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-4 gap-6 max-w-2xl mx-auto animate-fade-in animation-delay-300">
            <div className="text-center glass rounded-2xl p-4">
              <p className="text-3xl font-bold text-white">34+</p>
              <p className="text-xs text-white/60 mt-1">Itineraries</p>
            </div>
            <div className="text-center glass rounded-2xl p-4">
              <p className="text-3xl font-bold text-white">15+</p>
              <p className="text-xs text-white/60 mt-1">Destinations</p>
            </div>
            <div className="text-center glass rounded-2xl p-4">
              <p className="text-3xl font-bold text-white">30</p>
              <p className="text-xs text-white/60 mt-1">Min Calls</p>
            </div>
            <div className="text-center glass rounded-2xl p-4">
              <p className="text-3xl font-bold text-white">€15</p>
              <p className="text-xs text-white/60 mt-1">Starting</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-white/50 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
}