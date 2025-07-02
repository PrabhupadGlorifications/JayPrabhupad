const photoData = [
    // Maharaj Sanand Category
    {
        id: 1,
        title: "Prabhupad with Maharaj Sanand",
        image: "images/sanand1.jpg",
        category: "maharaj-sanand",
    },
    {
        id: 2,
        title: "Prabhupad with Maharaj Sanand",
        image: "images/sanand2.jpg",
        category: "maharaj-sanand",
    },
    {
        id: 3,
        title: "Prabhupad with Maharaj Sanand",
        image: "images/sanand3.jpg",
        category: "maharaj-sanand",
    },
    {
        id: 4,
        title: "Prabhupad with Maharaj Sanand",
        image: "images/sanand4.jpg",
        category: "maharaj-sanand",
    },

    // Singles Category
    {
        id: 5,
        image: "images/photo_6327649088564216278_y (1).jpg",
        title: "'Your ever well-wisher'",
        category: "newyork",
    },
    {
        id: 6,
        title: "The symbol of devotional service in the highest degree is Radharani.",
        description: "(Nectar of Devotion, Chapter 1)",
        image: "images/photo_6327649088564216294_x (2).jpg",
        category: "newyork",
    },
    {
        id: 7,
        title: "Finally Sadhguru gets 'Sat-guru'",
        description: "All glories to Śrīla Prabhupāda!",
        image: "images/photo_6327649088564216343_y (1).jpg",
        category: "newyork",
    },
    {
        id: 8,
        title: "Teaching Western Disciples",
        description: "Sharing ancient wisdom with eager Western seekers.",
        image: "https://via.placeholder.com/400x300/9b59b6/ffffff?text=Teaching",
        category: "newyork",
        categoryName: "Prabhupad at New York"
    },
    {
        id: 9,
        title: "Brooklyn Temple",
        description: "Expanding the mission with a beautiful temple in Brooklyn.",
        image: "https://via.placeholder.com/400x300/1abc9c/ffffff?text=Brooklyn",
        category: "newyork",
        categoryName: "Prabhupad at New York"
    },
    {
        id: 10,
        title: "Ratha Yatra NYC",
        description: "Bringing the festival of chariots to the streets of New York.",
        image: "https://via.placeholder.com/400x300/34495e/ffffff?text=Ratha+Yatra",
        category: "newyork",
        categoryName: "Prabhupad at New York"
    },
    {
        id: 11,
        title: "Morning Walk",
        description: "Daily morning walks discussing spiritual philosophy in NYC parks.",
        image: "https://via.placeholder.com/400x300/16a085/ffffff?text=Morning+Walk",
        category: "newyork",
        categoryName: "Prabhupad at New York"
    },
    {
        id: 12,
        title: "Book Distribution",
        description: "Disciples distributing Prabhupad's books on New York streets.",
        image: "https://via.placeholder.com/400x300/27ae60/ffffff?text=Book+Distribution",
        category: "newyork",
        categoryName: "Prabhupad at New York"
    },

    // Quotes Category
    {
        id: 13,
        title: "Divine Wisdom",
        description: "Words that transform hearts and minds.",
        image: "https://via.placeholder.com/400x300/ff9f43/ffffff?text=Quote+Photo+1",
        category: "quotes",
        categoryName: "Photos with Quotes"
    },
    {
        id: 14,
        title: "Path of Devotion",
        description: "Guidance for sincere seekers on the spiritual path.",
        image: "https://via.placeholder.com/400x300/7bed9f/ffffff?text=Quote+Photo+2",
        category: "quotes",
        categoryName: "Photos with Quotes"
    },
    {
        id: 15,
        title: "Love Divine",
        description: "Teaching about the highest form of love - love for God.",
        image: "images/sanand1.jpg",
        category: "quotes",
        categoryName: "Photos with Quotes"
    },

    // Comics Category
    {
        id: 16,
        title: "The Mercy Comic",
        description: "Illustrating the boundless compassion of the spiritual master.",
        image: "https://via.placeholder.com/400x300/ff7675/ffffff?text=Comic+1",
        category: "comics",
        categoryName: "Comic Style Photos"
    },
    {
        id: 17,
        title: "Journey to the West",
        description: "Comic-style depiction of the historic voyage to America.",
        image: "https://via.placeholder.com/400x300/74b9ff/ffffff?text=Comic+2",
        category: "comics",
        categoryName: "Comic Style Photos"
    },
    {
        id: 18,
        title: "The Kirtan Revolution",
        description: "How chanting changed the world, told in comic format.",
        image: "https://via.placeholder.com/400x300/00b894/ffffff?text=Comic+3",
        category: "comics",
        categoryName: "Comic Style Photos"
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
        'comics': photoData.filter(p => p.category === 'comics').length
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

    card.innerHTML = `
        <img src="${photo.image}" alt="${photo.title || 'Photo'}" class="photo-img">
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
    modalImg.src = photo.image;

    // Check if either title or description exists
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