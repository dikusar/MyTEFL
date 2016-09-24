import svg4everybody from 'svg4everybody';
import $ from 'jquery';

$(() => {
	svg4everybody();
});

// Accordion
function init_accordion() {
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
init_accordion ();