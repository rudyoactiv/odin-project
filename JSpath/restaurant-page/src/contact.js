export default function loadContact() {
  const content = document.getElementById('content');
  content.textContent = ''; // Clear old content

  const contact = document.createElement('div');
  contact.classList.add('contact');

  contact.innerHTML = `
    <h1>Contact Us</h1>
    <p><strong>Phone:</strong> +91 98765 43210</p>
    <p><strong>Email:</strong> hello@fusionfeast.com</p>
    <p><strong>Location:</strong> 42 Curry Street, Kolkata</p>
  `;

  content.appendChild(contact);
}
