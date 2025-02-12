"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Calculator, FileText, Building2, Users } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function IndiaServices() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[400px]">
        <Image
          src="https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&q=80"
          alt="India Business District"
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30">
          <div className="container mx-auto px-4 h-full flex flex-col justify-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white max-w-3xl">
              India Tax & Consulting Services
            </h1>
            <p className="text-xl text-white/90 mt-6 max-w-2xl">
              Comprehensive tax, accounting, and business solutions for Indian enterprises
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services in India</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* GST Services */}
            <Card className="p-6">
              <Calculator className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-4">GST Services</h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-2">
                  <ArrowRight className="h-4 w-4 text-primary" />
                  <span>GST Registration</span>
                </li>
                <li className="flex items-center gap-2">
                  <ArrowRight className="h-4 w-4 text-primary" />
                  <span>GST Returns Filing</span>
                </li>
                <li className="flex items-center gap-2">
                  <ArrowRight className="h-4 w-4 text-primary" />
                  <span>GST Compliance</span>
                </li>
              </ul>
              <Button className="w-full" asChild>
                <Link href="/india/gst-services">Learn More</Link>
              </Button>
            </Card>

            {/* Income Tax */}
            <Card className="p-6">
              <FileText className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-4">Income Tax</h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-2">
                  <ArrowRight className="h-4 w-4 text-primary" />
                  <span>Tax Planning</span>
                </li>
                <li className="flex items-center gap-2">
                  <ArrowRight className="h-4 w-4 text-primary" />
                  <span>ITR Filing</span>
                </li>
                <li className="flex items-center gap-2">
                  <ArrowRight className="h-4 w-4 text-primary" />
                  <span>Tax Assessment</span>
                </li>
              </ul>
              <Button className="w-full" asChild>
                <Link href="/india/income-tax">Get Started</Link>
              </Button>
            </Card>

            {/* Company Formation */}
            <Card className="p-6">
              <Building2 className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-4">Company Formation</h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-2">
                  <ArrowRight className="h-4 w-4 text-primary" />
                  <span>Company Registration</span>
                </li>
                <li className="flex items-center gap-2">
                  <ArrowRight className="h-4 w-4 text-primary" />
                  <span>Business Licenses</span>
                </li>
                <li className="flex items-center gap-2">
                  <ArrowRight className="h-4 w-4 text-primary" />
                  <span>Compliance Setup</span>
                </li>
              </ul>
              <Button className="w-full" asChild>
                <Link href="/india/company-formation">Learn More</Link>
              </Button>
            </Card>

            {/* Business Advisory */}
            <Card className="p-6">
              <Users className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-4">Business Advisory</h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-2">
                  <ArrowRight className="h-4 w-4 text-primary" />
                  <span>Strategic Planning</span>
                </li>
                <li className="flex items-center gap-2">
                  <ArrowRight className="h-4 w-4 text-primary" />
                  <span>Financial Consulting</span>
                </li>
                <li className="flex items-center gap-2">
                  <ArrowRight className="h-4 w-4 text-primary" />
                  <span>Risk Management</span>
                </li>
              </ul>
              <Button className="w-full" asChild>
                <Link href="/india/business-advisory">Get Started</Link>
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our India Services?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Expert Knowledge</h3>
              <p>Deep understanding of Indian tax laws and regulations.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Timely Compliance</h3>
              <p>Stay compliant with all statutory requirements and deadlines.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Digital Solutions</h3>
              <p>Advanced software integration for efficient service delivery.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Grow Your Business in India?</h2>
          <p className="mb-8 text-lg opacity-90">
            Get in touch for a comprehensive review of your business needs.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link href="/contact">Schedule a Consultation</Link>
          </Button>
        </div>
      </section>
    </main>
  );
}