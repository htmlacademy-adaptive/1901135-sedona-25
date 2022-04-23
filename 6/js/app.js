
let menuBurger = document.querySelector('.burger-button');
let navList = document.querySelector('.navigation__list');


menuBurger.onclick = () => {
    menuBurger.classList.toggle('burger-button--activ');
    navList.classList.toggle('navigation__list--activ')
}






