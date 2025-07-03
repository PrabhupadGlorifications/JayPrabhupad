const photoData = [
    // Singles Category
    {
        image: "images/photo_6260457297335667713_y.jpg",
        title: "Servant of the servant",
        category: "newyork",
    },
    {
        image: "images/photo_6260457297335667714_y.jpg",
        title: "HH Tamal Krishna Goswami Maharaj",
        category: "newyork",
    },
    {
        image: "images/photo_6217652454967855080_y.jpg",
        title: "HDG AC Bhaktivedanta Swami Prabhupad ki jay!",
        category: "newyork",
    },
    {
        image: "images/photo_6215530101173503968_x.jpg",
        title: "Śrimad Varadarāja Perumal",
        description: "Worshipped by Śripād Rāmānujācārya.",
        category: "newyork",
    },
    {
        image: "images/photo_6215530101173503967_y.jpg",
        title: "Jaya Prabhupāda! Jaya Prabhupāda!",
        category: "newyork",
    },
    {
        video: "images/document_6197075433700202888.mp4",
        type: "video",
        title: "Sri Sri Radhā rasa bihari",
        category: "quotes",
    },
    {
        image: "images/photo_6190240174093486345_y.jpg",
        title: "HH Vishnujan Swami Maharaj",
        category: "newyork",
    },
    {
        image: "images/photo_6190645369898124240_y.jpg",
        title: "HH Bhakti Vikasa Swami & HH Sivarama Swami distribute a “𝐒𝐚𝐩𝐭𝐚𝐫𝐢𝐬𝐡𝐢” set on the streets of Atlanta!",
        description: "Jaya Shrila Prabhupāda!",
        category: "newyork",
    },
    {
        image: "images/photo_6177226616460133760_y.jpg",
        title: "Love Nowadays",
        category: "maharaj-sanand",
    },
    {
        image: "images/photo_6159055103751996069_x (1).jpg",
        title: "#Ritwiks",
        category: "maharaj-sanand",
    },
    {
        image: "images/photo_6159055103751996290_y (1).jpg",
        title: "#Ritwiks",
        category: "maharaj-sanand",
    },
    {
        image: "images/photo_6327649088564216278_y (1).jpg",
        title: "'Your ever well-wisher'",
        category: "newyork",
    },
    {
        title: "The symbol of devotional service in the highest degree is Radharani.",
        description: "(Nectar of Devotion, Chapter 1)",
        image: "images/photo_6327649088564216294_x (2).jpg",
        category: "newyor",
    },
    {
        title: "Finally Sadhguru gets 'Sat-guru'",
        description: "All glories to Śrīla Prabhupāda!",
        image: "images/photo_6327649088564216343_y (1).jpg",
        category: "newyork",
    },
    {
        title: "Question: Is there a Prayer to Krsna for a devotee who is Unwilling to Become Krishna Conscious?",
        image: "images/photo_6327649088564216348_y (1).jpg",
        category: "newyork",
    },
    {
        description: "'Great unalloyed devotees of the Lord are compassionate toward the fallen, and therefore they travel all over the world with the mission of bringing souls back to Godhead, back to home.'",
        image: "images/photo_6327649088564216351_y (1).jpg",
        category: "newyork",
    },
    {
        title: "CHĀRU VILĀS Reviving moments with HH Bhakti Charu Swami Maharaja",
        description: "Author : Krsna-Kisora Das",
        image: "images/photo_6062113822115741592_y (1).jpg",
        category: "newyork",
        categoryName: "Prabhupad at New York"
    },
    {
        title: "No one!",
        image: "images/photo_6149867189453308466_y (2).jpg",
        category: "newyork",
    },
    {
        title: "Shrila Prabhupad's original sweater",
        description: "Disciples distributing Prabhupad's books on New York streets.",
        image: "images/photo_6149867189453308691_y (2).jpg",
        category: "newyork",
        categoryName: "Prabhupad at New York"
    },
    {
        title: "Priceless moments with a pure devotee",
        description: "Author : Trivikrama Swami",
        image: "images/photo_6082631271730758946_y (3).jpg",
        category: "newyork",
    },
    {
        title: "Srila Prabhupada Kirtan",
        type: "video",
        video: "images/vover.mp4",
        category: "quotes"
    },

    {
        title: "Love Divine",
        image: "images/vover.jpg",
        category: "quotes",
        categoryName: "Photos with Quotes"
    },
    // Quotes Category
    // Maharaj Sanand Category
    {
        title: "Prabhupad with Maharaj Sanand",
        image: "images/sanand1.jpg",
        category: "maharaj-sanand",
    },
    {
        title: "Prabhupad with Maharaj Sanand",
        image: "images/sanand2.jpg",
        category: "maharaj-sanand",
    },
    {
        title: "Prabhupad with Maharaj Sanand",
        image: "images/sanand3.jpg",
        category: "maharaj-sanand",
    },
    {
        title: "Prabhupad with Maharaj Sanand",
        image: "images/sanand4.jpg",
        category: "maharaj-sanand",
    },
    // Comics Category
    {
        title: "The Mercy Comic",
        description: "Illustrating the boundless compassion of the spiritual master.",
        image: "https://via.placeholder.com/400x300/ff7675/ffffff?text=Comic+1",
        category: "comics",
        categoryName: "Comic Style Photos"
    },
    {
        title: "Journey to the rWest",
        description: "Comic-rstyle depiction of the historic voyage to America.",
        image: "https://via.placeholder.com/400x300/74b9ff/ffffff?text=Comic+2",
        category: "comics",
        categoryName: "Comic Style Photos"
    },
    {
        title: "The Kirtan Revoylution",
        description: "How chanting chaynged the world, told in comic format.",
        image: "https://via.placeholder.com/400x300/00b894/ffffff?text=Comic+3",
        category: "comics",
        categoryName: "Comic Style Photos"
    },
    {
        title: "The Kirtan Revol4tion",
        description: "How chanting4 changed the world, told in comic format.",
        image: "https://via.placeholder.com/400x300/00b894/ffffff?text=Comic+3",
        category: "shave",
    }
];

