import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { SocialProofSection } from "@/components/social-proof-section"
import { ServicesSection } from "@/components/services-section"
import { DifferentialsSection } from "@/components/differentials-section"
import { HowItWorksSection } from "@/components/how-it-works-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { FAQSection } from "@/components/faq-section"
import { CTASection } from "@/components/cta-section"
import { ContactFormSection } from "@/components/contact-form-section"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { MobileCTA } from "@/components/mobile-cta"

export default function HomePage() {
  return (
    <main className="pb-20 lg:pb-0">
      <Header />
      <HeroSection />
      <SocialProofSection />
      <ServicesSection />
      <DifferentialsSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
      <ContactFormSection />
      <Footer />
      <WhatsAppButton />
      <MobileCTA />
    </main>
  )
}
