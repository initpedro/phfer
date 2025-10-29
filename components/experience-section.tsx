"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Briefcase, Download, ArrowRight } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

export function ExperienceSection() {
  const { t } = useLanguage()
  
  const experiences = [
    {
      title: t("exp1.title"),
      company: t("exp1.company"),
      period: t("exp1.period"),
      description: t("exp1.description"),
      status: t("exp1.status"),
    },
    {
      title: t("exp2.title"),
      company: t("exp2.company"),
      period: t("exp2.period"),
      description: t("exp2.description"),
      status: t("exp2.status"),
    },
    {
      title: t("exp3.title"),
      company: t("exp3.company"),
      period: t("exp3.period"),
      description: t("exp3.description"),
      status: t("exp3.status"),
    },
  ]
  
  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      {/* Background blur elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl opacity-20 -z-10"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl opacity-20 -z-10"></div>

      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-16 max-w-3xl">
          <Badge className="mb-4 bg-primary/20 text-primary hover:bg-primary/30" variant="outline">
            {t("experience.badge")}
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
            {t("experience.title")} <span className="bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent">{t("experience.title2")}</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl text-lg">
            {t("experience.description")}
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="group relative p-6 rounded-xl border border-border/50 backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10"
            >
              {/* Top accent line */}
              <div className="absolute top-0 left-2 right-2 h-0.5 rounded-t-xl bg-linear-to-r from-primary to-secondary transition-all duration-300"></div>

              <div className="flex flex-col lg:flex-row gap-6 items-start lg:items-center">
                {/* Icon Container */}
                <div className="shrink-0">
                  <div className="relative w-14 h-14 rounded-lg bg-linear-to-br from-primary/20 to-secondary/20 flex items-center justify-center group-hover:from-primary/30 group-hover:to-secondary/30 transition-all duration-300">
                    <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 bg-linear-to-br from-primary/20 to-secondary/20 blur-lg"></div>
                    <Briefcase className="h-6 w-6 text-primary relative z-10 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                    <div>
                      <h3 className="text-xl font-bold mb-1">{exp.title}</h3>
                      <p className="text-primary font-medium">{exp.company}</p>
                    </div>
                    <Badge
                      className={`whitespace-nowrap ${
                        exp.status === t("exp1.status")
                          ? "bg-green-500/20 text-green-700 dark:text-green-400 border-green-500/30"
                          : "bg-slate-500/20 text-slate-700 dark:text-slate-400 border-slate-500/30"
                      }`}
                      variant="outline"
                    >
                      {exp.status === t("exp1.status") ? "🔵 " + t("exp1.status") : "📋 " + exp.status}
                    </Badge>
                  </div>

                  {/* Period */}
                  <p className="text-sm text-muted-foreground mb-3 font-medium">
                    <span className="inline-flex items-center gap-1">
                      📅 {exp.period}
                    </span>
                  </p>

                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed">{exp.description}</p>
                </div>

                {/* Arrow */}
                <div className="shrink-0 hidden lg:block">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                    <ArrowRight className="h-5 w-5 text-primary" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button size="lg" className="rounded-full" asChild>
            <a href="https://drive.google.com/drive/folders/1uxyglnsnpw3eLQLCb_xpqVoffd-lLT3I" target="_blank" rel="noopener noreferrer">
              <Download className="mr-2 h-4 w-4" />
              {t("experience.resume")}
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
