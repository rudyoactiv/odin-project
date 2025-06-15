/*

const API_KEY = '8sL5K5hWC8QAmgJRKt1gL06n9PIIP3a4'; // public beta key
const gifImg = document.getElementById('gif');
const errorMsg = document.getElementById('error-msg');
const searchBtn = document.getElementById('search-btn');
const randomBtn = document.getElementById('random-btn');
const searchInput = document.getElementById('search-input');

// default gif if search fails
const defaultGif = 'https://media.giphy.com/media/jAYUbVXgESSti/giphy.gif';

function displayGif(url) {
  gifImg.src = url;
  gifImg.style.display = 'block';
  errorMsg.textContent = '';
}

function showError(message) {
  gifImg.src = defaultGif;
  errorMsg.textContent = message;
}

function fetchGif(searchTerm = '') {
  let endpoint = searchTerm
    ? `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${searchTerm}&limit=1`
    : `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

  fetch(endpoint)
    .then(response => response.json())
    .then(data => {
      if (searchTerm) {
        if (data.data.length > 0) {
          displayGif(data.data[0].images.original.url);
        } else {
          showError('No gifs found. Showing default.');
        }
      } else {
        displayGif(data.data.images.original.url);
      }
    })
    .catch(err => {
      console.error(err);
      showError('Something went wrong. Showing default gif.');
    });
}

searchBtn.addEventListener('click', () => {
  const searchTerm = searchInput.value.trim();
  if (searchTerm) {
    fetchGif(searchTerm);
  }
});

randomBtn.addEventListener('click', () => {
  fetchGif(); // random gif
});

fetchGif('cat');

*/

// total refactor
// changed promise structure to async and await

const API_KEY = '8sL5K5hWC8QAmgJRKt1gL06n9PIIP3a4'; // public beta key
const gifImg = document.getElementById('gif');
const errorMsg = document.getElementById('error-msg');
const searchBtn = document.getElementById('search-btn');
const randomBtn = document.getElementById('random-btn');
const searchInput = document.getElementById('search-input');

const defaultGif = 'https://media.giphy.com/media/jAYUbVXgESSti/giphy.gif';

searchBtn.addEventListener('click', () => {
  const searchTerm = searchInput.value.trim();
  if (searchTerm) {
    fetchGif(searchTerm);
  }
});

randomBtn.addEventListener('click', () => {
  fetchGif();
});

// fetchGif
async function fetchGif(searchTerm = '') {
  try {
    const endpoint = searchTerm
    ?`https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${searchTerm}&limit=1`
    :`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

    const response = await fetch(endpoint);
    const data = await response.json();

    if (searchTerm) {
      if (data.data.length > 0) {
        displayGif(data.data[0].images.original.url);
      } else {
        showError('No GIFs found.');
      }
    } else {
      displayGif(data.data.images.original.url);
    }
  } catch (error) {
    console.log(error);
    gifImg.style.display = 'none';
    showError('Something went wrong.');
  }
}

// showError
function showError(message) {
  gifImg.src = defaultGif;
  errorMsg.textContent = message;
}

// displayGif
function displayGif(url) {
  gifImg.src = url;
  gifImg.style.display = 'block'
  errorMsg.textContent = '';
}

//load a random cat gif on first load
window.addEventListener('DOMContentLoaded', () => {
  fetchGif('cat');
});