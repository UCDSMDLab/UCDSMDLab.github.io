const publications = [
  {
    img: "https://structured-materials-and-dynamics-lab.storage.c2.liara.space/img/p1.png",
    title: "Easy to fabricate 3D metastructure for low‑frequency vibration control",
    text: "In this study, we propose a novel lightweight 3D metastructure design that is easy to fabricate and provides a low-frequency subwavelength bandgap. We replaced conventional struts supporting heavy mass inclusions in typical designs with modified arch beams.",
    authors: "Muhammad Gulzari · Agnieszka Ciochon· John Kennedy",
    doi: "https://dx.doi.org/10.1007/s43452-024-01032-2"
  },
  {
    img: "./img/1-s2.0-S0141029618338549-gr10.jpg",
    title: "Built-up structural steel sections as seismic metamaterials for surface wave attenuation with low frequency wide bandgap",
    text: "The purpose of this work is to investigate the propagation of surface waves through periodically arranged built-up steel section in single and multiple layered soil medium.",
    authors: "Muhammad Gulzari, C.W. Lim, J.N. Reddy",
    doi: "https://doi.org/10.1016/j.engstruct.2019.03.046"
  },
  {
    img: "",
    title: "From Photonic Crystals to Seismic Metamaterials: A Review via Phononic Crystals and Acoustic Metamaterials",
    text: "The present review tends to discuss the historical context, current progresses and possible future outcomes of metamaterials.",
    authors: "Muhammad Gulzari, C.W. Lim",
    doi: "https://doi.org/10.1007/s11831-021-09612-8"
  },
  {
    img: "./img/1-s2.0-S0020740319306617-gr1.jpg",
    title: "Topological edge modeling and localization of protected interface modes in 1D phononic crystals for longitudinal and bending elastic waves",
    text: "This study proposes two types of engineered resonant metabarrier designs for ground born vibration attenuation at subwavelength frequency region.",
    authors: "Muhammad Gulzari, Weijian Zhou, C.W. Lim,",
    doi: "https://doi.org/10.1016/j.ijmecsci.2019.05.020"
  },
   {
    img: "./img/1-s2.0-S2352431620302194-gr8.jpg",
    title: "Lightweight architected lattice phononic crystals with broadband and multiband vibration mitigation characteristics",
    text: "This study proposes a novel architected lattice metamaterial with broadband and multiband bandgap characteristics.",
    authors: "Muhammad Gulzari, C.W. Lim, Jensen T.H. Li, Zhen Zhao,",
    doi: "https://doi.org/10.1016/j.eml.2020.100994"
  },
  {
    img: "",
    title: "Wide Rayleigh waves bandgap engineered metabarriers for ground born vibration attenuation",
    text: "This study proposes two types of engineered resonant metabarrier designs for ground born vibration attenuation at subwavelength frequency region.",
    authors: "Muhammad Gulzari, C.W. Lim, Krzysztof Kamil Żur",
    doi: "https://doi.org/10.1016/j.engstruct.2021.113019"
  },
    {
    img: "",
    title: "Vibration Resonance and Dynamic Characteristics of Pillared Phononic Crystals and Acoustic Metamaterials",
    text: "The purpose of this article is to reproduce and combine different surface resonance phenomena reported in the literature on pillared structures with an insight on historical context, recent developments and future research prospects.",
    authors: "Muhammad Gulzari, C.W. Lim",
    doi: "https://doi.org/10.1016/b978-0-12-822944-6.00068-2"
  },
 
  {
    img: "",
    title: "Valley edge states with opposite chirality in temperature dependent acoustic media",
    text: "We observe that a decrease in wave velocity and density, influenced by changing environmental temperature, shifts the topological valley edge states to lower frequencies.",
    authors: "Muhammad Gulzari, Quan Zhang, Eoin King, Lihong Tong and S K Lai",
    doi: "https://dx.doi.org/10.1088/1361-6463/ad4f9a"
  },   
];

const container_for_pub = document.getElementById("publications");

publications.forEach(pub => {
 const col = document.createElement("div");
col.className = "col-md-6 p-3 d-flex"; // make column a flexbox

col.innerHTML = `
  <div class="card mb-3 col-12 glass-card h-100"> <!-- force equal height -->
    <div class="row g-0 h-100">
      ${pub.img ? `
      <div class="col-sm-3">
        <img src="${pub.img}" class="img-fluid rounded-start w-100 h-100" alt="...">
      </div>
      <div class="col-sm-9 d-flex flex-column">` : `<div class="col-sm-12 d-flex flex-column">`}
        <div class="card-body d-flex flex-column">
          <h5 class="card-title">${pub.title}</h5>
          <p class="card-text text-justify flex-grow-1">${pub.text}</p>
          <p class="card-text">${pub.authors}</p>
          <p class="card-text mt-auto">
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