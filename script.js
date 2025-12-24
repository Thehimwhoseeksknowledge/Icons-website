// 1) Current year in footer
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// 2) Mobile menu toggle + accessibility
const toggle = document.querySelector('.nav-toggle');
const menu = document.getElementById('primary-menu');

if (toggle && menu) {
  toggle.addEventListener('click', () => {
    const open = menu.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
    // Move focus to the first link when opening
    if (open) {
      const firstLink = menu.querySelector('a');
      if (firstLink) firstLink.focus();
    }
  });
}