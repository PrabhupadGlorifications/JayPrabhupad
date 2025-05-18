function addSearchAndSortFunctionality(searchInputId, listId, sortSelectId) {
    const searchInput = document.getElementById(searchInputId);
    const list = document.getElementById(listId);
    const sortSelect = document.getElementById(sortSelectId);
    const items = Array.from(list.getElementsByTagName('li'));

    function sortList(order) {
        const sortedItems = items.sort((a, b) => {
            const textA = a.textContent.trim().toLowerCase();
            const textB = b.textContent.trim().toLowerCase();
            return order === 'asc' ? textA.localeCompare(textB) : textB.localeCompare(textA);
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

addSearchAndSortFunctionality('writingsSearch', 'writingsList', 'writingsSort');
addSearchAndSortFunctionality('pastimesSearch', 'pastimesList', 'pastimesSort');
