"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { CheckCircle, ArrowRight, MessageCircle } from "lucide-react"

const trustIndicators = [
  "Atendimento em todo Brasil",
  "Agilidade na entrega",
  "Rigor técnico especializado",
  "Atendimento personalizado",
  "Total sigilo e confidencialidade",
]

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-gradient-to-br from-[#F5F7FA] via-white to-[#F5F7FA]">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-96 h-96 bg-[#0F2D52] rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#C9A227] rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 bg-[#0F2D52]/10 text-[#0F2D52] px-4 py-2 rounded-full text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-[#C9A227] rounded-full" />
              Excelência em Perícias Judiciais
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0F2D52] leading-tight mb-6">
              Perícias e Cálculos Judiciais com{" "}
              <span className="text-[#C9A227]">Precisão</span>,{" "}
              <span className="text-[#1D4E89]">Credibilidade</span> e{" "}
              <span className="text-[#0F2D52]">Segurança Técnica</span>
            </h1>

            <p className="text-lg text-[#1D4E89] mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Atendimento especializado para advogados, empresas e pessoas físicas em todo o Brasil. 
              Elaboramos laudos, pareceres e cálculos judiciais com rigor técnico, agilidade e total conformidade legal.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10">
              <Link
                href="#contato"
                className="inline-flex items-center justify-center gap-2 bg-[#C9A227] hover:bg-[#D4B64A] text-[#0F2D52] px-8 py-4 rounded-lg font-bold text-lg transition-all hover:shadow-lg hover:shadow-[#C9A227]/30"
              >
                Solicitar Análise Gratuita
                <ArrowRight size={20} />
              </Link>
              <Link
                href="https://wa.me/5500000000000"
                target="_blank"
                className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20BD5A] text-white px-8 py-4 rounded-lg font-bold text-lg transition-all hover:shadow-lg"
              >
                <MessageCircle size={20} />
                Falar no WhatsApp
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {trustIndicators.map((indicator, index) => (
                <motion.div
                  key={indicator}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                  className="flex items-center gap-2 text-[#0F2D52]"
                >
                  <CheckCircle className="w-5 h-5 text-[#C9A227] flex-shrink-0" />
                  <span className="text-sm font-medium">{indicator}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image/Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative">
              {/* Main Card */}
              <div className="bg-white rounded-2xl shadow-2xl p-8 border border-[#E2E8F0]">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-[#0F2D52] rounded-xl flex items-center justify-center">
                    <span className="text-[#C9A227] font-bold text-3xl">Z</span>
                  </div>
                  <div>
                    <h3 className="text-[#0F2D52] font-bold text-xl">Zamani</h3>
                    <p className="text-[#1D4E89] text-sm">Perícias e Cálculos</p>
                  </div>
                </div>
                
                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-[#F5F7FA] rounded-xl p-4 text-center">
                    <div className="text-3xl font-bold text-[#0F2D52]">+500</div>
                    <div className="text-sm text-[#1D4E89]">Análises Realizadas</div>
                  </div>
                  <div className="bg-[#F5F7FA] rounded-xl p-4 text-center">
                    <div className="text-3xl font-bold text-[#C9A227]">100%</div>
                    <div className="text-sm text-[#1D4E89]">Conformidade Legal</div>
                  </div>
                  <div className="bg-[#F5F7FA] rounded-xl p-4 text-center">
                    <div className="text-3xl font-bold text-[#0F2D52]">27</div>
                    <div className="text-sm text-[#1D4E89]">Estados Atendidos</div>
                  </div>
                  <div className="bg-[#F5F7FA] rounded-xl p-4 text-center">
                    <div className="text-3xl font-bold text-[#C9A227]">98%</div>
                    <div className="text-sm text-[#1D4E89]">Satisfação</div>
                  </div>
                </div>
              </div>

              {/* Floating Badge */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 bg-[#C9A227] text-[#0F2D52] px-4 py-2 rounded-full font-bold text-sm shadow-lg"
              >
                Análise Gratuita
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
