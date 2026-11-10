"use client"

import { motion } from "framer-motion"
import { Users, MapPin, Target, Award, Scale } from "lucide-react"

const stats = [
  { icon: Target, value: "+500", label: "Cálculos e Análises Realizadas" },
  { icon: MapPin, value: "Nacional", label: "Atendimento em Todo Brasil" },
  { icon: Award, value: "Alta", label: "Precisão Técnica" },
  { icon: Users, value: "Equipe", label: "Especializada e Atualizada" },
  { icon: Scale, value: "Diversas", label: "Áreas do Direito" },
]

export function SocialProofSection() {
  return (
    <section className="py-20 bg-[#07563D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Confiança e <span className="text-[#D9C993]">Excelência</span> em Cada Projeto
          </h2>
          <p className="text-lg text-white/80 max-w-3xl mx-auto">
            A Zamani Perícias e Cálculos atua oferecendo suporte técnico especializado para advogados, 
            empresas e pessoas físicas que necessitam de análises precisas, pareceres fundamentados e 
            cálculos judiciais confiáveis.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/10 hover:border-[#B7A46A]/50 transition-colors"
            >
              <stat.icon className="w-10 h-10 text-[#D9C993] mx-auto mb-4" />
              <div className="text-2xl sm:text-3xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-sm text-white/70">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
