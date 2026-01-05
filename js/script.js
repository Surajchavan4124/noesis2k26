document.addEventListener('DOMContentLoaded', function() {
    
    const menuIcon = document.querySelector('.hamburger');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    const navContainer = document.querySelector('.nav-container');


    // Toggle mobile menu
    function toggleMenu() {
        
        // Toggle active class on menu icon
        menuIcon.classList.toggle('active');
        
        // Toggle active class on nav menu
        navMenu.classList.toggle('active');
        
        // Toggle body class to prevent scrolling
        document.body.classList.toggle('menu-open');
        
        // Force reflow/repaint
        void navMenu.offsetWidth;
        
    }

    // Close menu
    function closeMenu() {
        console.log('Closing menu');
        menuIcon.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.classList.remove('menu-open');
    }

    // Initialize menu
    function initMenu() {
        // Add initial classes
        if (navMenu) {
            navMenu.classList.add('nav-menu');
        }
        
        // Add click event to menu icon
        if (menuIcon) {
            menuIcon.addEventListener('click', function(e) {
                e.stopPropagation();
                e.preventDefault();
                toggleMenu();
            });
        } else {
            console.error('Hamburger menu icon not found!');
        }

        // Close menu when clicking on a nav link
        if (navLinks.length > 0) {
            navLinks.forEach(link => {
                link.addEventListener('click', closeMenu);
            });
        }

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (navMenu && navMenu.classList.contains('active') && 
                !e.target.closest('.nav-container') && 
                !e.target.closest('.hamburger')) {
                closeMenu();
            }
        });
    }
    
    // Initialize the menu
    initMenu();
    
    // Expose functions to window for debugging
    window.toggleMenu = toggleMenu;
    window.closeMenu = closeMenu;
});
