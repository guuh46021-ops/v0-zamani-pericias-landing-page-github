"use client"

import { motion } from "framer-motion"
import { 
  Calculator, 
  FileText, 
  Scale, 
  TrendingUp, 
  Gavel,
  RefreshCw,
  Users,
  ClipboardCheck,
  Search
} from "lucide-react"

const services = [
  {
    icon: Calculator,
    title: "Cálculos Trabalhistas",
    description: "Revisão e elaboração de cálculos para reclamações trabalhistas e liquidações.",
  },
  {
    icon: FileText,
    title: "Cálculos Previdenciários",
    description: "Apuração de benefícios, revisões e análises previdenciárias.",
  },
  {
    icon: Scale,
    title: "Cálculos Cíveis",
    description: "Atualizações monetárias, indenizações e apurações judiciais.",
  },
  {
    icon: TrendingUp,
    title: "Cálculos Financeiros",
    description: "Análises financeiras e revisão de contratos.",
  },
  {
    icon: Gavel,
    title: "Liquidação de Sentença",
    description: "Apuração completa de valores decorrentes de decisões judiciais.",
  },
  {
    icon: RefreshCw,
    title: "Atualização de Débitos",
    description: "Correção monetária e juros conforme legislação vigente.",
  },
  {
    icon: Users,
    title: "Assistência Técnica Pericial",
    description: "Suporte técnico para advogados durante processos judiciais.",
  },
  {
    icon: ClipboardCheck,
    title: "Pareceres Técnicos",
    description: "Análises detalhadas e fundamentadas.",
  },
  {
    icon: Search,
    title: "Perícias Contábeis",
    description: "Perícias judiciais e extrajudiciais com rigor técnico.",
  },
]

export function ServicesSection() {
  return (
    <section id="servicos" className="py-20 bg-[#F3F7F4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-[#0F7F52] font-semibold text-sm uppercase tracking-wider mb-4">
            Nossos Serviços
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#07563D] mb-4">
            Soluções Especializadas para Demandas<br />
            <span className="text-[#59645F]">Judiciais e Extrajudiciais</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-transparent hover:border-[#B7A46A]/30"
            >
              <div className="w-14 h-14 bg-[#07563D] rounded-xl flex items-center justify-center mb-5 group-hover:bg-[#B7A46A] transition-colors">
                <service.icon className="w-7 h-7 text-[#B7A46A] group-hover:text-[#07563D] transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-[#07563D] mb-3">{service.title}</h3>
              <p className="text-[#59645F] leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
