"use client";

import { HeroSection } from "@/components/sections/hero-section";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, FileText } from "lucide-react";
import Link from "next/link";
import { ScrollReveal } from "@/components/scroll-reveal";

export default function IncomeTax() {
  return (
    <main className="min-h-screen">
      <HeroSection
        title="Income Tax Services in India"
        subtitle="Professional tax planning and compliance solutions"
        imageUrl="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80"
        imageAlt="Income Tax Services"
      />

      <ScrollReveal>
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Comprehensive Tax Solutions</h2>
                <p className="text-lg mb-6 text-muted-foreground">
                  Expert income tax services for individuals and businesses, ensuring compliance
                  and maximizing tax benefits under Indian tax laws.
                </p>
                <ul className="space-y-4">
                  {[
                    "Tax Planning & Advisory",
                    "ITR Filing for Individuals & Businesses",
                    "Tax Assessment Support",
                    "TDS Compliance & Returns",
                    "International Tax Planning",
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
                <FileText className="h-12 w-12 text-primary mb-6" />
                <h3 className="text-2xl font-bold mb-6">Benefits of Our Tax Services</h3>
                <ul className="space-y-6">
                  {[
                    {
                      title: "Expert Guidance",
                      description: "Professional advice on tax planning and compliance",
                    },
                    {
                      title: "Timely Filing",
                      description: "On-time submission of all tax returns",
                    },
                    {
                      title: "Tax Optimization",
                      description: "Maximize deductions and minimize tax liability",
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