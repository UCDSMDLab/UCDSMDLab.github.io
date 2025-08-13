function renderHeaderMenu(menuItems) {
  const header = document.getElementById("header");

  if (!header) {
    console.warn('Element with id="header" not found.');
    return;
  }

  // Main Header HTML
  const headerContainer = header;
  headerContainer.className = "header p-3";
  headerContainer.innerHTML = `
    <a class="menu-icon" href="javascript:void(0)">
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round"
          stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" />
      </svg>
    </a>
    Structured Materials & Dynamics Lab
  `;

  // Header Menu (for desktop view)
  const headerMenu = document.createElement("div");
  headerMenu.className = "header-menu me-3 d-none d-md-block";

  menuItems.forEach(item => {
    const link = document.createElement("a");
    link.href = item.link;
    link.textContent = item.name;
    headerMenu.appendChild(link);
  });

  headerContainer.appendChild(headerMenu);

  // Overlay Menu HTML
  const overlay = document.createElement("div");
  overlay.className = "overlay glass-card p-3";
  overlay.style.background = "rgb(221 221 221 / 45%)";
  overlay.innerHTML = `
    <div class="button">
      <a class="btn btn-close btn-clc float-end" href="javascript:void(0)"></a>
    </div>
    <div class="menu">
      <ul class="middle" id="overlay-menu"></ul>
      <div class="bottom"></div>
      <div class="menu-back"></div>
      <div class="glass-reflection"></div>
    </div>
  `;
  header.appendChild(overlay);

  // Add overlay menu items
  const overlayMenu = overlay.querySelector("#overlay-menu");
  menuItems.forEach(item => {
    const li = document.createElement("li");
    li.tabIndex = 0;
    const link = document.createElement("a");
    link.href = item.link;
    link.textContent = item.name;
    li.appendChild(link);
    overlayMenu.appendChild(li);
  });
}

const menuItems = [
  { name: "Home", link: "index.html" },
  { name: "Team", link: "team.html" },
  { name: "Vacancies & Grants", link: "vag.html" },
  { name: "Publications", link: "publications.html" },
  { name: "News", link: "news.html" },
  { name: "Contact", link: "contact.html" }
];

 runImmediatelyOrOnDOMReady(function () {
    renderHeaderMenu(menuItems)
});