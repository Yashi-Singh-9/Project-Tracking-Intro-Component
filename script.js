const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');

menuToggle.addEventListener('click', () => {
  if (navMenu.classList.contains('d-flex')) {
    navMenu.classList.remove('d-flex');
    navMenu.classList.add('d-none');
    menuToggle.src = 'images/icon-hamburger.svg'; // Switch to hamburger icon
  } else {
    navMenu.classList.remove('d-none');
    navMenu.classList.add('d-flex');
    menuToggle.src = 'images/icon-close.svg'; // Switch to close icon
  }
});
