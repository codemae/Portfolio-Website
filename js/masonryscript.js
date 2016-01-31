$(document).ready(function() {

	// Initialize Masonry
	$('#masonry-grid').masonry({
		columnWidth: 300,
		itemSelector: '.grid-item',
		isFitWidth: true,
		isAnimated: !Modernizr.csstransitions
	}).imagesLoaded(function() {
		$(this).masonry('reload');
	});

});