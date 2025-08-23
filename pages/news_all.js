const cardsData = [
    {
        title: "Invitation to Contribute to new Collection with JoVE",
        image: "./img/slide3.jpg",
        category: "Editorial News",
        categoryLink: "#",
        content: `#GuestEditor Invitation to Contribute
        To date very few journals publish video articles in our field, despite this type of article being of paramount importance for sharing techniques and improving their replicability.
        <br/>
        For this reason, I have opened a Collection with JoVE on “Current Approaches in Modeling, Design, Fabrication, and Experimentation of Phononic Crystals and Acoustic Metamaterials”:
        <br/>
        <a href="https://lnkd.in/eE2VyX6J" target="_blank">https://lnkd.in/eE2VyX6J</a>`,
        date: "01/06/2025",
		link: "news.html?title=Invitation%20to%20contribute%20to%20new%20Collection%20with%20JoVE",
        extraClasses: "hover-text"
    },
    {
        title: "Inspiring the Next Generation of Civil Engineers!",
        image: "./img/slide1.jpg",
        category: null,
        categoryLink: "#",
        content: `We had the pleasure of hosting TY students for "Engineering Your Week," where we introduced them to the exciting world of Civil Engineering!`,
        date: "01/06/2025",
		link: "news.html?title=Inspiring%20the%20Next%20Generation%20of%20Civil%20Engineers",
        extraClasses: ""
    },
    {
        title: "UK Metamaterials Network Acoustic Metamaterial conference",
        image: "./img/slide4.jpg",
        category: null,
        categoryLink: null,
        content: `What an amazing week ending. Just returned from Exeter UK after attending UK Metamaterials Network Acoustic Metamaterial conference.`,
        date: "01/06/2025",
		link: "news.html?title=UK%20Metamaterials%20Network%20Acoustic%20Metamaterial%20conference",
        extraClasses: "text-img-over"
    },
];



function renderCardsSection(cardsData) {
  const wrapper = document.getElementById("newsAllSection");
  if (!wrapper) {
    console.error('Container div with id "newsAllSection" not found.');
    return;
  }

  // Clear existing content (optional)
  wrapper.innerHTML = "";

  // Append divider and focus section
  const divider = document.createElement("p");
  divider.className = "or-divider mt-5";
  divider.textContent = "📰 News";

  const focusSection = document.createElement("section");
  focusSection.id = "focus";
  focusSection.className = "focus-section";

  wrapper.appendChild(divider);
  wrapper.appendChild(focusSection);

  // Create container and row inside focus section
  const container = document.createElement("div");
  container.className = "container-lg py-5";

  const row = document.createElement("div");
  row.className = "row row-cols-1 row-cols-md-3 g-4 justify-content-around";
  row.id = "card-container";

  container.appendChild(row);
  focusSection.appendChild(container);

  // Generate cards
  cardsData.forEach(card => {
    const col = document.createElement("div");
    col.className = "col";

    const hasOverlay = card.extraClasses === "text-img-over";

    col.innerHTML = `
      <div class="card shadow-sm h-100">
        <div class="${card.extraClasses || "card-image"}">
          <img src="${card.image}" style="height:250px;" class="card-img-top" alt="Card image">
          ${hasOverlay
            ? `<div class="overlay"><div class="social-hover"><a href="#"><i class="fas fa-share-alt"></i></a></div></div>`
            : `<div class="image-overlay"></div>`}
        </div>
        <div class="card-body">
          <h4 class="card-title">${card.title}</h4>
          ${card.category ? `
            <div class="text-left my-2">
              <div class="sub-cat text-truncate">
                <span class="badge rounded-pill bg-category text-uppercase">${card.category}</span>
                <a href="${card.categoryLink}">News</a>
              </div>
            </div>` : ""}
          <p class="card-text">${card.content}</p>
        </div>
        <div class="card-footer py-3">
          <div class="card-footer__info">
            <span><i class="far fa-calendar-alt"></i> ${card.date}</span>
            <span class="read-more">
              <a class="text-uppercase float-end read-more-3" href="${card.link}">Read more</a>
            </span>
          </div>
        </div>
      </div>
    `;

    row.appendChild(col);
  });
}




// Parse title from query param
const params = new URLSearchParams(window.location.search);
const newsTitle = params.get("title");

fetch("./pages/news_data.json?ts="+Date.now())
.then(res => res.json())
.then(data => {
	const news = data.find(n => n.title === newsTitle);
	if (!news) {
	  renderCardsSection(cardsData);
	  return;
	}

	const html = `
		<p class="or-divider mt-5">${news.title}</p>
		<div class="mt-2 mb-2" style="position: relative;">
		  <div style="width: 100%;">
			<div class="d-block p-3" style="
			  width: 100%;
			  margin: 0 auto;
			  background: rgb(230 222 207 / 43%);
			  backdrop-filter: blur(2px);
			  -webkit-backdrop-filter: blur(2px);
			  margin-top: calc(0rem);">
			  <p class="card-text" style="color: #1c1e32;">
				<img class="m-3" src="${news.image}" style="float: left; width: 250px; border-radius:1rem">
				<br/>
				${news.content}
			  </p>
			</div>
		  </div>
		</div>`;

	document.getElementById("newsContent").innerHTML = html;
})
.catch(err => {
	console.error(err);
	document.getElementById("newsContent").innerHTML = '<p class="text-danger">Error loading news data.</p>';
});

		  
		  

