document.addEventListener("DOMContentLoaded", function () {

    let menuBurger = document.querySelector('.burger-button');
    let navList = document.querySelector('.navigation__list');
    let logoWrapper = document.querySelector('.header__logo-wrapper')

    menuBurger.classList.remove('navigation__burger-button--nojs');
    navList.classList.remove('navigation__list--nojs');
    logoWrapper.classList.remove('header__logo-wrapper--nojs');


    menuBurger.onclick = () => {
        menuBurger.classList.toggle('burger-button--activ');
        navList.classList.toggle('navigation__list--activ');
        logoWrapper.classList.toggle('header__logo-wrapper--activ')
    }
})






