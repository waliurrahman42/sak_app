"use client";

import { Button } from "@/components/ui/button";
import { Building, Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { UaeServicesDropdown } from "./navigation/uae-services-dropdown";
import { USAServicesDropdown } from "./navigation/usa-services-dropdown";
import { IndiaServicesDropdown } from "./navigation/india-services-dropdown";

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="bg-white border-b sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Building className="h-6 w-6" />
            <span className="font-bold text-lg">SAK Consulting</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-sm px-2 py-1 font-medium hover:text-primary">
              Home
            </Link>
            <Link href="/about" className="text-sm px-2 py-1 font-medium hover:text-primary">
              About
            </Link>
            <UaeServicesDropdown />
            <USAServicesDropdown />
            <IndiaServicesDropdown />
            <Button asChild>
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={toggleMenu}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4">
            <Link
              href="/"
              className="block px-4 py-2 text-sm hover:bg-secondary rounded-md"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="block px-4 py-2 text-sm hover:bg-secondary rounded-md"
              onClick={toggleMenu}
            >
              About
            </Link>
            <div className="px-4 py-2 space-y-2">
              <div className="text-sm font-medium">UAE Services</div>
              {[
                { href: "/uae/vat-services", label: "VAT Services" },
                { href: "/uae/accounting-services", label: "Accounting Services" },
                { href: "/uae/business-setup", label: "Business Setup" },
                { href: "/uae/management-consulting", label: "Management Consulting" },
              ].map((service) => (
                <Link
                  key={service.href}
                  href={service.href}
                  className="block pl-4 py-2 text-sm hover:bg-secondary rounded-md"
                  onClick={toggleMenu}
                >
                  {service.label}
                </Link>
              ))}
            </div>
            <div className="px-4 py-2 space-y-2">
              <div className="text-sm font-medium">USA Services</div>
              {[
                { href: "/usa/tax-services", label: "Tax Services" },
                { href: "/usa/bookkeeping", label: "Bookkeeping" },
                { href: "/usa/payroll", label: "Payroll Processing" },
                { href: "/usa/financial-reporting", label: "Financial Reporting" },
              ].map((service) => (
                <Link
                  key={service.href}
                  href={service.href}
                  className="block pl-4 py-2 text-sm hover:bg-secondary rounded-md"
                  onClick={toggleMenu}
                >
                  {service.label}
                </Link>
              ))}
            </div>
            <div className="px-4 py-2 space-y-2">
              <div className="text-sm font-medium">India Services</div>
              {[
                { href: "/india/gst-services", label: "GST Services" },
                { href: "/india/income-tax", label: "Income Tax" },
                { href: "/india/company-formation", label: "Company Formation" },
                { href: "/india/business-advisory", label: "Business Advisory" },
              ].map((service) => (
                <Link
                  key={service.href}
                  href={service.href}
                  className="block pl-4 py-2 text-sm hover:bg-secondary rounded-md"
                  onClick={toggleMenu}
                >
                  {service.label}
                </Link>
              ))}
            </div>
            <div className="px-4">
              <Button className="w-full" asChild>
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}