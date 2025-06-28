// like.js

import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";
import { getDatabase, ref, onValue, runTransaction } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-database.js";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyCWxaABz6OSVfSniGEMdjbrWJDgmNRlzNQ",
  authDomain: "pgsite1957.firebaseapp.com",
  databaseURL: "https://pgsite1957-default-rtdb.firebaseio.com",
  projectId: "pgsite1957",
  storageBucket: "pgsite1957.firebasestorage.app",
  messagingSenderId: "464761905973",
  appId: "1:464761905973:web:c0d182ff433b029f8be27c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// Get article ID from URL (filename without .html)
const articleId = window.location.pathname.split("/").pop().replace(".html", "");
const localKey = `liked_${articleId}`;
let hasLiked = localStorage.getItem(localKey) === "true";

const likeRef = ref(db, 'likes/' + articleId);

// Wait for button to be in DOM
document.addEventListener("DOMContentLoaded", () => {
  const likeBtn = document.getElementById("likeBtn");
  const likeCount = document.getElementById("likeCount");

  if (!likeBtn || !likeCount) return;

  onValue(likeRef, (snapshot) => {
    likeCount.innerText = snapshot.val() || 0;
    updateButton(likeBtn);
  });

  likeBtn.addEventListener("click", () => {
    runTransaction(likeRef, (currentLikes) => {
      if (hasLiked) {
        hasLiked = false;
        localStorage.setItem(localKey, "false");
        return Math.max((currentLikes || 1) - 1, 0);
      } else {
        hasLiked = true;
        localStorage.setItem(localKey, "true");
        return (currentLikes || 0) + 1;
      }
    });
  });
});

function updateButton(btn) {
  btn.style.color = hasLiked ? "black" : "black";
}



// share.js

export function handleShare() {
  if (navigator.share) {
    navigator.share({
      title: document.title,
      text: 'Check out this beautiful article on Prabhupad!',
      url: window.location.href
    }).catch((err) => console.error("Sharing failed:", err));
  } else {
    alert("Sharing not supported in this browser.");
  }
}

// Optional: Auto-attach to button with id="shareBtn"
document.addEventListener("DOMContentLoaded", () => {
  const shareBtn = document.getElementById("shareBtn");
  if (shareBtn) {
    shareBtn.addEventListener("click", handleShare);
  }
});
