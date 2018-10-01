
$(document).ready(function(){
	 $("#profile_trigger").click(function() {
    $('html, body').animate({
        scrollTop: $("#profile_wrapper").offset().top
    }, 1000);
	});

   $("#skills_trigger").click(function() {
    $('html, body').animate({
        scrollTop: $("#skills_wrapper").offset().top
    }, 1000);
	});
	
	 $("#education_trigger").click(function() {
    $('html, body').animate({
        scrollTop: $("#timeline_wrapper").offset().top
    }, 1000);
	});
	
	 $("#contact_trigger").click(function() {
    $('html, body').animate({
        scrollTop: $("#contact_wrapper").offset().top
    }, 1000);
	});

    $("#pulse-arrow").click(function() {
    $('html, body').animate({
        scrollTop: $("#profile_wrapper").offset().top
    }, 1000);
    });
	
	
});

