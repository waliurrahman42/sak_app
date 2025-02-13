"use client";

import { HeroSection } from "@/components/sections/hero-section";
import { ContactForm } from "@/components/forms/contact-form";
import { ContactInfoCard } from "@/components/cards/contact-info-card";
import { Card } from "@/components/ui/card";
import { Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";

export default function Contact() {
  return (
    <main className="min-h-screen">
      <HeroSection
        title="Contact Us"
        subtitle="Get in touch with our team of experts today"
        imageUrl="/images/image_1.jpg"
        imageAlt="Modern Office"
      />

      {/* Contact Form Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
              <div className="space-y-6">
                <ContactInfoCard
                  icon={MapPin}
                  title="Dubai Office"
                  details={["Business Bay, Dubai", "United Arab Emirates"]}
                />
                <ContactInfoCard
                  icon={Phone}
                  title="Phone"
                  details={["+971 XX XXX XXXX"]}
                />
                <ContactInfoCard
                  icon={Mail}
                  title="Email"
                  details={["info@sakconsulting.com"]}
                />
              </div>
            </div>

            {/* Contact Form */}
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Location</h2>
          <Card className="p-4 hover:shadow-lg transition-shadow duration-300">
            <div className="relative w-full h-[400px] rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1577083288073-40892c0860a4?auto=format&fit=crop&q=80"
                alt="Dubai Business District Map"
                fill
                className="object-cover"
              />
            </div>
          </Card>
        </div>
      </section>
    </main>
  );
}