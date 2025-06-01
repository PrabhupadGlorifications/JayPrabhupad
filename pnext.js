fetch("2plist.html")
    .then(response => response.text())
    .then(data => {
        document.getElementById("anext-container").innerHTML = data;
    })
let pastimesList = [];
let currentIndex = -1;

window.addEventListener("DOMContentLoaded", () => {
    fetch("alist.json")
        .then(response => response.json())
        .then(data => {
            pastimesList = data;
            initNavigation();
        });

    document.getElementById("pastimesSort").addEventListener("change", initNavigation);
});

function initNavigation() {
    const sortValue = document.getElementById("pastimesSort").value;
    const currentPage = window.location.pathname.split("/").pop(); // e.g. 'decades.html'

    const sorted = [...pastimesList].sort((a, b) => {
        return sortValue === "id-asc" ? a.id - b.id : b.id - a.id;
    });

    currentIndex = sorted.findIndex(item => item.link === currentPage);
    if (currentIndex === -1) currentIndex = 0;

    window.sortedPastimes = sorted;
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

