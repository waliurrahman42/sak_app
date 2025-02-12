"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

interface CTASectionProps {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
}

export function CTASection({ title, description, buttonText, buttonLink }: CTASectionProps) {
  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6 animate-fade-up">{title}</h2>
        <p className="mb-8 text-lg opacity-90 animate-fade-up animate-delay-200">
          {description}
        </p>
        <Button
          size="lg"
          variant="secondary"
          className="animate-fade-up animate-delay-300"
          asChild
        >
          <Link href={buttonLink}>{buttonText}</Link>
        </Button>
      </div>
    </section>
  );
}