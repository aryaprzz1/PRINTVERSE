"use client"

import { Star } from "lucide-react"

export function ClientsSection() {
  const clients = [
    { name: "OLA", logo: "🚕" },
    { name: "HDB Financial Services", logo: "🏦" },
    { name: "Uni-Connect", logo: "🎓" },
    { name: "Modern Plastic India", logo: "♻️" },
    { name: "Parasmahavir Co-op Credit", logo: "💰" },
    { name: "Raj Computer Academy", logo: "💻" },
  ]

  const testimonials = [
    {
      name: "Rajesh Kumar",
      company: "OLA",
      text: "Exceptional quality and quick turnaround. PRINTVERSE has been our trusted printing partner for 2 years.",
      rating: 5,
    },
    {
      name: "Priya Desai",
      company: "HDB Financial Services",
      text: "Their design consultation and attention to detail is unmatched. Highly professional team!",
      rating: 5,
    },
    {
      name: "Amit Sharma",
      company: "Uni-Connect",
      text: "Best printing service in the city. They handle bulk orders without compromising quality.",
      rating: 5,
    },
    {
      name: "Neha Patel",
      company: "Modern Plastic India",
      text: "Affordable pricing with premium quality. Exactly what our business needed. Recommended!",
      rating: 5,
    },
    {
      name: "Vikram Singh",
      company: "Parasmahavir Co-op Credit",
      text: "Custom designs, perfect execution. They made our branding materials look absolutely stunning.",
      rating: 5,
    },
    {
      name: "Sarah Khan",
      company: "Raj Computer Academy",
      text: "Very responsive team. They delivered our bulk ID card printing in time despite tight deadline.",
      rating: 5,
    },
  ]

  return (
    <>
      {/* Past Clients Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50 border-y border-border">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Trusted by Industry Leaders</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From startups to established corporations, we've helped businesses across industries bring their vision to
              print
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {clients.map((client, i) => (
              <div
                key={i}
                className="bg-background border border-border rounded-lg p-6 flex flex-col items-center justify-center text-center hover:border-primary transition-all duration-300 group"
              >
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">{client.logo}</div>
                <h4 className="font-semibold text-sm mb-1 text-balance">{client.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Real feedback from real clients about their experience with PRINTVERSE
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, i) => (
              <div
                key={i}
                className="bg-card border border-border rounded-lg p-8 hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
              >
                {/* Rating Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, j) => (
                    <Star key={j} size={18} className="fill-primary text-primary" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-muted-foreground mb-6 italic">"{testimonial.text}"</p>

                {/* Client Info */}
                <div className="border-t border-border pt-4">
                  <p className="font-semibold text-sm">{testimonial.name}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
