"use client";

import { HeroSection } from "@/components/sections/hero-section";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Users } from "lucide-react";
import Link from "next/link";
import { ScrollReveal } from "@/components/scroll-reveal";

export default function ManagementConsulting() {
  return (
    <main className="min-h-screen">
      <HeroSection
        title="Management Consulting"
        subtitle="Strategic business advisory services for UAE companies"
        imageUrl="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80"
        imageAlt="Management Consulting"
      />

      <ScrollReveal>
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Strategic Business Solutions</h2>
                <p className="text-lg mb-6 text-muted-foreground">
                  Expert consulting services to help your business grow and succeed in the
                  UAE market.
                </p>
                <ul className="space-y-4">
                  {[
                    "Strategic Planning",
                    "Business Process Optimization",
                    "Market Entry Strategy",
                    "Risk Management",
                    "Performance Improvement",
                  ].map((service, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary" />
                      <span>{service}</span>
                    </li>
                  ))}
                </ul>
                <Button size="lg" className="mt-8" asChild>
                  <Link href="/contact">
                    Get Started
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
              <Card className="p-8">
                <Users className="h-12 w-12 text-primary mb-6" />
                <h3 className="text-2xl font-bold mb-6">Why Choose Our Consulting?</h3>
                <ul className="space-y-6">
                  {[
                    {
                      title: "Industry Expertise",
                      description: "Deep understanding of UAE market dynamics",
                    },
                    {
                      title: "Customized Solutions",
                      description: "Tailored strategies for your business",
                    },
                    {
                      title: "Proven Results",
                      description: "Track record of successful implementations",
                    },
                  ].map((item, index) => (
                    <li key={index} className="hover-lift">
                      <h4 className="font-semibold mb-2">{item.title}</h4>
                      <p className="text-muted-foreground">{item.description}</p>
                    </li>
                  ))}
                </ul>
              </Card>
            </div>
          </div>
        </section>
      </ScrollReveal>
    </main>
  );
}