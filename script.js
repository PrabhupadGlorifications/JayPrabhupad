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

function handleLike(btn) {
  let countSpan = btn.querySelector('.likeCount');
  let count = parseInt(countSpan.innerText);
  count++;
  countSpan.innerText = count;
}

function handleShare() {
  if (navigator.share) {
    navigator.share({
      title: document.title,
      text: 'Check out this article!',
      url: window.location.href
    }).then(() => {
      console.log('Shared successfully');
    }).catch(err => {
      console.error('Error sharing:', err);
    });
  } else {
    alert("This browser doesn't support sharing.");
  }
}

// Like button toggle
function handleLike(btn) {
  const countSpan = btn.querySelector('.likeCount');
  let count = parseInt(countSpan.innerText);
  const liked = btn.dataset.liked === "true";
  countSpan.innerText = liked ? count - 1 : count + 1;
  btn.dataset.liked = !liked;
}

// Share logic
function handleShare() {
  if (navigator.share) {
    navigator.share({
      title: document.title,
      text: 'Check out this beautiful Krishna article!',
      url: window.location.href
    });
  } else {
    alert('Sharing not supported in this browser.');
  }
}

