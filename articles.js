document.addEventListener("DOMContentLoaded", () => {
  fetch("articles.json")
    .then((res) => res.json())
    .then((articles) => {
      const container = document.getElementById("articlesContainer");

      articles.forEach((article) => {
        const card = document.createElement("div");
        card.className = "card";
        card.dataset.id = article.id;

        card.innerHTML = `
          <div class="image-box">
            <img src="${article.image}" alt="${article.title}">
            <div class="overlay"></div>
          </div>
          <div class="card-content">
            <h2>${article.title}</h2>
            <a href="${article.link}" class="btn">Read More</a>
          </div>
        `;

        container.appendChild(card);
      });
    })
    .catch((err) => {
      console.error("Failed to load articles:", err);
    });
});
