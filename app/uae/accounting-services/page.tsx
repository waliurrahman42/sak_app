"use client";

import { HeroSection } from "@/components/sections/hero-section";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, FileText } from "lucide-react";
import Link from "next/link";
import { ScrollReveal } from "@/components/scroll-reveal";

export default function AccountingServices() {
  return (
    <main className="min-h-screen">
      <HeroSection
        title="UAE Accounting Services"
        subtitle="Professional accounting solutions for UAE businesses"
        imageUrl="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80"
        imageAlt="Accounting Services"
      />

      <ScrollReveal>
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Professional Accounting Solutions</h2>
                <p className="text-lg mb-6 text-muted-foreground">
                  Comprehensive accounting services tailored to meet UAE business requirements
                  and regulations.
                </p>
                <ul className="space-y-4">
                  {[
                    "Bookkeeping Services",
                    "Financial Statements",
                    "Management Accounts",
                    "Budgeting & Forecasting",
                    "Internal Controls",
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
                <h3 className="text-2xl font-bold mb-6">Benefits of Our Services</h3>
                <ul className="space-y-6">
                  {[
                    {
                      title: "Accuracy",
                      description: "Precise financial recording and reporting",
                    },
                    {
                      title: "Compliance",
                      description: "Full adherence to UAE regulations",
                    },
                    {
                      title: "Expert Support",
                      description: "Dedicated accounting professionals",
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