import './globals.css';
import type { Metadata } from 'next';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { WhatsAppButton } from '@/components/whatsapp-button';

export const metadata: Metadata = {
  title: 'SAK Consulting and Auditing LLC',
  description: 'Professional accounting, tax, and consulting services across UAE and North America',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans">
        <Navigation />
        {children}
        <WhatsAppButton />
        <Footer />
      </body>
    </html>
  );
}