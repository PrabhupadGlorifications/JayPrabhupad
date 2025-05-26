
    let articles = [];

    // Fetch the articles from plist.json
    async function fetchArticles() {
        const response = await fetch('json/plist.json');
        const data = await response.json();
        articles = data;
        renderArticles(articles);
    }

    // Render the articles as cards
    function renderArticles(list) {
        const container = document.getElementById('articlesContainer');
        container.innerHTML = '';

        list.forEach(article => {
            const card = document.createElement('div');
            card.className = 'article-card';
            card.innerHTML = `
                <div class="card-content">
                    <h3>${article.id}. ${article.title}</h3>
                </div>
            `;
            container.appendChild(card);
        });
    }

    // Search Function
    document.getElementById('searchBar').addEventListener('input', function () {
        const query = this.value.toLowerCase();
        const filtered = articles.filter(article =>
            article.title.toLowerCase().includes(query)
        );
        renderArticles(filtered);
    });

    // Sort Function
    document.getElementById('writingsSort').addEventListener('change', function () {
        const value = this.value;
        let sorted = [...articles];

        if (value === 'asc') {
            sorted.sort((a, b) => a.title.localeCompare(b.title));
        } else if (value === 'desc') {
            sorted.sort((a, b) => b.title.localeCompare(a.title));
        } else if (value === 'id-asc') {
            sorted.sort((a, b) => a.id - b.id);
        } else if (value === 'id-desc') {
            sorted.sort((a, b) => b.id - a.id);
        }

        renderArticles(sorted);
    });

    // Initial fetch
    fetchArticles();

