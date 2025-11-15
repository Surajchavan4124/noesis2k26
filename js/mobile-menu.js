document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.getElementById('menu-icon');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Toggle mobile menu
    function toggleMenu() {
        menuIcon.classList.toggle('active');
        navMenu.classList.toggle('active');
        document.body.classList.toggle('menu-open');
    }

    // Close mobile menu when clicking outside
    function closeMenuOnClickOutside(e) {
        if (!e.target.closest('.nav-menu') && !e.target.closest('.menu-icon')) {
            menuIcon.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.classList.remove('menu-open');
        }
    }

    // Close mobile menu when clicking a link
    function closeMenuOnLinkClick() {
        if (window.innerWidth <= 992) {
            menuIcon.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.classList.remove('menu-open');
        }
    }

    // Event Listeners
    if (menuIcon && navMenu) {
        // Toggle menu when clicking the menu icon
        menuIcon.addEventListener('click', function(e) {
            e.stopPropagation();
            toggleMenu();
        });

        // Close menu when clicking outside
        document.addEventListener('click', closeMenuOnClickOutside);

        // Close menu when clicking a link
        navLinks.forEach(link => {
            link.addEventListener('click', closeMenuOnLinkClick);
        });

        // Close menu when window is resized to desktop
        window.addEventListener('resize', function() {
            if (window.innerWidth > 992) {
                menuIcon.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.classList.remove('menu-open');
            }
        });
    }
});
