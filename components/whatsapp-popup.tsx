"use client"

import { useState, useEffect } from "react"
import { MessageCircle, X } from "lucide-react"

export function WhatsappPopup() {
  const [isOpen, setIsOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const phoneNumber = "919892397770"
  const message = "Hi PRINTVERSE, I'm interested in your printing services. Can you help?"

  return (
    <>
      {/* WhatsApp Floating Button */}
      <div
        className={`fixed bottom-6 right-6 z-40 transition-all duration-300 ${
          isVisible ? "opacity-100 scale-100" : "opacity-0 scale-0"
        }`}
      >
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-14 h-14 rounded-full bg-green-500 text-white shadow-lg hover:bg-green-600 transition-all flex items-center justify-center hover:scale-110 animate-glow-pulse"
          title="Chat with us on WhatsApp"
        >
          <MessageCircle size={24} />
        </button>

        {/* Popup Menu */}
        {isOpen && (
          <div className="absolute bottom-20 right-0 bg-card border border-border rounded-lg shadow-xl p-4 w-64 animate-fade-in-up">
            <div className="flex justify-between items-center mb-3">
              <h3 className="font-bold text-sm">Start a Conversation</h3>
              <button onClick={() => setIsOpen(false)} className="text-muted-foreground hover:text-foreground">
                <X size={18} />
              </button>
            </div>
            <p className="text-xs text-muted-foreground mb-4">
              Chat with us for quick responses about your printing needs
            </p>
            <a
              href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors font-semibold"
            >
              <MessageCircle size={18} />
              Open WhatsApp
            </a>
          </div>
        )}
      </div>
    </>
  )
}
