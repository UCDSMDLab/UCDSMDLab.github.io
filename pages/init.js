function runImmediatelyOrOnDOMReady(fn) {
	if (document.readyState === "loading") {
		document.addEventListener("DOMContentLoaded", fn);
	} else {
		fn(); // DOM is already loaded, run immediately
	}
}
		
async function loadVersionedScripts(scripts) {
	try {
	  const response = await fetch('./pages/version.json?'+Date.now());
	  const versions = await response.json();

	  scripts.forEach(name => {
		const version = versions[name] || 'latest';
		const script = document.createElement('script');
		script.src = `.pages/${name}.js?v=${version}`;
		document.head.appendChild(script);
	  });
	} catch (err) {
	  console.error('Failed to load versioned scripts:', err);
	}
}