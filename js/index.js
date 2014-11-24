var $ = require('jquery'),

	initSearch = function() {

	},

	initCity = function() {

		var list = $('.J_city-list'),
			selectList = $('.J_city-select-list');

		list.on('click', '.city .icon-add', function() {
			var self = $(this),
				city = self.parent('.city'),
				cityId = city.attr('data-cityid'),
				cityName = city.find('.name').text();

			city.addClass('selected');

			$('<li class="city" data-cityid="' + cityId + '"><span class="icon-del">X</span>' + cityName + '</li>').appendTo(selectList);
		});

		selectList.on('click', '.icon-del', function() {
			var self = $(this),
				city = self.parent('.city');

			city.remove();
		});

	};

exports.init = function() {
	initCity();
};