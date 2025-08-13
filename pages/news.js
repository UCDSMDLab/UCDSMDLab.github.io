const newsItems = [
  {
    title: "Invitation to contribute to new Collection with JoVE",
    image: "./img/slide3.jpg",
    description: `#GuestEditor Invitation to Contribute<br/>
    To date very few journals publish video articles in our field, despite this type of article being of paramount importance for sharing techniques and improving their replicability.`,
    link: "news.html?title=Invitation%20to%20contribute%20to%20new%20Collection%20with%20JoVE"
  },
  {
    title: "Inspiring the Next Generation of Civil Engineers!",
    image: "./img/slide1.jpg",
    description: `We had the pleasure of hosting TY students for "Engineering Your Week," where we introduced them to the exciting world of Civil Engineering!`,
    link: "news.html?title=Inspiring%20the%20Next%20Generation%20of%20Civil%20Engineers"
  },
  {
    title: "UK Metamaterials Network Acoustic Metamaterial conference",
    image: "./img/slide4.jpg",
    description: `What an amazing week ending. Just returned from Exeter UK after attending UK Metamaterials Network Acoustic Metamaterial conference.`,
    link: "news.html?title=UK%20Metamaterials%20Network%20Acoustic%20Metamaterial%20conference"
  }
];

const section = document.getElementById("focus");

const container = document.createElement("div");
container.className = "container-lg py-5";

const row = document.createElement("div");
row.className = "row row-cols-1 row-cols-md-3 g-4";

newsItems.forEach(item => {
  const col = document.createElement("div");
  col.className = "col";

  const card = document.createElement("div");
  card.className = "card shadow-sm h-100";

  const cardImage = document.createElement("div");
  cardImage.className = "card-image";
  cardImage.innerHTML = `
    <div class="hover-text">
      <img src="${item.image}" style="height:250px;" class="card-img-top" alt="...">
      <div class="bottom-right-tag text-uppercase"></div>
    </div>
    <div class="image-overlay"></div>
  `;

  const cardBody = document.createElement("div");
  cardBody.className = "card-body";
  cardBody.innerHTML = `
    <h3 class="card-title">${item.title}</h3>
    <p class="card-text"><br/>${item.description}</p>
  `;

  const footer = document.createElement("div");
  footer.className = "card-footer p-3";
  footer.innerHTML = `
    <div class="card-footer__info">
      <span class="float-end">
        <a class="text-uppercase float-end read-more-3" href="${item.link}">Read more</a>
      </span>
    </div>
  `;

  card.appendChild(cardImage);
  card.appendChild(cardBody);
  card.appendChild(footer);

  col.appendChild(card);
  row.appendChild(col);
});

container.appendChild(row);
section.appendChild(container);
