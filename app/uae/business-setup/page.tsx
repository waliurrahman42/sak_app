"use client";

import { HeroSection } from "@/components/sections/hero-section";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Building2 } from "lucide-react";
import Link from "next/link";
import { ScrollReveal } from "@/components/scroll-reveal";

export default function BusinessSetup() {
  return (
    <main className="min-h-screen">
      <HeroSection
        title="UAE Business Setup Services"
        subtitle="Complete business establishment solutions in the UAE"
        imageUrl="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80"
        imageAlt="Dubai Business District"
      />

      <ScrollReveal>
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Comprehensive Business Setup</h2>
                <p className="text-lg mb-6 text-muted-foreground">
                  Our expert team guides you through every step of establishing your business
                  in the UAE, ensuring a smooth and compliant setup process.
                </p>
                <ul className="space-y-4">
                  {[
                    "Company Formation",
                    "License Application",
                    "Visa Processing",
                    "Bank Account Setup",
                    "Legal Documentation",
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
                <Building2 className="h-12 w-12 text-primary mb-6" />
                <h3 className="text-2xl font-bold mb-6">Why Choose Our Setup Services?</h3>
                <ul className="space-y-6">
                  {[
                    {
                      title: "Expert Guidance",
                      description: "Professional support throughout the setup process",
                    },
                    {
                      title: "Fast Processing",
                      description: "Efficient handling of all documentation",
                    },
                    {
                      title: "Complete Solution",
                      description: "End-to-end business setup services",
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