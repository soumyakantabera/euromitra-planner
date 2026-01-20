import { useState } from 'react';
import { Mail, Phone, MessageCircle, Clock, Send } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { GlassCard } from '@/components/ui/GlassCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { useToast } from '@/hooks/use-toast';

const faqs = [
  {
    question: 'What do I receive after the call?',
    answer: 'You receive a complete PDF/Doc itinerary with day-by-day plans, Google Maps links for all locations, budget breakdown, transport recommendations, stay suggestions, restaurant zones, photo spots, packing tips, and sustainability guidance. Usually delivered within 24-48 hours after the call.',
  },
  {
    question: 'Can you plan for students?',
    answer: 'Absolutely! We have a special Group/Family/Student package that includes student-friendly alternatives, budget splits, hostel recommendations, and tips for stretching your travel budget while still having amazing experiences.',
  },
  {
    question: 'Can you include nature escapes near cities?',
    answer: 'Yes, this is our specialty! Every itinerary balances city exploration with half-day or full-day nature escapes. Whether it\'s Tuscan hills from Florence, forests from Paris, or water towns from Shanghai - we always include nature options.',
  },
  {
    question: 'Do you book hotels/transport or only plan?',
    answer: 'We focus on planning and guidance. Our Deep Plan package includes booking recommendations and guidance on what to book first, but we don\'t make reservations on your behalf. This keeps costs low and gives you full control.',
  },
  {
    question: 'How soon can I book a call?',
    answer: 'Usually within 2-3 days. Send us a WhatsApp message with your destination and preferred dates, and we\'ll reply within 24 hours with available slots.',
  },
  {
    question: 'What destinations do you cover?',
    answer: 'We specialize in Europe, India, and China/Asia. Our core destinations include Italy, France, Switzerland, Germany, Spain, India (all regions), China, Japan, and Southeast Asia. If you have a specific destination in mind, just ask!',
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    destination: '',
    message: '',
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct WhatsApp message
    const message = `Hi EuroMitra! 

Name: ${formData.name}
Email: ${formData.email}
Destination: ${formData.destination}

Message: ${formData.message}`;
    
    const whatsappUrl = `https://wa.me/393479249860?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    
    toast({
      title: 'Redirecting to WhatsApp',
      description: 'Complete your message there!',
    });
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-20 hero-gradient overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1521295121783-8a321d551ad2?w=1920)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          mixBlendMode: 'overlay',
        }} />
        <div className="container-wide relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Get in Touch
            </h1>
            <p className="text-lg text-white/80">
              Questions about our services? Ready to book a call? 
              We're here to help plan your next adventure.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <GlassCard>
                <h2 className="text-2xl font-bold mb-6">Send a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Your name"
                        required
                        className="mt-1.5"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="your@email.com"
                        required
                        className="mt-1.5"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="destination">Destination(s)</Label>
                    <Input
                      id="destination"
                      value={formData.destination}
                      onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                      placeholder="e.g., Florence, Paris, Tokyo..."
                      className="mt-1.5"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about your trip plans, questions, or how we can help..."
                      rows={5}
                      required
                      className="mt-1.5"
                    />
                  </div>

                  <Button type="submit" className="w-full rounded-full" size="lg">
                    <Send className="w-4 h-4 mr-2" />
                    Send via WhatsApp
                  </Button>
                </form>
              </GlassCard>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <GlassCard>
                <h3 className="font-semibold mb-4">Contact Details</h3>
                <div className="space-y-4">
                  <a
                    href="https://wa.me/393479249860"
                    className="flex items-center gap-4 p-4 rounded-xl bg-muted/50 hover:bg-muted transition-colors"
                  >
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <MessageCircle className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">WhatsApp (Preferred)</p>
                      <p className="text-sm text-muted-foreground">+39 347 924 9860</p>
                    </div>
                  </a>

                  <a
                    href="mailto:hello@euromitra.com"
                    className="flex items-center gap-4 p-4 rounded-xl bg-muted/50 hover:bg-muted transition-colors"
                  >
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-sm text-muted-foreground">hello@euromitra.com</p>
                    </div>
                  </a>
                </div>
              </GlassCard>

              <GlassCard>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Response Time</h3>
                    <p className="text-sm text-muted-foreground">
                      We typically respond within 24 hours. WhatsApp messages 
                      get faster responses than email.
                    </p>
                  </div>
                </div>
              </GlassCard>

              {/* Quick Booking */}
              <GlassCard className="bg-primary/5 border-primary/20">
                <h3 className="font-semibold mb-3">Quick Book</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Skip the form and book directly on WhatsApp.
                </p>
                <Button asChild className="w-full rounded-full">
                  <a
                    href="https://wa.me/393479249860?text=Hi%20EuroMitra!%20I%20want%20to%20book%20a%20planning%20call.%20Destination:%20___.%20Dates:%20___.%20Budget:%20Cheap/Mid/Luxury."
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Book a 30-min Call
                  </a>
                </Button>
              </GlassCard>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section bg-muted/30">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-center mb-8">Frequently Asked Questions</h2>
            <GlassCard>
              <Accordion type="single" collapsible className="space-y-2">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`faq-${index}`} className="border-b last:border-b-0">
                    <AccordionTrigger className="text-left hover:no-underline py-4">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-4">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </GlassCard>
          </div>
        </div>
      </section>
    </Layout>
  );
}
