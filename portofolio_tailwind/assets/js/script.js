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

const roles = ['Flutter Developer', 'Mobile Developer', 'Software Engineer'];
let roleIndex = 0;
let charIndex = 0;

function type() {
  const role = roles[roleIndex];
  const textElement = document.getElementById('typed-text');
  if (charIndex < role.length) {
    textElement.textContent += role.charAt(charIndex);
    charIndex++;
    setTimeout(type, 85); // Kecepatan pengetikan
  } else {

    setTimeout(() => {
      textElement.textContent = '';
      roleIndex = (roleIndex + 1) % roles.length;
      charIndex = 0;
      type();
    }, 500); 
  }
}
type();


function scrollUp() {
  const scrollUp = document.getElementById('scroll-up')
  if (this.scrollY >= 560) scrollUp.classList.add('show-scroll')
  else scrollUp.classList.remove('show-scroll')
};
window.addEventListener('scroll', scrollUp)

