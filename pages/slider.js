const gallerySlides = [
  {
    img: "https://structured-materials-and-dynamics-lab.storage.c2.liara.space/img/slide1.jpg",
    caption: "Engineering Your Week!",
    link: "news.html?title=Inspiring%20the%20Next%20Generation%20of%20Civil%20Engineers"
  },
  {
    img: "https://structured-materials-and-dynamics-lab.storage.c2.liara.space/img/slide2.jpg",
    caption: "A New Postdoc Opportunities is Available!",
	link: "vag.html",
  },
  {
    img: "https://structured-materials-and-dynamics-lab.storage.c2.liara.space/img/slide3.jpg",
    caption: "A New Collection with JoVE!",
    link: "news.html?title=Invitation%20to%20contribute%20to%20new%20Collection%20with%20JoVE"
	
  },
  {
    img: "https://structured-materials-and-dynamics-lab.storage.c2.liara.space/img/slide4.jpg",
    caption: "UK Acoustic Metamaterial conference",
    link: "news.html?title=UK%20Metamaterials%20Network%20Acoustic%20Metamaterial%20conference"
  },
];

const isMobile = false;

function loadGallery(containerId = "gallery-container") {
  const container = document.getElementById(containerId);

  if (!container || !Array.isArray(gallerySlides)) return;

  let slidesHTML = gallerySlides
    .map(
      (slide) => `
      <div class="swiper-slide">
        <a href="${slide.link}" target="_blank" data-caption="${slide.caption}" data-url="${slide.link}">
          <div class="image" style="background-image: url(${slide.img})">
            <div class="overlay">
              <em class="mdi mdi-magnify-plus"></em>
            </div>
          </div>
        </a>
      </div>
    `
    )
    .join("");

  container.innerHTML = `
    <div class="carousel-gallery">
      <div class="swiper-container">
        <div class="swiper-wrapper pt-4">
          ${slidesHTML}
        </div>
        <div class="swiper-pagination"></div>
      </div>
    </div>
    <div id="slide-caption" style="text-align: center; margin-top: 15px; font-size: 18px; font-weight: bold;"></div>
  `;

  // Re-initialize Swiper and Fancybox if needed
  if (typeof Swiper !== "undefined") {
	  var swiper =  new Swiper('.carousel-gallery .swiper-container', {
      effect: isMobile ? 'slide' : 'coverflow',
      grabCursor: true,
      speed: 900,
      slidesPerView: 4,
      spaceBetween: 10,
	  loop:true,
    centeredSlides: !isMobile,
    simulateTouch: true,
      autoplay: {
        delay: 5000,
      },
	  coverflowEffect: !isMobile ? {
    rotate: 30,
    stretch: 0,
    depth: 50,
    modifier: 1,
    slideShadows: false,
  } : undefined ,
	  // navigation: {                      // ðŸ‘ˆ NEW: enable arrows
    //   nextEl: '.swiper-button-next',
    //   prevEl: '.swiper-button-prev'
    // },
      pagination: {
        el: '.carousel-gallery .swiper-pagination',
        clickable: true
      },
      breakpoints: {
        // when window width is <= 320px
        320: {
          slidesPerView: 1.2,
          spaceBetween: 10
        },
        // when window width is <= 480px
        425: {
          slidesPerView: 1.2,
          spaceBetween: 10
        },
        // when window width is <= 640px
        768: {
          slidesPerView: 2,
          spaceBetween: 10
        }
      },
	  on: {
      init: function () {
        updateCaption(this);
      },
      slideChange: function () {
        updateCaption(this);
      }
    }
    }); 
  
	
   
  }

  // Set initial caption
  document.getElementById("slide-caption").innerHTML = '<a href="'+ (gallerySlides[0]?.link || "") +'" target="_blank">'+ gallerySlides[0]?.caption || "" + '</a>';
}



 function updateCaption(swiperInstance) {
    var activeSlide = $(swiperInstance.slides[swiperInstance.activeIndex]);
    var caption = activeSlide.find('a').attr('data-caption') || '';
    var url = activeSlide.find('a').attr('data-url') || '';
    $('#slide-caption').html('<a href="'+url+'" target="_blank">'+caption+'</a>');
 }





runImmediatelyOrOnDOMReady(function () {
	$(".menu-icon").click(function(){
		$(".overlay").fadeToggle(200);
	   
	});

	$('.btn-clc').on('click', function(){
		$(".overlay").fadeToggle(200);   
		open = false;
	});

	loadGallery();
});