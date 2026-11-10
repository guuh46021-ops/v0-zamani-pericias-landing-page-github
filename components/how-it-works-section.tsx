"use client"

import { motion } from "framer-motion"
import { Send, Search, Lightbulb, FileCheck, Headphones } from "lucide-react"

const steps = [
  {
    number: "01",
    icon: Send,
    title: "Envie sua Demanda",
    description: "Envie sua demanda pelo formulário ou WhatsApp.",
  },
  {
    number: "02",
    icon: Search,
    title: "Análise Inicial",
    description: "Nossa equipe realiza uma análise inicial gratuita.",
  },
  {
    number: "03",
    icon: Lightbulb,
    title: "Solução Técnica",
    description: "Apresentamos a melhor solução técnica para o seu caso.",
  },
  {
    number: "04",
    icon: FileCheck,
    title: "Execução",
    description: "Executamos os cálculos, laudos ou pareceres necessários.",
  },
  {
    number: "05",
    icon: Headphones,
    title: "Entrega e Suporte",
    description: "Entregamos o material completo e oferecemos suporte especializado.",
  },
]

export function HowItWorksSection() {
  return (
    <section id="como-funciona" className="py-20 bg-[#F3F7F4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-[#0F7F52] font-semibold text-sm uppercase tracking-wider mb-4">
            Como Funciona
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#07563D] mb-4">
            Processo <span className="text-[#59645F]">Simples</span> e <span className="text-[#0F7F52]">Eficiente</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Connection Line - Desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-[#DDE7E0] -translate-y-1/2 z-0" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="relative"
              >
                <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow text-center">
                  {/* Number Badge */}
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 bg-[#07563D] rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {step.number}
                  </div>

                  <div className="w-16 h-16 bg-[#07563D] rounded-full flex items-center justify-center mx-auto mb-4 mt-4">
                    <step.icon className="w-8 h-8 text-[#0F7F52]" />
                  </div>

                  <h3 className="text-lg font-bold text-[#07563D] mb-2">{step.title}</h3>
                  <p className="text-sm text-[#59645F]">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
