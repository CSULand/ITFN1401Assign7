  // Mobile nav
    const toggle = document.querySelector('.nav-toggle');
    const nav = document.getElementById('primary-nav');
    toggle.addEventListener('click', () => {
      const open = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!open));
      nav.classList.toggle('open');
    });
