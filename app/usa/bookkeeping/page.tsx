"use client";

import { HeroSection } from "@/components/sections/hero-section";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, FileText } from "lucide-react";
import Link from "next/link";
import { ScrollReveal } from "@/components/scroll-reveal";

export default function Bookkeeping() {
  return (
    <main className="min-h-screen">
      <HeroSection
        title="Professional Bookkeeping Services"
        subtitle="Accurate and reliable bookkeeping solutions for your business"
        imageUrl="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80"
        imageAlt="Bookkeeping Services"
      />

      <ScrollReveal>
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Expert Bookkeeping Solutions</h2>
                <p className="text-lg mb-6 text-muted-foreground">
                  Keep your financial records accurate and up-to-date with our professional
                  bookkeeping services.
                </p>
                <ul className="space-y-4">
                  {[
                    "Transaction Recording",
                    "Bank Reconciliation",
                    "Financial Statements",
                    "Accounts Payable/Receivable",
                    "Monthly Reporting",
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
                <h3 className="text-2xl font-bold mb-6">Benefits of Our Bookkeeping</h3>
                <ul className="space-y-6">
                  {[
                    {
                      title: "Accuracy",
                      description: "Precise financial records and reporting",
                    },
                    {
                      title: "Time Savings",
                      description: "Focus on your business while we handle the books",
                    },
                    {
                      title: "Financial Insights",
                      description: "Regular reports to guide business decisions",
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