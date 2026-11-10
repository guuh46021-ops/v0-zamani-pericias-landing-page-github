"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Send, Loader2 } from "lucide-react"

const serviceOptions = [
  "Cálculos Trabalhistas",
  "Cálculos Previdenciários",
  "Cálculos Cíveis",
  "Cálculos Financeiros",
  "Liquidação de Sentença",
  "Assistência Técnica Pericial",
  "Pareceres Técnicos",
  "Perícias Contábeis",
  "Outro",
]

export function ContactFormSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  return (
    <section id="contato" className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block text-[#C9A227] font-semibold text-sm uppercase tracking-wider mb-4">
            Contato
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0F2D52] mb-4">
            Solicite Seu <span className="text-[#C9A227]">Atendimento</span>
          </h2>
          <p className="text-lg text-[#1D4E89]">
            Preencha o formulário abaixo e receba uma análise inicial gratuita.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-[#F5F7FA] rounded-2xl p-6 sm:p-8"
        >
          {isSubmitted ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-[#C9A227] rounded-full flex items-center justify-center mx-auto mb-6">
                <Send className="w-8 h-8 text-[#0F2D52]" />
              </div>
              <h3 className="text-2xl font-bold text-[#0F2D52] mb-2">
                Mensagem Enviada!
              </h3>
              <p className="text-[#1D4E89]">
                Nossa equipe entrará em contato em breve.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-[#0F2D52] mb-2">
                  Nome Completo *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-[#E2E8F0] focus:border-[#C9A227] focus:ring-2 focus:ring-[#C9A227]/20 outline-none transition-all bg-white text-[#0F2D52]"
                  placeholder="Seu nome completo"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-[#0F2D52] mb-2">
                    Telefone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-[#E2E8F0] focus:border-[#C9A227] focus:ring-2 focus:ring-[#C9A227]/20 outline-none transition-all bg-white text-[#0F2D52]"
                    placeholder="(00) 00000-0000"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[#0F2D52] mb-2">
                    E-mail *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-[#E2E8F0] focus:border-[#C9A227] focus:ring-2 focus:ring-[#C9A227]/20 outline-none transition-all bg-white text-[#0F2D52]"
                    placeholder="seu@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-[#0F2D52] mb-2">
                  Tipo de Serviço *
                </label>
                <select
                  id="service"
                  name="service"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-[#E2E8F0] focus:border-[#C9A227] focus:ring-2 focus:ring-[#C9A227]/20 outline-none transition-all bg-white text-[#0F2D52]"
                >
                  <option value="">Selecione o tipo de serviço</option>
                  {serviceOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[#0F2D52] mb-2">
                  Descreva Sua Necessidade *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-[#E2E8F0] focus:border-[#C9A227] focus:ring-2 focus:ring-[#C9A227]/20 outline-none transition-all bg-white text-[#0F2D52] resize-none"
                  placeholder="Descreva brevemente sua demanda..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#C9A227] hover:bg-[#D4B64A] disabled:bg-[#C9A227]/70 text-[#0F2D52] px-8 py-4 rounded-lg font-bold text-lg transition-all hover:shadow-lg flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Enviando...
                  </>
                ) : (
                  <>
                    Receber Análise Gratuita
                    <Send size={20} />
                  </>
                )}
              </button>

              <p className="text-center text-sm text-[#1D4E89]">
                Seus dados estão protegidos e serão utilizados apenas para contato profissional.
              </p>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  )
}
