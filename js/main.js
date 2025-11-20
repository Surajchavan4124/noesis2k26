// 1. IMPORT MUST BE AT THE TOP (Required for data)
import { allEventsData } from './events.js';

document.addEventListener('DOMContentLoaded', function() {
    // --- EXISTING CODE START ---
    
    // Mobile menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            this.classList.toggle('active');
            if (navLinks) {
                navLinks.classList.toggle('active');
            }
        });
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            // Check if it's a modal trigger link (view details), if so, ignore smooth scroll
            if (this.classList.contains('view-details-btn')) return;

            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Add active class to current section in navigation
    const sections = document.querySelectorAll('section[id]');
    
    window.addEventListener('scroll', function() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (pageYOffset >= sectionTop - 200) {
                current = '#' + section.getAttribute('id');
            }
        });
        
        document.querySelectorAll('nav a').forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === current) {
                link.classList.add('active');
            }
        });
    });
    // --- EXISTING CODE END ---


    // --- NEW MODAL LOGIC START ---
    const modalOverlay = document.querySelector('.modal-overlay');
    const closeModalBtn = document.querySelector('.close-modal');
    const detailButtons = document.querySelectorAll('.view-details-btn'); 
    
    // Elements to fill inside the modal
    const modalTitle = document.getElementById('modal-title');
    const modalDescription = document.getElementById('modal-description');
    const modalRulesTitle = document.getElementById('modal-rules-title');
    const modalRulesList = document.getElementById('modal-rules-list');
    const subEventsContainer = document.getElementById('sub-events-container');

    // 1. Open Modal Function
    function openModal(eventId) {
        // Find the event in the imported data
        const eventData = allEventsData.find(item => item.mainEvent.id === eventId);

        if (!eventData) {
            console.error("Event not found for ID:", eventId);
            return;
        }

        const main = eventData.mainEvent;
        const subs = eventData.subEvents;

        // Populate Main Info
        if (modalTitle) modalTitle.textContent = main.title;
        
        if (modalDescription) {
            modalDescription.innerHTML = `
                <h3 class="modal-subtitle">${main.descriptionTitle}</h3>
                <p class="modal-text">${main.descriptionBody}</p>
            `;
        }

        // Populate Rules
        if (modalRulesTitle) modalRulesTitle.textContent = main.rulesTitle;
        if (modalRulesList) {
            modalRulesList.innerHTML = main.rules.map(rule => `<li>${rule}</li>`).join('');
        }

        // Populate Sub Events
        if (subEventsContainer) {
            if (subs && subs.length > 0) {
                subEventsContainer.innerHTML = `
                    <h3 class="modal-subtitle" style="width:100%; margin-top:2rem;">Sub-Events</h3>
                    <div class="sub-events-grid">
                        ${subs.map(sub => `
                            <div class="sub-event-item">
                                <h4>${sub.title}</h4>
                                <span class="sub-event-date">${sub.date}</span>
                                <p class="modal-text" style="font-size: 0.9rem">${sub.descriptionBody.substring(0, 100)}...</p>
                            </div>
                        `).join('')}
                    </div>
                `;
            } else {
                subEventsContainer.innerHTML = '';
            }
        }

        // Show Modal
        if (modalOverlay) {
            modalOverlay.classList.add('active');
            document.body.style.overflow = 'hidden'; // Disable background scroll
        }
    }

    // 2. Close Modal Function
    function closeModal() {
        if (modalOverlay) {
            modalOverlay.classList.remove('active');
            document.body.style.overflow = 'auto'; // Enable background scroll
        }
    }

    // 3. Add Event Listeners to Buttons
    if (detailButtons) {
        detailButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault(); // Prevent default anchor jump
                const eventId = btn.getAttribute('data-id');
                openModal(eventId);
            });
        });
    }

    // 4. Close Button Listener
    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', closeModal);
    }

    // 5. Close on Click Outside
    if (modalOverlay) {
        modalOverlay.addEventListener('click', (e) => {
            if (e.target === modalOverlay) {
                closeModal();
            }
        });
    }

    // 6. Close on Escape Key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modalOverlay && modalOverlay.classList.contains('active')) {
            closeModal();
        }
    });
    // --- NEW MODAL LOGIC END ---
});