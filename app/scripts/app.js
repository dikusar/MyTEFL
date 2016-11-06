import svg4everybody from 'svg4everybody';
import $ from 'jquery';
import Swiper from 'swiper';

$(() => {
	svg4everybody();

	const mySwiper = new Swiper('.swiper-container', {
		// Optional parameters
		// loop: true,
		// slidesOffsetBefore: 30,
		// Navigation arrows
		nextButton: '.swiper-button-next',
		prevButton: '.swiper-button-prev'
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
