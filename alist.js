fetch("2alist.html")
  .then(res => res.text())
  .then(data => document.getElementById("alist-container").innerHTML = data);

document.addEventListener("DOMContentLoaded", function () {
  const listElement = document.getElementById("articlesList");
  const searchInput = document.getElementById("articlesSearch");
  const sortSelect = document.getElementById("articlesSort");

  let articlesData = [];

  // Fetch JSON data
  fetch("alist.json")
    .then(response => response.json())
    .then(data => {
      // ✅ Sort in descending order by ID
      articlesData = data.sort((a, b) => b.id - a.id);
      renderList(articlesData);
    })
    .catch(error => console.error("Error loading alist.json:", error));

  // Render function
  function renderList(data) {
    listElement.innerHTML = "";
    data.forEach(item => {
      const li = document.createElement("li");
      const a = document.createElement("a");
      a.textContent = item.title;
      a.href = item.link;
      a.style.textDecoration = "none";
      a.style.color = "#333";
      li.appendChild(a);
      listElement.appendChild(li);
    });
  }


  // Search function
  searchInput.addEventListener("input", function () {
    const keyword = this.value.toLowerCase();
    const filtered = articlesData.filter(item =>
      item.title.toLowerCase().includes(keyword)
    );
    renderList(filtered);
  });

  // Sort function
  sortSelect.addEventListener("change", function () {
    let sorted = [...articlesData];
    const value = this.value;

    switch (value) {
      case "id-desc":
        sorted.sort((a, b) => b.id - a.id);
        break;
      case "id-asc":
        sorted.sort((a, b) => a.id - b.id);
        break;
      case "asc":
        sorted.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "desc":
        sorted.sort((a, b) => b.title.localeCompare(a.title));
        break;
    }

    renderList(sorted);
  });
});


