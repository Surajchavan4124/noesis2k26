// Function to update cube with main events
function updateCubeWithEvents() {
    const cube = document.querySelector('.tech-cube');
    if (!cube) return;
    
    // Default events that will be used if allEventsData is not available
    const defaultFaces = [
        { 
            class: 'front',
            title: 'WEB WIZARD',
            imageUrl: 'https://images.unsplash.com/photo-1535378917042-10a22c95931a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
        },
        { 
            class: 'back',
            title: 'CODE CRUSADER',
            imageUrl: 'https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
        },
        { 
            class: 'right',
            title: 'MEDIA CRAFTER',
            imageUrl: 'https://images.unsplash.com/photo-1593508512255-86ab42a8e620?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
        },
        { 
            class: 'left',
            title: 'INNOQUEST',
            imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
        },
        { 
            class: 'top',
            title: 'SWING OF FORTUNE',
            imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
        },
        { 
            class: 'bottom',
            title: 'GAMERS GROOVE',
            imageUrl: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
        }
    ];
    
    let facesToUse = [];
    
    // Use allEventsData if available, otherwise use default events
    if (typeof allEventsData !== 'undefined' && Array.isArray(allEventsData) && allEventsData.length > 0) {
        // Get the first 6 main events (one for each face of the cube)
        facesToUse = allEventsData.slice(0, 6).map((event, index) => ({
            class: defaultFaces[index]?.class || ['front', 'back', 'right', 'left', 'top', 'bottom'][index],
            title: event.mainEvent?.title || defaultFaces[index]?.title || `Event ${index + 1}`,
            imageUrl: event.mainEvent?.imageUrl || defaultFaces[index]?.imageUrl || `https://source.unsplash.com/random/800x600/?tech,${index}`
        }));
    } else {
        // Use default events
        facesToUse = defaultFaces;
    }
    
    // Ensure we have exactly 6 faces
    while (facesToUse.length < 6) {
        const index = facesToUse.length;
        facesToUse.push({
            class: defaultFaces[index]?.class || ['front', 'back', 'right', 'left', 'top', 'bottom'][index],
            title: defaultFaces[index]?.title || `Event ${index + 1}`,
            imageUrl: defaultFaces[index]?.imageUrl || `https://source.unsplash.com/random/800x600/?tech,${index}`
        });
    }
    
    // Create HTML for each face with proper styling
    const facesHTML = facesToUse.map(face => {
        return `
            <div class="face ${face.class}" 
                 style="
                     background-image: url('${face.imageUrl}');
                     background-size: cover;
                     background-position: center;
                     background-repeat: no-repeat;
                 ">
                <span class="event-name">${face.title}</span>
            </div>
        `;
    }).join('');
    
    // Update the cube HTML
    cube.innerHTML = facesHTML;
}

