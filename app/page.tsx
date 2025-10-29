import { HeroSection } from "@/components/hero-section"
import { CTAParallaxSection } from "@/components/cta-parallax-section"
import { AboutSection } from "@/components/about-section"
import { ProjectsSection } from "@/components/projects-section"
import { SkillsSection } from "@/components/skills-section"
import { ExperienceSection } from "@/components/experience-section"
import { ParallaxSection } from "@/components/parallax-section"
import { FAQSection } from "@/components/faq-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { FinalCTASection } from "@/components/final-cta-section"
import { ContactSection } from "@/components/contact-section"

export default function Home() {
  return (
    <main>
      <HeroSection />
      <CTAParallaxSection />
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
      <ExperienceSection />
      <ParallaxSection />
      <FAQSection />
      <TestimonialsSection />
      <FinalCTASection />
      <ContactSection />
    </main>
  )
}
