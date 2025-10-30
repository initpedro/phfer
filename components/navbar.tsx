"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Menu, X, Moon, Sun, Globe } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useLanguage } from "@/components/language-provider"

const navLinks = [
  { href: "#home", labelKey: "nav.inicio" },
  { href: "#contact", labelKey: "nav.contato" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { theme, setTheme } = useTheme()
  const { language, setLanguage, t } = useLanguage()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsOpen(false)
    }
  }

  if (!mounted) return null

  return (
    <nav
      className={`fixed top-0 left-1/2 -translate-x-1/2 md:left-1/2 md:top-4 md:-translate-x-1/2 z-50 w-full md:w-fit transition-all duration-300 bg-background/95 backdrop-blur-md md:bg-transparent ${
        isScrolled
          ? "md:bg-background/90 md:backdrop-blur-xl md:border md:border-primary/20 md:shadow-lg"
          : "md:bg-background/60 md:backdrop-blur-md md:border md:border-primary/10"
      } md:rounded-full`}
    >
      <div className="px-6 md:px-6 py-4 md:py-3">
        <div className="flex items-center justify-between gap-6 md:gap-8">
          {/* Logo */}
          <a href="#home" className="text-lg font-bold text-primary whitespace-nowrap shrink-0" onClick={(e) => handleNavClick(e, "#home")}>
            @initpedro
          </a>

          {/* Desktop Navigation - Centered */}
          <div className="hidden md:flex items-center gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-primary hover:bg-primary/10 rounded-lg transition-all duration-200"
              >
                {t(link.labelKey)}
              </a>
            ))}
          </div>

          {/* Desktop Controls */}
          <div className="hidden md:flex items-center gap-2">
            <div className="w-px h-6 bg-border"></div>

            {/* Language Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="rounded-lg" title={language === "pt" ? "Português" : "English"}>
                  <Globe className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setLanguage("pt")} className="flex items-center gap-2">
                  <span className="text-lg">🇧🇷</span>
                  <span>Português</span>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setLanguage("en")} className="flex items-center gap-2">
                  <span className="text-lg">🇺🇸</span>
                  <span>English</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Theme Toggle */}
            <Button variant="ghost" size="sm" className="rounded-lg" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
              {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm" className="rounded-lg" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <>
            {/* Backdrop to close menu */}
            <div 
              className="md:hidden fixed inset-0 z-30 bg-black/40"
              onClick={() => setIsOpen(false)}
            />
            
            {/* Menu Drawer from Right */}
            <div className="md:hidden fixed right-0 top-0 h-screen w-64 z-40 bg-card border-l border-border/50 backdrop-blur-sm animate-in slide-in-from-right-64 duration-300 shadow-2xl shadow-black/20">
              <div className="flex flex-col h-full">
                {/* Close Button */}
                <div className="flex items-center justify-end p-4 border-b border-border/30">
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="rounded-lg" 
                    onClick={() => setIsOpen(false)}
                  >
                    <X className="h-5 w-5" />
                  </Button>
                </div>

                {/* Navigation Links */}
                <div className="flex-1 px-4 py-8 space-y-3">
                  {navLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className="flex items-center px-6 py-4 text-lg font-semibold text-primary bg-primary/10 hover:bg-primary/20 rounded-xl transition-all duration-200 group border border-primary/20 hover:border-primary/40"
                    >
                      <span className="group-hover:translate-x-1 transition-transform">{t(link.labelKey)}</span>
                    </a>
                  ))}
                </div>

                {/* Controls */}
                <div className="px-4 py-6 border-t border-border/30 space-y-3">
                  {/* Language Selector */}
                  <div className="space-y-2">
                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide px-2">{language === "pt" ? "Idioma" : "Language"}</p>
                    <button
                      onClick={() => setLanguage("pt")}
                      className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                        language === "pt"
                          ? "bg-primary/20 text-primary border border-primary/50"
                          : "text-muted-foreground hover:bg-muted border border-transparent"
                      }`}
                    >
                      <span className="text-lg">🇧🇷</span>
                      <span>Português</span>
                    </button>
                    <button
                      onClick={() => setLanguage("en")}
                      className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                        language === "en"
                          ? "bg-primary/20 text-primary border border-primary/50"
                          : "text-muted-foreground hover:bg-muted border border-transparent"
                      }`}
                    >
                      <span className="text-lg">🇺🇸</span>
                      <span>English</span>
                    </button>
                  </div>

                  {/* Theme Toggle */}
                  <div className="flex items-center justify-between px-4 py-3 rounded-lg bg-muted/50 border border-border/30">
                    <span className="text-sm font-medium">{theme === "dark" ? "🌙 Escuro" : "☀️ Claro"}</span>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="rounded-lg" 
                      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                    >
                      {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </nav>
  )
}
