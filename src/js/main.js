let burger = document.querySelector(".burger")
let nav = document.querySelector(".nav")
let header = document.querySelector(".header")
let dropdowns = document.querySelectorAll(".dropdown")

// Open navigation on click to burger
burger.addEventListener("click", () => {
	burger.classList.toggle("burger_active");
	nav.classList.toggle("nav_open");
})

// Manipulations with header classes on scroll
var scrollPosition = window.scrollY;

window.addEventListener("scroll", () => {

	scrollPosition = window.scrollY;

	if (scrollPosition >= 30) {
		header.classList.add("header_scroll_down");
	} else {
		header.classList.remove("header_scroll_down");
	}

});

// Projects slider =====>
const projectsSlider = new Swiper(".projects__slider", {
	slidesPerView: 3,
	spaceBetween: 32,
	speed: 1000,
	navigation: {
		nextEl: ".projects-button-next",
		prevEl: ".projects-button-prev",
	},
	pagination: {
		el: ".projects-pagination",
	},
	breakpoints: {
		320: {
			slidesPerView: 1,
			spaceBetween: 32
		},
		577: {
			slidesPerView: 2,
			spaceBetween: 32
		},
		992: {
			slidesPerView: 3,
			spaceBetween: 32
		},
	}
})

// Clients slider =====>
const clientsSlider = new Swiper(".clients__slider", {
	slidesPerView: 3,
	spaceBetween: 32,
	speed: 1000,
	navigation: {
		nextEl: ".clients-button-next",
		prevEl: ".clients-button-prev",
	},
	pagination: {
		el: ".clients-pagination",
	},
	breakpoints: {
		320: {
			slidesPerView: 1,
			spaceBetween: 32
		},
		577: {
			slidesPerView: 2,
			spaceBetween: 32
		},
	}
})

// Auto resize textarea =====>
let textarea = document.querySelectorAll('textarea');

if (textarea) {
	textarea.forEach(item => {
		item.addEventListener('keydown', autosizeTextarea);
	})
} else {
	null
}

function autosizeTextarea() {
	let el = this;
	setTimeout(function () {
		el.style.cssText = "height:auto; padding:0";
		el.style.cssText = "-moz-box-sizing:content-box";
		el.style.cssText = "height:" + el.scrollHeight  + "px";
	}, 0);
}

if (window.matchMedia("(max-width: 992px)").matches) {
	// Slide toggle functions =====>
	let transitionTime = 0.3;

	Array.prototype.forEach.call(dropdowns, function(v, i, a){
		v.addEventListener("click", function () {
			let t = this;
			let target = t.querySelector(".dropdown__item");

			if (!t.classList.contains("js-slide")) {
				jSlideDown(t, target);
			} else {
				jSlideUp(t, target);
			}

			Array.prototype.forEach.call(a, function(sibE, sibI, sibA){
				if(i !== sibI){
					let target = sibE.querySelector(".dropdown__item");
					jSlideUp(sibE, target);
				}
			});

			target.addEventListener("click", function(e){
				e.stopPropagation();
			});
		});
	});

	function jSlideUp(t, target) {
		t.classList.remove("dropdown_active");
		if (t.classList.contains("js-slide")) {
			target.style.overflow = "hidden";
			let h = target.clientHeight;
			target.style.height = h + "px";

			setTimeout(function() {
				target.style.height = "0px";
			}, 0);

			setTimeout(function() {
				t.classList.remove("js-slide");
				t.classList.remove("dropdown_active");
				target.removeAttribute("style");
			}, (transitionTime * 1000));
		}
	}

	function jSlideDown(t, target) {
		t.classList.add("dropdown_active");
		t.classList.add("js-slide");
		target.style.display = "block";
		let h = target.clientHeight;
		target.style.height = "0px";

		setTimeout(function() {
			target.style.transition = "height "+ transitionTime +"s";
			target.style.height = h + "px";
		}, 0);

		if (!t.classList.contains("dropdown_active")) {
			setTimeout(function() {
				target.style.removeProperty("height");
			}, (transitionTime * 1000));
		}
	}

} else {

	// Dropdown"s
	dropdowns.forEach(dropdown => {
		dropdown.addEventListener("mouseover", () => {
			dropdown.classList.add("dropdown_active")
		})
		dropdown.addEventListener("mouseleave", () => {
			dropdown.classList.remove("dropdown_active")
		})
	})

}