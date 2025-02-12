"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Building2, Calculator, ClipboardList, LineChart } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function UAEServices() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[400px]">
        <Image
          src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80"
          alt="Dubai Business District"
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30">
          <div className="container mx-auto px-4 h-full flex flex-col justify-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white max-w-3xl">
              UAE Tax & Consulting Services
            </h1>
            <p className="text-xl text-white/90 mt-6 max-w-2xl">
              Comprehensive tax, accounting, and consulting solutions for UAE businesses
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services in UAE</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Book Keeping and Accounting Services",
                icon: <Building2 className="h-12 w-12 text-primary mb-4" />, 
                services: [
                  "Book Keeping and Accounting",
                  "Preparation of financial statements",
                  "Management Accounting",
                  "Budgeting and forecasting",
                  "Internal controls",
                ],
                link: "/contact",
                buttonText: "Consult Now",
              },
              {
                title: "Corporate Tax & VAT",
                icon: <Calculator className="h-12 w-12 text-primary mb-4" />, 
                services: [
                  "Corporate tax / VAT registration and compliance",
                  "Corporate tax / VAT Audit filing",
                  "Corporate tax / VAT planning and Advisory",
                  "Corporate tax / VAT Audit support",
                  "VAT refund assistance",
                ],
                link: "/contact",
                buttonText: "Get Started",
              },
              {
                title: "Management & Business Consulting",
                icon: <LineChart className="h-12 w-12 text-primary mb-4" />, 
                services: [
                  "Preparation of Management reports (MIS)",
                  "Strategic Planning",
                  "Project report",
                  "Valuation report",
                  "Business Process Optimization",
                  "Market Entry Strategy",
                  "Risk Management",
                  "Performance improvement",
                ],
                link: "/contact",
                buttonText: "Consult Now",
              },
              {
                title: "Audit and Other Services",
                icon: <ClipboardList className="h-12 w-12 text-primary mb-4" />, 
                services: [
                  "Audit services including Internal Audit",
                  "Agreed Upon procedures",
                ],
                link: "/contact",
                buttonText: "Learn More",
              },
            ].map((service, index) => (
              <Card key={index} className="p-6 flex flex-col justify-between h-full">
                <div>
                  {service.icon}
                  <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                  <ul className="space-y-3 mb-6">
                    {service.services.map((item, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <ArrowRight className="h-4 w-4 text-primary" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <Button className="w-full" asChild>
                  <Link href={service.link}>{service.buttonText}</Link>
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our UAE Services?</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Local Expertise</h3>
              <p>Deep understanding of UAE tax laws and regulations.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Compliance Focus</h3>
              <p>Ensuring adherence to all local regulatory requirements.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Timely Service</h3>
              <p>Quick response times and deadline-oriented approach.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Technology-Driven</h3>
              <p>Using advanced software for accurate reporting.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="mb-8 text-lg opacity-90">
            Contact us today for a free consultation about our UAE services.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link href="/contact">Schedule a Consultation</Link>
          </Button>
        </div>
      </section>
    </main>
  );
}