export default () => {
	$(window).on("scroll resize", function() {
		j(".x_order_form, footer");
		i()
	});

	function j() {
		var q = $(".banner"),
			m = $(".main-banner"),
			l = $(window).scrollTop(),
			s = l + $(window).height(),
			p = $(window).width();
		var u = 0;
		for (var k = 0; k < arguments.length; k++) {
			$(arguments[k]).each(function(w, r) {
				var o = $(r).offset().top,
					x = o + $(r).outerHeight(),
					v = $(r).offset().left,
					n = v + $(r).width();
				o <= s && x >= l && v <= p && n >= 0 && (u += 1)
			})
		}
		l <= 100 || u > 0 ? q.fadeOut() : q.fadeIn().css({
			bottom: m.outerHeight()
		})
	}

	function i() {
		const k = document.querySelector(".main-banner"),
			l = document.querySelector(".banner");
		let redBannerHeight;
		k ? redBannerHeight = k.clientHeight : k;
		redBannerHeight ? l.style.bottom = redBannerHeight - 1 + "px" : l.style.bottom = 0 + "px"
	}
$('.info__link').on( 'click', function(){ 
    var el = $(this);
    var dest = el.attr('href'); 
    if(dest !== undefined && dest !== '') { 
        $('html').animate({ 
            scrollTop: $(dest).offset().top 
        }, 1000 
        );
    }
    return false;
});
};