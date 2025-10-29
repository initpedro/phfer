"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Mail, Linkedin, Github, MessageCircle, MapPin, Phone } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

export function ContactSection() {
  const { t } = useLanguage()
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  const socialLinks = [
    { icon: Linkedin, label: "LinkedIn", url: "https://linkedin.com/in/initpedro", color: "from-blue-500 to-blue-600" },
    { icon: Github, label: "GitHub", url: "https://github.com/initpedro", color: "from-gray-700 to-gray-900" },
    { icon: MessageCircle, label: "Discord", url: "https://discord.com/users/683063659638816800", color: "from-indigo-500 to-purple-600" },
    { icon: Mail, label: "E-mail", url: "mailto:pedro16hf@gmail.com", color: "from-red-500 to-pink-600" },
  ]

  return (
    <section id="contact" className="relative py-24 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10 bg-linear-to-br from-background via-background to-primary/5" />

      {/* Animated blobs */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-50" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-secondary/10 rounded-full blur-3xl opacity-50" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="mb-16">
          <Badge className="mb-4 bg-primary/20 text-primary hover:bg-primary/30" variant="outline">
            {t("contact.badge")}
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
            {t("contact.title")} <span className="bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent">{t("contact.title2")}</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            {t("contact.description")}
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* WhatsApp CTA Section */}
          <div className="lg:col-span-2">
            <div className="relative p-8 rounded-2xl border border-border/50 backdrop-blur-sm bg-card/30 hover:border-primary/50 transition-all duration-300">
              {/* Top accent line */}
              <div className="absolute top-0 left-2 right-2 h-0.5 rounded-t-2xl bg-linear-to-r from-primary to-secondary" />

              <h3 className="text-2xl font-bold mb-8 flex items-center gap-2">
                <Mail className="h-6 w-6 text-primary" />
                {t("contact.title")} {t("contact.title2")}
              </h3>

              <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
                {t("contact.description")}
              </p>

              <a
                href="https://wa.me/5534998731732?text=Olá, Pedro! Vim pelo seu Website e gostaria de ter seu contato!"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-green-500 hover:bg-green-600 text-white font-bold text-lg transition-all duration-300"
              >
                <MessageCircle className="h-5 w-5" />
                {t("contact.whatsapp")}
              </a>
            </div>
          </div>

          {/* Social Links & Contact Info Card */}
          <div className="relative p-8 rounded-2xl border border-border/50 backdrop-blur-sm bg-card/30 hover:border-primary/50 transition-all duration-300">
            {/* Top accent line */}
            <div className="absolute top-0 left-2 right-2 h-0.5 rounded-t-2xl bg-linear-to-r from-primary to-secondary" />

            <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
              <MessageCircle className="h-5 w-5 text-primary" />
              {t("footer.socials")}
            </h3>

            <div className="space-y-6">
              {/* Social Links */}
              <div>
                <h4 className="text-sm font-semibold text-muted-foreground mb-4">{t("footer.socials")}</h4>
                <div className="grid grid-cols-2 gap-3">
                  {socialLinks.map((social) => {
                    const Icon = social.icon
                    return (
                      <a
                        key={social.label}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-lg border border-border/50 hover:border-primary/50 transition-all duration-300 flex flex-col items-center gap-2 group"
                      >
                        <Icon className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                        <span className="text-xs font-semibold text-muted-foreground group-hover:text-foreground transition-colors">{social.label}</span>
                      </a>
                    )
                  })}
                </div>
              </div>

              {/* Divider */}
              <div className="h-px bg-border/30" />

              {/* Quick Info */}
              <div className="space-y-4">
                <div>
                  <p className="text-xs font-semibold text-muted-foreground mb-1">{t("contact.response_time")}</p>
                  <p className="text-sm font-medium">{t("contact.response_time_value")}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-muted-foreground mb-1">{t("contact.location")}</p>
                  <p className="text-sm font-medium">{t("contact.location_value")}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-muted-foreground mb-1">{t("contact.availability")}</p>
                  <p className="text-sm font-medium">{t("contact.availability_value")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
