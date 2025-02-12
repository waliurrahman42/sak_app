"use client";

import { ScrollReveal } from "@/components/scroll-reveal";
import Image from "next/image";

const clients = [
  {
    name: "Tech Corp",
    logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?auto=format&fit=crop&q=80",
  },
  {
    name: "Global Innovations",
    logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?auto=format&fit=crop&q=80",
  },
  {
    name: "Emirates Trading",
    logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?auto=format&fit=crop&q=80",
  },
  {
    name: "Dubai Ventures",
    logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?auto=format&fit=crop&q=80",
  },
  {
    name: "American Express",
    logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?auto=format&fit=crop&q=80",
  },
  {
    name: "Global Solutions",
    logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?auto=format&fit=crop&q=80",
  },
];

export function ClientsSection() {
  return (
    <section className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Trusted Clients</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Partnering with leading businesses across UAE and North America
          </p>
        </div>
        <ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {clients.map((client, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow flex items-center justify-center hover-lift group"
              >
                <div className="relative h-12 w-full opacity-70 group-hover:opacity-100 transition-opacity">
                  <Image
                    src={client.logo}
                    alt={client.name}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}