const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.site-header nav');
if (menuButton && nav) {
  menuButton.addEventListener('click', () => {
    const isOpen = document.querySelector('.site-header').classList.toggle('menu-open');
    menuButton.setAttribute('aria-expanded', String(isOpen));
    menuButton.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
  });
  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    document.querySelector('.site-header').classList.remove('menu-open');
    menuButton.setAttribute('aria-expanded', 'false');
  }));
}
