const navToggle = () => {
    const menu = document.querySelector('#mobile-menu');
    const menuULS= document.querySelector('.primarynav__menu');

    menu.addEventListener('click', () => {
        menu.classList.toggle('is-active');
        menuULS.classList.toggle('active');
    }); 
}

const navToggleAbout = () => {
    const aboutmenu = document.querySelector('#mobile-menu-aboutme');
    const aboutmenuULS= document.querySelector('.navaboutme__menu');

    aboutmenu.addEventListener('click', () => {
        aboutmenu.classList.toggle('is-active');
        aboutmenuULS.classList.toggle('active');
    }); 
}

navToggle();
navToggleAbout();

$(document).ready(function(){
	$('a.#mobile-menu-aboutme').click(function(e){
		$('div.aboutme_container, nav.nav-aboutme, a.navaboutme__toggle').toggleClass('toggled');
		e.preventDefault();
	});//target-burger-click
});//doc-rdy
