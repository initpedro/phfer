"use client"

import { useEffect, useState, useRef } from "react"
import { ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/components/language-provider"

const rotatingWords = {
  pt: ["Sistemas", "Software"],
  en: ["Systems", "Applications"],
}

export function HeroSection() {
  const { language } = useLanguage()
  const [currentWord, setCurrentWord] = useState(0)
  const [displayText, setDisplayText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [offset, setOffset] = useState(0)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const words = rotatingWords[language]
    const word = words[currentWord]
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText.length < word.length) {
            setDisplayText(word.slice(0, displayText.length + 1))
          } else {
            setTimeout(() => setIsDeleting(true), 2000)
          }
        } else {
          if (displayText.length > 0) {
            setDisplayText(displayText.slice(0, -1))
          } else {
            setIsDeleting(false)
            setCurrentWord((prev) => (prev + 1) % words.length)
          }
        }
      },
      isDeleting ? 50 : 100,
    )

    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, currentWord, language])

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect()
        const scrollProgress = Math.max(0, 1 - rect.top / window.innerHeight)
        setOffset(scrollProgress * 20)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToContact = () => {
    const element = document.querySelector("#about")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section 
      ref={sectionRef}
      id="home" 
      className="min-h-screen flex items-center justify-start relative pt-16 overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-30 -z-10"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl opacity-30 -z-10"></div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 -z-10 opacity-[0.02]">
        <svg className="w-full h-full" viewBox="0 0 1000 1000">
          <defs>
            <pattern id="grid" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M 100 0 L 0 0 0 100" fill="none" stroke="white" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="1000" height="1000" fill="url(#grid)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div 
          className="space-y-8"
          style={{
            transform: `translateY(${offset * 0.2}px)`,
          }}
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-left leading-tight">
            <span className="block">
              {language === "pt" ? "Especialista em" : "Specialist in"}
            </span>
            <span className="block bg-linear-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
              {language === "pt" ? "Desenvolver" : "Build"} {displayText}
              <span className="animate-pulse text-primary">|</span>
            </span>
            <span className="block">
              {language === "pt" ? "para o seu negócio!" : "for your business!"}
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            {language === "pt" ? (
              <>
                Grandes ideias 🕊️ ganham <em className="italic font-semibold text-foreground">asas</em> quando criadas por devs criativos e dedicados.
              </>
            ) : (
              <>
                Great ideas 🕊️ take <em className="italic font-semibold text-foreground">flight</em> when created by creative and dedicated devs.
              </>
            )}
          </p>

          <div className="pt-4 flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              onClick={scrollToContact} 
              className="group rounded-full bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              {language === "pt" ? "Conheça meu trabalho" : "Check my work"}
              <ChevronDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="group rounded-full"
              onClick={() => {
                const element = document.querySelector("#contact")
                if (element) element.scrollIntoView({ behavior: "smooth" })
              }}
            >
              {language === "pt" ? "Entre em contato" : "Get in touch"}
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-20">
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs text-muted-foreground font-medium">{language === "pt" ? "Desça" : "Scroll"}</span>
          <ChevronDown className="h-5 w-5 text-primary" />
        </div>
      </div>
    </section>
  )
}
