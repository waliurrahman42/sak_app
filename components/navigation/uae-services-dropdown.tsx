"use client";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { Calculator, FileText, Users, Building2, ClipboardList } from "lucide-react";
import Link from "next/link";

const services = [
  {
    title: "Bookkeeping & Accounting",
    description: "Comprehensive bookkeeping and financial reporting services",
    icon: FileText,
    href: "/uae/accounting-services",
  },
  {
    title: "Corporate Tax & VAT",
    description: "Expert tax consulting and compliance solutions",
    icon: Calculator,
    href: "/uae/tax-services",
  },
  {
    title: "Management Consulting",
    description: "Strategic business advisory services",
    icon: Users,
    href: "/uae/management-consulting",
  },
  {
    title: "Audit Services",
    description: "Professional audit and assurance services",
    icon: ClipboardList,
    href: "/uae/audit-services",
  },
];

export function UaeServicesDropdown() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem >
          <NavigationMenuTrigger className="bg-transparent hover:bg-secondary">
            UAE Services
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4">
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