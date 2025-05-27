export default function loadMenu() {
  const content = document.getElementById('content');
  content.textContent = ''; // Clear old content

  const menu = document.createElement('div');
  menu.classList.add('menu');

  menu.innerHTML = `
    <h1>Our Menu</h1>
    <ul>
      <li><strong>Dragon Ramen</strong> – Spicy, savory broth with pork and egg</li>
      <li><strong>Mystic Momo</strong> – Himalayan dumplings with chutney</li>
      <li><strong>Fusion Tacos</strong> – Korean BBQ + Indian naan taco shells</li>
    </ul>
  `;

  content.appendChild(menu);
}
