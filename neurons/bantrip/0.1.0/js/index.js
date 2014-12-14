(function(){
function mix(a,b){for(var k in b){a[k]=b[k];}return a;}
var _0 = "bantrip@0.1.0/js/detail.js";
var _1 = "bantrip@0.1.0/js/index.js";
var _2 = "bantrip@0.1.0/js/list.js";
var _3 = "jquery@^1.9.1";
var _4 = "tpl@~0.2.1";
var entries = [_0,_1,_2];
var asyncDepsToMix = {};
var globalMap = asyncDepsToMix;
define(_1, [_3,_4], function(require, exports, module, __filename, __dirname) {
var $ = require('jquery'),
	Tpl = require('tpl'),

	initSearch = function() {

		var listWrap = $('.J_city-list'),
			list = listWrap.find('.con'),
			loading = listWrap.find('.loading'),

			selectList = $('.J_city-select-list'),
			selectIds = [],

			input = $('.J_search-city'),

			tpl = '<?js it.forEach(function(item) { ?><li class="city<?js if(item.selected) { ?> selected<?js } ?>" data-cityid="@{item.cityId}">\
					<span class="icon-add"></span>\
					<a href="" class="name">@{item.cityName}</a>\
					<span class="rec">@{item.amount}个推荐商品</span>\
				</li><?js }); ?>',
			tplFn = Tpl.compile(tpl);


		input.on('keyup', function() {
			var self = $(this),
				keyword = (self.val() + '').trim();

			list.html('');
			loading.show();

			selectList.find('li').each(function(i, item) {
				selectIds.push($(item).attr('data-cityid'));
			});

			$.ajax({
				url: '/ajax/searchCity',
				data: {
					keyword: keyword
				},
				success: function(r) {
					if(r.code == 200) {
						var data = r.result.list,
							html;

						data.forEach(function(item) {
							if(selectIds.indexOf(item.cityId + '') > -1) {
								item.selected = true;
							}
						});

						html = tplFn(data);
						list.html(html);
						loading.hide();
					} else {

					}
				}
			});
			
		});

	},

	initCity = function() {

		var list = $('.J_city-list .con'),
			selectList = $('.J_city-select-list'),
			input = $('.J_search-city');

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
				city = self.parent('.city'),
				cityId = city.attr('data-cityid');

			city.remove();
			list.find('.city[data-cityid= ' + cityId + ']').removeClass('selected');

		});

	};

exports.init = function() {
	initSearch();
	initCity();
};
}, {
    entries:entries,
    map:globalMap
});
})();