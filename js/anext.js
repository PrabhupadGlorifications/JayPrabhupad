fetch("2alist.html")
    .then(response => response.text())
    .then(data => {
        document.getElementById("anext-container").innerHTML = data;
    })
    
let articlesList = [];
let currentIndex = -1;

window.addEventListener("DOMContentLoaded", () => {
    fetch("../json/alist.json")
        .then(response => response.json())
        .then(data => {
            articlesList = data;
            initNavigation();
        });
});

function initNavigation() {
    const currentPage = window.location.pathname.split("/").pop(); // e.g. 'decades.html'

    const sorted = [...articlesList].sort((a, b) => a.id - b.id); // Always Oldest First

    currentIndex = sorted.findIndex(item => item.link === currentPage);
    if (currentIndex === -1) currentIndex = 0;

    window.sortedArticles = sorted;
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





