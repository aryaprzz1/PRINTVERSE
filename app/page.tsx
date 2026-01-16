"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ClientsSection } from "@/components/clients-section"
import { WhatsappPopup } from "@/components/whatsapp-popup"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Zap, Settings, Award, Users, Shield, Cpu, Gauge } from "lucide-react"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <WhatsappPopup />

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          {/* Background Animation */}
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute top-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse delay-1000" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="animate-fade-in-up">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-balance">
                Excellence in
                <span className="text-primary ml-3">Printing</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Printing Press brings 25+ years of collective expertise to every print. 
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 group"
                >
                  Get Started
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center px-8 py-3 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary/10 transition-all duration-300"
                >
                  Explore Services
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 mt-12">
                <div>
                  <p className="text-2xl font-bold text-primary">25+</p>
                  <p className="text-xs text-muted-foreground">Years Experience</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-primary">300+</p>
                  <p className="text-xs text-muted-foreground">Happy Clients</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-primary">24/7</p>
                  <p className="text-xs text-muted-foreground">For Request</p>
                </div>
              </div>
            </div>

            {/* Right - Logo Display */}
            <div className="animate-slide-in-left">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/50 rounded-2xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity" />
                <div className="relative bg-gradient-to-br from-card to-secondary rounded-2xl p-8 border border-border overflow-hidden flex items-center justify-center min-h-96">
                  <Image
                    src="/newlogo.png"
                    alt="PRINTVERSE Logo"
                    width={300}
                    height={400}
                    className="object-contain drop-shadow-2xl group-hover:scale-110 transition-transform duration-300"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50 border-y border-border">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Choose PRINTVERSE?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We combine cutting-edge technology with traditional craftsmanship
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Zap,
                title: "Fast",
                description: "Get your prints ready in Deadline check. ",
              },
              {
                icon: Award,
                title: "Quality Checked",
                description: "Professional processes ensure every print meets high quality standards.",
              },
              {
                icon: Settings,
                title: "Custom Solutions",
                description: "Tailored printing solutions for your unique business needs and specifications.",
              },
            ].map((feature, i) => (
              <div
                key={i}
                className="bg-background rounded-xl p-8 border border-border hover:border-primary transition-all duration-300 group hover:bg-card hover:shadow-lg hover:shadow-primary/10 hover-lift"
              >
                <feature.icon className="w-12 h-12 text-primary mb-4 group-hover:animate-glow-pulse" />
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Comprehensive printing solutions for every need</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              {
                title: "Brochure Printing",
                description: "Eye-catching brochures for your business marketing",
                icon: "📑",
                id: "brochure-printing",
              },
              {
                id: "calendars",
                title: "Calendars",
                icon: "📅",
                description: "Custom calendar printing for offices and gifts",
              },
              {
                id: "color-printing",
                title: "Color Printing",
                icon: "🌈",
                description: "Vibrant full-color printing for maximum impact",
              },
            ].map((service, i) => (
              <Link key={i} href={`/services#${service.id}`} className="group">
                <div className="bg-card rounded-xl p-8 border border-border hover:border-primary transition-all duration-300 h-full hover:shadow-lg hover:shadow-primary/20 hover-lift">
                  <div className="text-5xl mb-4">{service.icon}</div>
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <span className="text-primary font-semibold inline-flex items-center gap-2 group-hover:gap-3 transition-all">
                    Learn more
                    <ArrowRight size={16} />
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-8 py-3 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              View All Services
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50 border-y border-border">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">About <span className="text-primary">PRINTVERSE</span></h2>
            <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
              Premium printing solutions with 25+ years of collective expertise in the industry
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="animate-fade-in-up">
              <h3 className="text-3xl font-bold mb-6">Our Story</h3>
              <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                At Printverse, we blend fresh ideas with decades of expertise. Though founded in 2025, our team brings
                over 25+ years of collective experience in the printing industry, ensuring top-quality results you can
                trust.
              </p>
              <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                We offer high-quality, affordable printing — from single to 4-color prints, brochures, banners, visiting
                cards, ID cards, and custom designs to bulk printing — all delivered quickly and professionally.
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                We also provide all types of binding services, plus lamination and punching, making us your one-stop
                solution for everything in print.
              </p>

              {/* <div className="grid grid-cols-3 gap-6 mt-8">
                <div>
                  <p className="text-3xl font-bold text-primary">25+</p>
                  <p className="text-sm text-muted-foreground">Years Experience</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-primary">300+</p>
                  <p className="text-sm text-muted-foreground">Happy Clients</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-primary">24/7</p>
                  <p className="text-sm text-muted-foreground">For Request</p>
                </div>
              </div> */}

              <div className="mt-6 p-4 bg-card border border-border rounded-lg">
                <p className="text-sm text-muted-foreground">
                  <span className="font-semibold">GSTIN:</span> 27ABHFP1115D1ZO
                </p>
              </div>

              <Link
                href="/about"
                className="inline-flex items-center gap-2 mt-8 px-6 py-3 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                Learn More About Us
                <ArrowRight size={18} />
              </Link>
            </div>

            <div className="animate-slide-in-left">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/50 rounded-2xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity" />
                <div className="relative bg-gradient-to-br from-card to-secondary rounded-2xl p-8 border border-border overflow-hidden">
                  <Image
                    src="/newlogo.png"
                    alt="PRINTVERSE Logo"
                    width={400}
                    height={400}
                    className="w-full h-auto group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Core Values */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {[
              {
                icon: Award,
                title: "Quality Excellence",
                description: "Every print meets quality standards with zero compromise",
              },
              {
                icon: Users,
                title: "Customer Focus",
                description: "Your satisfaction is our priority - customized solutions for every need",
              },
              {
                icon: Zap,
                title: "Innovation",
                description: "Constantly adopting latest technology and printing techniques",
              },
              {
                icon: Shield,
                title: "Reliability",
                description: "guaranteed with consistent quality delivery",
              },
              {
                icon: Cpu,
                title: "Expertise",
                description: "25+ years of printing experience backed by skilled professionals",
              },
              {
                icon: Gauge,
                title: "Precision",
                description: "Attention to detail in every aspect of production and delivery",
              },
            ].map((value, i) => (
              <div
                key={i}
                className="bg-background rounded-lg p-8 border border-border text-center hover:border-primary transition-colors group hover:bg-card duration-300"
              >
                <value.icon className="w-12 h-12 text-primary mx-auto mb-4 group-hover:animate-glow-pulse" />
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients & Testimonials Section */}
      <ClientsSection />

      {/* CTA Section */}
      <section
        id="contact"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary/20 to-primary/10 border-y border-border"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Get a free quote and expert consultation from our printing specialists
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-10 py-4 bg-primary text-primary-foreground rounded-lg font-bold hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 group text-lg"
          >
            Get Free Quote
            <ArrowRight className="ml-3 group-hover:translate-x-1 transition-transform" size={24} />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
