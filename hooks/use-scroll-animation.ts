"use client"

import { useEffect } from "react"

export function useScrollReveal() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.15,
      rootMargin: "0px 0px -50px 0px",
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Add active class to trigger animation
          entry.target.classList.add("active")
          
          // Also trigger animations for child elements
          const revealItems = entry.target.querySelectorAll(".reveal-item")
          revealItems.forEach((item, index) => {
            setTimeout(() => {
              item.classList.add("active", `delay-${index + 1}`)
            }, index * 50)
          })
          
          observer.unobserve(entry.target)
        }
      })
    }, observerOptions)

    // Observe all reveal elements
    const revealElements = document.querySelectorAll(".reveal-section, .reveal-content")
    revealElements.forEach((el) => observer.observe(el))

    return () => {
      revealElements.forEach((el) => observer.unobserve(el))
    }
  }, [])
}

export function initScrollReveal() {
  if (typeof window === "undefined") return

  const observerOptions = {
    threshold: 0.15,
    rootMargin: "0px 0px -50px 0px",
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active")

        // Stagger animations for child elements
        const revealItems = entry.target.querySelectorAll(".reveal-item")
        revealItems.forEach((item, index) => {
          setTimeout(() => {
            item.classList.add("active", `delay-${(index % 4) + 1}`)
          }, index * 50)
        })

        observer.unobserve(entry.target)
      }
    })
  }, observerOptions)

  const revealElements = document.querySelectorAll(".reveal-section, .reveal-content")
  revealElements.forEach((el) => observer.observe(el))
}
