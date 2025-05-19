const hamburger = document.getElementById('hamburger');
const sidebar = document.getElementById('sidebar');
const sidebutton = document.getElementById('side-burger');

function toggleSidebar() {
  sidebar.classList.toggle('active');
}

hamburger.addEventListener('click', toggleSidebar);
sidebutton.addEventListener('click', toggleSidebar);
