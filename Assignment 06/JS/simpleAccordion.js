    // Simple accordion
    document.querySelectorAll('.accordion-trigger').forEach(btn => {
      btn.addEventListener('click', () => {
        btn.classList.toggle('open');
        const panel = btn.nextElementSibling;
        panel.hidden = !panel.hidden;
      });
      btn.nextElementSibling.hidden = true;
    });