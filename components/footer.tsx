import { Building, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Building className="h-6 w-6" />
              <span className="font-bold text-lg">SAK Consulting</span>
            </div>
            <p className="text-sm opacity-90">
              Your trusted partner for tax, accounting, and consulting needs across UAE and North America.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-sm opacity-90 hover:opacity-100">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/uae" className="text-sm opacity-90 hover:opacity-100">
                  UAE Services
                </Link>
              </li>
              <li>
                <Link href="/usa" className="text-sm opacity-90 hover:opacity-100">
                  USA Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm opacity-90 hover:opacity-100">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="text-sm opacity-90">Dubai, UAE</li>
              <li className="text-sm opacity-90">Phone: +971 XX XXX XXXX</li>
              <li className="text-sm opacity-90">Email: info@sakconsulting.com</li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="font-semibold mb-4">Follow Us</h3>
            <div className="flex gap-4">
              <a href="#" className="hover:opacity-80">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="hover:opacity-80">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="hover:opacity-80">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:opacity-80">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm opacity-90">
          <p>&copy; {new Date().getFullYear()} SAK Consulting and Auditing LLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}