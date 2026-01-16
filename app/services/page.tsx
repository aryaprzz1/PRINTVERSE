"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function Services() {
  const services = [
    {
      id: "brochure-printing",
      title: "Brochure Printing",
      icon: "📑",
      description: "Eye-catching brochures for your business marketing",
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
    {
      id: "custom-printing",
      title: "Custom Printing",
      icon: "🎯",
      description: "Tailored printing solutions for your unique needs",
    },
    {
      id: "digital-printing",
      title: "Digital Printing",
      icon: "💻",
      description: "Fast and efficient digital printing technology",
    },
    {
      id: "letterhead",
      title: "Letterhead",
      icon: "✉️",
      description: "Professional letterhead printing services",
    },
    {
      id: "magazine",
      title: "Magazine",
      icon: "📰",
      description: "Magazine and publication printing services",
    },
    {
      id: "banners",
      title: "Banners",
      icon: "🎨",
      description: "High-quality banner printing for all your promotional needs",
    },
    {
      id: "binding-services",
      title: "Binding Services",
      icon: "📎",
      description: "Professional binding services for documents and booklets",
    },
    {
      id: "posters",
      title: "Posters",
      icon: "📌",
      description: "Large format poster printing for events and advertising",
    },
    {
      id: "identity-cards",
      title: "Identity Cards",
      icon: "🆔",
      description: "Secure identity card printing with advanced features",
    },
    {
      id: "lanyard",
      title: "Lanyard",
      icon: "🎟️",
      description: "Custom printed lanyards for badges and IDs",
    },
    {
      id: "lamination",
      title: "Lamination",
      icon: "🛡️",
      description: "Professional lamination services for documents and prints",
    },
    {
      id: "punching",
      title: "Punching",
      icon: "✂️",
      description: "Precision punching services for documents and binders",
    },
  ]

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Header */}
      <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8 border-b border-border">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
            Our <span className="text-primary">Services</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Comprehensive printing solutions for all your needs. From business cards to custom designs, we deliver
            excellence.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <div
                key={service.id}
                id={service.id}
                className="bg-card border border-border rounded-xl overflow-hidden hover:border-primary transition-all duration-300 group hover:shadow-lg hover:shadow-primary/10"
              >
                <div className="bg-gradient-to-r from-primary/20 to-primary/5 p-6 border-b border-border">
                  <div className="text-5xl mb-3">{service.icon}</div>
                  <h2 className="text-2xl font-bold mb-2">{service.title}</h2>
                  <p className="text-muted-foreground text-sm">{service.description}</p>
                </div>

                <div className="p-6">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 group/btn w-full justify-center"
                  >
                    Get Quotation
                    <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50 border-y border-border">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Why Choose PRINTVERSE?</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "25+ Years Experience",
                desc: "Decades of printing expertise",
              },
              {
                title: "24/7 For Request",
                desc: "Fast and reliable delivery",
              },
              {
                title: "Premium Quality",
                desc: "Professional printing processes",
              },
              {
                title: "Custom Solutions",
                desc: "Tailored to your needs",
              },
            ].map((item, i) => (
              <div key={i} className="bg-background rounded-lg p-6 border border-border text-center">
                <h3 className="font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary/20 to-primary/10 border-t border-border">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Need a Custom Quote?</h2>
          <p className="text-lg text-muted-foreground mb-8">Contact us for detailed pricing and custom solutions</p>
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
