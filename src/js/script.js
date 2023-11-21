const hamburger = document.querySelector('.hamburger');
console.log(hamburger);
const menu = document.querySelector('.menu');
const closeMenu = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
   menu.classList.add('active');
});

closeMenu.addEventListener('click', () => {
   menu.classList.remove('active');
});
