const publications = [
  {
    img: "https://structured-materials-and-dynamics-lab.storage.c2.liara.space/img/p1.png",
    title: "Easy to fabricate 3D metastructure for low‑frequency vibration control",
    text: "In this study, we propose a novel lightweight 3D metastructure design that is easy to fabricate and provides a low-frequency subwavelength bandgap. We replaced conventional struts supporting heavy mass inclusions in typical designs with modified arch beams.",
    authors: "Muhammad Gulzari · Agnieszka Ciochon· John Kennedy",
    doi: "https://dx.doi.org/10.1007/s43452-024-01032-2"
  },
  {
    img: "https://structured-materials-and-dynamics-lab.storage.c2.liara.space/img/dad4f9af1_hr.jpg",
    title: "Valley edge states with opposite chirality in temperature dependent acoustic media",
    text: "We observe that a decrease in wave velocity and density, influenced by changing environmental temperature, shifts the topological valley edge states to lower frequencies.",
    authors: "Muhammad Gulzari, Quan Zhang, Eoin King, Lihong Tong and S K Lai",
    doi: "https://dx.doi.org/10.1088/1361-6463/ad4f9a"
  },
  {
    img: "",
    title: "Inverse design of a topological phononic beam with interface modes",
    text: "By applying the transfer matrix method, a rigorous analytical model is developed to solve the wave dispersion relation for longitudinal and bending elastic waves. By determining the phase of the reflected wave, the geometric Zak phase is determined.",
    authors: "Muhammad Gulzari · Oluwaseyi Ogun · John Kennedy",
    doi: "https://doi.org/10.1088/1361-6463/ac9ce8"
  },
  {
    img: "",
    title: "Machine learning and deep learning in phononic crystals and metamaterials – A review",
    text: "In this review we evaluate the recent developments and present a state-of-the-art literature survey in machine learning and deep learning based phononic crystals and metamaterial designs by giving historical context.",
    authors: "Muhammad Gulzari . John Kennedy a . C.W. Lim b",
    doi: "https://dx.doi.org/10.1016/j.mtcomm.2022.104606"
  }
];

const container_for_pub = document.getElementById("publications");

publications.forEach(pub => {
  const col = document.createElement("div");
  col.className = "col-md-6 p-3";

  col.innerHTML = `
    <div class="card mb-3 col-12 glass-card">
      <div class="row g-0">
        ${pub.img ? `
        <div class="col-sm-4">
          <img src="${pub.img}" class="img-fluid rounded-start w-100 h-100" alt="...">
        </div>
        <div class="col-sm-8">` : `<div class="col-sm-12">`}
          <div class="card-body">
            <h5 class="card-title">${pub.title}</h5>
            <p class="card-text">${pub.text}</p>
            <p class="card-text">${pub.authors}</p>
            <p class="card-text">
              <small class="text-body-secondary">
                <a href="${pub.doi}" target="_blank"><u>${pub.doi}</u></a>
              </small>
            </p>
          </div>
        </div>
      </div>
    </div>
  `;

  container_for_pub.appendChild(col);
});