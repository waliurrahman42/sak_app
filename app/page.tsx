"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Building2, Globe2, Shield, Users, Wallet } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { ScrollReveal } from "@/components/scroll-reveal";
// import { TestimonialsSection } from "@/components/sections/testimonials-section";
// import { ClientsSection } from "@/components/sections/clients-section";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[700px]">
        <Image
          src="/images/home_hero_3.jpg"
          alt="Modern Business District"
          fill
          className="object-cover brightness-50"
          priority
          quality={100}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-background/95">
          <div className="container mx-auto px-4 h-full flex flex-col justify-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white max-w-4xl leading-tight animate-fade-up">
              Transform Your Business with{" "}
              <span className="gradient-text">Expert Financial Guidance</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mt-8 max-w-2xl animate-fade-up animate-delay-200">
              Professional accounting, tax, and consulting services across UAE and North America
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-12 animate-fade-up animate-delay-300">
              <Button size="lg" className="text-lg h-14 px-8 hover-scale" asChild>
                <Link href="/contact">Get Started Today</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-white/10 backdrop-blur-sm text-lg h-14 px-8 hover-scale"
                asChild
              >
                <Link href="/about">
                  Learn More <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <ScrollReveal>
        <section className="py-16 bg-primary/5">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center hover-lift">
                <p className="text-4xl font-bold text-primary animate-float">16+</p>
                <p className="text-sm mt-2">Years Experience</p>
              </div>
              <div className="text-center hover-lift animate-delay-100">
                <p className="text-4xl font-bold text-primary animate-float">200+</p>
                <p className="text-sm mt-2">Happy Clients</p>
              </div>
              <div className="text-center hover-lift animate-delay-200">
                <p className="text-4xl font-bold text-primary animate-float">3</p>
                <p className="text-sm mt-2">Global Presence</p>
              </div>
              <div className="text-center hover-lift animate-delay-300">
                <p className="text-4xl font-bold text-primary animate-float">100%</p>
                <p className="text-sm mt-2">Success Rate</p>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Services Overview */}
      <ScrollReveal>
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Global Services</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Comprehensive financial solutions tailored to your business needs
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
  {/* UAE Services */}
  <div className="group bg-card p-8 rounded-xl shadow-lg border hover:shadow-2xl transition-all duration-300 hover-lift h-full flex flex-col">
    <div className="flex items-center gap-3 mb-6">
      <Building2 className="h-10 w-10 text-primary animate-float" />
      <h3 className="text-2xl font-bold">UAE Services</h3>
    </div>
    <div className="flex-grow">
      <ul className="space-y-4 mb-8">
        <li className="flex items-center gap-3 animate-slide-right">
          <Shield className="h-5 w-5 text-primary" />
          <span>Business setup, Licensing, Visa and banking support</span>
        </li>
        <li className="flex items-center gap-3 animate-slide-right animate-delay-100">
          <Wallet className="h-5 w-5 text-primary" />
          <span>Book Keeping and accounting services, financial statements</span>
        </li>
        <li className="flex items-center gap-3 animate-slide-right animate-delay-200">
          <Users className="h-5 w-5 text-primary" />
          <span>Corporate Tax and VAT</span>
        </li>
        <li className="flex items-center gap-3 animate-slide-right animate-delay-200">
          <Users className="h-5 w-5 text-primary" />
          <span>Management/Business consulting</span>
        </li>
        <li className="flex items-center gap-3 animate-slide-right animate-delay-200">
          <Users className="h-5 w-5 text-primary" />
          <span>Audit and Other Services</span>
        </li>
      </ul>
    </div>
    <Button className="w-full h-12 text-lg group-hover:scale-105 transition-transform mt-auto" asChild>
      <Link href="/uae">
        Explore UAE Services
        <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
      </Link>
    </Button>
  </div>

  {/* USA/Canada Services */}
  <div className="group bg-card p-8 rounded-xl shadow-lg border hover:shadow-2xl transition-all duration-300 hover-lift h-full flex flex-col">
    <div className="flex items-center gap-3 mb-6">
      <Globe2 className="h-10 w-10 text-primary animate-float" />
      <h3 className="text-2xl font-bold">USA/Canada Services</h3>
    </div>
    <div className="flex-grow">
      <ul className="space-y-4 mb-8">
        <li className="flex items-center gap-3 animate-slide-right">
          <Shield className="h-5 w-5 text-primary" />
          <span>Book Keeping and accounting services</span>
        </li>
        <li className="flex items-center gap-3 animate-slide-right animate-delay-100">
          <Wallet className="h-5 w-5 text-primary" />
          <span>Preparation of financial statements</span>
        </li>
        <li className="flex items-center gap-3 animate-slide-right animate-delay-200">
          <Users className="h-5 w-5 text-primary" />
          <span>Tax returns preparation and filing for individual and corporate</span>
        </li>
        <li className="flex items-center gap-3 animate-slide-right animate-delay-200">
          <Users className="h-5 w-5 text-primary" />
          <span>Audit Services/Supports</span>
        </li>
      </ul>
    </div>
    <Button className="w-full h-12 text-lg group-hover:scale-105 transition-transform mt-auto" asChild>
      <Link href="/usa">
        Explore USA/Canada Services
        <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
      </Link>
    </Button>
  </div>

  {/* India Services */}
  <div className="group bg-card p-8 rounded-xl shadow-lg border hover:shadow-2xl transition-all duration-300 hover-lift h-full flex flex-col">
    <div className="flex items-center gap-3 mb-6">
      <Building2 className="h-10 w-10 text-primary animate-float" />
      <h3 className="text-2xl font-bold">India Services</h3>
    </div>
    <div className="flex-grow">
      <ul className="space-y-4 mb-8">
        <li className="flex items-center gap-3 animate-slide-right">
          <Shield className="h-5 w-5 text-primary" />
          <span>GST Services</span>
        </li>
        <li className="flex items-center gap-3 animate-slide-right animate-delay-100">
          <Wallet className="h-5 w-5 text-primary" />
          <span>Income Tax</span>
        </li>
        <li className="flex items-center gap-3 animate-slide-right animate-delay-200">
          <Users className="h-5 w-5 text-primary" />
          <span>Company Formation</span>
        </li>
      </ul>
    </div>
    <Button className="w-full h-12 text-lg group-hover:scale-105 transition-transform mt-auto" asChild>
      <Link href="/india">
        Explore India Services
        <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
      </Link>
    </Button>
  </div>
