// ===============================
// MODAL UTILITIES
// ===============================
window.closeModal = function () {
  const modal = document.getElementById("event-detail-modal");
  if (!modal) return;

  modal.classList.remove("active");
  document.body.style.overflow = "auto";
  
  // Update modal state and history
  if (isModalOpen) {
    isModalOpen = false;
    if (history.state && history.state.modalOpen) {
      history.back();
    }
  }
};

// ===============================
// EVENT LOOKUP
// ===============================
function getEventById(id) {
  if (!Array.isArray(allEventsData)) return null;

  for (const group of allEventsData) {
    if (group.mainEvent?.id === id) {
      return {
        event: group.mainEvent,
        subEvents: group.subEvents || [],
        isMain: true,
        mainEventId: null
      };
    }
  }
  return null;
}

// ===============================
// ACCORDION TOGGLE (SUB EVENTS)
// ===============================
window.toggleSubEvent = function (id) {
  const body = document.getElementById(`sub-${id}`);
  if (!body) return;

  const header = document.querySelector(`.sub-event-header[data-id="${id}"]`);
  const arrow = header ? header.querySelector('.arrow') : null;
  const allBodies = document.querySelectorAll(".sub-event-body");
  const allArrows = document.querySelectorAll(".sub-event-header .arrow");

  // Close all other accordion items
  allBodies.forEach(b => {
    if (b !== body) {
      b.style.maxHeight = null;
    }
  });

  // Reset all arrows
  allArrows.forEach(a => a.classList.remove("rotate"));

  // Toggle current item
  if (body.style.maxHeight) {
    body.style.maxHeight = null;
    if (arrow) arrow.classList.remove("rotate");
  } else {
    // Set max-height to scrollHeight for smooth transition
    body.style.maxHeight = body.scrollHeight + "px";
    if (arrow) arrow.classList.add("rotate");
    
    // Force a reflow to ensure smooth animation
    void body.offsetHeight;
    
    // Ensure image is properly loaded and displayed
    const img = body.querySelector('img');
    if (img && !img.complete) {
      img.onload = function() {
        body.style.maxHeight = body.scrollHeight + "px";
      };
    }
  }
};

// ===============================
// EVENT CARD (INDEX PAGE)
// ===============================
function createEventCard(eventData) {
  const card = document.createElement("div");
  card.className = "event-card";

  const title = eventData.cardTitle || eventData.title;
  const snippet = eventData.descriptionBody
    ? eventData.descriptionBody.replace(/\n/g, " ").slice(0, 140) + "…"
    : "Explore events under this category.";

  card.innerHTML = `
    <div class="event-image-container">
      <img src="${eventData.imageUrl}" 
           alt="${title}" 
           class="event-image"
           onerror="this.onerror=null;this.src='https://placehold.co/600x400/1a0a10/D4AF37?text=${title.replace(/[^a-zA-Z0-9]/g, "+")}';">
      <div class="event-overlay"></div>
    </div>

    <div class="event-content">
      <h2 class="event-title">${title}</h2>
      <p class="event-description">${snippet}</p>
      <button class="view-details-btn">View Events</button>
    </div>
  `;

  card.querySelector(".view-details-btn").addEventListener("click", () => {
    openModal(getEventById(eventData.id));
  });

  return card;
}

// ===============================
// RENDER MAIN EVENTS
// ===============================
function renderMainEventsOnly() {
  const container = document.getElementById("event-list-container");
  if (!container) return;

  container.innerHTML = "";
  allEventsData.forEach(group => {
    container.appendChild(createEventCard(group.mainEvent));
  });
}

// ===============================
// MODAL OPEN HANDLER
// ===============================
// Track modal state
let isModalOpen = false;

// Handle browser back/forward buttons
window.addEventListener('popstate', (event) => {
  if (isModalOpen) {
    closeModal();
  }
});

window.openModal = function (lookup) {
  if (!lookup) return;

  const modal = document.getElementById("event-detail-modal");
  const modalContent = document.querySelector(".modal-content");
  const body = document.getElementById("modal-body-content");
  
  // Reset scroll position before showing new content
  if (modalContent) {
    modalContent.scrollTop = 0;
  }
  
  // Add history entry when opening modal
  history.pushState({ modalOpen: true }, '');
  isModalOpen = true;
  
  const { event, subEvents = [] } = lookup;

  body.innerHTML = `
    <div class="modal-header">
      <h2 class="modal-title">${event.title}</h2>
    </div>

    <div class="modal-main-content">
      <div class="modal-image-container">
        <img src="${event.imageUrl}" 
             alt="${event.title}" 
             class="modal-main-image">
      </div>

      <div class="modal-details">
        <div class="modal-body">

          <h3>${event.descriptionTitle || "About the Event"}</h3>
          <p>${event.descriptionBody || ""}</p>

          <h3 class="mt-4">Sub Events</h3>

          <div class="sub-event-list accordion">
            ${subEvents.map(sub => `
              <div class="sub-event-accordion">

                <button class="sub-event-header"
                        onclick="toggleSubEvent('${sub.id}')">
                  <div>
                    <h4 class="sub-event-title">
                      ${sub.cardTitle || sub.title}
                    </h4>
                    <span class="date">
                      <i class="fas fa-calendar-alt"></i> ${sub.date} | ${sub.venue}
                  </div>
                  <i class="fas fa-chevron-down arrow"></i>
                </button>

                <div class="sub-event-body" id="sub-${sub.id}">
                  <img src="${sub.imageUrl}" 
                       alt="${sub.title}" 
                       class="sub-event-image">

                  <h5>${sub.descriptionTitle || "About"}</h5>
                  <p>${sub.descriptionBody || ""}</p>

                  <h5 class="mt-3">${sub.rulesTitle || "Rules"}</h5>
                  <ul>
                    ${(sub.rules || []).map(r => `<li>${r}</li>`).join("")}
                  </ul>
                </div>

              </div>
            `).join("")}
          </div>

        </div>
      </div>
    </div>
  `;

  // Reset body scroll position
  body.scrollTop = 0;
  
  // Show modal after a small delay to ensure DOM is ready
  setTimeout(() => {
    modal.classList.add("active");
    document.body.style.overflow = "hidden";
    
    // Ensure smooth scrolling to top
    if (modalContent) {
      modalContent.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  }, 10);
};

// ===============================
// DOM READY
// ===============================
document.addEventListener("DOMContentLoaded", () => {
  const menuIcon = document.getElementById("menu-icon");
  const navMenu = document.getElementById("nav-menu");

  menuIcon?.addEventListener("click", () => {
    navMenu?.classList.toggle("active");
    menuIcon.classList.toggle("open");
  });

  document.querySelectorAll(".nav-link, .nav-btn").forEach(link => {
    link.addEventListener("click", () => {
      navMenu?.classList.remove("active");
      menuIcon?.classList.remove("open");
    });
  });

  const modal = document.getElementById("event-detail-modal");
  modal?.addEventListener("click", e => {
    if (e.target === modal) closeModal();
  });

  renderMainEventsOnly();
});
