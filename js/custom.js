// Animate value function
function animateValue(obj, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        obj.textContent = Math.floor(progress * (end - start) + start);
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}

// Initialize stats counter
function initStatsCounter() {
    const stats = document.querySelectorAll('.stat-number');
    if (stats.length > 0) {
        stats.forEach(stat => {
            const target = parseInt(stat.getAttribute('data-count') || '0');
            const current = parseInt(stat.textContent) || 0;
            stat.textContent = '0';
            animateValue(stat, 0, target, 2000);
        });
    }
}

// Main document ready function
document.addEventListener('DOMContentLoaded', () => {
    // Tab functionality
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    
    // Initialize tab highlight if tab header exists
    const tabHeader = document.querySelector('.tab-header');
    if (tabHeader) {
        const tabHighlight = document.createElement('div');
        tabHighlight.className = 'tab-highlight';
        tabHeader.appendChild(tabHighlight);
        
        // Function to update tab highlight position
        function updateTabHighlight(activeBtn) {
            if (!activeBtn) return;
            const { offsetLeft, offsetWidth } = activeBtn;
            tabHighlight.style.width = `${offsetWidth}px`;
            tabHighlight.style.transform = `translateX(${offsetLeft}px)`;
        }
        
        // Set initial active tab
        const activeTab = document.querySelector('.tab-btn.active');
        if (activeTab) updateTabHighlight(activeTab);
        
        // Add click event to tab buttons
        tabBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                // Remove active class from all buttons and contents
                tabBtns.forEach(b => b.classList.remove('active'));
                tabContents.forEach(c => c.classList.remove('active'));
                
                // Add active class to clicked button
                btn.classList.add('active');
                
                // Show corresponding content
                const tabId = btn.getAttribute('data-tab');
                const tabContent = document.getElementById(`${tabId}-tab`);
                if (tabContent) tabContent.classList.add('active');
                
                // Update highlight position
                updateTabHighlight(btn);
            });
        });
        
        // Update highlight on window resize
        window.addEventListener('resize', () => {
            const activeBtn = document.querySelector('.tab-btn.active');
            if (activeBtn) updateTabHighlight(activeBtn);
        });
    }

    // Tab switching for main tabs
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons and contents
            tabBtns.forEach(b => b.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));
            
            // Add active class to clicked button and corresponding content
            btn.classList.add('active');
            const tabId = btn.getAttribute('data-tab');
            document.getElementById(tabId).classList.add('active');
            
            // Update tab highlight position with smooth transition
            updateTabHighlight(btn);
        });
    });

    // Event tab functionality
    const eventTabBtns = document.querySelectorAll('.event-tab-btn');
    const eventTabContents = document.querySelectorAll('.event-tab-content');
    
    eventTabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons and contents
            eventTabBtns.forEach(b => b.classList.remove('active'));
            eventTabContents.forEach(c => c.classList.remove('active'));
            
            // Add active class to clicked button and corresponding content
            btn.classList.add('active');
            const tabId = btn.getAttribute('data-tab');
            document.getElementById(tabId).classList.add('active');
        });
    });

    // Countdown timer
    function countdown() {
        const countdownDate = new Date('2023-11-18T09:00:00').getTime();
        const now = new Date().getTime();
        const distance = countdownDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        const daysEl = document.getElementById('days');
        const hoursEl = document.getElementById('hours');
        const minutesEl = document.getElementById('minutes');
        const secondsEl = document.getElementById('seconds');
        
        if (daysEl) daysEl.textContent = days.toString().padStart(2, '0');
        if (hoursEl) hoursEl.textContent = hours.toString().padStart(2, '0');
        if (minutesEl) minutesEl.textContent = minutes.toString().padStart(2, '0');
        if (secondsEl) secondsEl.textContent = seconds.toString().padStart(2, '0');
    }
    
    // Initialize countdown
    setInterval(countdown, 1000);
    countdown(); // Initial call

    // Stats counter animation
    const statsSection = document.querySelector('.stats-counter');
    if (statsSection) {
        const statsObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    initStatsCounter();
                    statsObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });
        
        // Check if stats section is already in view
        const rect = statsSection.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
            initStatsCounter();
        } else {
            statsObserver.observe(statsSection);
        }
    }
    
    // Animate other elements when they come into view
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                const count = parseInt(target.getAttribute('data-count'));
                if (!target.classList.contains('animated')) {
                    animateValue(target, 0, count, 2000);
                    target.classList.add('animated');
                }
            }
        });
    }, { threshold: 0.5 });
    
    const stats = document.querySelectorAll('.stat-number');
    if (stats && stats.length > 0) {
        stats.forEach(stat => observer.observe(stat));
    }
});
