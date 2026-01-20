import { MessageSquare, Video, FileText } from 'lucide-react';

const steps = [
  {
    icon: MessageSquare,
    step: '01',
    title: 'Choose Your Vibe',
    description: 'Tell us your destination, dates, budget tier, and travel style. City walks? Nature escapes? Both?',
  },
  {
    icon: Video,
    step: '02',
    title: '30-min Video Call',
    description: 'We hop on a quick call to understand your preferences, answer questions, and finalize details.',
  },
  {
    icon: FileText,
    step: '03',
    title: 'Get Your Itinerary',
    description: 'Receive a complete day-by-day plan with map links, budget breakdown, and local tips.',
  },
];

export function HowItWorks() {
  return (
    <section className="section nature-gradient">
      <div className="container-wide">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From first message to ready-to-go itinerary in three simple steps.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Connection Line */}
          <div className="hidden md:block absolute top-24 left-1/2 -translate-x-1/2 w-[70%] h-0.5 bg-primary/20" />

          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {steps.map((step, index) => (
              <div key={step.title} className="relative text-center">
                {/* Step Number */}
                <div className="relative inline-block mb-6">
                  <div className="w-20 h-20 rounded-2xl bg-card shadow-lg flex items-center justify-center mx-auto border border-border/50">
                    <step.icon className="w-8 h-8 text-primary" />
                  </div>
                  <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-bold flex items-center justify-center">
                    {step.step}
                  </span>
                </div>

                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
