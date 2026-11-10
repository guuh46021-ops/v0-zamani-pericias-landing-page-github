"use client"

import Link from "next/link"
import Image from "next/image"
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
    <section className="relative min-h-screen flex items-center pt-24 overflow-hidden bg-gradient-to-br from-[#F5F7FA] via-white to-[#F5F7FA]">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-96 h-96 bg-[#0F2D52] rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#C9A227] rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center md:text-left"
          >
            <div className="inline-flex items-center gap-2 bg-[#0F2D52]/10 text-[#0F2D52] px-4 py-2 rounded-full text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-[#C9A227] rounded-full" />
              Excelência em Perícias Judiciais
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-4xl lg:text-6xl font-bold text-[#0F2D52] leading-tight mb-6">
              Perícias e Cálculos Judiciais com{" "}
              <span className="text-[#C9A227]">Precisão</span>,{" "}
              <span className="text-[#1D4E89]">Credibilidade</span> e{" "}
              <span className="text-[#0F2D52]">Segurança Técnica</span>
            </h1>

            <p className="text-lg text-[#1D4E89] mb-8 max-w-xl mx-auto md:mx-0 leading-relaxed">
              Atendimento especializado para advogados, empresas e pessoas físicas em todo o Brasil. 
              Elaboramos laudos, pareceres e cálculos judiciais com rigor técnico, agilidade e total conformidade legal.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row gap-4 justify-center md:justify-start mb-10">
              <Link
                href="#contato"
                className="inline-flex items-center justify-center gap-2 bg-[#C9A227] hover:bg-[#D4B64A] text-[#0F2D52] px-8 py-4 rounded-lg font-bold text-lg transition-all hover:shadow-lg hover:shadow-[#C9A227]/30"
              >
                Solicitar Análise Gratuita
                <ArrowRight size={20} />
              </Link>
              <Link
                href="https://wa.me/5511933091409"
                target="_blank"
                rel="noreferrer"
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

          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative mx-auto w-full max-w-xl md:max-w-none"
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-2xl ring-1 ring-[#0F2D52]/10">
              <Image
                src="/images/consultoria-pericial.png"
                alt="Mulher aposentada conversa com especialista sobre documentos de aposentadoria"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F2D52]/75 via-transparent to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8 text-left">
                <span className="mb-3 inline-flex rounded-full bg-[#C9A227] px-3 py-1 text-xs font-bold uppercase tracking-wide text-[#0F2D52]">
                  Técnica com olhar humano
                </span>
                <p className="max-w-md text-xl font-semibold leading-snug text-white sm:text-2xl">
                  Cada caso merece atenção, clareza e uma análise cuidadosa.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
