// contact.js

const contactInfo = {
  title: "Contact the Structural Materials and Dynamics Lab:",
  name: "Dr. Muhammad Gulzari",
  email: "muhammad.gulzari@ucd.ie"
};

function renderContact(containerId = "contact-container") {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = `
    <p class="or-divider mt-5">Contact</p>
    <h4 class="py-4 mt-3 mb-3">${contactInfo.title}</h4>
    <h5>${contactInfo.name}</h5>
    <h5>Email: <a href="mailto:${contactInfo.email}">${contactInfo.email}</a></h5>
  `;
}

runImmediatelyOrOnDOMReady(function () {
  renderContact(); 
});