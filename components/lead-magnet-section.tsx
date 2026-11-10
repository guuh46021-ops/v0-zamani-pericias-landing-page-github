"use client"

import { motion } from "framer-motion"
import { BookOpen, CheckCircle, ArrowRight } from "lucide-react"

const benefits = [
  "Evite prejuízos financeiros",
  "Identifique inconsistências rapidamente",
  "Conheça seus direitos",
  "Material prático e atualizado",
]

export function LeadMagnetSection() {
  return (
    <section className="py-20 bg-[#0F2D52]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-[#C9A227] font-semibold text-sm uppercase tracking-wider mb-4">
              Material Gratuito
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Receba Gratuitamente Nosso{" "}
              <span className="text-[#C9A227]">Guia Exclusivo</span>
            </h2>
            <p className="text-xl text-white/90 mb-6 font-medium">
              E-book: Como Identificar Erros em Cálculos Trabalhistas, 
              Previdenciários e Financeiros
            </p>

            <div className="space-y-3 mb-8">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-center gap-3 text-white">
                  <CheckCircle className="w-5 h-5 text-[#C9A227] flex-shrink-0" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>

            <button className="inline-flex items-center gap-2 bg-[#C9A227] hover:bg-[#D4B64A] text-[#0F2D52] px-8 py-4 rounded-lg font-bold text-lg transition-all hover:shadow-lg">
              <BookOpen size={20} />
              Baixar Guia Gratuito
              <ArrowRight size={20} />
            </button>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="bg-[#1D4E89] rounded-xl p-6 mb-6">
                <BookOpen className="w-16 h-16 text-[#C9A227] mx-auto mb-4" />
                <h3 className="text-white text-center font-bold text-lg">
                  E-book Exclusivo
                </h3>
              </div>
              <div className="space-y-3">
                <div className="h-3 bg-white/20 rounded-full w-full" />
                <div className="h-3 bg-white/20 rounded-full w-4/5" />
                <div className="h-3 bg-white/20 rounded-full w-3/4" />
                <div className="h-3 bg-white/20 rounded-full w-5/6" />
              </div>
              <div className="mt-6 pt-6 border-t border-white/20">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#C9A227] rounded-full flex items-center justify-center">
                    <span className="text-[#0F2D52] font-bold">Z</span>
                  </div>
                  <div>
                    <div className="text-white font-medium">Zamani Perícias</div>
                    <div className="text-white/60 text-sm">Material Exclusivo</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 bg-[#C9A227] text-[#0F2D52] px-4 py-2 rounded-full font-bold text-sm shadow-lg"
            >
              100% Gratuito
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
