
function sortCards() {
    const container = document.getElementById('articlesContainer');
    const cards = Array.from(container.getElementsByClassName('card'));
    const sortOption = document.getElementById('writingsSort').value;

    cards.sort((a, b) => {
        const titleA = a.querySelector('h2').textContent.trim().toLowerCase();
        const titleB = b.querySelector('h2').textContent.trim().toLowerCase();
        const idA = parseInt(a.getAttribute('data-id'));
        const idB = parseInt(b.getAttribute('data-id'));

        switch (sortOption) {
            case 'id-desc':
                return idB - idA;
            case 'id-asc':
                return idA - idB;
            case 'asc':
                return titleA.localeCompare(titleB);
            case 'desc':
                return titleB.localeCompare(titleA);
            default:
                return 0;
        }
    });

    container.innerHTML = '';
    cards.forEach(card => container.appendChild(card));
}




