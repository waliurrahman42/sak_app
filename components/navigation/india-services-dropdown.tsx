"use client";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { Calculator, FileText, Building2, Users } from "lucide-react";
import Link from "next/link";

const services = [
  {
    title: "GST Services",
    description: "Complete GST registration and compliance solutions",
    icon: Calculator,
    href: "/india/gst-services",
  },
  {
    title: "Income Tax",
    description: "Tax planning and return filing services",
    icon: FileText,
    href: "/india/income-tax",
  },
  {
    title: "Company Formation",
    description: "End-to-end company registration services",
    icon: Building2,
    href: "/india/company-formation",
  },
  {
    title: "Business Advisory",
    description: "Strategic business consulting services",
    icon: Users,
    href: "/india/business-advisory",
  },
];

export function IndiaServicesDropdown() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem >
          <NavigationMenuTrigger className="bg-transparent hover:bg-secondary">
            India Services
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[300px] md:grid-cols-1">
              {services.map((service) => (
                <li key={service.href}>
                  <NavigationMenuLink asChild>
                    <Link
                      href={service.href}
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-secondary hover:text-secondary-foreground focus:bg-secondary focus:text-secondary-foreground"
                    >
                      <div className="flex items-center gap-2">
                        <service.icon className="h-4 w-4 text-primary" />
                        <div className="text-sm font-medium leading-none">
                          {service.title}
                        </div>
                      </div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {service.description}
                      </p>
                    </Link>
                  </NavigationMenuLink>
                </li>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}