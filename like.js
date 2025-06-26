import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";
import { getDatabase, ref, onValue, runTransaction } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyCWxaABz6OSVfSniGEMdjbrWJDgmNRlzNQ",
    authDomain: "pgsite1957.firebaseapp.com",
    databaseURL: "https://pgsite1957-default-rtdb.firebaseio.com",
    projectId: "pgsite1957",
    storageBucket: "pgsite1957.firebasestorage.app",
    messagingSenderId: "464761905973",
    appId: "1:464761905973:web:c0d182ff433b029f8be27c"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// Identify current article
const articleId = window.location.pathname.split("/").pop().replace(".html", "");

// Track user like status in localStorage
const localKey = `liked_${articleId}`;
let hasLiked = localStorage.getItem(localKey) === "true";

const likeRef = ref(db, 'likes/' + articleId);

// Update UI when count changes
onValue(likeRef, (snapshot) => {
    const count = snapshot.val() || 0;
    document.getElementById("likeCount").innerText = count;
    updateButton();
});

// Like button click
document.getElementById("likeBtn").addEventListener('click', () => {
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

function updateButton() {
    document.getElementById("likeBtn").style.color = hasLiked ? "red" : "black";
}