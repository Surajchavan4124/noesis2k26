// Global utility to safely close the modal
window.closeModal = function () {
  const modal = document.getElementById("event-detail-modal");
  if (modal) {
    modal.classList.remove("active");
    document.body.style.overflow = "auto"; // Re-enable scrolling
  }
};

/**
 * Helper to find a specific event (main or sub) by ID from the global data structure.
 * Returns {event: data, subEvents: Array, isMain: boolean, mainEventId: string|null}
 */
function getEventById(id) {
  if (typeof allEventsData === "undefined") return null;

  for (const group of allEventsData) {
    // Check Main Event
    if (group.mainEvent.id === id) {
      return {
        event: group.mainEvent,
        subEvents: group.subEvents, // Include sub-events for main events
        isMain: true,
        mainEventId: null,
      };
    }
    // Check Sub Events
    const subEvent = group.subEvents.find((e) => e.id === id);
    if (subEvent) {
      return {
        event: subEvent,
        isMain: false,
        mainEventId: group.mainEvent.id, // Key for the back functionality
      };
    }
  }
  return null;
}

/**
 * Function to return to the parent Main Event modal view.
 */
window.backToMainEvent = function (mainEventId) {
  const mainEventLookup = getEventById(mainEventId);
  if (mainEventLookup && mainEventLookup.isMain) {
    // Re-open the modal with the main event details
    openModal(mainEventLookup);
  } else {
    // Fallback: just close the modal if the main event can't be found
    closeModal();
  }
};

/**
 * Creates the event card element.
 */
function createEventCard(eventData) {
  const card = document.createElement("div");
  card.className = `event-card`;
  card.setAttribute("data-event-id", eventData.id);

  const displayTitle = eventData.cardTitle || eventData.title;

  // Handle description body for card display (optional truncation handled by CSS)
  const descriptionSnippet = eventData.descriptionBody
    ? eventData.descriptionBody.replace(/\\n/g, " ").substring(0, 150) + "..."
    : "A brief description is unavailable.";

  card.innerHTML = `
                <div class="event-image-container">
                    <img src="${
                      eventData.imageUrl
                    }" alt="${displayTitle}" class="event-image" onerror="this.onerror=null;this.src='https://placehold.co/600x400/1a0a10/D4AF37?text=${displayTitle.replace(
    /[^a-zA-Z0-9]/g,
    "+"
  )}&font=Orbitron';">
                    <div class="event-overlay"></div>
                </div>
                <div class="event-content">
                    <div class="event-header">
                        <h2 class="event-title">${displayTitle}</h2>
                        <p class="event-card-subtitle">${
                          eventData.genre || "Tech Event"
                        }</p>
                        <span class="event-date-venue"><i class="fas fa-calendar-alt"></i> ${
                          eventData.date
                        } | ${eventData.stage || eventData.venue}</span>
                    </div>
                    <p class="event-description">${descriptionSnippet}</p>
                    <button class="view-details-btn" data-event-id="${
                      eventData.id
                    }">View Details</button>
                </div>
            `;

  // Attach click listener to the button
  card.querySelector(".view-details-btn").addEventListener("click", (e) => {
    e.stopPropagation();
    const eventId = e.currentTarget.getAttribute("data-event-id");
    const event = getEventById(eventId);
    if (event) {
      openModal(event);
    }
  });

  return card;
}

function renderMainEventsOnly() {
  const eventListContainer = document.getElementById("event-list-container");
  eventListContainer.innerHTML = ""; // Clear previous content

  if (typeof allEventsData === "undefined" || allEventsData.length === 0) {
    eventListContainer.innerHTML =
      '<p style="text-align: center; color: var(--gray-200); grid-column: 1 / -1;">No main events currently listed. Check back soon!</p>';
    return;
  }

  allEventsData.forEach((mainGroup) => {
    eventListContainer.appendChild(createEventCard(mainGroup.mainEvent));
  });
}

