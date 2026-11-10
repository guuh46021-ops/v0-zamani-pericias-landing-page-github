"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function MobileCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-[#E2E8F0] p-4 lg:hidden">
      <Link
        href="#contato"
        className="flex items-center justify-center gap-2 w-full bg-[#C9A227] hover:bg-[#D4B64A] text-[#0F2D52] px-6 py-3 rounded-lg font-bold transition-colors"
      >
        Solicitar Análise Gratuita
        <ArrowRight size={18} />
      </Link>
    </div>
  )
}
