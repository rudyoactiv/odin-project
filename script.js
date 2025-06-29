function loadProject(path) {
  document.getElementById('preview').src = path;

  const sidebar = document.getElementById('sidebar');
  if (sidebar.classList.contains('open')) {
    sidebar.classList.remove('open');
  }
}

document.getElementById('menu-toggle').addEventListener('click', () => {
  document.getElementById('sidebar').classList.toggle('open');
});

document.querySelectorAll('.accordion-header').forEach(header => {
  header.addEventListener('click', () => {
    const section = header.parentElement;
    const isOpen = section.classList.contains('open');

    document.querySelectorAll('.accordion-section').forEach(s => s.classList.remove('open'));

    if (!isOpen) {
      section.classList.add('open');
    }
  });
});
