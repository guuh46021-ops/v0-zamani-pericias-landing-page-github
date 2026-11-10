import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
})

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-playfair',
})

export const metadata: Metadata = {
  title: 'Zamani Perícias e Cálculos | Perícias Judiciais com Precisão e Credibilidade',
  description: 'Atendimento especializado para advogados, empresas e pessoas físicas em todo o Brasil. Elaboramos laudos, pareceres e cálculos judiciais com rigor técnico, agilidade e total conformidade legal.',
  keywords: 'perícias judiciais, cálculos trabalhistas, cálculos previdenciários, assistência técnica pericial, liquidação de sentença, pareceres técnicos, perícia contábil',
  openGraph: {
    title: 'Zamani Perícias e Cálculos | Perícias Judiciais com Precisão e Credibilidade',
    description: 'Atendimento especializado para advogados, empresas e pessoas físicas em todo o Brasil.',
    type: 'website',
    locale: 'pt_BR',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${playfair.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
