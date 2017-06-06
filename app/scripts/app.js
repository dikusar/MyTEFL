import svg4everybody from 'svg4everybody';
import $ from 'jquery';
import Swiper from 'swiper';

$(() => {
	svg4everybody();

	const baseSwiper = new Swiper('.js-swiper-container-base', {
		nextButton: '.swiper-button-next',
		prevButton: '.swiper-button-prev',
		pagination: '.swiper-pagination',
		paginationType: 'bullets',
		paginationClickable: true
	});

	const priseExtendSwiper = new Swiper('.js-swiper-container-prise-extend', {
		scrollbar: '.swiper-scrollbar',
		direction: 'horizontal',
		slidesPerView: 4.2,
		mousewheelControl: true,
		freeMode: true,
		scrollbarHide: false,

		// Responsive breakpoints
		breakpoints: {
			740: {
				slidesPerView: 1
			},
			970: {
				slidesPerView: 2
			},
			1240: {
				slidesPerView: 3
			}
		}
	});

	$(window).scroll(function () {
		const screenWidth = $(window).width();
		const $navBar = $('.js-nav-bar');
		const $navBarHeading = $('.js-nav-bar-heading');
		const fixedClass = 'nav-bar_position_fixed';

		if ($(this).scrollTop() > 3) {
			$navBar.addClass(fixedClass);
			if (screenWidth > 975) {
				$navBarHeading.slideUp();
			}
		}else {
			$navBar.removeClass(fixedClass);
			if (screenWidth > 975) {
				$navBarHeading.slideDown();
			}
		}
	});

});

// Mobile menu
function mobileMenuHandler() {
	const mobIcon = '.js-nav-bar-menu-mobile-icon';
	const mobMenu = '.js-nav-bar-menu-list-mobile';
	const mobMenuDislayClass = 'display';

	$(mobIcon).on('click tap', () => {
		$(mobMenu).toggleClass(mobMenuDislayClass);
	});

	$(document).on('click tap', e => {
		if (!$(mobIcon).is(e.target) && !$(mobMenu).is(e.target) && $(mobMenu).has(e.target).length === 0) {
			$(mobMenu).removeClass(mobMenuDislayClass);
		}
	});
}

mobileMenuHandler();

// Accordion
function initAccordion() {
	$('.accordion').each( function () {
		const allPanels = $(this).children('.content').hide();

		$(this).children('.content-title').on('click', function () {
			const current = $(this).next('.content');
			$(this).parent().children('.content-title').not(this).removeClass('active');
			allPanels.not(current).slideUp('easeInExpo');
			current.toggleClass('active');
			$(this).toggleClass('active');
			$(this).next().slideToggle('easeOutExpo');
			return false;
		});
	});
}
initAccordion();
