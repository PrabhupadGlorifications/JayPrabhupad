document.addEventListener("DOMContentLoaded", () => {
    const searchBar = document.getElementById("searchBar");
    const articlesContainer = document.getElementById("pastimesContainer");

    fetch("pastimes.json")
        .then(res => res.json())
        .then(data => {
            // ✅ Sort in descending order by ID (newest first)
            data.sort((a, b) => b.id - a.id);

            // ✅ Render cards
            data.forEach(article => {
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
                articlesContainer.appendChild(card);
            });

            // Enable search functionality after cards are added
            if (searchBar) {
                searchBar.addEventListener("input", () => {
                    const searchTerm = searchBar.value.toLowerCase();
                    const cards = articlesContainer.querySelectorAll(".card");

                    cards.forEach(card => {
                        const title = card.querySelector("h2").textContent.toLowerCase();
                        card.style.display = title.includes(searchTerm) ? "" : "none";
                    });
                });
            }
        })
        .catch(error => {
            console.error("Failed to load pastimes.json:", error);
        });

    // Optional: For other list-based search bars
    addSearchFunctionality("writingsSearch", "writingsList");
    addSearchFunctionality("pastimesSearch", "pastimesList");
});

function addSearchFunctionality(searchInputId, listId) {
    const searchInput = document.getElementById(searchInputId);
    const list = document.getElementById(listId);
    if (!searchInput || !list) return;

    const items = list.getElementsByTagName("li");

    searchInput.addEventListener("input", () => {
        const searchTerm = searchInput.value.toLowerCase();
        Array.from(items).forEach(item => {
            const text = item.textContent.toLowerCase();
            item.style.display = text.includes(searchTerm) ? "" : "none";
        });
    });
}
