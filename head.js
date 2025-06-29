// Load header
fetch("2header.html")
  .then(res => res.text())
  .then(data => {
    document.getElementById("header-container").innerHTML = data;

    // ✅ Now that header is injected, highlight nav link
    const currentFile = window.location.href.split("/").pop(); // e.g., "1articles.html"
    const links = document.querySelectorAll(".nav-link");

    links.forEach(link => {
      const href = link.getAttribute("href");
      if (currentFile === href) {
        link.style.color = "#f5a623";
        link.style.borderBottom = "2px solid #f5a623";
      }
    });
  });

// Load footer (optional – no change needed here)
fetch("2footer.html")
  .then(res => res.text())
  .then(data => {
    document.getElementById("footer-container").innerHTML = data;
  });
