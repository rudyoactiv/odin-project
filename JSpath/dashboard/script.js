const hamburger = document.getElementById('hamburger');
const sidebar = document.getElementById('sidebar');
const sidebutton = document.getElementById('side-burger');

function toggleSidebar() {
  sidebar.classList.toggle('active');
}

hamburger.addEventListener('click', toggleSidebar);
sidebutton.addEventListener('click', toggleSidebar);


const projects = [
  {
    title: "Super Cool Project",
    desc: "A full-stack social media dashboard with real-time analytics and dark mode. Built using React, Node.js, and Chart.js for interactive data visualization."
  },
  {
    title: "Less Cool Project",
    desc: "A lightweight to-do list app with offline capabilities and drag-and-drop task management. Uses vanilla JavaScript and localStorage for persistence.",
    class: "yellow"
  },
  {
    title: "Impossible App",
    desc: "An AI-based personal assistant app that schedules meetings, writes emails, and summarizes daily tasks. Built with TensorFlow.js and integrated with Google Calendar API."
  },
  {
    title: "Easy Peasy App",
    desc: "A beginner-friendly budgeting tool that tracks income and expenses with interactive pie charts. Developed using Flutter and Firebase for real-time updates."
  },
  {
    title: "Ad Blocker",
    desc: "A browser extension that blocks intrusive ads and trackers while improving page load speed. Compatible with Chrome and Firefox, and built with JavaScript and Webpack."
  },
  {
    title: "Money Maker",
    desc: "A simulated stock trading game where users can learn investing basics using mock portfolios. Features real-time data from financial APIs and leaderboard tracking."
  },
  {
    title: "Habit Tracker",
    desc: "A minimalistic habit tracker that uses streak logic and daily reminders to build consistency. Built with React Native and local push notifications support."
  },
  {
    title: "DevConnect",
    desc: "A developer networking platform with job boards, portfolio sharing, and community chat rooms. Created using MERN stack with Socket.IO for real-time messaging."
  },
  {
    title: "MindPal",
    desc: "A productivity-focused journaling app with mood tracking and voice-to-text support. Integrated with Google Cloud Speech API for transcription services."
  },
  {
    title: "Scan & Go",
    desc: "A mobile app that lets users scan grocery items and pay instantly without waiting in line. Uses Flutter, QR code scanning, and integrates with Stripe for payments."
  }
];


function renderProjectCards() {
  const container = document.querySelector('.project-grid');
  container.innerHTML = ''; // Clear existing content

  projects.forEach(project => {
    const card = document.createElement('div');
    card.className = `card${project.class ? ' ' + project.class : ''}`;
    
    card.innerHTML = `
      <h4>${project.title}</h4>
      <p>${project.desc}</p>
      <div class="icons">
        <img src="./assets/star.svg" alt="Star" class="icon-btn" data-action="Starred" />
        <img src="./assets/watch.svg" alt="Watch" class="icon-btn" data-action="Watched" />
        <img src="./assets/share.svg" alt="Share" class="icon-btn" data-action="Shared" />
      </div>
    `;

    // Attach dummy alerts
    card.querySelectorAll('.icon-btn').forEach(icon => {
      icon.addEventListener('click', () => {
        alert(icon.dataset.action + ' "' + project.title + '"');
      });
    });

    container.appendChild(card);
  });
}

renderProjectCards();
