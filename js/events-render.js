// ===============================
// MODAL UTILITIES
// ===============================
window.closeModal = function () {
  const modal = document.getElementById("event-detail-modal");
  if (!modal) return;

  modal.classList.remove("active");
  document.body.style.overflow = "auto";
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

    if (Array.isArray(group.subEvents)) {
      const sub = group.subEvents.find(se => se.id === id);
      if (sub) {
        return {
          event: sub,
          isMain: false,
          mainEventId: group.mainEvent.id
        };
      }
    }
  }
  return null;
}

// ===============================
// BACK TO MAIN EVENT
// ===============================
window.backToMainEvent = function (mainEventId) {
  const main = getEventById(mainEventId);
  if (main) openModal(main);
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
      <img src="${eventData.imageUrl}" alt="${title}" class="event-image"
        onerror="this.onerror=null;this.src='https://placehold.co/600x400/1a0a10/D4AF37?text=${title.replace(/[^a-zA-Z0-9]/g, "+")}';">
      <div class="event-overlay"></div>
    </div>

    <div class="event-content">
      <h2 class="event-title">${title}</h2>
      <span class="event-date-venue">
        <i class="fas fa-calendar-alt"></i> ${eventData.date} | ${eventData.venue}
      </span>
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
window.openModal = function (lookup) {
  if (!lookup) return;

  const modal = document.getElementById("event-detail-modal");
  const body = document.getElementById("modal-body-content");

  const { event, isMain, subEvents = [], mainEventId } = lookup;

  const rulesHTML = Array.isArray(event.rules)
    ? event.rules.map(r => `<li>${r}</li>`).join("")
    : "<li>Rules will be announced soon.</li>";

  const backBtn = !isMain
    ? `
      <a href="#" class="modal-back-link"
         onclick="backToMainEvent('${mainEventId}');return false;">
        <i class="fas fa-arrow-left"></i> Back to Main Event
      </a>`
    : "";

  body.innerHTML = `
    ${backBtn}

    <div class="modal-header">
      <h2 class="modal-title">${event.title}</h2>
      <p class="modal-info">
        <i class="fas fa-calendar-alt"></i> ${event.date}
        <span>|</span>
        <i class="fas fa-map-marker-alt"></i> ${event.venue}
      </p>
    </div>

    <div class="modal-main-content">
      <div class="modal-image-container">
        <img src="${event.imageUrl}" alt="${event.title}"
             class="${isMain ? "modal-main-image" : "modal-sub-image"}">
      </div>

      <div class="modal-details">
        <div class="modal-body">

          ${
            isMain
              ? `
                <h3>${event.descriptionTitle}</h3>
                <p>${event.descriptionBody}</p>

                <h3 class="mt-4">Sub Events</h3>
             <div class="sub-event-list prominent">
  ${subEvents.map(sub => `
    <div class="sub-event-item clickable"
         onclick="openModal(getEventById('${sub.id}'))">

      <h4 class="sub-event-title">
        ${sub.cardTitle || sub.title}
      </h4>

      <span class="date">
        <i class="fas fa-calendar-alt"></i> ${sub.date}
      </span>

    </div>
  `).join("")}
</div>

              `
              : `
                <h3>${event.descriptionTitle}</h3>
                <p>${event.descriptionBody}</p>

                <h3 class="mt-4">${event.rulesTitle}</h3>
                <ul>${rulesHTML}</ul>
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
