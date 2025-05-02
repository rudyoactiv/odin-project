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
