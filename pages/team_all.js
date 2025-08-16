// team.js

const teamData = {
  current: {
    head: [
      {
        name: "Dr. Muhammad  Gulzari",
        title: "Principal Investigator",
        img: "./img/Muhammad-Photo.JPG",
        link: "https://people.ucd.ie/muhammad.gulzari/about",
        grayscale: false
      }
    ],
    members: [
      {
        name: "Dr. David Ramirez Solana",
        title: "Postdoctoral Researcher",
        img: "./img/square-David Ramírez Solana.png",
        grayscale: false
      },
      {
        name: "Prakhar Parashar",
        title: "Research Assistant",
        img: "./img/unnamed.jpg",
        grayscale: false
      },
     {
        name: "Zeenia Haroon",
        title: "Research Assistant",
        img: "./img/prof.svg",
        grayscale: false
      },
    ]
  },
  alumni: [
    {
        name: "Fiona O'Toole",
        title: "MSc Student",
        img: "./img/prof.svg",
        grayscale: true
      },
      {
        name: "Jeanne Gasc",
        title: "MSc Student",
        img: "./img/prof.svg",
        grayscale: true
      },
      {
        name: "Supharoek Sornsomrit",
        title: "MSc Student",
        img: "./img/student.png",
        grayscale: true
      }
  ]
};

function createMemberCard(member) {
  const grayscaleClass = member.grayscale ? "grayscale" : "";
  const linkOpen = member.link ? `<a href="${member.link}" target="_blank">` : "";
  const linkClose = member.link ? `</a>` : "";

  return `
    <div class="col-md-3 team-member">
      ${linkOpen}
        <img src="${member.img}" alt="${member.title}" class="team-img ${grayscaleClass}">
        <h5>${member.name}</h5>
      ${linkClose}
      <p class="text-muted">${member.title}</p>
    </div>
  `;
}

function renderTeam(containerId = "team-container") {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = `
    <p class="or-divider mt-5 mb-5">Our Team</p>

    <!-- Head -->
    <div class="row justify-content-center">
      ${teamData.current.head.map(createMemberCard).join("")}
    </div>

    <!-- Other Members -->
    <div class="row justify-content-center">
      ${teamData.current.members.map(createMemberCard).join("")}
    </div>

    <p class="or-divider mt-5">Alumni</p>

    <!-- Alumni -->
    <div class="row justify-content-center">
      ${teamData.alumni.map(createMemberCard).join("")}
    </div>
  `;
}

 runImmediatelyOrOnDOMReady(function () {
  renderTeam(); 
});
