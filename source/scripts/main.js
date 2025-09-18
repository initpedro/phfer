import { initScrollReveal } from "./scrollreveal.js"

window.addEventListener("load", function () {
  document.body.classList.add("loaded")
})

const btn = document.getElementById("readMoreBtn")
const moreText = document.getElementById("moreText")

btn.addEventListener("click", () => {
  moreText.classList.add("show")
  btn.classList.add("hide")
})

const counters = document.querySelectorAll(".count")

counters.forEach((counter) => {
  const prefix = counter.getAttribute("data-prefix") || ""
  const suffix = counter.getAttribute("data-suffix") || ""

  const updateCount = () => {
    const target = +counter.getAttribute("data-target")
    const current = +counter.innerText.replace(/\D/g, "") // remove símbolos
    const increment = target / 200 // velocidade da animação

    if (current < target) {
      counter.innerText = prefix + Math.ceil(current + increment) + suffix
      requestAnimationFrame(updateCount)
    } else {
      counter.innerText = prefix + target + suffix
    }
  }

  updateCount()
})

const menuToggle = document.querySelector("#menu-toggle")
const menuIcon = document.querySelector(".menu-icon")
const menu = document.querySelector(".menu")
const menuLinks = menu.querySelectorAll("a")

// Fecha o menu ao clicar em um link
menuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    menuToggle.checked = false
  })
})

// Fecha o menu ao clicar fora dele
document.addEventListener("click", (e) => {
  if (
    !menu.contains(e.target) &&
    !menuIcon.contains(e.target) &&
    e.target !== menuToggle
  ) {
    menuToggle.checked = false
  }
})

initScrollReveal()

const modalOverlay = document.querySelector(".modal-overlay")
const modalImg = document.querySelector(".modal-img")
const modalText = document.querySelector(".modal-text")
const modalTechs = document.querySelector(".modal-techs")
const modalClose = document.querySelector(".modal-close")
const githubBtn = document.querySelector(".modal-btn.github")
const deployBtn = document.querySelector(".modal-btn.deploy")

// Configura os botões de cada card
document.querySelectorAll(".card-in-container").forEach((card) => {
  card.querySelector(".card__button").addEventListener("click", () => {
    // Preenche modal com dados do card
    modalImg.src = card.dataset.img
    modalText.textContent = card.dataset.text

    // Links (pode personalizar por card)
    githubBtn.href = card.dataset.github || "#"
    deployBtn.href = card.dataset.deploy || "#"

    // Tecnologias
    modalTechs.innerHTML = ""
    const techs = card.dataset.techs ? card.dataset.techs.split(",") : []
    techs.forEach((tech) => {
      const techDiv = document.createElement("div")
      techDiv.className = "modal-tech"

      // ícone da tecnologia via Simple Icons CDN
      const icon = document.createElement("img")
      icon.src = `https://cdn.simpleicons.org/${tech.trim()}/000000`
      icon.alt = tech.trim()
      techDiv.appendChild(icon)

      // nome da tecnologia
      techDiv.insertAdjacentText("beforeend", tech.trim())

      modalTechs.appendChild(techDiv)
    })

    modalOverlay.style.display = "flex"
  })
})

// Fechar modal
modalClose.addEventListener(
  "click",
  () => (modalOverlay.style.display = "none")
)
modalOverlay.addEventListener("click", (e) => {
  if (e.target === modalOverlay) modalOverlay.style.display = "none"
})

new Typed(".multiText", {
  strings: [
    "de Software",
    "de Sistemas",
    "de Software",
    "de Sistemas",
    "de Software",
    "de Sistemas",
    "de Software",
    "de Sistemas",
  ],
  loop: true,
  typeSpeed: 90,
  backSpeed: 90,
  backDelay: 900,
})

const buttons = document.querySelectorAll(".skill-btn")
const skills = document.querySelectorAll(".skill-item")

function filterSkills(category) {
  skills.forEach((skill) => {
    if (category === "all" || skill.classList.contains(category)) {
      skill.style.display = "block"
    } else {
      skill.style.display = "none"
    }
  })
}

// Inicializa mostrando todos
filterSkills("all")

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    buttons.forEach((btn) => btn.classList.remove("active"))
    button.classList.add("active")
    filterSkills(button.dataset.filter)
  })
})

const backToTopBtn = document.getElementById("back-to-top")

backToTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" })
})
