"use client"

import { useEffect, useState, useRef } from "react"
import { ArrowRight, Sparkles } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

export function CTAParallaxSection() {
  const [offset, setOffset] = useState(0)
  const sectionRef = useRef<HTMLDivElement>(null)
  const { t } = useLanguage()

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect()
        const scrollProgress = Math.max(0, 1 - rect.top / window.innerHeight)
        setOffset(scrollProgress * 80)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative py-32 overflow-hidden"
    >
      {/* Animated gradient background */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background: "linear-gradient(135deg, hsl(260, 75%, 63%) 0%, hsl(67, 100%, 36%) 100%)",
          transform: `translateY(${offset * 0.5}px)`,
          transition: "transform 0.1s ease-out",
        }}
      />

      {/* Geometric pattern overlay */}
      <div className="absolute inset-0 -z-10 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 1000 1000">
          <defs>
            <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
              <path d="M 50 0 L 0 0 0 50" fill="none" stroke="white" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="1000" height="1000" fill="url(#grid)" />
        </svg>
      </div>

      {/* Floating blobs */}
      <div
        className="absolute top-10 left-10 w-64 h-64 bg-white/10 rounded-full blur-3xl opacity-50"
        style={{ transform: `translateY(${offset * 0.3}px)` }}
      />
      <div
        className="absolute bottom-10 right-10 w-96 h-96 bg-white/5 rounded-full blur-3xl opacity-30"
        style={{ transform: `translateY(${offset * -0.4}px)` }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header with animated icon */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm">
                <Sparkles className="h-5 w-5 text-white animate-spin" style={{ animationDuration: "3s" }} />
              </div>
              <span className="text-white font-semibold text-sm">{t("cta.next_level")}</span>
            </div>

            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 text-balance">
              {t("cta.ready_to_level_up")} <br className="hidden md:block" />
              {t("cta.ready_to_level_up_question")}{" "}
              <span className="relative inline-block">
                {t("cta.ready_to_level_up_answer")}
                <span className="absolute -bottom-2 left-0 right-0 h-1 bg-white/30 rounded-full"></span>
              </span>
            </h2>

            <p className="text-lg md:text-xl text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed">
              {t("cta.transform_ideas")}
            </p>
          </div>

          {/* Stats Container */}
          <div className="mb-12">
            <div className="flex flex-col md:flex-row justify-center items-center gap-0">
              {[
                { number: "+10", label: t("cta.projects") },
                { number: "100%", label: t("cta.satisfaction") },
                { number: "+2", label: t("cta.experience") },
              ].map((stat, index) => (
                <div key={index} className="flex items-center">
                  {/* Stat content */}
                  <div className="px-8 md:px-12 py-6 text-center">
                    <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                      {stat.number}
                    </div>
                    <div className="text-base md:text-lg text-white/80 font-medium">
                      {stat.label}
                    </div>
                  </div>
                  
                  {/* Vertical separator - hidden on last item */}
                  {index < 2 && (
                    <div className="hidden md:block h-16 w-px bg-white/20"></div>
                  )}
                </div>
              ))}
            </div>
            
            {/* Horizontal separator below stats */}
            <div className="h-px bg-white/20 w-full"></div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/5534998731732?text=Olá, Pedro! Vim pelo seu Website e gostaria de ter seu contato!"
              target="_blank"
              rel="noopener noreferrer"
              className="group px-8 py-4 rounded-full bg-white text-primary font-bold text-lg transition-all duration-300 hover:bg-gray-100 flex items-center justify-center gap-2"
            >
              {t("cta.open_whatsapp")}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
