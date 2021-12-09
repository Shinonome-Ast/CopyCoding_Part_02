var _window = $(window),
	_header = $(".top-header"),
	heroBottom;

_window.on("scroll", function () {
	heroBottom = $(".hero").offset();
	if (_window.scrollTop() > heroBottom.top) {
		_header.addClass("transform");
	} else {
		_header.removeClass("transform");
	}
});

_window.trigger("scroll");

$(function () {
	$(".sp-menu ul li a").on("click", function (e) {
		$("#menu-btn-check").prop("checked", false);
	});
});
