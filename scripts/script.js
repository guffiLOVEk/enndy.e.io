let burger = document.querySelector('.menu-button')
let nav = document.querySelector('.header__nav')
burger.addEventListener('click', () => {
    burger.classList.toggle('active')
    nav.classList.toggle('active')
})