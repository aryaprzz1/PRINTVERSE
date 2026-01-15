"use client"

import type React from "react"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { WhatsappPopup } from "@/components/whatsapp-popup"
import { useState } from "react"
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, Copy, MessageCircle } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    service: "",
    message: "",
  })
  const [errors, setErrors] = useState<{ [key: string]: string }>({})
  const [loading, setLoading] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const [copiedItem, setCopiedItem] = useState<string | null>(null)

  const contactInfo = [
    {
      icon: Phone,
      label: "Phone",
      value: "9892397770",
      link: "tel:9892397770",
    },
    {
      icon: Mail,
      label: "Email",
      value: "printversemumbai@gmail.com",
      link: "mailto:printversemumbai@gmail.com",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Andheri East, Mumbai",
      link: "#map",
    },
  ]

  const paymentInfo = [
    { method: "UPI", id: "printverse@okhdfcbank", icon: "📱" },
    { method: "Bank Transfer", id: "Account: 1234567890123 | IFSC: HDFC0001234", icon: "🏦" },
    { method: "Scanner (Cash)", id: "Scanner ID: PV2024001", icon: "💳" },
    { method: "WhatsApp Pay", id: "9892397770", icon: "💬" },
  ]

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const newErrors: { [key: string]: string } = {}

    const hasEmail = formData.email.trim().length > 0
    const hasPhone = formData.phone.trim().length > 0

    if (!hasEmail && !hasPhone) {
      newErrors.contact = "Please provide either an email or phone number"
    }

    if (!formData.service) {
      newErrors.service = "Service is required"
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    setLoading(true)

    try {
      // Send to WhatsApp
      const whatsappMessage = `*New Quote Request from PRINTVERSE*\n\n📝 *Details:*\n${formData.email ? `*Email:* ${formData.email}\n` : ""}${formData.phone ? `*Phone:* ${formData.phone}\n` : ""}*Service:* ${formData.service}\n${formData.message ? `*Message:* ${formData.message}` : ""}`
      const whatsappLink = `https://wa.me/919892397770?text=${encodeURIComponent(whatsappMessage)}`

      // Open WhatsApp
      window.open(whatsappLink, "_blank")

      // Reset form
      setFormData({ email: "", phone: "", service: "", message: "" })
      setSubmitStatus("success")

      setTimeout(() => setSubmitStatus("idle"), 5000)
    } catch (error) {
      setSubmitStatus("error")
      setTimeout(() => setSubmitStatus("idle"), 5000)
    } finally {
      setLoading(false)
    }
  }

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text)
    setCopiedItem(id)
    setTimeout(() => setCopiedItem(null), 2000)
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-background via-background to-secondary">
      <Navbar />
      <WhatsappPopup />

      {/* Header */}
      <section id="contact" className="pt-32 pb-12 px-4 sm:px-6 lg:px-8 border-b border-border">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
            Get in <span className="text-primary">Touch</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Have questions? We're here to help. Contact us for quotes, consultations, or to discuss your printing needs.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactInfo.map((info, i) => (
              <a
                key={i}
                href={info.link}
                className="group bg-card border border-border rounded-lg p-8 hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
              >
                <info.icon className="w-12 h-12 text-primary mb-4 group-hover:animate-glow-pulse" />
                <h3 className="text-lg font-bold mb-2">{info.label}</h3>
                <p className="text-muted-foreground group-hover:text-foreground transition-colors">{info.value}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2 animate-fade-in-up">
            <h2 className="text-3xl font-bold mb-8">Get Your Free Quote</h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                  placeholder="your@email.com (or provide phone)"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                  placeholder="+91 XXXXX XXXXX (or provide email)"
                />
                {errors.contact && <p className="text-red-500 text-sm mt-1">{errors.contact}</p>}
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">
                  Service Needed <span className="text-red-500">*</span>
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-card border rounded-lg focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all ${
                    errors.service ? "border-red-500" : "border-border"
                  }`}
                >
                  <option value="">Select a service</option>
                  <option value="Banners">Banners</option>
                  <option value="Binding">Binding</option>
                  <option value="Brochure Printing">Brochure Printing</option>
                  <option value="Business Card Printing">Business Card Printing</option>
                  <option value="Identity Cards">Identity Cards</option>
                  <option value="Custom Printing">Custom Printing</option>
                  <option value="Lamination">Lamination</option>
                  <option value="Punching">Punching</option>
                  <option value="Other">Other</option>
                </select>
                {errors.service && <p className="text-red-500 text-sm mt-1">{errors.service}</p>}
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-semibold mb-2">Project Details</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all resize-none"
                  placeholder="Tell us about your printing project..."
                />
              </div>

              {/* Status Messages */}
              {submitStatus === "success" && (
                <div className="flex items-center gap-3 p-4 bg-green-500/20 border border-green-500/50 rounded-lg">
                  <CheckCircle className="text-green-500" size={20} />
                  <p className="text-green-400">Quote request sent! We'll contact you shortly.</p>
                </div>
              )}
              {submitStatus === "error" && (
                <div className="flex items-center gap-3 p-4 bg-red-500/20 border border-red-500/50 rounded-lg">
                  <AlertCircle className="text-red-500" size={20} />
                  <p className="text-red-400">Something went wrong. Please try again.</p>
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full px-6 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 disabled:opacity-50 flex items-center justify-center gap-2 group"
              >
                <Send className="group-hover:translate-x-1 transition-transform" size={20} />
                {loading ? "Sending..." : "Send Quote Request"}
              </button>
            </form>
          </div>

          {/* Sidebar - Payment Info */}
          <div className="space-y-8 animate-slide-in-left">
            {/* Payment Methods */}
            <div>
              <h3 className="text-2xl font-bold mb-6">Payment Methods</h3>

              <div className="space-y-4">
                {paymentInfo.map((payment, i) => (
                  <div key={i} className="bg-card border border-border rounded-lg p-4">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <p className="text-sm text-muted-foreground">{payment.method}</p>
                        <p className="font-mono text-sm mt-1 break-all">{payment.id}</p>
                      </div>
                      <button
                        onClick={() => copyToClipboard(payment.id, payment.method)}
                        className="p-2 hover:bg-secondary rounded transition-colors flex-shrink-0"
                        title="Copy to clipboard"
                      >
                        {copiedItem === payment.method ? (
                          <CheckCircle className="text-green-500" size={18} />
                        ) : (
                          <Copy className="text-muted-foreground hover:text-foreground" size={18} />
                        )}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* WhatsApp Direct */}
            <div className="bg-gradient-to-br from-green-500/20 to-green-500/5 border border-green-500/50 rounded-lg p-6">
              <div className="flex items-center gap-2 mb-4">
                <MessageCircle className="text-green-500" size={24} />
                <h4 className="font-bold">Quick Contact via WhatsApp</h4>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Get instant responses to your printing inquiries through WhatsApp
              </p>
              <a
                href="https://wa.me/919892397770?text=Hi%20PRINTVERSE%2C%20I%20need%20printing%20services"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded-lg font-semibold hover:bg-green-600 transition-colors w-full justify-center"
              >
                <MessageCircle size={18} />
                Chat on WhatsApp
              </a>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <h4 className="font-bold mb-4">Business Hours</h4>
              <div className="space-y-2 text-sm">
                <p>
                  <span className="text-muted-foreground">Monday - Sunday:</span> 9:00 AM - 9:00 PM
                </p>
                <p className="text-xs text-primary pt-2">Emergency orders available 24/7</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50 border-y border-border">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Find Us</h2>
          <div id="map" className="relative w-full h-96 rounded-lg overflow-hidden border border-border">
            <iframe
              width="100%"
              height="100%"
              frameBorder="0"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.6066649999985!2d72.82916!3d19.11976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9d0b5b5b5b5%3A0x5b5b5b5b5b5b5b5b!2sC-88%2C%20Mittal%20Industrial%20Estate%2C%20Marol%2C%20Andheri%20East!5e0!3m2!1sen!2sin!4v1234567890"
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            />
          </div>
          <div className="mt-8 text-center">
            <h3 className="text-xl font-bold mb-2">PRINTVERSE</h3>
            <p className="text-muted-foreground mb-2">
              Building no.5, C-88, Mittal Industrial Estate Rd, Marol, Andheri East, Mumbai, Maharashtra 400059
            </p>
            <div className="flex flex-col gap-2 justify-center mt-4">
              <a href="tel:9892397770" className="text-primary hover:underline font-semibold">
                📞 9892397770
              </a>
              <a href="tel:9004290668" className="text-primary hover:underline font-semibold">
                📞 9004290668
              </a>
            </div>
            <a
              href="https://www.google.com/maps/search/C-88+Mittal+Industrial+Estate+Marol+Andheri+East"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 px-6 py-2 border-2 border-primary text-primary rounded-lg hover:bg-primary hover:text-primary-foreground transition-all"
            >
              Get Directions
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Quick Links */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Quick Answers</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { q: "How fast can you print?", a: "24-hour turnaround available" },
              { q: "Do you offer bulk discounts?", a: "Yes, volume pricing available" },
              { q: "Can you handle custom designs?", a: "Absolutely, design included" },
              { q: "What payment methods?", a: "UPI, Bank, Scanner, WhatsApp" },
            ].map((faq, i) => (
              <div
                key={i}
                className="bg-card border border-border rounded-lg p-6 hover:border-primary transition-colors"
              >
                <p className="font-semibold text-primary mb-2">{faq.q}</p>
                <p className="text-sm text-muted-foreground">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
