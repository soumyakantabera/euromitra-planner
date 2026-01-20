import { Star, Quote } from 'lucide-react';
import { GlassCard } from '@/components/ui/GlassCard';

const testimonials = [
  {
    name: 'Sarah M.',
    location: 'London, UK',
    text: 'The Florence itinerary was perfect. Every walk, every restaurant, every view was exactly what we wanted. The Fiesole escape was a highlight!',
    rating: 5,
  },
  {
    name: 'Rajesh P.',
    location: 'Mumbai, India',
    text: 'Finally, a travel planner who understands both budget and experience. The Kyoto trip was mindful, walkable, and memorable.',
    rating: 5,
  },
  {
    name: 'Emma L.',
    location: 'Sydney, Australia',
    text: 'The 30-minute call felt like chatting with a friend. Got my complete Switzerland itinerary the same day. Incredible value.',
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section className="section bg-background">
      <div className="container-wide">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Travelers Say</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Real stories from people who explored with our itineraries.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <GlassCard key={testimonial.name} className="relative">
              <Quote className="absolute top-6 right-6 w-8 h-8 text-primary/20" />
              
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-secondary text-secondary" />
                ))}
              </div>
              
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                "{testimonial.text}"
              </p>
              
              <div>
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.location}</p>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
