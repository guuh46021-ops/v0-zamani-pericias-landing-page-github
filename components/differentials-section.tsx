"use client"

import { motion } from "framer-motion"
import { Target, Shield, Zap, Globe, Award, UserCheck } from "lucide-react"

const differentials = [
  {
    icon: Target,
    title: "Precisão Técnica",
    description: "Análises detalhadas e fundamentadas com máximo rigor metodológico.",
  },
  {
    icon: Shield,
    title: "Segurança Jurídica",
    description: "Atualização constante da legislação e jurisprudência.",
  },
  {
    icon: Zap,
    title: "Agilidade",
    description: "Entrega dentro dos prazos acordados sem comprometer a qualidade.",
  },
  {
    icon: Globe,
    title: "Atendimento Nacional",
    description: "Suporte especializado em qualquer região do Brasil.",
  },
  {
    icon: Award,
    title: "Experiência Especializada",
    description: "Foco exclusivo em perícias e cálculos judiciais.",
  },
  {
    icon: UserCheck,
    title: "Atendimento Personalizado",
    description: "Cada caso recebe análise individual e dedicada.",
  },
]

export function DifferentialsSection() {
  return (
    <section id="diferenciais" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-[#C9A227] font-semibold text-sm uppercase tracking-wider mb-4">
              Diferenciais
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0F2D52] mb-6">
              Por Que Escolher a <span className="text-[#C9A227]">Zamani</span>?
            </h2>
            <p className="text-lg text-[#1D4E89] mb-8">
              Nossa equipe combina expertise técnica com comprometimento para entregar 
              resultados que fazem a diferença nos seus processos judiciais.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-[#0F2D52]">+500</div>
                <div className="text-sm text-[#1D4E89]">Análises</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-[#C9A227]">98%</div>
                <div className="text-sm text-[#1D4E89]">Satisfação</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-[#0F2D52]">27</div>
                <div className="text-sm text-[#1D4E89]">Estados</div>
              </div>
            </div>
          </motion.div>

          {/* Cards Grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {differentials.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-[#F5F7FA] rounded-xl p-5 hover:bg-[#0F2D52] group transition-colors duration-300"
              >
                <item.icon className="w-8 h-8 text-[#C9A227] mb-3" />
                <h3 className="text-lg font-bold text-[#0F2D52] group-hover:text-white mb-2 transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-[#1D4E89] group-hover:text-white/80 transition-colors">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
