fetch("2alist.html")
    .then(response => response.text())
    .then(data => {
        document.getElementById("anext-container").innerHTML = data;
    });

let articlesList = [];
let currentIndex = -1;

window.addEventListener("DOMContentLoaded", () => {
    fetch("alist.json")
        .then(response => response.json())
        .then(data => {
            articlesList = data;
            initNavigation();
        });
});

function initNavigation() {
    const currentPage = window.location.pathname.split("/").pop();
    const sorted = [...articlesList].sort((a, b) => a.id - b.id);

    currentIndex = sorted.findIndex(item => item.link === currentPage);
    if (currentIndex === -1) currentIndex = 0;

    window.sortedArticles = sorted;
    updateNavTitles(); // Set initial titles
}

function updateNavTitles() {
    const prevIndex = (currentIndex - 1 + window.sortedArticles.length) % window.sortedArticles.length;
    const nextIndex = (currentIndex + 1) % window.sortedArticles.length;

    const prevTitle = window.sortedArticles[prevIndex].title;
    const nextTitle = window.sortedArticles[nextIndex].title;

    document.getElementById("prev-title").textContent = `: ${prevTitle}`;
    document.getElementById("next-title").textContent = `: ${nextTitle}`;
}

function goToNextArticle() {
    if (!window.sortedArticles || currentIndex === -1) return;
    currentIndex = (currentIndex + 1) % window.sortedArticles.length;
    const nextLink = window.sortedArticles[currentIndex].link;
    window.location.href = nextLink;
}

function goToPreviousArticle() {
    if (!window.sortedArticles || currentIndex === -1) return;
    currentIndex = (currentIndex - 1 + window.sortedArticles.length) % window.sortedArticles.length;
    const prevLink = window.sortedArticles[currentIndex].link;
    window.location.href = prevLink;
}


