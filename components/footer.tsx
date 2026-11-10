import Link from "next/link"
import Image from "next/image"
import { Mail, Phone, MapPin, Instagram, Linkedin, Facebook } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[#07563D] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo & Description */}
          <div className="lg:col-span-2">
            <Link href="/" className="mb-4 inline-flex rounded-lg bg-white" aria-label="Página inicial Zamani">
              <span className="relative block h-24 w-40 overflow-hidden rounded-lg">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Design%20sem%20nome%20%2840%29-ONUwMMFIFt86c5l0KR07DgVJaSo8Wn.png"
                  alt="Zamani — especialista em perícia judicial e aposentadoria"
                  fill
                  sizes="160px"
                  className="object-contain"
                />
              </span>
            </Link>
            <p className="text-white/70 mb-6 max-w-md">
              Oferecemos suporte técnico especializado para advogados, empresas e pessoas físicas 
              que necessitam de análises precisas, pareceres fundamentados e cálculos judiciais confiáveis.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="w-10 h-10 bg-white/10 hover:bg-[#D9C993] rounded-full flex items-center justify-center transition-colors group">
                <Instagram className="w-5 h-5 text-white group-hover:text-[#07563D]" />
              </Link>
              <Link href="#" className="w-10 h-10 bg-white/10 hover:bg-[#D9C993] rounded-full flex items-center justify-center transition-colors group">
                <Linkedin className="w-5 h-5 text-white group-hover:text-[#07563D]" />
              </Link>
              <Link href="#" className="w-10 h-10 bg-white/10 hover:bg-[#D9C993] rounded-full flex items-center justify-center transition-colors group">
                <Facebook className="w-5 h-5 text-white group-hover:text-[#07563D]" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Links Rápidos</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#servicos" className="text-white/70 hover:text-[#D9C993] transition-colors">
                  Serviços
                </Link>
              </li>
              <li>
                <Link href="#diferenciais" className="text-white/70 hover:text-[#D9C993] transition-colors">
                  Diferenciais
                </Link>
              </li>
              <li>
                <Link href="#como-funciona" className="text-white/70 hover:text-[#D9C993] transition-colors">
                  Como Funciona
                </Link>
              </li>
              <li>
                <Link href="#depoimentos" className="text-white/70 hover:text-[#D9C993] transition-colors">
                  Depoimentos
                </Link>
              </li>
              <li>
                <Link href="#faq" className="text-white/70 hover:text-[#D9C993] transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="#contato" className="text-white/70 hover:text-[#D9C993] transition-colors">
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
                <Phone className="w-5 h-5 text-[#D9C993] flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-white/70">Telefone para recados</div>
                  <a href="tel:+551121102752" className="text-white hover:text-[#D9C993] transition-colors">
                    (11) 2110-2752
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#D9C993] flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-white/70">WhatsApp</div>
                  <a href="https://wa.me/5511933091409" target="_blank" rel="noreferrer" className="text-white hover:text-[#D9C993] transition-colors">
                    (11) 93309-1409
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[#D9C993] flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-white/70">E-mail</div>
                  <a href="mailto:contato@zamanipericiasecalculos.com.br" className="break-all text-white hover:text-[#D9C993] transition-colors">
                    contato@zamanipericiasecalculos.com.br
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#D9C993] flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-white/70">Endereço</div>
                  <a
                    href="https://maps.google.com/?q=Av.+Paulista,+1636,+Sala+1105,+São+Paulo,+SP,+01310-200"
                    target="_blank"
                    rel="noreferrer"
                    className="text-white hover:text-[#D9C993] transition-colors"
                  >
                    Av. Paulista, 1636, Sala 1105<br />
                    Paulista Corporate - Cerqueira Cesar<br />
                    São Paulo - SP, CEP 01310-200
                  </a>
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
              <Link href="#" className="text-white/50 hover:text-[#D9C993] transition-colors">
                Política de Privacidade
              </Link>
              <Link href="#" className="text-white/50 hover:text-[#D9C993] transition-colors">
                Termos de Uso
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
