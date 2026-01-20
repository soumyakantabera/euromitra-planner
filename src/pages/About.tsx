import { MapPin, Heart, Globe, MessageCircle } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { GlassCard } from '@/components/ui/GlassCard';
import { Button } from '@/components/ui/button';

export default function About() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-20 hero-gradient overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1920)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          mixBlendMode: 'overlay',
        }} />
        <div className="container-wide relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              About EuroMitra
            </h1>
            <p className="text-lg text-white/80">
              Your planner friend from Florence and Kolkata. 
              We make travel planning approachable, local-feeling, and efficient.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="section">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto">
            <GlassCard className="p-8 md:p-12">
              <h2 className="text-2xl font-bold mb-6">Our Story</h2>
              <div className="prose prose-lg text-muted-foreground space-y-4">
                <p>
                  EuroMitra started with a simple observation: travel planning is overwhelming. 
                  Too many options, conflicting advice, and generic recommendations that don't match 
                  your actual travel style.
                </p>
                <p>
                  We're based in two cities that couldn't be more different—Florence with its 
                  Renaissance perfection and Kolkata with its chaotic charm. This gives us a 
                  unique perspective on how travel works across cultures.
                </p>
                <p>
                  Our approach is simple: a quick video call where we actually talk to you, 
                  understand your preferences, and create a personalized itinerary that balances 
                  city exploration with nature escapes.
                </p>
                <p>
                  No chatbots. No generic templates. Just two travel enthusiasts who believe 
                  the best trips are walkable, sustainable, and attainable.
                </p>
              </div>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section bg-muted/30">
        <div className="container-wide">
          <h2 className="text-2xl font-bold text-center mb-12">What We Stand For</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <GlassCard className="text-center">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Heart className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Personal Touch</h3>
              <p className="text-sm text-muted-foreground">
                Every itinerary is crafted after understanding your unique preferences. 
                No two trips are the same.
              </p>
            </GlassCard>

            <GlassCard className="text-center">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Globe className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Sustainable Focus</h3>
              <p className="text-sm text-muted-foreground">
                Walk-first routes, public transport, and local experiences. 
                Lower impact, richer memories.
              </p>
            </GlassCard>

            <GlassCard className="text-center">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Local Knowledge</h3>
              <p className="text-sm text-muted-foreground">
                We live in Florence and Kolkata. Our recommendations come from 
                actual local experience.
              </p>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="section">
        <div className="container-wide">
          <h2 className="text-2xl font-bold text-center mb-12">Where We're Based</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <GlassCard className="overflow-hidden p-0">
              <div className="h-48 bg-cover bg-center" style={{
                backgroundImage: 'url(https://images.unsplash.com/photo-1541370976299-4d24ebbc9077?w=800)'
              }} />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Florence, Italy</h3>
                <p className="text-sm text-muted-foreground">
                  Our European base. Renaissance art, Tuscan hills, 
                  and the best gelato you'll ever taste.
                </p>
              </div>
            </GlassCard>

            <GlassCard className="overflow-hidden p-0">
              <div className="h-48 bg-cover bg-center" style={{
                backgroundImage: 'url(https://images.unsplash.com/photo-1558431382-27e303142255?w=800)'
              }} />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Kolkata, India</h3>
                <p className="text-sm text-muted-foreground">
                  Our Asian base. Colonial heritage, incredible street food, 
                  and the warmest hospitality.
                </p>
              </div>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section hero-gradient">
        <div className="container-wide">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Tell Us Your Trip. We'll Design It.
            </h2>
            <p className="text-lg text-white/80 mb-8">
              Ready for a personalized travel experience? Let's chat.
            </p>
            <Button asChild size="lg" className="rounded-full px-8">
              <a
                href="https://wa.me/393479249860?text=Hi%20EuroMitra!%20I%20want%20to%20plan%20my%20next%20trip."
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Start a Conversation
              </a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
