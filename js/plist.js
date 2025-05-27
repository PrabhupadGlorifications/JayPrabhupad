fetch("2plist.html")
    .then(res => res.text())
    .then(data => document.getElementById("plist-container").innerHTML = data);

document.addEventListener("DOMContentLoaded", function () {
  const listElement = document.getElementById("pastimesList");
  const searchInput = document.getElementById("pastimesSearch");
  const sortSelect = document.getElementById("pastimesSort");

  let pastimesData = [];

  // Fetch JSON data
  fetch("../json/plist.json")
    .then(response => response.json())
    .then(data => {
      pastimesData = data;
      renderList(pastimesData);
    })
    .catch(error => console.error("Error loading plist.json:", error));

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
    const filtered = pastimesData.filter(item =>
      item.title.toLowerCase().includes(keyword)
    );
    renderList(filtered);
  });

  // Sort function
  sortSelect.addEventListener("change", function () {
    let sorted = [...pastimesData];
    const value = this.value;

    switch (value) {
      case "asc":
        sorted.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "desc":
        sorted.sort((a, b) => b.title.localeCompare(a.title));
        break;
      case "id-asc":
        sorted.sort((a, b) => a.id - b.id);
        break;
      case "id-desc":
        sorted.sort((a, b) => b.id - a.id);
        break;
    }

    renderList(sorted);
  });
});


