const menu = document.querySelector('#mobile-menu')
const menuULS= document.querySelector('.primarynav__menu')

// Show our mobile menu
const mobileMenu = () => {
    menu.classList.toggle('is-active')
    menuULS.classList.toggle('active')
}

//Event listener
menu.addEventListener('click', mobileMenu);
