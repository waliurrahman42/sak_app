"use client";

import { Card } from "@/components/ui/card";
import { Quote } from "lucide-react";
import Image from "next/image";
import { ScrollReveal } from "@/components/scroll-reveal";

const testimonials = [
  {
    name: "Sarah Johnson",
    position: "CEO, TechCorp International",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80",
    quote: "SAK Consulting has been instrumental in our company's financial growth. Their expertise in both UAE and US markets has given us a competitive edge.",
  },
  {
    name: "Michael Chen",
    position: "CFO, Global Innovations Ltd",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80",
    quote: "The team's attention to detail and proactive approach to tax planning has saved us both time and money. Highly recommended for international businesses.",
  },
  {
    name: "Emma Williams",
    position: "Director, Emirates Trading Co",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80",
    quote: "Their understanding of UAE tax regulations and commitment to client success sets them apart. We've seen remarkable improvements in our financial processes.",
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Client Testimonials</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hear what our clients have to say about their experience working with us
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <ScrollReveal key={index} className={`animate-delay-${index * 100}`}>
              <Card className="p-8 hover:shadow-lg transition-shadow relative hover-lift">
                <Quote className="h-10 w-10 text-primary/20 absolute top-6 right-6" />
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative h-16 w-16 rounded-full overflow-hidden">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                    <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                  </div>
                </div>
                <blockquote className="text-muted-foreground italic">
                  "{testimonial.quote}"
                </blockquote>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}