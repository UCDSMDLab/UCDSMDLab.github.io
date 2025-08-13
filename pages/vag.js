const dynamicContent = document.getElementById("dynamic-content");

// Fellowship Cards Data
const fellowshipCards = [
  {
    title: "Research Ireland Enterprise Partnership Postdoctoral Fellowship",
    deadline: "15 July 2025",
    description:
      "We are seeking a highly motivated Postdoctoral Researcher with expertise in: Modelling, design, and experimentation of vibration control panels, Structural dynamics and mechanical vibration isolation/control, Applied mechanics",
    instruction:
      "Send a Expression of Interest (EoI) + CV (including publications) to muhammad.gulzari@ucd.ie by 1 June 2025 with the subject: \"Research Ireland Enterprise Fellowship\"."
  },
  {
    title: "Marie Skłodowska-Curie (MSCA) Postdoctoral Fellowship",
    deadline: "10 September 2025",
    description:
      "If your research aligns with my work in:\nPhononic crystals & acoustic metamaterials, Topological mechanics/acoustics, Metamaterials for vibration/noise control\nI’d be happy to support your application, assist with proposal writing, and host you in my group.",
    instruction:
      "Email a cover letter (highlighting your motivation and research ideas) + CV to muhammad.gulzari@ucd.ie with the subject: \"MSCA Postdoc Fellowship\"."
  },
  {
    title: "Chinese Scholarship Council (CSC) Scholarship for PhD studies",
    deadline: "January 31st 2025",
    description:
      "UCD and the China Scholarship Council (CSC) signed a Memorandum of Understanding in 2007, renewed in 2011, for the purposes of providing high-quality research training to qualified Chinese students from Chinese universities/research institutions. This is an exciting opportunity for Chinese students to benefit from studying in one of Europe’s leading research-driven universities.",
    instruction:
      "Check www.ucd.ie/apply also Email Cv + a cover letter to muhammad.gulzari@ucd.ie"
  }
  
  
];

// Future Programs Data
const futurePrograms = [

  {
    title: "Chinese Scholarship Council (CSC) Scholarship for PhD studies",
    open: "First week of October",
    close: "Second week of December",
    eoi: "Via email during October–December"
  },
  
  {
    title: "Visiting PhD/Postdoc Researcher",
    open: "January",
    close: "December",
    eoi: "If you're interested to join our lab as a visiting researcher, submit your Expression of Interest via email"
  },
  {
    title: "Irish Research Council Postgraduate Scholarship",
    open: "First week of September",
    close: "Second week of October",
    eoi: "Via email during April–May"
  },
  {
    title: "Irish Research Council Government of Ireland Postdoctoral Fellowship",
    open: "First week of September",
    close: "Second week of October",
    eoi: "Via email during April–May"
  },
  {
    title: "Marie-Curie Postdoctoral Fellowship",
    open: "May",
    close: "First week of September",
    eoi: "Via email during March–April"
  },
  {
    title: "SEAI Academic Fellowship for Postdoctoral Researchers",
    open: "February",
    close: "May",
    eoi: "Via email during January–February"
  }
];

