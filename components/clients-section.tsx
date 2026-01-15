"use client"

export function ClientsSection() {
  const clients = [
    { name: "OLA", logo: "🚕" },
    { name: "HDB Financial Services", logo: "🏦" },
    { name: "Uni-Connect", logo: "🎓" },
    { name: "Modern Plastic India", logo: "♻️" },
    { name: "Parasmahavir Co-op Credit", logo: "💰" },
    { name: "Raj Computer Academy", logo: "💻" },
  ]

  return (
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
  )
}