// DOM elements
const filterBtns = document.querySelectorAll('.filter-btn');
const photosGrid = document.getElementById('photos-grid');
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');
const modalTitle = document.getElementById('modal-title');
const modalDescription = document.getElementById('modal-description');
const modalCounter = document.getElementById('modal-counter');
const closeModal = document.querySelector('.close-modal');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const noResults = document.getElementById('no-results');

let currentFilter = 'all';
let currentPhotoIndex = 0; 
let filteredPhotos = [];
function updateFilteredPhotos() {
    if (currentFilter === 'all') {
        filteredPhotos = photoData;
    } else {
        filteredPhotos = photoData.filter(p => p.category === currentFilter);
    }
}

// Initialize the gallery
function initGallery() {
    updateCounts();
    updateFilteredPhotos();
    renderFilteredPhotos(); // Only render filtered photos
    setupEventListeners();
    addScrollAnimations();
}

function filterPhotos(filter, btn) {
    currentFilter = filter;

    // Update active button
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    // Update filtered photos array
    updateFilteredPhotos();

    // Re-render grid based on filter
    renderFilteredPhotos();

    // Show/hide no results message
    noResults.style.display = filteredPhotos.length === 0 ? 'block' : 'none';
}



// Update photo counts for each category
function updateCounts() {
    const counts = {
        'all': photoData.length,
        'maharaj-sanand': photoData.filter(p => p.category === 'maharaj-sanand').length,
        'newyork': photoData.filter(p => p.category === 'newyork').length,
        'quotes': photoData.filter(p => p.category === 'quotes').length,
        'comics': photoData.filter(p => p.category === 'comics').length,
        'shave': photoData.filter(p => p.category === 'shave').length
    };

    Object.keys(counts).forEach(category => {
        const countEl = document.getElementById(`${category}-count`);
        if (countEl) countEl.textContent = counts[category];
    });
}


// Render all photos
function renderAllPhotos() {
    photosGrid.innerHTML = '';

    photoData.forEach(photo => {
        const photoCard = createPhotoCard(photo);
        photosGrid.appendChild(photoCard);
    });
}
// Render filtered photos only (used after filtering)
function renderFilteredPhotos() {
    photosGrid.innerHTML = ''; // Clear the grid

    filteredPhotos.forEach(photo => {
        const photoCard = createPhotoCard(photo);
        photosGrid.appendChild(photoCard);
    });

    addScrollAnimations(); // Optional: keep scroll effects
}

