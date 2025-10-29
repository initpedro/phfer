"use client"

import { useLanguage } from "@/components/language-provider"

export function FinalCTASection() {
  const { t } = useLanguage()
  
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Animated gradient background */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background: "linear-gradient(135deg, hsl(260, 75%, 63%) 0%, hsl(67, 100%, 36%) 100%)",
        }}
      />

      {/* Geometric pattern overlay */}
      <div className="absolute inset-0 -z-10 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 1000 1000">
          <defs>
            <pattern id="final-grid" width="50" height="50" patternUnits="userSpaceOnUse">
              <path d="M 50 0 L 0 0 0 50" fill="none" stroke="white" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="1000" height="1000" fill="url(#final-grid)" />
        </svg>
      </div>

      {/* Floating blobs */}
      <div className="absolute -top-40 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl opacity-50" />
      <div className="absolute -bottom-40 right-10 w-96 h-96 bg-white/5 rounded-full blur-3xl opacity-30" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Main message */}
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 text-balance">
            {t("final.title")} <br className="hidden md:block" />
            <span className="relative inline-block">
              {t("final.title2")}
              <span className="absolute -bottom-2 left-0 right-0 h-1 bg-white/30 rounded-full"></span>
            </span>
          </h2>

          <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-2xl mx-auto">
            {t("final.description")}
          </p>
        </div>
      </div>
    </section>
  )
}
