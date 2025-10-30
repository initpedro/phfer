"use client"

import { useState, useEffect } from "react"
import { Github, Linkedin, Mail, MessageCircle } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

export function Footer() {
  const { t } = useLanguage()
  const [mounted, setMounted] = useState(false)
  const [scrollOffset, setScrollOffset] = useState(0)

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      setScrollOffset(window.scrollY)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  if (!mounted) {
    return null
  }
  
  return (
    <footer className="relative bg-linear-to-b from-background via-background to-card border-t border-border/50">
      {/* Decorative gradient */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-20 -z-10" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl opacity-20 -z-10" />

      <div className="container mx-auto px-4 py-20">
        {/* Parallax CTA Section */}
        <div className="mb-20 relative py-24 overflow-hidden rounded-3xl bg-linear-to-br from-primary/20 via-background to-secondary/20 border border-primary/40">
          {/* Animated background elements */}
          <div 
            className="absolute top-0 left-10 w-64 h-64 bg-primary/20 rounded-full blur-3xl -z-10"
            style={{ transform: `translateY(${scrollOffset * 0.3}px)` }}
          />
          <div 
            className="absolute bottom-0 right-10 w-72 h-72 bg-secondary/20 rounded-full blur-3xl -z-10"
            style={{ transform: `translateY(${-scrollOffset * 0.2}px)` }}
          />

          {/* Grid pattern overlay */}
          <div className="absolute inset-0 opacity-[0.03] -z-10">
            <svg className="w-full h-full" viewBox="0 0 1000 1000">
              <defs>
                <pattern id="footer-grid" width="100" height="100" patternUnits="userSpaceOnUse">
                  <path d="M 100 0 L 0 0 0 100" fill="none" stroke="white" strokeWidth="1" />
                </pattern>
              </defs>
              <rect width="1000" height="1000" fill="url(#footer-grid)" />
            </svg>
          </div>

          {/* Main content */}
          <div className="relative z-10 px-6 md:px-12 text-center">
            <div className="max-w-3xl mx-auto">
              {/* Badge */}
              <div className="inline-block px-4 py-2 rounded-full bg-primary/20 border border-primary/40 mb-6">
                <span className="text-sm font-semibold text-primary">✨ Transformação Digital</span>
              </div>

              {/* Title */}
              <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                {t("footer.cta_title")} <span className="bg-linear-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">{t("footer.cta_title2")}</span>
              </h3>

              {/* Description */}
              <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
                {t("footer.footer_cta_description")}
              </p>

              {/* Decorative line */}
              <div className="flex items-center justify-center gap-3">
                <div className="h-px w-12 bg-linear-to-r from-transparent to-primary/50" />
                <span className="text-primary/60">•</span>
                <div className="h-px w-12 bg-linear-to-l from-transparent to-primary/50" />
              </div>
            </div>
          </div>

          {/* Floating accent elements */}
          <div className="absolute top-8 right-8 w-2 h-2 bg-primary rounded-full opacity-60 animate-pulse" />
          <div className="absolute bottom-8 left-8 w-2 h-2 bg-secondary rounded-full opacity-60 animate-pulse" style={{ animationDelay: "0.5s" }} />
        </div>

        {/* Divider */}
        <div className="h-px bg-border/30 mb-16" />

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div>
            <h3 className="text-lg font-bold mb-4 bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent">@initpedro</h3>
            <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
              {t("footer.description")}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-bold mb-4 text-foreground">{t("footer.links")}</h4>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  {t("nav.inicio")}
                </a>
              </li>
              <li>
                <a href="#about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  {t("footer.about")}
                </a>
              </li>
              <li>
                <a href="#projects" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  {t("footer.projects")}
                </a>
              </li>
              <li>
                <a href="#contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  {t("nav.contato")}
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-sm font-bold mb-4 text-foreground">{t("footer.legal")}</h4>
            <ul className="space-y-3">
              <li>
                <a href="https://www.intuit.com/legal/" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  {t("footer.terms")}
                </a>
              </li>
              <li>
                <a href="https://www.intuit.com/privacy/statement/" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  {t("footer.privacy")}
                </a>
              </li>
            </ul>
          </div>

          {/* Conecte-se Comigo */}
          <div>
            <h4 className="text-sm font-bold mb-4 text-foreground">{t("footer.socials")}</h4>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://linkedin.com/in/initpedro"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-muted/50 hover:bg-primary/20 text-muted-foreground hover:text-primary transition-all duration-300"
                title="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://github.com/initpedro"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-muted/50 hover:bg-primary/20 text-muted-foreground hover:text-primary transition-all duration-300"
                title="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="mailto:pedro16hf@gmail.com"
                className="p-2 rounded-lg bg-muted/50 hover:bg-primary/20 text-muted-foreground hover:text-primary transition-all duration-300"
                title="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a
                href="https://discord.com/users/683063659638816800"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-muted/50 hover:bg-primary/20 text-muted-foreground hover:text-primary transition-all duration-300"
                title="Discord"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border/30 text-center">
          <p className="text-sm text-muted-foreground">
            {t("footer.copyright")}
          </p>
        </div>
      </div>
    </footer>
  )
}
