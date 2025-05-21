
let sortedItems = [];
let currentIndex = -1;

function sortList(order) {
    const list = document.getElementById('writingsList');
    const items = Array.from(list.getElementsByTagName('li'));

    sortedItems = items.sort((a, b) => {
        const idA = parseInt(a.getAttribute('data-id'));
        const idB = parseInt(b.getAttribute('data-id'));
        return order === 'id-asc' ? idA - idB : idB - idA;
    });

    // Refresh list DOM
    list.innerHTML = '';
    sortedItems.forEach(item => list.appendChild(item));

    currentIndex = -1; // Reset current index
}

function goToNextArticle() {
    if (sortedItems.length === 0) return;
    currentIndex = (currentIndex + 1) % sortedItems.length;
    const link = sortedItems[currentIndex].querySelector('a');
    if (link && link.href) {
        window.location.href = link.href; // Open the page
    }
}

function goToPreviousArticle() {
    if (sortedItems.length === 0) return;
    currentIndex = (currentIndex - 1 + sortedItems.length) % sortedItems.length;
    const link = sortedItems[currentIndex].querySelector('a');
    if (link && link.href) {
        window.location.href = link.href; // Open the page
    }
}

// Event listener for sort dropdown
document.getElementById('writingsSort').addEventListener('change', () => {
    sortList(document.getElementById('writingsSort').value);
});

// Initial sort on page load
window.addEventListener('DOMContentLoaded', () => {
    sortList(document.getElementById('writingsSort').value);
});

