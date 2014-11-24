(function(){
function mix(a,b){for(var k in b){a[k]=b[k];}return a;}
var _0 = "bantrip@0.1.0/js/detail.js";
var _1 = "bantrip@0.1.0/js/index.js";
var _2 = "jquery@^1.9.1";
var entries = [_0,_1];
var asyncDepsToMix = {};
var globalMap = asyncDepsToMix;
define(_1, [_2], function(require, exports, module, __filename, __dirname) {
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
}, {
    entries:entries,
    map:globalMap
});
})();