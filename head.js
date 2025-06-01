fetch("2header.html")
    .then(res => res.text())
    .then(data => document.getElementById("header-container").innerHTML = data);

fetch("2footer.html")
    .then(res => res.text())
    .then(data => document.getElementById("footer-container").innerHTML = data);