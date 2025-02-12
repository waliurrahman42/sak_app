"use client";

import { Card } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface ContactInfoCardProps {
  icon: LucideIcon;
  title: string;
  details: string[];
}

export function ContactInfoCard({ icon: Icon, title, details }: ContactInfoCardProps) {
  return (
    <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
      <div className="flex items-start gap-4">
        <Icon className="h-6 w-6 text-primary mt-1" />
        <div>
          <h3 className="font-semibold mb-2">{title}</h3>
          {details.map((detail, index) => (
            <p key={index} className="text-muted-foreground">
              {detail}
            </p>
          ))}
        </div>
      </div>
    </Card>
  );
}