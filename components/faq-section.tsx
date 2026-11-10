"use client"

import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { useState } from "react"

const faqs = [
  {
    question: "Vocês atendem todo o Brasil?",
    answer: "Sim. Realizamos atendimento remoto para clientes em qualquer estado do país, mantendo a mesma qualidade e agilidade.",
  },
  {
    question: "Quanto tempo leva para concluir um cálculo?",
    answer: "O prazo varia conforme a complexidade do caso. Após a análise inicial, informamos o tempo estimado de entrega, sempre respeitando a urgência de cada demanda.",
  },
  {
    question: "Posso solicitar apenas uma revisão de cálculos?",
    answer: "Sim. Também realizamos auditoria e conferência de cálculos já existentes, identificando possíveis inconsistências e oportunidades de correção.",
  },
  {
    question: "Vocês trabalham com assistência técnica para advogados?",
    answer: "Sim. Prestamos suporte técnico completo em processos judiciais, acompanhando todas as etapas e elaborando impugnações quando necessário.",
  },
  {
    question: "Como funciona a análise inicial gratuita?",
    answer: "Nossa equipe avalia seu caso e apresenta a melhor solução técnica antes da contratação, sem compromisso. Assim você tem clareza sobre o serviço antes de prosseguir.",
  },
]

function FAQItem({ 
  question, 
  answer, 
  isOpen, 
  onToggle 
}: { 
  question: string
  answer: string
  isOpen: boolean
  onToggle: () => void
}) {
  return (
    <div className="border-b border-[#E2E8F0] last:border-0">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-5 text-left"
      >
        <span className="text-lg font-semibold text-[#0F2D52] pr-8">{question}</span>
        <ChevronDown 
          className={`w-5 h-5 text-[#C9A227] flex-shrink-0 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`} 
        />
      </button>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <p className="pb-5 text-[#1D4E89] leading-relaxed">{answer}</p>
      </motion.div>
    </div>
  )
}

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="py-20 bg-[#F5F7FA]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block text-[#C9A227] font-semibold text-sm uppercase tracking-wider mb-4">
            Dúvidas
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0F2D52] mb-4">
            Perguntas <span className="text-[#C9A227]">Frequentes</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm"
        >
          {faqs.map((faq, index) => (
            <FAQItem
              key={faq.question}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
