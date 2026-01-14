document.addEventListener("DOMContentLoaded", function () {
  const timeline = document.getElementById("timeline");
  const timelineView = document.getElementById("timelineView");
  const tableView = document.getElementById("tableView");
  const timelineViewBtn = document.getElementById("timelineViewBtn");
  const tableViewBtn = document.getElementById("tableViewBtn");
  const noEventsMessage = document.getElementById("noEvents");
  const scheduleTableBody = document.getElementById("scheduleTableBody");
  let currentDate = "23"; // Default to January 23rd

  // Function to check if an event occurs on the selected date
  function isEventOnDate(event, day) {
    // Check main event date
    if (event.mainEvent.date.includes(day)) {
      return true;
    }
    
    // Check sub-events dates
    if (event.subEvents && event.subEvents.length > 0) {
      return event.subEvents.some(subEvent => subEvent.date.includes(day));
    }
    
    return false;
  }

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
      if (isEventOnDate(event, day)) {
        const eventCopy = JSON.parse(JSON.stringify(event));
        
        // Filter sub-events for the selected date if they exist
        if (eventCopy.subEvents && eventCopy.subEvents.length > 0) {
          eventCopy.subEvents = eventCopy.subEvents.filter(subEvent => 
            subEvent.date.includes(day)
          );
        }
        
        filteredEvents.push(eventCopy);
      }
    });

    // Sort events by time (extract time from date string if available)
    filteredEvents.sort((a, b) => {
      const getTime = (event) => {
        const timeMatch = event.mainEvent.date.match(/\d{1,2}:\d{2}\s*[AP]M/);
        return timeMatch ? new Date('1970/01/01 ' + timeMatch[0]) : 0;
      };
      return getTime(a) - getTime(b);
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
          subEventsHTML += `
            <div class="sub-event">
              <div class="time">
                <i class="far fa-clock"></i>
                ${subEvent.date}
                <span class="venue" style="margin-left: 10px;">
                  <i class="fas fa-map-marker-alt" style="margin-right: 5px;"></i>
                  ${subEvent.venue || (Array.isArray(subEvent.rules) ? subEvent.rules[0] : "TBD")}
                </span>
              </div>
              <h4>${subEvent.title || subEvent.cardTitle || 'Event'}</h4>
              <p>${subEvent.descriptionBody ? subEvent.descriptionBody.split('\n')[0] : ''}</p>
            </div>
          `;
        });
        subEventsHTML += "</div>";
      }

      // Format main event date to show only time for specific events
      let displayDate = event.mainEvent.date;
      const specialEvents = ['Registration', 'Inaugral', 'Inaugural', 'Refreshment', 'Lunch', 'Valedictory'];
      
      // Check if this is a special event
      if (specialEvents.some(evt => event.mainEvent.title.includes(evt))) {
        // First try to get time from time property if it exists
        if (event.mainEvent.time) {
          displayDate = event.mainEvent.time;
        } else {
          // Fallback to extracting time from date string
          const timeMatch = event.mainEvent.date.match(/(\d{1,2}:\d{2}\s*[AP]M)/i);
          if (timeMatch) {
            displayDate = timeMatch[1];
          }
        }
      }

      // Main event HTML
      mainEventItem.innerHTML = `
        <div class="timeline-content">
          <div class="timeline-date">
            ${displayDate}
            <span class="venue" style="margin-left: 15px;">
              <i class="fas fa-map-marker-alt" style="margin-right: 5px;"></i>
              ${event.mainEvent.venue || "TBA"}
            </span>
          </div>
          <h3 class="timeline-title">${event.mainEvent.title}</h3>
          <p class="timeline-description">${event.mainEvent.descriptionBody || ''}</p>
          ${subEventsHTML}
        </div>
      `;

      timeline.appendChild(mainEventItem);
    });
  }

  // Function to render table view
  function renderTableView(events, day) {
    scheduleTableBody.innerHTML = ""; // Clear existing rows

    if (events.length === 0) {
      scheduleTableBody.innerHTML = `
        <tr>
          <td colspan="3" style="text-align: center; padding: 2rem;">
            No events scheduled for this date
          </td>
        </tr>`;
      return;
    }

    // Helper function to format the date and time display
    const formatDateTime = (dateStr, eventData = {}) => {
      const specialEvents = ['Registration', 'Inaugral', 'Inaugural', 'Refreshment', 'Lunch', 'Valedictory'];
      const isSpecialEvent = specialEvents.some(evt => eventData.title?.includes(evt));
      
      // For special events, use time property if it exists
      if (isSpecialEvent && eventData.time) {
        return eventData.time;
      }
      
      // Check for time range in the date string (e.g., "09:00 AM - 10:00 AM")
      const timeRangeMatch = dateStr.match(/(\d{1,2}:\d{2}\s*[AP]M)\s*-\s*(\d{1,2}:\d{2}\s*[AP]M)/i);
      if (timeRangeMatch) {
        return `${timeRangeMatch[1]} - ${timeRangeMatch[2]}`;
      }
      
      // Check for single time in the date string (e.g., "09:00 AM")
      const timeMatch = dateStr.match(/(\d{1,2}:\d{2}\s*[AP]M)/i);
      if (timeMatch) {
        return timeMatch[0];
      }
      
      // Default to the original date string if no time patterns matched
      return dateStr;
    };

    events.forEach((event) => {
      // Check if the event has sub-events
      const hasSubEvents = event.subEvents && event.subEvents.length > 0;
      
      // Only show main event if it has no sub-events
      if (!hasSubEvents) {
        const mainEventRow = document.createElement("tr");
        mainEventRow.className = "main-event-row";
        mainEventRow.innerHTML = `
          <td class="event-time">${formatDateTime(event.mainEvent.date, event.mainEvent)}</td>
          <td><span class="event-main">${event.mainEvent.title}</span></td>
          <td class="event-venue">${event.mainEvent.venue || "TBA"}</td>
        `;
        scheduleTableBody.appendChild(mainEventRow);
      } else {
        // Only show sub-events for events that have them
        event.subEvents.forEach((subEvent) => {
          const subEventRow = document.createElement("tr");
          subEventRow.className = "sub-event-row";
          subEventRow.innerHTML = `
            <td class="event-time">${formatDateTime(subEvent.date, subEvent)}</td>
            <td><span class="event-sub">${subEvent.title || subEvent.cardTitle || 'Event'}</span></td>
            <td class="event-venue">${subEvent.venue || (Array.isArray(subEvent.rules) ? subEvent.rules[0] : "TBA")}</td>
          `;
          scheduleTableBody.appendChild(subEventRow);
        });
      }
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