function createPhotoCard(photo) {
    const card = document.createElement('div');
    card.className = 'photo-card';
    card.dataset.category = photo.category;
    card.onclick = () => openModal(photo);

    const hasContent = photo.title || photo.description;

    let mediaHTML = '';

    if (photo.type === 'video') {
        mediaHTML = `<video class="photo-img" src="${photo.video}" muted autoplay loop playsinline></video>`;
    } else {
        mediaHTML = `<img src="${photo.image}" alt="${photo.title || 'Photo'}" class="photo-img">`;
    }

    card.innerHTML = `
        ${mediaHTML}
        ${hasContent ? `
            <div class="photo-content">
                ${photo.title ? `<div class="photo-title">${photo.title}</div>` : ''}
                ${photo.description ? `<div class="photo-description">${photo.description}</div>` : ''}
            </div>
        ` : ''}
    `;

    return card;
}


// Setup event listeners
function setupEventListeners() {
    // Filter buttons
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const filter = btn.dataset.filter;
            filterPhotos(filter, btn);
        });
    });

    // Modal close events
    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Navigation buttons
    prevBtn.addEventListener('click', showPrevious);
    nextBtn.addEventListener('click', showNext);

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (modal.style.display === 'block') {
            switch (e.key) {
                case 'Escape':
                    modal.style.display = 'none';
                    break;
                case 'ArrowLeft':
                    e.preventDefault();
                    showPrevious();
                    break;
                case 'ArrowRight':
                    e.preventDefault();
                    showNext();
                    break;
            }
        }
    });
}
function filterPhotos(filter, btn) {
    currentFilter = filter;

    // Update active button
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    // Update filtered photos array
    updateFilteredPhotos();

    // Re-render grid based on filter
    renderFilteredPhotos();

    // Show/hide no results message
    noResults.style.display = filteredPhotos.length === 0 ? 'block' : 'none';
}


// Open modal with photo details
function openModal(photo) {
    // Find the index of this photo in the filtered array
    currentPhotoIndex = filteredPhotos.findIndex(p => p.id === photo.id);
    updateModalContent(photo);
    updateNavigationButtons();
    modal.style.display = 'block';
}

function updateModalContent(photo) {
    const modalVideo = document.getElementById('modal-video');
    const isVideo = photo.type === 'video';

    if (isVideo) {
        modalImg.style.display = 'none';
        modalVideo.style.display = 'block';
        modalVideo.src = photo.video;
        modalVideo.load();
        modalVideo.play();
    } else {
        modalImg.src = photo.image;
        modalImg.style.display = 'block';
        modalVideo.pause();
        modalVideo.style.display = 'none';
    }

    const hasTitle = photo.title && photo.title.trim() !== "";
    const hasDescription = photo.description && photo.description.trim() !== "";

    if (hasTitle || hasDescription) {
        document.querySelector('.modal-info').style.display = 'block';
        modalTitle.textContent = hasTitle ? photo.title : "";
        modalDescription.textContent = hasDescription ? photo.description : "";
    } else {
        document.querySelector('.modal-info').style.display = 'none';
    }

    modalCounter.textContent = `${currentPhotoIndex + 1} / ${filteredPhotos.length}`;
}



// Update navigation button states
function updateNavigationButtons() {
    prevBtn.disabled = currentPhotoIndex === 0;
    nextBtn.disabled = currentPhotoIndex === filteredPhotos.length - 1;
}

// Show previous photo
function showPrevious() {
    if (currentPhotoIndex > 0) {
        currentPhotoIndex--;
        const photo = filteredPhotos[currentPhotoIndex];
        updateModalContent(photo);
        updateNavigationButtons();
    }
}

// Show next photo
function showNext() {
    if (currentPhotoIndex < filteredPhotos.length - 1) {
        currentPhotoIndex++;
        const photo = filteredPhotos[currentPhotoIndex];
        updateModalContent(photo);
        updateNavigationButtons();
    }
}

// Add scroll animations
function addScrollAnimations() {
    const cards = document.querySelectorAll('.photo-card');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeIn 0.6s ease-in-out';
            }
        });
    });

    cards.forEach(card => {
        observer.observe(card);
    });
}

// Initialize gallery when page loads
document.addEventListener('DOMContentLoaded', initGallery);