"use client";

import { HeroSection } from "@/components/sections/hero-section";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Calculator } from "lucide-react";
import Link from "next/link";
import { ScrollReveal } from "@/components/scroll-reveal";

export default function TaxServices() {
  return (
    <main className="min-h-screen">
      <HeroSection
        title="US Tax Services"
        subtitle="Expert tax planning and preparation services for individuals and businesses"
        imageUrl="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80"
        imageAlt="Tax Services"
      />

      <ScrollReveal>
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Comprehensive Tax Solutions</h2>
                <p className="text-lg mb-6 text-muted-foreground">
                  Our team of tax experts provides comprehensive solutions to ensure compliance
                  with US tax regulations while maximizing your tax benefits.
                </p>
                <ul className="space-y-4">
                  {[
                    "Individual Tax Returns",
                    "Corporate Tax Planning",
                    "International Tax Compliance",
                    "Tax Advisory Services",
                    "IRS Representation",
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
                <Calculator className="h-12 w-12 text-primary mb-6" />
                <h3 className="text-2xl font-bold mb-6">Why Choose Our Tax Services?</h3>
                <ul className="space-y-6">
                  {[
                    {
                      title: "Expert Team",
                      description: "Qualified professionals with extensive US tax experience",
                    },
                    {
                      title: "Timely Filing",
                      description: "Never miss a tax deadline",
                    },
                    {
                      title: "Maximum Returns",
                      description: "Optimize your tax position and maximize deductions",
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