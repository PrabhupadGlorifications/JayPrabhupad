fetch("2plist.html")
    .then(response => response.text())
    .then(data => {
        document.getElementById("pnext-container").innerHTML = data;
    });

let pastimesList = [];
let currentIndex = -1;

window.addEventListener("DOMContentLoaded", () => {
    fetch("plist.json")
        .then(response => response.json())
        .then(data => {
            pastimesList = data;
            initNavigation();
        });
});

function initNavigation() {
    const currentPage = window.location.pathname.split("/").pop();
    const sorted = [...pastimesList].sort((a, b) => a.id - b.id);

    currentIndex = sorted.findIndex(item => item.link === currentPage);
    if (currentIndex === -1) currentIndex = 0;

    window.sortedPastimes = sorted;
    updateNavTitles(); // Set initial titles
}

function updateNavTitles() {
    const prevIndex = (currentIndex - 1 + window.sortedPastimes.length) % window.sortedPastimes.length;
    const nextIndex = (currentIndex + 1) % window.sortedPastimes.length;

    const prevTitle = window.sortedPastimes[prevIndex].title;
    const nextTitle = window.sortedPastimes[nextIndex].title;

    document.getElementById("prev-title").textContent = `${prevTitle}`;
    document.getElementById("next-title").textContent = `${nextTitle}`;
}

function goToNextPastime() {
    if (!window.sortedPastimes || currentIndex === -1) return;
    currentIndex = (currentIndex + 1) % window.sortedPastimes.length;
    const nextLink = window.sortedPastimes[currentIndex].link;
    window.location.href = nextLink;
}

function goToPreviousPastime() {
    if (!window.sortedPastimes || currentIndex === -1) return;
    currentIndex = (currentIndex - 1 + window.sortedPastimes.length) % window.sortedPastimes.length;
    const prevLink = window.sortedPastimes[currentIndex].link;
    window.location.href = prevLink;
}