// Grants
const grants = [
    {
      title: "TimberFlow: Enhancing Efficiency in Mass Timber Construction Through Innovative Design Practices and Capacity Building",
      agency: "Enterprise Ireland (EI)",
      text: "This project endeavors to enhance the efficiency of Mass Timber (MT) construction by comprehensively reviewing its design workflow for a case study project with G-frame, encompassing the design process, drawings, connection details, and associated costs.",
      url: "https://constructinnovate.ie/2024/02/construct-innovate-announce-18-projects-awarded-seed-funding/"
    },
    {
      title: "Advancing Indoor Acoustic Quality Through Innovative Acoustic Metamaterial Solutions",
      agency: "Enterprise Ireland (EI)",
      text: "This project aims to perform a feasibility study to investigate the effectiveness of using artificially engineered acoustic metamaterials to improve the indoor acoustics of the built environment. Together with the enterprise partner, Amplitude Acoustics, we will investigate the indoor acoustic problems in Irish dwellings and address these issues.",
      url: "https://constructinnovate.ie/2024/02/construct-innovate-announce-18-projects-awarded-seed-funding/"
    },
    {
      title: "RUBBERPAVE: Integration of ELTs Produced Crumb Rubber in Pavement Construction for Enhanced Performance",
      agency: "Enterprise Ireland (EI)",
      text: "Every year, millions of end-of-life tires (ELTs) pose a significant environmental challenge worldwide. To address these challenges, contribute into green circular economyand promote sustainable development, this project focuses on integrating ELTs produced crumb rubber into pavement construction.",
      url: "https://constructinnovate.ie/2024/07/seed-fund/"
    },
    {
      title: "The application of Deep Learning Methods for breakthrough noise and vibration control using Metamaterials",
      agency: "Irish Research Council for Science, Engineering and Technology",
      text: "The impact of the manufacturing will be assessed to identify issues which lead to degraded performance of the acoustic metamaterial. This information will then be included in a second training phase of the deep learning networks allowing the networks to produce designs which have been optimized for practical manufacture.",
      url: "https://constructinnovate.ie/2024/02/construct-innovate-announce-18-projects-awarded-seed-funding/"
    }
  ];


 runImmediatelyOrOnDOMReady(function () {

	const fellowshipSection = `
	<div class="">
	 <p class="or-divider mt-5 mb-5">Vacancies</p>
	  <div class="row row-cols-1 row-cols-md-3 g-4 justify-content-around" id="card-container">
		${fellowshipCards.map(card => `
		  <div class="col">
			<div class="card h-100 glass-card bg-light">
			  <div class="card-body">
				<h5 class="card-title">${card.title}</h5>
				<p class="text-muted"><small>Deadline: ${card.deadline}</small></p>
				<p class="card-text">${card.description.replace(/\n/g, "<br>")}</p>
			  </div>
			  <div class="card-footer">
					<a href="#" class="btn btn-primary apply-btn float-end"
					  data-bs-toggle="modal" 
					  data-bs-target="#applyModal" 
					  data-attr-text='${card.instruction.replace(/'/g, "&apos;")}'
					>Apply</a>
				</div>
			</div>
		  </div>
		`).join("")}
	  </div>

	<p class="or-divider mt-5 mb-5">Future Programs</p>
	  <div class="p-3 g-4">
		<div class="row g-4">
		  ${futurePrograms.map((item, index) => `
			<div class="  col-md-6   ">
				<div class="card h-100 glass-card">
					<div class="  card-body ">
						<h5 class="mb-2">${item.title}</h5>
						<p class="mb-1"><strong>Open:</strong> ${item.open} &nbsp; | &nbsp; <strong>Close:</strong> ${item.close}</p>
					</div>
					<div class="card-footer">
						<p class="text-muted mb-0"><strong>Expression of Interest:</strong> ${item.eoi}</p>
					</div>
				</div>
			</div>
		  `).join("")}
		</div>
	  </div>
	</div>
	`;

	dynamicContent.innerHTML = fellowshipSection;

	// Modal behavior
	document.addEventListener("click", function (e) {
	  if (e.target.classList.contains("apply-btn")) {
		const text = e.target.getAttribute("data-attr-text");
		document.getElementById("applyModalBody").textContent = text;
	  }
	});


  const section = document.getElementById('grantsSection');
  section.innerHTML = `<p class="or-divider mt-5 mb-5">Grants</p>`;
  // Section Title

  // Cards Container
  const row = document.createElement('div');
  row.className = 'row row-cols-1 row-cols-md-3 g-4';

  grants.forEach(grant => {
    const col = document.createElement('div');
    col.className = 'col';

    const card = document.createElement('div');
    card.className = 'card h-100 glass-card bg-light';

    const cardBody = document.createElement('div');
    cardBody.className = 'card-body';

    const cardTitle = document.createElement('h5');
    cardTitle.className = 'card-title';
    cardTitle.textContent = grant.title;

    const agency = document.createElement('p');
    agency.className = 'text-muted';
    agency.innerHTML = `<small>${grant.agency}</small>`;

    const cardText = document.createElement('p');
    cardText.className = 'card-text';
    cardText.textContent = grant.text;

    cardBody.appendChild(cardTitle);
    cardBody.appendChild(agency);
    cardBody.appendChild(cardText);

    const footer = document.createElement('div');
    footer.className = 'cart-footer p-3';

    const link = document.createElement('a');
    link.href = '#';
    link.className = 'btn btn-link see-more-link';
    link.setAttribute('data-bs-toggle', 'modal');
    link.setAttribute('data-bs-target', '#grantModal');
    link.setAttribute('data-title', grant.title);
    link.setAttribute('data-text', grant.text);
    link.setAttribute('data-url', grant.url);
    link.textContent = 'See More';

    footer.appendChild(link);
    card.appendChild(cardBody);
    card.appendChild(footer);
    col.appendChild(card);
    row.appendChild(col);
  });

  section.appendChild(row);

  // Modal Template
  const modalHTML = `
    <div class="modal fade" id="grantModal" tabindex="-1" aria-labelledby="grantModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="grantModalLabel">Grant Title</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body" id="grantModalBody">...</div>
          <div class="modal-footer">
            <a href="#" target="_blank" id="grantModalLink" class="btn btn-primary">Proceed to Grant Page</a>
          </div>
        </div>
      </div>
    </div>
  `;

  const modalWrapper = document.createElement('div');
  modalWrapper.innerHTML = modalHTML;
  section.appendChild(modalWrapper);

  // Modal interaction logic
  document.addEventListener('click', function (e) {
    const target = e.target.closest('.see-more-link');
    if (target) {
      document.getElementById('grantModalLabel').textContent = target.dataset.title || 'Grant Title';
      document.getElementById('grantModalBody').textContent = target.dataset.text || '';
      document.getElementById('grantModalLink').href = target.dataset.url || '#';
    }
  });
});