</div>

           
          </div>
        </section>
      </ScrollReveal>

      {/* Why Choose Us */}
      <ScrollReveal>
        <section className="py-20 bg-primary/5">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose SAK Consulting?</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Experience excellence in financial services with our expert team
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow hover-lift">
                <Globe2 className="h-12 w-12 text-primary mb-4 animate-float" />
                <h3 className="text-xl font-bold mb-4">Global Expertise</h3>
                <p className="text-muted-foreground">
                  Professional team with extensive experience in multiple jurisdictions.
                </p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow hover-lift animate-delay-100">
                <Users className="h-12 w-12 text-primary mb-4 animate-float" />
                <h3 className="text-xl font-bold mb-4">Personalized Service</h3>
                <p className="text-muted-foreground">
                  Tailored solutions to meet your specific business needs.
                </p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow hover-lift animate-delay-200">
                <Shield className="h-12 w-12 text-primary mb-4 animate-float" />
                <h3 className="text-xl font-bold mb-4">Trusted Partner</h3>
                <p className="text-muted-foreground">
                  Reliable expertise you can count on for your business success.
                </p>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Client Testimonials */}
      {/* <ScrollReveal>
        <TestimonialsSection />
      </ScrollReveal> */}

      {/* Our Clients */}
      {/* <ScrollReveal>
        <ClientsSection />
      </ScrollReveal> */}

      {/* <ScrollReveal>
        <Image
          src="/images/footer_img1.jpg"
          alt="Modern Business District"
          fill
          className="object-cover brightness-50"
          priority
          quality={100}
        />
      </ScrollReveal>
       */}

       {/* Featured Image Section */}
      <ScrollReveal>
        <section className="py-5">
          <div className="container mx-auto ">
            <div className="relative h-[300px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/footer_img1.png"
                alt="Global Business Excellence"
                fill
                className="object-fill hover:scale-105 transition-transform duration-700"
                quality={100}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end">
                <div className="p-8 md:p-12 text-white">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Global Financial Excellence
                  </h2>
                  <p className="text-lg md:text-xl text-white/90 max-w-2xl">
                    Delivering world-class financial services and solutions across continents
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Contact CTA */}
      <ScrollReveal>
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Contact us today for a free consultation and discover how we can help your business grow.
            </p>
            <Button
              size="lg"
              variant="secondary"
              className="h-14 px-8 text-lg hover-scale"
              asChild
            >
              <Link href="/contact">
                Schedule a Consultation
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </section>
      </ScrollReveal>
    </main>
  );
}