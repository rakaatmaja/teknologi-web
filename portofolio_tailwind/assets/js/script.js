const navbarToggle = document.getElementById('navbar-toggle');
const navbarSticky = document.getElementById('navbar-sticky');
const navLinks = navbarSticky.querySelectorAll('a');

navbarToggle.addEventListener('click', () => {
  navbarSticky.classList.toggle('hidden');
});

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    navbarSticky.classList.add('hidden');
  });
});

