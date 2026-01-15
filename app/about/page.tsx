"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { WhatsappPopup } from "@/components/whatsapp-popup"
import { Award, Zap, Shield, Cpu, Gauge, Users, MapPin, Phone, Mail } from "lucide-react"
import Image from "next/image"

export default function About() {
  const machines = [
    {
      name: "Lithrone 28 Printing Machine",
      specs: ["Advanced printing capabilities", "Professional color accuracy", "High-volume production"],
      image: "/machines/m1.png",
    },
    {
      name: "KOWA Digital Printing System",
      specs: ["Digital printing technology", "Fast turnaround", "Precision output"],
      image: "/machines/m2.png",
    },
    {
      name: "Industrial Laminating Machine",
      specs: ["Professional lamination", "Premium finishing", "Durability enhancement"],
      image: "/machines/m3.png",
    },
  ]

  const milestones = [
    { year: "1997", event: "Original printing press established" },
    { year: "2004", event: "Expanded to modern facility" },
    { year: "2008", event: "Installed first digital color press" },
    { year: "2012", event: "Launched ID card printing services" },
    { year: "2025", event: "Launched PRINTVERSE - Digital identity" },
  ]

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <WhatsappPopup />

      {/* Header */}
      <section id="about" className="pt-32 pb-12 px-4 sm:px-6 lg:px-8 border-b border-border">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
            About <span className="text-primary">PRINTVERSE</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Premium printing solutions with 28+ years of collective expertise in the industry
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <h2 className="text-4xl font-bold mb-6">Our Story</h2>
              <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                At Printverse, we blend fresh ideas with decades of expertise. Though founded in 2025, our team brings
                over 28 years of collective experience in the printing industry, ensuring top-quality results you can
                trust.
              </p>
              <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                We offer high-quality, affordable printing — from single to 4-color prints, brochures, banners, visiting
                cards, ID cards, and custom designs to bulk printing — all delivered quickly and professionally.
              </p>
              <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                We also provide all types of binding services, plus lamination and punching, making us your one-stop
                solution for everything in print. Whether you're an individual or a business, Printverse is here to
                bring your vision to life.
              </p>

              <div className="grid grid-cols-3 gap-6 mt-8">
                <div>
                  <p className="text-3xl font-bold text-primary">28+</p>
                  <p className="text-sm text-muted-foreground">Years Experience</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-primary">500+</p>
                  <p className="text-sm text-muted-foreground">Happy Clients</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-primary">24h</p>
                  <p className="text-sm text-muted-foreground">Quick Turnaround</p>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-card border border-border rounded-lg">
                <p className="text-sm text-muted-foreground">
                  <span className="font-semibold">GSTIN:</span> 27ABHFP1115D1ZO
                </p>
              </div>
            </div>

            <div className="animate-slide-in-left">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/50 rounded-2xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity" />
                <div className="relative bg-gradient-to-br from-card to-secondary rounded-2xl p-8 border border-border overflow-hidden">
                  <Image
                    src="/logo.png"
                    alt="PRINTVERSE Logo"
                    width={400}
                    height={400}
                    className="w-full h-auto group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50 border-y border-border">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Our Core Values</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Award,
                title: "Quality Excellence",
                description: "Every print meets international quality standards with zero compromise",
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
                description: "24-hour turnaround guaranteed with consistent quality delivery",
              },
              {
                icon: Cpu,
                title: "Expertise",
                description: "28+ years of printing experience backed by skilled professionals",
              },
              {
                icon: Gauge,
                title: "Precision",
                description: "Attention to detail in every aspect of production and delivery",
              },
            ].map((value, i) => (
              <div
                key={i}
                className="bg-background rounded-xl p-8 border border-border text-center hover:border-primary transition-all duration-300 group hover:bg-card hover:shadow-lg hover:shadow-primary/10 hover-lift"
              >
                <value.icon className="w-12 h-12 text-primary mx-auto mb-4 group-hover:animate-glow-pulse" />
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Machines & Equipment */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Our Equipment & Machines</h2>

          <div className="overflow-x-auto pb-4">
            <div className="flex gap-6 min-w-max">
              {machines.map((machine, i) => (
                <div
                  key={i}
                  className="bg-card border border-border rounded-xl overflow-hidden hover:border-primary transition-all duration-300 group flex-shrink-0 w-64 hover:shadow-lg hover:shadow-primary/10"
                >
                  <div className="bg-gradient-to-r from-primary/20 to-primary/5 relative overflow-hidden h-48">
                    <Image
                      src={machine.image || "/placeholder.svg"}
                      alt={machine.name}
                      fill
                      objectFit="cover"
                      className="group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="text-lg font-bold group-hover:text-primary transition-colors">{machine.name}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50 border-y border-border">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Our Journey</h2>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {milestones.map((milestone, i) => (
                <div key={i} className="flex gap-6 animate-fade-in-up" style={{ animationDelay: `${i * 100}ms` }}>
                  <div className="flex flex-col items-center">
                    <div className="w-4 h-4 bg-primary rounded-full mt-2 border-4 border-background" />
                    {i < milestones.length - 1 && <div className="w-1 h-20 bg-primary/30 mt-4" />}
                  </div>
                  <div className="pb-8">
                    <p className="text-2xl font-bold text-primary">{milestone.year}</p>
                    <p className="text-lg font-semibold mt-1">{milestone.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Visit Us */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Visit Us</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Info Card */}
            <div className="bg-card border border-border rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="text-primary flex-shrink-0 mt-1" size={24} />
                  <div>
                    <p className="font-semibold mb-1">Address</p>
                    <p className="text-muted-foreground">
                      Building no.5, C-88, Mittal Industrial Estate Rd, Mittal Industrial Estate, Marol, Andheri East,
                      Mumbai, Maharashtra 400059
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <Phone className="text-primary flex-shrink-0" size={24} />
                  <div>
                    <p className="font-semibold mb-2">Phone</p>
                    <div className="space-y-1">
                      <a href="tel:9892397770" className="text-primary hover:underline font-mono block">
                        9892397770
                      </a>
                      <a href="tel:8928633685" className="text-primary hover:underline font-mono block">
                        8928633685
                      </a>
                      <a href="tel:9004290668" className="text-primary hover:underline font-mono block">
                        9004290668
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <Mail className="text-primary flex-shrink-0" size={24} />
                  <div>
                    <p className="font-semibold mb-1">Email</p>
                    <a
                      href="https://mail.google.com/mail/?view=cm&fs=1&to=printversemumbai@gmail.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      printversemumbai@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              <a
                href="https://www.google.com/maps/search/Building+no.5+C-88+Mittal+Industrial+Estate+Rd+Andheri+East+Mumbai"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-8 px-6 py-2 border-2 border-primary text-primary rounded-lg hover:bg-primary hover:text-primary-foreground transition-all font-semibold"
              >
                View on Google Maps
              </a>
            </div>

            {/* Google Maps Embed */}
            <div className="bg-card border border-border rounded-lg overflow-hidden h-96">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.6066649999985!2d72.82916!3d19.11976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9d0b5b5b5b5%3A0x5b5b5b5b5b5b5b5b!2sC-88%2C%20Mittal%20Industrial%20Estate%2C%20Marol%2C%20Andheri%20East!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            
            <div className="mt-4 text-center">
              <a
                href="https://maps.app.goo.gl/U1vruJa9RAmwXUby9?g_st=aw"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-2 border-2 border-primary text-primary rounded-lg hover:bg-primary hover:text-primary-foreground transition-all font-semibold"
              >
                View on Google Maps
              </a>
            </div>
          </div>
        </div>
      </section>


      <Footer />
    </main>
  )
}
