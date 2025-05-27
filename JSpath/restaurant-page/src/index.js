import loadHome from './homepage';
import loadMenu from './menu';
import loadContact from './contact';
import './style.css';


function init() {
  document.getElementById('home-btn').addEventListener('click', loadHome);
  document.getElementById('menu-btn').addEventListener('click', loadMenu);
  document.getElementById('contact-btn').addEventListener('click', loadContact);

  loadHome(); // Load Home by default
}

document.addEventListener('DOMContentLoaded', init);
