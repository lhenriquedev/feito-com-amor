const overlay = document.querySelector('#overlay');

// MENU RESPONSIVO com SCROLL SUAVE
let show = true; // mostrando menu

const menuSection = document.querySelector('.menu-section');
const menuToggle = menuSection.querySelector('.menu-toggle');

const menuLinks = document.querySelectorAll('.menu-section a[href^="#"]');

const scrollToOnClick = () => {
  const element = event.target;
  const id = element.getAttribute('href');
  const toSectionLink = document.querySelector(id).offsetTop;

  if (toSectionLink > 0) {
    menuSection.classList.remove('on');
  }
};

menuToggle.addEventListener('click', () => {
  menuSection.classList.toggle('on', show);
  show = !show;
});

menuLinks.forEach((item) => {
  item.addEventListener('click', scrollToOnClick);
});

window.addEventListener('load', () => {
  overlay.style.display = 'none';
});

// API - AIzaSyAPGrxuDdXJXB1M09Em_S1ps2QiNeG0sy8
