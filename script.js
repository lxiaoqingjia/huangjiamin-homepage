const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('#nav-links');
const navItems = [...document.querySelectorAll('.nav-links a')];
const sections = [...document.querySelectorAll('main section[id]')];
const currentYear = document.querySelector('#current-year');

if (currentYear) currentYear.textContent = new Date().getFullYear();

menuToggle?.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('is-open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
});

navItems.forEach((item) => {
  item.addEventListener('click', () => {
    navLinks.classList.remove('is-open');
    menuToggle?.setAttribute('aria-expanded', 'false');
  });
});

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      navItems.forEach((item) => {
        item.classList.toggle('active', item.getAttribute('href') === `#${entry.target.id}`);
      });
    });
  },
  { rootMargin: '-30% 0px -60% 0px' },
);

sections.forEach((section) => sectionObserver.observe(section));
