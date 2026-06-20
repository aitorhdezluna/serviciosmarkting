const toggle = document.getElementById('navToggle');
const links = document.getElementById('navLinks');
if (toggle && links) {
  toggle.addEventListener('click', () => links.classList.toggle('open'));
  links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => links.classList.remove('open')));
}

const rotatingWords = ['pymes', 'autónomos', 'talleres', 'clínicas', 'tiendas'];
const rotatingEl = document.getElementById('rotatingWord');
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (rotatingEl && !prefersReducedMotion) {
  let wordIndex = 0;
  setInterval(() => {
    rotatingEl.classList.add('fade');
    setTimeout(() => {
      wordIndex = (wordIndex + 1) % rotatingWords.length;
      rotatingEl.textContent = rotatingWords[wordIndex];
      rotatingEl.classList.remove('fade');
    }, 300);
  }, 2600);
}
