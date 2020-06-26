const overlay = document.querySelector('#overlay');
const menuSection = document.querySelector('.menu-section');
const menuToggle = menuSection.querySelector('.menu-toggle');

const menuLinks = document.querySelectorAll('.menu-section a[href^="#"]');

let show = true; // mostrando menu

window.addEventListener('load', () => {
  overlay.style.display = 'none';
});

// MENU RESPONSIVO com SCROLL SUAVE

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
