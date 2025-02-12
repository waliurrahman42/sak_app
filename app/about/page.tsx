"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Award, Building2, Globe2, Users } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function About() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[400px]">
        <Image
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80"
          alt="Office Meeting"
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30">
          <div className="container mx-auto px-4 h-full flex flex-col justify-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white max-w-3xl">
              About SAK Consulting
            </h1>
            <p className="text-xl text-white/90 mt-6 max-w-2xl">
              Your trusted partner in financial success across UAE, North America and India
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-lg mb-6">
                SAK Consulting and Auditing LLC was established with a vision to provide comprehensive
                financial services that bridge international markets. Our expertise spans across the UAE,
                North America and India, offering specialized solutions in taxation, accounting, and business
                consulting.
              </p>
              <p className="text-lg">
                With years of experience and a dedicated team of professionals, we've helped numerous
                businesses navigate complex financial landscapes while ensuring compliance and
                maximizing efficiency.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <Card className="p-6 text-center">
                <h3 className="text-3xl font-bold text-primary mb-2">16+</h3>
                <p>Years of Experience</p>
              </Card>
              <Card className="p-6 text-center">
                <h3 className="text-3xl font-bold text-primary mb-2">200+</h3>
                <p>Satisfied Clients</p>
              </Card>
              <Card className="p-6 text-center">
                <h3 className="text-3xl font-bold text-primary mb-2">3</h3>
                <p>Global Presence </p>
              </Card>
              <Card className="p-6 text-center">
                <h3 className="text-3xl font-bold text-primary mb-2">100%</h3>
                <p>Client Satisfaction</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Core Values</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <Card className="p-6">
              <Award className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-4">Excellence</h3>
              <p>Committed to delivering the highest quality service in every engagement.</p>
            </Card>
            <Card className="p-6">
              <Users className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-4">Client Focus</h3>
              <p>Your success is our priority. We work to exceed your expectations.</p>
            </Card>
            <Card className="p-6">
              <Globe2 className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-4">Global Perspective</h3>
              <p>International expertise with local market understanding.</p>
            </Card>
            <Card className="p-6">
              <Building2 className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-4">Integrity</h3>
              <p>Maintaining the highest standards of professional ethics.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Leadership Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6">
              <div className="relative w-full h-64 mb-6 rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80"
                  alt="CEO"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">John Smith</h3>
              <p className="text-primary mb-4">CEO & Founder</p>
              <p className="text-sm">
                16+ years of experience in international tax and consulting.
              </p>
            </Card>
            <Card className="p-6">
              <div className="relative w-full h-64 mb-6 rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80"
                  alt="CFO"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">Sarah Johnson</h3>
              <p className="text-primary mb-4">Head of UAE Operations</p>
              <p className="text-sm">
                Expert in UAE tax regulations and business consulting.
              </p>
            </Card>
            <Card className="p-6">
              <div className="relative w-full h-64 mb-6 rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80"
                  alt="CTO"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">Michael Chen</h3>
              <p className="text-primary mb-4">Head of US Operations</p>
              <p className="text-sm">
                Specialized in US tax law and international accounting.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Work Together?</h2>
          <p className="mb-8 text-lg opacity-90">
            Let's discuss how we can help your business thrive in the global market.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link href="/contact">Schedule a Consultation</Link>
          </Button>
        </div>
      </section>
    </main>
  );
}