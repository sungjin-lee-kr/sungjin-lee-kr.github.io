'use strict';
(() => {
  const photo = document.getElementById('profile-photo');
  const fallback = document.getElementById('photo-fallback');
  const showFallback = () => {
    photo.style.display = 'none';
    fallback.style.display = 'flex';
  };
  if (photo.complete && photo.naturalWidth === 0) showFallback();
  photo.addEventListener('error', showFallback);

  const menuButton = document.querySelector('.menu-button');
  const nav = document.getElementById('main-nav');
  menuButton.addEventListener('click', () => {
    const open = nav.classList.toggle('is-open');
    menuButton.setAttribute('aria-expanded', String(open));
  });
  nav.addEventListener('click', (event) => {
    if (event.target.closest('a')) {
      nav.classList.remove('is-open');
      menuButton.setAttribute('aria-expanded', 'false');
    }
  });
})();
