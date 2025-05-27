export default function loadHome() {
  const content = document.getElementById('content');
  content.textContent = ''; // clear

  const home = document.createElement('div');
  home.classList.add('home');
  home.innerHTML = `
    <h1>Welcome to Fusion Feast!</h1>
    <p>Where flavors collide and taste buds explode!</p>
  `;
  content.appendChild(home);
}
