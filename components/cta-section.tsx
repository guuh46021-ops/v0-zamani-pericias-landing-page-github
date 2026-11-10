"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, MessageCircle } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-20 bg-[#0F2D52] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#C9A227] rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#1D4E89] rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Precisa de <span className="text-[#C9A227]">Perícia</span> ou{" "}
            <span className="text-[#C9A227]">Cálculo Judicial</span>?
          </h2>
          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
            Fale agora com um especialista e receba uma análise inicial gratuita.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="#contato"
              className="inline-flex items-center justify-center gap-2 bg-[#C9A227] hover:bg-[#D4B64A] text-[#0F2D52] px-8 py-4 rounded-lg font-bold text-lg transition-all hover:shadow-lg hover:shadow-[#C9A227]/30"
            >
              Solicitar Orçamento
              <ArrowRight size={20} />
            </Link>
            <Link
              href="https://wa.me/5500000000000"
              target="_blank"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/30 px-8 py-4 rounded-lg font-bold text-lg transition-all"
            >
              <MessageCircle size={20} />
              Falar no WhatsApp
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
