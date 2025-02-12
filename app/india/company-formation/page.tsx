"use client";

import { HeroSection } from "@/components/sections/hero-section";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Building2 } from "lucide-react";
import Link from "next/link";
import { ScrollReveal } from "@/components/scroll-reveal";

export default function CompanyFormation() {
  return (
    <main className="min-h-screen">
      <HeroSection
        title="Company Formation in India"
        subtitle="Complete business registration and setup services"
        imageUrl="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80"
        imageAlt="Company Formation"
      />

      <ScrollReveal>
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Business Setup Solutions</h2>
                <p className="text-lg mb-6 text-muted-foreground">
                  End-to-end company formation services to help you establish and grow your
                  business in India.
                </p>
                <ul className="space-y-4">
                  {[
                    "Company Registration",
                    "Business Licenses & Permits",
                    "Statutory Compliance Setup",
                    "Bank Account Opening",
                    "Post-incorporation Support",
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
                <h3 className="text-2xl font-bold mb-6">Why Choose Our Services?</h3>
                <ul className="space-y-6">
                  {[
                    {
                      title: "Fast Processing",
                      description: "Quick and efficient company registration process",
                    },
                    {
                      title: "Complete Solution",
                      description: "All services under one roof",
                    },
                    {
                      title: "Expert Support",
                      description: "Dedicated team for ongoing assistance",
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