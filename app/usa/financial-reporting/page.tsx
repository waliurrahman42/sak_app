"use client";

import { HeroSection } from "@/components/sections/hero-section";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, PieChart } from "lucide-react";
import Link from "next/link";
import { ScrollReveal } from "@/components/scroll-reveal";

export default function FinancialReporting() {
  return (
    <main className="min-h-screen">
      <HeroSection
        title="Financial Reporting Services"
        subtitle="Comprehensive financial analysis and reporting solutions"
        imageUrl="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80"
        imageAlt="Financial Reporting"
      />

      <ScrollReveal>
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Expert Financial Analysis</h2>
                <p className="text-lg mb-6 text-muted-foreground">
                  Get detailed insights into your business performance with our comprehensive
                  financial reporting services.
                </p>
                <ul className="space-y-4">
                  {[
                    "Balance Sheets",
                    "Income Statements",
                    "Cash Flow Analysis",
                    "Financial Forecasting",
                    "Performance Metrics",
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
                <PieChart className="h-12 w-12 text-primary mb-6" />
                <h3 className="text-2xl font-bold mb-6">Benefits of Our Reporting</h3>
                <ul className="space-y-6">
                  {[
                    {
                      title: "Clear Insights",
                      description: "Easy to understand financial analysis",
                    },
                    {
                      title: "Data-Driven Decisions",
                      description: "Make informed business choices",
                    },
                    {
                      title: "Regular Updates",
                      description: "Stay current with your financial position",
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