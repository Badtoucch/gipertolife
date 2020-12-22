

	export default () => {
		let windowHeight = $(window).height();
	
		function animationA(params) {
			$(params).each(function () {
				let self = $(this),
					height;
				if (self.height() >= windowHeight) {
					height = self.offset().top + windowHeight - 100;
				} else {
					height = self.offset().top + self.height();
				}
				if ($(document).scrollTop() + windowHeight >= height) {
					self.addClass("active");
				}
				// else {
				// 	self.removeClass("active");
				// }
			});
		}
		$(document).on("scroll", function () {
			animationA(".research-item__info");
			animationA(".research__pie");
			// animationA(".week-item__icon");
			// animationA(".certificates__item--center");
			// animationA(".order-box__img");
			animationA(".research-stat__number");
		});


	const oldPrice = document.querySelectorAll(".x_price_previous");
        const newPrice = document.querySelectorAll(".x_price_current");

	function delimiter(price) {
		for (let i = 0; i < price.length; i++) {
			price[i].textContent = price[i].textContent.replace(/(\d)(?=(\d{3})+(\D|$))/g, '$1.');
		}
	}
	delimiter(oldPrice);
	delimiter(newPrice);
};
