const $hamburger = document.getElementById('hamburger')
const $nav = document.getElementById('nav')

$hamburger.addEventListener('click', e=>{
  e.stopPropagation()
  $hamburger.firstElementChild.classList.toggle('is-active')
  $nav.classList.toggle('nav--hide')
})

$nav.addEventListener('click', e=>{
  e.stopPropagation()
  if((e.target).matches('.nav__link')){
    $hamburger.firstElementChild.classList.toggle('is-active')
    $nav.classList.toggle('nav--hide')
  }
})