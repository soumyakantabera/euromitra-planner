import { ArrowRight, MessageCircle, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import euroMitraLogo from '@/assets/euromitra-logo.svg';

export function CTASection() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0B1F3B] via-[#17A2A6] to-[#D6A84A]" />
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1920)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          mixBlendMode: 'overlay',
        }}
      />
      
      {/* Floating elements */}
      <div className="absolute top-20 left-20 w-32 h-32 rounded-full bg-white/10 blur-2xl animate-float" />
      <div className="absolute bottom-20 right-20 w-40 h-40 rounded-full bg-secondary/20 blur-3xl animate-float animation-delay-200" />

      <div className="container-wide relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Logo */}
          <img src={euroMitraLogo} alt="EuroMitra" className="w-20 h-20 mx-auto mb-8 drop-shadow-2xl" />
          
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-6">
            <Sparkles className="w-4 h-4 text-secondary" />
            <span className="text-sm font-medium text-white">Start Your Adventure</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Ready to Plan Your Trip?
          </h2>
          <p className="text-xl text-white/80 mb-10 max-w-xl mx-auto">
            Book a 30-minute call and get your personalized itinerary. 
            City walks, nature escapes, and everything in between.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="rounded-full px-10 py-7 text-lg font-semibold shadow-2xl bg-white text-[#0B1F3B] hover:bg-white/90"
            >
              <a
                href="https://wa.me/393479249860?text=Hi%20EuroMitra!%20I%20want%20to%20book%20a%20planning%20call."
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Book on WhatsApp
              </a>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full px-10 py-7 text-lg font-semibold bg-transparent border-white/30 text-white hover:bg-white/10 hover:text-white"
            >
              <Link to="/budget-style">
                Try Quick Quiz
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
          
          {/* Trust badges */}
          <div className="mt-12 flex flex-wrap justify-center gap-6 text-white/60 text-sm">
            <span className="flex items-center gap-2">
              <span className="text-xl">🇮🇹</span> Based in Florence
            </span>
            <span className="flex items-center gap-2">
              <span className="text-xl">🇮🇳</span> Based in Kolkata
            </span>
            <span className="flex items-center gap-2">
              <span className="text-xl">⭐</span> 5-star reviews
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}