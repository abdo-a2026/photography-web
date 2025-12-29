// ============================================
// Navigation Functionality
// ============================================

// Navbar scroll effect
const navbar = document.getElementById('navbar');
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile menu toggle
navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navToggle.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Active link on scroll
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - 100) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// ============================================
// Gallery Functionality
// ============================================

const galleryGrid = document.getElementById('galleryGrid');
const filterBtns = document.querySelectorAll('.filter-btn');
let currentFilter = 'all';
let currentLightboxIndex = 0;
let filteredProducts = [...products];

// Initialize gallery
function initGallery() {
    renderGallery(products);
}

// Render gallery items
function renderGallery(items) {
    galleryGrid.innerHTML = '';
    
    items.forEach((product, index) => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';
        galleryItem.setAttribute('data-category', product.category);
        galleryItem.setAttribute('data-index', index);
        
        galleryItem.innerHTML = `
            <img src="${product.image}" alt="${product.description}" loading="lazy">
            <div class="gallery-overlay">
                <p class="gallery-description">${product.description}</p>
            </div>
        `;
        
        // Add click event to open lightbox
        galleryItem.addEventListener('click', () => {
            openLightbox(index, items);
        });
        
        galleryGrid.appendChild(galleryItem);
        
        // Fade in animation with delay
        setTimeout(() => {
            galleryItem.style.opacity = '0';
            galleryItem.style.transform = 'translateY(30px)';
            galleryItem.style.transition = 'all 0.6s ease';
            
            setTimeout(() => {
                galleryItem.style.opacity = '1';
                galleryItem.style.transform = 'translateY(0)';
            }, index * 50);
        }, 10);
    });
}

// Filter gallery
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Update active button
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        // Get filter value
        const filterValue = btn.getAttribute('data-filter');
        currentFilter = filterValue;
        
        // Filter products
        if (filterValue === 'all') {
            filteredProducts = [...products];
        } else {
            filteredProducts = products.filter(product => product.category === filterValue);
        }
        
        // Re-render gallery
        renderGallery(filteredProducts);
    });
});

// ============================================
// Lightbox Functionality
// ============================================

const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightboxImage');
const lightboxCaption = document.getElementById('lightboxCaption');
const lightboxClose = document.getElementById('lightboxClose');
const lightboxPrev = document.getElementById('lightboxPrev');
const lightboxNext = document.getElementById('lightboxNext');

function openLightbox(index, items) {
    currentLightboxIndex = index;
    filteredProducts = items;
    updateLightboxContent();
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = 'auto';
}

function updateLightboxContent() {
    const currentProduct = filteredProducts[currentLightboxIndex];
    lightboxImage.src = currentProduct.image;
    lightboxCaption.textContent = currentProduct.description;
}

function nextImage() {
    currentLightboxIndex = (currentLightboxIndex + 1) % filteredProducts.length;
    updateLightboxContent();
}

function prevImage() {
    currentLightboxIndex = (currentLightboxIndex - 1 + filteredProducts.length) % filteredProducts.length;
    updateLightboxContent();
}

// Lightbox event listeners
lightboxClose.addEventListener('click', closeLightbox);
lightboxNext.addEventListener('click', nextImage);
lightboxPrev.addEventListener('click', prevImage);

// Close lightbox when clicking outside image
lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        closeLightbox();
    }
});

// Keyboard navigation for lightbox
document.addEventListener('keydown', (e) => {
    if (lightbox.classList.contains('active')) {
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowRight') prevImage(); // RTL: right arrow goes to previous
        if (e.key === 'ArrowLeft') nextImage();  // RTL: left arrow goes to next
    }
});

// ============================================
// Booking Form Functionality
// ============================================

const submitBooking = document.getElementById('submitBooking');
const fullNameInput = document.getElementById('fullName');
const phoneInput = document.getElementById('phone');
const eventTypeInput = document.getElementById('eventType');
const eventDateInput = document.getElementById('eventDate');
const messageInput = document.getElementById('message');

