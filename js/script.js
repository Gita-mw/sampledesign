/*==================================================

Pagetop
==================================================*/

$(function() {
	var topBtn = $('#pagetop');
	topBtn.hide();
	$(window).scroll(function () {
		if ($(this).scrollTop() > 200) {
			topBtn.fadeIn();
		} else {
			topBtn.fadeOut();
		}
	});
	topBtn.click(function () {
		$('body,html').animate({
		scrollTop: 0
		}, 500);
		return false;
	});
});



/*==================================================

Smooth scroll
==================================================*/

$(function(){
	$('a[href^=#]').click(function() {
		var speed = 400; // ミリ秒
		var href= $(this).attr("href");
		var target = $(href == "#" || href == "" ? 'html' : href);
		var position = target.offset().top;
		$('body,html').animate({scrollTop:position}, speed, 'swing');
		return false;
	});
});


$(function(){
	// IEでのヘッダーfixed時のバグ対策
	if(navigator.userAgent.match(/MSIE 10/i) || navigator.userAgent.match(/Trident\/7\./) || navigator.userAgent.match(/Edge\/12\./)) {
		$('body').on("mousewheel", function () {
			event.preventDefault();
			var wd = event.wheelDelta;
			var csp = window.pageYOffset;
			window.scrollTo(0, csp - wd);
		});
	}
});



/*==================================================

TAB/SP　gnav
==================================================*/
jQuery(document).ready(function() {
	$('#menuBtn').click(function() {
		$('body').toggleClass('opened');
	});
});



/*==================================================

Exchange imgs
==================================================*/

$(window).on('load resize', function(){

	var wid = window.innerWidth;
	
	//pc,sp
	if( wid < 600 ){
		$('.exchange_sp').each(function(){
			$(this).attr("src",$(this).attr("src").replace('_pc', '_sp'));
		});
	} else if( wid > 600 ){
		$('.exchange_sp').each(function(){
			$(this).attr("src",$(this).attr("src").replace('_sp', '_pc'));
		});
	}

});