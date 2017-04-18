
$('#nav-bar-button').click(function() {
	console.log("handler for click called");
	$('.nav-menu').slideToggle();
});

window.onresize = function() {
	if (window.innerWidth >= 770) {
	$('.nav-menu').show();
	}
	if (window.innerWidth <= 769) {
	$('.nav-menu').hide();
	}
};

$("form").submit(function(e) {
	e.preventDefault();
});
