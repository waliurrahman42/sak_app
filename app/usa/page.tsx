"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Briefcase, Calculator, DollarSign, FileText, PieChart } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { ScrollReveal } from "@/components/scroll-reveal";

const services = [
  {
    title: "Bookkeeping & Accounting",
    icon: <FileText className="h-12 w-12 text-primary mb-4" />, 
    items: [
      "Data Entry",
      "Invoice Processing",
      "Accounts Receivable Management",
      "Bank & Credit Card Reconciliation",
      "Inventory Management",
      "Fixed Assets Management",
      "Loan Account Reconciliation",
      "Year End Finalization"
    ],
  },
  {
    title: "Financial Statements",
    icon: <PieChart className="h-12 w-12 text-primary mb-4" />,
    items: [
      "Preparation of Financial Statements",
      "SEC Financial Statements Compliance",
      "Annual Financial Reporting Support (10-K)",
      "Quarterly Financial Reporting Support (10-Q)",
      "SEC Audit and Support"
    ],
  },
  {
    title: "Taxation",
    icon: <Calculator className="h-12 w-12 text-primary mb-4" />,
    items: [
      "Personal Income Tax Returns for Individuals",
      "Tax Preparation for Business",
      "Tax Planning"
    ],
  },
  {
    title: "Audit Support",
    icon: <DollarSign className="h-12 w-12 text-primary mb-4" />,
    items: ["Compilation", "Review", "Audit", "Agreed-upon Procedures"],
  }
];

export default function USAServices() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[400px]">
        <Image
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80"
          alt="USA Business District"
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30">
          <div className="container mx-auto px-4 h-full flex flex-col justify-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white max-w-3xl">
              USA & Canada Tax & Accounting Services
            </h1>
            <p className="text-xl text-white/90 mt-6 max-w-2xl">
              Comprehensive accounting and tax solutions for North American businesses
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <ScrollReveal>
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Our North American Services</h2>
            <div className="grid lg:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="group relative overflow-hidden p-8 hover:shadow-lg transition-all duration-300">
                  <div className="absolute top-0 left-0 h-2 w-full bg-gradient-to-r from-blue-600 to-blue-400"></div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="rounded-lg bg-blue-50 p-3">
                      {service.icon}
                    </div>
                    <h3 className="text-2xl font-bold">{service.title}</h3>
                  </div>
                  <ul className="space-y-4 mb-8">
                    {service.items.map((item, i) => (
                      <li key={i} className="flex items-center gap-3 group-hover:translate-x-2 transition-transform duration-300" style={{ transitionDelay: `${i * 50}ms` }}>
                        <ArrowRight className="h-4 w-4 text-blue-600" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full mt-auto bg-blue-600 hover:bg-blue-700" asChild>
                    <Link href="/contact">Get Started</Link>
                  </Button>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Features Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our USA Services?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Expert Knowledge</h3>
              <p>Deep understanding of US and Canadian tax laws and regulations.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Timely Filing</h3>
              <p>Never miss important deadlines with our proactive approach.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Digital Solutions</h3>
              <p>Advanced software integration for accurate and efficient service.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Optimize Your Finances?</h2>
          <p className="mb-8 text-lg opacity-90">
            Get in touch for a comprehensive review of your accounting and tax needs.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link href="/contact">Schedule a Consultation</Link>
          </Button>
        </div>
      </section>
    </main>
  );
}