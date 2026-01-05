document.addEventListener('DOMContentLoaded', function() {
    // Create loader container
    const loaderContainer = document.createElement('div');
    loaderContainer.className = 'loader-container';
    
    // Create grid background
    const gridBg = document.createElement('div');
    gridBg.className = 'loader-grid';
    
    // Create logo container
    const logoContainer = document.createElement('div');
    logoContainer.className = 'loader-logo-container';
    
    // Create tech circles with additional rings
    const rings = [];
    const ringCount = 3;
    const ringSizes = [360, 260, 160];
    const ringClasses = ['outer', 'middle', 'inner'];
    
    for (let i = 0; i < ringCount; i++) {
        const ring = document.createElement('div');
        ring.className = `tech-circle ${ringClasses[i]}`;
        rings.push(ring);
        logoContainer.appendChild(ring);
        
        // Add small dots to the rings
        if (i < 2) {
            const dotCount = 12 * (i + 1);
            for (let j = 0; j < dotCount; j++) {
                const dot = document.createElement('div');
                dot.className = 'ring-dot';
                const angle = (j / dotCount) * Math.PI * 2;
                const radius = ringSizes[i] / 2;
                dot.style.transform = `rotate(${angle}rad) translate(${radius}px) rotate(${angle}rad)`;
                ring.appendChild(dot);
            }
        }
    }
    
    // Create logo element with loading optimization
    const logo = document.createElement('img');
    logo.src = 'assets/loader.webp';
    logo.alt = 'Noesis Logo';
    logo.className = 'loader-logo';
    logo.loading = 'eager';
    logo.decoding = 'async';
    
    // Create loading text
    const loadingText = document.createElement('div');
    loadingText.className = 'loading-text';
    loadingText.textContent = 'INITIALIZING';
    
    // Create loading bar container and bar
    const loadingBarContainer = document.createElement('div');
    loadingBarContainer.className = 'loading-bar-container';
    const loadingBar = document.createElement('div');
    loadingBar.className = 'loading-bar';
    loadingBarContainer.appendChild(loadingBar);
    
    // Add elements to container
    loaderContainer.appendChild(gridBg);
    logoContainer.appendChild(logo);
    loaderContainer.appendChild(logoContainer);
    loaderContainer.appendChild(loadingText);
    loaderContainer.appendChild(loadingBarContainer);
    
    // Add container to body
    document.body.prepend(loaderContainer);
    
    // Create particle system
    function createParticle() {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        // Slightly larger but fewer particles (2-4px)
        const size = Math.random() * 2 + 2;
        
        // Random position
        const posX = Math.random() * 100;
        const posY = Math.random() * 100;
        
        // Shorter animation duration (5-10s)
        const duration = Math.random() * 5 + 5;
        
        // Set styles
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${posX}%`;
        particle.style.top = `${posY}%`;
        particle.style.animation = `floatParticle ${duration}s linear infinite`;
        particle.style.opacity = Math.random() * 0.6 + 0.1;
        
        // Add to container
        loaderContainer.appendChild(particle);
        
        // Remove after animation
        setTimeout(() => {
            particle.style.opacity = '0';
            setTimeout(() => particle.remove(), 1000);
        }, (duration - 1) * 1000);
    }
    
    // Create binary code animation
    function createBinaryCode() {
        const binaryCode = document.createElement('div');
        binaryCode.className = 'binary-code';
        
        // Generate random binary string with some special characters
        let binaryText = '';
        const chars = '01*#@%&';
        const length = Math.floor(Math.random() * 30) + 20;
        
        for (let i = 0; i < length; i++) {
            binaryText += chars[Math.floor(Math.random() * chars.length)];
            if (i % 5 === 4) binaryText += ' ';
        }
        
        binaryText = binaryText.trim();
        binaryCode.textContent = binaryText;
        
        // Random position and properties
        const posX = Math.random() * 100;
        const posY = Math.random() * 100;
        const size = Math.random() * 0.6 + 0.7;
        const opacity = Math.random() * 0.2 + 0.05;
        const rotation = Math.random() * 360;
        const z = Math.random() * 100 - 50;
        
        // Set styles with transform for better performance
        Object.assign(binaryCode.style, {
            left: `${posX}%`,
            top: `${posY}%`,
            transform: `translateZ(${z}px) rotate(${rotation}deg) scale(${size})`,
            opacity: '0',
            transition: 'all 1s cubic-bezier(0.4, 0, 0.2, 1)'
        });
        
        // Add to container
        loaderContainer.appendChild(binaryCode);
        
        // Trigger reflow
        void binaryCode.offsetWidth;
        
        // Fade in
        binaryCode.style.opacity = opacity.toString();
        
        // Remove after delay
        setTimeout(() => {
            binaryCode.style.opacity = '0';
            setTimeout(() => binaryCode.remove(), 1000);
        }, 5000);
    }
    
    // Create particles and binary codes - reduced for performance
    let lastParticleTime = 0;
    let lastBinaryTime = 0;
    const particleInterval = 300; // Increased from 100ms to 300ms to reduce number of particles
    const binaryInterval = 500; // ms between binary codes
    
    function animate(time) {
        if (!lastParticleTime) lastParticleTime = time;
        if (!lastBinaryTime) lastBinaryTime = time;
        
        // Create particles
        if (time - lastParticleTime > particleInterval) {
            createParticle();
            lastParticleTime = time - (Math.random() * particleInterval * 0.5);
        }
        
        // Create binary codes
        if (time - lastBinaryTime > binaryInterval) {
            createBinaryCode();
            lastBinaryTime = time - (Math.random() * binaryInterval * 0.5);
        }
        
        if (!loaderContainer.classList.contains('hidden')) {
            requestAnimationFrame(animate);
        }
    }
    
    // Start animation loop
    requestAnimationFrame(animate);
    
    // Update loading text with dots animation
    let dotCount = 0;
    const loadingTextInterval = setInterval(() => {
        dotCount = (dotCount + 1) % 4;
        loadingText.textContent = 'INITIALIZING' + '.'.repeat(dotCount);
    }, 500);
    
    // Track load progress
    let resourcesLoaded = 0;
    const totalResources = document.querySelectorAll('img, script, link[rel="stylesheet"]').length;
    
    function updateProgress() {
        resourcesLoaded++;
        const progress = Math.min(resourcesLoaded / totalResources, 0.95); // Cap at 95% until fully loaded
        loadingBar.style.width = `${progress * 100}%`;
    }
    
    // Monitor resource loading
    document.querySelectorAll('img, script, link[rel="stylesheet"]').forEach(el => {
        if (el.complete || el.readyState === 4) {
            updateProgress();
        } else {
            el.addEventListener('load', updateProgress);
            el.addEventListener('error', updateProgress);
        }
    });
    
    // Hide loader when everything is loaded
    window.addEventListener('load', function() {
        // Update progress to 100%
        loadingBar.style.width = '100%';
        
        // Add a small delay for better UX
        setTimeout(function() {
            clearInterval(loadingTextInterval);
            
            // Update loading text
            loadingText.textContent = 'WELCOME';
            loadingText.style.animation = 'none';
            loadingText.style.opacity = '1';
            
            // Add a small delay before hiding
            setTimeout(function() {
                loaderContainer.classList.add('hidden');
                
                // Remove loader from DOM after animation completes
                setTimeout(function() {
                    loaderContainer.style.display = 'none';
                }, 800);
            }, 1000);
        }, 500);
    });
    
    // Fallback in case load event doesn't fire
    setTimeout(function() {
        if (!loaderContainer.classList.contains('hidden')) {
            clearInterval(loadingTextInterval);
            loadingText.textContent = 'WELCOME';
            loadingText.style.animation = 'none';
            loadingText.style.opacity = '1';
            loadingBar.style.width = '100%';
            
            loaderContainer.classList.add('hidden');
            setTimeout(function() {
                loaderContainer.style.display = 'none';
            }, 800);
        }
    }, 8000); // 8 seconds max
    
    // Add CSS for particle animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes floatParticle {
            0% {
                transform: translate(0, 0) rotate(0deg);
                opacity: 0;
            }
            10% {
                opacity: 0.5;
            }
            90% {
                opacity: 0.5;
            }
            100% {
                transform: translate(
                    ${Math.random() * 200 - 100}px, 
                    ${Math.random() * 200 - 100}px
                ) rotate(360deg);
                opacity: 0;
            }
        }
        
        .ring-dot {
            position: absolute;
            width: 6px;
            height: 6px;
            background: var(--accent);
            border-radius: 50%;
            transform-origin: 0 0;
            box-shadow: 0 0 10px var(--accent);
            animation: pulse 2s ease-in-out infinite;
        }
        
        @keyframes pulse {
            0%, 100% { transform: scale(1); opacity: 0.7; }
            50% { transform: scale(1.5); opacity: 1; }
        }
    `;
    document.head.appendChild(style);
});
