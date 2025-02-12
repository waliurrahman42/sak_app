"use client";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { Calculator, FileText, DollarSign, PieChart } from "lucide-react";
import Link from "next/link";

const services = [
  {
    title: "Tax Services",
    description: "Comprehensive tax planning and preparation",
    icon: Calculator,
    href: "/usa/tax-services",
  },
  {
    title: "Bookkeeping",
    description: "Professional bookkeeping and accounting",
    icon: FileText,
    href: "/usa/bookkeeping",
  },
  {
    title: "Payroll Processing",
    description: "Complete payroll management solutions",
    icon: DollarSign,
    href: "/usa/payroll",
  },
  {
    title: "Financial Reporting",
    description: "Detailed financial statements and analysis",
    icon: PieChart,
    href: "/usa/financial-reporting",
  },
];

export function USAServicesDropdown() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem >
          <NavigationMenuTrigger className="bg-transparent hover:bg-secondary">
            USA Services
          </NavigationMenuTrigger>
          <NavigationMenuContent >
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