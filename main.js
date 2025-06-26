import { initializeApp } from "firebase/app";
import { getDatabase, ref, get, set } from "firebase/database";

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

// Get article ID from URL
const articleId = window.location.pathname.split('/').pop().replace('.html', '') || "article001";

// DOM elements
const likeBtn = document.getElementById("likeBtn");
const likeCount = document.getElementById("likeCount");

let liked = false;

// Load like count from Firebase
const likeRef = ref(db, 'likes/' + articleId);
get(likeRef).then(snapshot => {
  const count = snapshot.val() || 0;
  likeCount.innerText = count;
});

// Like button click event
likeBtn.addEventListener("click", () => {
  let count = parseInt(likeCount.innerText);
  count = liked ? count - 1 : count + 1;
  liked = !liked;
  likeCount.innerText = count;
  set(likeRef, count);
});