// ===============================
// MODAL UTILITIES
// ===============================
window.closeModal = function () {
  const modal = document.getElementById("event-detail-modal");
  if (modal) {
    modal.classList.remove("active");
    document.body.style.overflow = "auto";
  }
};

// ===============================
// EVENT LOOKUP
// ===============================
function getEventById(id) {
  if (typeof allEventsData === "undefined") return null;

  for (const group of allEventsData) {
    if (group.mainEvent.id === id) {
      return {
        event: group.mainEvent,
        subEvents: group.subEvents,
        isMain: true,
        mainEventId: null,
      };
    }

    const sub = group.subEvents.find((e) => e.id === id);
    if (sub) {
      return {
        event: sub,
        isMain: false,
        mainEventId: group.mainEvent.id,
      };
    }
  }
  return null;
}

// ===============================
// BACK TO MAIN EVENT
// ===============================
window.backToMainEvent = function (mainEventId) {
  const main = getEventById(mainEventId);
  if (main && main.isMain) {
    openModal(main);
  } else {
    closeModal();
  }
};

// ===============================
// EVENT CARD CREATION
// ===============================
function createEventCard(eventData) {
  const card = document.createElement("div");
  card.className = "event-card";

  const title = eventData.cardTitle || eventData.title;

  const snippet = eventData.descriptionBody
    ? eventData.descriptionBody.replace(/\n/g, " ").substring(0, 140) + "..."
    : "Explore challenges under this event category.";

  card.innerHTML = `
    <div class="event-image-container">
      <img 
        src="${eventData.imageUrl}" 
        alt="${title}" 
        class="event-image"
        onerror="this.onerror=null;this.src='https://placehold.co/600x400/1a0a10/D4AF37?text=${title.replace(/[^a-zA-Z0-9]/g, "+")}&font=Orbitron';"
      >
      <div class="event-overlay"></div>
    </div>

    <div class="event-content">
      <h2 class="event-title">${title}</h2>
      <p class="event-card-subtitle">${eventData.genre || "Tech Event"}</p>
      <span class="event-date-venue">
        <i class="fas fa-calendar-alt"></i> ${eventData.date} | ${eventData.stage || eventData.venue}
      </span>
      <p class="event-description">${snippet}</p>
      <button class="view-details-btn">View Details</button>
    </div>
  `;

  card.querySelector(".view-details-btn").addEventListener("click", () => {
    const event = getEventById(eventData.id);
    if (event) openModal(event);
  });

  return card;
}

// ===============================
// RENDER MAIN EVENTS ONLY
// ===============================
function renderMainEventsOnly() {
  const container = document.getElementById("event-list-container");
  container.innerHTML = "";

  if (!allEventsData || !allEventsData.length) {
    container.innerHTML =
      `<p style="grid-column:1/-1;text-align:center;">No events available.</p>`;
    return;
  }

  allEventsData.forEach((group) => {
    container.appendChild(createEventCard(group.mainEvent));
  });
}

// ===============================
// MODAL OPEN HANDLER
// ===============================
window.openModal = function (lookup) {
  const modal = document.getElementById("event-detail-modal");
  const body = document.getElementById("modal-body-content");

  const { event, isMain, subEvents = [], mainEventId } = lookup;

  const rulesList =
    event.rules && Array.isArray(event.rules)
      ? event.rules.map((r) => `<li>${r}</li>`).join("")
      : "<li>Rules will be announced soon.</li>";

  let backButton = "";
  if (!isMain && mainEventId) {
    const parent = getEventById(mainEventId);
    backButton = `
      <a href="#" onclick="backToMainEvent('${mainEventId}');return false;" class="modal-back-link">
        <i class="fas fa-arrow-left"></i> Back to ${parent?.event?.title || "Main Event"}
      </a>
    `;
  }

  body.innerHTML = `
    ${backButton}

    <div class="modal-header">
      <h2 class="modal-title">${event.title}</h2>
      <p class="modal-info">
        <i class="fas fa-calendar-alt"></i> ${event.date}
        <span>|</span>
        <i class="fas fa-map-marker-alt"></i> ${event.stage || event.venue}
      </p>
    </div>

    <div class="modal-main-content">
      <div class="modal-image-container">
        <img 
          src="${event.imageUrl}" 
          class="${isMain ? "modal-main-image" : "modal-sub-image"}"
          alt="${event.title}"
        >
      </div>

      <div class="modal-details">
        <div class="modal-body">

          ${
            isMain
              ? `
                <h3>Associated Sub-Events</h3>
                <div class="sub-event-list prominent">
                  ${subEvents
                    .map(
                      (sub) => `
                      <div class="sub-event-item large">
                        <div>
                          <span class="date">
                            <i class="fas fa-calendar-alt"></i> ${sub.date}
                          </span>
                          <h4>
                            ${sub.cardTitle || sub.title}
                            <span class="tag">${sub.genre || "Competition"}</span>
                          </h4>
                        </div>
                      </div>
                    `
                    )
                    .join("")}
                </div>
              `
              : `
                <h3>${event.descriptionTitle || "About the Event"}</h3>
                <p>${event.descriptionBody?.replace(/\n/g, "<br>") || "Details coming soon."}</p>

                <h3>${event.rulesTitle || "Rules"}</h3>
                <ul>${rulesList}</ul>
              `
          }

        </div>
      </div>
    </div>
  `;

  modal.classList.add("active");
  document.body.style.overflow = "hidden";
  body.scrollTop = 0;
};

// ===============================
// DOM READY
// ===============================
document.addEventListener("DOMContentLoaded", () => {
  const menuIcon = document.getElementById("menu-icon");
  const navMenu = document.getElementById("nav-menu");

  if (menuIcon && navMenu) {
    menuIcon.addEventListener("click", () => {
      navMenu.classList.toggle("active");
      menuIcon.classList.toggle("open");
    });
  }

  document.querySelectorAll(".nav-link, .nav-btn").forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("active");
      menuIcon?.classList.remove("open");
    });
  });

  const modal = document.getElementById("event-detail-modal");
  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });

  renderMainEventsOnly();
});
