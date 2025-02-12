"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  features: string[];
  buttonText: string;
  buttonLink: string;
}

export function ServiceCard({
  icon: Icon,
  title,
  features,
  buttonText,
  buttonLink,
}: ServiceCardProps) {
  return (
    <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
      <div className="flex items-center gap-3 mb-4">
        <Icon className="h-8 w-8 text-primary" />
        <h3 className="text-2xl font-semibold">{title}</h3>
      </div>
      <ul className="space-y-3 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-2">
            <ArrowRight className="h-4 w-4 text-primary" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <Button className="w-full group" asChild>
        <Link href={buttonLink}>
          {buttonText}
          <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
        </Link>
      </Button>
    </Card>
  );
}