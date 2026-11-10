"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const navLinks = [
  { href: "#servicos", label: "Serviços" },
  { href: "#diferenciais", label: "Diferenciais" },
  { href: "#como-funciona", label: "Como Funciona" },
  { href: "#depoimentos", label: "Depoimentos" },
  { href: "#faq", label: "FAQ" },
  { href: "#contato", label: "Contato" },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#0F2D52] rounded-lg flex items-center justify-center">
              <span className="text-[#C9A227] font-bold text-xl">Z</span>
            </div>
            <div className="hidden sm:block">
              <span className="text-[#0F2D52] font-bold text-lg">Zamani</span>
              <span className="text-[#1D4E89] text-sm block -mt-1">Perícias e Cálculos</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[#0F2D52] hover:text-[#C9A227] transition-colors text-sm font-medium"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link
              href="#contato"
              className="bg-[#C9A227] hover:bg-[#D4B64A] text-[#0F2D52] px-6 py-2.5 rounded-lg font-semibold text-sm transition-colors"
            >
              Solicitar Análise
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-[#0F2D52]"
            aria-label="Menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-border"
          >
            <nav className="flex flex-col px-4 py-4 gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-[#0F2D52] hover:text-[#C9A227] transition-colors font-medium py-2"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="#contato"
                onClick={() => setIsOpen(false)}
                className="bg-[#C9A227] hover:bg-[#D4B64A] text-[#0F2D52] px-6 py-3 rounded-lg font-semibold text-center transition-colors mt-2"
              >
                Solicitar Análise
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
