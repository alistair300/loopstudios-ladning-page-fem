const overlay = document.querySelector('.hero__overlay');
const links = document.querySelector('.hero__links');
const navToggler = document.querySelector('.hero__toggle');

navToggler.addEventListener('click', () => {
    overlay.classList.toggle('open');
    links.classList.toggle('open');
    navToggler.classList.toggle('open');
});