submitBooking.addEventListener('click', () => {
    // Get form values
    const fullName = fullNameInput.value.trim();
    const phone = phoneInput.value.trim();
    const eventType = eventTypeInput.value;
    const eventDate = eventDateInput.value;
    const message = messageInput.value.trim();
    
    // Validation
    if (!fullName) {
        alert('الرجاء إدخال الاسم الكامل');
        fullNameInput.focus();
        return;
    }
    
    if (!phone) {
        alert('الرجاء إدخال رقم الهاتف');
        phoneInput.focus();
        return;
    }
    
    if (!eventType) {
        alert('الرجاء اختيار نوع المناسبة');
        eventTypeInput.focus();
        return;
    }
    
    if (!eventDate) {
        alert('الرجاء اختيار تاريخ المناسبة');
        eventDateInput.focus();
        return;
    }
    
    // Format WhatsApp message
    let whatsappMessage = `مرحباً، أنا ${fullName}%0A%0A`;
    whatsappMessage += `📱 رقم الهاتف: ${phone}%0A`;
    whatsappMessage += `🎉 نوع المناسبة: ${eventType}%0A`;
    whatsappMessage += `📅 تاريخ المناسبة: ${eventDate}%0A`;
    
    if (message) {
        whatsappMessage += `%0A💬 رسالة إضافية:%0A${message}`;
    }
    
    // WhatsApp URL (replace XXXXXXXXXXX with actual phone number)
    const whatsappURL = `https://wa.me/9647XXXXXXXX?text=${whatsappMessage}`;
    
    // Open WhatsApp
    window.open(whatsappURL, '_blank');
    
    // Optional: Clear form after submission
    // Uncomment the lines below if you want to clear the form
    /*
    fullNameInput.value = '';
    phoneInput.value = '';
    eventTypeInput.value = '';
    eventDateInput.value = '';
    messageInput.value = '';
    */
});

// ============================================
// Smooth Scroll for Anchor Links
// ============================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            const offsetTop = target.offsetTop - 80; // Offset for fixed navbar
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ============================================
// Scroll Reveal Animations
// ============================================

function revealOnScroll() {
    const reveals = document.querySelectorAll('.testimonial-card, .stat-item, .about-text, .about-image');
    
    reveals.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
}

// Initialize reveal elements
document.addEventListener('DOMContentLoaded', () => {
    const reveals = document.querySelectorAll('.testimonial-card, .stat-item, .about-text, .about-image');
    reveals.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(40px)';
        element.style.transition = 'all 0.8s ease';
    });
});

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

// ============================================
// Form Input Animations
// ============================================

const formInputs = document.querySelectorAll('.form-input');

formInputs.forEach(input => {
    input.addEventListener('focus', function() {
        this.parentElement.classList.add('focused');
    });
    
    input.addEventListener('blur', function() {
        if (!this.value) {
            this.parentElement.classList.remove('focused');
        }
    });
});

// ============================================
// Initialize Gallery on Page Load
// ============================================

window.addEventListener('DOMContentLoaded', () => {
    initGallery();
    revealOnScroll();
});

// ============================================
// Loading Animation (Optional Enhancement)
// ============================================

window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// ============================================
// Prevent Context Menu on Images (Optional)
// ============================================

document.addEventListener('contextmenu', (e) => {
    if (e.target.tagName === 'IMG') {
        e.preventDefault();
    }
});

// ============================================
// Mobile Touch Swipe for Lightbox
// ============================================

let touchStartX = 0;
let touchEndX = 0;

lightbox.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
});

lightbox.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
});

function handleSwipe() {
    if (touchEndX < touchStartX - 50) {
        // Swipe left - next image (RTL)
        prevImage();
    }
    if (touchEndX > touchStartX + 50) {
        // Swipe right - previous image (RTL)
        nextImage();
    }
}

// ============================================
// Intersection Observer for Better Performance
// ============================================

if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    observer.unobserve(img);
                }
            }
        });
    });
    
    // Observe all images with data-src attribute
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ============================================
// Console Branding (Optional Fun Touch)
// ============================================

console.log('%c🎨 موقع أحمد للتصوير الفوتوغرافي', 'font-size: 20px; font-weight: bold; color: #c9a961;');
console.log('%cتم التطوير بكل ❤️ واحترافية', 'font-size: 14px; color: #b0b0b0;');