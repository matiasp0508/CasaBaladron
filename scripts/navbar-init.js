function initNavbar() {
  document.querySelectorAll('.navbar-burger').forEach(burger => {
    const target = document.getElementById(burger.dataset.target);
    burger.addEventListener('click', () => {
      burger.classList.toggle('is-active');
      if (target) target.classList.toggle('is-active');
    });
  });

  // Opcional: cerrar el menú al clicar un enlace (útil en mobile)
  document.querySelectorAll('.navbar-menu a').forEach(link => {
    link.addEventListener('click', () => {
      document.querySelectorAll('.navbar-burger.is-active').forEach(b => b.classList.remove('is-active'));
      document.querySelectorAll('.navbar-menu.is-active').forEach(m => m.classList.remove('is-active'));
    });
  });
}