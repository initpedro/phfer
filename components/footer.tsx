"use client"

import { useState, useEffect } from "react"
import { Github, Linkedin, Mail, MessageCircle } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

export function Footer() {
  const { t } = useLanguage()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
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
        {/* Top Section - CTA */}
        <div className="mb-16 max-w-3xl mx-auto text-center p-8 rounded-2xl bg-linear-to-r from-primary/20 to-secondary/20 border border-primary/30 backdrop-blur-sm">
          <h3 className="text-2xl md:text-3xl font-bold mb-3">{t("final.title")} {t("final.title2")}</h3>
          <p className="text-muted-foreground text-lg">
            {t("footer.footer_cta_description")}
          </p>
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
