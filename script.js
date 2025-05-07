// script.js
document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll(".nav-link");
    const currentPage = window.location.pathname.split("/").pop();
  
    links.forEach(link => {
      const linkPage = link.getAttribute("href");
      if (linkPage === currentPage || (currentPage === "" && linkPage === "index.html")) {
        link.classList.add("active");
      }
    });
  });
  