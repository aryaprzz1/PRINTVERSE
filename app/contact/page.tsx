"use client"

import type React from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { WhatsappPopup } from "@/components/whatsapp-popup"
import { useState } from "react"
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, Copy, CreditCard } from "lucide-react"
import Image from "next/image"

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

  const phoneNumbers = [
    { number: "9892397770", link: "tel:9892397770" },
    { number: "8928633685", link: "tel:8928633685" },
    { number: "9004290668", link: "tel:9004290668" },
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
      const whatsappMessage = `*New Quote Request from PRINTVERSE*\n\n📝 *Details:*\n${formData.email ? `*Email:* ${formData.email}\n` : ""}${formData.phone ? `*Phone:* ${formData.phone}\n` : ""}*Service:* ${formData.service}\n${formData.message ? `*Message:* ${formData.message}` : ""}`
      const whatsappLink = `https://wa.me/919892397770?text=${encodeURIComponent(whatsappMessage)}`

      window.open(whatsappLink, "_blank")

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
    <main className="min-h-screen bg-background">
      <Navbar />
      <WhatsappPopup />

      {/* Header */}
      <section id="contact" className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
            Get in <span className="text-primary">Touch</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Have questions? We're here to help. Contact us for quotes, consultations, or to discuss your printing needs.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-2">Get Your Free Quote</h2>
              <p className="text-muted-foreground">Fill out the form and we'll get back to you shortly</p>
            </div>

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
                  <option value="Brochure Printing">Brochure Printing</option>
                  <option value="Calendars">Calendars</option>
                  <option value="Color Printing">Color Printing</option>
                  <option value="Custom Printing">Custom Printing</option>
                  <option value="Digital Printing">Digital Printing</option>
                  <option value="Letterhead">Letterhead</option>
                  <option value="Magazine">Magazine</option>
                  <option value="Banners">Banners</option>
                  <option value="Binding Services">Binding Services</option>
                  <option value="Posters">Posters</option>
                  <option value="Identity Cards">Identity Cards</option>
                  <option value="Lanyard">Lanyard</option>
                  <option value="Lamination">Lamination</option>
                  <option value="Punching">Punching</option>
                </select>
                {errors.service && <p className="text-red-500 text-sm mt-1">{errors.service}</p>}
              </div>

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

          {/* Contact Info & Payment */}
          <div className="space-y-8">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-card border border-border rounded-lg">
                  <Phone className="text-primary flex-shrink-0 mt-1" size={24} />
                  <div className="flex-1">
                    <p className="font-semibold mb-2">Phone Numbers</p>
                    <div className="space-y-1">
                      {phoneNumbers.map((phone, i) => (
                        <a
                          key={i}
                          href={phone.link}
                          className="block text-primary hover:underline font-mono"
                        >
                          {phone.number}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>

                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=printversemumbai@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-4 bg-card border border-border rounded-lg hover:border-primary transition-colors group"
                >
                  <Mail className="text-primary flex-shrink-0 mt-1" size={24} />
                  <div>
                    <p className="font-semibold mb-1 group-hover:text-primary transition-colors">Email</p>
                    <p className="text-muted-foreground group-hover:text-foreground transition-colors">
                      printversemumbai@gmail.com
                    </p>
                  </div>
                </a>

                <div className="flex items-start gap-4 p-4 bg-card border border-border rounded-lg">
                  <MapPin className="text-primary flex-shrink-0 mt-1" size={24} />
                  <div>
                    <p className="font-semibold mb-1">Location</p>
                    <p className="text-muted-foreground text-sm">
                      Building no.5, C-88, Mittal Industrial Estate Rd, Marol, Andheri East, Mumbai, Maharashtra 400059
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Payment Methods */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Payment Methods</h2>
              <div className="space-y-6">
                {/* GPay UPI */}
                <div className="bg-card border border-border rounded-lg p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <CreditCard className="text-primary" size={24} />
                    <h3 className="text-xl font-bold">GPay / UPI</h3>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-muted-foreground mb-2">UPI ID</p>
                      <div className="flex items-center justify-between gap-4 p-3 bg-background rounded-lg border border-border">
                        <p className="font-mono text-sm font-semibold">printverse25@kotak</p>
                        <button
                          onClick={() => copyToClipboard("printverse25@kotak", "upi")}
                          className="p-2 hover:bg-secondary rounded transition-colors flex-shrink-0"
                          title="Copy to clipboard"
                        >
                          {copiedItem === "upi" ? (
                            <CheckCircle className="text-green-500" size={18} />
                          ) : (
                            <Copy className="text-muted-foreground hover:text-foreground" size={18} />
                          )}
                        </button>
                      </div>
                    </div>
                    <div className="bg-background rounded-lg p-4 border border-border flex items-center justify-center">
                      <Image
                        src="/scan printverse.jpeg"
                        alt="UPI QR Code"
                        width={250}
                        height={250}
                        className="w-full max-w-[250px] h-auto rounded-lg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-bold mb-4">Business Hours</h3>
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
          <div id="map" className="relative w-full h-96 rounded-lg overflow-hidden border border-border mb-8">
            <iframe
              width="100%"
              height="100%"
              frameBorder="0"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.6066649999985!2d72.82916!3d19.11976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9d0b5b5b5b5%3A0x5b5b5b5b5b5b5b5b!2sC-88%2C%20Mittal%20Industrial%20Estate%2C%20Marol%2C%20Andheri%20East%2C%20Mumbai%2C%20Maharashtra%20400059!5e0!3m2!1sen!2sin!4v1234567890"
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            />
          </div>
          <div className="text-center">
            <h3 className="text-xl font-bold mb-2">PRINTVERSE</h3>
            <p className="text-muted-foreground mb-4">
              Building no.5, C-88, Mittal Industrial Estate Rd, Marol, Andheri East, Mumbai, Maharashtra 400059
            </p>
            <a
              href="https://maps.app.goo.gl/U1vruJa9RAmwXUby9?g_st=aw"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-2 border-2 border-primary text-primary rounded-lg hover:bg-primary hover:text-primary-foreground transition-all font-semibold"
            >
              Get Directions
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
