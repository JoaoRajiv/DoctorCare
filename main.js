window.addEventListener('scroll', onScroll)
function onScroll() {
  showNavOnScroll(),
    showBackToTopButtonOnScroll(),
    activateMenuAtCurrentSection(home),
    activateMenuAtCurrentSection(services),
    activateMenuAtCurrentSection(about),
    activateMenuAtCurrentSection(contact)
}

function activateMenuAtCurrentSection(section) {
  const targetLine = scrollY + innerHeight / 2

  const sectionTop = section.offsetTop

  const sectionHeight = home.offsetHeight

  const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop

  const sectionEndsAt = sectionTop + sectionHeight

  const sectionEndPassedTargetLine = sectionEndsAt <= targetLine

  const sectionBoundaries =
    sectionTopReachOrPassedTargetLine && !sectionEndPassedTargetLine

  const sectionId = section.getAttribute('id')

  const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)

  menuElement.classList.remove('active')
  if (sectionBoundaries) {
    menuElement.classList.add('active')
  }
}
let currentColor = getComputedStyle(document.documentElement).getPropertyValue(
  '--hue'
)

const purple = '280'
const green = '170'
const blue = '240'

const nav = document.getElementById('navigation')

function showNavOnScroll() {
  if (scrollY > 0) {
    nav.classList.add('scroll')
  } else {
    nav.classList.remove('scroll')
  }
}

function showBackToTopButtonOnScroll() {
  if (scrollY > 800) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

function changeColor(color) {
  if (color == purple) {
    document.documentElement.style.setProperty('--hue', purple)
  }
  if (color == green) {
    document.documentElement.style.setProperty('--hue', green)
  }
  if (color == blue) {
    document.documentElement.style.setProperty('--hue', blue)
  }
}

function openMenu() {
  document.body.classList.add('menu-expanded')
}
function closeMenu() {
  document.body.classList.remove('menu-expanded')
}

ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 900
}).reveal(`
  #home,
  #home img, 
  #home .stats,
  #services,
  #services header,
  #services .card,
  #about,
  #about header,
  #about .content p,
  #about .content img
`)