// Initialize cube when DOM is loaded and events are available
function initCube() {
    const cube = document.querySelector('.tech-cube');
    const container = document.querySelector('.tech-cube-container');
    
    if (!cube || !container) {
        console.error('Cube elements not found');
        return;
    }
    
    // Try to update cube with events, but don't fail if events aren't available
    try {
        updateCubeWithEvents();
    } catch (e) {
        console.warn('Could not update cube with events:', e.message);
    }
    
    // Initialize cube rotation state
    let isDragging = false;
    let startX, startY;
    let rotateX = -15;
    let rotateY = -45;
    let targetX = -15;
    let targetY = -45;
    let velocityX = 0;
    let velocityY = 0;
    let isAutoRotating = true;
    let autoRotateTimeout;
    let animationFrameId;
    
    // Enable hardware acceleration and 3D transformations
    cube.style.willChange = 'transform';
    cube.style.transformStyle = 'preserve-3d';
    cube.style.backfaceVisibility = 'hidden';
    cube.style.transform = 'rotateX(-15deg) rotateY(-45deg)';
    cube.style.transition = 'transform 0.1s ease-out';
    
    // Make sure container has proper 3D perspective
    container.style.perspective = '1000px';
    container.style.transformStyle = 'preserve-3d';
    container.style.cursor = 'grab';
    
    // Stop the auto-rotation animation from CSS
    cube.style.animation = 'none';
    
    // Apply initial rotation
    function updateCubeRotation() {
        // Apply smooth rotation
        targetX += (rotateX - targetX) * 0.1;
        targetY += (rotateY - targetY) * 0.1;
        
        // Apply the rotation with smooth transitions
        const transform = `rotateX(${targetX}deg) rotateY(${targetY}deg)`;
        cube.style.transform = transform;
        cube.style.webkitTransform = transform;
    }
    
    // Smooth animation loop using requestAnimationFrame
    function animate(timestamp) {
        if (!isDragging) {
            // Apply inertia
            velocityX *= 0.95;
            velocityY *= 0.95;
            
            // Auto-rotate when not interacting
            if (Math.abs(velocityX) < 0.01 && Math.abs(velocityY) < 0.01) {
                if (isAutoRotating) {
                    // Faster auto-rotation with gentle up-and-down motion
                    const time = timestamp / 1000; // Convert to seconds
                    rotateY += 0.35; // Increased from 0.2 to 0.35 for faster rotation
                    // Add a subtle up-and-down motion (sin wave)
                    rotateX = -15 + Math.sin(time * 0.7) * 5; // Slightly faster up-down motion
                } else {
                    // Apply inertia
                    rotateY -= velocityX * 0.1;
                    rotateX += velocityY * 0.1;
                }
            } else {
                // Apply momentum from user interaction
                rotateY -= velocityX * 0.5;
                rotateX += velocityY * 0.5;
            }
            
            // Limit vertical rotation to prevent flipping
            rotateX = Math.max(-90, Math.min(90, rotateX));
            
            // Reset auto-rotation flag after movement stops
            if (Math.abs(velocityX) > 0.1 || Math.abs(velocityY) > 0.1) {
                isAutoRotating = false;
                clearTimeout(autoRotateTimeout);
                autoRotateTimeout = setTimeout(() => {
                    isAutoRotating = true;
                }, 2000);
            }
        }
        
        updateCubeRotation();
        animationFrameId = requestAnimationFrame(animate);
    }
    
    // Mouse and touch event handlers
    function startDrag(e) {
        isDragging = true;
        startX = e.clientX || (e.touches && e.touches[0].clientX);
        startY = e.clientY || (e.touches && e.touches[0].clientY);
        velocityX = 0;
        velocityY = 0;
        isAutoRotating = false;
        container.style.cursor = 'grabbing';
        
        if (e.cancelable) {
            e.preventDefault();
            e.stopPropagation();
        }
        
        // Use passive: false for touch events to allow preventDefault
        const options = { passive: false };
        document.addEventListener('mousemove', drag, options);
        document.addEventListener('touchmove', drag, options);
        document.addEventListener('mouseup', stopDrag, options);
        document.addEventListener('touchend', stopDrag, options);
        document.addEventListener('mouseleave', stopDrag, options);
    }
    
    function drag(e) {
        if (!isDragging) return;
        
        const x = e.clientX || (e.touches && e.touches[0].clientX);
        const y = e.clientY || (e.touches && e.touches[0].clientY);
        
        if (x === undefined || y === undefined) return;
        
        // Calculate change in position
        const dx = x - startX;
        const dy = y - startY;
        
        // Update rotation based on mouse movement
        rotateY += dx * 0.5;
        rotateX -= dy * 0.5;
        
        // Limit vertical rotation to prevent flipping
        rotateX = Math.max(-90, Math.min(90, rotateX));
        
        // Update velocity for momentum
        velocityX = dx * 0.1;
        velocityY = dy * 0.1;
        
        // Update start position for next move
        startX = x;
        startY = y;
        
        if (e.cancelable) {
            e.preventDefault();
            e.stopPropagation();
        }
    }
    
    function stopDrag() {
        if (!isDragging) return;
        
        isDragging = false;
        container.style.cursor = 'grab';
        
        // Clean up event listeners
        const options = { passive: false };
        document.removeEventListener('mousemove', drag, options);
        document.removeEventListener('touchmove', drag, options);
        document.removeEventListener('mouseup', stopDrag, options);
        document.removeEventListener('touchend', stopDrag, options);
        document.removeEventListener('mouseleave', stopDrag, options);
    }
    
    // Add event listeners
    function addEventListeners() {
        container.addEventListener('mousedown', startDrag, { passive: false });
        container.addEventListener('touchstart', startDrag, { passive: false });
    }
    
    // Initialize
    addEventListeners();
    
    // Start animation loop with timestamp
    let lastTimestamp = 0;
    function startAnimation(timestamp) {
        const deltaTime = timestamp - lastTimestamp;
        lastTimestamp = timestamp;
        
        // Cap delta time to prevent large jumps
        const safeDelta = Math.min(deltaTime, 1000/30); // Cap at 30fps for safety
        
        if (!isDragging && isAutoRotating) {
            // Apply smooth auto-rotation (increased speed)
            const rotationSpeed = 0.25 * (safeDelta / 16.67); // Increased from 0.1 to 0.25 for faster rotation
            rotateY += rotationSpeed;
            
            // Add a subtle up-and-down motion (sin wave)
            const time = timestamp / 1000; // Convert to seconds
            rotateX = -15 + Math.sin(time * 0.5) * 5;
        }
        
        // Apply any pending rotation updates
        updateCubeRotation();
        
        // Continue the animation loop
        animationFrameId = requestAnimationFrame(startAnimation);
    }
    
    // Start the animation loop
    animationFrameId = requestAnimationFrame(startAnimation);
    
    // Cleanup function
    return function cleanup() {
        if (animationFrameId) {
            cancelAnimationFrame(animationFrameId);
            animationFrameId = null;
        }
        clearTimeout(autoRotateTimeout);
        
        // Remove event listeners
        container.removeEventListener('mousedown', startDrag);
        container.removeEventListener('touchstart', startDrag);
        stopDrag(); // Clean up any active drag
    };
}

// Default events in case allEventsData is not available
const defaultEvents = [
    { title: 'Web Wizard', imageUrl: 'https://source.unsplash.com/random/800x600/?web,development' },
    { title: 'Code Crusader', imageUrl: 'https://source.unsplash.com/random/800x600/?coding,programming' },
    { title: 'Media Crafter', imageUrl: 'https://source.unsplash.com/random/800x600/?design,creative' },
    { title: 'InnoQuest', imageUrl: 'https://source.unsplash.com/random/800x600/?innovation,technology' },
    { title: 'Swing of Fortune', imageUrl: 'https://source.unsplash.com/random/800x600/?gaming,game' },
    { title: 'VR/AR', imageUrl: 'https://source.unsplash.com/random/800x600/?vr,ar' }
];

// Wait for DOM to be loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize the cube
    initCube();
});
