"use client";

import Image from "next/image";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  imageUrl: string;
  imageAlt: string;
  height?: string;
}

export function HeroSection({
  title,
  subtitle,
  imageUrl,
  imageAlt,
  height = "h-[400px]",
}: HeroSectionProps) {
  return (
    <section className={`relative ${height}`}>
      <Image
        src={imageUrl}
        alt={imageAlt}
        fill
        className="object-cover brightness-50"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30">
        <div className="container mx-auto px-4 h-full flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white max-w-3xl animate-fade-up">
            {title}
          </h1>
          <p className="text-xl text-white/90 mt-6 max-w-2xl animate-fade-up animate-delay-200">
            {subtitle}
          </p>
        </div>
      </div>
    </section>
  );
}