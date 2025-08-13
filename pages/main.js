function renderGroupDescription(containerId = "description-container") {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = `
  	<div class="loader">
	  <div class="loader-inner"></div>
	</div>
    <div class="mt-2 mb-2">
      <div class="w-100">
        <div class="d-block p-3 w-100">
          <p class="card-text" style="color: #1c1e32;text-align: justify;">
            Our group explores the intersection of engineering mechanics, structural dynamics, applied physics, applied mathematics and wave propagation in artificially engineered structured materials—known as phononic crystals, acoustic/elastic metamaterials and smart architected materials. Through advanced computational modeling, linear and nonlinear dynamics, finite element analysis, and experimentation, we investigate acoustic and elastic wave manipulation, vibration control, noise insulation, and lightweight high-strength energy absorption systems.
            <br/><br/>
            Current research focuses on nonlinear metamaterials, nonreciprocal wave propagation, and temporal metamaterials, with applications in adaptive structures, signal processing, and next-generation vibration and noise control technologies. By bridging theoretical mechanics with applied engineering, we aim to design and develop novel structured materials with tailored dynamic properties for real-world challenges.
            <br/><br/>
            Join us in pushing the boundaries of metamaterials for next-generation engineering solutions!
          </p>
        </div>
      </div>
    </div>
  `;
}

function renderLabHeader(containerId = "lab-header-container") {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = `
    <div class="main" id="beach">
      <div class="left-side">
        <div class="main-wrapper">
          <h1 class="main-title">Structured Materials and Dynamics Lab</h1>
          <h3 class="new-h3txt main-header text-center mt-4">
            <img src="https://structured-materials-and-dynamics-lab.storage.c2.liara.space/img/ucd-logo-removebg-preview.png" width="64px" />
            <span>University College Dublin</span>
          </h3>
        </div>
        <div class="main-content">
          <div class="main-content__title mt-4 text-center">
            Welcome to the Structured Materials and Dynamics Lab at UCD School of Civil Engineering
          </div>
          <div class="text-center mt-4">
            <svg width="28px" style="animation: arrow 1.5s infinite;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="1.7" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <line x1="-5" y1="12" x2="19" y2="12" />
              <line x1="15" y1="16" x2="19" y2="12" />
              <line x1="15" y1="8" x2="19" y2="12" />
            </svg>
          </div>
        </div>
      </div>
      <div class="center">
        <div class="right-side__img"></div>
      </div>
    </div>
  `;
}
 
 runImmediatelyOrOnDOMReady(function () {
    renderGroupDescription(); 
	renderLabHeader(); 
});