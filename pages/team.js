// team-data.js

const teamMembers = [
  {
    name: "Dr. Muhammad Gulzari",
    role: "Principal Investigator/Lead manager",
    img: "./img/Muhammad-Photo.JPG",
    link: "https://people.ucd.ie/muhammad.gulzari/about",
  },
  {
    name: "Dr. David Ramirez Solana",
    role: "Postdoctoral Researcher",
    img: "./img/square-David Ramírez Solana.png",
	//grayscale: true,
  },
  {
    name: "Prakhar Parashar",
    role: "Research Assistant",
    img: "./img/unnamed.jpg",
  },
	
  {
    name: "Zeenia Haroon",
    role: "Research Assistant",
    img: "./img/prof.svg",
  },
];

function renderTeam(containerId = "team-container", members = teamMembers) {
  const container = document.getElementById(containerId);
  if (!container) return;

  // Group by rows (first 1, then 2, then 4 in this example)
  const rows = [
    members.slice(0, 1),
    members.slice(1, 4),
    members.slice(4)
  ];

  const html = rows
    .map((group) => {
      return `
      <div class="row justify-content-center">
        ${group
          .map((member) => {
            const grayscale = member.grayscale ? "grayscale" : "";
            const content = `
              <img src="${member.img}" alt="${member.role}" class="team-img ${grayscale}">
              <h5>${member.name}</h5>
              <p class="text-muted">${member.role}</p>
            `;
            return `
              <div class="col-md-3 team-member">
                ${
                  member.link
                    ? `<a href="${member.link}" target="_blank">${content}</a>`
                    : content
                }
              </div>
            `;
          })
          .join("")}
      </div>
      `;
    })
    .join("");

  container.innerHTML = html;
}


runImmediatelyOrOnDOMReady(function () {
  renderTeam(); 
});
