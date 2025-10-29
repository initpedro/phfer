import type React from "react"
import type { Metadata } from "next"
import { Inter, Raleway } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import { LanguageProvider } from "@/components/language-provider"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { FloatingActions } from "@/components/floating-actions"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const raleway = Raleway({ subsets: ["latin"], variable: "--font-raleway" })

export const metadata: Metadata = {
  title: "@initpedro | Dev",
  description: "Portfolio de Pedro - Especialista em Desenvolvimento Web",
  generator: "v0.app",
  icons: {
    icon: "https://i.ibb.co/20gLBQpg/1758550635880.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if (typeof window !== 'undefined') {
                const observerOptions = {
                  threshold: 0.15,
                  rootMargin: '0px 0px -50px 0px',
                }

                const observer = new IntersectionObserver((entries) => {
                  entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                      entry.target.classList.add('active')

                      // Stagger animations for child elements
                      const revealItems = entry.target.querySelectorAll('.reveal-item')
                      revealItems.forEach((item, index) => {
                        setTimeout(() => {
                          item.classList.add('active', 'delay-' + ((index % 4) + 1))
                        }, index * 50)
                      })

                      observer.unobserve(entry.target)
                    }
                  })
                }, observerOptions)

                document.addEventListener('DOMContentLoaded', () => {
                  const revealElements = document.querySelectorAll('.reveal-section, .reveal-content')
                  revealElements.forEach((el) => observer.observe(el))
                })
              }
            `,
          }}
        />
      </head>
      <body className={`${inter.className} antialiased`} suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <LanguageProvider>
            <Navbar />
            {children}
            <FloatingActions />
            <Footer />
            <Analytics />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
