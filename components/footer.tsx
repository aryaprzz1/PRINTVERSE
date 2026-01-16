"use client"

import Link from "next/link"
import { Mail, Phone, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-secondary border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-lg font-bold mb-4">PRINTVERSE</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Premium printing solutions. 25+ years of collective expertise in quality printing.
            </p>
            <p className="text-xs font-bold text-primary border border-primary/30 px-3 py-2 rounded bg-primary/10 inline-block">
              GSTIN: <span className="text-foreground">27ABHFP1115D1ZO</span>
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-primary transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-primary transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services#brochure-printing" className="hover:text-primary transition-colors">
                  Brochure Printing
                </Link>
              </li>
              <li>
                <Link href="/services#calendars" className="hover:text-primary transition-colors">
                  Calendars
                </Link>
              </li>
              <li>
                <Link href="/services#color-printing" className="hover:text-primary transition-colors">
                  Color Printing
                </Link>
              </li>
              <li>
                <Link href="/services#custom-printing" className="hover:text-primary transition-colors">
                  Custom Printing
                </Link>
              </li>
              
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-primary" />
                <a href="tel:9892397770" className="hover:text-primary transition-colors">
                  9892397770
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-primary" />
                <a href="tel:8928633685" className="hover:text-primary transition-colors">
                  8928633685
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-primary" />
                <a href="tel:9004290668" className="hover:text-primary transition-colors">
                  9004290668
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-primary" />
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=printversemumbai@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  printversemumbai@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Links & Copyright */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex gap-4">
            <a
              href="https://www.linkedin.com/company/printversemumbai/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 hover:bg-card rounded-lg transition-colors text-muted-foreground hover:text-primary"
              title="Follow us on LinkedIn"
            >
              <Linkedin size={20} />
            </a>
          </div>
          <div className="text-center md:text-right">
            <p className="text-xs text-muted-foreground mb-1">
              © 2025 PRINTVERSE. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground mb-1">
              Website: printversemumbai.com
            </p>
            <p className="text-xs font-bold text-primary">
              GSTIN: <span className="text-foreground">27ABHFP1115D1ZO</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
