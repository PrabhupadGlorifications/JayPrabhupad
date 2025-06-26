document.addEventListener("DOMContentLoaded", () => {
  // Highlighting the Active Link in the Navbar
  const links = document.querySelectorAll("nav-link");
  const currentPage = window.location.pathname.split("/").pop();

  links.forEach(link => {
    const linkPage = link.getAttribute("href");
    if (linkPage === currentPage || (currentPage === "" && linkPage === "1home.html")) {
      link.classList.add("active");
    }
  });

  // Adding the Search Functionality for Articles
  const searchBar = document.getElementById('searchBar');
  const articlesContainer = document.getElementById('articlesContainer');

  if (searchBar && articlesContainer) {
    const articles = Array.from(articlesContainer.children);

    searchBar.addEventListener('input', () => {
      const searchTerm = searchBar.value.toLowerCase();
      articles.forEach(article => {
        const title = article.querySelector('h2').textContent.toLowerCase();
        if (title.includes(searchTerm)) {
          article.style.display = '';
        } else {
          article.style.display = 'none';
        }
      });
    });
  }
});

function addSearchFunctionality(searchInputId, listId) {
  const searchInput = document.getElementById(searchInputId);
  const list = document.getElementById(listId);
  const items = list.getElementsByTagName('li');

  searchInput.addEventListener('input', () => {
    const searchTerm = searchInput.value.toLowerCase();
    Array.from(items).forEach(item => {
      const text = item.textContent.toLowerCase();
      item.style.display = text.includes(searchTerm) ? '' : 'none';
    });
  });
}

addSearchFunctionality('writingsSearch', 'writingsList');
addSearchFunctionality('pastimesSearch', 'pastimesList');


// Like button toggle
const firebaseConfig = {
  apiKey: "AIzaSyCWxaABz6OSVfSniGEMdjbrWJDgmNRlzNQ",
  authDomain: "pgsite1957.firebaseapp.com",
  databaseURL: "https://pgsite1957-default-rtdb.firebaseio.com",
  projectId: "pgsite1957",
  storageBucket: "pgsite1957.firebasestorage.app",
  messagingSenderId: "464761905973",
  appId: "1:464761905973:web:c0d182ff433b029f8be27c"
};
firebase.initializeApp(firebaseConfig);
const db = firebase.database();

const articleId = window.location.pathname.split('/').pop().replace('.html', '') || "default";

db.ref('likes/' + articleId).once('value').then(snapshot => {
  const count = snapshot.val() || 0;
  document.querySelector('.likeCount').innerText = count;
});

function handleLike(btn) {
  const span = btn.querySelector('.likeCount');
  let count = parseInt(span.innerText);
  const liked = btn.dataset.liked === "true";

  count = liked ? count - 1 : count + 1;
  btn.dataset.liked = !liked;
  span.innerText = count;

  db.ref('likes/' + articleId).set(count);
}

function handleShare() {
  if (navigator.share) {
    navigator.share({
      title: document.title,
      text: 'Check out this beautiful article on Prabhupad!',
      url: window.location.href
    });
  } else {
    alert("Sharing not supported in this browser.");
  }
}
