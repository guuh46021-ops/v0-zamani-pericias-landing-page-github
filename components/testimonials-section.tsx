"use client"

import { motion } from "framer-motion"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    rating: 5,
    text: "Excelente atendimento e extrema precisão técnica. O trabalho foi fundamental para o sucesso do nosso processo.",
    name: "Dr. Carlos Mendes",
    role: "Advogado Trabalhista",
  },
  {
    rating: 5,
    text: "Profissionais altamente qualificados. Os cálculos foram entregues no prazo e com total conformidade.",
    name: "Dra. Ana Paula Silva",
    role: "Advogada Previdenciarista",
  },
  {
    rating: 5,
    text: "A assistência técnica pericial foi essencial para contestar os cálculos da parte contrária. Recomendo!",
    name: "Dr. Roberto Santos",
    role: "Advogado Cível",
  },
  {
    rating: 5,
    text: "Empresa séria e competente. Atendimento personalizado e suporte excepcional durante todo o processo.",
    name: "Dra. Mariana Costa",
    role: "Advogada Empresarial",
  },
  {
    rating: 5,
    text: "Os pareceres técnicos são extremamente bem fundamentados. Fizeram toda diferença nas nossas demandas.",
    name: "Dr. Fernando Oliveira",
    role: "Advogado Tributarista",
  },
  {
    rating: 5,
    text: "Parceria de confiança há mais de 3 anos. Qualidade técnica incomparável e prazos sempre cumpridos.",
    name: "Dra. Juliana Lima",
    role: "Advogada do Trabalho",
  },
]

export function TestimonialsSection() {
  return (
    <section id="depoimentos" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-[#0F7F52] font-semibold text-sm uppercase tracking-wider mb-4">
            Depoimentos
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#07563D] mb-4">
            O Que Nossos <span className="text-[#0F7F52]">Clientes</span> Dizem
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-[#F3F7F4] rounded-xl p-6 relative"
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-[#0F7F52]/30" />
              
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#80682F] text-[#0F7F52]" />
                ))}
              </div>

              <p className="text-[#59645F] mb-6 leading-relaxed">
                {`"${testimonial.text}"`}
              </p>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[#07563D] rounded-full flex items-center justify-center">
                  <span className="text-[#0F7F52] font-bold text-lg">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="font-bold text-[#07563D]">{testimonial.name}</div>
                  <div className="text-sm text-[#59645F]">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
