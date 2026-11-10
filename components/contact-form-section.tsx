"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Send, Loader2, MapPin, Phone, MessageCircle, Mail } from "lucide-react"

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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block text-[#0F7F52] font-semibold text-sm uppercase tracking-wider mb-4">
            Contato
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#07563D] mb-4">
            Solicite Seu <span className="text-[#0F7F52]">Atendimento</span>
          </h2>
          <p className="text-lg text-[#59645F]">
            Preencha o formulário abaixo e receba uma análise inicial gratuita.
          </p>
        </motion.div>

        <div className="grid items-stretch gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.aside
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="overflow-hidden rounded-2xl bg-[#07563D] text-white shadow-lg"
          >
            <div className="relative h-64 sm:h-72">
              <Image
                src="/images/atendimento-especializado.png"
                alt="Casal de idosos recebe orientação sobre benefícios previdenciários"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#07563D]/75 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-6 right-6">
                <span className="rounded-full bg-[#07563D] px-3 py-1 text-xs font-bold uppercase tracking-wide text-white">
                  Atendimento próximo e especializado
                </span>
              </div>
            </div>
            <div className="space-y-5 p-6 sm:p-8">
              <div>
                <h3 className="text-xl font-bold">Estamos na Av. Paulista</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/75">
                  Conte com uma equipe acessível e dedicada a entender os detalhes do seu caso.
                </p>
              </div>
              <address className="flex items-start gap-3 not-italic">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-[#D9C993]" />
                <a
                  href="https://maps.google.com/?q=Av.+Paulista,+1636,+Sala+1105,+São+Paulo,+SP,+01310-200"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm leading-relaxed text-white hover:text-[#D9C993] transition-colors"
                >
                  Av. Paulista, 1636, Sala 1105<br />
                  Paulista Corporate - Cerqueira Cesar<br />
                  São Paulo - SP, CEP 01310-200
                </a>
              </address>
              <div className="grid gap-3 border-t border-white/15 pt-5 sm:grid-cols-2">
                <a href="tel:+551121102752" className="flex items-center gap-2 text-sm text-white hover:text-[#D9C993] transition-colors">
                  <Phone className="h-4 w-4 text-[#D9C993]" />
                  (11) 2110-2752
                </a>
                <a href="https://wa.me/5511933091409" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm text-white hover:text-[#D9C993] transition-colors">
                  <MessageCircle className="h-4 w-4 text-[#D9C993]" />
                  (11) 93309-1409
                </a>
                <a href="mailto:contato@zamanipericiasecalculos.com.br" className="flex min-w-0 items-start gap-2 break-all text-sm text-white hover:text-[#D9C993] transition-colors">
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-[#D9C993]" />
                  contato@zamanipericiasecalculos.com.br
                </a>
              </div>
            </div>
          </motion.aside>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-[#F3F7F4] rounded-2xl p-6 sm:p-8"
          >
          {isSubmitted ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-[#B7A46A] rounded-full flex items-center justify-center mx-auto mb-6">
                <Send className="w-8 h-8 text-[#07563D]" />
              </div>
              <h3 className="text-2xl font-bold text-[#07563D] mb-2">
                Mensagem Enviada!
              </h3>
              <p className="text-[#59645F]">
                Nossa equipe entrará em contato em breve.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-[#07563D] mb-2">
                  Nome Completo *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-[#DDE7E0] focus:border-[#0F7F52] focus:ring-2 focus:ring-[#0F7F52]/20 outline-none transition-all bg-white text-[#07563D]"
                  placeholder="Seu nome completo"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-[#07563D] mb-2">
                    Telefone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-[#DDE7E0] focus:border-[#0F7F52] focus:ring-2 focus:ring-[#0F7F52]/20 outline-none transition-all bg-white text-[#07563D]"
                    placeholder="(00) 00000-0000"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[#07563D] mb-2">
                    E-mail *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-[#DDE7E0] focus:border-[#0F7F52] focus:ring-2 focus:ring-[#0F7F52]/20 outline-none transition-all bg-white text-[#07563D]"
                    placeholder="seu@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-[#07563D] mb-2">
                  Tipo de Serviço *
                </label>
                <select
                  id="service"
                  name="service"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-[#DDE7E0] focus:border-[#0F7F52] focus:ring-2 focus:ring-[#0F7F52]/20 outline-none transition-all bg-white text-[#07563D]"
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
                <label htmlFor="message" className="block text-sm font-medium text-[#07563D] mb-2">
                  Descreva Sua Necessidade *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-[#DDE7E0] focus:border-[#0F7F52] focus:ring-2 focus:ring-[#0F7F52]/20 outline-none transition-all bg-white text-[#07563D] resize-none"
                  placeholder="Descreva brevemente sua demanda..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#07563D] hover:bg-[#0F7F52] disabled:bg-[#07563D]/70 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all hover:shadow-lg flex items-center justify-center gap-2"
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

              <p className="text-center text-sm text-[#59645F]">
                Seus dados estão protegidos e serão utilizados apenas para contato profissional.
              </p>
            </form>
          )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
