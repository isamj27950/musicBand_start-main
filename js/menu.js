const burger = document.querySelector('#menu_burger');
const nav = document.querySelector('#menu_open');


burger.addEventListener('click',() => {
    nav.classList.toggle('menu_display');

});

nav.addEventListener('click',() => {
 nav.classList.toggle('menu_display');
});