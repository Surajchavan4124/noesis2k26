// Function to create coordinator card
function createCoordinatorCard(coordinator) {
  return `
                <div class="coordinator-card">
                    <div class="coordinator-image">
                        <img src="${coordinator.imageUrl}" alt="${coordinator.name}">
                    </div>
                    <div class="coordinator-info">
                        <h3>${coordinator.name}</h3>
                        <p class="coordinator-role">${coordinator.role}</p>
                        <div class="contact-links">
                            <a href="tel:${coordinator.phone_no}" title="Call"><i class="fas fa-phone"></i></a>
                            <a href="mailto:${coordinator.email}" title="Email"><i class="fas fa-envelope"></i></a>
                            <a href="${coordinator.whatsapp}" target="_blank" title="WhatsApp"><i class="fab fa-whatsapp"></i></a>
                        </div>
                    </div>
                </div>
            `;
}

// Load coordinators
document.addEventListener("DOMContentLoaded", function () {
  const facultyContainer = document.getElementById("facultyCoordinators");
  const noesisContainer = document.getElementById("noesisCoordinators");
  const studentContainer = document.getElementById("studentCoordinators");

  // Add faculty coordinators
  facultyCoordinators.forEach((coordinator) => {
    facultyContainer.innerHTML += createCoordinatorCard(coordinator);
  });

  // Add Noesis coordinators
  noesisCoordinators.forEach((coordinator) => {
    noesisContainer.innerHTML += createCoordinatorCard(coordinator);
  });

  // Add student coordinators
  studentCoordinators.forEach((coordinator) => {
    studentContainer.innerHTML += createCoordinatorCard(coordinator);
  });

  // Mobile menu toggle
  const menuToggle = document.getElementById("mobile-menu");
  const navMenu = document.querySelector(".nav-menu");

  menuToggle.addEventListener("click", function () {
    navMenu.classList.toggle("active");
    menuToggle.classList.toggle("active");
  });

  // Close mobile menu when clicking a link
  document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("active");
      menuToggle.classList.remove("active");
    });
  });
});
