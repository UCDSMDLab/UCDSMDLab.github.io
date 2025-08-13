const footerLinks = [
  {
    name: "ResearchGate",
    href: "https://www.researchgate.net/profile/Muhammad-4",
    type: "image",
    icon: "https://structured-materials-and-dynamics-lab.storage.c2.liara.space/img/ResearchGate_icon_SVG.svg",
    class: "btn btn-light",
  },
  {
    name: "Google Scholar",
    href: "https://scholar.google.com/citations?user=WWV6C8UAAAAJ&hl=en",
    type: "image",
    icon: "https://structured-materials-and-dynamics-lab.storage.c2.liara.space/img/Google_Scholar_logo.svg",
    class: "btn btn-light",
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/@MuhammadGulzari",
    type: "icon",
    iconClass: "bi bi-youtube",
    class: "btn btn-danger",
  },
  {
    name: "X",
    href: "https://x.com/MGulzari8",
    type: "icon",
    iconClass: "bi bi-twitter-x",
    class: "btn btn-dark",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/muhammad-gulzari-ph-d-832251210/",
    type: "icon",
    iconClass: "bi bi-linkedin",
    class: "btn btn-info text-white",
    style: "background-color: #0a66c2; border: none;",
  },
];

const footerTextLines = [
  `<a href="https://people.ucd.ie/muhammad.gulzari"><u>Muhammad Gulzari</u></a> | <a href="https://www.ucd.ie/"><u>UCD</u></a> | <a href="https://www.ucd.ie/civileng/"><u>CIVILENG</u></a>`,
  `University College Dublin, School of Civil Engineering, Richview Newstead Belfield Dublin 4.`,
  `&copy; 2025 Structured Materials and Dynamics Lab - All Rights Reserved.`
];

function renderFooter() {
  const footer = document.getElementById("footer");

  if (!footer) return;

  const socialIcons = footerLinks.map(link => {
    const commonStyle = 'width: 48px; height: 48px;';
    const style = link.style ? `${commonStyle} ${link.style}` : commonStyle;

    if (link.type === 'image') {
      return `
        <a href="${link.href}" target="_blank" class="${link.class} rounded-circle-2 d-flex align-items-center justify-content-center" style="${style}">
          <img src="${link.icon}" alt="${link.name}"/>
        </a>
      `;
    } else {
      return `
        <a href="${link.href}" target="_blank" class="${link.class} rounded-circle-2 d-flex align-items-center justify-content-center" style="${style}">
          <i class="${link.iconClass}" style="font-size: 1.2rem;"></i>
        </a>
      `;
    }
  }).join('\n');

  const textLines = footerTextLines.map(line => `<p class="mb-1">${line}</p>`).join('\n');

  footer.innerHTML = `
    <footer class="glass-footer text-center py-4 m-0">
      <div class="text-center mb-3">
        <div class="d-flex justify-content-center gap-3 flex-wrap">
          ${socialIcons}
        </div>
      </div>
      ${textLines}
    </footer>
	
	<div class="loader">
	  <div class="loader-inner"></div>
	</div>
  `;
}

runImmediatelyOrOnDOMReady(function () {
    renderFooter(); 
	setTimeout(function() {
		const loader = document.querySelector('.loader');
		loader.style.opacity = '0';
		loader.style.visibility = 'hidden';
		// Optional: remove the loader from DOM completely
		setTimeout(() => loader.remove(), 500); // wait for fade out to complete
	}, 5000); // 5000 milliseconds = 5 seconds
});