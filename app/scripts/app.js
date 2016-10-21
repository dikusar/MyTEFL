import svg4everybody from 'svg4everybody';
import $ from 'jquery';

$(() => {
	svg4everybody();
});

function mobileMenuHandler() {
	const mobIcon = '.js-nav-bar-menu-mobile-icon';
	const mobMenu = '.js-nav-bar-menu-list-mobile';
	const mobMenuDislayClass = 'display';

	$(mobIcon).on('click tap', ()=> {
		$(mobMenu).toggleClass(mobMenuDislayClass);
	});

	$(document).on("click tap", e=> {
		if (!$(mobIcon).is(e.target)  && !$(mobMenu).is(e.target) && $(mobMenu).has(e.target).length === 0) {
			$(mobMenu).removeClass(mobMenuDislayClass);
		}
	});
}

mobileMenuHandler();
 
// Accordion
function initAccordion() {
	$(".accordion").each( function() {
		var allPanels = $(this).children('.content').hide();
		allPanels.first().slideDown("easeOutExpo");
		$(this).children('.content-title').first().addClass("active");

		$(this).children('.content-title').on('click', function() {

			var current = $(this).next(".content");
			$(this).parent().children('.content-title').removeClass("active");
			$(this).addClass("active");
			allPanels.not(current).slideUp("easeInExpo");
			$(this).next().slideDown("easeOutExpo");
			
			return false;
			
		});
	})
   
}
initAccordion();