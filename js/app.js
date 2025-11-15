

import { allEventsData } from './events.js';

// DOM Elements
const menuIcon = document.getElementById('menu-icon');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const featuredEventsContainer = document.getElementById('featured-events');

// Update active nav link based on scroll position
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const scrollPosition = window.scrollY + 100; // Adjusted offset for better accuracy
    
    // Get all navigation links
    const navLinks = document.querySelectorAll('.nav-link:not(.nav-btn)');
    let currentSection = '';

    // Find which section is currently in view
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            currentSection = sectionId;
        }
    });

    // Update the active state of navigation links
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === `#${currentSection}`) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });

    // Special case for home section
    const homeLink = document.querySelector('.nav-link[href="#home"]');
    if (scrollPosition < 100 && homeLink) {
        navLinks.forEach(link => link.classList.remove('active'));
        homeLink.classList.add('active');
    }
}

// Initialize the application
function init() {
    setupEventListeners();
    if (featuredEventsContainer) {
        loadFeaturedEvents();
    }
    setupLazyLoading();
    setupSmoothScrolling();
    
    // Add scroll event listener for updating active nav link
    window.addEventListener('scroll', updateActiveNavLink);
    
    // Update active nav link on page load
    updateActiveNavLink();
    
    // Add loaded class to body when DOM is ready
    document.body.classList.add('loaded');
}


// Load all events in a tabbed interface
function loadFeaturedEvents() {
    if (!featuredEventsContainer) return;
    
    // Create tabs for each main event
    const tabButtons = allEventsData.map((event, index) => 
        `<button class="tab-btn ${index === 0 ? 'active' : ''}" data-tab="${event.mainEvent.id}">
            <i class="fas ${getEventIcon(event.mainEvent.title)}"></i> ${event.mainEvent.title}
        </button>`
    ).join('');
    
    // Create tab content for each main event
    const tabContents = allEventsData.map((event, index) => {
        const subEvents = event.subEvents.map(subEvent => `
            <div class="event-card hover-lift">
                <img class="lazy" data-src="${subEvent.imageUrl}" alt="${subEvent.title}" loading="lazy">
                <div class="event-card-content">
                    <span class="event-date">${subEvent.date}</span>
                    <h3>${subEvent.cardTitle || subEvent.title}</h3>
                    <p>${subEvent.descriptionBody.split('\n')[0]}</p>
                    <a href="event-details.html?id=${subEvent.id}" class="btn btn-secondary">Learn More</a>
                </div>
            </div>
        `).join('');
        
        return `
            <div id="${event.mainEvent.id}" class="tab-content ${index === 0 ? 'active' : ''}">
                <div class="event-card main-event">
                    <img class="lazy" data-src="${event.mainEvent.imageUrl}" alt="${event.mainEvent.title}" loading="lazy">
                    <div class="event-card-content">
                        <h2>${event.mainEvent.title}</h2>
                        <p>${event.mainEvent.descriptionBody}</p>
                    </div>
                </div>
                <h3 class="sub-events-title">Sub-Events</h3>
                <div class="events-grid">
                    ${subEvents}
                </div>
            </div>
        `;
    }).join('');
    
    // Render the tabbed interface
    featuredEventsContainer.innerHTML = `
        <div class="tabs-container">
            <div class="tabs-header">
                ${tabButtons}
            </div>
            <div class="tabs-content">
                ${tabContents}
            </div>
        </div>
    `;
    
    // Add tab switching functionality
    setupTabSwitching();
    
    // Initialize lazy loading for images
    setupLazyLoading();
}

// Helper function to get appropriate icon for each event category
function getEventIcon(title) {
    const icons = {
        'WEBWIZARD': 'fa-globe',
        'CODE CRUSADER': 'fa-code',
        'MEDIA CRAFTER': 'fa-photo-film',
        'INNOQUEST': 'fa-lightbulb',
        'SWING OF FORTUNE': 'fa-dice',
        'GAMERS GROOVE': 'fa-gamepad'
    };
    
    const key = Object.keys(icons).find(key => title.includes(key));
    return key ? icons[key] : 'fa-star';
}

// Setup tab switching functionality
function setupTabSwitching() {
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons and contents
            tabBtns.forEach(b => b.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));
            
            // Add active class to clicked button and corresponding content
            btn.classList.add('active');
            const tabId = btn.getAttribute('data-tab');
            document.getElementById(tabId).classList.add('active');
        });
    });
}

// Lazy load images with intersection observer
function setupLazyLoading() {
    if ('IntersectionObserver' in window) {
        const lazyImages = document.querySelectorAll('img.lazy');
        
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    observer.unobserve(img);
                }
            });
        });

        lazyImages.forEach(img => imageObserver.observe(img));
    } else {
        // Fallback for browsers that don't support IntersectionObserver
        const lazyImages = document.querySelectorAll('img.lazy');
        lazyImages.forEach(img => {
            img.src = img.dataset.src;
            img.classList.remove('lazy');
        });
    }
}

// Smooth scrolling for anchor links
function setupSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 100, // Offset for fixed header
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Utility function to get URL parameters
function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    const regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    const results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
}

// Initialize the app when the DOM is fully loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}

// Export functions that might be used in other modules
export {
    getUrlParameter,
    allEventsData
};
