function addSearchAndSortFunctionality(searchInputId, listId, sortSelectId) {
    const searchInput = document.getElementById(searchInputId);
    const list = document.getElementById(listId);
    const sortSelect = document.getElementById(sortSelectId);
    const items = Array.from(list.getElementsByTagName('li'));

    function sortList(order) {
        const sortedItems = items.sort((a, b) => {
            const textA = a.textContent.trim().toLowerCase();
            const textB = b.textContent.trim().toLowerCase();
            const idA = parseInt(a.getAttribute('data-id'));
            const idB = parseInt(b.getAttribute('data-id'));

            if (order === 'asc') {
                return textA.localeCompare(textB);
            } else if (order === 'desc') {
                return textB.localeCompare(textA);
            } else if (order === 'id-asc') {
                return idA - idB;
            } else if (order === 'id-desc') {
                return idB - idA;
            } else {
                return 0;
            }
        });

        list.innerHTML = '';
        sortedItems.forEach(item => list.appendChild(item));
    }

    searchInput.addEventListener('input', () => {
        const searchTerm = searchInput.value.toLowerCase();
        items.forEach(item => {
            const text = item.textContent.toLowerCase();
            item.style.display = text.includes(searchTerm) ? '' : 'none';
        });
    });

    sortSelect.addEventListener('change', () => {
        sortList(sortSelect.value);
    });

    // Initial sort to match the default selection
    sortList(sortSelect.value);
}

// Call function for both lists
addSearchAndSortFunctionality('writingsSearch', 'writingsList', 'writingsSort');
addSearchAndSortFunctionality('pastimesSearch', 'pastimesList', 'pastimesSort');

