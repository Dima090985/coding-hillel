// const btn = document.querySelector('.js-mobile-menu-btn');
// const menu = document.querySelector('.js-menu');

// btn.addEventListener("click", (e) => {
//     btn.classList.add("active");
//     menu.classList.add("active");
// });

// $(".js-burger").on("click", function () {
// 	if ($(this).hasClass('active')) {
// 		 $(this).removeClass("active");
// 		 $('.menu__list').removeClass('menu-show')
// 	} else {
// 		 $(this).addClass("active");
// 		 $('.menu__list').addClass('menu-show')
// 	}
// });



$('.js-slider').slick({
	infinite: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	// autoplay: true,
	// autoplaySpeed: 1000,
	arrows: false,
	dots: true,
	draggable: false,
	mobileFirst: true,
	// responsive: [
	// 	{
	// 	  breakpoint: 768,
	// 	  settings: {
	// 		 slidesToShow: 1,
	// 		 slidesToScroll: 1,
	// 		 infinite: true,
	// 		 dots: true
	// 	  }
	// 	},
	// 	{
	// 	  breakpoint: 992,
	// 	  settings: {
	// 		 slidesToShow: 1,
	// 		 slidesToScroll: 1
	// 	  }
	// 	},
	// 	{
	// 	  breakpoint: 480,
	// 	  settings: {
	// 		 slidesToShow: 1,
	// 		 slidesToScroll: 1
	// 	  }
	// 	}
	// 	// You can unslick at a given breakpoint now by adding:
	// 	// settings: "unslick"
	// 	// instead of a settings object
	//  ]
});


$('.js-aboutslider').slick({
	infinite: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	// autoplay: true,
	// autoplaySpeed: 1000,
	arrows: false,
	dots: true,
	draggable: false,
	mobileFirst: true,
	responsive: [
		{
		  breakpoint: 768,
		  settings: {
			 slidesToShow: 4,
			 slidesToScroll: 4,
			 infinite: true,
			 dots: true
		  }
		},
	// 	{
	// 	  breakpoint: 992,
	// 	  settings: {
	// 		 slidesToShow: 1,
	// 		 slidesToScroll: 1
	// 	  }
	// 	},
	// 	{
	// 	  breakpoint: 480,
	// 	  settings: {
	// 		 slidesToShow: 1,
	// 		 slidesToScroll: 1
	// 	  }
	// 	}
	// 	// You can unslick at a given breakpoint now by adding:
	// 	// settings: "unslick"
	// 	// instead of a settings object
	 ]
});