export function initScrollReveal() {
  // Configurações base
  const configBase = {
    distance: "50px",
    duration: 1500,
    reset: false,
  }

  const sr = ScrollReveal()

  // Top
  sr.reveal(".topDelaySmallReveal", {
    ...configBase,
    origin: "top",
    delay: 200,
  })
  sr.reveal(".topDelayMediumReveal", {
    ...configBase,
    origin: "top",
    delay: 300,
  })
  sr.reveal(".topDelayLargeReveal", {
    ...configBase,
    origin: "top",
    delay: 400,
  })
  sr.reveal(".topDelayExtraBigReveal", {
    ...configBase,
    origin: "top",
    delay: 600,
  })
  sr.reveal(".topIntervalCardReveal", {
    ...configBase,
    origin: "top",
    interval: 400,
  })

  // Left
  sr.reveal(".leftDelaySmallReveal", {
    ...configBase,
    origin: "left",
    delay: 200,
  })
  sr.reveal(".leftDelayMediumReveal", {
    ...configBase,
    origin: "left",
    delay: 300,
  })
  sr.reveal(".leftDelayLargeReveal", {
    ...configBase,
    origin: "left",
    delay: 400,
  })
  sr.reveal(".leftDelayExtraBigReveal", {
    ...configBase,
    origin: "left",
    delay: 600,
  })
  sr.reveal(".leftIntervalCardReveal", {
    ...configBase,
    origin: "left",
    interval: 400,
  })

  // Right
  sr.reveal(".rightDelaySmallReveal", {
    ...configBase,
    origin: "right",
    delay: 200,
  })
  sr.reveal(".rightDelayMediumReveal", {
    ...configBase,
    origin: "right",
    delay: 300,
  })
  sr.reveal(".rightDelayLargeReveal", {
    ...configBase,
    origin: "right",
    delay: 400,
  })
  sr.reveal(".rightDelayExtraBigReveal", {
    ...configBase,
    origin: "right",
    delay: 600,
  })
  sr.reveal(".rightIntervalCardReveal", {
    ...configBase,
    origin: "right",
    interval: 400,
  })

  // Bottom
  sr.reveal(".bottomDelaySmallReveal", {
    ...configBase,
    origin: "bottom",
    delay: 200,
  })
  sr.reveal(".bottomDelayMediumReveal", {
    ...configBase,
    origin: "bottom",
    delay: 300,
  })
  sr.reveal(".bottomDelayLargeReveal", {
    ...configBase,
    origin: "bottom",
    delay: 400,
  })
  sr.reveal(".bottomDelayExtraBigReveal", {
    ...configBase,
    origin: "bottom",
    delay: 600,
  })
  sr.reveal(".bottomIntervalCardReveal", {
    ...configBase,
    origin: "bottom",
    interval: 400,
  })
}
