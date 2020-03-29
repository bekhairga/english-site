$(document).ready(function() {

	$('.popup').magnificPopup({
		type: 'image'
	});
	$('.popup_c').magnificPopup();

	function wResize() {
		$("header").css("min-height", $(window).height());
	}
	wResize();
	$(window).resize(function() {
		wResize();
	});

	$(".top-phone .wrapper .tab")
		.click(function() {
			$(".top-phone .wrapper .tab")
				.removeClass("active")
				.eq($(this).index())
				.addClass("active");
			$(".top-phone .tab-item")
				.hide()
				.eq($(this).index())
				.fadeIn();
		})
		.eq(0)
		.addClass("active");

	$(".bottom-phone .wrapper .tab")
		.click(function() {
			$(".bottom-phone .wrapper .tab")
				.removeClass("active")
				.eq($(this).index())
				.addClass("active");
			$(".bottom-phone .tab-item")
				.hide()
				.eq($(this).index())
				.fadeIn();
		})
		.eq(0)
		.addClass("active");

	$(".tabs-header .wrapper .tab")
		.click(function() {
			$(".tabs-header .wrapper .tab")
				.removeClass("active")
				.eq($(this).index())
				.addClass("active");
			$(".tabs-header .tab-item")
				.hide()
				.eq($(this).index())
				.fadeIn();
		})
		.eq(0)
		.addClass("active");
	$(".contacts_top .tab")
		.click(function() {
			$(".contacts_top .tab")
				.removeClass("active")
				.eq($(this).index())
				.addClass("active");
			$(".s_contacts .tab-item")
				.hide()
				.eq($(this).index())
				.fadeIn();
		})
		.eq(0)
		.addClass("active");

	//for menu and parallax
	$('.owl-carousel').owlCarousel({
		loop: true,
		dots: true,
		responsiveClass: true,
		responsive: {
			0: {
				items: 1,
				nav: true
			},
		},
		navText: ""
	});
	$.stellar({
		responsive: true,
		horizontalOffset: 60
	});
	//Цели для Яндекс.Метрики и Google Analytics
	$(".count_element").on("click", function() {
		ga("send", "event", "goal", "goal");
		yaCounterXXXXXXXX.reachGoal("goal");
		return true;
	});

	//SVG Fallback
	if (!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this)
				.attr("src")
				.replace(".svg", ".png");
		});
	}

	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
	$("form").submit(function(e) {
		var ths = $(this);
		e.preventDefault;
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			alert("Спасибо за заявку!");
			setTimeout(function() {
				var magnificPopup = $.magnificPopup.instance;
				magnificPopup.close();
				ths.trigger('reset')
				$.fancybox.close();
			}, 1000);
		});
	});
});
$(window).load(function() {
	$(".top-header h1").animated("fadeInDown", "fadeInDown");
	$(".top-header h2").animated("fadeInUp", "fadeInUp");
	$(".profi-item").animated("fadeInRight", "fadeOut");
	$(".s_profi form").animated("zoomInRight", "fadeOut");
	$(".s_back h3").animated("fadeInUp", "fadeOut");
	$("footer").animated("fadeInUp", "fadeOut");
})