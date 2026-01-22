import { MessageSquare, Video, FileText, ArrowRight } from 'lucide-react';

const steps = [
  {
    icon: MessageSquare,
    step: '01',
    title: 'Choose Your Vibe',
    description: 'Tell us your destination, dates, budget tier, and travel style. City walks? Nature escapes? Both?',
    color: 'bg-[#17A2A6]',
  },
  {
    icon: Video,
    step: '02',
    title: '30-min Video Call',
    description: 'We hop on a quick call to understand your preferences, answer questions, and finalize details.',
    color: 'bg-[#D6A84A]',
  },
  {
    icon: FileText,
    step: '03',
    title: 'Get Your Itinerary',
    description: 'Receive a complete day-by-day plan with map links, budget breakdown, and local tips.',
    color: 'bg-[#0B1F3B]',
  },
];

export function HowItWorks() {
  return (
    <section className="section relative overflow-hidden">
      {/* Background with image */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1920)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/50 to-background" />
      </div>
      
      <div className="container-wide relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block text-primary font-semibold tracking-wider uppercase text-sm mb-4">Simple Process</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">How It Works</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            From first message to ready-to-go itinerary in three simple steps.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Connection Line - Desktop */}
          <div className="hidden md:block absolute top-[60px] left-[20%] right-[20%] h-1 bg-gradient-to-r from-[#17A2A6] via-[#D6A84A] to-[#0B1F3B] rounded-full" />

          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {steps.map((step, index) => (
              <div key={step.title} className="relative text-center group">
                {/* Step card */}
                <div className="relative mb-8">
                  {/* Icon container */}
                  <div className={`w-24 h-24 ${step.color} rounded-3xl flex items-center justify-center mx-auto shadow-xl group-hover:scale-110 transition-transform duration-300`}>
                    <step.icon className="w-10 h-10 text-white" />
                  </div>
                  {/* Step number badge */}
                  <span className="absolute -top-3 -right-3 md:right-[calc(50%-4rem)] w-10 h-10 rounded-full bg-background border-2 border-primary text-primary text-sm font-bold flex items-center justify-center shadow-lg">
                    {step.step}
                  </span>
                </div>

                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed max-w-xs mx-auto">{step.description}</p>
                
                {/* Arrow for mobile */}
                {index < steps.length - 1 && (
                  <div className="md:hidden flex justify-center my-6">
                    <ArrowRight className="w-6 h-6 text-primary rotate-90" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}