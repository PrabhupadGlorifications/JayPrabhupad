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


document.getElementById("subscribeForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("subscriberEmail").value.trim();
  const agreed = document.getElementById("agreeTerms").checked;
  const message = document.getElementById("subscribeMessage");

  if (!agreed) {
    message.textContent = "Please agree to the Terms & Conditions.";
    message.style.color = "red";
    return;
  }

  const emailRef = db.ref("subscribers").push();
  emailRef.set({ email: email, date: new Date().toISOString() });

  message.textContent = "Subscribed successfully!";
  message.style.color = "green";
  document.getElementById("subscribeForm").reset();
});