// Function to handle the opening of the modal
window.openModal = function (eventLookupResult) {
  // Ensure any currently open modal is closed first
  const modal = document.getElementById("event-detail-modal");
  const modalBodyContent = document.getElementById("modal-body-content");

  const eventData = eventLookupResult.event;
  const isMainEvent = eventLookupResult.isMain;
  const subEvents = eventLookupResult.subEvents || [];

  // Convert array of rules into an HTML list, safely checking if rules exist
  const rulesList =
    eventData.rules && Array.isArray(eventData.rules)
      ? eventData.rules.map((rule) => `<li>${rule}</li>`).join("")
      : "<li>Rules coming soon. Check back later!</li>";

  // Replace all '\n' with <br> for proper paragraph spacing in the modal body
  const descriptionHTML = eventData.descriptionBody
    ? eventData.descriptionBody.replace(/\n/g, "<br>")
    : "No detailed description available.";

  let subEventListHtml = "";
  let backButtonHtml = "";

  if (isMainEvent && subEvents.length > 0) {
    // Generate list of sub-events if this is a main event
    const subEventItems = subEvents
      .map(
        (sub) => `
                    <div class="sub-event-item">
                        <div>
                            <span class="date"><i class="fas fa-clock"></i> ${
                              sub.date
                            }</span>
                            <span class="title">${
                              sub.cardTitle || sub.title
                            } - <span style="color: var(--primary-light);">${
          sub.genre || "Competition"
        }</span></span>
                        </div>
                        <!-- Sub-event button calls openSubEventDetail to open sub-event view -->
                        <button onclick="openSubEventDetail('${
                          sub.id
                        }')">Details</button>
                    </div>
                `
      )
      .join("");

    subEventListHtml = `
                    <h3 class="mt-4">Associated Sub-Events</h3>
                    <div class="sub-event-list">
                        ${subEventItems}
                    </div>
                `;
  } else if (!isMainEvent && eventLookupResult.mainEventId) {
    // If this is a sub-event, display the back button/link
    const mainEvent = getEventById(eventLookupResult.mainEventId);
    const mainEventTitle = mainEvent
      ? mainEvent.event.cardTitle || mainEvent.event.title
      : "Main Event";

    // Back button/link style
    backButtonHtml = `
                    <a href="#" onclick="backToMainEvent('${eventLookupResult.mainEventId}'); return false;" class="modal-back-link flex items-center">
                        <i class="fas fa-arrow-left mr-2"></i> Back to ${mainEventTitle} Overview
                    </a>
                `;
  }

  modalBodyContent.innerHTML = `
                ${backButtonHtml}
                <div class="modal-header">
                    <h2 class="modal-title">${eventData.title}</h2>
                    <p class="modal-info">
                        <i class="fas fa-calendar-alt"></i> ${eventData.date}
                        <span style="margin: 0 10px;">|</span>
                        <i class="fas fa-map-marker-alt"></i> ${
                          eventData.stage || eventData.venue
                        }
                    </p>
                </div>
                
                <div class="modal-main-content">
                    <div class="modal-image-container">
                        <div class="modal-image-frame">
                            <img 
                                src="${eventData.imageUrl}" 
                                alt="${eventData.title} image"
                                class="${
                                  isMainEvent
                                    ? "modal-main-image"
                                    : "modal-sub-image"
                                }"
                            >
                        </div>
                    </div>
                    
                    <div class="modal-details">
                        <div class="modal-body">
                            <h3>${
                              eventData.descriptionTitle || "About the Event"
                            }</h3>
                            <p>${descriptionHTML}</p>

                            <h3>${eventData.rulesTitle || "Rules"}</h3>
                            <ul>
                                ${rulesList}
                            </ul>
                        </div>
                    </div>
                </div>

                ${subEventListHtml}

                <div class="modal-footer" style="margin-top: 2rem; text-align: center;">
                    <a href="./register.html" class="view-details-btn" style="width: auto; display: inline-block;">Register for this Event</a>
                </div>
            `;

  modal.classList.add("active");
  document.body.style.overflow = "hidden"; // Prevent scrolling the main body

  // Scroll to the top of the modal content when opening/reopening
  modalBodyContent.scrollTop = 0;
  modal.scrollTop = 0;
};

// Function to open a sub-event's detail modal (called from inside the main event modal)
window.openSubEventDetail = function (subEventId) {
  const subEvent = getEventById(subEventId);
  if (subEvent) {
    // The lookup result contains the sub-event data and the parent ID,
    // which is used by openModal to render the back button.
    openModal(subEvent);
  }
};

document.addEventListener("DOMContentLoaded", function () {
  // --- Mobile Menu Toggle ---
  const menuIcon = document.getElementById("menu-icon");
  const navMenu = document.getElementById("nav-menu");

  if (menuIcon && navMenu) {
    menuIcon.addEventListener("click", function () {
      navMenu.classList.toggle("active");
      menuIcon.classList.toggle("open");
    });
  }

  // Close mobile menu when clicking a link
  document.querySelectorAll(".nav-link, .nav-btn").forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("active");
      if (menuIcon) menuIcon.classList.remove("open");
    });
  });

  const modal = document.getElementById("event-detail-modal");

  // Close modal when clicking outside the content area
  modal.addEventListener("click", function (e) {
    if (e.target === modal) {
      closeModal();
    }
  });

  // Start the process: render only Main Events
  renderMainEventsOnly();
});
