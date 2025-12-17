document.addEventListener("DOMContentLoaded", function () {
  const timeline = document.getElementById("timeline");
  const timelineView = document.getElementById("timelineView");
  const tableView = document.getElementById("tableView");
  const timelineViewBtn = document.getElementById("timelineViewBtn");
  const tableViewBtn = document.getElementById("tableViewBtn");
  const noEventsMessage = document.getElementById("noEvents");
  const scheduleTableBody = document.getElementById("scheduleTableBody");
  let currentDate = "23"; // Default to January 23th

  // Function to filter events by date
  function filterEventsByDate(day) {
    currentDate = day;
    const filteredEvents = [];
    const timelineItems = document.querySelectorAll(".timeline-item");

    // Remove all current timeline items and table rows
    timelineItems.forEach((item) => item.remove());
    scheduleTableBody.innerHTML = "";

    // Filter events for the selected date
    allEventsData.forEach((event) => {
      const eventHasDate = event.subEvents.some((subEvent) =>
        subEvent.date.includes(day)
      );
      if (eventHasDate) {
        const eventWithFilteredSubEvents = {
          ...event,
          subEvents: event.subEvents.filter((subEvent) =>
            subEvent.date.includes(day)
          ),
        };
        filteredEvents.push(eventWithFilteredSubEvents);
      }
    });

    // Show no events message if no events for the selected date
    if (filteredEvents.length === 0) {
      noEventsMessage.style.display = "block";
      timeline.style.display = "none";
      scheduleTableBody.innerHTML =
        '<tr><td colspan="3" style="text-align: center; padding: 2rem;">No events scheduled for this date</td></tr>';
    } else {
      noEventsMessage.style.display = "none";
      timeline.style.display = "block";

      // Render both timeline and table views
      renderTimelineView(filteredEvents, day);
      renderTableView(filteredEvents, day);
    }
  }

  // Function to render timeline view
  function renderTimelineView(events, day) {
    events.forEach((event, index) => {
      const isLeft = index % 2 === 0;
      const positionClass = isLeft ? "left" : "right";

      // Create main event item
      const mainEventItem = document.createElement("div");
      mainEventItem.className = `timeline-item main-event ${positionClass}`;

      // Format sub-events for the selected date
      let subEventsHTML = "";
      if (event.subEvents && event.subEvents.length > 0) {
        subEventsHTML = '<div class="sub-events">';
        event.subEvents.forEach((subEvent) => {
          if (subEvent.date.includes(day)) {
            subEventsHTML += `
                                    <div class="sub-event">
                                        <div class="time">
                                            <i class="far fa-clock"></i>
                                            ${subEvent.date}
                                            <span class="venue" style="margin-left: 10px;">
                                                <i class="fas fa-map-marker-alt" style="margin-right: 5px;"></i>
                                                ${
                                                  subEvent.venue ||
                                                  (subEvent.rules
                                                    ? subEvent.rules[0]
                                                    : "TBD")
                                                }
                                            </span>
                                        </div>
                                        <h4>${subEvent.title}</h4>
                                        <p>${
                                          subEvent.descriptionBody.split(
                                            "\n"
                                          )[0]
                                        }</p>
                                    </div>
                                `;
          }
        });
        subEventsHTML += "</div>";
      }

      // Main event HTML
      mainEventItem.innerHTML = `
                        <div class="timeline-content">
                            <div class="timeline-date">${event.mainEvent.date}
                                <span class="venue" style="margin-left: 15px;">
                                    <i class="fas fa-map-marker-alt" style="margin-right: 5px;"></i>
                                    ${event.mainEvent.venue || "Main Venue"}
                                </span>
                            </div>
                            <h3 class="timeline-title">${
                              event.mainEvent.title
                            }</h3>
                            <p class="timeline-description">${
                              event.mainEvent.descriptionBody
                            }</p>
                            ${subEventsHTML}
                        </div>
                    `;

      timeline.appendChild(mainEventItem);
    });
  }

  // Function to render table view
  function renderTableView(events, day) {
    scheduleTableBody.innerHTML = ""; // Clear existing rows

    events.forEach((event) => {
      // Add main event row
      const mainEventRow = document.createElement("tr");
      mainEventRow.className = "main-event-row";

      // Get the first sub-event's time for the main event row
      const firstSubEvent = event.mainEvent;
      const eventTime = firstSubEvent ? firstSubEvent.date : "TBD";

      mainEventRow.innerHTML = `
                        <td class="event-time">${eventTime}</td>
                        <td>
                            <span class="event-main">${
                              event.mainEvent.title
                            }</span>
                        </td>
                        <td class="event-venue">${
                          event.mainEvent.venue || "Main Venue"
                        }</td>
                    `;

      scheduleTableBody.appendChild(mainEventRow);

      // Add sub-events
      event.subEvents.forEach((subEvent) => {
        const subEventRow = document.createElement("tr");
        subEventRow.className = "sub-event-row";

        subEventRow.innerHTML = `
                            <td class="event-time">${subEvent.date}</td>
                            <td>
                                <span class="event-sub">${subEvent.title}</span>
                            </td>
                            <td class="event-venue">${
                              subEvent.venue ||
                              (subEvent.rules ? subEvent.rules[0] : "TBD")
                            }</td>
                        `;

        scheduleTableBody.appendChild(subEventRow);
      });
    });
  }

  // Initialize with January 23th events by default
  filterEventsByDate(currentDate);

  // Add click event listeners to date buttons
  const dateButtons = document.querySelectorAll(".date-btn");
  dateButtons.forEach((button) => {
    button.addEventListener("click", function () {
      // Remove active class from all buttons
      dateButtons.forEach((btn) => btn.classList.remove("active"));
      // Add active class to clicked button
      this.classList.add("active");
      // Filter events for selected date
      const selectedDate = this.getAttribute("data-date");
      filterEventsByDate(selectedDate);
    });
  });

  // Add click event listeners to view toggle buttons
  timelineViewBtn.addEventListener("click", function () {
    if (!this.classList.contains("active")) {
      this.classList.add("active");
      tableViewBtn.classList.remove("active");
      timelineView.style.display = "block";
      tableView.style.display = "none";
    }
  });

  tableViewBtn.addEventListener("click", function () {
    if (!this.classList.contains("active")) {
      this.classList.add("active");
      timelineViewBtn.classList.remove("active");
      timelineView.style.display = "none";
      tableView.style.display = "block";
    }
  });
});
