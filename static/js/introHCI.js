'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$("#testjs").click(function(e) {
		$(this).text("At the beginning of the course, we awarded you 100% for the professionalism portion of your course grade assuming that all interactions would be professional. Your interaction above indicates that our initial prediction of your professionalism was incorrect. I've made an adjustment in your score to reflect the error in our assumptions. If you'd like to explain how your question above demonstrates consideration, patience, and professionalism, please let me know.");
		$(this).toggleClass("active");
	});

$("a.thumbnail").click(projectClick);

function projectClick(e){
	e.preventDefault();

	$(this).css("background-color", "#7fff00");
	var containingProject = $(this).closest(".project");
	var description = $(containingProject).find(".project-description");

	if(description.length == 0)
	{
		$(containingProject).append("<div class='project-description'><p>Description of the project.</p></div>");
		$(description).fadeIn();
		$(description).show();
		$(description).toggle();
	}
	else
	{
		description.html("<p>Stop clicking on me... You just did it at " + (new Date()) + "</p>");
	}
}

	// Add any additional listeners here
	// example: $("#div-id").click(functionToCall);
}