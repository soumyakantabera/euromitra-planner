import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { GlassCard } from '@/components/ui/GlassCard';
import { useState } from 'react';

const testimonials = [
  {
    name: 'Sarah M.',
    location: 'London, UK',
    text: 'The Florence itinerary was perfect. Every walk, every restaurant, every view was exactly what we wanted. The Fiesole escape was a highlight!',
    rating: 5,
    trip: 'Florence + Tuscany',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100',
  },
  {
    name: 'Rajesh P.',
    location: 'Mumbai, India',
    text: 'Finally, a travel planner who understands both budget and experience. The Kyoto trip was mindful, walkable, and memorable.',
    rating: 5,
    trip: 'Kyoto + Nara',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100',
  },
  {
    name: 'Emma L.',
    location: 'Sydney, Australia',
    text: 'The 30-minute call felt like chatting with a friend. Got my complete Switzerland itinerary the same day. Incredible value.',
    rating: 5,
    trip: 'Swiss Alps',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100',
  },
];

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="section bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container-wide relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-secondary/10 rounded-full px-4 py-2 mb-6">
            <Star className="w-4 h-4 text-secondary fill-secondary" />
            <span className="text-sm font-medium text-secondary">Trusted by Travelers</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">What Travelers Say</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Real stories from people who explored with our itineraries.
          </p>
        </div>

        {/* Desktop grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <GlassCard key={testimonial.name} className="relative group hover:shadow-xl transition-shadow duration-300">
              <Quote className="absolute top-6 right-6 w-10 h-10 text-primary/10 group-hover:text-primary/20 transition-colors" />
              
              {/* Rating stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />
                ))}
              </div>
              
              {/* Trip tag */}
              <span className="inline-block bg-primary/10 text-primary text-xs font-medium px-3 py-1 rounded-full mb-4">
                {testimonial.trip}
              </span>
              
              <p className="text-muted-foreground leading-relaxed mb-6">
                "{testimonial.text}"
              </p>
              
              {/* Author */}
              <div className="flex items-center gap-3">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-primary/20"
                />
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>

        {/* Mobile carousel */}
        <div className="md:hidden relative">
          <GlassCard className="relative">
            <Quote className="absolute top-6 right-6 w-10 h-10 text-primary/10" />
            
            <div className="flex gap-1 mb-4">
              {Array.from({ length: testimonials[activeIndex].rating }).map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />
              ))}
            </div>
            
            <span className="inline-block bg-primary/10 text-primary text-xs font-medium px-3 py-1 rounded-full mb-4">
              {testimonials[activeIndex].trip}
            </span>
            
            <p className="text-muted-foreground leading-relaxed mb-6">
              "{testimonials[activeIndex].text}"
            </p>
            
            <div className="flex items-center gap-3">
              <img 
                src={testimonials[activeIndex].image} 
                alt={testimonials[activeIndex].name}
                className="w-12 h-12 rounded-full object-cover border-2 border-primary/20"
              />
              <div>
                <p className="font-semibold">{testimonials[activeIndex].name}</p>
                <p className="text-sm text-muted-foreground">{testimonials[activeIndex].location}</p>
              </div>
            </div>
          </GlassCard>
          
          {/* Navigation */}
          <div className="flex justify-center items-center gap-4 mt-6">
            <button 
              onClick={prevTestimonial}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-colors ${
                    index === activeIndex ? 'bg-primary' : 'bg-border'
                  }`}
                />
              ))}
            </div>
            <button 
              onClick={nextTestimonial}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}