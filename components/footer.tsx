import Link from "next/link"
import { Mail, Phone, MapPin, Instagram, Linkedin, Facebook } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[#0F2D52] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo & Description */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-[#C9A227] rounded-lg flex items-center justify-center">
                <span className="text-[#0F2D52] font-bold text-2xl">Z</span>
              </div>
              <div>
                <span className="text-white font-bold text-xl">Zamani</span>
                <span className="text-white/70 text-sm block -mt-1">Perícias e Cálculos</span>
              </div>
            </Link>
            <p className="text-white/70 mb-6 max-w-md">
              Oferecemos suporte técnico especializado para advogados, empresas e pessoas físicas 
              que necessitam de análises precisas, pareceres fundamentados e cálculos judiciais confiáveis.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="w-10 h-10 bg-white/10 hover:bg-[#C9A227] rounded-full flex items-center justify-center transition-colors group">
                <Instagram className="w-5 h-5 text-white group-hover:text-[#0F2D52]" />
              </Link>
              <Link href="#" className="w-10 h-10 bg-white/10 hover:bg-[#C9A227] rounded-full flex items-center justify-center transition-colors group">
                <Linkedin className="w-5 h-5 text-white group-hover:text-[#0F2D52]" />
              </Link>
              <Link href="#" className="w-10 h-10 bg-white/10 hover:bg-[#C9A227] rounded-full flex items-center justify-center transition-colors group">
                <Facebook className="w-5 h-5 text-white group-hover:text-[#0F2D52]" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Links Rápidos</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#servicos" className="text-white/70 hover:text-[#C9A227] transition-colors">
                  Serviços
                </Link>
              </li>
              <li>
                <Link href="#diferenciais" className="text-white/70 hover:text-[#C9A227] transition-colors">
                  Diferenciais
                </Link>
              </li>
              <li>
                <Link href="#como-funciona" className="text-white/70 hover:text-[#C9A227] transition-colors">
                  Como Funciona
                </Link>
              </li>
              <li>
                <Link href="#depoimentos" className="text-white/70 hover:text-[#C9A227] transition-colors">
                  Depoimentos
                </Link>
              </li>
              <li>
                <Link href="#faq" className="text-white/70 hover:text-[#C9A227] transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="#contato" className="text-white/70 hover:text-[#C9A227] transition-colors">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#C9A227] flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-white/70">WhatsApp</div>
                  <div className="text-white">(00) 00000-0000</div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[#C9A227] flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-white/70">E-mail</div>
                  <div className="text-white">contato@zamani.com.br</div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#C9A227] flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-white/70">Atendimento</div>
                  <div className="text-white">Todo o Brasil</div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-white/50 text-sm text-center sm:text-left">
              © {new Date().getFullYear()} Zamani Perícias e Cálculos. Todos os direitos reservados.
            </p>
            <div className="flex gap-6 text-sm">
              <Link href="#" className="text-white/50 hover:text-[#C9A227] transition-colors">
                Política de Privacidade
              </Link>
              <Link href="#" className="text-white/50 hover:text-[#C9A227] transition-colors">
                Termos de Uso
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
