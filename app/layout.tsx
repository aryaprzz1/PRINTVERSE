import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "PRINTVERSE - Premium Printing Services | Mumbai",
  description:
    "Premium printing solutions with 25+ years of expertise. ID cards, banners, binding services, lamination & more. 24/7 for request. Get a free quote!",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/newlogo.png",
        type: "image/png",
      },
    ],
    apple: "/newlogo.png",
  },
  openGraph: {
    title: "PRINTVERSE - Premium Printing Services | Mumbai",
    description:
      "Premium printing solutions with 25+ years of expertise. ID cards, banners, binding services, lamination & more. 24/7 for request. Get a free quote!",
    images: [
      {
        url: "/newlogo.png",
        width: 1200,
        height: 630,
        alt: "PRINTVERSE Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PRINTVERSE - Premium Printing Services | Mumbai",
    description:
      "Premium printing solutions with 25+ years of expertise. ID cards, banners, binding services, lamination & more. 24/7 for request. Get a free quote!",
    images: ["/newlogo.png"],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#ffffff" media="(prefers-color-scheme: light)" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                // Always start in light mode
                document.documentElement.classList.remove('dark');
                localStorage.setItem('theme', 'light');
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body className={`font-sans antialiased bg-background text-foreground`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} disableTransitionOnChange={false}>
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
